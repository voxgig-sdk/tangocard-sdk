

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


describe('CreditCardUnregisterEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.CreditCardUnregister()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'credit_card_unregister.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"accountIdentifier":{"a":true,"h":"Account Identifier","n":"accountIdentifier","r":true,"sh":"Specify the account this credit card is associated with.","t":"`$STRING`","key$":"accountIdentifier","index$":0},"createdDate":{"a":true,"h":"Created Date","n":"createdDate","r":true,"t":"`$STRING`","key$":"createdDate","index$":1},"creditCardToken":{"a":true,"h":"Credit Card Token","n":"creditCardToken","r":true,"sh":"Specify the credit card token to unregister.","t":"`$STRING`","key$":"creditCardToken","index$":2},"customerIdentifier":{"a":true,"h":"Customer Identifier","n":"customerIdentifier","r":true,"sh":"Specify the customer associated with the credit card.","t":"`$STRING`","key$":"customerIdentifier","index$":3},"message":{"a":true,"h":"Message","n":"message","r":true,"t":"`$STRING`","key$":"message","index$":4},"token":{"a":true,"h":"Token","n":"token","r":true,"t":"`$STRING`","key$":"token","index$":5}},"name":"credit_card_unregister","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /creditCardUnregisters","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/creditCardUnregisters","q":{},"r":{},"s":[{"lit":"creditCardUnregisters"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"credit_card_unregister","name__orig":"credit_card_unregister","Name":"CreditCardUnregister","name_":"credit_card_unregister","name-":"credit-card-unregister","NAME":"CREDIT_CARD_UNREGISTER","index$":17}, {"active":true,"entity":"credit_card_unregister","key$":"BasicCreditCardUnregisterFlow","kind":"basic","name":"BasicCreditCardUnregisterFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"credit_card_unregister_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'CreditCardUnregister', {"POST /creditCardUnregisters":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","description":"<strong>customerIdentifier</strong> - Specify the customer associated with the credit card. Must be the customer the accountIdentifier is associated with.<br/><br/><strong>accountIdentifier</strong> - Specify the account this credit card is associated with.<br/><br/><strong>creditCardToken</strong> - Specify the credit card token to unregister.<br/><br/>","properties":{"customerIdentifier":{"type":"string","description":"Specify the customer associated with the credit card. Must be the customer the accountIdentifier is associated with.","title":"Customer Identifier","key$":"customerIdentifier"},"accountIdentifier":{"type":"string","description":"Specify the account this credit card is associated with.","title":"Account Identifier","key$":"accountIdentifier"},"creditCardToken":{"type":"string","description":"Specify the credit card token to unregister.","title":"Token","key$":"creditCardToken"}},"required":["accountIdentifier","creditCardToken","customerIdentifier"],"x-ref":"#/components/schemas/CreateCreditCardUnregisterCriteria","index$":1}}},"required":true},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const credit_card_unregister_ref01_ent = client.CreditCardUnregister()
    let credit_card_unregister_ref01_data = setup.data.new.credit_card_unregister['credit_card_unregister_ref01']

    credit_card_unregister_ref01_data = (await credit_card_unregister_ref01_ent.create(credit_card_unregister_ref01_data)).data()
    assert(null != credit_card_unregister_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/credit_card_unregister/CreditCardUnregisterTestData.json')

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
    ['credit_card_unregister01','credit_card_unregister02','credit_card_unregister03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_CREDIT_CARD_UNREGISTER_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
    'TANGOCARD_SECRET': '',
  })

  idmap = env['TANGOCARD_TEST_CREDIT_CARD_UNREGISTER_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_CREDIT_CARD_UNREGISTER_ENTID']
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
  
