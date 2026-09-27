

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('N8LineItemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.N8LineItem()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'n8_line_item.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"campaign":{"a":true,"h":"Campaign","n":"campaign","r":false,"sh":"optional campaign that may be used to administratively categorize a specific order.","t":"`$STRING`","key$":"campaign","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"orderNotes":{"a":true,"h":"Order Notes","n":"orderNotes","r":false,"sh":"Optional order notes (up to 150 characters)","t":"`$STRING`","key$":"orderNotes","index$":2},"purchaseOrderNumber":{"a":true,"h":"Purchase Order Number","n":"purchaseOrderNumber","r":false,"sh":"The Purchase Order Number associated with this order.","t":"`$STRING`","key$":"purchaseOrderNumber","index$":3}},"id":{"field":"id","name":"id"},"name":"n8_line_item","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /lineItems/{referenceLineItemID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"reference_line_item_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/lineItems/{referenceLineItemID}","q":{"exist":["id"]},"r":{"param":{"referenceLineItemID":"id"}},"s":[{"lit":"lineItems"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"n8_line_item","name__orig":"n8_line_item","Name":"N8LineItem","name_":"n8_line_item","name-":"n8-line-item","NAME":"N8_LINE_ITEM","index$":28}, {"active":true,"entity":"n8_line_item","key$":"BasicN8LineItemFlow","kind":"basic","name":"BasicN8LineItemFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"n8_line_item_ref01","srcdatavar":"n8_line_item_ref01_data","suffix":"_up0","textfield":"campaign"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-n8_line_item_ref01"}}],"v":[],"index$":0}]}, 'N8LineItem', {"PATCH /lineItems/{referenceLineItemID}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"purchaseOrderNumber":{"type":"string","description":"The Purchase Order Number associated with this order.","title":"Purchase Order Number","key$":"purchaseOrderNumber"},"campaign":{"type":"string","description":"optional campaign that may be used to administratively categorize a specific order.","pattern":"^[a-zA-Z0-9 ]{0,100}$","title":"Campaign","key$":"campaign"},"orderNotes":{"type":"string","description":"Optional order notes (up to 150 characters)","maxLength":150,"minLength":0,"title":"Order Notes","key$":"orderNotes"}},"x-ref":"#/components/schemas/UpdateLineItemRequest","index$":1}}},"required":true},"parameters":[{"name":"referenceLineItemID","in":"path","description":"Reference line item ID is returned in the line item's response.","required":true,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let n8_line_item_ref01_data = Object.values(setup.data.existing.n8_line_item)[0] as any

    // UPDATE
    const n8_line_item_ref01_ent = client.N8LineItem()
    const n8_line_item_ref01_data_up0: any = {}
    n8_line_item_ref01_data_up0.id = n8_line_item_ref01_data.id

    const n8_line_item_ref01_markdef_up0 = { name: 'campaign', value: 'Mark01-n8_line_item_ref01_' + setup.now }
    ;(n8_line_item_ref01_data_up0 as any)[n8_line_item_ref01_markdef_up0.name] = n8_line_item_ref01_markdef_up0.value

    const n8_line_item_ref01_resdata_up0 = (await n8_line_item_ref01_ent.update(n8_line_item_ref01_data_up0)).data()
    assert(n8_line_item_ref01_resdata_up0.id === n8_line_item_ref01_data_up0.id)

    assert((n8_line_item_ref01_resdata_up0 as any)[n8_line_item_ref01_markdef_up0.name] === n8_line_item_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/n8_line_item/N8LineItemTestData.json')

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
    ['n8_line_item01','n8_line_item02','n8_line_item03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_N8_LINE_ITEM_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
    'TANGOCARD_SECRET': '',
  })

  idmap = env['TANGOCARD_TEST_N8_LINE_ITEM_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_N8_LINE_ITEM_ENTID']
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
  
