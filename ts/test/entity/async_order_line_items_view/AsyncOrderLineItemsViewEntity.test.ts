

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


describe('AsyncOrderLineItemsViewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.AsyncOrderLineItemsView()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'async_order_line_items_view.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"accountIdentifier","req":true,"type":"`$STRING`","index$":0},{"active":true,"name":"amountCharged","req":false,"short":"Initial value and the total charged amount on the account","type":"`$OBJECT`","index$":1},{"active":true,"name":"campaign","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"customerIdentifier","req":true,"type":"`$STRING`","index$":3},{"active":true,"name":"externalRefID","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"lineItems","req":false,"short":"The List of Line Items for the Async Order.","type":"`$ARRAY`","index$":5},{"active":true,"name":"orderErrors","req":false,"short":"The List of Errors for the Async Order.","type":"`$ARRAY`","index$":6},{"active":true,"name":"orderNotes","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"orderStatus","req":true,"type":"`$STRING`","index$":8},{"active":true,"name":"pagination","req":false,"short":"The cursor for pagination of the async order line items.","type":"`$OBJECT`","index$":9},{"active":true,"name":"purchaseOrderNumber","req":false,"type":"`$STRING`","index$":10},{"active":true,"name":"referenceOrderID","req":true,"type":"`$STRING`","index$":11},{"active":true,"name":"sender","req":false,"type":"`$OBJECT`","index$":12}],"name":"async_order_line_items_view","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"account_id","orig":"account_identifier","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"customer_id","orig":"customer_identifier","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"external_ref_id","orig":"external_ref_id","reqd":true,"type":"`$STRING`","index$":2}],"query":[{"active":true,"kind":"query","name":"external_ref_line_item_i_d","orig":"external_ref_line_item_i_d","reqd":false,"type":"`$ARRAY`","index$":0},{"active":true,"example":false,"kind":"query","name":"failed_only","orig":"failed_only","reqd":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"example":50,"kind":"query","name":"max_result","orig":"max_result","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":"","kind":"query","name":"next_cursor","orig":"next_cursor","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"example":"","kind":"query","name":"prev_cursor","orig":"prev_cursor","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"reference_line_item_i_d","orig":"reference_line_item_i_d","reqd":false,"type":"`$ARRAY`","index$":5}]},"contract":{"id":"GET /asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}/lineItems","json":"{\"operationId\":\"getAsyncOrderLineItemDetails\",\"parameters\":[{\"description\":\"specify the customer to be queried\",\"in\":\"path\",\"name\":\"customerIdentifier\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"specify the account to be queried.\",\"in\":\"path\",\"name\":\"accountIdentifier\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"External Reference ID for a specific async order\",\"in\":\"path\",\"name\":\"externalRefID\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Specify previous cursor to return (optional).\",\"in\":\"query\",\"name\":\"prevCursor\",\"required\":false,\"schema\":{\"default\":\"\",\"type\":\"string\"}},{\"description\":\"Specify next cursor to return (optional).\",\"in\":\"query\",\"name\":\"nextCursor\",\"required\":false,\"schema\":{\"default\":\"\",\"type\":\"string\"}},{\"description\":\"Specify the max results to return (optional).\",\"in\":\"query\",\"name\":\"maxResults\",\"required\":false,\"schema\":{\"default\":50,\"format\":\"int32\",\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Specify the externalRefLineItemIDs to be queried. A maximum of 50 externalRefLineItemIDs can be provided\",\"in\":\"query\",\"name\":\"externalRefLineItemIDs\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},{\"description\":\"Specify the referenceLineItemIDs to be queried. A maximum of 50 referenceLineItemIDs can be provided\",\"in\":\"query\",\"name\":\"referenceLineItemIDs\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},{\"description\":\"Specify true to return only failed line items\",\"in\":\"query\",\"name\":\"failedOnly\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"A list line items for a specific async order.\",\"properties\":{\"accountIdentifier\":{\"title\":\"Account Identifier\",\"type\":\"string\"},\"amountCharged\":{\"description\":\"Initial value and the total charged amount on the account\",\"properties\":{\"currencyCode\":{\"type\":\"string\"},\"shippingFee\":{\"type\":\"number\"},\"total\":{\"type\":\"number\"},\"value\":{\"type\":\"number\"}},\"type\":\"object\"},\"campaign\":{\"title\":\"Campaign\",\"type\":\"string\"},\"customerIdentifier\":{\"title\":\"Customer Identifier\",\"type\":\"string\"},\"externalRefID\":{\"title\":\"External Reference ID\",\"type\":\"string\"},\"lineItems\":{\"description\":\"The List of Line Items for the Async Order.\",\"items\":{\"properties\":{\"amountCharged\":{\"properties\":{\"currencyCode\":{\"type\":\"string\"},\"exchangeRate\":{\"type\":\"number\"},\"fee\":{\"type\":\"number\"},\"total\":{\"type\":\"number\"},\"value\":{\"type\":\"number\"}},\"title\":\"Amount Charged\",\"type\":\"object\"},\"amountIssued\":{\"properties\":{\"currencyCode\":{\"type\":\"string\"},\"exchangeRate\":{\"type\":\"number\"},\"fee\":{\"type\":\"number\"},\"total\":{\"type\":\"number\"},\"value\":{\"type\":\"number\"}},\"title\":\"Amount Issued\",\"type\":\"object\"},\"bulkShipping\":{\"properties\":{\"address\":{\"properties\":{\"city\":{\"title\":\"City\",\"type\":\"string\"},\"country\":{\"title\":\"Country Code\",\"type\":\"string\"},\"postalCode\":{\"title\":\"Postal Code\",\"type\":\"string\"},\"stateOrProvince\":{\"title\":\"State or Province\",\"type\":\"string\"},\"streetLine1\":{\"title\":\"Street Line 1\",\"type\":\"string\"},\"streetLine2\":{\"title\":\"Street Line 2\",\"type\":\"string\"}},\"type\":\"object\"},\"companyName\":{\"type\":\"string\"},\"contactEmail\":{\"type\":\"string\"},\"contactFirstName\":{\"type\":\"string\"},\"contactLastName\":{\"type\":\"string\"},\"contactMobileNumber\":{\"type\":\"string\"}},\"title\":\"Bulk Shipping\",\"type\":\"object\"},\"canCancel\":{\"title\":\"Can Cancel\",\"type\":\"boolean\"},\"canFreeze\":{\"title\":\"Can Freeze\",\"type\":\"boolean\"},\"dateIssued\":{\"format\":\"date-time\",\"title\":\"Date Issued\",\"type\":\"string\"},\"deliveryDate\":{\"format\":\"date-time\",\"title\":\"Delivery Date\",\"type\":\"string\"},\"deliveryMethod\":{\"title\":\"Delivery Method\",\"type\":\"string\"},\"deliveryStatus\":{\"title\":\"Delivery Status\",\"type\":\"string\"},\"emailSubject\":{\"title\":\"Line Item Email Subject\",\"type\":\"string\"},\"etid\":{\"title\":\"Etid\",\"type\":\"string\"},\"expirationDate\":{\"format\":\"date-time\",\"title\":\"Expiration Date\",\"type\":\"string\"},\"externalRefLineItemID\":{\"title\":\"External Reference Line Item ID\",\"type\":\"string\"},\"lineItemActionReason\":{\"title\":\"Line Item Action Reason\",\"type\":\"string\"},\"lineItemErrors\":{\"items\":{\"properties\":{\"errorCode\":{\"type\":\"string\"},\"errorMessage\":{\"type\":\"string\"}},\"type\":\"object\"},\"title\":\"Line Item Errors\",\"type\":\"array\"},\"lineItemNotes\":{\"title\":\"Line Item Notes\",\"type\":\"string\"},\"lineItemStatus\":{\"title\":\"Line Item Status\",\"type\":\"string\"},\"message\":{\"title\":\"Line Item Message\",\"type\":\"string\"},\"physicalMethod\":{\"title\":\"Physical Method\",\"type\":\"string\"},\"ptid\":{\"title\":\"Ptid\",\"type\":\"string\"},\"quantity\":{\"format\":\"int32\",\"title\":\"Reward Quantity\",\"type\":\"integer\"},\"recipient\":{\"properties\":{\"address\":{\"properties\":{\"city\":{\"title\":\"City\",\"type\":\"string\"},\"companyName\":{\"title\":\"Company Name\",\"type\":\"string\"},\"country\":{\"title\":\"Country Code\",\"type\":\"string\"},\"postalCode\":{\"title\":\"Postal Code\",\"type\":\"string\"},\"stateOrProvince\":{\"title\":\"State or Province\",\"type\":\"string\"},\"streetLine1\":{\"title\":\"Street Line 1\",\"type\":\"string\"},\"streetLine2\":{\"title\":\"Street Line 2\",\"type\":\"string\"}},\"title\":\"Address\",\"type\":\"object\"},\"email\":{\"title\":\"Email\",\"type\":\"string\"},\"firstName\":{\"title\":\"First Name\",\"type\":\"string\"},\"lastName\":{\"title\":\"Last Name\",\"type\":\"string\"},\"mobileNumber\":{\"title\":\"Mobile Number\",\"type\":\"string\"}},\"title\":\"Recipient Details\",\"type\":\"object\"},\"referenceLineItemID\":{\"title\":\"Reference Line Item ID\",\"type\":\"string\"},\"reissuedFromReferenceLineItemId\":{\"description\":\"Reissued from reference line item ID\",\"title\":\"Reissued From\",\"type\":\"string\"},\"reissuedToReferenceLineItemId\":{\"description\":\"Reissued to reference line item ID\",\"title\":\"Reissued To\",\"type\":\"string\"},\"rewardName\":{\"title\":\"Reward Name\",\"type\":\"string\"},\"rewards\":{\"items\":{\"properties\":{\"credentialList\":{\"items\":{\"properties\":{\"credentialType\":{\"type\":\"string\"},\"label\":{\"type\":\"string\"},\"type\":{\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"title\":\"Verbose list of credentials\",\"type\":\"array\"},\"redemptionInstructions\":{\"title\":\"Redemption Instructions\",\"type\":\"string\"},\"rewardStatus\":{\"title\":\"Reward Status\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":\"The Reward\",\"type\":\"array\"},\"scheduledDeliveryDate\":{\"format\":\"date-time\",\"title\":\"Scheduled Delivery Date\",\"type\":\"string\"},\"shippingMethod\":{\"title\":\"Shipping Method\",\"type\":\"string\"},\"utid\":{\"title\":\"Utid\",\"type\":\"string\"}},\"required\":[\"amountIssued\",\"dateIssued\",\"deliveryStatus\",\"etid\",\"expirationDate\",\"lineItemStatus\",\"referenceLineItemID\",\"rewardName\",\"rewards\",\"utid\"],\"type\":\"object\"},\"title\":\"Line Items\",\"type\":\"array\"},\"orderErrors\":{\"description\":\"The List of Errors for the Async Order.\",\"items\":{\"properties\":{\"errorCode\":{\"type\":\"string\"},\"errorMessage\":{\"type\":\"string\"}},\"type\":\"object\"},\"title\":\"Order Errors\",\"type\":\"array\"},\"orderNotes\":{\"title\":\"Order Notes\",\"type\":\"string\"},\"orderStatus\":{\"title\":\"Order Status\",\"type\":\"string\"},\"pagination\":{\"description\":\"The cursor for pagination of the async order line items.\",\"properties\":{\"maxResults\":{\"format\":\"int32\",\"type\":\"integer\"},\"nextCursor\":{\"type\":\"string\"},\"nextPageAvailable\":{\"type\":\"boolean\"},\"numberOfElements\":{\"format\":\"int32\",\"type\":\"integer\"},\"prevCursor\":{\"type\":\"string\"},\"prevPageAvailable\":{\"type\":\"boolean\"}},\"title\":\"Pagination Cursor\",\"type\":\"object\"},\"purchaseOrderNumber\":{\"title\":\"Purchase Order Number\",\"type\":\"string\"},\"referenceOrderID\":{\"title\":\"Reference Order ID\",\"type\":\"string\"},\"sender\":{\"properties\":{\"email\":{\"title\":\"Email\",\"type\":\"string\"},\"firstName\":{\"title\":\"First Name\",\"type\":\"string\"},\"lastName\":{\"title\":\"Last Name\",\"type\":\"string\"}},\"title\":\"Sender Details\",\"type\":\"object\"}},\"required\":[\"accountIdentifier\",\"customerIdentifier\",\"orderStatus\",\"referenceOrderID\"],\"title\":\"Get line items for async order\",\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Not Found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Internal Server Error\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}/lineItems","rename":{"param":{"accountIdentifier":"account_id","customerIdentifier":"customer_id","externalRefID":"external_ref_id"}},"segments":[{"lit":"asyncOrders"},{"lit":"customers"},{"var":"customer_id"},{"lit":"accounts"},{"var":"account_id"},{"var":"external_ref_id"},{"lit":"lineItems"}],"select":{"exist":["account_id","customer_id","external_ref_id","external_ref_line_item_i_d","failed_only","max_result","next_cursor","prev_cursor","reference_line_item_i_d"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["customer","account"]]},"key$":"async_order_line_items_view","name__orig":"async_order_line_items_view","Name":"AsyncOrderLineItemsView","name_":"async_order_line_items_view","name-":"async-order-line-items-view","NAME":"ASYNC_ORDER_LINE_ITEMS_VIEW","index$":5}, {"active":true,"entity":"async_order_line_items_view","key$":"BasicAsyncOrderLineItemsViewFlow","kind":"basic","name":"BasicAsyncOrderLineItemsViewFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"account_id":"account01","customer_id":"customer01","external_ref_id":"external_ref01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"async_order_line_items_view_ref01"}}],"index$":0}]}, 'AsyncOrderLineItemsView')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let async_order_line_items_view_ref01_data = Object.values(setup.data.existing.async_order_line_items_view)[0] as any

    // LIST
    const async_order_line_items_view_ref01_ent = client.AsyncOrderLineItemsView()
    const async_order_line_items_view_ref01_match: any = {}
    async_order_line_items_view_ref01_match['account_id'] = setup.idmap['account01']
    async_order_line_items_view_ref01_match['customer_id'] = setup.idmap['customer01']
    async_order_line_items_view_ref01_match['external_ref_id'] = setup.idmap['external_ref01']

    const async_order_line_items_view_ref01_list = (await async_order_line_items_view_ref01_ent.list(async_order_line_items_view_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/async_order_line_items_view/AsyncOrderLineItemsViewTestData.json')

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
    ['async_order_line_items_view01','async_order_line_items_view02','async_order_line_items_view03','customer01','customer02','customer03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_ASYNC_ORDER_LINE_ITEMS_VIEW_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
    'TANGOCARD_SECRET': '',
  })

  idmap = env['TANGOCARD_TEST_ASYNC_ORDER_LINE_ITEMS_VIEW_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_ASYNC_ORDER_LINE_ITEMS_VIEW_ENTID']
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
  
