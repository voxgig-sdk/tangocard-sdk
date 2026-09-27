
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { TangocardSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('CreditCardDepositEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.CreditCardDeposit()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"accountIdentifier":{"a":true,"h":"Account Identifier","n":"accountIdentifier","r":true,"sh":"specify the account this credit card is associated with","t":"`$STRING`","key$":"accountIdentifier","index$":0},"accountNumber":{"a":true,"h":"Account Number","n":"accountNumber","r":true,"t":"`$STRING`","key$":"accountNumber","index$":1},"amount":{"a":true,"h":"Amount","n":"amount","r":true,"sh":"specify the amount to fund in USD","t":"`$NUMBER`","key$":"amount","index$":2},"amountCharged":{"a":true,"h":"Amount Charged","n":"amountCharged","r":true,"t":"`$NUMBER`","key$":"amountCharged","index$":3},"createdDate":{"a":true,"h":"Created Date","n":"createdDate","r":true,"t":"`$STRING`","key$":"createdDate","index$":4},"creditCardToken":{"a":true,"h":"Credit Card Token","n":"creditCardToken","r":true,"sh":"specify the credit card token to fund with","t":"`$STRING`","key$":"creditCardToken","index$":5},"customerIdentifier":{"a":true,"h":"Customer Identifier","n":"customerIdentifier","r":true,"sh":"specify the customer associated with the credit card.","t":"`$STRING`","key$":"customerIdentifier","index$":6},"externalRefID":{"a":true,"h":"External Ref Id","n":"externalRefID","r":false,"sh":"specify the external reference id to associate with this funding action.","t":"`$STRING`","key$":"externalRefID","index$":7},"feePercent":{"a":true,"h":"Fee Percent","n":"feePercent","r":true,"t":"`$NUMBER`","key$":"feePercent","index$":8},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":9},"referenceDepositID":{"a":true,"h":"Reference Deposit Id","n":"referenceDepositID","r":true,"t":"`$STRING`","key$":"referenceDepositID","index$":10},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":11}},"id":{"field":"id","name":"id"},"name":"credit_card_deposit","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /creditCardDeposits","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/creditCardDeposits","q":{},"r":{},"s":[{"lit":"creditCardDeposits"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /creditCardDeposits/{referenceDepositID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"reference_deposit_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/creditCardDeposits/{referenceDepositID}","q":{"exist":["id"]},"r":{"param":{"referenceDepositID":"id"}},"s":[{"lit":"creditCardDeposits"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"credit_card_deposit","name__orig":"credit_card_deposit","Name":"CreditCardDeposit","name_":"credit_card_deposit","name-":"credit-card-deposit","NAME":"CREDIT_CARD_DEPOSIT","index$":16}, {"active":true,"entity":"credit_card_deposit","key$":"BasicCreditCardDepositFlow","kind":"basic","name":"BasicCreditCardDepositFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"credit_card_deposit_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"credit_card_deposit_ref01","srcdatavar":"credit_card_deposit_ref01_data","suffix":"_dt0"},"m":{"id":"credit_card_deposit01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-credit_card_deposit_ref01"}}],"index$":1}]}, 'CreditCardDeposit', {"POST /creditCardDeposits":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","description":"<strong>customerIdentifier</strong> - specify the customer associated with the credit card. Must be the customer the accountIdentifier is associated with.<br/><br/><strong>accountIdentifier</strong> - specify the account this credit card is associated with<br/><br/><strong>externalRefID</strong> - specify the external reference id to associate with this funding action. Must be unique<br/><br/><strong>creditCardToken</strong> - specify the credit card token to fund with<br/><br/><strong>amount</strong> - specify the amount to fund in USD<br/><br/>","properties":{"customerIdentifier":{"type":"string","description":"specify the customer associated with the credit card. Must be the customer the accountIdentifier is associated with.","title":"Customer Identifier","key$":"customerIdentifier"},"accountIdentifier":{"type":"string","description":"specify the account this credit card is associated with","title":"Account Identifier","key$":"accountIdentifier"},"externalRefID":{"type":"string","description":"specify the external reference id to associate with this funding action. Must be unique","title":"External Reference Identifier","key$":"externalRefID"},"creditCardToken":{"type":"string","description":"specify the credit card token to fund with","title":"Credit Card token","key$":"creditCardToken"},"amount":{"type":"number","description":"specify the amount to fund in USD","title":"The amount in USD to fund","key$":"amount"}},"required":["accountIdentifier","amount","creditCardToken","customerIdentifier"],"x-ref":"#/components/schemas/CreateCreditCardDepositCriteria","index$":1}}},"required":true},"parameters":[]},"GET /creditCardDeposits/{referenceDepositID}":{"protocol":"http","parameters":[{"name":"referenceDepositID","in":"path","description":"Credit card deposit identifier returned in Fund an Account (POST /creditCardDeposits) response payload.","required":true,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const credit_card_deposit_ref01_ent = client.CreditCardDeposit()
    let credit_card_deposit_ref01_data = setup.data.new.credit_card_deposit['credit_card_deposit_ref01']

    credit_card_deposit_ref01_data = (await credit_card_deposit_ref01_ent.create(credit_card_deposit_ref01_data)).data()
    assert(null != credit_card_deposit_ref01_data.id)


    // LOAD
    const credit_card_deposit_ref01_match_dt0 = {}
    credit_card_deposit_ref01_match_dt0.id = credit_card_deposit_ref01_data.id
    const credit_card_deposit_ref01_data_dt0 = (await credit_card_deposit_ref01_ent.load(credit_card_deposit_ref01_match_dt0)).data()
    assert(credit_card_deposit_ref01_data_dt0.id === credit_card_deposit_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/credit_card_deposit/CreditCardDepositTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = TangocardSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['credit_card_deposit01','credit_card_deposit02','credit_card_deposit03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_CREDIT_CARD_DEPOSIT_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
  })

  idmap = env['TANGOCARD_TEST_CREDIT_CARD_DEPOSIT_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_CREDIT_CARD_DEPOSIT_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new TangocardSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.TANGOCARD_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.TANGOCARD_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
