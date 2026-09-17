-- Tangocard SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("tangocard_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local TangocardSDK = {}
TangocardSDK.__index = TangocardSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

TangocardSDK._make_feature = _make_feature


function TangocardSDK.new(options)
  local self = setmetatable({}, TangocardSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: debug
  -- feature: idempotency
  -- feature: metrics
  -- feature: paging
  -- feature: ratelimit
  -- feature: retry
  -- feature: test
  -- feature: timeout


  return self
end


function TangocardSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function TangocardSDK:get_utility()
  return Utility.copy(self._utility)
end


function TangocardSDK:get_root_ctx()
  return self._rootctx
end


function TangocardSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function TangocardSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function TangocardSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function TangocardSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "TangocardSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function TangocardSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function TangocardSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "TangocardSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:Account():list() / client:Account():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:Account(data)
  local EntityMod = require("entity.account_entity")
  if data == nil then
    if self._account == nil then
      self._account = EntityMod.new(self, nil)
    end
    return self._account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AddCommentEscalation():list() / client:AddCommentEscalation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:AddCommentEscalation(data)
  local EntityMod = require("entity.add_comment_escalation_entity")
  if data == nil then
    if self._add_comment_escalation == nil then
      self._add_comment_escalation = EntityMod.new(self, nil)
    end
    return self._add_comment_escalation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AllEventType():list() / client:AllEventType():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:AllEventType(data)
  local EntityMod = require("entity.all_event_type_entity")
  if data == nil then
    if self._all_event_type == nil then
      self._all_event_type = EntityMod.new(self, nil)
    end
    return self._all_event_type
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AsyncOrder():list() / client:AsyncOrder():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:AsyncOrder(data)
  local EntityMod = require("entity.async_order_entity")
  if data == nil then
    if self._async_order == nil then
      self._async_order = EntityMod.new(self, nil)
    end
    return self._async_order
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AsyncOrderDetailView():list() / client:AsyncOrderDetailView():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:AsyncOrderDetailView(data)
  local EntityMod = require("entity.async_order_detail_view_entity")
  if data == nil then
    if self._async_order_detail_view == nil then
      self._async_order_detail_view = EntityMod.new(self, nil)
    end
    return self._async_order_detail_view
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AsyncOrderLineItemsView():list() / client:AsyncOrderLineItemsView():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:AsyncOrderLineItemsView(data)
  local EntityMod = require("entity.async_order_line_items_view_entity")
  if data == nil then
    if self._async_order_line_items_view == nil then
      self._async_order_line_items_view = EntityMod.new(self, nil)
    end
    return self._async_order_line_items_view
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AsyncReasonCodesView():list() / client:AsyncReasonCodesView():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:AsyncReasonCodesView(data)
  local EntityMod = require("entity.async_reason_codes_view_entity")
  if data == nil then
    if self._async_reason_codes_view == nil then
      self._async_reason_codes_view = EntityMod.new(self, nil)
    end
    return self._async_reason_codes_view
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AsyncUpdateLineItemView():list() / client:AsyncUpdateLineItemView():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:AsyncUpdateLineItemView(data)
  local EntityMod = require("entity.async_update_line_item_view_entity")
  if data == nil then
    if self._async_update_line_item_view == nil then
      self._async_update_line_item_view = EntityMod.new(self, nil)
    end
    return self._async_update_line_item_view
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BalanceAlertView():list() / client:BalanceAlertView():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:BalanceAlertView(data)
  local EntityMod = require("entity.balance_alert_view_entity")
  if data == nil then
    if self._balance_alert_view == nil then
      self._balance_alert_view = EntityMod.new(self, nil)
    end
    return self._balance_alert_view
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BrandCategoriesView():list() / client:BrandCategoriesView():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:BrandCategoriesView(data)
  local EntityMod = require("entity.brand_categories_view_entity")
  if data == nil then
    if self._brand_categories_view == nil then
      self._brand_categories_view = EntityMod.new(self, nil)
    end
    return self._brand_categories_view
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Catalog():list() / client:Catalog():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:Catalog(data)
  local EntityMod = require("entity.catalog_entity")
  if data == nil then
    if self._catalog == nil then
      self._catalog = EntityMod.new(self, nil)
    end
    return self._catalog
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ChoiceProduct():list() / client:ChoiceProduct():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:ChoiceProduct(data)
  local EntityMod = require("entity.choice_product_entity")
  if data == nil then
    if self._choice_product == nil then
      self._choice_product = EntityMod.new(self, nil)
    end
    return self._choice_product
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CountryViewSummary():list() / client:CountryViewSummary():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:CountryViewSummary(data)
  local EntityMod = require("entity.country_view_summary_entity")
  if data == nil then
    if self._country_view_summary == nil then
      self._country_view_summary = EntityMod.new(self, nil)
    end
    return self._country_view_summary
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreateAccountCriterion():list() / client:CreateAccountCriterion():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:CreateAccountCriterion(data)
  local EntityMod = require("entity.create_account_criterion_entity")
  if data == nil then
    if self._create_account_criterion == nil then
      self._create_account_criterion = EntityMod.new(self, nil)
    end
    return self._create_account_criterion
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreateCustomerCriterion():list() / client:CreateCustomerCriterion():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:CreateCustomerCriterion(data)
  local EntityMod = require("entity.create_customer_criterion_entity")
  if data == nil then
    if self._create_customer_criterion == nil then
      self._create_customer_criterion = EntityMod.new(self, nil)
    end
    return self._create_customer_criterion
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CredentialTypeView():list() / client:CredentialTypeView():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:CredentialTypeView(data)
  local EntityMod = require("entity.credential_type_view_entity")
  if data == nil then
    if self._credential_type_view == nil then
      self._credential_type_view = EntityMod.new(self, nil)
    end
    return self._credential_type_view
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreditCard():list() / client:CreditCard():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:CreditCard(data)
  local EntityMod = require("entity.credit_card_entity")
  if data == nil then
    if self._credit_card == nil then
      self._credit_card = EntityMod.new(self, nil)
    end
    return self._credit_card
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreditCardDeposit():list() / client:CreditCardDeposit():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:CreditCardDeposit(data)
  local EntityMod = require("entity.credit_card_deposit_entity")
  if data == nil then
    if self._credit_card_deposit == nil then
      self._credit_card_deposit = EntityMod.new(self, nil)
    end
    return self._credit_card_deposit
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreditCardUnregister():list() / client:CreditCardUnregister():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:CreditCardUnregister(data)
  local EntityMod = require("entity.credit_card_unregister_entity")
  if data == nil then
    if self._credit_card_unregister == nil then
      self._credit_card_unregister = EntityMod.new(self, nil)
    end
    return self._credit_card_unregister
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Customer():list() / client:Customer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:Customer(data)
  local EntityMod = require("entity.customer_entity")
  if data == nil then
    if self._customer == nil then
      self._customer = EntityMod.new(self, nil)
    end
    return self._customer
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EmailTemplateListView():list() / client:EmailTemplateListView():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:EmailTemplateListView(data)
  local EntityMod = require("entity.email_template_list_view_entity")
  if data == nil then
    if self._email_template_list_view == nil then
      self._email_template_list_view = EntityMod.new(self, nil)
    end
    return self._email_template_list_view
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EmailTemplateViewVerbose():list() / client:EmailTemplateViewVerbose():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:EmailTemplateViewVerbose(data)
  local EntityMod = require("entity.email_template_view_verbose_entity")
  if data == nil then
    if self._email_template_view_verbose == nil then
      self._email_template_view_verbose = EntityMod.new(self, nil)
    end
    return self._email_template_view_verbose
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EmbeddableResponseDto():list() / client:EmbeddableResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:EmbeddableResponseDto(data)
  local EntityMod = require("entity.embeddable_response_dto_entity")
  if data == nil then
    if self._embeddable_response_dto == nil then
      self._embeddable_response_dto = EntityMod.new(self, nil)
    end
    return self._embeddable_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ExchangeRatesWithDisclaimer():list() / client:ExchangeRatesWithDisclaimer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:ExchangeRatesWithDisclaimer(data)
  local EntityMod = require("entity.exchange_rates_with_disclaimer_entity")
  if data == nil then
    if self._exchange_rates_with_disclaimer == nil then
      self._exchange_rates_with_disclaimer = EntityMod.new(self, nil)
    end
    return self._exchange_rates_with_disclaimer
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LineItem():list() / client:LineItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:LineItem(data)
  local EntityMod = require("entity.line_item_entity")
  if data == nil then
    if self._line_item == nil then
      self._line_item = EntityMod.new(self, nil)
    end
    return self._line_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LowBalanceAlertListView():list() / client:LowBalanceAlertListView():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:LowBalanceAlertListView(data)
  local EntityMod = require("entity.low_balance_alert_list_view_entity")
  if data == nil then
    if self._low_balance_alert_list_view == nil then
      self._low_balance_alert_list_view = EntityMod.new(self, nil)
    end
    return self._low_balance_alert_list_view
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LowBalanceAlertView():list() / client:LowBalanceAlertView():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:LowBalanceAlertView(data)
  local EntityMod = require("entity.low_balance_alert_view_entity")
  if data == nil then
    if self._low_balance_alert_view == nil then
      self._low_balance_alert_view = EntityMod.new(self, nil)
    end
    return self._low_balance_alert_view
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MobileCountry():list() / client:MobileCountry():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:MobileCountry(data)
  local EntityMod = require("entity.mobile_country_entity")
  if data == nil then
    if self._mobile_country == nil then
      self._mobile_country = EntityMod.new(self, nil)
    end
    return self._mobile_country
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:N14Webhook():list() / client:N14Webhook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:N14Webhook(data)
  local EntityMod = require("entity.n14_webhook_entity")
  if data == nil then
    if self._n14_webhook == nil then
      self._n14_webhook = EntityMod.new(self, nil)
    end
    return self._n14_webhook
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:N1Customer():list() / client:N1Customer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:N1Customer(data)
  local EntityMod = require("entity.n1_customer_entity")
  if data == nil then
    if self._n1_customer == nil then
      self._n1_customer = EntityMod.new(self, nil)
    end
    return self._n1_customer
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:N2Account():list() / client:N2Account():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:N2Account(data)
  local EntityMod = require("entity.n2_account_entity")
  if data == nil then
    if self._n2_account == nil then
      self._n2_account = EntityMod.new(self, nil)
    end
    return self._n2_account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:N3Fund():list() / client:N3Fund():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:N3Fund(data)
  local EntityMod = require("entity.n3_fund_entity")
  if data == nil then
    if self._n3_fund == nil then
      self._n3_fund = EntityMod.new(self, nil)
    end
    return self._n3_fund
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:N8LineItem():list() / client:N8LineItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:N8LineItem(data)
  local EntityMod = require("entity.n8_line_item_entity")
  if data == nil then
    if self._n8_line_item == nil then
      self._n8_line_item = EntityMod.new(self, nil)
    end
    return self._n8_line_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:N9DigitalTemplate():list() / client:N9DigitalTemplate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:N9DigitalTemplate(data)
  local EntityMod = require("entity.n9_digital_template_entity")
  if data == nil then
    if self._n9_digital_template == nil then
      self._n9_digital_template = EntityMod.new(self, nil)
    end
    return self._n9_digital_template
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Order():list() / client:Order():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:Order(data)
  local EntityMod = require("entity.order_entity")
  if data == nil then
    if self._order == nil then
      self._order = EntityMod.new(self, nil)
    end
    return self._order
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrderViewSummary():list() / client:OrderViewSummary():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:OrderViewSummary(data)
  local EntityMod = require("entity.order_view_summary_entity")
  if data == nil then
    if self._order_view_summary == nil then
      self._order_view_summary = EntityMod.new(self, nil)
    end
    return self._order_view_summary
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PrepaidCardInfo():list() / client:PrepaidCardInfo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:PrepaidCardInfo(data)
  local EntityMod = require("entity.prepaid_card_info_entity")
  if data == nil then
    if self._prepaid_card_info == nil then
      self._prepaid_card_info = EntityMod.new(self, nil)
    end
    return self._prepaid_card_info
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PrepaidCardTransaction():list() / client:PrepaidCardTransaction():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:PrepaidCardTransaction(data)
  local EntityMod = require("entity.prepaid_card_transaction_entity")
  if data == nil then
    if self._prepaid_card_transaction == nil then
      self._prepaid_card_transaction = EntityMod.new(self, nil)
    end
    return self._prepaid_card_transaction
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ReissueCard():list() / client:ReissueCard():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:ReissueCard(data)
  local EntityMod = require("entity.reissue_card_entity")
  if data == nil then
    if self._reissue_card == nil then
      self._reissue_card = EntityMod.new(self, nil)
    end
    return self._reissue_card
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ReplacementReason():list() / client:ReplacementReason():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:ReplacementReason(data)
  local EntityMod = require("entity.replacement_reason_entity")
  if data == nil then
    if self._replacement_reason == nil then
      self._replacement_reason = EntityMod.new(self, nil)
    end
    return self._replacement_reason
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Resend():list() / client:Resend():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:Resend(data)
  local EntityMod = require("entity.resend_entity")
  if data == nil then
    if self._resend == nil then
      self._resend = EntityMod.new(self, nil)
    end
    return self._resend
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RewardReasonsMap():list() / client:RewardReasonsMap():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:RewardReasonsMap(data)
  local EntityMod = require("entity.reward_reasons_map_entity")
  if data == nil then
    if self._reward_reasons_map == nil then
      self._reward_reasons_map = EntityMod.new(self, nil)
    end
    return self._reward_reasons_map
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TransferFund():list() / client:TransferFund():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:TransferFund(data)
  local EntityMod = require("entity.transfer_fund_entity")
  if data == nil then
    if self._transfer_fund == nil then
      self._transfer_fund = EntityMod.new(self, nil)
    end
    return self._transfer_fund
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UpdateAccount():list() / client:UpdateAccount():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:UpdateAccount(data)
  local EntityMod = require("entity.update_account_entity")
  if data == nil then
    if self._update_account == nil then
      self._update_account = EntityMod.new(self, nil)
    end
    return self._update_account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UpdateWebhookSubscriptionResponseView():list() / client:UpdateWebhookSubscriptionResponseView():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:UpdateWebhookSubscriptionResponseView(data)
  local EntityMod = require("entity.update_webhook_subscription_response_view_entity")
  if data == nil then
    if self._update_webhook_subscription_response_view == nil then
      self._update_webhook_subscription_response_view = EntityMod.new(self, nil)
    end
    return self._update_webhook_subscription_response_view
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Webhook():list() / client:Webhook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TangocardSDK:Webhook(data)
  local EntityMod = require("entity.webhook_entity")
  if data == nil then
    if self._webhook == nil then
      self._webhook = EntityMod.new(self, nil)
    end
    return self._webhook
  end
  return EntityMod.new(self, data)
end




function TangocardSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = TangocardSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return TangocardSDK
