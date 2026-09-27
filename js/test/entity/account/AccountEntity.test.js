
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


describe('AccountEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.Account()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"accountIdentifier":{"a":true,"h":"Account Identifier","n":"accountIdentifier","r":true,"t":"`$STRING`","key$":"accountIdentifier","index$":0},"accountNumber":{"a":true,"h":"Account Number","n":"accountNumber","r":true,"t":"`$STRING`","key$":"accountNumber","index$":1},"contactEmail":{"a":true,"h":"Contact Email","n":"contactEmail","r":false,"sh":"optional, an email address for a designated representative for this account.","t":"`$STRING`","key$":"contactEmail","index$":2},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":true,"t":"`$STRING`","key$":"createdAt","index$":3},"currencyCode":{"a":true,"h":"Currency Code","n":"currencyCode","r":true,"t":"`$STRING`","key$":"currencyCode","index$":4},"currentBalance":{"a":true,"h":"Current Balance","n":"currentBalance","r":true,"t":"`$NUMBER`","key$":"currentBalance","index$":5},"displayName":{"a":true,"h":"Display Name","n":"displayName","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"optional, a friendly name for this account.","t":"`$STRING`","key$":"displayName","index$":6},"fundingNotification":{"a":true,"h":"Funding Notification","n":"fundingNotification","r":false,"sh":"optional, send funding notification emails to the following address(es).","t":"`$ARRAY`","key$":"fundingNotification","index$":7},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":8},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":9}},"id":{"field":"id","name":"id"},"name":"account","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"account_number","or":"account_number","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"contact_email","or":"contact_email","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"currency_code","or":"currency_code","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"k":"query","n":"display_name","or":"display_name","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"funding_notification_email","or":"funding_notification_email","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"k":"query","n":"max_balance","or":"max_balance","r":false,"t":"`$NUMBER`","index$":5},{"a":true,"k":"query","n":"max_date_created_at","or":"max_date_created_at","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"max_result","or":"max_result","r":false,"t":"`$INTEGER`","index$":7},{"a":true,"k":"query","n":"min_balance","or":"min_balance","r":false,"t":"`$NUMBER`","index$":8},{"a":true,"k":"query","n":"min_date_created_at","or":"min_date_created_at","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"next_cursor","or":"next_cursor","r":false,"t":"`$STRING`","index$":10},{"a":true,"k":"query","n":"paginate","or":"paginate","r":false,"t":"`$BOOLEAN`","index$":11},{"a":true,"k":"query","n":"prev_cursor","or":"prev_cursor","r":false,"t":"`$STRING`","index$":12},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":13}]},"k":"http","m":"GET","o":"/accounts","q":{"exist":["account_number","contact_email","currency_code","display_name","funding_notification_email","max_balance","max_date_created_at","max_result","min_balance","min_date_created_at","next_cursor","paginate","prev_cursor","status"]},"r":{},"s":[{"lit":"accounts"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{accountIdentifier}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"account_identifier","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{accountIdentifier}","q":{"exist":["id"]},"r":{"param":{"accountIdentifier":"id"}},"s":[{"lit":"accounts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /customers/{customerIdentifier}/accounts/{accountIdentifier}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_identifier","or":"customer_identifier","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"account_identifier","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/customers/{customerIdentifier}/accounts/{accountIdentifier}","q":{"exist":["customer_identifier","id"]},"r":{"param":{"accountIdentifier":"id","customerIdentifier":"customer_identifier"}},"s":[{"lit":"customers"},{"var":"customer_identifier"},{"lit":"accounts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.customer"]]},"key$":"account","name__orig":"account","Name":"Account","name_":"account","name-":"account","NAME":"ACCOUNT","index$":0}, {"active":true,"entity":"account","key$":"BasicAccountFlow","kind":"basic","name":"BasicAccountFlow","param":{},"step":[{"a":true,"d":{"customer_identifier":"customerentifier01"},"i":{"ref":"account_ref01","srcdatavar":"account_ref01_data","suffix":"_up0","textfield":"accountIdentifier"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-account_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"account_ref01","srcdatavar":"account_ref01_data","suffix":"_dt0"},"m":{"id":"account01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-account_ref01"}}],"index$":1}]}, 'Account', {"GET /accounts":{"protocol":"http","parameters":[{"name":"paginate","in":"query","description":"Whether to paginate the results or not. Defaults to false.","required":false,"schema":{"type":"boolean"},"index$":0},{"name":"prevCursor","in":"query","description":"The cursor to use for the previous page of results. This will be ignored if paginate is false.","required":false,"schema":{"type":"string"},"index$":1},{"name":"nextCursor","in":"query","description":"The cursor to use for the next page of results. This will be ignored if paginate is false.","required":false,"schema":{"type":"string"},"index$":2},{"name":"maxResults","in":"query","description":"The maximum number of results to return. The default is 10, and the maximum is 200. This will be ignored if paginate is false.","required":false,"schema":{"type":"integer","format":"int32"},"index$":3},{"name":"accountNumber","in":"query","description":"Specify the account number to be queried.","required":false,"schema":{"type":"string"},"index$":4},{"name":"displayName","in":"query","description":"Specify the account display name to be queried.","required":false,"schema":{"type":"string"},"index$":5},{"name":"status","in":"query","description":"Specify the status to be queried.","required":false,"schema":{"type":"string","enum":["ACTIVE","INACTIVE","DISABLED","FROZEN","DELETED"],"pattern":"ACTIVE|INACTIVE|DISABLED|FROZEN|DELETED"},"index$":6},{"name":"contactEmail","in":"query","description":"Specify the contact email address to be queried.","required":false,"schema":{"type":"string","format":"email","maxLength":255,"minLength":0},"index$":7},{"name":"currencyCode","in":"query","description":"Specify the currency code(s) to be queried.","required":false,"schema":{"type":"array","items":{"type":"string","enum":["AUD","CAD","EUR","GBP","USD","MXN","SGD","PLN"]}},"index$":8},{"name":"minBalance","in":"query","description":"Specify the minimum currentBalance to be queried.","required":false,"schema":{"type":"number"},"index$":9},{"name":"maxBalance","in":"query","description":"Specify the maximum currentBalance to be queried.","required":false,"schema":{"type":"number"},"index$":10},{"name":"minDateCreatedAt","in":"query","description":"Specify the earliest createdAt date to be queried.","required":false,"schema":{"type":"string","format":"date-time"},"index$":11},{"name":"maxDateCreatedAt","in":"query","description":"Specify the latest createdAt date to be queried.","required":false,"schema":{"type":"string","format":"date-time"},"index$":12},{"name":"fundingNotificationEmail","in":"query","description":"Specify the funding notification email(s) to be queried.","required":false,"schema":{"type":"array","items":{"type":"string"},"uniqueItems":true},"index$":13}]},"GET /accounts/{accountIdentifier}":{"protocol":"http","parameters":[{"name":"accountIdentifier","in":"path","description":"The accountIdentifier for the Account you are seeking details.","required":true,"schema":{"type":"string"},"index$":0}]},"PATCH /customers/{customerIdentifier}/accounts/{accountIdentifier}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"displayName":{"type":"string","description":"optional, a friendly name for this account.","title":"Display Name","key$":"displayName"},"contactEmail":{"type":"string","description":"optional, an email address for a designated representative for this account.","title":"Email","key$":"contactEmail"},"fundingNotification":{"type":"array","description":"optional, send funding notification emails to the following address(es). A provided list replaces the existing list, an empty list clears all existing emails, and a null/omitted value leaves the list unchanged.","items":{"type":"object","properties":{"emailAddress":{"type":"string","description":"optional, email address to send funding notifications to for this account.","title":"Email"}},"x-ref":"#/components/schemas/FundingNotificationCriteria"},"title":"Funding Notification","uniqueItems":true,"key$":"fundingNotification"}},"x-ref":"#/components/schemas/UpdateAccountCriteria","index$":1}}},"required":true},"parameters":[{"name":"customerIdentifier","in":"path","description":"The customerIdentifier for the Customer under which you are updating an account.","required":true,"schema":{"type":"string"},"index$":0},{"name":"accountIdentifier","in":"path","description":"The accountIdentifier for the Account you are updating.","required":true,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let account_ref01_data = Object.values(setup.data.existing.account)[0]

    // UPDATE
    const account_ref01_ent = client.Account()
    const account_ref01_data_up0 = {}
    account_ref01_data_up0.id = account_ref01_data.id
    account_ref01_data_up0 ['customer_identifier'] = setup.idmap['customer_identifier']

    const account_ref01_markdef_up0 = { name: 'accountIdentifier', value: 'Mark01-account_ref01_' + setup.now }
    account_ref01_data_up0 [account_ref01_markdef_up0.name] = account_ref01_markdef_up0.value

    const account_ref01_resdata_up0 = (await account_ref01_ent.update(account_ref01_data_up0)).data()
    assert(account_ref01_resdata_up0.id === account_ref01_data_up0.id)

    assert(account_ref01_resdata_up0[account_ref01_markdef_up0.name] === account_ref01_markdef_up0.value)


    // LOAD
    const account_ref01_match_dt0 = {}
    account_ref01_match_dt0.id = account_ref01_data.id
    const account_ref01_data_dt0 = (await account_ref01_ent.load(account_ref01_match_dt0)).data()
    assert(account_ref01_data_dt0.id === account_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/account/AccountTestData.json')

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
    ['account01','account02','account03','customer01','customer02','customer03','customerentifier01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_ACCOUNT_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
  })

  idmap = env['TANGOCARD_TEST_ACCOUNT_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_ACCOUNT_ENTID']
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
  
