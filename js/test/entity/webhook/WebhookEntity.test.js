
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


describe('WebhookEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.Webhook()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"categories":{"a":true,"h":"Categories","n":"categories","r":false,"sh":"The categories the customer wants to subscribe to.","t":"`$ARRAY`","key$":"categories","index$":0},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":false,"sh":"The date and time the webhook was created.","t":"`$STRING`","key$":"createdAt","index$":1},"eventTypes":{"a":true,"h":"Event Types","n":"eventTypes","r":false,"sh":"The event types the customer wants to subscribe to.","t":"`$ARRAY`","key$":"eventTypes","index$":2},"expiresAt":{"a":true,"fo":"date-time","h":"Expires At","n":"expiresAt","r":false,"sh":"The date and time the webhook expires.","t":"`$STRING`","key$":"expiresAt","index$":3},"headers":{"a":true,"h":"Headers","n":"headers","r":false,"sh":"Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.","t":"`$ARRAY`","key$":"headers","index$":4},"hmacSharedSecretKey":{"a":true,"h":"Hmac Shared Secret Key","n":"hmacSharedSecretKey","r":false,"sh":"The HMAC secret key used to sign the webhook payload.","t":"`$STRING`","key$":"hmacSharedSecretKey","index$":5},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":6},"payloadVerificationMethod":{"a":true,"h":"Payload Verification Method","n":"payloadVerificationMethod","r":false,"sh":"Method to verify webhook payload integrity.","t":"`$STRING`","key$":"payloadVerificationMethod","index$":7},"signingCertificate":{"a":true,"h":"Signing Certificate","n":"signingCertificate","r":false,"sh":"The public X509 certificate used to sign the webhook payload.","t":"`$STRING`","key$":"signingCertificate","index$":8},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":false,"sh":"The date and time when the webhook was last updated.","t":"`$STRING`","key$":"updatedAt","index$":9},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"The URL of the customer's webhook listener.","t":"`$STRING`","key$":"url","index$":10},"webhookId":{"a":true,"fo":"uuid","h":"Webhook Id","n":"webhookId","r":false,"sh":"The ID of the webhook.","t":"`$STRING`","key$":"webhookId","index$":11}},"id":{"field":"id","name":"id"},"name":"webhook","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /webhooks/{webhookId}/replay","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"webhook_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"from_revision","or":"from_revision","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"to_revision","or":"to_revision","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"POST","o":"/webhooks/{webhookId}/replay","q":{"$action":"replay","exist":["from_revision","id","to_revision"]},"r":{"param":{"webhookId":"id"}},"s":[{"lit":"webhooks"},{"var":"id"},{"lit":"replay"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /webhooks/{webhookId}/renew","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"webhook_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/webhooks/{webhookId}/renew","q":{"$action":"renew","exist":["id"]},"r":{"param":{"webhookId":"id"}},"s":[{"lit":"webhooks"},{"var":"id"},{"lit":"renew"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /webhooks/{webhookId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"webhook_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/webhooks/{webhookId}","q":{"exist":["id"]},"r":{"param":{"webhookId":"id"}},"s":[{"lit":"webhooks"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"webhook","name__orig":"webhook","Name":"Webhook","name_":"webhook","name-":"webhook","NAME":"WEBHOOK","index$":41}, {"active":true,"entity":"webhook","key$":"BasicWebhookFlow","kind":"basic","name":"BasicWebhookFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"webhook_ref01"},"m":{"webhook_id":"webhook01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"webhook_ref01","srcdatavar":"webhook_ref01_data","suffix":"_dt0"},"m":{"id":"webhook01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-webhook_ref01"}}],"index$":1}]}, 'Webhook', {"POST /webhooks/{webhookId}/replay":{"protocol":"http","parameters":[{"name":"webhookId","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":0},{"name":"fromRevision","in":"query","required":true,"schema":{"type":"integer","format":"int64"},"index$":1},{"name":"toRevision","in":"query","required":false,"schema":{"type":"integer","format":"int64"},"index$":2}]},"POST /webhooks/{webhookId}/renew":{"protocol":"http","parameters":[{"name":"webhookId","in":"path","description":"The webhook identifier","required":true,"schema":{"type":"string","format":"uuid"},"index$":0}]},"GET /webhooks/{webhookId}":{"protocol":"http","parameters":[{"name":"webhookId","in":"path","description":"The webhook identifier","required":true,"schema":{"type":"string","format":"uuid"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const webhook_ref01_ent = client.Webhook()
    let webhook_ref01_data = setup.data.new.webhook['webhook_ref01']
    webhook_ref01_data['webhook_id'] = setup.idmap['webhook01']

    webhook_ref01_data = (await webhook_ref01_ent.create(webhook_ref01_data)).data()
    assert(null != webhook_ref01_data.id)


    // LOAD
    const webhook_ref01_match_dt0 = {}
    webhook_ref01_match_dt0.id = webhook_ref01_data.id
    const webhook_ref01_data_dt0 = (await webhook_ref01_ent.load(webhook_ref01_match_dt0)).data()
    assert(webhook_ref01_data_dt0.id === webhook_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/webhook/WebhookTestData.json')

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
    ['webhook01','webhook02','webhook03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_WEBHOOK_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
  })

  idmap = env['TANGOCARD_TEST_WEBHOOK_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_WEBHOOK_ENTID']
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
  
