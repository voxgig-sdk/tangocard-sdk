

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


describe('BalanceAlertViewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.BalanceAlertView()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'balance_alert_view.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"balance_alert_view","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_identifier","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"balance_alert_id","or":"balance_alert_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"customer_identifier","or":"customer_identifier","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}","q":{"exist":["account_id","balance_alert_id","customer_identifier"]},"r":{"param":{"accountIdentifier":"account_id","balanceAlertID":"balance_alert_id","customerIdentifier":"customer_identifier"}},"s":[{"lit":"customers"},{"var":"customer_identifier"},{"lit":"accounts"},{"var":"account_id"},{"lit":"lowbalance"},{"var":"balance_alert_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.customer","$.main.kit.entity.account"]]},"key$":"balance_alert_view","name__orig":"balance_alert_view","Name":"BalanceAlertView","name_":"balance_alert_view","name-":"balance-alert-view","NAME":"BALANCE_ALERT_VIEW","index$":8}, {"active":true,"entity":"balance_alert_view","key$":"BasicBalanceAlertViewFlow","kind":"basic","name":"BasicBalanceAlertViewFlow","param":{},"step":[]}, 'BalanceAlertView', {"DELETE /customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}":{"protocol":"http","parameters":[{"name":"customerIdentifier","in":"path","description":"The customerIdentifier for the Customer / Account combination.","required":true,"schema":{"type":"string"},"index$":0},{"name":"accountIdentifier","in":"path","description":"The accountIdentifier for the Customer / Account combination.","required":true,"schema":{"type":"string"},"index$":1},{"name":"balanceAlertID","in":"path","description":"The balance alert ID that is being deleted.","required":true,"schema":{"type":"string","format":"uuid"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let balance_alert_view_ref01_data = Object.values(setup.data.existing.balance_alert_view)[0] as any

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/balance_alert_view/BalanceAlertViewTestData.json')

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
    ['balance_alert_view01','balance_alert_view02','balance_alert_view03','customer01','customer02','customer03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_BALANCE_ALERT_VIEW_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
    'TANGOCARD_SECRET': '',
  })

  idmap = env['TANGOCARD_TEST_BALANCE_ALERT_VIEW_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_BALANCE_ALERT_VIEW_ENTID']
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
  
