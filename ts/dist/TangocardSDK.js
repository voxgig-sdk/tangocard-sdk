"use strict";
// Tangocard Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.TangocardSDK = exports.TangocardEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AccountEntity_1 = require("./entity/AccountEntity");
const AddCommentEscalationEntity_1 = require("./entity/AddCommentEscalationEntity");
const AllEventTypeEntity_1 = require("./entity/AllEventTypeEntity");
const AsyncOrderEntity_1 = require("./entity/AsyncOrderEntity");
const AsyncOrderDetailViewEntity_1 = require("./entity/AsyncOrderDetailViewEntity");
const AsyncOrderLineItemsViewEntity_1 = require("./entity/AsyncOrderLineItemsViewEntity");
const AsyncReasonCodesViewEntity_1 = require("./entity/AsyncReasonCodesViewEntity");
const AsyncUpdateLineItemViewEntity_1 = require("./entity/AsyncUpdateLineItemViewEntity");
const BalanceAlertViewEntity_1 = require("./entity/BalanceAlertViewEntity");
const BrandCategoriesViewEntity_1 = require("./entity/BrandCategoriesViewEntity");
const CatalogEntity_1 = require("./entity/CatalogEntity");
const ChoiceProductEntity_1 = require("./entity/ChoiceProductEntity");
const CountryViewSummaryEntity_1 = require("./entity/CountryViewSummaryEntity");
const CreateAccountCriterionEntity_1 = require("./entity/CreateAccountCriterionEntity");
const CreateCustomerCriterionEntity_1 = require("./entity/CreateCustomerCriterionEntity");
const CredentialTypeViewEntity_1 = require("./entity/CredentialTypeViewEntity");
const CreditCardEntity_1 = require("./entity/CreditCardEntity");
const CreditCardDepositEntity_1 = require("./entity/CreditCardDepositEntity");
const CreditCardUnregisterEntity_1 = require("./entity/CreditCardUnregisterEntity");
const CustomerEntity_1 = require("./entity/CustomerEntity");
const EmailTemplateListViewEntity_1 = require("./entity/EmailTemplateListViewEntity");
const EmailTemplateViewVerboseEntity_1 = require("./entity/EmailTemplateViewVerboseEntity");
const EmbeddableResponseDtoEntity_1 = require("./entity/EmbeddableResponseDtoEntity");
const ExchangeRatesWithDisclaimerEntity_1 = require("./entity/ExchangeRatesWithDisclaimerEntity");
const LineItemEntity_1 = require("./entity/LineItemEntity");
const LowBalanceAlertListViewEntity_1 = require("./entity/LowBalanceAlertListViewEntity");
const LowBalanceAlertViewEntity_1 = require("./entity/LowBalanceAlertViewEntity");
const MobileCountryEntity_1 = require("./entity/MobileCountryEntity");
const N14WebhookEntity_1 = require("./entity/N14WebhookEntity");
const N1CustomerEntity_1 = require("./entity/N1CustomerEntity");
const N2AccountEntity_1 = require("./entity/N2AccountEntity");
const N3FundEntity_1 = require("./entity/N3FundEntity");
const N8LineItemEntity_1 = require("./entity/N8LineItemEntity");
const N9DigitalTemplateEntity_1 = require("./entity/N9DigitalTemplateEntity");
const OrderEntity_1 = require("./entity/OrderEntity");
const OrderViewSummaryEntity_1 = require("./entity/OrderViewSummaryEntity");
const PrepaidCardInfoEntity_1 = require("./entity/PrepaidCardInfoEntity");
const PrepaidCardTransactionEntity_1 = require("./entity/PrepaidCardTransactionEntity");
const ReissueCardEntity_1 = require("./entity/ReissueCardEntity");
const ReplacementReasonEntity_1 = require("./entity/ReplacementReasonEntity");
const ResendEntity_1 = require("./entity/ResendEntity");
const RewardReasonsMapEntity_1 = require("./entity/RewardReasonsMapEntity");
const TransferFundEntity_1 = require("./entity/TransferFundEntity");
const UpdateAccountEntity_1 = require("./entity/UpdateAccountEntity");
const UpdateWebhookSubscriptionResponseViewEntity_1 = require("./entity/UpdateWebhookSubscriptionResponseViewEntity");
const WebhookEntity_1 = require("./entity/WebhookEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const TangocardEntityBase_1 = require("./TangocardEntityBase");
Object.defineProperty(exports, "TangocardEntityBase", { enumerable: true, get: function () { return TangocardEntityBase_1.TangocardEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class TangocardSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        // Build spec directly from SDK options + user-provided fetch args.
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        // Merge user-provided headers over SDK defaults.
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        // Apply SDK auth (apikey, auth prefix, etc.)
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('TangocardSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path `direct` uses, with the
    // one thing raw `direct` cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report a
    // failed query as ok.
    //
    // NOTE: like `direct`, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('TangocardSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('TangocardSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.Account().list()` / `client.Account().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Account(entopts) {
        const self = this;
        return new AccountEntity_1.AccountEntity(self, entopts);
    }
    // Entity access: `client.AddCommentEscalation().list()` / `client.AddCommentEscalation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AddCommentEscalation(entopts) {
        const self = this;
        return new AddCommentEscalationEntity_1.AddCommentEscalationEntity(self, entopts);
    }
    // Entity access: `client.AllEventType().list()` / `client.AllEventType().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AllEventType(entopts) {
        const self = this;
        return new AllEventTypeEntity_1.AllEventTypeEntity(self, entopts);
    }
    // Entity access: `client.AsyncOrder().list()` / `client.AsyncOrder().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AsyncOrder(entopts) {
        const self = this;
        return new AsyncOrderEntity_1.AsyncOrderEntity(self, entopts);
    }
    // Entity access: `client.AsyncOrderDetailView().list()` / `client.AsyncOrderDetailView().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AsyncOrderDetailView(entopts) {
        const self = this;
        return new AsyncOrderDetailViewEntity_1.AsyncOrderDetailViewEntity(self, entopts);
    }
    // Entity access: `client.AsyncOrderLineItemsView().list()` / `client.AsyncOrderLineItemsView().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AsyncOrderLineItemsView(entopts) {
        const self = this;
        return new AsyncOrderLineItemsViewEntity_1.AsyncOrderLineItemsViewEntity(self, entopts);
    }
    // Entity access: `client.AsyncReasonCodesView().list()` / `client.AsyncReasonCodesView().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AsyncReasonCodesView(entopts) {
        const self = this;
        return new AsyncReasonCodesViewEntity_1.AsyncReasonCodesViewEntity(self, entopts);
    }
    // Entity access: `client.AsyncUpdateLineItemView().list()` / `client.AsyncUpdateLineItemView().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AsyncUpdateLineItemView(entopts) {
        const self = this;
        return new AsyncUpdateLineItemViewEntity_1.AsyncUpdateLineItemViewEntity(self, entopts);
    }
    // Entity access: `client.BalanceAlertView().list()` / `client.BalanceAlertView().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BalanceAlertView(entopts) {
        const self = this;
        return new BalanceAlertViewEntity_1.BalanceAlertViewEntity(self, entopts);
    }
    // Entity access: `client.BrandCategoriesView().list()` / `client.BrandCategoriesView().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BrandCategoriesView(entopts) {
        const self = this;
        return new BrandCategoriesViewEntity_1.BrandCategoriesViewEntity(self, entopts);
    }
    // Entity access: `client.Catalog().list()` / `client.Catalog().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Catalog(entopts) {
        const self = this;
        return new CatalogEntity_1.CatalogEntity(self, entopts);
    }
    // Entity access: `client.ChoiceProduct().list()` / `client.ChoiceProduct().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ChoiceProduct(entopts) {
        const self = this;
        return new ChoiceProductEntity_1.ChoiceProductEntity(self, entopts);
    }
    // Entity access: `client.CountryViewSummary().list()` / `client.CountryViewSummary().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CountryViewSummary(entopts) {
        const self = this;
        return new CountryViewSummaryEntity_1.CountryViewSummaryEntity(self, entopts);
    }
    // Entity access: `client.CreateAccountCriterion().list()` / `client.CreateAccountCriterion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateAccountCriterion(entopts) {
        const self = this;
        return new CreateAccountCriterionEntity_1.CreateAccountCriterionEntity(self, entopts);
    }
    // Entity access: `client.CreateCustomerCriterion().list()` / `client.CreateCustomerCriterion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateCustomerCriterion(entopts) {
        const self = this;
        return new CreateCustomerCriterionEntity_1.CreateCustomerCriterionEntity(self, entopts);
    }
    // Entity access: `client.CredentialTypeView().list()` / `client.CredentialTypeView().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CredentialTypeView(entopts) {
        const self = this;
        return new CredentialTypeViewEntity_1.CredentialTypeViewEntity(self, entopts);
    }
    // Entity access: `client.CreditCard().list()` / `client.CreditCard().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreditCard(entopts) {
        const self = this;
        return new CreditCardEntity_1.CreditCardEntity(self, entopts);
    }
    // Entity access: `client.CreditCardDeposit().list()` / `client.CreditCardDeposit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreditCardDeposit(entopts) {
        const self = this;
        return new CreditCardDepositEntity_1.CreditCardDepositEntity(self, entopts);
    }
    // Entity access: `client.CreditCardUnregister().list()` / `client.CreditCardUnregister().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreditCardUnregister(entopts) {
        const self = this;
        return new CreditCardUnregisterEntity_1.CreditCardUnregisterEntity(self, entopts);
    }
    // Entity access: `client.Customer().list()` / `client.Customer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Customer(entopts) {
        const self = this;
        return new CustomerEntity_1.CustomerEntity(self, entopts);
    }
    // Entity access: `client.EmailTemplateListView().list()` / `client.EmailTemplateListView().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EmailTemplateListView(entopts) {
        const self = this;
        return new EmailTemplateListViewEntity_1.EmailTemplateListViewEntity(self, entopts);
    }
    // Entity access: `client.EmailTemplateViewVerbose().list()` / `client.EmailTemplateViewVerbose().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EmailTemplateViewVerbose(entopts) {
        const self = this;
        return new EmailTemplateViewVerboseEntity_1.EmailTemplateViewVerboseEntity(self, entopts);
    }
    // Entity access: `client.EmbeddableResponseDto().list()` / `client.EmbeddableResponseDto().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EmbeddableResponseDto(entopts) {
        const self = this;
        return new EmbeddableResponseDtoEntity_1.EmbeddableResponseDtoEntity(self, entopts);
    }
    // Entity access: `client.ExchangeRatesWithDisclaimer().list()` / `client.ExchangeRatesWithDisclaimer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ExchangeRatesWithDisclaimer(entopts) {
        const self = this;
        return new ExchangeRatesWithDisclaimerEntity_1.ExchangeRatesWithDisclaimerEntity(self, entopts);
    }
    // Entity access: `client.LineItem().list()` / `client.LineItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LineItem(entopts) {
        const self = this;
        return new LineItemEntity_1.LineItemEntity(self, entopts);
    }
    // Entity access: `client.LowBalanceAlertListView().list()` / `client.LowBalanceAlertListView().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LowBalanceAlertListView(entopts) {
        const self = this;
        return new LowBalanceAlertListViewEntity_1.LowBalanceAlertListViewEntity(self, entopts);
    }
    // Entity access: `client.LowBalanceAlertView().list()` / `client.LowBalanceAlertView().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LowBalanceAlertView(entopts) {
        const self = this;
        return new LowBalanceAlertViewEntity_1.LowBalanceAlertViewEntity(self, entopts);
    }
    // Entity access: `client.MobileCountry().list()` / `client.MobileCountry().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MobileCountry(entopts) {
        const self = this;
        return new MobileCountryEntity_1.MobileCountryEntity(self, entopts);
    }
    // Entity access: `client.N14Webhook().list()` / `client.N14Webhook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    N14Webhook(entopts) {
        const self = this;
        return new N14WebhookEntity_1.N14WebhookEntity(self, entopts);
    }
    // Entity access: `client.N1Customer().list()` / `client.N1Customer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    N1Customer(entopts) {
        const self = this;
        return new N1CustomerEntity_1.N1CustomerEntity(self, entopts);
    }
    // Entity access: `client.N2Account().list()` / `client.N2Account().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    N2Account(entopts) {
        const self = this;
        return new N2AccountEntity_1.N2AccountEntity(self, entopts);
    }
    // Entity access: `client.N3Fund().list()` / `client.N3Fund().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    N3Fund(entopts) {
        const self = this;
        return new N3FundEntity_1.N3FundEntity(self, entopts);
    }
    // Entity access: `client.N8LineItem().list()` / `client.N8LineItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    N8LineItem(entopts) {
        const self = this;
        return new N8LineItemEntity_1.N8LineItemEntity(self, entopts);
    }
    // Entity access: `client.N9DigitalTemplate().list()` / `client.N9DigitalTemplate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    N9DigitalTemplate(entopts) {
        const self = this;
        return new N9DigitalTemplateEntity_1.N9DigitalTemplateEntity(self, entopts);
    }
    // Entity access: `client.Order().list()` / `client.Order().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Order(entopts) {
        const self = this;
        return new OrderEntity_1.OrderEntity(self, entopts);
    }
    // Entity access: `client.OrderViewSummary().list()` / `client.OrderViewSummary().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrderViewSummary(entopts) {
        const self = this;
        return new OrderViewSummaryEntity_1.OrderViewSummaryEntity(self, entopts);
    }
    // Entity access: `client.PrepaidCardInfo().list()` / `client.PrepaidCardInfo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PrepaidCardInfo(entopts) {
        const self = this;
        return new PrepaidCardInfoEntity_1.PrepaidCardInfoEntity(self, entopts);
    }
    // Entity access: `client.PrepaidCardTransaction().list()` / `client.PrepaidCardTransaction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PrepaidCardTransaction(entopts) {
        const self = this;
        return new PrepaidCardTransactionEntity_1.PrepaidCardTransactionEntity(self, entopts);
    }
    // Entity access: `client.ReissueCard().list()` / `client.ReissueCard().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ReissueCard(entopts) {
        const self = this;
        return new ReissueCardEntity_1.ReissueCardEntity(self, entopts);
    }
    // Entity access: `client.ReplacementReason().list()` / `client.ReplacementReason().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ReplacementReason(entopts) {
        const self = this;
        return new ReplacementReasonEntity_1.ReplacementReasonEntity(self, entopts);
    }
    // Entity access: `client.Resend().list()` / `client.Resend().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Resend(entopts) {
        const self = this;
        return new ResendEntity_1.ResendEntity(self, entopts);
    }
    // Entity access: `client.RewardReasonsMap().list()` / `client.RewardReasonsMap().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RewardReasonsMap(entopts) {
        const self = this;
        return new RewardReasonsMapEntity_1.RewardReasonsMapEntity(self, entopts);
    }
    // Entity access: `client.TransferFund().list()` / `client.TransferFund().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TransferFund(entopts) {
        const self = this;
        return new TransferFundEntity_1.TransferFundEntity(self, entopts);
    }
    // Entity access: `client.UpdateAccount().list()` / `client.UpdateAccount().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateAccount(entopts) {
        const self = this;
        return new UpdateAccountEntity_1.UpdateAccountEntity(self, entopts);
    }
    // Entity access: `client.UpdateWebhookSubscriptionResponseView().list()` / `client.UpdateWebhookSubscriptionResponseView().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateWebhookSubscriptionResponseView(entopts) {
        const self = this;
        return new UpdateWebhookSubscriptionResponseViewEntity_1.UpdateWebhookSubscriptionResponseViewEntity(self, entopts);
    }
    // Entity access: `client.Webhook().list()` / `client.Webhook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Webhook(entopts) {
        const self = this;
        return new WebhookEntity_1.WebhookEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new TangocardSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return TangocardSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Tangocard' };
    }
    toString() {
        return 'Tangocard ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.TangocardSDK = TangocardSDK;
const SDK = TangocardSDK;
exports.SDK = SDK;
//# sourceMappingURL=TangocardSDK.js.map