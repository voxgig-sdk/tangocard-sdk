<?php
declare(strict_types=1);

// Tangocard SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class TangocardSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new TangocardUtility();
        $this->_utility = $utility;

        $config = TangocardConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = TangocardHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = TangocardHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!TangocardFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, TangocardFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return TangocardUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = TangocardHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = TangocardHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = TangocardHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new TangocardSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new TangocardError($op . "_allow",
                "TangocardSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = TangocardHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = TangocardHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new TangocardError("graphql_error",
                "TangocardSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_account = null;

    // Canonical facade: $client->Account()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->account()
    // resolves here too.
    public function Account($data = null)
    {
        require_once __DIR__ . '/entity/account_entity.php';
        if ($data === null) {
            if ($this->_account === null) {
                $this->_account = new AccountEntity($this, null);
            }
            return $this->_account;
        }
        return new AccountEntity($this, $data);
    }


    private $_add_comment_escalation = null;

    // Canonical facade: $client->AddCommentEscalation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->add_comment_escalation()
    // resolves here too.
    public function AddCommentEscalation($data = null)
    {
        require_once __DIR__ . '/entity/add_comment_escalation_entity.php';
        if ($data === null) {
            if ($this->_add_comment_escalation === null) {
                $this->_add_comment_escalation = new AddCommentEscalationEntity($this, null);
            }
            return $this->_add_comment_escalation;
        }
        return new AddCommentEscalationEntity($this, $data);
    }


    private $_all_event_type = null;

    // Canonical facade: $client->AllEventType()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->all_event_type()
    // resolves here too.
    public function AllEventType($data = null)
    {
        require_once __DIR__ . '/entity/all_event_type_entity.php';
        if ($data === null) {
            if ($this->_all_event_type === null) {
                $this->_all_event_type = new AllEventTypeEntity($this, null);
            }
            return $this->_all_event_type;
        }
        return new AllEventTypeEntity($this, $data);
    }


    private $_async_order = null;

    // Canonical facade: $client->AsyncOrder()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->async_order()
    // resolves here too.
    public function AsyncOrder($data = null)
    {
        require_once __DIR__ . '/entity/async_order_entity.php';
        if ($data === null) {
            if ($this->_async_order === null) {
                $this->_async_order = new AsyncOrderEntity($this, null);
            }
            return $this->_async_order;
        }
        return new AsyncOrderEntity($this, $data);
    }


    private $_async_order_detail_view = null;

    // Canonical facade: $client->AsyncOrderDetailView()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->async_order_detail_view()
    // resolves here too.
    public function AsyncOrderDetailView($data = null)
    {
        require_once __DIR__ . '/entity/async_order_detail_view_entity.php';
        if ($data === null) {
            if ($this->_async_order_detail_view === null) {
                $this->_async_order_detail_view = new AsyncOrderDetailViewEntity($this, null);
            }
            return $this->_async_order_detail_view;
        }
        return new AsyncOrderDetailViewEntity($this, $data);
    }


    private $_async_order_line_items_view = null;

    // Canonical facade: $client->AsyncOrderLineItemsView()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->async_order_line_items_view()
    // resolves here too.
    public function AsyncOrderLineItemsView($data = null)
    {
        require_once __DIR__ . '/entity/async_order_line_items_view_entity.php';
        if ($data === null) {
            if ($this->_async_order_line_items_view === null) {
                $this->_async_order_line_items_view = new AsyncOrderLineItemsViewEntity($this, null);
            }
            return $this->_async_order_line_items_view;
        }
        return new AsyncOrderLineItemsViewEntity($this, $data);
    }


    private $_async_reason_codes_view = null;

    // Canonical facade: $client->AsyncReasonCodesView()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->async_reason_codes_view()
    // resolves here too.
    public function AsyncReasonCodesView($data = null)
    {
        require_once __DIR__ . '/entity/async_reason_codes_view_entity.php';
        if ($data === null) {
            if ($this->_async_reason_codes_view === null) {
                $this->_async_reason_codes_view = new AsyncReasonCodesViewEntity($this, null);
            }
            return $this->_async_reason_codes_view;
        }
        return new AsyncReasonCodesViewEntity($this, $data);
    }


    private $_async_update_line_item_view = null;

    // Canonical facade: $client->AsyncUpdateLineItemView()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->async_update_line_item_view()
    // resolves here too.
    public function AsyncUpdateLineItemView($data = null)
    {
        require_once __DIR__ . '/entity/async_update_line_item_view_entity.php';
        if ($data === null) {
            if ($this->_async_update_line_item_view === null) {
                $this->_async_update_line_item_view = new AsyncUpdateLineItemViewEntity($this, null);
            }
            return $this->_async_update_line_item_view;
        }
        return new AsyncUpdateLineItemViewEntity($this, $data);
    }


    private $_balance_alert_view = null;

    // Canonical facade: $client->BalanceAlertView()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->balance_alert_view()
    // resolves here too.
    public function BalanceAlertView($data = null)
    {
        require_once __DIR__ . '/entity/balance_alert_view_entity.php';
        if ($data === null) {
            if ($this->_balance_alert_view === null) {
                $this->_balance_alert_view = new BalanceAlertViewEntity($this, null);
            }
            return $this->_balance_alert_view;
        }
        return new BalanceAlertViewEntity($this, $data);
    }


    private $_brand_categories_view = null;

    // Canonical facade: $client->BrandCategoriesView()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->brand_categories_view()
    // resolves here too.
    public function BrandCategoriesView($data = null)
    {
        require_once __DIR__ . '/entity/brand_categories_view_entity.php';
        if ($data === null) {
            if ($this->_brand_categories_view === null) {
                $this->_brand_categories_view = new BrandCategoriesViewEntity($this, null);
            }
            return $this->_brand_categories_view;
        }
        return new BrandCategoriesViewEntity($this, $data);
    }


    private $_catalog = null;

    // Canonical facade: $client->Catalog()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->catalog()
    // resolves here too.
    public function Catalog($data = null)
    {
        require_once __DIR__ . '/entity/catalog_entity.php';
        if ($data === null) {
            if ($this->_catalog === null) {
                $this->_catalog = new CatalogEntity($this, null);
            }
            return $this->_catalog;
        }
        return new CatalogEntity($this, $data);
    }


    private $_choice_product = null;

    // Canonical facade: $client->ChoiceProduct()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->choice_product()
    // resolves here too.
    public function ChoiceProduct($data = null)
    {
        require_once __DIR__ . '/entity/choice_product_entity.php';
        if ($data === null) {
            if ($this->_choice_product === null) {
                $this->_choice_product = new ChoiceProductEntity($this, null);
            }
            return $this->_choice_product;
        }
        return new ChoiceProductEntity($this, $data);
    }


    private $_country_view_summary = null;

    // Canonical facade: $client->CountryViewSummary()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->country_view_summary()
    // resolves here too.
    public function CountryViewSummary($data = null)
    {
        require_once __DIR__ . '/entity/country_view_summary_entity.php';
        if ($data === null) {
            if ($this->_country_view_summary === null) {
                $this->_country_view_summary = new CountryViewSummaryEntity($this, null);
            }
            return $this->_country_view_summary;
        }
        return new CountryViewSummaryEntity($this, $data);
    }


    private $_create_account_criterion = null;

    // Canonical facade: $client->CreateAccountCriterion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->create_account_criterion()
    // resolves here too.
    public function CreateAccountCriterion($data = null)
    {
        require_once __DIR__ . '/entity/create_account_criterion_entity.php';
        if ($data === null) {
            if ($this->_create_account_criterion === null) {
                $this->_create_account_criterion = new CreateAccountCriterionEntity($this, null);
            }
            return $this->_create_account_criterion;
        }
        return new CreateAccountCriterionEntity($this, $data);
    }


    private $_create_customer_criterion = null;

    // Canonical facade: $client->CreateCustomerCriterion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->create_customer_criterion()
    // resolves here too.
    public function CreateCustomerCriterion($data = null)
    {
        require_once __DIR__ . '/entity/create_customer_criterion_entity.php';
        if ($data === null) {
            if ($this->_create_customer_criterion === null) {
                $this->_create_customer_criterion = new CreateCustomerCriterionEntity($this, null);
            }
            return $this->_create_customer_criterion;
        }
        return new CreateCustomerCriterionEntity($this, $data);
    }


    private $_credential_type_view = null;

    // Canonical facade: $client->CredentialTypeView()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->credential_type_view()
    // resolves here too.
    public function CredentialTypeView($data = null)
    {
        require_once __DIR__ . '/entity/credential_type_view_entity.php';
        if ($data === null) {
            if ($this->_credential_type_view === null) {
                $this->_credential_type_view = new CredentialTypeViewEntity($this, null);
            }
            return $this->_credential_type_view;
        }
        return new CredentialTypeViewEntity($this, $data);
    }


    private $_credit_card = null;

    // Canonical facade: $client->CreditCard()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->credit_card()
    // resolves here too.
    public function CreditCard($data = null)
    {
        require_once __DIR__ . '/entity/credit_card_entity.php';
        if ($data === null) {
            if ($this->_credit_card === null) {
                $this->_credit_card = new CreditCardEntity($this, null);
            }
            return $this->_credit_card;
        }
        return new CreditCardEntity($this, $data);
    }


    private $_credit_card_deposit = null;

    // Canonical facade: $client->CreditCardDeposit()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->credit_card_deposit()
    // resolves here too.
    public function CreditCardDeposit($data = null)
    {
        require_once __DIR__ . '/entity/credit_card_deposit_entity.php';
        if ($data === null) {
            if ($this->_credit_card_deposit === null) {
                $this->_credit_card_deposit = new CreditCardDepositEntity($this, null);
            }
            return $this->_credit_card_deposit;
        }
        return new CreditCardDepositEntity($this, $data);
    }


    private $_credit_card_unregister = null;

    // Canonical facade: $client->CreditCardUnregister()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->credit_card_unregister()
    // resolves here too.
    public function CreditCardUnregister($data = null)
    {
        require_once __DIR__ . '/entity/credit_card_unregister_entity.php';
        if ($data === null) {
            if ($this->_credit_card_unregister === null) {
                $this->_credit_card_unregister = new CreditCardUnregisterEntity($this, null);
            }
            return $this->_credit_card_unregister;
        }
        return new CreditCardUnregisterEntity($this, $data);
    }


    private $_customer = null;

    // Canonical facade: $client->Customer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->customer()
    // resolves here too.
    public function Customer($data = null)
    {
        require_once __DIR__ . '/entity/customer_entity.php';
        if ($data === null) {
            if ($this->_customer === null) {
                $this->_customer = new CustomerEntity($this, null);
            }
            return $this->_customer;
        }
        return new CustomerEntity($this, $data);
    }


    private $_email_template_list_view = null;

    // Canonical facade: $client->EmailTemplateListView()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->email_template_list_view()
    // resolves here too.
    public function EmailTemplateListView($data = null)
    {
        require_once __DIR__ . '/entity/email_template_list_view_entity.php';
        if ($data === null) {
            if ($this->_email_template_list_view === null) {
                $this->_email_template_list_view = new EmailTemplateListViewEntity($this, null);
            }
            return $this->_email_template_list_view;
        }
        return new EmailTemplateListViewEntity($this, $data);
    }


    private $_email_template_view_verbose = null;

    // Canonical facade: $client->EmailTemplateViewVerbose()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->email_template_view_verbose()
    // resolves here too.
    public function EmailTemplateViewVerbose($data = null)
    {
        require_once __DIR__ . '/entity/email_template_view_verbose_entity.php';
        if ($data === null) {
            if ($this->_email_template_view_verbose === null) {
                $this->_email_template_view_verbose = new EmailTemplateViewVerboseEntity($this, null);
            }
            return $this->_email_template_view_verbose;
        }
        return new EmailTemplateViewVerboseEntity($this, $data);
    }


    private $_embeddable_response_dto = null;

    // Canonical facade: $client->EmbeddableResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->embeddable_response_dto()
    // resolves here too.
    public function EmbeddableResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/embeddable_response_dto_entity.php';
        if ($data === null) {
            if ($this->_embeddable_response_dto === null) {
                $this->_embeddable_response_dto = new EmbeddableResponseDtoEntity($this, null);
            }
            return $this->_embeddable_response_dto;
        }
        return new EmbeddableResponseDtoEntity($this, $data);
    }


    private $_exchange_rates_with_disclaimer = null;

    // Canonical facade: $client->ExchangeRatesWithDisclaimer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->exchange_rates_with_disclaimer()
    // resolves here too.
    public function ExchangeRatesWithDisclaimer($data = null)
    {
        require_once __DIR__ . '/entity/exchange_rates_with_disclaimer_entity.php';
        if ($data === null) {
            if ($this->_exchange_rates_with_disclaimer === null) {
                $this->_exchange_rates_with_disclaimer = new ExchangeRatesWithDisclaimerEntity($this, null);
            }
            return $this->_exchange_rates_with_disclaimer;
        }
        return new ExchangeRatesWithDisclaimerEntity($this, $data);
    }


    private $_line_item = null;

    // Canonical facade: $client->LineItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->line_item()
    // resolves here too.
    public function LineItem($data = null)
    {
        require_once __DIR__ . '/entity/line_item_entity.php';
        if ($data === null) {
            if ($this->_line_item === null) {
                $this->_line_item = new LineItemEntity($this, null);
            }
            return $this->_line_item;
        }
        return new LineItemEntity($this, $data);
    }


    private $_low_balance_alert_list_view = null;

    // Canonical facade: $client->LowBalanceAlertListView()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->low_balance_alert_list_view()
    // resolves here too.
    public function LowBalanceAlertListView($data = null)
    {
        require_once __DIR__ . '/entity/low_balance_alert_list_view_entity.php';
        if ($data === null) {
            if ($this->_low_balance_alert_list_view === null) {
                $this->_low_balance_alert_list_view = new LowBalanceAlertListViewEntity($this, null);
            }
            return $this->_low_balance_alert_list_view;
        }
        return new LowBalanceAlertListViewEntity($this, $data);
    }


    private $_low_balance_alert_view = null;

    // Canonical facade: $client->LowBalanceAlertView()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->low_balance_alert_view()
    // resolves here too.
    public function LowBalanceAlertView($data = null)
    {
        require_once __DIR__ . '/entity/low_balance_alert_view_entity.php';
        if ($data === null) {
            if ($this->_low_balance_alert_view === null) {
                $this->_low_balance_alert_view = new LowBalanceAlertViewEntity($this, null);
            }
            return $this->_low_balance_alert_view;
        }
        return new LowBalanceAlertViewEntity($this, $data);
    }


    private $_mobile_country = null;

    // Canonical facade: $client->MobileCountry()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->mobile_country()
    // resolves here too.
    public function MobileCountry($data = null)
    {
        require_once __DIR__ . '/entity/mobile_country_entity.php';
        if ($data === null) {
            if ($this->_mobile_country === null) {
                $this->_mobile_country = new MobileCountryEntity($this, null);
            }
            return $this->_mobile_country;
        }
        return new MobileCountryEntity($this, $data);
    }


    private $_n14_webhook = null;

    // Canonical facade: $client->N14Webhook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->n14_webhook()
    // resolves here too.
    public function N14Webhook($data = null)
    {
        require_once __DIR__ . '/entity/n14_webhook_entity.php';
        if ($data === null) {
            if ($this->_n14_webhook === null) {
                $this->_n14_webhook = new N14WebhookEntity($this, null);
            }
            return $this->_n14_webhook;
        }
        return new N14WebhookEntity($this, $data);
    }


    private $_n1_customer = null;

    // Canonical facade: $client->N1Customer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->n1_customer()
    // resolves here too.
    public function N1Customer($data = null)
    {
        require_once __DIR__ . '/entity/n1_customer_entity.php';
        if ($data === null) {
            if ($this->_n1_customer === null) {
                $this->_n1_customer = new N1CustomerEntity($this, null);
            }
            return $this->_n1_customer;
        }
        return new N1CustomerEntity($this, $data);
    }


    private $_n2_account = null;

    // Canonical facade: $client->N2Account()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->n2_account()
    // resolves here too.
    public function N2Account($data = null)
    {
        require_once __DIR__ . '/entity/n2_account_entity.php';
        if ($data === null) {
            if ($this->_n2_account === null) {
                $this->_n2_account = new N2AccountEntity($this, null);
            }
            return $this->_n2_account;
        }
        return new N2AccountEntity($this, $data);
    }


    private $_n3_fund = null;

    // Canonical facade: $client->N3Fund()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->n3_fund()
    // resolves here too.
    public function N3Fund($data = null)
    {
        require_once __DIR__ . '/entity/n3_fund_entity.php';
        if ($data === null) {
            if ($this->_n3_fund === null) {
                $this->_n3_fund = new N3FundEntity($this, null);
            }
            return $this->_n3_fund;
        }
        return new N3FundEntity($this, $data);
    }


    private $_n8_line_item = null;

    // Canonical facade: $client->N8LineItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->n8_line_item()
    // resolves here too.
    public function N8LineItem($data = null)
    {
        require_once __DIR__ . '/entity/n8_line_item_entity.php';
        if ($data === null) {
            if ($this->_n8_line_item === null) {
                $this->_n8_line_item = new N8LineItemEntity($this, null);
            }
            return $this->_n8_line_item;
        }
        return new N8LineItemEntity($this, $data);
    }


    private $_n9_digital_template = null;

    // Canonical facade: $client->N9DigitalTemplate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->n9_digital_template()
    // resolves here too.
    public function N9DigitalTemplate($data = null)
    {
        require_once __DIR__ . '/entity/n9_digital_template_entity.php';
        if ($data === null) {
            if ($this->_n9_digital_template === null) {
                $this->_n9_digital_template = new N9DigitalTemplateEntity($this, null);
            }
            return $this->_n9_digital_template;
        }
        return new N9DigitalTemplateEntity($this, $data);
    }


    private $_order = null;

    // Canonical facade: $client->Order()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->order()
    // resolves here too.
    public function Order($data = null)
    {
        require_once __DIR__ . '/entity/order_entity.php';
        if ($data === null) {
            if ($this->_order === null) {
                $this->_order = new OrderEntity($this, null);
            }
            return $this->_order;
        }
        return new OrderEntity($this, $data);
    }


    private $_order_view_summary = null;

    // Canonical facade: $client->OrderViewSummary()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->order_view_summary()
    // resolves here too.
    public function OrderViewSummary($data = null)
    {
        require_once __DIR__ . '/entity/order_view_summary_entity.php';
        if ($data === null) {
            if ($this->_order_view_summary === null) {
                $this->_order_view_summary = new OrderViewSummaryEntity($this, null);
            }
            return $this->_order_view_summary;
        }
        return new OrderViewSummaryEntity($this, $data);
    }


    private $_prepaid_card_info = null;

    // Canonical facade: $client->PrepaidCardInfo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->prepaid_card_info()
    // resolves here too.
    public function PrepaidCardInfo($data = null)
    {
        require_once __DIR__ . '/entity/prepaid_card_info_entity.php';
        if ($data === null) {
            if ($this->_prepaid_card_info === null) {
                $this->_prepaid_card_info = new PrepaidCardInfoEntity($this, null);
            }
            return $this->_prepaid_card_info;
        }
        return new PrepaidCardInfoEntity($this, $data);
    }


    private $_prepaid_card_transaction = null;

    // Canonical facade: $client->PrepaidCardTransaction()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->prepaid_card_transaction()
    // resolves here too.
    public function PrepaidCardTransaction($data = null)
    {
        require_once __DIR__ . '/entity/prepaid_card_transaction_entity.php';
        if ($data === null) {
            if ($this->_prepaid_card_transaction === null) {
                $this->_prepaid_card_transaction = new PrepaidCardTransactionEntity($this, null);
            }
            return $this->_prepaid_card_transaction;
        }
        return new PrepaidCardTransactionEntity($this, $data);
    }


    private $_reissue_card = null;

    // Canonical facade: $client->ReissueCard()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->reissue_card()
    // resolves here too.
    public function ReissueCard($data = null)
    {
        require_once __DIR__ . '/entity/reissue_card_entity.php';
        if ($data === null) {
            if ($this->_reissue_card === null) {
                $this->_reissue_card = new ReissueCardEntity($this, null);
            }
            return $this->_reissue_card;
        }
        return new ReissueCardEntity($this, $data);
    }


    private $_replacement_reason = null;

    // Canonical facade: $client->ReplacementReason()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->replacement_reason()
    // resolves here too.
    public function ReplacementReason($data = null)
    {
        require_once __DIR__ . '/entity/replacement_reason_entity.php';
        if ($data === null) {
            if ($this->_replacement_reason === null) {
                $this->_replacement_reason = new ReplacementReasonEntity($this, null);
            }
            return $this->_replacement_reason;
        }
        return new ReplacementReasonEntity($this, $data);
    }


    private $_resend = null;

    // Canonical facade: $client->Resend()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->resend()
    // resolves here too.
    public function Resend($data = null)
    {
        require_once __DIR__ . '/entity/resend_entity.php';
        if ($data === null) {
            if ($this->_resend === null) {
                $this->_resend = new ResendEntity($this, null);
            }
            return $this->_resend;
        }
        return new ResendEntity($this, $data);
    }


    private $_reward_reasons_map = null;

    // Canonical facade: $client->RewardReasonsMap()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->reward_reasons_map()
    // resolves here too.
    public function RewardReasonsMap($data = null)
    {
        require_once __DIR__ . '/entity/reward_reasons_map_entity.php';
        if ($data === null) {
            if ($this->_reward_reasons_map === null) {
                $this->_reward_reasons_map = new RewardReasonsMapEntity($this, null);
            }
            return $this->_reward_reasons_map;
        }
        return new RewardReasonsMapEntity($this, $data);
    }


    private $_transfer_fund = null;

    // Canonical facade: $client->TransferFund()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->transfer_fund()
    // resolves here too.
    public function TransferFund($data = null)
    {
        require_once __DIR__ . '/entity/transfer_fund_entity.php';
        if ($data === null) {
            if ($this->_transfer_fund === null) {
                $this->_transfer_fund = new TransferFundEntity($this, null);
            }
            return $this->_transfer_fund;
        }
        return new TransferFundEntity($this, $data);
    }


    private $_update_account = null;

    // Canonical facade: $client->UpdateAccount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->update_account()
    // resolves here too.
    public function UpdateAccount($data = null)
    {
        require_once __DIR__ . '/entity/update_account_entity.php';
        if ($data === null) {
            if ($this->_update_account === null) {
                $this->_update_account = new UpdateAccountEntity($this, null);
            }
            return $this->_update_account;
        }
        return new UpdateAccountEntity($this, $data);
    }


    private $_update_webhook_subscription_response_view = null;

    // Canonical facade: $client->UpdateWebhookSubscriptionResponseView()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->update_webhook_subscription_response_view()
    // resolves here too.
    public function UpdateWebhookSubscriptionResponseView($data = null)
    {
        require_once __DIR__ . '/entity/update_webhook_subscription_response_view_entity.php';
        if ($data === null) {
            if ($this->_update_webhook_subscription_response_view === null) {
                $this->_update_webhook_subscription_response_view = new UpdateWebhookSubscriptionResponseViewEntity($this, null);
            }
            return $this->_update_webhook_subscription_response_view;
        }
        return new UpdateWebhookSubscriptionResponseViewEntity($this, $data);
    }


    private $_webhook = null;

    // Canonical facade: $client->Webhook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->webhook()
    // resolves here too.
    public function Webhook($data = null)
    {
        require_once __DIR__ . '/entity/webhook_entity.php';
        if ($data === null) {
            if ($this->_webhook === null) {
                $this->_webhook = new WebhookEntity($this, null);
            }
            return $this->_webhook;
        }
        return new WebhookEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new TangocardSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
