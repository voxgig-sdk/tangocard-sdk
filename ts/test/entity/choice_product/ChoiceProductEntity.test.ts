

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


describe('ChoiceProductEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.ChoiceProduct()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'choice_product.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"countries":{"a":true,"h":"Countries","n":"countries","r":false,"t":"`$ARRAY`","key$":"countries","index$":0},"currencyCode":{"a":true,"h":"Currency Code","n":"currencyCode","r":false,"t":"`$STRING`","key$":"currencyCode","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"rewardName":{"a":true,"h":"Reward Name","n":"rewardName","r":false,"t":"`$STRING`","key$":"rewardName","index$":3},"utid":{"a":true,"h":"Utid","n":"utid","r":false,"t":"`$STRING`","key$":"utid","index$":4}},"id":{"field":"id","name":"id"},"name":"choice_product","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /choiceProducts","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"country","or":"country","r":false,"t":"`$ARRAY`","index$":0},{"a":true,"k":"query","n":"currency_code","or":"currency_code","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"reward_name","or":"reward_name","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/choiceProducts","q":{"exist":["country","currency_code","reward_name"]},"r":{},"s":[{"lit":"choiceProducts"}],"t":{"req":"`reqdata`","res":"`body.choiceProducts`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /choiceProducts/{utid}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"utid","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/choiceProducts/{utid}","q":{"exist":["id"]},"r":{"param":{"utid":"id"}},"s":[{"lit":"choiceProducts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"choice_product","name__orig":"choice_product","Name":"ChoiceProduct","name_":"choice_product","name-":"choice-product","NAME":"CHOICE_PRODUCT","index$":11}, {"active":true,"entity":"choice_product","key$":"BasicChoiceProductFlow","kind":"basic","name":"BasicChoiceProductFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"choice_product_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"choice_product_ref01","srcdatavar":"choice_product_ref01_data","suffix":"_dt0"},"m":{"id":"choice_product01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-choice_product_ref01"}}],"index$":1}]}, 'ChoiceProduct', {"GET /choiceProducts":{"protocol":"http","parameters":[{"name":"rewardName","in":"query","description":"Specify the reward name to be queried.","required":false,"schema":{"type":"string"},"index$":0},{"name":"currencyCode","in":"query","description":"Specify the currency code to be queried.","required":false,"schema":{"type":"string"},"index$":1},{"name":"countries","in":"query","description":"Specify the list of countries to be queried.","required":false,"schema":{"type":"array","items":{"type":"string"}},"index$":2}]},"GET /choiceProducts/{utid}":{"protocol":"http","parameters":[{"name":"utid","in":"path","description":"Specify the unique identifier of the Choice Product to be queried","required":true,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let choice_product_ref01_data = Object.values(setup.data.existing.choice_product)[0] as any

    // LIST
    const choice_product_ref01_ent = client.ChoiceProduct()
    const choice_product_ref01_match: any = {}

    const choice_product_ref01_list = (await choice_product_ref01_ent.list(choice_product_ref01_match)).map((e: any) => e.data())


    // LOAD
    const choice_product_ref01_match_dt0: any = {}
    choice_product_ref01_match_dt0.id = choice_product_ref01_data.id
    const choice_product_ref01_data_dt0 = (await choice_product_ref01_ent.load(choice_product_ref01_match_dt0)).data()
    assert(choice_product_ref01_data_dt0.id === choice_product_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/choice_product/ChoiceProductTestData.json')

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
    ['choice_product01','choice_product02','choice_product03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_CHOICE_PRODUCT_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
    'TANGOCARD_SECRET': '',
  })

  idmap = env['TANGOCARD_TEST_CHOICE_PRODUCT_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_CHOICE_PRODUCT_ENTID']
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
  
