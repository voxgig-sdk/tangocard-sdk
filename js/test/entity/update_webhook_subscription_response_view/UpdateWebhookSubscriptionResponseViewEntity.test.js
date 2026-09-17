
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


describe('UpdateWebhookSubscriptionResponseViewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.UpdateWebhookSubscriptionResponseView()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"categories","req":false,"short":"The categories the customer is subscribed to.","type":"`$ARRAY`","index$":0},{"active":true,"format":"date-time","name":"createdAt","req":false,"short":"The date and time the webhook was created.","type":"`$STRING`","index$":1},{"active":true,"name":"eventTypes","req":false,"short":"The event types the customer is subscribed to.","type":"`$ARRAY`","index$":2},{"active":true,"format":"date-time","name":"expiresAt","req":false,"short":"The date and time the webhook expires.","type":"`$STRING`","index$":3},{"active":true,"name":"headers","req":false,"short":"Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.","type":"`$ARRAY`","index$":4},{"active":true,"name":"hmacSharedSecretKey","req":false,"short":"The HMAC secret key used to sign the webhook payload.","type":"`$STRING`","index$":5},{"active":true,"name":"payloadVerificationMethod","req":false,"short":"Method to verify webhook payload integrity","type":"`$STRING`","index$":6},{"active":true,"name":"signingCertificate","req":false,"short":"The public X509 certificate used to sign the webhook payload.","type":"`$STRING`","index$":7},{"active":true,"format":"date-time","name":"updatedAt","req":false,"short":"The date and time when the webhook was last updated.","type":"`$STRING`","index$":8},{"active":true,"name":"url","req":false,"short":"The URL of the customer's webhook listener.","type":"`$STRING`","index$":9},{"active":true,"format":"uuid","name":"webhookId","req":false,"short":"The ID of the webhook.","type":"`$STRING`","index$":10}],"name":"update_webhook_subscription_response_view","op":{"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"webhook_id","orig":"webhook_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"PATCH /webhooks/{webhookId}","json":"{\"operationId\":\"updateSubscription\",\"parameters\":[{\"description\":\"The webhook identifier\",\"in\":\"path\",\"name\":\"webhookId\",\"required\":true,\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The webhook subscription request.\",\"properties\":{\"categories\":{\"description\":\"The categories the customer wants to subscribe to.\",\"items\":{\"type\":\"string\"},\"title\":\"Subscription Categories\",\"type\":\"array\"},\"eventTypes\":{\"description\":\"The event types the customer wants to subscribe to.\",\"items\":{\"type\":\"string\"},\"title\":\"Subscription Event Types\",\"type\":\"array\"},\"headers\":{\"description\":\"Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.\",\"items\":{\"description\":\"The header to be included in the webhook request.\",\"properties\":{\"name\":{\"description\":\"The name of the header.\",\"minLength\":1,\"title\":\"Header Name\",\"type\":\"string\"},\"value\":{\"description\":\"The value of the header.\",\"minLength\":1,\"title\":\"Header Value\",\"type\":\"string\"}},\"required\":[\"name\",\"value\"],\"title\":\"Subscription Header\",\"type\":\"object\"},\"title\":\"Webhook Headers\",\"type\":\"array\"},\"hmacSharedSecretKey\":{\"description\":\"The HMAC secret key used to sign the webhook payload. Required when payloadVerificationMethod is HMAC. The key must be base64 encoded.\",\"title\":\"Hmac Shared Secret Key\",\"type\":\"string\"},\"payloadVerificationMethod\":{\"description\":\"Method to verify webhook payload integrity\",\"enum\":[\"HMAC\",\"X509\",\"NONE\"],\"type\":\"string\"},\"signingCertificate\":{\"description\":\"The public X509 certificate used to sign the webhook payload. The certificate must be base64 encoded.\",\"title\":\"Signing Certificate\",\"type\":\"string\"},\"url\":{\"description\":\"The URL of the customer's webhook listener. Must be a valid URL.\",\"title\":\"Webhook URL\",\"type\":\"string\"}},\"title\":\"Update Webhook Subscription Request\",\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The response from updating a webhook subscription.\",\"properties\":{\"categories\":{\"description\":\"The categories the customer is subscribed to.\",\"items\":{\"type\":\"string\"},\"title\":\"Subscription Categories\",\"type\":\"array\"},\"createdAt\":{\"description\":\"The date and time the webhook was created.\",\"format\":\"date-time\",\"title\":\"Webhook Created At\",\"type\":\"string\"},\"eventTypes\":{\"description\":\"The event types the customer is subscribed to.\",\"items\":{\"type\":\"string\"},\"title\":\"Subscription Event Types\",\"type\":\"array\"},\"expiresAt\":{\"description\":\"The date and time the webhook expires.\",\"format\":\"date-time\",\"title\":\"Webhook Expiration\",\"type\":\"string\"},\"headers\":{\"description\":\"Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.\",\"items\":{\"description\":\"The header to be included in the webhook request.\",\"properties\":{\"name\":{\"description\":\"The name of the header.\",\"minLength\":1,\"title\":\"Header Name\",\"type\":\"string\"},\"value\":{\"description\":\"The value of the header.\",\"minLength\":1,\"title\":\"Header Value\",\"type\":\"string\"}},\"required\":[\"name\",\"value\"],\"title\":\"Subscription Header\",\"type\":\"object\"},\"title\":\"Webhook Headers\",\"type\":\"array\"},\"hmacSharedSecretKey\":{\"description\":\"The HMAC secret key used to sign the webhook payload. Required when payloadVerificationMethod is HMAC. The key must be base64 encoded.\",\"title\":\"Hmac Shared Secret Key\",\"type\":\"string\"},\"payloadVerificationMethod\":{\"description\":\"Method to verify webhook payload integrity\",\"enum\":[\"HMAC\",\"X509\",\"NONE\"],\"type\":\"string\"},\"signingCertificate\":{\"description\":\"The public X509 certificate used to sign the webhook payload. The certificate is base64 encoded.\",\"title\":\"Signing Certificate\",\"type\":\"string\"},\"updatedAt\":{\"description\":\"The date and time when the webhook was last updated.\",\"format\":\"date-time\",\"title\":\"Webhook Updated At\",\"type\":\"string\"},\"url\":{\"description\":\"The URL of the customer's webhook listener.\",\"title\":\"Webhook URL\",\"type\":\"string\"},\"webhookId\":{\"description\":\"The ID of the webhook.\",\"format\":\"uuid\",\"title\":\"Webhook ID\",\"type\":\"string\"}},\"title\":\"Update Webhook Subscription Response\",\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PATCH","orig":"/webhooks/{webhookId}","rename":{"param":{"webhookId":"webhook_id"}},"segments":[{"lit":"webhooks"},{"var":"webhook_id"}],"select":{"exist":["webhook_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["webhook"]]},"key$":"update_webhook_subscription_response_view","name__orig":"update_webhook_subscription_response_view","Name":"UpdateWebhookSubscriptionResponseView","name_":"update_webhook_subscription_response_view","name-":"update-webhook-subscription-response-view","NAME":"UPDATE_WEBHOOK_SUBSCRIPTION_RESPONSE_VIEW","index$":44}, {"active":true,"entity":"update_webhook_subscription_response_view","key$":"BasicUpdateWebhookSubscriptionResponseViewFlow","kind":"basic","name":"BasicUpdateWebhookSubscriptionResponseViewFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"update_webhook_subscription_response_view_ref01","srcdatavar":"update_webhook_subscription_response_view_ref01_data","suffix":"_up0","textfield":"createdAt"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-update_webhook_subscription_response_view_ref01"}}],"valid":[],"index$":0}]}, 'UpdateWebhookSubscriptionResponseView')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let update_webhook_subscription_response_view_ref01_data = Object.values(setup.data.existing.update_webhook_subscription_response_view)[0]

    // UPDATE
    const update_webhook_subscription_response_view_ref01_ent = client.UpdateWebhookSubscriptionResponseView()
    const update_webhook_subscription_response_view_ref01_data_up0 = {}

    const update_webhook_subscription_response_view_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-update_webhook_subscription_response_view_ref01_' + setup.now }
    update_webhook_subscription_response_view_ref01_data_up0 [update_webhook_subscription_response_view_ref01_markdef_up0.name] = update_webhook_subscription_response_view_ref01_markdef_up0.value

    const update_webhook_subscription_response_view_ref01_resdata_up0 = (await update_webhook_subscription_response_view_ref01_ent.update(update_webhook_subscription_response_view_ref01_data_up0)).data()
    assert(null != update_webhook_subscription_response_view_ref01_resdata_up0)

    assert(update_webhook_subscription_response_view_ref01_resdata_up0[update_webhook_subscription_response_view_ref01_markdef_up0.name] === update_webhook_subscription_response_view_ref01_markdef_up0.value)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/update_webhook_subscription_response_view/UpdateWebhookSubscriptionResponseViewTestData.json')

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
    ['update_webhook_subscription_response_view01','update_webhook_subscription_response_view02','update_webhook_subscription_response_view03','webhook01','webhook02','webhook03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_UPDATE_WEBHOOK_SUBSCRIPTION_RESPONSE_VIEW_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
  })

  idmap = env['TANGOCARD_TEST_UPDATE_WEBHOOK_SUBSCRIPTION_RESPONSE_VIEW_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_UPDATE_WEBHOOK_SUBSCRIPTION_RESPONSE_VIEW_ENTID']
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
  
