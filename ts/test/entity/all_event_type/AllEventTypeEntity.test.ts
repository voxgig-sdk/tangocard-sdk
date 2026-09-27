

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


describe('AllEventTypeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.AllEventType()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'all_event_type.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"category":{"a":true,"h":"Category","n":"category","r":false,"sh":"The category of events can be subscribed to.","t":"`$STRING`","key$":"category","index$":0},"eventTypes":{"a":true,"h":"Event Types","n":"eventTypes","r":false,"sh":"The event types that can be subscribed to.","t":"`$ARRAY`","key$":"eventTypes","index$":1}},"name":"all_event_type","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /webhooks/eventtypes","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"category","or":"category","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":10,"k":"query","n":"max_result","or":"max_result","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"next_cursor","or":"next_cursor","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"prev_cursor","or":"prev_cursor","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/webhooks/eventtypes","q":{"exist":["category","max_result","next_cursor","prev_cursor"]},"r":{},"s":[{"lit":"webhooks"},{"lit":"eventtypes"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"all_event_type","name__orig":"all_event_type","Name":"AllEventType","name_":"all_event_type","name-":"all-event-type","NAME":"ALL_EVENT_TYPE","index$":2}, {"active":true,"entity":"all_event_type","key$":"BasicAllEventTypeFlow","kind":"basic","name":"BasicAllEventTypeFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"all_event_type_ref01"}}],"index$":0}]}, 'AllEventType', {"GET /webhooks/eventtypes":{"protocol":"http","parameters":[{"name":"prevCursor","in":"query","description":"Specify previous cursor to return (optional).","required":false,"schema":{"type":"string"},"index$":0},{"name":"nextCursor","in":"query","description":"Specify next cursor to return (optional).","required":false,"schema":{"type":"string"},"index$":1},{"name":"maxResults","in":"query","description":"Specify the max results to return (optional).","required":false,"schema":{"type":"integer","format":"int32","default":10,"maximum":200},"index$":2},{"name":"category","in":"query","description":"Specify the category to return (optional).","required":false,"schema":{"type":"string"},"index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let all_event_type_ref01_data = Object.values(setup.data.existing.all_event_type)[0] as any

    // LIST
    const all_event_type_ref01_ent = client.AllEventType()
    const all_event_type_ref01_match: any = {}

    const all_event_type_ref01_list = (await all_event_type_ref01_ent.list(all_event_type_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/all_event_type/AllEventTypeTestData.json')

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
    ['all_event_type01','all_event_type02','all_event_type03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_ALL_EVENT_TYPE_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
    'TANGOCARD_SECRET': '',
  })

  idmap = env['TANGOCARD_TEST_ALL_EVENT_TYPE_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_ALL_EVENT_TYPE_ENTID']
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
  
