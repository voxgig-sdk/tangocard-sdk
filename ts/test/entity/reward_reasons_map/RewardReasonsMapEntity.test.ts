

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


describe('RewardReasonsMapEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.RewardReasonsMap()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'reward_reasons_map.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"CANCEL":{"a":true,"h":"Cancel","n":"CANCEL","r":false,"sh":"Map of cancel reasons","t":"`$OBJECT`","key$":"CANCEL","index$":0},"CANCEL_AND_REISSUE":{"a":true,"h":"Cancel And Reissue","n":"CANCEL_AND_REISSUE","r":false,"sh":"Map of cancel and reissue reasons","t":"`$OBJECT`","key$":"CANCEL_AND_REISSUE","index$":1},"FREEZE":{"a":true,"h":"Freeze","n":"FREEZE","r":false,"sh":"Map of freeze reasons","t":"`$OBJECT`","key$":"FREEZE","index$":2},"UNFREEZE":{"a":true,"h":"Unfreeze","n":"UNFREEZE","r":false,"sh":"Map of unfreeze reasons","t":"`$OBJECT`","key$":"UNFREEZE","index$":3}},"name":"reward_reasons_map","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /lineItems/reasonCodes","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/lineItems/reasonCodes","q":{},"r":{},"s":[{"lit":"lineItems"},{"lit":"reasonCodes"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"reward_reasons_map","name__orig":"reward_reasons_map","Name":"RewardReasonsMap","name_":"reward_reasons_map","name-":"reward-reasons-map","NAME":"REWARD_REASONS_MAP","index$":37}, {"active":true,"entity":"reward_reasons_map","key$":"BasicRewardReasonsMapFlow","kind":"basic","name":"BasicRewardReasonsMapFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"reward_reasons_map_ref01","srcdatavar":"reward_reasons_map_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-reward_reasons_map_ref01"}}],"index$":0}]}, 'RewardReasonsMap', {"GET /lineItems/reasonCodes":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let reward_reasons_map_ref01_data = Object.values(setup.data.existing.reward_reasons_map)[0] as any

    // LOAD
    const reward_reasons_map_ref01_ent = client.RewardReasonsMap()
    const reward_reasons_map_ref01_match_dt0: any = {}
    const reward_reasons_map_ref01_data_dt0 = (await reward_reasons_map_ref01_ent.load(reward_reasons_map_ref01_match_dt0)).data()
    assert(null != reward_reasons_map_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/reward_reasons_map/RewardReasonsMapTestData.json')

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
    ['reward_reasons_map01','reward_reasons_map02','reward_reasons_map03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_REWARD_REASONS_MAP_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
    'TANGOCARD_SECRET': '',
  })

  idmap = env['TANGOCARD_TEST_REWARD_REASONS_MAP_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_REWARD_REASONS_MAP_ENTID']
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
  
