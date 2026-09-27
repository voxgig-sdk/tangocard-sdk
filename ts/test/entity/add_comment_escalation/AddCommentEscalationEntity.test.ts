

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

    const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'add_comment_escalation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"assignee":{"a":true,"fo":"int32","h":"Assignee","n":"assignee","r":false,"sh":"Assignee ID.","t":"`$INTEGER`","key$":"assignee","index$":0},"commentText":{"a":true,"h":"Comment Text","n":"commentText","r":true,"sh":"Free-text comment to add to the prepaid card.","t":"`$STRING`","key$":"commentText","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"inquiryCategoryCode":{"a":true,"fo":"int32","h":"Inquiry Category Code","n":"inquiryCategoryCode","r":false,"sh":"Inquiry category code.","t":"`$INTEGER`","key$":"inquiryCategoryCode","index$":3},"inquiryIdNumber":{"a":true,"fo":"int32","h":"Inquiry Id Number","n":"inquiryIdNumber","r":false,"sh":"Inquiry ID number.","t":"`$INTEGER`","key$":"inquiryIdNumber","index$":4},"inquirySource":{"a":true,"h":"Inquiry Source","n":"inquirySource","r":false,"sh":"Origination source identifier (e.g.","t":"`$STRING`","key$":"inquirySource","index$":5},"inquiryTypeCode":{"a":true,"fo":"int32","h":"Inquiry Type Code","n":"inquiryTypeCode","r":false,"sh":"Inquiry type code.","t":"`$INTEGER`","key$":"inquiryTypeCode","index$":6},"issueDescription":{"a":true,"h":"Issue Description","n":"issueDescription","r":true,"sh":"Short description of the issue.","t":"`$STRING`","key$":"issueDescription","index$":7},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"Status of the inquiry (e.g.","t":"`$STRING`","key$":"status","index$":8},"userId":{"a":true,"h":"User Id","n":"userId","r":false,"sh":"Agent or CSR user ID.","t":"`$STRING`","key$":"userId","index$":9}},"id":{"field":"id","name":"id"},"name":"add_comment_escalation","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /prepaidCardService/addCommentEscalation/{referenceLineItemID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"reference_line_item_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/prepaidCardService/addCommentEscalation/{referenceLineItemID}","q":{"exist":["id"]},"r":{"param":{"referenceLineItemID":"id"}},"s":[{"lit":"prepaidCardService"},{"lit":"addCommentEscalation"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"add_comment_escalation","name__orig":"add_comment_escalation","Name":"AddCommentEscalation","name_":"add_comment_escalation","name-":"add-comment-escalation","NAME":"ADD_COMMENT_ESCALATION","index$":1}, {"active":true,"entity":"add_comment_escalation","key$":"BasicAddCommentEscalationFlow","kind":"basic","name":"BasicAddCommentEscalationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"add_comment_escalation_ref01"},"m":{"reference_line_item_i_d":"reference_line_item_i_d01"},"o":"create","s":[],"v":[],"index$":0}]}, 'AddCommentEscalation', {"POST /prepaidCardService/addCommentEscalation/{referenceLineItemID}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"commentText":{"type":"string","description":"Free-text comment to add to the prepaid card.","minLength":1,"key$":"commentText"},"inquiryTypeCode":{"type":"integer","format":"int32","description":"Inquiry type code.","key$":"inquiryTypeCode"},"inquiryCategoryCode":{"type":"integer","format":"int32","description":"Inquiry category code.","key$":"inquiryCategoryCode"},"userId":{"type":"string","description":"Agent or CSR user ID. Falls back to the authenticated principal if not provided.","key$":"userId"},"inquirySource":{"type":"string","description":"Origination source identifier (e.g. TMO_SUPPORT_APP). Maximum 24 characters.","maxLength":24,"minLength":0,"key$":"inquirySource"},"issueDescription":{"type":"string","description":"Short description of the issue. Maximum 255 characters.","maxLength":255,"minLength":0,"key$":"issueDescription"},"assignee":{"type":"integer","format":"int32","description":"Assignee ID.","key$":"assignee"},"inquiryIdNumber":{"type":"integer","format":"int32","description":"Inquiry ID number.","key$":"inquiryIdNumber"},"status":{"type":"string","description":"Status of the inquiry (e.g. OPEN).","key$":"status"}},"required":["commentText","issueDescription"],"x-ref":"#/components/schemas/AddCommentEscalationRequest","index$":1}}},"required":true},"parameters":[{"name":"referenceLineItemID","in":"path","description":"Reference Line Item ID","required":true,"schema":{"type":"string"},"index$":0}]}})
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



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

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
    ['add_comment_escalation01','add_comment_escalation02','add_comment_escalation03','reference_line_item_i_d01'],
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
    'TANGOCARD_SECRET': '',
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
  
