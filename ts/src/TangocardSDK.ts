// Tangocard Ts SDK

import { AccountEntity } from './entity/AccountEntity'
import { AddCommentEscalationEntity } from './entity/AddCommentEscalationEntity'
import { AllEventTypeEntity } from './entity/AllEventTypeEntity'
import { AsyncOrderEntity } from './entity/AsyncOrderEntity'
import { AsyncOrderDetailViewEntity } from './entity/AsyncOrderDetailViewEntity'
import { AsyncOrderLineItemsViewEntity } from './entity/AsyncOrderLineItemsViewEntity'
import { AsyncReasonCodesViewEntity } from './entity/AsyncReasonCodesViewEntity'
import { AsyncUpdateLineItemViewEntity } from './entity/AsyncUpdateLineItemViewEntity'
import { BalanceAlertViewEntity } from './entity/BalanceAlertViewEntity'
import { BrandCategoriesViewEntity } from './entity/BrandCategoriesViewEntity'
import { CatalogEntity } from './entity/CatalogEntity'
import { ChoiceProductEntity } from './entity/ChoiceProductEntity'
import { CountryViewSummaryEntity } from './entity/CountryViewSummaryEntity'
import { CreateAccountCriterionEntity } from './entity/CreateAccountCriterionEntity'
import { CreateCustomerCriterionEntity } from './entity/CreateCustomerCriterionEntity'
import { CredentialTypeViewEntity } from './entity/CredentialTypeViewEntity'
import { CreditCardEntity } from './entity/CreditCardEntity'
import { CreditCardDepositEntity } from './entity/CreditCardDepositEntity'
import { CreditCardUnregisterEntity } from './entity/CreditCardUnregisterEntity'
import { CustomerEntity } from './entity/CustomerEntity'
import { EmailTemplateListViewEntity } from './entity/EmailTemplateListViewEntity'
import { EmailTemplateViewVerboseEntity } from './entity/EmailTemplateViewVerboseEntity'
import { EmbeddableResponseDtoEntity } from './entity/EmbeddableResponseDtoEntity'
import { ExchangeRatesWithDisclaimerEntity } from './entity/ExchangeRatesWithDisclaimerEntity'
import { LineItemEntity } from './entity/LineItemEntity'
import { LowBalanceAlertListViewEntity } from './entity/LowBalanceAlertListViewEntity'
import { LowBalanceAlertViewEntity } from './entity/LowBalanceAlertViewEntity'
import { MobileCountryEntity } from './entity/MobileCountryEntity'
import { N14WebhookEntity } from './entity/N14WebhookEntity'
import { N1CustomerEntity } from './entity/N1CustomerEntity'
import { N2AccountEntity } from './entity/N2AccountEntity'
import { N3FundEntity } from './entity/N3FundEntity'
import { N8LineItemEntity } from './entity/N8LineItemEntity'
import { N9DigitalTemplateEntity } from './entity/N9DigitalTemplateEntity'
import { OrderEntity } from './entity/OrderEntity'
import { OrderViewSummaryEntity } from './entity/OrderViewSummaryEntity'
import { PrepaidCardInfoEntity } from './entity/PrepaidCardInfoEntity'
import { PrepaidCardTransactionEntity } from './entity/PrepaidCardTransactionEntity'
import { ReissueCardEntity } from './entity/ReissueCardEntity'
import { ReplacementReasonEntity } from './entity/ReplacementReasonEntity'
import { ResendEntity } from './entity/ResendEntity'
import { RewardReasonsMapEntity } from './entity/RewardReasonsMapEntity'
import { TransferFundEntity } from './entity/TransferFundEntity'
import { UpdateAccountEntity } from './entity/UpdateAccountEntity'
import { UpdateWebhookSubscriptionResponseViewEntity } from './entity/UpdateWebhookSubscriptionResponseViewEntity'
import { WebhookEntity } from './entity/WebhookEntity'

