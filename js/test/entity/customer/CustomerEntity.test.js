
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


describe('CustomerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.Customer()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"accounts","req":true,"type":"`$ARRAY`","index$":0},{"active":true,"name":"createdAt","req":true,"type":"`$STRING`","index$":1},{"active":true,"name":"customerIdentifier","req":true,"short":"A unique identifier for this customer.","type":"`$STRING`","index$":2},{"active":true,"name":"displayName","req":true,"short":"A friendly name for this customer.","type":"`$STRING`","index$":3},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"status","req":true,"type":"`$STRING`","index$":5}],"id":{"field":"id","name":"id"},"name":"customer","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /customers","json":"{\"operationId\":\"createCustomer\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"customerIdentifier\":{\"description\":\"A unique identifier for this customer. Must be between 5-100 characters and accepts the following: -0-9a-zA-Z in any sequence.\",\"pattern\":\"^[-a-zA-Z0-9]{5,100}$\",\"title\":\"Customer Identifier\",\"type\":\"string\"},\"displayName\":{\"description\":\"A friendly name for this customer. Must be between 5-100 characters and accepts letters, numbers, punctuation and whitespace separators in any sequence.\",\"pattern\":\"^[\\\\p{L}\\\\p{N}\\\\p{P}\\\\p{Z}]{5,100}$\",\"title\":\"Display Name\",\"type\":\"string\"}},\"required\":[\"customerIdentifier\",\"displayName\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"customerIdentifier\":{\"description\":\"A unique identifier for this customer. Must be between 5-100 characters and accepts the following: -0-9a-zA-Z in any sequence.\",\"pattern\":\"^[-a-zA-Z0-9]{5,100}$\",\"title\":\"Customer Identifier\",\"type\":\"string\"},\"displayName\":{\"description\":\"A friendly name for this customer. Must be between 5-100 characters and accepts letters, numbers, punctuation and whitespace separators in any sequence.\",\"pattern\":\"^[\\\\p{L}\\\\p{N}\\\\p{P}\\\\p{Z}]{5,100}$\",\"title\":\"Display Name\",\"type\":\"string\"}},\"required\":[\"customerIdentifier\",\"displayName\"],\"type\":\"object\"}}},\"description\":\"Created\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},{\"properties\":{\"i18nKey\":{\"type\":\"string\"},\"i18nTokenReplacements\":{\"items\":{},\"type\":\"array\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"}]}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Forbidden\"},\"409\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Conflict; Duplicate Exists\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Internal Server Error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Service Unavailable\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/customers","segments":[{"lit":"customers"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"account_display_name","orig":"account_display_name","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"account_identifier","orig":"account_identifier","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"account_max_date_created_at","orig":"account_max_date_created_at","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"account_min_date_created_at","orig":"account_min_date_created_at","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"account_number","orig":"account_number","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"account_status","orig":"account_status","reqd":false,"type":"`$STRING`","index$":5},{"active":true,"kind":"query","name":"customer_max_date_created_at","orig":"customer_max_date_created_at","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"kind":"query","name":"customer_min_date_created_at","orig":"customer_min_date_created_at","reqd":false,"type":"`$STRING`","index$":7},{"active":true,"kind":"query","name":"display_name","orig":"display_name","reqd":false,"type":"`$STRING`","index$":8},{"active":true,"kind":"query","name":"max_result","orig":"max_result","reqd":false,"type":"`$INTEGER`","index$":9},{"active":true,"kind":"query","name":"next_cursor","orig":"next_cursor","reqd":false,"type":"`$STRING`","index$":10},{"active":true,"kind":"query","name":"paginate","orig":"paginate","reqd":false,"type":"`$BOOLEAN`","index$":11},{"active":true,"kind":"query","name":"prev_cursor","orig":"prev_cursor","reqd":false,"type":"`$STRING`","index$":12},{"active":true,"kind":"query","name":"status","orig":"status","reqd":false,"type":"`$STRING`","index$":13}]},"contract":{"id":"GET /customers","json":"{\"operationId\":\"listCustomers\",\"parameters\":[{\"description\":\"Specify the customer display name to be queried.\",\"in\":\"query\",\"name\":\"displayName\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Specify the status to be queried.\",\"in\":\"query\",\"name\":\"status\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Specify the customer earliest createdAt date to be queried.\",\"in\":\"query\",\"name\":\"customerMinDateCreatedAt\",\"required\":false,\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}},{\"description\":\"Specify the customer latest createdAt date to be queried.\",\"in\":\"query\",\"name\":\"customerMaxDateCreatedAt\",\"required\":false,\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}},{\"description\":\"Specify the account status to be queried.\",\"in\":\"query\",\"name\":\"accountStatus\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Specify the account identifier to be queried.\",\"in\":\"query\",\"name\":\"accountIdentifier\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Specify the account number to be queried.\",\"in\":\"query\",\"name\":\"accountNumber\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Specify the account display name to be queried.\",\"in\":\"query\",\"name\":\"accountDisplayName\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Specify the earliest createdAt date to be queried.\",\"in\":\"query\",\"name\":\"accountMinDateCreatedAt\",\"required\":false,\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}},{\"description\":\"Specify the latest createdAt date to be queried.\",\"in\":\"query\",\"name\":\"accountMaxDateCreatedAt\",\"required\":false,\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}},{\"description\":\"Whether to paginate the results or not. Defaults to false.\",\"in\":\"query\",\"name\":\"paginate\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"The cursor to use for the previous page of results. This will be ignored if paginate is false.\",\"in\":\"query\",\"name\":\"prevCursor\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"The cursor to use for the next page of results. This will be ignored if paginate is false.\",\"in\":\"query\",\"name\":\"nextCursor\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"The maximum number of results to return. The default is 10, and the maximum is 200. This will be ignored if paginate is false.\",\"in\":\"query\",\"name\":\"maxResults\",\"required\":false,\"schema\":{\"format\":\"int32\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"accounts\":{\"items\":{\"properties\":{\"accountIdentifier\":{\"title\":\"Account Identifier\",\"type\":\"string\"},\"accountNumber\":{\"title\":\"Account Number\",\"type\":\"string\"},\"createdAt\":{\"title\":\"Account Creation Timestamp\",\"type\":\"string\"},\"currencyCode\":{\"title\":\"Currency Code\",\"type\":\"string\"},\"displayName\":{\"title\":\"Account Display Name\",\"type\":\"string\"},\"status\":{\"title\":\"Account Status\",\"type\":\"string\"}},\"required\":[\"accountIdentifier\",\"accountNumber\",\"createdAt\",\"currencyCode\",\"displayName\",\"status\"],\"type\":\"object\"},\"title\":\"List of Accounts this Customer has\",\"type\":\"array\"},\"createdAt\":{\"title\":\"Created Date\",\"type\":\"string\"},\"customerIdentifier\":{\"title\":\"Customer Identifier\",\"type\":\"string\"},\"displayName\":{\"title\":\"Customer Display Name\",\"type\":\"string\"},\"status\":{\"title\":\"Customer Status\",\"type\":\"string\"}},\"required\":[\"accounts\",\"createdAt\",\"customerIdentifier\",\"displayName\",\"status\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},{\"properties\":{\"i18nKey\":{\"type\":\"string\"},\"i18nTokenReplacements\":{\"items\":{},\"type\":\"array\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"}]}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Forbidden\"},\"422\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Unprocessable Entity\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Internal Server Error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Service Unavailable\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/customers","segments":[{"lit":"customers"}],"select":{"exist":["account_display_name","account_identifier","account_max_date_created_at","account_min_date_created_at","account_number","account_status","customer_max_date_created_at","customer_min_date_created_at","display_name","max_result","next_cursor","paginate","prev_cursor","status"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"customer_identifier","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /customers/{customerIdentifier}","json":"{\"operationId\":\"getCustomer\",\"parameters\":[{\"description\":\"The customerIdentifier for the Customer under which you are seeking details.\",\"in\":\"path\",\"name\":\"customerIdentifier\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"accounts\":{\"items\":{\"properties\":{\"accountIdentifier\":{\"title\":\"Account Identifier\",\"type\":\"string\"},\"accountNumber\":{\"title\":\"Account Number\",\"type\":\"string\"},\"createdAt\":{\"title\":\"Account Creation Timestamp\",\"type\":\"string\"},\"currencyCode\":{\"title\":\"Currency Code\",\"type\":\"string\"},\"displayName\":{\"title\":\"Account Display Name\",\"type\":\"string\"},\"status\":{\"title\":\"Account Status\",\"type\":\"string\"}},\"required\":[\"accountIdentifier\",\"accountNumber\",\"createdAt\",\"currencyCode\",\"displayName\",\"status\"],\"type\":\"object\"},\"title\":\"List of Accounts this Customer has\",\"type\":\"array\"},\"createdAt\":{\"title\":\"Created Date\",\"type\":\"string\"},\"customerIdentifier\":{\"title\":\"Customer Identifier\",\"type\":\"string\"},\"displayName\":{\"title\":\"Customer Display Name\",\"type\":\"string\"},\"status\":{\"title\":\"Customer Status\",\"type\":\"string\"}},\"required\":[\"accounts\",\"createdAt\",\"customerIdentifier\",\"displayName\",\"status\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},{\"properties\":{\"i18nKey\":{\"type\":\"string\"},\"i18nTokenReplacements\":{\"items\":{},\"type\":\"array\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"}]}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Forbidden\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Not Found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Internal Server Error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Service Unavailable\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/customers/{customerIdentifier}","rename":{"param":{"customerIdentifier":"id"}},"segments":[{"lit":"customers"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"customer","name__orig":"customer","Name":"Customer","name_":"customer","name-":"customer","NAME":"CUSTOMER","index$":19}, {"active":true,"entity":"customer","key$":"BasicCustomerFlow","kind":"basic","name":"BasicCustomerFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"customer_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"customer_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"customer_ref01","srcdatavar":"customer_ref01_data","suffix":"_dt0"},"match":{"id":"customer01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-customer_ref01"}}],"index$":2}]}, 'Customer')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const customer_ref01_ent = client.Customer()
    let customer_ref01_data = setup.data.new.customer['customer_ref01']

    customer_ref01_data = (await customer_ref01_ent.create(customer_ref01_data)).data()
    assert(null != customer_ref01_data.id)


    // LIST
    const customer_ref01_match = {}

    const customer_ref01_list = (await customer_ref01_ent.list(customer_ref01_match)).map((e) => e.data())

    assert(!isempty(select(customer_ref01_list, { id: customer_ref01_data.id })))


    // LOAD
    const customer_ref01_match_dt0 = {}
    customer_ref01_match_dt0.id = customer_ref01_data.id
    const customer_ref01_data_dt0 = (await customer_ref01_ent.load(customer_ref01_match_dt0)).data()
    assert(customer_ref01_data_dt0.id === customer_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/customer/CustomerTestData.json')

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
    ['customer01','customer02','customer03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_CUSTOMER_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
  })

  idmap = env['TANGOCARD_TEST_CUSTOMER_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_CUSTOMER_ENTID']
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
  
