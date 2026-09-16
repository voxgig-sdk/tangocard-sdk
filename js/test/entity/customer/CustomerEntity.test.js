
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"customerIdentifier","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"displayName","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"email","req":false,"type":"`$STRING`","index$":2}],"name":"customer","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /customers","json":"{\"operationId\":\"listCustomers\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"customerIdentifier\":{\"type\":\"string\"},\"displayName\":{\"type\":\"string\"},\"email\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Customers\"}},\"security\":[{\"basicAuth\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/customers","segments":[{"lit":"customers"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"customer","name__orig":"customer","Name":"Customer","name_":"customer","name-":"customer","NAME":"CUSTOMER","index$":1}, {"active":true,"entity":"customer","key$":"BasicCustomerFlow","kind":"basic","name":"BasicCustomerFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"customer_ref01"}}],"index$":0}]}, 'Customer')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let customer_ref01_data = Object.values(setup.data.existing.customer)[0]

    // LIST
    const customer_ref01_ent = client.Customer()
    const customer_ref01_match = {}

    const customer_ref01_list = (await customer_ref01_ent.list(customer_ref01_match)).map((e) => e.data())


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
  
