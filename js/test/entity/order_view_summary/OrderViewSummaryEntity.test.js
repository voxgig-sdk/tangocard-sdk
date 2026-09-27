
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


describe('OrderViewSummaryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.OrderViewSummary()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amount":{"a":true,"h":"Amount","n":"amount","r":false,"sh":"Optional.","t":"`$NUMBER`","key$":"amount","index$":0},"deliveryMethod":{"a":true,"h":"Delivery Method","n":"deliveryMethod","r":false,"sh":"Optional.","t":"`$STRING`","key$":"deliveryMethod","index$":1},"notes":{"a":true,"h":"Notes","n":"notes","r":false,"sh":"Optional order notes (up to 150 characters).","t":"`$STRING`","key$":"notes","index$":2},"otherReason":{"a":true,"h":"Other Reason","n":"otherReason","r":false,"sh":"Required when reasonCode is \"OTHER\", enter the reason why the line item is being reissued.","t":"`$STRING`","key$":"otherReason","index$":3},"reasonCode":{"a":true,"h":"Reason Code","n":"reasonCode","r":true,"sh":"Required.","t":"`$STRING`","key$":"reasonCode","index$":4},"recipient":{"a":true,"h":"Recipient","n":"recipient","r":false,"sh":"Optional.","t":"`$OBJECT`","key$":"recipient","index$":5}},"name":"order_view_summary","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /lineItems/{referenceLineItemID}/reissue","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"reference_line_item_id","or":"reference_line_item_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/lineItems/{referenceLineItemID}/reissue","q":{"exist":["reference_line_item_id"]},"r":{"param":{"referenceLineItemID":"reference_line_item_id"}},"s":[{"lit":"lineItems"},{"var":"reference_line_item_id"},{"lit":"reissue"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.line_item"]]},"key$":"order_view_summary","name__orig":"order_view_summary","Name":"OrderViewSummary","name_":"order_view_summary","name-":"order-view-summary","NAME":"ORDER_VIEW_SUMMARY","index$":31}, {"active":true,"entity":"order_view_summary","key$":"BasicOrderViewSummaryFlow","kind":"basic","name":"BasicOrderViewSummaryFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"order_view_summary_ref01"},"m":{"reference_line_item_id":"reference_line_item01"},"o":"create","s":[],"v":[],"index$":0}]}, 'OrderViewSummary', {"POST /lineItems/{referenceLineItemID}/reissue":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"reasonCode":{"type":"string","description":"Required. Enter the reason why this line item is being reissued.","enum":["DELIVERY_INFO","REWARD_AMOUNT","REWARD_TYPE","RECIPIENT","CURRENCY","RECIPIENT_REQUESTED","OTHER"],"title":"Reason code for change","key$":"reasonCode"},"otherReason":{"type":"string","description":"Required when reasonCode is \"OTHER\", enter the reason why the line item is being reissued.","title":"Other reason","key$":"otherReason"},"amount":{"type":"number","description":"Optional. Specify the new face value of the reward.","title":"Reward amount","key$":"amount"},"deliveryMethod":{"type":"string","description":"Optional. Specify delivery method for the order.","enum":["NONE","EMAIL","PHONE","EMBEDDED","EMBEDDED_COMPONENT","WHATSAPP","BULKDIGITAL"],"title":"Delivery method","key$":"deliveryMethod"},"recipient":{"type":"object","properties":{"firstName":{"type":"string","description":"Optional. Updated recipient first name. Allows 100 characters, cannot use < or > or / in the name. Physical rewards: allows 25 character max, Digits 0-9, alpha (a-z, A-Z), space period, comma and hyphen.","maxLength":100,"minLength":0,"title":"Recipient first name"},"lastName":{"type":"string","description":"Optional. Updated recipient last name. Allows 100 characters, cannot use < or > or / in the name. Physical rewards: allows 25 character max, Digits 0-9, alpha (a-z, A-Z), space period, comma and hyphen.","maxLength":100,"minLength":0,"title":"Recipient last name"},"email":{"type":"string","description":"Optional. Updated recipient email address.","title":"Recipient email"},"mobileNumber":{"type":"string","description":"Optional. Updated recipient mobile number. Required if delivery method is SMS.","title":"Recipient mobile number"}},"description":"Optional. Use to update recipient name or email address.","title":"Recipient","x-ref":"#/components/schemas/ReissueLineItemRecipientInfoCriteria","key$":"recipient"},"notes":{"type":"string","description":"Optional order notes (up to 150 characters).","maxLength":150,"minLength":0,"title":"Order notes","key$":"notes"}},"required":["reasonCode"],"x-ref":"#/components/schemas/ReissueLineItemRequestCriteria","index$":1}}},"required":true},"parameters":[{"name":"referenceLineItemID","in":"path","description":"Reference line item ID is returned in the line item's response.","required":true,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const order_view_summary_ref01_ent = client.OrderViewSummary()
    let order_view_summary_ref01_data = setup.data.new.order_view_summary['order_view_summary_ref01']
    order_view_summary_ref01_data['reference_line_item_id'] = setup.idmap['reference_line_item01']

    order_view_summary_ref01_data = (await order_view_summary_ref01_ent.create(order_view_summary_ref01_data)).data()
    assert(null != order_view_summary_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/order_view_summary/OrderViewSummaryTestData.json')

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
    ['order_view_summary01','order_view_summary02','order_view_summary03','line_item01','line_item02','line_item03','reference_line_item01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_ORDER_VIEW_SUMMARY_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
  })

  idmap = env['TANGOCARD_TEST_ORDER_VIEW_SUMMARY_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_ORDER_VIEW_SUMMARY_ENTID']
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
  
