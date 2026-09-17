
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


describe('AddCommentEscalationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.AddCommentEscalation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"int32","name":"assignee","req":false,"short":"Assignee ID.","type":"`$INTEGER`","index$":0},{"active":true,"name":"commentText","req":true,"short":"Free-text comment to add to the prepaid card.","type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":2},{"active":true,"format":"int32","name":"inquiryCategoryCode","req":false,"short":"Inquiry category code.","type":"`$INTEGER`","index$":3},{"active":true,"format":"int32","name":"inquiryIdNumber","req":false,"short":"Inquiry ID number.","type":"`$INTEGER`","index$":4},{"active":true,"name":"inquirySource","req":false,"short":"Origination source identifier (e.g.","type":"`$STRING`","index$":5},{"active":true,"format":"int32","name":"inquiryTypeCode","req":false,"short":"Inquiry type code.","type":"`$INTEGER`","index$":6},{"active":true,"name":"issueDescription","req":true,"short":"Short description of the issue.","type":"`$STRING`","index$":7},{"active":true,"name":"status","req":false,"short":"Status of the inquiry (e.g.","type":"`$STRING`","index$":8},{"active":true,"name":"userId","req":false,"short":"Agent or CSR user ID.","type":"`$STRING`","index$":9}],"id":{"field":"id","name":"id"},"name":"add_comment_escalation","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"reference_line_item_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /prepaidCardService/addCommentEscalation/{referenceLineItemID}","json":"{\"operationId\":\"addCommentEscalation\",\"parameters\":[{\"description\":\"Reference Line Item ID\",\"in\":\"path\",\"name\":\"referenceLineItemID\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"assignee\":{\"description\":\"Assignee ID.\",\"format\":\"int32\",\"type\":\"integer\"},\"commentText\":{\"description\":\"Free-text comment to add to the prepaid card.\",\"minLength\":1,\"type\":\"string\"},\"inquiryCategoryCode\":{\"description\":\"Inquiry category code.\",\"format\":\"int32\",\"type\":\"integer\"},\"inquiryIdNumber\":{\"description\":\"Inquiry ID number.\",\"format\":\"int32\",\"type\":\"integer\"},\"inquirySource\":{\"description\":\"Origination source identifier (e.g. TMO_SUPPORT_APP). Maximum 24 characters.\",\"maxLength\":24,\"minLength\":0,\"type\":\"string\"},\"inquiryTypeCode\":{\"description\":\"Inquiry type code.\",\"format\":\"int32\",\"type\":\"integer\"},\"issueDescription\":{\"description\":\"Short description of the issue. Maximum 255 characters.\",\"maxLength\":255,\"minLength\":0,\"type\":\"string\"},\"status\":{\"description\":\"Status of the inquiry (e.g. OPEN).\",\"type\":\"string\"},\"userId\":{\"description\":\"Agent or CSR user ID. Falls back to the authenticated principal if not provided.\",\"type\":\"string\"}},\"required\":[\"commentText\",\"issueDescription\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"status\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Not Found\"},\"422\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unprocessable Entity\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Internal Server Error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Service Unavailable\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/prepaidCardService/addCommentEscalation/{referenceLineItemID}","rename":{"param":{"referenceLineItemID":"id"}},"segments":[{"lit":"prepaidCardService"},{"lit":"addCommentEscalation"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"add_comment_escalation","name__orig":"add_comment_escalation","Name":"AddCommentEscalation","name_":"add_comment_escalation","name-":"add-comment-escalation","NAME":"ADD_COMMENT_ESCALATION","index$":1}, {"active":true,"entity":"add_comment_escalation","key$":"BasicAddCommentEscalationFlow","kind":"basic","name":"BasicAddCommentEscalationFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"add_comment_escalation_ref01"},"match":{"reference_line_item_i_d":"reference_line_item_i_d01"},"op":"create","spec":[],"valid":[],"index$":0}]}, 'AddCommentEscalation')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const add_comment_escalation_ref01_ent = client.AddCommentEscalation()
    let add_comment_escalation_ref01_data = setup.data.new.add_comment_escalation['add_comment_escalation_ref01']
    add_comment_escalation_ref01_data['reference_line_item_i_d'] = setup.idmap['reference_line_item_i_d01']

    add_comment_escalation_ref01_data = (await add_comment_escalation_ref01_ent.create(add_comment_escalation_ref01_data)).data()
    assert(null != add_comment_escalation_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/add_comment_escalation/AddCommentEscalationTestData.json')

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
    ['add_comment_escalation01','add_comment_escalation02','add_comment_escalation03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_ADD_COMMENT_ESCALATION_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
  })

  idmap = env['TANGOCARD_TEST_ADD_COMMENT_ESCALATION_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_ADD_COMMENT_ESCALATION_ENTID']
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
  
