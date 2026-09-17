

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { TangocardSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


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

    const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'async_update_line_item_view.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"deliveryDate","req":false,"short":"Optional.","type":"`$STRING`","index$":0},{"active":true,"name":"lineItemNote","req":false,"short":"Optional line item notes (up to 150 characters)","type":"`$STRING`","index$":1},{"active":true,"name":"senderInfo","req":false,"short":"Optional.","type":"`$OBJECT`","index$":2}],"name":"async_update_line_item_view","op":{"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"reference_line_item_id","orig":"reference_line_item_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"PATCH /asyncOrders/lineItems/{referenceLineItemId}","json":"{\"operationId\":\"updateAsyncLineItem\",\"parameters\":[{\"description\":\"Reference Line Item ID\",\"in\":\"path\",\"name\":\"referenceLineItemId\",\"required\":true,\"schema\":{\"minLength\":1,\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"deliveryDate\":{\"description\":\"Optional. Specify the date to deliver the reward to the recipient. It must be at least 7 days in the future. If not specified, the reward will be immediately send.\",\"title\":\"Schedule Delivery Date\",\"type\":\"string\"},\"lineItemNote\":{\"description\":\"Optional line item notes (up to 150 characters)\",\"maxLength\":150,\"minLength\":0,\"title\":\"Notes\",\"type\":\"string\"},\"senderInfo\":{\"description\":\"Optional.  Use to set the sender’s name and email address if different than the default platform setting.\",\"properties\":{\"email\":{\"description\":\"always optional\",\"title\":\"Email\",\"type\":\"string\"},\"firstName\":{\"description\":\"always optional (100 character max)\",\"title\":\"First Name\",\"type\":\"string\"},\"lastName\":{\"description\":\"always optional (100 character max)\",\"title\":\"Last Name\",\"type\":\"string\"}},\"title\":\"Sender Details\",\"type\":\"object\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"deliveryDate\":{\"description\":\"Updated delivery date\",\"format\":\"date-time\",\"type\":\"string\"},\"note\":{\"description\":\"Updated line item note\",\"type\":\"string\"},\"senderInfo\":{\"description\":\"Updated sender information\",\"properties\":{\"email\":{\"title\":\"Email\",\"type\":\"string\"},\"firstName\":{\"title\":\"First Name\",\"type\":\"string\"},\"lastName\":{\"title\":\"Last Name\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Created\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Not Found\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Exceeded the allowable TPS rate limit\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Internal Server Error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Service Unavailable\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PATCH","orig":"/asyncOrders/lineItems/{referenceLineItemId}","rename":{"param":{"referenceLineItemId":"reference_line_item_id"}},"segments":[{"lit":"asyncOrders"},{"lit":"lineItems"},{"var":"reference_line_item_id"}],"select":{"exist":["reference_line_item_id"]},"transform":{"req":"`reqdata`","res":"`body.senderInfo`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["line_item"]]},"key$":"async_update_line_item_view","name__orig":"async_update_line_item_view","Name":"AsyncUpdateLineItemView","name_":"async_update_line_item_view","name-":"async-update-line-item-view","NAME":"ASYNC_UPDATE_LINE_ITEM_VIEW","index$":7}, {"active":true,"entity":"async_update_line_item_view","key$":"BasicAsyncUpdateLineItemViewFlow","kind":"basic","name":"BasicAsyncUpdateLineItemViewFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"async_update_line_item_view_ref01","srcdatavar":"async_update_line_item_view_ref01_data","suffix":"_up0","textfield":"deliveryDate"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-async_update_line_item_view_ref01"}}],"valid":[],"index$":0}]}, 'AsyncUpdateLineItemView')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let async_update_line_item_view_ref01_data = Object.values(setup.data.existing.async_update_line_item_view)[0] as any

    // UPDATE
    const async_update_line_item_view_ref01_ent = client.AsyncUpdateLineItemView()
    const async_update_line_item_view_ref01_data_up0: any = {}

    const async_update_line_item_view_ref01_markdef_up0 = { name: 'deliveryDate', value: 'Mark01-async_update_line_item_view_ref01_' + setup.now }
    ;(async_update_line_item_view_ref01_data_up0 as any)[async_update_line_item_view_ref01_markdef_up0.name] = async_update_line_item_view_ref01_markdef_up0.value

    const async_update_line_item_view_ref01_resdata_up0 = (await async_update_line_item_view_ref01_ent.update(async_update_line_item_view_ref01_data_up0)).data()
    assert(null != async_update_line_item_view_ref01_resdata_up0)

    assert((async_update_line_item_view_ref01_resdata_up0 as any)[async_update_line_item_view_ref01_markdef_up0.name] === async_update_line_item_view_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

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
    'TANGOCARD_SECRET': '',
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
        secret: env.TANGOCARD_SECRET,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
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
  
