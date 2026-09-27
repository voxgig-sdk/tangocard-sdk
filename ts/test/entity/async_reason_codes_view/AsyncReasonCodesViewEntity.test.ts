

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


describe('AsyncReasonCodesViewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.AsyncReasonCodesView()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'async_reason_codes_view.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"async_reason_codes_view","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /asyncOrders/reasonCodes","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/asyncOrders/reasonCodes","q":{},"r":{},"s":[{"lit":"asyncOrders"},{"lit":"reasonCodes"}],"t":{"req":"`reqdata`","res":"`body.reasonCodes`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"async_reason_codes_view","name__orig":"async_reason_codes_view","Name":"AsyncReasonCodesView","name_":"async_reason_codes_view","name-":"async-reason-codes-view","NAME":"ASYNC_REASON_CODES_VIEW","index$":6}, {"active":true,"entity":"async_reason_codes_view","key$":"BasicAsyncReasonCodesViewFlow","kind":"basic","name":"BasicAsyncReasonCodesViewFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"async_reason_codes_view_ref01","srcdatavar":"async_reason_codes_view_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-async_reason_codes_view_ref01"}}],"index$":0}]}, 'AsyncReasonCodesView', {"GET /asyncOrders/reasonCodes":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let async_reason_codes_view_ref01_data = Object.values(setup.data.existing.async_reason_codes_view)[0] as any

    // LOAD
    const async_reason_codes_view_ref01_ent = client.AsyncReasonCodesView()
    const async_reason_codes_view_ref01_match_dt0: any = {}
    const async_reason_codes_view_ref01_data_dt0 = (await async_reason_codes_view_ref01_ent.load(async_reason_codes_view_ref01_match_dt0)).data()
    assert(null != async_reason_codes_view_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/async_reason_codes_view/AsyncReasonCodesViewTestData.json')

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
    ['async_reason_codes_view01','async_reason_codes_view02','async_reason_codes_view03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_ASYNC_REASON_CODES_VIEW_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
    'TANGOCARD_SECRET': '',
  })

  idmap = env['TANGOCARD_TEST_ASYNC_REASON_CODES_VIEW_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_ASYNC_REASON_CODES_VIEW_ENTID']
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
  
