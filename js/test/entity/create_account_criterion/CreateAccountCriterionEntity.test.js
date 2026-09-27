
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


describe('CreateAccountCriterionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.CreateAccountCriterion()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"accountIdentifier":{"a":true,"h":"Account Identifier","n":"accountIdentifier","r":true,"sh":"A unique identifier for this account.","t":"`$STRING`","key$":"accountIdentifier","index$":0},"contactEmail":{"a":true,"h":"Contact Email","n":"contactEmail","r":true,"sh":"An email address for a designated representative for this account.","t":"`$STRING`","key$":"contactEmail","index$":1},"currencyCode":{"a":true,"h":"Currency Code","n":"currencyCode","r":false,"sh":"The currency this account will accept for deposits/withdraws.","t":"`$STRING`","key$":"currencyCode","index$":2},"displayName":{"a":true,"h":"Display Name","n":"displayName","r":true,"sh":"A friendly name for this account.","t":"`$STRING`","key$":"displayName","index$":3},"fundingNotification":{"a":true,"h":"Funding Notification","n":"fundingNotification","r":false,"sh":"optional, send funding notification emails to the following address(es)","t":"`$ARRAY`","key$":"fundingNotification","index$":4}},"name":"create_account_criterion","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /customers/{customerIdentifier}/accounts","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_identifier","or":"customer_identifier","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/customers/{customerIdentifier}/accounts","q":{"exist":["customer_identifier"]},"r":{"param":{"customerIdentifier":"customer_identifier"}},"s":[{"lit":"customers"},{"var":"customer_identifier"},{"lit":"accounts"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.customer"]]},"key$":"create_account_criterion","name__orig":"create_account_criterion","Name":"CreateAccountCriterion","name_":"create_account_criterion","name-":"create-account-criterion","NAME":"CREATE_ACCOUNT_CRITERION","index$":13}, {"active":true,"entity":"create_account_criterion","key$":"BasicCreateAccountCriterionFlow","kind":"basic","name":"BasicCreateAccountCriterionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"create_account_criterion_ref01"},"m":{"customer_identifier":"customerentifier01"},"o":"create","s":[],"v":[],"index$":0}]}, 'CreateAccountCriterion', {"POST /customers/{customerIdentifier}/accounts":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"accountIdentifier":{"type":"string","description":"A unique identifier for this account. Must be between 5-100 characters and accepts the following: -0-9a-zA-Z in any sequence.","pattern":"^[-a-zA-Z0-9]{5,100}$","title":"Account Identifier","key$":"accountIdentifier"},"displayName":{"type":"string","description":"A friendly name for this account.","title":"Display Name","key$":"displayName"},"contactEmail":{"type":"string","description":"An email address for a designated representative for this account.","title":"Email","key$":"contactEmail"},"currencyCode":{"type":"string","default":"USD","description":"The currency this account will accept for deposits/withdraws. Only one currency can be specified, and can never be changed. Default to USD if not specified.","enum":["AUD","CAD","EUR","GBP","USD","MXN","SGD","PLN"],"title":"Currency Code","key$":"currencyCode"},"fundingNotification":{"type":"array","description":"optional, send funding notification emails to the following address(es)","items":{"type":"object","properties":{"emailAddress":{"type":"string","description":"optional, email address to send funding notifications to for this account.","title":"Email"}},"x-ref":"#/components/schemas/FundingNotificationCriteria"},"title":"Funding Notification","uniqueItems":true,"key$":"fundingNotification"}},"required":["accountIdentifier","contactEmail","displayName"],"x-ref":"#/components/schemas/CreateAccountCriteria","index$":1}}},"required":true},"parameters":[{"name":"customerIdentifier","in":"path","description":"The customerIdentifier for the Customer under which you are creating a new account","required":true,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const create_account_criterion_ref01_ent = client.CreateAccountCriterion()
    let create_account_criterion_ref01_data = setup.data.new.create_account_criterion['create_account_criterion_ref01']
    create_account_criterion_ref01_data['customer_identifier'] = setup.idmap['customerentifier01']

    create_account_criterion_ref01_data = (await create_account_criterion_ref01_ent.create(create_account_criterion_ref01_data)).data()
    assert(null != create_account_criterion_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/create_account_criterion/CreateAccountCriterionTestData.json')

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
    ['create_account_criterion01','create_account_criterion02','create_account_criterion03','customer01','customer02','customer03','customerentifier01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_CREATE_ACCOUNT_CRITERION_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
  })

  idmap = env['TANGOCARD_TEST_CREATE_ACCOUNT_CRITERION_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_CREATE_ACCOUNT_CRITERION_ENTID']
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
  
