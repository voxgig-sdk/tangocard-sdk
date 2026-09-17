
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


describe('PrepaidCardTransactionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.PrepaidCardTransaction()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"journal","req":false,"type":"`$ARRAY`","index$":0},{"active":true,"name":"page","req":true,"type":"`$OBJECT`","index$":1}],"name":"prepaid_card_transaction","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"reference_line_item_id","orig":"reference_line_item_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":0,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /prepaidCardService/getCardTransactions/{referenceLineItemID}","json":"{\"operationId\":\"getCardTransactions\",\"parameters\":[{\"description\":\"Reference Line Item ID\",\"in\":\"path\",\"name\":\"referenceLineItemID\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Page number\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":0,\"format\":\"int32\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"journal\":{\"items\":{\"properties\":{\"status\":{\"type\":\"string\"},\"transactionAmount\":{\"properties\":{\"currencyCode\":{\"type\":\"string\"},\"value\":{\"type\":\"number\"}},\"type\":\"object\"},\"transactionDate\":{\"type\":\"string\"},\"transactionDetails\":{\"type\":\"string\"},\"transactionType\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"page\":{\"properties\":{\"elementsPerBlock\":{\"format\":\"int32\",\"title\":\"Total number of elements per page\",\"type\":\"integer\"},\"number\":{\"format\":\"int32\",\"title\":\"Current page number\",\"type\":\"integer\"},\"resultCount\":{\"format\":\"int32\",\"title\":\"Total number of elements in the current page\",\"type\":\"integer\"},\"totalCount\":{\"format\":\"int64\",\"title\":\"Total number of elements\",\"type\":\"integer\"}},\"required\":[\"elementsPerBlock\",\"number\",\"resultCount\",\"totalCount\"],\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Not Found\"},\"422\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unprocessable Entity\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Service Unavailable\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/prepaidCardService/getCardTransactions/{referenceLineItemID}","rename":{"param":{"referenceLineItemID":"reference_line_item_id"}},"segments":[{"lit":"prepaidCardService"},{"lit":"getCardTransactions"},{"var":"reference_line_item_id"}],"select":{"exist":["page","reference_line_item_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["get_card_transaction"]]},"key$":"prepaid_card_transaction","name__orig":"prepaid_card_transaction","Name":"PrepaidCardTransaction","name_":"prepaid_card_transaction","name-":"prepaid-card-transaction","NAME":"PREPAID_CARD_TRANSACTION","index$":37}, {"active":true,"entity":"prepaid_card_transaction","key$":"BasicPrepaidCardTransactionFlow","kind":"basic","name":"BasicPrepaidCardTransactionFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"prepaid_card_transaction_ref01","srcdatavar":"prepaid_card_transaction_ref01_data","suffix":"_dt0"},"match":{"id":"prepaid_card_transaction01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-prepaid_card_transaction_ref01"}}],"index$":0}]}, 'PrepaidCardTransaction')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let prepaid_card_transaction_ref01_data = Object.values(setup.data.existing.prepaid_card_transaction)[0]

    // LOAD
    const prepaid_card_transaction_ref01_ent = client.PrepaidCardTransaction()
    const prepaid_card_transaction_ref01_match_dt0 = {}
    const prepaid_card_transaction_ref01_data_dt0 = (await prepaid_card_transaction_ref01_ent.load(prepaid_card_transaction_ref01_match_dt0)).data()
    assert(null != prepaid_card_transaction_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/prepaid_card_transaction/PrepaidCardTransactionTestData.json')

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
    ['prepaid_card_transaction01','prepaid_card_transaction02','prepaid_card_transaction03','get_card_transaction01','get_card_transaction02','get_card_transaction03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_PREPAID_CARD_TRANSACTION_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
  })

  idmap = env['TANGOCARD_TEST_PREPAID_CARD_TRANSACTION_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_PREPAID_CARD_TRANSACTION_ENTID']
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
  
