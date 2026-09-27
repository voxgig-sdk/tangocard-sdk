
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amount":{"a":true,"h":"Amount","n":"amount","r":true,"sh":"Specify the currency amount of the funds being transferred.","t":"`$NUMBER`","key$":"amount","index$":0},"externalRefID":{"a":true,"h":"External Ref Id","n":"externalRefID","r":false,"sh":"specify the external reference id to associate with this funding action.","t":"`$STRING`","key$":"externalRefID","index$":1},"transferDate":{"a":true,"h":"Transfer Date","n":"transferDate","r":false,"t":"`$STRING`","key$":"transferDate","index$":2},"transferFrom":{"a":true,"h":"Transfer From","n":"transferFrom","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The accountIdentifier for the Account transferring funds from.","t":"`$OBJECT`","key$":"transferFrom","index$":3},"transferNotes":{"a":true,"h":"Transfer Notes","n":"transferNotes","r":false,"sh":"Optional transfer notes (up to 150 characters)","t":"`$STRING`","key$":"transferNotes","index$":4},"transferTo":{"a":true,"h":"Transfer To","n":"transferTo","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The accountIdentifier for the Account transferring funds to.","t":"`$OBJECT`","key$":"transferTo","index$":5},"transferredAmount":{"a":true,"h":"Transferred Amount","n":"transferredAmount","r":false,"t":"`$NUMBER`","key$":"transferredAmount","index$":6}},"name":"transfer_fund","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /transferFunds","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/transferFunds","q":{},"r":{},"s":[{"lit":"transferFunds"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"transfer_fund","name__orig":"transfer_fund","Name":"TransferFund","name_":"transfer_fund","name-":"transfer-fund","NAME":"TRANSFER_FUND","index$":38}, {"active":true,"entity":"transfer_fund","key$":"BasicTransferFundFlow","kind":"basic","name":"BasicTransferFundFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"transfer_fund_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'TransferFund', {"POST /transferFunds":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","description":"The transferFundsCriteria object.","properties":{"externalRefID":{"type":"string","description":"specify the external reference id to associate with this funding action. Must be unique","title":"External Reference Identifier","key$":"externalRefID"},"transferFrom":{"type":"string","description":"The accountIdentifier for the Account transferring funds from.","minLength":1,"title":"Transfer From","key$":"transferFrom"},"transferTo":{"type":"string","description":"The accountIdentifier for the Account transferring funds to.","minLength":1,"title":"Transfer To","key$":"transferTo"},"amount":{"type":"number","description":"Specify the currency amount of the funds being transferred.","minimum":0,"title":"amount","key$":"amount"},"transferNotes":{"type":"string","description":"Optional transfer notes (up to 150 characters)","maxLength":150,"minLength":0,"title":"Transfer Notes","key$":"transferNotes"}},"required":["amount","transferFrom","transferTo"],"x-ref":"#/components/schemas/TransferFundsCriteria","index$":1}}},"required":true},"parameters":[]}})
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
  
