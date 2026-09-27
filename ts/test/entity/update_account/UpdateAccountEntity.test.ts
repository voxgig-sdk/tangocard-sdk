

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


describe('UpdateAccountEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.UpdateAccount()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'update_account.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"registration":{"a":true,"h":"Registration","n":"registration","r":true,"t":"`$OBJECT`","key$":"registration","index$":1},"status":{"a":true,"h":"Status","n":"status","r":false,"t":"`$STRING`","key$":"status","index$":2},"updatedBy":{"a":true,"h":"Updated By","n":"updatedBy","r":false,"t":"`$STRING`","key$":"updatedBy","index$":3}},"id":{"field":"id","name":"id"},"name":"update_account","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /prepaidCardService/updateAccount/{referenceLineItemID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"reference_line_item_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/prepaidCardService/updateAccount/{referenceLineItemID}","q":{"exist":["id"]},"r":{"param":{"referenceLineItemID":"id"}},"s":[{"lit":"prepaidCardService"},{"lit":"updateAccount"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"update_account","name__orig":"update_account","Name":"UpdateAccount","name_":"update_account","name-":"update-account","NAME":"UPDATE_ACCOUNT","index$":39}, {"active":true,"entity":"update_account","key$":"BasicUpdateAccountFlow","kind":"basic","name":"BasicUpdateAccountFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"update_account_ref01"},"m":{"reference_line_item_i_d":"reference_line_item_i_d01"},"o":"create","s":[],"v":[],"index$":0}]}, 'UpdateAccount', {"POST /prepaidCardService/updateAccount/{referenceLineItemID}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"registration":{"type":"object","properties":{"firstName":{"type":"string","maxLength":50,"minLength":0},"lastName":{"type":"string","maxLength":50,"minLength":0},"email":{"type":"string","format":"email","maxLength":100,"minLength":0},"homePhone":{"type":"string","pattern":"^\\d{10}$"},"mobilePhone":{"type":"string","pattern":"^\\d{10}$"},"address1":{"type":"string","maxLength":100,"minLength":0},"address2":{"type":"string","maxLength":100,"minLength":0},"city":{"type":"string","maxLength":50,"minLength":0},"state":{"type":"string","pattern":"^[A-Za-z]{2}$"},"postal":{"type":"string","pattern":"^[A-Za-z0-9\\- ]{1,10}$"},"country":{"type":"string","pattern":"^[A-Za-z]{2,3}$"}},"x-ref":"#/components/schemas/Registration","key$":"registration"},"updatedBy":{"type":"string","maxLength":100,"minLength":0,"key$":"updatedBy"}},"required":["registration"],"x-ref":"#/components/schemas/UpdateAccountRequest","index$":1}}},"required":true},"parameters":[{"name":"referenceLineItemID","in":"path","description":"Reference Line Item ID","required":true,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const update_account_ref01_ent = client.UpdateAccount()
    let update_account_ref01_data = setup.data.new.update_account['update_account_ref01']
    update_account_ref01_data['reference_line_item_i_d'] = setup.idmap['reference_line_item_i_d01']

    update_account_ref01_data = (await update_account_ref01_ent.create(update_account_ref01_data)).data()
    assert(null != update_account_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/update_account/UpdateAccountTestData.json')

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
    ['update_account01','update_account02','update_account03','reference_line_item_i_d01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_UPDATE_ACCOUNT_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
    'TANGOCARD_SECRET': '',
  })

  idmap = env['TANGOCARD_TEST_UPDATE_ACCOUNT_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_UPDATE_ACCOUNT_ENTID']
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
  
