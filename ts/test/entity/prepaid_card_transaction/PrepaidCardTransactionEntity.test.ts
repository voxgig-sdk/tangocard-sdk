

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


describe('PrepaidCardTransactionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.PrepaidCardTransaction()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'prepaid_card_transaction.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"journal":{"a":true,"h":"Journal","n":"journal","r":false,"t":"`$ARRAY`","key$":"journal","index$":0},"page":{"a":true,"h":"Page","n":"page","r":true,"t":"`$OBJECT`","key$":"page","index$":1}},"name":"prepaid_card_transaction","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /prepaidCardService/getCardTransactions/{referenceLineItemID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"reference_line_item_id","or":"reference_line_item_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":0,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/prepaidCardService/getCardTransactions/{referenceLineItemID}","q":{"exist":["page","reference_line_item_id"]},"r":{"param":{"referenceLineItemID":"reference_line_item_id"}},"s":[{"lit":"prepaidCardService"},{"lit":"getCardTransactions"},{"var":"reference_line_item_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"prepaid_card_transaction","name__orig":"prepaid_card_transaction","Name":"PrepaidCardTransaction","name_":"prepaid_card_transaction","name-":"prepaid-card-transaction","NAME":"PREPAID_CARD_TRANSACTION","index$":33}, {"active":true,"entity":"prepaid_card_transaction","key$":"BasicPrepaidCardTransactionFlow","kind":"basic","name":"BasicPrepaidCardTransactionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"prepaid_card_transaction_ref01","srcdatavar":"prepaid_card_transaction_ref01_data","suffix":"_dt0"},"m":{"id":"prepaid_card_transaction01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-prepaid_card_transaction_ref01"}}],"index$":0}]}, 'PrepaidCardTransaction', {"GET /prepaidCardService/getCardTransactions/{referenceLineItemID}":{"protocol":"http","parameters":[{"name":"referenceLineItemID","in":"path","description":"Reference Line Item ID","required":true,"schema":{"type":"string"},"index$":0},{"name":"page","in":"query","description":"Page number","required":false,"schema":{"type":"integer","format":"int32","default":0},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let prepaid_card_transaction_ref01_data = Object.values(setup.data.existing.prepaid_card_transaction)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const prepaid_card_transaction_ref01_ent = client.PrepaidCardTransaction()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/prepaid_card_transaction/PrepaidCardTransactionTestData.json')

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
    ['prepaid_card_transaction01','prepaid_card_transaction02','prepaid_card_transaction03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_PREPAID_CARD_TRANSACTION_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
    'TANGOCARD_SECRET': '',
  })

  idmap = env['TANGOCARD_TEST_PREPAID_CARD_TRANSACTION_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_PREPAID_CARD_TRANSACTION_ENTID']
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
  