export type * from './TangocardTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { TangocardEntityBase } from './TangocardEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class TangocardSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec: any = {
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
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('TangocardSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
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
  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('TangocardSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('TangocardSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Account().list()` / `client.Account().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Account(entopts?: Record<string, any>) {
    const self = this
    return new AccountEntity(self, entopts)
  }


  // Entity access: `client.AddCommentEscalation().list()` / `client.AddCommentEscalation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AddCommentEscalation(entopts?: Record<string, any>) {
    const self = this
    return new AddCommentEscalationEntity(self, entopts)
  }


  // Entity access: `client.AllEventType().list()` / `client.AllEventType().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AllEventType(entopts?: Record<string, any>) {
    const self = this
    return new AllEventTypeEntity(self, entopts)
  }


  // Entity access: `client.AsyncOrder().list()` / `client.AsyncOrder().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AsyncOrder(entopts?: Record<string, any>) {
    const self = this
    return new AsyncOrderEntity(self, entopts)
  }


  // Entity access: `client.AsyncOrderDetailView().list()` / `client.AsyncOrderDetailView().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AsyncOrderDetailView(entopts?: Record<string, any>) {
    const self = this
    return new AsyncOrderDetailViewEntity(self, entopts)
  }


  // Entity access: `client.AsyncOrderLineItemsView().list()` / `client.AsyncOrderLineItemsView().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AsyncOrderLineItemsView(entopts?: Record<string, any>) {
    const self = this
    return new AsyncOrderLineItemsViewEntity(self, entopts)
  }


  // Entity access: `client.AsyncReasonCodesView().list()` / `client.AsyncReasonCodesView().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AsyncReasonCodesView(entopts?: Record<string, any>) {
    const self = this
    return new AsyncReasonCodesViewEntity(self, entopts)
  }


  // Entity access: `client.AsyncUpdateLineItemView().list()` / `client.AsyncUpdateLineItemView().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AsyncUpdateLineItemView(entopts?: Record<string, any>) {
    const self = this
    return new AsyncUpdateLineItemViewEntity(self, entopts)
  }


  // Entity access: `client.BalanceAlertView().list()` / `client.BalanceAlertView().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BalanceAlertView(entopts?: Record<string, any>) {
    const self = this
    return new BalanceAlertViewEntity(self, entopts)
  }


  // Entity access: `client.BrandCategoriesView().list()` / `client.BrandCategoriesView().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BrandCategoriesView(entopts?: Record<string, any>) {
    const self = this
    return new BrandCategoriesViewEntity(self, entopts)
  }


  // Entity access: `client.Catalog().list()` / `client.Catalog().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Catalog(entopts?: Record<string, any>) {
    const self = this
    return new CatalogEntity(self, entopts)
  }


  // Entity access: `client.ChoiceProduct().list()` / `client.ChoiceProduct().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ChoiceProduct(entopts?: Record<string, any>) {
    const self = this
    return new ChoiceProductEntity(self, entopts)
  }


  // Entity access: `client.CountryViewSummary().list()` / `client.CountryViewSummary().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CountryViewSummary(entopts?: Record<string, any>) {
    const self = this
    return new CountryViewSummaryEntity(self, entopts)
  }


  // Entity access: `client.CreateAccountCriterion().list()` / `client.CreateAccountCriterion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreateAccountCriterion(entopts?: Record<string, any>) {
    const self = this
    return new CreateAccountCriterionEntity(self, entopts)
  }


  // Entity access: `client.CreateCustomerCriterion().list()` / `client.CreateCustomerCriterion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreateCustomerCriterion(entopts?: Record<string, any>) {
    const self = this
    return new CreateCustomerCriterionEntity(self, entopts)
  }


  // Entity access: `client.CredentialTypeView().list()` / `client.CredentialTypeView().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CredentialTypeView(entopts?: Record<string, any>) {
    const self = this
    return new CredentialTypeViewEntity(self, entopts)
  }


  // Entity access: `client.CreditCard().list()` / `client.CreditCard().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreditCard(entopts?: Record<string, any>) {
    const self = this
    return new CreditCardEntity(self, entopts)
  }


  // Entity access: `client.CreditCardDeposit().list()` / `client.CreditCardDeposit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreditCardDeposit(entopts?: Record<string, any>) {
    const self = this
    return new CreditCardDepositEntity(self, entopts)
  }


  // Entity access: `client.CreditCardUnregister().list()` / `client.CreditCardUnregister().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreditCardUnregister(entopts?: Record<string, any>) {
    const self = this
    return new CreditCardUnregisterEntity(self, entopts)
  }


  // Entity access: `client.Customer().list()` / `client.Customer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Customer(entopts?: Record<string, any>) {
    const self = this
    return new CustomerEntity(self, entopts)
  }


  // Entity access: `client.EmailTemplateListView().list()` / `client.EmailTemplateListView().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EmailTemplateListView(entopts?: Record<string, any>) {
    const self = this
    return new EmailTemplateListViewEntity(self, entopts)
  }


  // Entity access: `client.EmailTemplateViewVerbose().list()` / `client.EmailTemplateViewVerbose().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EmailTemplateViewVerbose(entopts?: Record<string, any>) {
    const self = this
    return new EmailTemplateViewVerboseEntity(self, entopts)
  }


  // Entity access: `client.EmbeddableResponseDto().list()` / `client.EmbeddableResponseDto().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EmbeddableResponseDto(entopts?: Record<string, any>) {
    const self = this
    return new EmbeddableResponseDtoEntity(self, entopts)
  }


  // Entity access: `client.ExchangeRatesWithDisclaimer().list()` / `client.ExchangeRatesWithDisclaimer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ExchangeRatesWithDisclaimer(entopts?: Record<string, any>) {
    const self = this
    return new ExchangeRatesWithDisclaimerEntity(self, entopts)
  }


  // Entity access: `client.LineItem().list()` / `client.LineItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LineItem(entopts?: Record<string, any>) {
    const self = this
    return new LineItemEntity(self, entopts)
  }


  // Entity access: `client.LowBalanceAlertListView().list()` / `client.LowBalanceAlertListView().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LowBalanceAlertListView(entopts?: Record<string, any>) {
    const self = this
    return new LowBalanceAlertListViewEntity(self, entopts)
  }


  // Entity access: `client.LowBalanceAlertView().list()` / `client.LowBalanceAlertView().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LowBalanceAlertView(entopts?: Record<string, any>) {
    const self = this
    return new LowBalanceAlertViewEntity(self, entopts)
  }


  // Entity access: `client.MobileCountry().list()` / `client.MobileCountry().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MobileCountry(entopts?: Record<string, any>) {
    const self = this
    return new MobileCountryEntity(self, entopts)
  }


  // Entity access: `client.N14Webhook().list()` / `client.N14Webhook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  N14Webhook(entopts?: Record<string, any>) {
    const self = this
    return new N14WebhookEntity(self, entopts)
  }


  // Entity access: `client.N1Customer().list()` / `client.N1Customer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  N1Customer(entopts?: Record<string, any>) {
    const self = this
    return new N1CustomerEntity(self, entopts)
  }


  // Entity access: `client.N2Account().list()` / `client.N2Account().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  N2Account(entopts?: Record<string, any>) {
    const self = this
    return new N2AccountEntity(self, entopts)
  }


  // Entity access: `client.N3Fund().list()` / `client.N3Fund().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  N3Fund(entopts?: Record<string, any>) {
    const self = this
    return new N3FundEntity(self, entopts)
  }


  // Entity access: `client.N8LineItem().list()` / `client.N8LineItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  N8LineItem(entopts?: Record<string, any>) {
    const self = this
    return new N8LineItemEntity(self, entopts)
  }


  // Entity access: `client.N9DigitalTemplate().list()` / `client.N9DigitalTemplate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  N9DigitalTemplate(entopts?: Record<string, any>) {
    const self = this
    return new N9DigitalTemplateEntity(self, entopts)
  }


  // Entity access: `client.Order().list()` / `client.Order().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Order(entopts?: Record<string, any>) {
    const self = this
    return new OrderEntity(self, entopts)
  }


  // Entity access: `client.OrderViewSummary().list()` / `client.OrderViewSummary().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrderViewSummary(entopts?: Record<string, any>) {
    const self = this
    return new OrderViewSummaryEntity(self, entopts)
  }


  // Entity access: `client.PrepaidCardInfo().list()` / `client.PrepaidCardInfo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PrepaidCardInfo(entopts?: Record<string, any>) {
    const self = this
    return new PrepaidCardInfoEntity(self, entopts)
  }


  // Entity access: `client.PrepaidCardTransaction().list()` / `client.PrepaidCardTransaction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PrepaidCardTransaction(entopts?: Record<string, any>) {
    const self = this
    return new PrepaidCardTransactionEntity(self, entopts)
  }


  // Entity access: `client.ReissueCard().list()` / `client.ReissueCard().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReissueCard(entopts?: Record<string, any>) {
    const self = this
    return new ReissueCardEntity(self, entopts)
  }


  // Entity access: `client.ReplacementReason().list()` / `client.ReplacementReason().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReplacementReason(entopts?: Record<string, any>) {
    const self = this
    return new ReplacementReasonEntity(self, entopts)
  }


  // Entity access: `client.Resend().list()` / `client.Resend().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Resend(entopts?: Record<string, any>) {
    const self = this
    return new ResendEntity(self, entopts)
  }


  // Entity access: `client.RewardReasonsMap().list()` / `client.RewardReasonsMap().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RewardReasonsMap(entopts?: Record<string, any>) {
    const self = this
    return new RewardReasonsMapEntity(self, entopts)
  }


  // Entity access: `client.TransferFund().list()` / `client.TransferFund().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TransferFund(entopts?: Record<string, any>) {
    const self = this
    return new TransferFundEntity(self, entopts)
  }


  // Entity access: `client.UpdateAccount().list()` / `client.UpdateAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateAccount(entopts?: Record<string, any>) {
    const self = this
    return new UpdateAccountEntity(self, entopts)
  }


  // Entity access: `client.UpdateWebhookSubscriptionResponseView().list()` / `client.UpdateWebhookSubscriptionResponseView().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateWebhookSubscriptionResponseView(entopts?: Record<string, any>) {
    const self = this
    return new UpdateWebhookSubscriptionResponseViewEntity(self, entopts)
  }


  // Entity access: `client.Webhook().list()` / `client.Webhook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Webhook(entopts?: Record<string, any>) {
    const self = this
    return new WebhookEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new TangocardSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return TangocardSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'Tangocard' }
  }

  toString() {
    return 'Tangocard ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = TangocardSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  TangocardEntityBase,

  TangocardSDK,
  SDK,
}


