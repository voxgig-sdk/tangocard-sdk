
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"accountIdentifier","req":true,"short":"specify the account this credit card is associated with","type":"`$STRING`","index$":0},{"active":true,"name":"accountNumber","req":true,"type":"`$STRING`","index$":1},{"active":true,"name":"amount","req":true,"short":"specify the amount to fund in USD","type":"`$NUMBER`","index$":2},{"active":true,"name":"amountCharged","req":true,"type":"`$NUMBER`","index$":3},{"active":true,"name":"createdDate","req":true,"type":"`$STRING`","index$":4},{"active":true,"name":"creditCardToken","req":true,"short":"specify the credit card token to fund with","type":"`$STRING`","index$":5},{"active":true,"name":"customerIdentifier","req":true,"short":"specify the customer associated with the credit card.","type":"`$STRING`","index$":6},{"active":true,"name":"externalRefID","req":false,"short":"specify the external reference id to associate with this funding action.","type":"`$STRING`","index$":7},{"active":true,"name":"feePercent","req":true,"type":"`$NUMBER`","index$":8},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"referenceDepositID","req":true,"type":"`$STRING`","index$":10},{"active":true,"name":"status","req":true,"type":"`$STRING`","index$":11}],"id":{"field":"id","name":"id"},"name":"credit_card_deposit","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /creditCardDeposits","json":"{\"operationId\":\"createCreditCardDeposit\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"<strong>customerIdentifier</strong> - specify the customer associated with the credit card. Must be the customer the accountIdentifier is associated with.<br/><br/><strong>accountIdentifier</strong> - specify the account this credit card is associated with<br/><br/><strong>externalRefID</strong> - specify the external reference id to associate with this funding action. Must be unique<br/><br/><strong>creditCardToken</strong> - specify the credit card token to fund with<br/><br/><strong>amount</strong> - specify the amount to fund in USD<br/><br/>\",\"properties\":{\"accountIdentifier\":{\"description\":\"specify the account this credit card is associated with\",\"title\":\"Account Identifier\",\"type\":\"string\"},\"amount\":{\"description\":\"specify the amount to fund in USD\",\"title\":\"The amount in USD to fund\",\"type\":\"number\"},\"creditCardToken\":{\"description\":\"specify the credit card token to fund with\",\"title\":\"Credit Card token\",\"type\":\"string\"},\"customerIdentifier\":{\"description\":\"specify the customer associated with the credit card. Must be the customer the accountIdentifier is associated with.\",\"title\":\"Customer Identifier\",\"type\":\"string\"},\"externalRefID\":{\"description\":\"specify the external reference id to associate with this funding action. Must be unique\",\"title\":\"External Reference Identifier\",\"type\":\"string\"}},\"required\":[\"accountIdentifier\",\"amount\",\"creditCardToken\",\"customerIdentifier\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"accountNumber\":{\"title\":\"Account Number\",\"type\":\"string\"},\"amount\":{\"title\":\"Amount funded in USD\",\"type\":\"number\"},\"amountCharged\":{\"title\":\"Amount charged in USD\",\"type\":\"number\"},\"createdDate\":{\"title\":\"Date the credit card deposit was created\",\"type\":\"string\"},\"externalRefID\":{\"title\":\"External Reference Identifier\",\"type\":\"string\"},\"feePercent\":{\"title\":\"Fee percent charged for credit card processing\",\"type\":\"number\"},\"referenceDepositID\":{\"title\":\"Credit Card Deposit order reference ID\",\"type\":\"string\"},\"status\":{\"title\":\"Status of the credit card deposit\",\"type\":\"string\"}},\"required\":[\"accountNumber\",\"amount\",\"amountCharged\",\"createdDate\",\"feePercent\",\"referenceDepositID\",\"status\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Forbidden\"},\"409\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Conflict; Duplicate Exists\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Internal Server Error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Service Unavailable\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/creditCardDeposits","segments":[{"lit":"creditCardDeposits"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"reference_deposit_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /creditCardDeposits/{referenceDepositID}","json":"{\"operationId\":\"getCreditCardDeposit\",\"parameters\":[{\"description\":\"Credit card deposit identifier returned in Fund an Account (POST /creditCardDeposits) response payload.\",\"in\":\"path\",\"name\":\"referenceDepositID\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"accountNumber\":{\"title\":\"Account Number\",\"type\":\"string\"},\"amount\":{\"title\":\"Amount funded in USD\",\"type\":\"number\"},\"amountCharged\":{\"title\":\"Amount charged in USD\",\"type\":\"number\"},\"createdDate\":{\"title\":\"Date the credit card deposit was created\",\"type\":\"string\"},\"externalRefID\":{\"title\":\"External Reference Identifier\",\"type\":\"string\"},\"feePercent\":{\"title\":\"Fee percent charged for credit card processing\",\"type\":\"number\"},\"referenceDepositID\":{\"title\":\"Credit Card Deposit order reference ID\",\"type\":\"string\"},\"status\":{\"title\":\"Status of the credit card deposit\",\"type\":\"string\"}},\"required\":[\"accountNumber\",\"amount\",\"amountCharged\",\"createdDate\",\"feePercent\",\"referenceDepositID\",\"status\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Forbidden\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Not Found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Internal Server Error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Service Unavailable\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/creditCardDeposits/{referenceDepositID}","rename":{"param":{"referenceDepositID":"id"}},"segments":[{"lit":"creditCardDeposits"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"credit_card_deposit","name__orig":"credit_card_deposit","Name":"CreditCardDeposit","name_":"credit_card_deposit","name-":"credit-card-deposit","NAME":"CREDIT_CARD_DEPOSIT","index$":17}, {"active":true,"entity":"credit_card_deposit","key$":"BasicCreditCardDepositFlow","kind":"basic","name":"BasicCreditCardDepositFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"credit_card_deposit_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"credit_card_deposit_ref01","srcdatavar":"credit_card_deposit_ref01_data","suffix":"_dt0"},"match":{"id":"credit_card_deposit01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-credit_card_deposit_ref01"}}],"index$":1}]}, 'CreditCardDeposit')
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
  
