

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


describe('PrepaidCardInfoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.PrepaidCardInfo()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'prepaid_card_info.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"balance","req":false,"type":"`$OBJECT`","index$":0},{"active":true,"name":"card","req":false,"type":"`$OBJECT`","index$":1},{"active":true,"name":"comments","req":false,"type":"`$ARRAY`","index$":2},{"active":true,"name":"registration","req":false,"type":"`$OBJECT`","index$":3}],"name":"prepaid_card_info","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"reference_line_item_id","orig":"reference_line_item_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /prepaidCardService/getCardInfo/{referenceLineItemID}","json":"{\"operationId\":\"getCardInfo\",\"parameters\":[{\"description\":\"Reference Line Item ID\",\"in\":\"path\",\"name\":\"referenceLineItemID\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"balance\":{\"properties\":{\"availableBalance\":{\"properties\":{\"currencyCode\":{\"type\":\"string\"},\"value\":{\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"},\"card\":{\"properties\":{\"accountStatus\":{\"type\":\"string\"},\"cardBrand\":{\"type\":\"string\"},\"cardStatus\":{\"type\":\"string\"},\"cardStatusReason\":{\"type\":\"string\"},\"createdDate\":{\"type\":\"string\"},\"expirationDate\":{\"type\":\"string\"},\"last4\":{\"type\":\"string\"},\"shipDate\":{\"type\":\"string\"}},\"type\":\"object\"},\"comments\":{\"items\":{\"properties\":{\"addedBy\":{\"type\":\"string\"},\"additionalInformation\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"eventType\":{\"type\":\"string\"},\"memoSource\":{\"type\":\"string\"},\"received\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"registration\":{\"properties\":{\"address1\":{\"type\":\"string\"},\"address2\":{\"type\":\"string\"},\"city\":{\"type\":\"string\"},\"country\":{\"type\":\"string\"},\"email\":{\"type\":\"string\"},\"firstName\":{\"type\":\"string\"},\"homePhone\":{\"type\":\"string\"},\"lastName\":{\"type\":\"string\"},\"mobilePhone\":{\"type\":\"string\"},\"postal\":{\"type\":\"string\"},\"state\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Not Found\"},\"422\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unprocessable Entity\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/401/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Service Unavailable\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/prepaidCardService/getCardInfo/{referenceLineItemID}","rename":{"param":{"referenceLineItemID":"reference_line_item_id"}},"segments":[{"lit":"prepaidCardService"},{"lit":"getCardInfo"},{"var":"reference_line_item_id"}],"select":{"exist":["reference_line_item_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["get_card_info"]]},"key$":"prepaid_card_info","name__orig":"prepaid_card_info","Name":"PrepaidCardInfo","name_":"prepaid_card_info","name-":"prepaid-card-info","NAME":"PREPAID_CARD_INFO","index$":36}, {"active":true,"entity":"prepaid_card_info","key$":"BasicPrepaidCardInfoFlow","kind":"basic","name":"BasicPrepaidCardInfoFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"prepaid_card_info_ref01","srcdatavar":"prepaid_card_info_ref01_data","suffix":"_dt0"},"match":{"id":"prepaid_card_info01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-prepaid_card_info_ref01"}}],"index$":0}]}, 'PrepaidCardInfo')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let prepaid_card_info_ref01_data = Object.values(setup.data.existing.prepaid_card_info)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const prepaid_card_info_ref01_ent = client.PrepaidCardInfo()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/prepaid_card_info/PrepaidCardInfoTestData.json')

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
    ['prepaid_card_info01','prepaid_card_info02','prepaid_card_info03','get_card_info01','get_card_info02','get_card_info03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_PREPAID_CARD_INFO_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
    'TANGOCARD_SECRET': '',
  })

  idmap = env['TANGOCARD_TEST_PREPAID_CARD_INFO_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_PREPAID_CARD_INFO_ENTID']
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
  
