
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


describe('LowBalanceAlertViewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.LowBalanceAlertView()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"accountIdentifier","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"balanceAlertDisplayName","req":false,"short":"A friendly name for this low balance alert (will be displayed in the Tango Portal).","type":"`$STRING`","index$":1},{"active":true,"format":"uuid","name":"balanceAlertID","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"balanceAlertNotification","req":false,"short":"Send low balance notification emails to the following address(es).","type":"`$ARRAY`","index$":3},{"active":true,"name":"balanceAlertThreshold","req":false,"short":"The threshold amount that will trigger the low balance alert.","type":"`$NUMBER`","index$":4},{"active":true,"name":"createdAt","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"customerIdentifier","req":false,"type":"`$STRING`","index$":6}],"name":"low_balance_alert_view","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"account_identifier","orig":"account_identifier","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"customer_identifier","orig":"customer_identifier","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"POST /customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance","json":"{\"operationId\":\"setLowBalanceAlert\",\"parameters\":[{\"description\":\"The customerIdentifier for the Customer / Account combination.\",\"in\":\"path\",\"name\":\"customerIdentifier\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The accountIdentifier for the Customer / Account combination.\",\"in\":\"path\",\"name\":\"accountIdentifier\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"balanceAlertDisplayName\":{\"type\":\"string\"},\"balanceAlertNotification\":{\"items\":{\"properties\":{\"emailAddress\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\",\"uniqueItems\":true},\"balanceAlertThreshold\":{\"type\":\"number\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"accountIdentifier\":{\"title\":\"Account Identifier\",\"type\":\"string\"},\"balanceAlertDisplayName\":{\"title\":\"Balance Alert Display Name\",\"type\":\"string\"},\"balanceAlertID\":{\"format\":\"uuid\",\"title\":\"Balance Alert ID\",\"type\":\"string\"},\"balanceAlertNotification\":{\"items\":{\"properties\":{\"emailAddress\":{\"type\":\"string\"}},\"type\":\"object\"},\"title\":\"Balance Alert Notification\",\"type\":\"array\",\"uniqueItems\":true},\"balanceAlertThreshold\":{\"title\":\"Balance Alert Threshold\",\"type\":\"number\"},\"createdAt\":{\"title\":\"Created At\",\"type\":\"string\"},\"customerIdentifier\":{\"title\":\"Customer Identifier\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},{\"properties\":{\"i18nKey\":{\"type\":\"string\"},\"i18nTokenReplacements\":{\"items\":{},\"type\":\"array\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"}]}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Forbidden\"},\"409\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Conflict; Duplicate Exists\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Internal Server Error\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance","rename":{"param":{"accountIdentifier":"account_identifier","customerIdentifier":"customer_identifier"}},"segments":[{"lit":"customers"},{"var":"customer_identifier"},{"lit":"accounts"},{"var":"account_identifier"},{"lit":"lowbalance"}],"select":{"exist":["account_identifier","customer_identifier"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"account_id","orig":"account_identifier","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"balance_alert_id","orig":"balance_alert_id","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"customer_identifier","orig":"customer_identifier","reqd":true,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}","json":"{\"operationId\":\"getLowBalanceAlert\",\"parameters\":[{\"description\":\"The customerIdentifier for the Customer / Account combination.\",\"in\":\"path\",\"name\":\"customerIdentifier\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The accountIdentifier for the Customer / Account combination.\",\"in\":\"path\",\"name\":\"accountIdentifier\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The specific balance alert ID.\",\"in\":\"path\",\"name\":\"balanceAlertID\",\"required\":true,\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"accountIdentifier\":{\"title\":\"Account Identifier\",\"type\":\"string\"},\"balanceAlertDisplayName\":{\"title\":\"Balance Alert Display Name\",\"type\":\"string\"},\"balanceAlertID\":{\"format\":\"uuid\",\"title\":\"Balance Alert ID\",\"type\":\"string\"},\"balanceAlertNotification\":{\"items\":{\"properties\":{\"emailAddress\":{\"type\":\"string\"}},\"type\":\"object\"},\"title\":\"Balance Alert Notification\",\"type\":\"array\",\"uniqueItems\":true},\"balanceAlertThreshold\":{\"title\":\"Balance Alert Threshold\",\"type\":\"number\"},\"createdAt\":{\"title\":\"Created At\",\"type\":\"string\"},\"customerIdentifier\":{\"title\":\"Customer Identifier\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},{\"properties\":{\"i18nKey\":{\"type\":\"string\"},\"i18nTokenReplacements\":{\"items\":{},\"type\":\"array\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"}]}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Forbidden\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Not Found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Internal Server Error\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}","rename":{"param":{"accountIdentifier":"account_id","balanceAlertID":"balance_alert_id","customerIdentifier":"customer_identifier"}},"segments":[{"lit":"customers"},{"var":"customer_identifier"},{"lit":"accounts"},{"var":"account_id"},{"lit":"lowbalance"},{"var":"balance_alert_id"}],"select":{"exist":["account_id","balance_alert_id","customer_identifier"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"account_id","orig":"account_identifier","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"balance_alert_id","orig":"balance_alert_id","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"customer_identifier","orig":"customer_identifier","reqd":true,"type":"`$STRING`","index$":2}]},"contract":{"id":"PATCH /customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}","json":"{\"operationId\":\"updateLowBalanceAlert\",\"parameters\":[{\"description\":\"The customerIdentifier for the Customer / Account combination under which you update the low balance alert.\",\"in\":\"path\",\"name\":\"customerIdentifier\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The accountIdentifier for the Customer / Account combination under which you update the low balance alert.\",\"in\":\"path\",\"name\":\"accountIdentifier\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The lowBalanceIdentifier for the Customer / Account / low balance combination under which you update the low balance alert.\",\"in\":\"path\",\"name\":\"balanceAlertID\",\"required\":true,\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"balanceAlertDisplayName\":{\"description\":\"A friendly name for this low balance alert (will be displayed in the Tango Portal).\",\"title\":\"Balance Alert Display Name\",\"type\":\"string\"},\"balanceAlertNotification\":{\"description\":\"Send low balance notification emails to the following address(es). A provided list replaces the existing list, an empty list clears all existing emails, and a null/omitted value leaves the list unchanged.\",\"items\":{\"properties\":{\"emailAddress\":{\"type\":\"string\"}},\"type\":\"object\"},\"title\":\"Balance Alert Notification\",\"type\":\"array\"},\"balanceAlertThreshold\":{\"description\":\"The threshold amount that will trigger the low balance alert.\",\"title\":\"Balance Alert Threshold\",\"type\":\"number\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"accountIdentifier\":{\"title\":\"Account Identifier\",\"type\":\"string\"},\"balanceAlertDisplayName\":{\"title\":\"Balance Alert Display Name\",\"type\":\"string\"},\"balanceAlertID\":{\"format\":\"uuid\",\"title\":\"Balance Alert ID\",\"type\":\"string\"},\"balanceAlertNotification\":{\"items\":{\"properties\":{\"emailAddress\":{\"type\":\"string\"}},\"type\":\"object\"},\"title\":\"Balance Alert Notification\",\"type\":\"array\",\"uniqueItems\":true},\"balanceAlertThreshold\":{\"title\":\"Balance Alert Threshold\",\"type\":\"number\"},\"createdAt\":{\"title\":\"Created At\",\"type\":\"string\"},\"customerIdentifier\":{\"title\":\"Customer Identifier\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},{\"properties\":{\"i18nKey\":{\"type\":\"string\"},\"i18nTokenReplacements\":{\"items\":{},\"type\":\"array\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"}]}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Forbidden\"},\"409\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Conflict; Duplicate Exists\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Internal Server Error\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PATCH","orig":"/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}","rename":{"param":{"accountIdentifier":"account_id","balanceAlertID":"balance_alert_id","customerIdentifier":"customer_identifier"}},"segments":[{"lit":"customers"},{"var":"customer_identifier"},{"lit":"accounts"},{"var":"account_id"},{"lit":"lowbalance"},{"var":"balance_alert_id"}],"select":{"exist":["account_id","balance_alert_id","customer_identifier"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["customer","account"],["customer","account","lowbalance"]]},"key$":"low_balance_alert_view","name__orig":"low_balance_alert_view","Name":"LowBalanceAlertView","name_":"low_balance_alert_view","name-":"low-balance-alert-view","NAME":"LOW_BALANCE_ALERT_VIEW","index$":26}, {"active":true,"entity":"low_balance_alert_view","key$":"BasicLowBalanceAlertViewFlow","kind":"basic","name":"BasicLowBalanceAlertViewFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"low_balance_alert_view_ref01"},"match":{"account_id":"account01","account_identifier":"accountentifier01","customer_identifier":"customerentifier01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{"account_id":"account01","customer_identifier":"customerentifier01"},"input":{"ref":"low_balance_alert_view_ref01","srcdatavar":"low_balance_alert_view_ref01_data","suffix":"_up0","textfield":"accountIdentifier"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-low_balance_alert_view_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"low_balance_alert_view_ref01","srcdatavar":"low_balance_alert_view_ref01_data","suffix":"_dt0"},"match":{"account_id":"account01","customer_identifier":"customerentifier01","id":"low_balance_alert_view01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-low_balance_alert_view_ref01"}}],"index$":2}]}, 'LowBalanceAlertView')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const low_balance_alert_view_ref01_ent = client.LowBalanceAlertView()
    let low_balance_alert_view_ref01_data = setup.data.new.low_balance_alert_view['low_balance_alert_view_ref01']
    low_balance_alert_view_ref01_data['account_id'] = setup.idmap['account01']
    low_balance_alert_view_ref01_data['account_identifier'] = setup.idmap['accountentifier01']
    low_balance_alert_view_ref01_data['customer_identifier'] = setup.idmap['customerentifier01']

    low_balance_alert_view_ref01_data = (await low_balance_alert_view_ref01_ent.create(low_balance_alert_view_ref01_data)).data()
    assert(null != low_balance_alert_view_ref01_data)


    // UPDATE
    const low_balance_alert_view_ref01_data_up0 = {}
    low_balance_alert_view_ref01_data_up0 ['account_id'] = setup.idmap['account_id']
    low_balance_alert_view_ref01_data_up0 ['customer_identifier'] = setup.idmap['customer_identifier']

    const low_balance_alert_view_ref01_markdef_up0 = { name: 'accountIdentifier', value: 'Mark01-low_balance_alert_view_ref01_' + setup.now }
    low_balance_alert_view_ref01_data_up0 [low_balance_alert_view_ref01_markdef_up0.name] = low_balance_alert_view_ref01_markdef_up0.value

    const low_balance_alert_view_ref01_resdata_up0 = (await low_balance_alert_view_ref01_ent.update(low_balance_alert_view_ref01_data_up0)).data()
    assert(null != low_balance_alert_view_ref01_resdata_up0)

    assert(low_balance_alert_view_ref01_resdata_up0[low_balance_alert_view_ref01_markdef_up0.name] === low_balance_alert_view_ref01_markdef_up0.value)


    // LOAD
    const low_balance_alert_view_ref01_match_dt0 = {}
    const low_balance_alert_view_ref01_data_dt0 = (await low_balance_alert_view_ref01_ent.load(low_balance_alert_view_ref01_match_dt0)).data()
    assert(null != low_balance_alert_view_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/low_balance_alert_view/LowBalanceAlertViewTestData.json')

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
    ['low_balance_alert_view01','low_balance_alert_view02','low_balance_alert_view03','customer01','customer02','customer03','account01','account02','account03','customer01','customer02','customer03','account01','account02','account03','lowbalance01','lowbalance02','lowbalance03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_LOW_BALANCE_ALERT_VIEW_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
  })

  idmap = env['TANGOCARD_TEST_LOW_BALANCE_ALERT_VIEW_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_LOW_BALANCE_ALERT_VIEW_ENTID']
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
  
