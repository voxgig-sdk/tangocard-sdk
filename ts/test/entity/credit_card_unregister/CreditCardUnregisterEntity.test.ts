

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"accountIdentifier","req":true,"short":"Specify the account this credit card is associated with.","type":"`$STRING`","index$":0},{"active":true,"name":"createdDate","req":true,"type":"`$STRING`","index$":1},{"active":true,"name":"creditCardToken","req":true,"short":"Specify the credit card token to unregister.","type":"`$STRING`","index$":2},{"active":true,"name":"customerIdentifier","req":true,"short":"Specify the customer associated with the credit card.","type":"`$STRING`","index$":3},{"active":true,"name":"message","req":true,"type":"`$STRING`","index$":4},{"active":true,"name":"token","req":true,"type":"`$STRING`","index$":5}],"name":"credit_card_unregister","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /creditCardUnregisters","json":"{\"operationId\":\"createCreditCardUnregister\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"<strong>customerIdentifier</strong> - Specify the customer associated with the credit card. Must be the customer the accountIdentifier is associated with.<br/><br/><strong>accountIdentifier</strong> - Specify the account this credit card is associated with.<br/><br/><strong>creditCardToken</strong> - Specify the credit card token to unregister.<br/><br/>\",\"properties\":{\"accountIdentifier\":{\"description\":\"Specify the account this credit card is associated with.\",\"title\":\"Account Identifier\",\"type\":\"string\"},\"creditCardToken\":{\"description\":\"Specify the credit card token to unregister.\",\"title\":\"Token\",\"type\":\"string\"},\"customerIdentifier\":{\"description\":\"Specify the customer associated with the credit card. Must be the customer the accountIdentifier is associated with.\",\"title\":\"Customer Identifier\",\"type\":\"string\"}},\"required\":[\"accountIdentifier\",\"creditCardToken\",\"customerIdentifier\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"createdDate\":{\"title\":\"Date the credit card was un-registered\",\"type\":\"string\"},\"message\":{\"title\":\"Friendly message that the credit card has been un-registered successfully\",\"type\":\"string\"},\"token\":{\"title\":\"Credit Card Unregister token identifier\",\"type\":\"string\"}},\"required\":[\"createdDate\",\"message\",\"token\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Forbidden\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Internal Server Error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Service Unavailable\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/creditCardUnregisters","segments":[{"lit":"creditCardUnregisters"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"credit_card_unregister","name__orig":"credit_card_unregister","Name":"CreditCardUnregister","name_":"credit_card_unregister","name-":"credit-card-unregister","NAME":"CREDIT_CARD_UNREGISTER","index$":18}, {"active":true,"entity":"credit_card_unregister","key$":"BasicCreditCardUnregisterFlow","kind":"basic","name":"BasicCreditCardUnregisterFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"credit_card_unregister_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'CreditCardUnregister')
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
  
