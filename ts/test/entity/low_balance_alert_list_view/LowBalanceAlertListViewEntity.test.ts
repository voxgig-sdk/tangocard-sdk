

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


describe('LowBalanceAlertListViewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.LowBalanceAlertListView()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'low_balance_alert_list_view.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"accountIdentifier":{"a":true,"h":"Account Identifier","n":"accountIdentifier","r":false,"t":"`$STRING`","key$":"accountIdentifier","index$":0},"balanceAlertDisplayName":{"a":true,"h":"Balance Alert Display Name","n":"balanceAlertDisplayName","r":false,"t":"`$STRING`","key$":"balanceAlertDisplayName","index$":1},"balanceAlertID":{"a":true,"fo":"uuid","h":"Balance Alert Id","n":"balanceAlertID","r":false,"t":"`$STRING`","key$":"balanceAlertID","index$":2},"balanceAlertNotification":{"a":true,"h":"Balance Alert Notification","n":"balanceAlertNotification","r":false,"t":"`$ARRAY`","key$":"balanceAlertNotification","index$":3},"balanceAlertThreshold":{"a":true,"h":"Balance Alert Threshold","n":"balanceAlertThreshold","r":false,"t":"`$NUMBER`","key$":"balanceAlertThreshold","index$":4},"createdAt":{"a":true,"h":"Created At","n":"createdAt","r":false,"t":"`$STRING`","key$":"createdAt","index$":5},"customerIdentifier":{"a":true,"h":"Customer Identifier","n":"customerIdentifier","r":false,"t":"`$STRING`","key$":"customerIdentifier","index$":6}},"name":"low_balance_alert_list_view","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_identifier","or":"account_identifier","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"customer_identifier","or":"customer_identifier","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"balance_alert_display_name","or":"balance_alert_display_name","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"balance_alert_notification","or":"balance_alert_notification","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"balance_alert_threshold","or":"balance_alert_threshold","r":false,"t":"`$NUMBER`","index$":2},{"a":true,"k":"query","n":"elements_per_block","or":"elements_per_block","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":4}]},"k":"http","m":"GET","o":"/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance","q":{"exist":["account_identifier","balance_alert_display_name","balance_alert_notification","balance_alert_threshold","customer_identifier","elements_per_block","page"]},"r":{"param":{"accountIdentifier":"account_identifier","customerIdentifier":"customer_identifier"}},"s":[{"lit":"customers"},{"var":"customer_identifier"},{"lit":"accounts"},{"var":"account_identifier"},{"lit":"lowbalance"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.customer","$.main.kit.entity.account"]]},"key$":"low_balance_alert_list_view","name__orig":"low_balance_alert_list_view","Name":"LowBalanceAlertListView","name_":"low_balance_alert_list_view","name-":"low-balance-alert-list-view","NAME":"LOW_BALANCE_ALERT_LIST_VIEW","index$":23}, {"active":true,"entity":"low_balance_alert_list_view","key$":"BasicLowBalanceAlertListViewFlow","kind":"basic","name":"BasicLowBalanceAlertListViewFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_identifier":"accountentifier01","customer_identifier":"customerentifier01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"low_balance_alert_list_view_ref01"}}],"index$":0}]}, 'LowBalanceAlertListView', {"GET /customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance":{"protocol":"http","parameters":[{"name":"customerIdentifier","in":"path","description":"The customerIdentifier for the Customer / Account combination.","required":true,"schema":{"type":"string"},"index$":0},{"name":"accountIdentifier","in":"path","description":"The accountIdentifier for the Customer / Account combination.","required":true,"schema":{"type":"string"},"index$":1},{"name":"elementsPerBlock","in":"query","description":"specify the number of elements in a block.","required":false,"schema":{"type":"integer","format":"int32"},"index$":2},{"name":"page","in":"query","description":"specify the page number to return.","required":false,"schema":{"type":"integer","format":"int32"},"index$":3},{"name":"balanceAlertDisplayName","in":"query","description":"A friendly name for this low balance alert (will be displayed in the Tango Portal) to be queried.","required":false,"schema":{"type":"string"},"index$":4},{"name":"balanceAlertThreshold","in":"query","description":"The threshold amount that will trigger the low balance alert to be queried.","required":false,"schema":{"type":"number"},"index$":5},{"name":"balanceAlertNotification","in":"query","description":" Low balance notification emails address(es) to be queried.","required":false,"schema":{"type":"array","items":{"type":"object","properties":{"emailAddress":{"type":"string"}},"x-ref":"#/components/schemas/BalanceAlertContactDTO"}},"index$":6}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let low_balance_alert_list_view_ref01_data = Object.values(setup.data.existing.low_balance_alert_list_view)[0] as any

    // LIST
    const low_balance_alert_list_view_ref01_ent = client.LowBalanceAlertListView()
    const low_balance_alert_list_view_ref01_match: any = {}
    low_balance_alert_list_view_ref01_match['account_identifier'] = setup.idmap['accountentifier01']
    low_balance_alert_list_view_ref01_match['customer_identifier'] = setup.idmap['customerentifier01']

    const low_balance_alert_list_view_ref01_list = (await low_balance_alert_list_view_ref01_ent.list(low_balance_alert_list_view_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/low_balance_alert_list_view/LowBalanceAlertListViewTestData.json')

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
    ['low_balance_alert_list_view01','low_balance_alert_list_view02','low_balance_alert_list_view03','customer01','customer02','customer03','account01','account02','account03','accountentifier01','customerentifier01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_LOW_BALANCE_ALERT_LIST_VIEW_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
    'TANGOCARD_SECRET': '',
  })

  idmap = env['TANGOCARD_TEST_LOW_BALANCE_ALERT_LIST_VIEW_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_LOW_BALANCE_ALERT_LIST_VIEW_ENTID']
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
  
