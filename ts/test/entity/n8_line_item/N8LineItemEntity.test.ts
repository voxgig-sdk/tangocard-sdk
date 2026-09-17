

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"campaign","req":false,"short":"optional campaign that may be used to administratively categorize a specific order.","type":"`$STRING`","index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"orderNotes","req":false,"short":"Optional order notes (up to 150 characters)","type":"`$STRING`","index$":2},{"active":true,"name":"purchaseOrderNumber","req":false,"short":"The Purchase Order Number associated with this order.","type":"`$STRING`","index$":3}],"id":{"field":"id","name":"id"},"name":"n8_line_item","op":{"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"reference_line_item_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"PATCH /lineItems/{referenceLineItemID}","json":"{\"operationId\":\"updateLineItem\",\"parameters\":[{\"description\":\"Reference line item ID is returned in the line item's response.\",\"in\":\"path\",\"name\":\"referenceLineItemID\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"campaign\":{\"description\":\"optional campaign that may be used to administratively categorize a specific order.\",\"pattern\":\"^[a-zA-Z0-9 ]{0,100}$\",\"title\":\"Campaign\",\"type\":\"string\"},\"orderNotes\":{\"description\":\"Optional order notes (up to 150 characters)\",\"maxLength\":150,\"minLength\":0,\"title\":\"Order Notes\",\"type\":\"string\"},\"purchaseOrderNumber\":{\"description\":\"The Purchase Order Number associated with this order.\",\"title\":\"Purchase Order Number\",\"type\":\"string\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"202\":{\"content\":{\"application/json\":{\"example\":\"\\\"Accepted\\\"\",\"schema\":{\"type\":\"string\"}}},\"description\":\"Accepted\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Forbidden\"},\"409\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Conflict; Duplicate Exists\"},\"422\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unprocessable Entity\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PATCH","orig":"/lineItems/{referenceLineItemID}","rename":{"param":{"referenceLineItemID":"id"}},"segments":[{"lit":"lineItems"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"n8_line_item","name__orig":"n8_line_item","Name":"N8LineItem","name_":"n8_line_item","name-":"n8-line-item","NAME":"N8_LINE_ITEM","index$":32}, {"active":true,"entity":"n8_line_item","key$":"BasicN8LineItemFlow","kind":"basic","name":"BasicN8LineItemFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"n8_line_item_ref01","srcdatavar":"n8_line_item_ref01_data","suffix":"_up0","textfield":"campaign"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-n8_line_item_ref01"}}],"valid":[],"index$":0}]}, 'N8LineItem')
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
  
