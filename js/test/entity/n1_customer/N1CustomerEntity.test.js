
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"n1_customer","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /customers/{customerIdentifier}/accounts","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_identifier","or":"customer_identifier","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"account_number","or":"account_number","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"contact_email","or":"contact_email","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"currency_code","or":"currency_code","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"k":"query","n":"display_name","or":"display_name","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"funding_notification_email","or":"funding_notification_email","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"k":"query","n":"max_balance","or":"max_balance","r":false,"t":"`$NUMBER`","index$":5},{"a":true,"k":"query","n":"max_date_created_at","or":"max_date_created_at","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"max_result","or":"max_result","r":false,"t":"`$INTEGER`","index$":7},{"a":true,"k":"query","n":"min_balance","or":"min_balance","r":false,"t":"`$NUMBER`","index$":8},{"a":true,"k":"query","n":"min_date_created_at","or":"min_date_created_at","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"next_cursor","or":"next_cursor","r":false,"t":"`$STRING`","index$":10},{"a":true,"k":"query","n":"paginate","or":"paginate","r":false,"t":"`$BOOLEAN`","index$":11},{"a":true,"k":"query","n":"prev_cursor","or":"prev_cursor","r":false,"t":"`$STRING`","index$":12},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":13}]},"k":"http","m":"GET","o":"/customers/{customerIdentifier}/accounts","q":{"exist":["account_number","contact_email","currency_code","customer_identifier","display_name","funding_notification_email","max_balance","max_date_created_at","max_result","min_balance","min_date_created_at","next_cursor","paginate","prev_cursor","status"]},"r":{"param":{"customerIdentifier":"customer_identifier"}},"s":[{"lit":"customers"},{"var":"customer_identifier"},{"lit":"accounts"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.customer"]]},"key$":"n1_customer","name__orig":"n1_customer","Name":"N1Customer","name_":"n1_customer","name-":"n1-customer","NAME":"N1_CUSTOMER","index$":27}, {"active":true,"entity":"n1_customer","key$":"BasicN1CustomerFlow","kind":"basic","name":"BasicN1CustomerFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"n1_customer_ref01","srcdatavar":"n1_customer_ref01_data","suffix":"_dt0"},"m":{"id":"n1_customer01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-n1_customer_ref01"}}],"index$":0}]}, 'N1Customer', {"GET /customers/{customerIdentifier}/accounts":{"protocol":"http","parameters":[{"name":"customerIdentifier","in":"path","description":"The customerIdentifier for the Customer under which you are seeking details.","required":true,"schema":{"type":"string"},"index$":0},{"name":"paginate","in":"query","description":"Whether to paginate the results or not. Defaults to false.","required":false,"schema":{"type":"boolean"},"index$":1},{"name":"prevCursor","in":"query","description":"The cursor to use for the previous page of results. This will be ignored if paginate is false.","required":false,"schema":{"type":"string"},"index$":2},{"name":"nextCursor","in":"query","description":"The cursor to use for the next page of results. This will be ignored if paginate is false.","required":false,"schema":{"type":"string"},"index$":3},{"name":"maxResults","in":"query","description":"The maximum number of results to return. The default is 10, and the maximum is 200. This will be ignored if paginate is false.","required":false,"schema":{"type":"integer","format":"int32"},"index$":4},{"name":"accountNumber","in":"query","description":"Specify the account number to be queried.","required":false,"schema":{"type":"string"},"index$":5},{"name":"displayName","in":"query","description":"Specify the account display name to be queried.","required":false,"schema":{"type":"string"},"index$":6},{"name":"status","in":"query","description":"Specify the status to be queried.","required":false,"schema":{"type":"string","enum":["ACTIVE","INACTIVE","DISABLED","FROZEN","DELETED"],"pattern":"ACTIVE|INACTIVE|DISABLED|FROZEN|DELETED"},"index$":7},{"name":"contactEmail","in":"query","description":"Specify the contact email address to be queried.","required":false,"schema":{"type":"string","format":"email","maxLength":255,"minLength":0},"index$":8},{"name":"currencyCode","in":"query","description":"Specify the currency code(s) to be queried.","required":false,"schema":{"type":"array","items":{"type":"string","enum":["AUD","CAD","EUR","GBP","USD","MXN","SGD","PLN"]}},"index$":9},{"name":"minBalance","in":"query","description":"Specify the minimum currentBalance to be queried.","required":false,"schema":{"type":"number"},"index$":10},{"name":"maxBalance","in":"query","description":"Specify the maximum currentBalance to be queried.","required":false,"schema":{"type":"number"},"index$":11},{"name":"minDateCreatedAt","in":"query","description":"Specify the earliest createdAt date to be queried.","required":false,"schema":{"type":"string","format":"date-time"},"index$":12},{"name":"maxDateCreatedAt","in":"query","description":"Specify the latest createdAt date to be queried.","required":false,"schema":{"type":"string","format":"date-time"},"index$":13},{"name":"fundingNotificationEmail","in":"query","description":"Specify the funding notification email(s) to be queried.","required":false,"schema":{"type":"array","items":{"type":"string"},"uniqueItems":true},"index$":14}]}})
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
  
