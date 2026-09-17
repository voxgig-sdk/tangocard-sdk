
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


describe('OrderViewSummaryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.OrderViewSummary()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"amount","req":false,"short":"Optional.","type":"`$NUMBER`","index$":0},{"active":true,"name":"deliveryMethod","req":false,"short":"Optional.","type":"`$STRING`","index$":1},{"active":true,"name":"notes","req":false,"short":"Optional order notes (up to 150 characters).","type":"`$STRING`","index$":2},{"active":true,"name":"otherReason","req":false,"short":"Required when reasonCode is \"OTHER\", enter the reason why the line item is being reissued.","type":"`$STRING`","index$":3},{"active":true,"name":"reasonCode","req":true,"short":"Required.","type":"`$STRING`","index$":4},{"active":true,"name":"recipient","req":false,"short":"Optional.","type":"`$OBJECT`","index$":5}],"name":"order_view_summary","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"reference_line_item_id","orig":"reference_line_item_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /lineItems/{referenceLineItemID}/reissue","json":"{\"operationId\":\"reissueLineItem\",\"parameters\":[{\"description\":\"Reference line item ID is returned in the line item's response.\",\"in\":\"path\",\"name\":\"referenceLineItemID\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"amount\":{\"description\":\"Optional. Specify the new face value of the reward.\",\"title\":\"Reward amount\",\"type\":\"number\"},\"deliveryMethod\":{\"description\":\"Optional. Specify delivery method for the order.\",\"enum\":[\"NONE\",\"EMAIL\",\"PHONE\",\"EMBEDDED\",\"EMBEDDED_COMPONENT\",\"WHATSAPP\",\"BULKDIGITAL\"],\"title\":\"Delivery method\",\"type\":\"string\"},\"notes\":{\"description\":\"Optional order notes (up to 150 characters).\",\"maxLength\":150,\"minLength\":0,\"title\":\"Order notes\",\"type\":\"string\"},\"otherReason\":{\"description\":\"Required when reasonCode is \\\"OTHER\\\", enter the reason why the line item is being reissued.\",\"title\":\"Other reason\",\"type\":\"string\"},\"reasonCode\":{\"description\":\"Required. Enter the reason why this line item is being reissued.\",\"enum\":[\"DELIVERY_INFO\",\"REWARD_AMOUNT\",\"REWARD_TYPE\",\"RECIPIENT\",\"CURRENCY\",\"RECIPIENT_REQUESTED\",\"OTHER\"],\"title\":\"Reason code for change\",\"type\":\"string\"},\"recipient\":{\"description\":\"Optional. Use to update recipient name or email address.\",\"properties\":{\"email\":{\"description\":\"Optional. Updated recipient email address.\",\"title\":\"Recipient email\",\"type\":\"string\"},\"firstName\":{\"description\":\"Optional. Updated recipient first name. Allows 100 characters, cannot use < or > or / in the name. Physical rewards: allows 25 character max, Digits 0-9, alpha (a-z, A-Z), space period, comma and hyphen.\",\"maxLength\":100,\"minLength\":0,\"title\":\"Recipient first name\",\"type\":\"string\"},\"lastName\":{\"description\":\"Optional. Updated recipient last name. Allows 100 characters, cannot use < or > or / in the name. Physical rewards: allows 25 character max, Digits 0-9, alpha (a-z, A-Z), space period, comma and hyphen.\",\"maxLength\":100,\"minLength\":0,\"title\":\"Recipient last name\",\"type\":\"string\"},\"mobileNumber\":{\"description\":\"Optional. Updated recipient mobile number. Required if delivery method is SMS.\",\"title\":\"Recipient mobile number\",\"type\":\"string\"}},\"title\":\"Recipient\",\"type\":\"object\"}},\"required\":[\"reasonCode\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"accountIdentifier\":{\"title\":\"Account Identifier\",\"type\":\"string\"},\"amountCharged\":{\"properties\":{\"currencyCode\":{\"type\":\"string\"},\"exchangeRate\":{\"type\":\"number\"},\"fee\":{\"type\":\"number\"},\"total\":{\"type\":\"number\"},\"value\":{\"type\":\"number\"}},\"title\":\"Amount Charged\",\"type\":\"object\"},\"campaign\":{\"title\":\"Reward Campaign\",\"type\":\"string\"},\"createdAt\":{\"title\":\"Created Date\",\"type\":\"string\"},\"customerIdentifier\":{\"title\":\"Customer Identifier\",\"type\":\"string\"},\"deliveryMethod\":{\"enum\":[\"NONE\",\"EMAIL\",\"PHONE\",\"ADDRESS\",\"EMBEDDED\",\"BULKSHIPMENT\",\"QRCODE\",\"BULKDIGITAL\",\"EMBEDDED_COMPONENT\",\"WHATSAPP\"],\"title\":\"Delivery Method\",\"type\":\"string\"},\"denomination\":{\"properties\":{\"$ref\":\"#/responses/201/content/application~1json/schema/properties/amountCharged/properties\"},\"title\":\"Denomination\",\"type\":\"object\"},\"emailSubject\":{\"title\":\"Email Subject\",\"type\":\"string\"},\"externalRefID\":{\"title\":\"External Reference ID\",\"type\":\"string\"},\"message\":{\"title\":\"Email Message\",\"type\":\"string\"},\"ptid\":{\"title\":\"Ptid - Unique Printed Reward Link Template ID.\",\"type\":\"string\"},\"purchaseOrderNumber\":{\"title\":\"Purchase Order Number\",\"type\":\"string\"},\"recipient\":{\"properties\":{\"address\":{\"properties\":{\"city\":{\"title\":\"City\",\"type\":\"string\"},\"companyName\":{\"title\":\"Company Name\",\"type\":\"string\"},\"country\":{\"title\":\"Country Code\",\"type\":\"string\"},\"postalCode\":{\"title\":\"Postal Code\",\"type\":\"string\"},\"stateOrProvince\":{\"title\":\"State or Province\",\"type\":\"string\"},\"streetLine1\":{\"title\":\"Street Line 1\",\"type\":\"string\"},\"streetLine2\":{\"title\":\"Street Line 2\",\"type\":\"string\"}},\"title\":\"Address\",\"type\":\"object\"},\"email\":{\"title\":\"Email\",\"type\":\"string\"},\"firstName\":{\"title\":\"First Name\",\"type\":\"string\"},\"lastName\":{\"title\":\"Last Name\",\"type\":\"string\"},\"mobileNumber\":{\"title\":\"Mobile Number\",\"type\":\"string\"}},\"title\":\"Recipient Details\",\"type\":\"object\"},\"redemptionInstructions\":{\"title\":\"Redemption Instructions\",\"type\":\"string\"},\"referenceLineItemID\":{\"title\":\"Reference Line Item ID\",\"type\":\"string\"},\"referenceOrderID\":{\"title\":\"Reference Order ID\",\"type\":\"string\"},\"reward\":{\"properties\":{\"credentialList\":{\"items\":{\"properties\":{\"credentialType\":{\"type\":\"string\"},\"label\":{\"type\":\"string\"},\"type\":{\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"title\":\"Verbose list of credentials\",\"type\":\"array\"},\"credentials\":{\"title\":\"Credentials as a map with String label key and credential value String\",\"type\":\"string\"},\"redemptionInstructions\":{\"type\":\"string\"}},\"required\":[\"credentials\"],\"title\":\"The Reward\",\"type\":\"object\"},\"rewardName\":{\"title\":\"Reward Name\",\"type\":\"string\"},\"sendEmail\":{\"deprecated\":true,\"title\":\"Send Email?\",\"type\":\"boolean\"},\"sender\":{\"properties\":{\"email\":{\"title\":\"Email\",\"type\":\"string\"},\"firstName\":{\"title\":\"First Name\",\"type\":\"string\"},\"lastName\":{\"title\":\"Last Name\",\"type\":\"string\"}},\"title\":\"Sender Details\",\"type\":\"object\"},\"status\":{\"title\":\"Reward Status\",\"type\":\"string\"},\"utid\":{\"title\":\"Utid - Unique Tango Card ID.\",\"type\":\"string\"}},\"required\":[\"accountIdentifier\",\"amountCharged\",\"campaign\",\"createdAt\",\"customerIdentifier\",\"denomination\",\"emailSubject\",\"externalRefID\",\"message\",\"recipient\",\"referenceLineItemID\",\"referenceOrderID\",\"reward\",\"rewardName\",\"sender\",\"status\",\"utid\"],\"type\":\"object\"}}},\"description\":\"Created\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Forbidden\"},\"422\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unprocessable Entity\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Internal Server Error\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/lineItems/{referenceLineItemID}/reissue","rename":{"param":{"referenceLineItemID":"reference_line_item_id"}},"segments":[{"lit":"lineItems"},{"var":"reference_line_item_id"},{"lit":"reissue"}],"select":{"exist":["reference_line_item_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["line_item"]]},"key$":"order_view_summary","name__orig":"order_view_summary","Name":"OrderViewSummary","name_":"order_view_summary","name-":"order-view-summary","NAME":"ORDER_VIEW_SUMMARY","index$":35}, {"active":true,"entity":"order_view_summary","key$":"BasicOrderViewSummaryFlow","kind":"basic","name":"BasicOrderViewSummaryFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"order_view_summary_ref01"},"match":{"reference_line_item_id":"reference_line_item01"},"op":"create","spec":[],"valid":[],"index$":0}]}, 'OrderViewSummary')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const order_view_summary_ref01_ent = client.OrderViewSummary()
    let order_view_summary_ref01_data = setup.data.new.order_view_summary['order_view_summary_ref01']
    order_view_summary_ref01_data['reference_line_item_id'] = setup.idmap['reference_line_item01']

    order_view_summary_ref01_data = (await order_view_summary_ref01_ent.create(order_view_summary_ref01_data)).data()
    assert(null != order_view_summary_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/order_view_summary/OrderViewSummaryTestData.json')

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
    ['order_view_summary01','order_view_summary02','order_view_summary03','line_item01','line_item02','line_item03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_ORDER_VIEW_SUMMARY_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
  })

  idmap = env['TANGOCARD_TEST_ORDER_VIEW_SUMMARY_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_ORDER_VIEW_SUMMARY_ENTID']
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
  
