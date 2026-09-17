# Tangocard SDK

from tangocard_sdk.utility.voxgig_struct import voxgig_struct as vs
from tangocard_sdk.core.utility_type import TangocardUtility
from tangocard_sdk.core.spec import TangocardSpec
from tangocard_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from tangocard_sdk.utility import register

# Load features
from tangocard_sdk.feature.base_feature import TangocardBaseFeature
from tangocard_sdk.features import _has_feature, _make_feature


class TangocardSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = TangocardUtility()
        self._utility = utility

        from tangocard_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return TangocardUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = TangocardSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "TangocardSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("TangocardSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def Account(self, data=None) -> "AccountEntity":
        """Entity factory: client.Account().list() / client.Account().load({"id": ...})."""
        from tangocard_sdk.entity.account_entity import AccountEntity
        return AccountEntity(self, data)


    def AddCommentEscalation(self, data=None) -> "AddCommentEscalationEntity":
        """Entity factory: client.AddCommentEscalation().list() / client.AddCommentEscalation().load({"id": ...})."""
        from tangocard_sdk.entity.add_comment_escalation_entity import AddCommentEscalationEntity
        return AddCommentEscalationEntity(self, data)


    def AllEventType(self, data=None) -> "AllEventTypeEntity":
        """Entity factory: client.AllEventType().list() / client.AllEventType().load({"id": ...})."""
        from tangocard_sdk.entity.all_event_type_entity import AllEventTypeEntity
        return AllEventTypeEntity(self, data)


    def AsyncOrder(self, data=None) -> "AsyncOrderEntity":
        """Entity factory: client.AsyncOrder().list() / client.AsyncOrder().load({"id": ...})."""
        from tangocard_sdk.entity.async_order_entity import AsyncOrderEntity
        return AsyncOrderEntity(self, data)


    def AsyncOrderDetailView(self, data=None) -> "AsyncOrderDetailViewEntity":
        """Entity factory: client.AsyncOrderDetailView().list() / client.AsyncOrderDetailView().load({"id": ...})."""
        from tangocard_sdk.entity.async_order_detail_view_entity import AsyncOrderDetailViewEntity
        return AsyncOrderDetailViewEntity(self, data)


    def AsyncOrderLineItemsView(self, data=None) -> "AsyncOrderLineItemsViewEntity":
        """Entity factory: client.AsyncOrderLineItemsView().list() / client.AsyncOrderLineItemsView().load({"id": ...})."""
        from tangocard_sdk.entity.async_order_line_items_view_entity import AsyncOrderLineItemsViewEntity
        return AsyncOrderLineItemsViewEntity(self, data)


    def AsyncReasonCodesView(self, data=None) -> "AsyncReasonCodesViewEntity":
        """Entity factory: client.AsyncReasonCodesView().list() / client.AsyncReasonCodesView().load({"id": ...})."""
        from tangocard_sdk.entity.async_reason_codes_view_entity import AsyncReasonCodesViewEntity
        return AsyncReasonCodesViewEntity(self, data)


    def AsyncUpdateLineItemView(self, data=None) -> "AsyncUpdateLineItemViewEntity":
        """Entity factory: client.AsyncUpdateLineItemView().list() / client.AsyncUpdateLineItemView().load({"id": ...})."""
        from tangocard_sdk.entity.async_update_line_item_view_entity import AsyncUpdateLineItemViewEntity
        return AsyncUpdateLineItemViewEntity(self, data)


    def BalanceAlertView(self, data=None) -> "BalanceAlertViewEntity":
        """Entity factory: client.BalanceAlertView().list() / client.BalanceAlertView().load({"id": ...})."""
        from tangocard_sdk.entity.balance_alert_view_entity import BalanceAlertViewEntity
        return BalanceAlertViewEntity(self, data)


    def BrandCategoriesView(self, data=None) -> "BrandCategoriesViewEntity":
        """Entity factory: client.BrandCategoriesView().list() / client.BrandCategoriesView().load({"id": ...})."""
        from tangocard_sdk.entity.brand_categories_view_entity import BrandCategoriesViewEntity
        return BrandCategoriesViewEntity(self, data)


    def Catalog(self, data=None) -> "CatalogEntity":
        """Entity factory: client.Catalog().list() / client.Catalog().load({"id": ...})."""
        from tangocard_sdk.entity.catalog_entity import CatalogEntity
        return CatalogEntity(self, data)


    def ChoiceProduct(self, data=None) -> "ChoiceProductEntity":
        """Entity factory: client.ChoiceProduct().list() / client.ChoiceProduct().load({"id": ...})."""
        from tangocard_sdk.entity.choice_product_entity import ChoiceProductEntity
        return ChoiceProductEntity(self, data)


    def CountryViewSummary(self, data=None) -> "CountryViewSummaryEntity":
        """Entity factory: client.CountryViewSummary().list() / client.CountryViewSummary().load({"id": ...})."""
        from tangocard_sdk.entity.country_view_summary_entity import CountryViewSummaryEntity
        return CountryViewSummaryEntity(self, data)


    def CreateAccountCriterion(self, data=None) -> "CreateAccountCriterionEntity":
        """Entity factory: client.CreateAccountCriterion().list() / client.CreateAccountCriterion().load({"id": ...})."""
        from tangocard_sdk.entity.create_account_criterion_entity import CreateAccountCriterionEntity
        return CreateAccountCriterionEntity(self, data)


    def CreateCustomerCriterion(self, data=None) -> "CreateCustomerCriterionEntity":
        """Entity factory: client.CreateCustomerCriterion().list() / client.CreateCustomerCriterion().load({"id": ...})."""
        from tangocard_sdk.entity.create_customer_criterion_entity import CreateCustomerCriterionEntity
        return CreateCustomerCriterionEntity(self, data)


    def CredentialTypeView(self, data=None) -> "CredentialTypeViewEntity":
        """Entity factory: client.CredentialTypeView().list() / client.CredentialTypeView().load({"id": ...})."""
        from tangocard_sdk.entity.credential_type_view_entity import CredentialTypeViewEntity
        return CredentialTypeViewEntity(self, data)


    def CreditCard(self, data=None) -> "CreditCardEntity":
        """Entity factory: client.CreditCard().list() / client.CreditCard().load({"id": ...})."""
        from tangocard_sdk.entity.credit_card_entity import CreditCardEntity
        return CreditCardEntity(self, data)


    def CreditCardDeposit(self, data=None) -> "CreditCardDepositEntity":
        """Entity factory: client.CreditCardDeposit().list() / client.CreditCardDeposit().load({"id": ...})."""
        from tangocard_sdk.entity.credit_card_deposit_entity import CreditCardDepositEntity
        return CreditCardDepositEntity(self, data)


    def CreditCardUnregister(self, data=None) -> "CreditCardUnregisterEntity":
        """Entity factory: client.CreditCardUnregister().list() / client.CreditCardUnregister().load({"id": ...})."""
        from tangocard_sdk.entity.credit_card_unregister_entity import CreditCardUnregisterEntity
        return CreditCardUnregisterEntity(self, data)


    def Customer(self, data=None) -> "CustomerEntity":
        """Entity factory: client.Customer().list() / client.Customer().load({"id": ...})."""
        from tangocard_sdk.entity.customer_entity import CustomerEntity
        return CustomerEntity(self, data)


    def EmailTemplateListView(self, data=None) -> "EmailTemplateListViewEntity":
        """Entity factory: client.EmailTemplateListView().list() / client.EmailTemplateListView().load({"id": ...})."""
        from tangocard_sdk.entity.email_template_list_view_entity import EmailTemplateListViewEntity
        return EmailTemplateListViewEntity(self, data)


    def EmailTemplateViewVerbose(self, data=None) -> "EmailTemplateViewVerboseEntity":
        """Entity factory: client.EmailTemplateViewVerbose().list() / client.EmailTemplateViewVerbose().load({"id": ...})."""
        from tangocard_sdk.entity.email_template_view_verbose_entity import EmailTemplateViewVerboseEntity
        return EmailTemplateViewVerboseEntity(self, data)


    def EmbeddableResponseDto(self, data=None) -> "EmbeddableResponseDtoEntity":
        """Entity factory: client.EmbeddableResponseDto().list() / client.EmbeddableResponseDto().load({"id": ...})."""
        from tangocard_sdk.entity.embeddable_response_dto_entity import EmbeddableResponseDtoEntity
        return EmbeddableResponseDtoEntity(self, data)


    def ExchangeRatesWithDisclaimer(self, data=None) -> "ExchangeRatesWithDisclaimerEntity":
        """Entity factory: client.ExchangeRatesWithDisclaimer().list() / client.ExchangeRatesWithDisclaimer().load({"id": ...})."""
        from tangocard_sdk.entity.exchange_rates_with_disclaimer_entity import ExchangeRatesWithDisclaimerEntity
        return ExchangeRatesWithDisclaimerEntity(self, data)


    def LineItem(self, data=None) -> "LineItemEntity":
        """Entity factory: client.LineItem().list() / client.LineItem().load({"id": ...})."""
        from tangocard_sdk.entity.line_item_entity import LineItemEntity
        return LineItemEntity(self, data)


    def LowBalanceAlertListView(self, data=None) -> "LowBalanceAlertListViewEntity":
        """Entity factory: client.LowBalanceAlertListView().list() / client.LowBalanceAlertListView().load({"id": ...})."""
        from tangocard_sdk.entity.low_balance_alert_list_view_entity import LowBalanceAlertListViewEntity
        return LowBalanceAlertListViewEntity(self, data)


    def LowBalanceAlertView(self, data=None) -> "LowBalanceAlertViewEntity":
        """Entity factory: client.LowBalanceAlertView().list() / client.LowBalanceAlertView().load({"id": ...})."""
        from tangocard_sdk.entity.low_balance_alert_view_entity import LowBalanceAlertViewEntity
        return LowBalanceAlertViewEntity(self, data)


    def MobileCountry(self, data=None) -> "MobileCountryEntity":
        """Entity factory: client.MobileCountry().list() / client.MobileCountry().load({"id": ...})."""
        from tangocard_sdk.entity.mobile_country_entity import MobileCountryEntity
        return MobileCountryEntity(self, data)


    def N14Webhook(self, data=None) -> "N14WebhookEntity":
        """Entity factory: client.N14Webhook().list() / client.N14Webhook().load({"id": ...})."""
        from tangocard_sdk.entity.n14_webhook_entity import N14WebhookEntity
        return N14WebhookEntity(self, data)


    def N1Customer(self, data=None) -> "N1CustomerEntity":
        """Entity factory: client.N1Customer().list() / client.N1Customer().load({"id": ...})."""
        from tangocard_sdk.entity.n1_customer_entity import N1CustomerEntity
        return N1CustomerEntity(self, data)


    def N2Account(self, data=None) -> "N2AccountEntity":
        """Entity factory: client.N2Account().list() / client.N2Account().load({"id": ...})."""
        from tangocard_sdk.entity.n2_account_entity import N2AccountEntity
        return N2AccountEntity(self, data)


    def N3Fund(self, data=None) -> "N3FundEntity":
        """Entity factory: client.N3Fund().list() / client.N3Fund().load({"id": ...})."""
        from tangocard_sdk.entity.n3_fund_entity import N3FundEntity
        return N3FundEntity(self, data)


    def N8LineItem(self, data=None) -> "N8LineItemEntity":
        """Entity factory: client.N8LineItem().list() / client.N8LineItem().load({"id": ...})."""
        from tangocard_sdk.entity.n8_line_item_entity import N8LineItemEntity
        return N8LineItemEntity(self, data)


    def N9DigitalTemplate(self, data=None) -> "N9DigitalTemplateEntity":
        """Entity factory: client.N9DigitalTemplate().list() / client.N9DigitalTemplate().load({"id": ...})."""
        from tangocard_sdk.entity.n9_digital_template_entity import N9DigitalTemplateEntity
        return N9DigitalTemplateEntity(self, data)


    def Order(self, data=None) -> "OrderEntity":
        """Entity factory: client.Order().list() / client.Order().load({"id": ...})."""
        from tangocard_sdk.entity.order_entity import OrderEntity
        return OrderEntity(self, data)


    def OrderViewSummary(self, data=None) -> "OrderViewSummaryEntity":
        """Entity factory: client.OrderViewSummary().list() / client.OrderViewSummary().load({"id": ...})."""
        from tangocard_sdk.entity.order_view_summary_entity import OrderViewSummaryEntity
        return OrderViewSummaryEntity(self, data)


    def PrepaidCardInfo(self, data=None) -> "PrepaidCardInfoEntity":
        """Entity factory: client.PrepaidCardInfo().list() / client.PrepaidCardInfo().load({"id": ...})."""
        from tangocard_sdk.entity.prepaid_card_info_entity import PrepaidCardInfoEntity
        return PrepaidCardInfoEntity(self, data)


    def PrepaidCardTransaction(self, data=None) -> "PrepaidCardTransactionEntity":
        """Entity factory: client.PrepaidCardTransaction().list() / client.PrepaidCardTransaction().load({"id": ...})."""
        from tangocard_sdk.entity.prepaid_card_transaction_entity import PrepaidCardTransactionEntity
        return PrepaidCardTransactionEntity(self, data)


    def ReissueCard(self, data=None) -> "ReissueCardEntity":
        """Entity factory: client.ReissueCard().list() / client.ReissueCard().load({"id": ...})."""
        from tangocard_sdk.entity.reissue_card_entity import ReissueCardEntity
        return ReissueCardEntity(self, data)


    def ReplacementReason(self, data=None) -> "ReplacementReasonEntity":
        """Entity factory: client.ReplacementReason().list() / client.ReplacementReason().load({"id": ...})."""
        from tangocard_sdk.entity.replacement_reason_entity import ReplacementReasonEntity
        return ReplacementReasonEntity(self, data)


    def Resend(self, data=None) -> "ResendEntity":
        """Entity factory: client.Resend().list() / client.Resend().load({"id": ...})."""
        from tangocard_sdk.entity.resend_entity import ResendEntity
        return ResendEntity(self, data)


    def RewardReasonsMap(self, data=None) -> "RewardReasonsMapEntity":
        """Entity factory: client.RewardReasonsMap().list() / client.RewardReasonsMap().load({"id": ...})."""
        from tangocard_sdk.entity.reward_reasons_map_entity import RewardReasonsMapEntity
        return RewardReasonsMapEntity(self, data)


    def TransferFund(self, data=None) -> "TransferFundEntity":
        """Entity factory: client.TransferFund().list() / client.TransferFund().load({"id": ...})."""
        from tangocard_sdk.entity.transfer_fund_entity import TransferFundEntity
        return TransferFundEntity(self, data)


    def UpdateAccount(self, data=None) -> "UpdateAccountEntity":
        """Entity factory: client.UpdateAccount().list() / client.UpdateAccount().load({"id": ...})."""
        from tangocard_sdk.entity.update_account_entity import UpdateAccountEntity
        return UpdateAccountEntity(self, data)


    def UpdateWebhookSubscriptionResponseView(self, data=None) -> "UpdateWebhookSubscriptionResponseViewEntity":
        """Entity factory: client.UpdateWebhookSubscriptionResponseView().list() / client.UpdateWebhookSubscriptionResponseView().load({"id": ...})."""
        from tangocard_sdk.entity.update_webhook_subscription_response_view_entity import UpdateWebhookSubscriptionResponseViewEntity
        return UpdateWebhookSubscriptionResponseViewEntity(self, data)


    def Webhook(self, data=None) -> "WebhookEntity":
        """Entity factory: client.Webhook().list() / client.Webhook().load({"id": ...})."""
        from tangocard_sdk.entity.webhook_entity import WebhookEntity
        return WebhookEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "TangocardSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from tangocard_sdk.entity.account_entity import AccountEntity
    from tangocard_sdk.entity.add_comment_escalation_entity import AddCommentEscalationEntity
    from tangocard_sdk.entity.all_event_type_entity import AllEventTypeEntity
    from tangocard_sdk.entity.async_order_entity import AsyncOrderEntity
    from tangocard_sdk.entity.async_order_detail_view_entity import AsyncOrderDetailViewEntity
    from tangocard_sdk.entity.async_order_line_items_view_entity import AsyncOrderLineItemsViewEntity
    from tangocard_sdk.entity.async_reason_codes_view_entity import AsyncReasonCodesViewEntity
    from tangocard_sdk.entity.async_update_line_item_view_entity import AsyncUpdateLineItemViewEntity
    from tangocard_sdk.entity.balance_alert_view_entity import BalanceAlertViewEntity
    from tangocard_sdk.entity.brand_categories_view_entity import BrandCategoriesViewEntity
    from tangocard_sdk.entity.catalog_entity import CatalogEntity
    from tangocard_sdk.entity.choice_product_entity import ChoiceProductEntity
    from tangocard_sdk.entity.country_view_summary_entity import CountryViewSummaryEntity
    from tangocard_sdk.entity.create_account_criterion_entity import CreateAccountCriterionEntity
    from tangocard_sdk.entity.create_customer_criterion_entity import CreateCustomerCriterionEntity
    from tangocard_sdk.entity.credential_type_view_entity import CredentialTypeViewEntity
    from tangocard_sdk.entity.credit_card_entity import CreditCardEntity
    from tangocard_sdk.entity.credit_card_deposit_entity import CreditCardDepositEntity
    from tangocard_sdk.entity.credit_card_unregister_entity import CreditCardUnregisterEntity
    from tangocard_sdk.entity.customer_entity import CustomerEntity
    from tangocard_sdk.entity.email_template_list_view_entity import EmailTemplateListViewEntity
    from tangocard_sdk.entity.email_template_view_verbose_entity import EmailTemplateViewVerboseEntity
    from tangocard_sdk.entity.embeddable_response_dto_entity import EmbeddableResponseDtoEntity
    from tangocard_sdk.entity.exchange_rates_with_disclaimer_entity import ExchangeRatesWithDisclaimerEntity
    from tangocard_sdk.entity.line_item_entity import LineItemEntity
    from tangocard_sdk.entity.low_balance_alert_list_view_entity import LowBalanceAlertListViewEntity
    from tangocard_sdk.entity.low_balance_alert_view_entity import LowBalanceAlertViewEntity
    from tangocard_sdk.entity.mobile_country_entity import MobileCountryEntity
    from tangocard_sdk.entity.n14_webhook_entity import N14WebhookEntity
    from tangocard_sdk.entity.n1_customer_entity import N1CustomerEntity
    from tangocard_sdk.entity.n2_account_entity import N2AccountEntity
    from tangocard_sdk.entity.n3_fund_entity import N3FundEntity
    from tangocard_sdk.entity.n8_line_item_entity import N8LineItemEntity
    from tangocard_sdk.entity.n9_digital_template_entity import N9DigitalTemplateEntity
    from tangocard_sdk.entity.order_entity import OrderEntity
    from tangocard_sdk.entity.order_view_summary_entity import OrderViewSummaryEntity
    from tangocard_sdk.entity.prepaid_card_info_entity import PrepaidCardInfoEntity
    from tangocard_sdk.entity.prepaid_card_transaction_entity import PrepaidCardTransactionEntity
    from tangocard_sdk.entity.reissue_card_entity import ReissueCardEntity
    from tangocard_sdk.entity.replacement_reason_entity import ReplacementReasonEntity
    from tangocard_sdk.entity.resend_entity import ResendEntity
    from tangocard_sdk.entity.reward_reasons_map_entity import RewardReasonsMapEntity
    from tangocard_sdk.entity.transfer_fund_entity import TransferFundEntity
    from tangocard_sdk.entity.update_account_entity import UpdateAccountEntity
    from tangocard_sdk.entity.update_webhook_subscription_response_view_entity import UpdateWebhookSubscriptionResponseViewEntity
    from tangocard_sdk.entity.webhook_entity import WebhookEntity
