
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { TangocardSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('ReissueCardEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.ReissueCard()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"commentText","req":false,"short":"Optional comment for the card replacement.","type":"`$STRING`","index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"reason","req":true,"short":"Reason for the card replacement.","type":"`$STRING`","index$":2},{"active":true,"name":"status","req":false,"short":"Status of the reissue request.","type":"`$STRING`","index$":3},{"active":true,"name":"updatedBy","req":true,"short":"Identifier of the agent initiating the request.","type":"`$STRING`","index$":4}],"id":{"field":"id","name":"id"},"name":"reissue_card","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"reference_line_item_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /prepaidCardService/reissueCard/{referenceLineItemID}","json":"{\"operationId\":\"reissueCard\",\"parameters\":[{\"description\":\"Reference Line Item ID\",\"in\":\"path\",\"name\":\"referenceLineItemID\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"commentText\":{\"description\":\"Optional comment for the card replacement.\",\"type\":\"string\"},\"reason\":{\"description\":\"Reason for the card replacement.\",\"enum\":[\"CARDHOLDER_REQUESTED\",\"CUSTOMER_REQUEST\",\"CUSTOMER_SERVICE_INITIATED\",\"FRAUD\",\"LOST\",\"STOLEN\",\"DAMAGED\",\"RENEW\",\"RISK_SPOOF_SITE\",\"RISK_VICTIM_ASSISTED\",\"RISK_TAMPERED\",\"RISK_FRIENDLY_FRAUD\",\"RISK_POTENTIAL_COMPROMISED_CARD\",\"RISK_EXCESSIVE_BALANCE_INQUIRY\",\"RISK_PARTNER_REQUEST\",\"RISK_POTENTIAL_PROGRAM_ABUSE\"],\"type\":\"string\"},\"updatedBy\":{\"description\":\"Identifier of the agent initiating the request.\",\"type\":\"string\"}},\"required\":[\"reason\",\"updatedBy\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"status\":{\"description\":\"Status of the reissue request.\",\"enum\":[\"ACCEPTED\",\"FAILED\"],\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Not Found\"},\"422\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unprocessable Entity\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Internal Server Error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Service Unavailable\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/prepaidCardService/reissueCard/{referenceLineItemID}","rename":{"param":{"referenceLineItemID":"id"}},"segments":[{"lit":"prepaidCardService"},{"lit":"reissueCard"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"reissue_card","name__orig":"reissue_card","Name":"ReissueCard","name_":"reissue_card","name-":"reissue-card","NAME":"REISSUE_CARD","index$":38}, {"active":true,"entity":"reissue_card","key$":"BasicReissueCardFlow","kind":"basic","name":"BasicReissueCardFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"reissue_card_ref01"},"match":{"reference_line_item_i_d":"reference_line_item_i_d01"},"op":"create","spec":[],"valid":[],"index$":0}]}, 'ReissueCard')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const reissue_card_ref01_ent = client.ReissueCard()
    let reissue_card_ref01_data = setup.data.new.reissue_card['reissue_card_ref01']
    reissue_card_ref01_data['reference_line_item_i_d'] = setup.idmap['reference_line_item_i_d01']

    reissue_card_ref01_data = (await reissue_card_ref01_ent.create(reissue_card_ref01_data)).data()
    assert(null != reissue_card_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/reissue_card/ReissueCardTestData.json')

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
    ['reissue_card01','reissue_card02','reissue_card03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_REISSUE_CARD_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
  })

  idmap = env['TANGOCARD_TEST_REISSUE_CARD_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_REISSUE_CARD_ENTID']
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
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
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
  
