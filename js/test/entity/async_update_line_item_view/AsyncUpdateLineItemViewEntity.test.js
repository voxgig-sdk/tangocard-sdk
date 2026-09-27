
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


describe('AsyncUpdateLineItemViewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.AsyncUpdateLineItemView()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"deliveryDate":{"a":true,"h":"Delivery Date","n":"deliveryDate","r":false,"sh":"Optional.","t":"`$STRING`","key$":"deliveryDate","index$":0},"lineItemNote":{"a":true,"h":"Line Item Note","n":"lineItemNote","r":false,"sh":"Optional line item notes (up to 150 characters)","t":"`$STRING`","key$":"lineItemNote","index$":1},"senderInfo":{"a":true,"h":"Sender Info","n":"senderInfo","r":false,"sh":"Optional.","t":"`$OBJECT`","key$":"senderInfo","index$":2}},"name":"async_update_line_item_view","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /asyncOrders/lineItems/{referenceLineItemId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"reference_line_item_id","or":"reference_line_item_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/asyncOrders/lineItems/{referenceLineItemId}","q":{"exist":["reference_line_item_id"]},"r":{"param":{"referenceLineItemId":"reference_line_item_id"}},"s":[{"lit":"asyncOrders"},{"lit":"lineItems"},{"var":"reference_line_item_id"}],"t":{"req":"`reqdata`","res":"`body.senderInfo`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.line_item"]]},"key$":"async_update_line_item_view","name__orig":"async_update_line_item_view","Name":"AsyncUpdateLineItemView","name_":"async_update_line_item_view","name-":"async-update-line-item-view","NAME":"ASYNC_UPDATE_LINE_ITEM_VIEW","index$":7}, {"active":true,"entity":"async_update_line_item_view","key$":"BasicAsyncUpdateLineItemViewFlow","kind":"basic","name":"BasicAsyncUpdateLineItemViewFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"async_update_line_item_view_ref01","srcdatavar":"async_update_line_item_view_ref01_data","suffix":"_up0","textfield":"deliveryDate"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-async_update_line_item_view_ref01"}}],"v":[],"index$":0}]}, 'AsyncUpdateLineItemView', {"PATCH /asyncOrders/lineItems/{referenceLineItemId}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"lineItemNote":{"type":"string","description":"Optional line item notes (up to 150 characters)","maxLength":150,"minLength":0,"title":"Notes","key$":"lineItemNote"},"deliveryDate":{"type":"string","description":"Optional. Specify the date to deliver the reward to the recipient. It must be at least 7 days in the future. If not specified, the reward will be immediately send.","title":"Schedule Delivery Date","key$":"deliveryDate"},"senderInfo":{"type":"object","properties":{"firstName":{"type":"string","description":"always optional (100 character max)","title":"First Name"},"lastName":{"type":"string","description":"always optional (100 character max)","title":"Last Name"},"email":{"type":"string","description":"always optional","title":"Email"}},"description":"Optional.  Use to set the sender’s name and email address if different than the default platform setting.","title":"Sender Details","x-ref":"#/components/schemas/SenderInfoCriteria","key$":"senderInfo"}},"x-ref":"#/components/schemas/UpdateAsyncLineItemCriteria","index$":1}}},"required":true},"parameters":[{"name":"referenceLineItemId","in":"path","description":"Reference Line Item ID","required":true,"schema":{"type":"string","minLength":1},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let async_update_line_item_view_ref01_data = Object.values(setup.data.existing.async_update_line_item_view)[0]

    // UPDATE
    const async_update_line_item_view_ref01_ent = client.AsyncUpdateLineItemView()
    const async_update_line_item_view_ref01_data_up0 = {}

    const async_update_line_item_view_ref01_markdef_up0 = { name: 'deliveryDate', value: 'Mark01-async_update_line_item_view_ref01_' + setup.now }
    async_update_line_item_view_ref01_data_up0 [async_update_line_item_view_ref01_markdef_up0.name] = async_update_line_item_view_ref01_markdef_up0.value

    const async_update_line_item_view_ref01_resdata_up0 = (await async_update_line_item_view_ref01_ent.update(async_update_line_item_view_ref01_data_up0)).data()
    assert(null != async_update_line_item_view_ref01_resdata_up0)

    assert(async_update_line_item_view_ref01_resdata_up0[async_update_line_item_view_ref01_markdef_up0.name] === async_update_line_item_view_ref01_markdef_up0.value)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/async_update_line_item_view/AsyncUpdateLineItemViewTestData.json')

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
    ['async_update_line_item_view01','async_update_line_item_view02','async_update_line_item_view03','line_item01','line_item02','line_item03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_ASYNC_UPDATE_LINE_ITEM_VIEW_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
  })

  idmap = env['TANGOCARD_TEST_ASYNC_UPDATE_LINE_ITEM_VIEW_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_ASYNC_UPDATE_LINE_ITEM_VIEW_ENTID']
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
  
