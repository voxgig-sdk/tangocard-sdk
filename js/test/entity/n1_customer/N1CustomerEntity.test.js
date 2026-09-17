
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


describe('N1CustomerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.N1Customer()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"n1_customer","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"customer_identifier","orig":"customer_identifier","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"account_number","orig":"account_number","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"contact_email","orig":"contact_email","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"currency_code","orig":"currency_code","reqd":false,"type":"`$ARRAY`","index$":2},{"active":true,"kind":"query","name":"display_name","orig":"display_name","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"funding_notification_email","orig":"funding_notification_email","reqd":false,"type":"`$ARRAY`","index$":4},{"active":true,"kind":"query","name":"max_balance","orig":"max_balance","reqd":false,"type":"`$NUMBER`","index$":5},{"active":true,"kind":"query","name":"max_date_created_at","orig":"max_date_created_at","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"kind":"query","name":"max_result","orig":"max_result","reqd":false,"type":"`$INTEGER`","index$":7},{"active":true,"kind":"query","name":"min_balance","orig":"min_balance","reqd":false,"type":"`$NUMBER`","index$":8},{"active":true,"kind":"query","name":"min_date_created_at","orig":"min_date_created_at","reqd":false,"type":"`$STRING`","index$":9},{"active":true,"kind":"query","name":"next_cursor","orig":"next_cursor","reqd":false,"type":"`$STRING`","index$":10},{"active":true,"kind":"query","name":"paginate","orig":"paginate","reqd":false,"type":"`$BOOLEAN`","index$":11},{"active":true,"kind":"query","name":"prev_cursor","orig":"prev_cursor","reqd":false,"type":"`$STRING`","index$":12},{"active":true,"kind":"query","name":"status","orig":"status","reqd":false,"type":"`$STRING`","index$":13}]},"contract":{"id":"GET /customers/{customerIdentifier}/accounts","json":"{\"operationId\":\"listCustomerAccounts\",\"parameters\":[{\"description\":\"The customerIdentifier for the Customer under which you are seeking details.\",\"in\":\"path\",\"name\":\"customerIdentifier\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Whether to paginate the results or not. Defaults to false.\",\"in\":\"query\",\"name\":\"paginate\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"The cursor to use for the previous page of results. This will be ignored if paginate is false.\",\"in\":\"query\",\"name\":\"prevCursor\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"The cursor to use for the next page of results. This will be ignored if paginate is false.\",\"in\":\"query\",\"name\":\"nextCursor\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"The maximum number of results to return. The default is 10, and the maximum is 200. This will be ignored if paginate is false.\",\"in\":\"query\",\"name\":\"maxResults\",\"required\":false,\"schema\":{\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"Specify the account number to be queried.\",\"in\":\"query\",\"name\":\"accountNumber\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Specify the account display name to be queried.\",\"in\":\"query\",\"name\":\"displayName\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Specify the status to be queried.\",\"in\":\"query\",\"name\":\"status\",\"required\":false,\"schema\":{\"enum\":[\"ACTIVE\",\"INACTIVE\",\"DISABLED\",\"FROZEN\",\"DELETED\"],\"pattern\":\"ACTIVE|INACTIVE|DISABLED|FROZEN|DELETED\",\"type\":\"string\"}},{\"description\":\"Specify the contact email address to be queried.\",\"in\":\"query\",\"name\":\"contactEmail\",\"required\":false,\"schema\":{\"format\":\"email\",\"maxLength\":255,\"minLength\":0,\"type\":\"string\"}},{\"description\":\"Specify the currency code(s) to be queried.\",\"in\":\"query\",\"name\":\"currencyCode\",\"required\":false,\"schema\":{\"items\":{\"enum\":[\"AUD\",\"CAD\",\"EUR\",\"GBP\",\"USD\",\"MXN\",\"SGD\",\"PLN\"],\"type\":\"string\"},\"type\":\"array\"}},{\"description\":\"Specify the minimum currentBalance to be queried.\",\"in\":\"query\",\"name\":\"minBalance\",\"required\":false,\"schema\":{\"type\":\"number\"}},{\"description\":\"Specify the maximum currentBalance to be queried.\",\"in\":\"query\",\"name\":\"maxBalance\",\"required\":false,\"schema\":{\"type\":\"number\"}},{\"description\":\"Specify the earliest createdAt date to be queried.\",\"in\":\"query\",\"name\":\"minDateCreatedAt\",\"required\":false,\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}},{\"description\":\"Specify the latest createdAt date to be queried.\",\"in\":\"query\",\"name\":\"maxDateCreatedAt\",\"required\":false,\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}},{\"description\":\"Specify the funding notification email(s) to be queried.\",\"in\":\"query\",\"name\":\"fundingNotificationEmail\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"items\":{\"properties\":{\"accountIdentifier\":{\"title\":\"Account Identifier\",\"type\":\"string\"},\"accountNumber\":{\"title\":\"Account Number\",\"type\":\"string\"},\"contactEmail\":{\"title\":\"Contact Email\",\"type\":\"string\"},\"createdAt\":{\"title\":\"Account Creation Timestamp\",\"type\":\"string\"},\"currencyCode\":{\"title\":\"Currency Code\",\"type\":\"string\"},\"currentBalance\":{\"title\":\"Current Balance\",\"type\":\"number\"},\"displayName\":{\"title\":\"Account Display Name\",\"type\":\"string\"},\"fundingNotification\":{\"items\":{\"properties\":{\"emailAddress\":{\"title\":\"Email Address\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":\"Funding Notification Email Addresses\",\"type\":\"array\"},\"status\":{\"title\":\"Account Status\",\"type\":\"string\"}},\"required\":[\"accountIdentifier\",\"accountNumber\",\"createdAt\",\"currencyCode\",\"currentBalance\",\"displayName\",\"status\"],\"type\":\"object\"},\"properties\":{\"empty\":{\"type\":\"boolean\"},\"first\":{\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/items/properties\"},\"required\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/items/required\"},\"type\":\"object\"},\"last\":{\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/items/properties\"},\"required\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/items/required\"},\"type\":\"object\"}},\"title\":\"Non Paginated\",\"type\":\"array\"},{\"properties\":{\"items\":{\"items\":{\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/items/properties\"},\"required\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/items/required\"},\"type\":\"object\"},\"type\":\"array\"},\"maxResults\":{\"format\":\"int32\",\"type\":\"integer\"},\"nextCursor\":{\"type\":\"string\"},\"nextPageAvailable\":{\"type\":\"boolean\"},\"numberOfElements\":{\"format\":\"int32\",\"type\":\"integer\"},\"prevCursor\":{\"type\":\"string\"},\"prevPageAvailable\":{\"type\":\"boolean\"}},\"title\":\"Paginated\",\"type\":\"object\"}]}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},{\"properties\":{\"i18nKey\":{\"type\":\"string\"},\"i18nTokenReplacements\":{\"items\":{},\"type\":\"array\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"}]}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Forbidden\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Internal Server Error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Service Unavailable\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/customers/{customerIdentifier}/accounts","rename":{"param":{"customerIdentifier":"customer_identifier"}},"segments":[{"lit":"customers"},{"var":"customer_identifier"},{"lit":"accounts"}],"select":{"exist":["account_number","contact_email","currency_code","customer_identifier","display_name","funding_notification_email","max_balance","max_date_created_at","max_result","min_balance","min_date_created_at","next_cursor","paginate","prev_cursor","status"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["customer"]]},"key$":"n1_customer","name__orig":"n1_customer","Name":"N1Customer","name_":"n1_customer","name-":"n1-customer","NAME":"N1_CUSTOMER","index$":29}, {"active":true,"entity":"n1_customer","key$":"BasicN1CustomerFlow","kind":"basic","name":"BasicN1CustomerFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"n1_customer_ref01","srcdatavar":"n1_customer_ref01_data","suffix":"_dt0"},"match":{"id":"n1_customer01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-n1_customer_ref01"}}],"index$":0}]}, 'N1Customer')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let n1_customer_ref01_data = Object.values(setup.data.existing.n1_customer)[0]

    // LOAD
    const n1_customer_ref01_ent = client.N1Customer()
    const n1_customer_ref01_match_dt0 = {}
    const n1_customer_ref01_data_dt0 = (await n1_customer_ref01_ent.load(n1_customer_ref01_match_dt0)).data()
    assert(null != n1_customer_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/n1_customer/N1CustomerTestData.json')

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
    ['n1_customer01','n1_customer02','n1_customer03','customer01','customer02','customer03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_N1_CUSTOMER_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
  })

  idmap = env['TANGOCARD_TEST_N1_CUSTOMER_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_N1_CUSTOMER_ENTID']
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
  
