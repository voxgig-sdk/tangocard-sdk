
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


describe('TransferFundEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.TransferFund()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"amount","req":true,"short":"Specify the currency amount of the funds being transferred.","type":"`$NUMBER`","index$":0},{"active":true,"name":"externalRefID","req":false,"short":"specify the external reference id to associate with this funding action.","type":"`$STRING`","index$":1},{"active":true,"name":"transferDate","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"transferFrom","op":{"create":{"req":true,"type":"`$STRING`"}},"req":false,"short":"The accountIdentifier for the Account transferring funds from.","type":"`$OBJECT`","index$":3},{"active":true,"name":"transferNotes","req":false,"short":"Optional transfer notes (up to 150 characters)","type":"`$STRING`","index$":4},{"active":true,"name":"transferTo","op":{"create":{"req":true,"type":"`$STRING`"}},"req":false,"short":"The accountIdentifier for the Account transferring funds to.","type":"`$OBJECT`","index$":5},{"active":true,"name":"transferredAmount","req":false,"type":"`$NUMBER`","index$":6}],"name":"transfer_fund","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /transferFunds","json":"{\"operationId\":\"transferFunds\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The transferFundsCriteria object.\",\"properties\":{\"amount\":{\"description\":\"Specify the currency amount of the funds being transferred.\",\"minimum\":0,\"title\":\"amount\",\"type\":\"number\"},\"externalRefID\":{\"description\":\"specify the external reference id to associate with this funding action. Must be unique\",\"title\":\"External Reference Identifier\",\"type\":\"string\"},\"transferFrom\":{\"description\":\"The accountIdentifier for the Account transferring funds from.\",\"minLength\":1,\"title\":\"Transfer From\",\"type\":\"string\"},\"transferNotes\":{\"description\":\"Optional transfer notes (up to 150 characters)\",\"maxLength\":150,\"minLength\":0,\"title\":\"Transfer Notes\",\"type\":\"string\"},\"transferTo\":{\"description\":\"The accountIdentifier for the Account transferring funds to.\",\"minLength\":1,\"title\":\"Transfer To\",\"type\":\"string\"}},\"required\":[\"amount\",\"transferFrom\",\"transferTo\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"externalRefID\":{\"title\":\"External Reference ID\",\"type\":\"string\"},\"transferDate\":{\"title\":\"Transfer Date\",\"type\":\"string\"},\"transferFrom\":{\"properties\":{\"accountIdentifier\":{\"title\":\"Account Identifier\",\"type\":\"string\"},\"accountNumber\":{\"title\":\"Account Number\",\"type\":\"string\"},\"contactEmail\":{\"title\":\"Contact Email\",\"type\":\"string\"},\"currencyCode\":{\"title\":\"Currency Code\",\"type\":\"string\"},\"displayName\":{\"title\":\"Display Name\",\"type\":\"string\"},\"endingBalance\":{\"title\":\"Ending Balance\",\"type\":\"number\"},\"startingBalance\":{\"title\":\"Starting Balance\",\"type\":\"number\"},\"status\":{\"title\":\"Status\",\"type\":\"string\"}},\"title\":\"Transfer From\",\"type\":\"object\"},\"transferNotes\":{\"title\":\"Transfer Notes\",\"type\":\"string\"},\"transferTo\":{\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/transferFrom/properties\"},\"title\":\"Transfer To\",\"type\":\"object\"},\"transferredAmount\":{\"title\":\"Transferred Amount\",\"type\":\"number\"}},\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Forbidden\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Not Found\"},\"409\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Conflict; Duplicate Exists\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Internal Server Error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Service Unavailable\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/transferFunds","segments":[{"lit":"transferFunds"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"transfer_fund","name__orig":"transfer_fund","Name":"TransferFund","name_":"transfer_fund","name-":"transfer-fund","NAME":"TRANSFER_FUND","index$":42}, {"active":true,"entity":"transfer_fund","key$":"BasicTransferFundFlow","kind":"basic","name":"BasicTransferFundFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"transfer_fund_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'TransferFund')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const transfer_fund_ref01_ent = client.TransferFund()
    let transfer_fund_ref01_data = setup.data.new.transfer_fund['transfer_fund_ref01']

    transfer_fund_ref01_data = (await transfer_fund_ref01_ent.create(transfer_fund_ref01_data)).data()
    assert(null != transfer_fund_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/transfer_fund/TransferFundTestData.json')

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
    ['transfer_fund01','transfer_fund02','transfer_fund03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_TRANSFER_FUND_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
  })

  idmap = env['TANGOCARD_TEST_TRANSFER_FUND_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_TRANSFER_FUND_ENTID']
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
  
