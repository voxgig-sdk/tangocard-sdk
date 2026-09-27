
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


describe('N14WebhookEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.N14Webhook()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"categories":{"a":true,"h":"Categories","n":"categories","r":false,"sh":"The categories the customer wants to subscribe to.","t":"`$ARRAY`","key$":"categories","index$":0},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":false,"sh":"The date and time the webhook was created.","t":"`$STRING`","key$":"createdAt","index$":1},"eventTypes":{"a":true,"h":"Event Types","n":"eventTypes","r":false,"sh":"The event types the customer wants to subscribe to.","t":"`$ARRAY`","key$":"eventTypes","index$":2},"expiresAt":{"a":true,"fo":"date-time","h":"Expires At","n":"expiresAt","r":false,"sh":"The date and time the webhook expires.","t":"`$STRING`","key$":"expiresAt","index$":3},"headers":{"a":true,"h":"Headers","n":"headers","r":false,"sh":"Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.","t":"`$ARRAY`","key$":"headers","index$":4},"hmacSharedSecretKey":{"a":true,"h":"Hmac Shared Secret Key","n":"hmacSharedSecretKey","r":false,"sh":"The HMAC secret key used to sign the webhook payload.","t":"`$STRING`","key$":"hmacSharedSecretKey","index$":5},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":6},"payloadVerificationMethod":{"a":true,"h":"Payload Verification Method","n":"payloadVerificationMethod","r":false,"sh":"Method to verify webhook payload authenticity","t":"`$STRING`","key$":"payloadVerificationMethod","index$":7},"signingCertificate":{"a":true,"h":"Signing Certificate","n":"signingCertificate","r":false,"sh":"The public X509 certificate used to sign the webhook payload.","t":"`$STRING`","key$":"signingCertificate","index$":8},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":false,"sh":"The date and time when the webhook was last updated.","t":"`$STRING`","key$":"updatedAt","index$":9},"url":{"a":true,"h":"Url","n":"url","op":{"list":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The URL of the customer's webhook listener.","t":"`$STRING`","key$":"url","index$":10},"webhookId":{"a":true,"fo":"uuid","h":"Webhook Id","n":"webhookId","r":false,"sh":"The ID of the webhook.","t":"`$STRING`","key$":"webhookId","index$":11}},"id":{"field":"id","name":"id"},"name":"n14_webhook","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /webhooks/{webhookId}/tests/{testName}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"test_name","or":"test_name","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"webhook_id","or":"webhook_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/webhooks/{webhookId}/tests/{testName}","q":{"exist":["test_name","webhook_id"]},"r":{"param":{"testName":"test_name","webhookId":"webhook_id"}},"s":[{"lit":"webhooks"},{"var":"webhook_id"},{"lit":"tests"},{"var":"test_name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /webhooks/{webhookId}/tests","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"webhook_id","or":"webhook_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/webhooks/{webhookId}/tests","q":{"exist":["webhook_id"]},"r":{"param":{"webhookId":"webhook_id"}},"s":[{"lit":"webhooks"},{"var":"webhook_id"},{"lit":"tests"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /webhooks","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/webhooks","q":{},"r":{},"s":[{"lit":"webhooks"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /webhooks","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"category","or":"category","r":false,"t":"`$ARRAY`","index$":0},{"a":true,"k":"query","n":"created_at_from","or":"created_at_from","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"created_at_to","or":"created_at_to","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"event_type","or":"event_type","r":false,"t":"`$ARRAY`","index$":3},{"a":true,"k":"query","n":"expires_at_from","or":"expires_at_from","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"expires_at_to","or":"expires_at_to","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"header_name","or":"header_name","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"header_value","or":"header_value","r":false,"t":"`$STRING`","index$":7},{"a":true,"ex":10,"k":"query","n":"max_result","or":"max_result","r":false,"t":"`$INTEGER`","index$":8},{"a":true,"k":"query","n":"next_cursor","or":"next_cursor","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"prev_cursor","or":"prev_cursor","r":false,"t":"`$STRING`","index$":10},{"a":true,"k":"query","n":"url","or":"url","r":false,"t":"`$STRING`","index$":11}]},"k":"http","m":"GET","o":"/webhooks","q":{"exist":["category","created_at_from","created_at_to","event_type","expires_at_from","expires_at_to","header_name","header_value","max_result","next_cursor","prev_cursor","url"]},"r":{},"s":[{"lit":"webhooks"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /webhooks/{webhookId}/events","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"webhook_id","or":"webhook_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"from_revision","or":"from_revision","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"max_result","or":"max_result","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"next_cursor","or":"next_cursor","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"prev_cursor","or":"prev_cursor","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"to_revision","or":"to_revision","r":false,"t":"`$INTEGER`","index$":4}]},"k":"http","m":"GET","o":"/webhooks/{webhookId}/events","q":{"exist":["from_revision","max_result","next_cursor","prev_cursor","to_revision","webhook_id"]},"r":{"param":{"webhookId":"webhook_id"}},"s":[{"lit":"webhooks"},{"var":"webhook_id"},{"lit":"events"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /webhooks/{webhookId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"webhook_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/webhooks/{webhookId}","q":{"exist":["id"]},"r":{"param":{"webhookId":"id"}},"s":[{"lit":"webhooks"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.webhook"],["$.main.kit.entity.webhook"]]},"key$":"n14_webhook","name__orig":"n14_webhook","Name":"N14Webhook","name_":"n14_webhook","name-":"n14-webhook","NAME":"N14_WEBHOOK","index$":26}, {"active":true,"entity":"n14_webhook","key$":"BasicN14WebhookFlow","kind":"basic","name":"BasicN14WebhookFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"n14_webhook_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"n14_webhook_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"n14_webhook_ref01","srcdatavar":"n14_webhook_ref01_data","suffix":"_dt0"},"m":{"id":"n14_webhook01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-n14_webhook_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"n14_webhook_ref01","suffix":"_rm0"},"m":{"id":"n14_webhook01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"n14_webhook_ref01"}}],"index$":4}]}, 'N14Webhook', {"POST /webhooks/{webhookId}/tests/{testName}":{"protocol":"http","parameters":[{"name":"webhookId","in":"path","description":"The webhook identifier","required":true,"schema":{"type":"string","format":"uuid"},"index$":0},{"name":"testName","in":"path","description":"Test event type to execute. ConnectivityTest is always available, while other test events can only be used in the Tango Sandbox environment and only events under the webhookId can be tested.","required":true,"schema":{"type":"string","enum":["ConnectivityTest","ItemAvailability","RewardStatus","Transaction","LowBalance","AccountStatus","CredentialStatus","LineItemDeliveryStatus","AsyncOrderStatus","ExchangeRatesStatus"]},"index$":1}]},"POST /webhooks/{webhookId}/tests":{"protocol":"http","parameters":[{"name":"webhookId","in":"path","description":"The webhook identifier","required":true,"schema":{"type":"string","format":"uuid"},"index$":0}]},"POST /webhooks":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","description":"The webhook subscription request.","properties":{"url":{"type":"string","description":"The URL of the customer's webhook listener. Must be a valid URL.","minLength":1,"title":"Webhook URL","key$":"url"},"headers":{"type":"array","description":"Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.","items":{"type":"object","description":"The header to be included in the webhook request.","properties":{"name":{"description":"The name of the header.","minLength":1,"title":"Header Name","type":"string"},"value":{"description":"The value of the header.","minLength":1,"title":"Header Value","type":"string"}},"required":["name","value"],"title":"Subscription Header","x-ref":"#/components/schemas/SubscriptionHeaderView"},"title":"Webhook Headers","key$":"headers"},"categories":{"type":"array","description":"The categories the customer wants to subscribe to. Optional if specifying eventTypes.","items":{"type":"string"},"title":"Subscription Categories","key$":"categories"},"eventTypes":{"type":"array","description":"The event types the customer wants to subscribe to. Optional if specifying categories.","items":{"type":"string"},"title":"Subscription Event Types","key$":"eventTypes"},"signingCertificate":{"type":"string","description":"The public X509 certificate used to sign the webhook payload. Required when payloadVerificationMethod is X509. The certificate must be base64 encoded.","title":"Signing Certificate","key$":"signingCertificate"},"hmacSharedSecretKey":{"type":"string","description":"The HMAC secret key used to sign the webhook payload. Required when payloadVerificationMethod is HMAC. The key must be base64 encoded.","title":"Hmac Shared Secret Key","key$":"hmacSharedSecretKey"},"payloadVerificationMethod":{"type":"string","description":"Method to verify webhook payload authenticity","enum":["HMAC","X509","NONE"],"key$":"payloadVerificationMethod"}},"required":["url"],"title":"Webhook Subscription Request","x-ref":"#/components/schemas/WebhookSubscriptionRequestView","index$":1}}},"required":true},"parameters":[]},"GET /webhooks":{"protocol":"http","parameters":[{"name":"prevCursor","in":"query","description":"The cursor to use for the previous page of results. This will be ignored if paginate is false.","required":false,"schema":{"type":"string"},"index$":0},{"name":"nextCursor","in":"query","description":"The cursor to use for the next page of results. This will be ignored if paginate is false.","required":false,"schema":{"type":"string"},"index$":1},{"name":"maxResults","in":"query","description":"The maximum number of results to return. The default is 10, and the maximum is 200. This will be ignored if paginate is false.","required":false,"schema":{"type":"integer","format":"int32","default":10,"maximum":200},"index$":2},{"name":"url","in":"query","description":"The customer URI Tango will use to POST the webhook back to","required":false,"schema":{"type":"string"},"index$":3},{"name":"headerName","in":"query","description":"Contains any header name submitted by the customer.","required":false,"schema":{"type":"string"},"index$":4},{"name":"headerValue","in":"query","description":"Contains any header value submitted by the customer.","required":false,"schema":{"type":"string"},"index$":5},{"name":"categories","in":"query","description":"Designated subscribed to categories.","required":false,"schema":{"type":"array","items":{"type":"string"}},"index$":6},{"name":"eventTypes","in":"query","description":"Designated subscribed to events.","required":false,"schema":{"type":"array","items":{"type":"string"}},"index$":7},{"name":"expiresAtFrom","in":"query","description":"Specify the starting expiration date or date time to be queried according to RFC 3339, i.e. \"2016-01-01T00:00:00Z\". See https://www.ietf.org/rfc/rfc3339.txt","required":false,"schema":{"type":"string","format":"date-time"},"index$":8},{"name":"expiresAtTo","in":"query","description":"Specify the ending expiration date or date time to be queried according to RFC 3339, i.e. \"2016-01-01T00:00:00Z\". See https://www.ietf.org/rfc/rfc3339.txt","required":false,"schema":{"type":"string","format":"date-time"},"index$":9},{"name":"createdAtFrom","in":"query","description":"Specify the starting created date or date time to be queried according to RFC 3339, i.e. \"2016-01-01T00:00:00Z\". See https://www.ietf.org/rfc/rfc3339.txt","required":false,"schema":{"type":"string","format":"date-time"},"index$":10},{"name":"createdAtTo","in":"query","description":"Specify the ending created date or date time to be queried according to RFC 3339, i.e. \"2016-01-01T00:00:00Z\". See https://www.ietf.org/rfc/rfc3339.txt","required":false,"schema":{"type":"string","format":"date-time"},"index$":11}]},"GET /webhooks/{webhookId}/events":{"protocol":"http","parameters":[{"name":"webhookId","in":"path","description":"The webhook identifier","required":true,"schema":{"type":"string","format":"uuid"},"index$":0},{"name":"fromRevision","in":"query","description":"The beginning revision number (optional).","required":false,"schema":{"type":"integer","format":"int64"},"index$":1},{"name":"toRevision","in":"query","description":"The ending revision number (optional).","required":false,"schema":{"type":"integer","format":"int64"},"index$":2},{"name":"prevCursor","in":"query","description":"specify previous cursor to return (optional).","required":false,"schema":{"type":"string"},"index$":3},{"name":"nextCursor","in":"query","description":"specify next cursor to return (optional).","required":false,"schema":{"type":"string"},"index$":4},{"name":"maxResults","in":"query","description":"specify the max results to return (optional).","required":false,"schema":{"type":"integer","format":"int32"},"index$":5}]},"DELETE /webhooks/{webhookId}":{"protocol":"http","parameters":[{"name":"webhookId","in":"path","description":"The webhook identifier","required":true,"schema":{"type":"string","format":"uuid"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const n14_webhook_ref01_ent = client.N14Webhook()
    let n14_webhook_ref01_data = setup.data.new.n14_webhook['n14_webhook_ref01']

    n14_webhook_ref01_data = (await n14_webhook_ref01_ent.create(n14_webhook_ref01_data)).data()
    assert(null != n14_webhook_ref01_data.id)


    // LIST
    const n14_webhook_ref01_match = {}

    const n14_webhook_ref01_list = (await n14_webhook_ref01_ent.list(n14_webhook_ref01_match)).map((e) => e.data())

    assert(!isempty(select(n14_webhook_ref01_list, { id: n14_webhook_ref01_data.id })))


    // LOAD
    const n14_webhook_ref01_match_dt0 = {}
    n14_webhook_ref01_match_dt0.id = n14_webhook_ref01_data.id
    const n14_webhook_ref01_data_dt0 = (await n14_webhook_ref01_ent.load(n14_webhook_ref01_match_dt0)).data()
    assert(n14_webhook_ref01_data_dt0.id === n14_webhook_ref01_data.id)


    // REMOVE
    const n14_webhook_ref01_match_rm0 = {}
    n14_webhook_ref01_match_rm0.id = n14_webhook_ref01_data.id
    await n14_webhook_ref01_ent.remove(n14_webhook_ref01_match_rm0)
  

    // LIST
    const n14_webhook_ref01_match_rt0 = {}

    const n14_webhook_ref01_list_rt0 = (await n14_webhook_ref01_ent.list(n14_webhook_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(n14_webhook_ref01_list_rt0, { id: n14_webhook_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/n14_webhook/N14WebhookTestData.json')

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
    ['n14_webhook01','n14_webhook02','n14_webhook03','webhook01','webhook02','webhook03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_N14_WEBHOOK_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
  })

  idmap = env['TANGOCARD_TEST_N14_WEBHOOK_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_N14_WEBHOOK_ENTID']
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
  
