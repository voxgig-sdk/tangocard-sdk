
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


describe('LineItemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.LineItem()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"accountIdentifier":{"a":true,"h":"Account Identifier","n":"accountIdentifier","r":true,"t":"`$STRING`","key$":"accountIdentifier","index$":0},"accountNumber":{"a":true,"h":"Account Number","n":"accountNumber","r":true,"t":"`$STRING`","key$":"accountNumber","index$":1},"amountCharged":{"a":true,"h":"Amount Charged","n":"amountCharged","r":false,"t":"`$OBJECT`","key$":"amountCharged","index$":2},"amountIssued":{"a":true,"h":"Amount Issued","n":"amountIssued","r":true,"t":"`$OBJECT`","key$":"amountIssued","index$":3},"campaign":{"a":true,"h":"Campaign","n":"campaign","r":false,"t":"`$STRING`","key$":"campaign","index$":4},"canCancel":{"a":true,"h":"Can Cancel","n":"canCancel","r":false,"t":"`$BOOLEAN`","key$":"canCancel","index$":5},"canFreeze":{"a":true,"h":"Can Freeze","n":"canFreeze","r":false,"t":"`$BOOLEAN`","key$":"canFreeze","index$":6},"customerIdentifier":{"a":true,"h":"Customer Identifier","n":"customerIdentifier","r":true,"t":"`$STRING`","key$":"customerIdentifier","index$":7},"dateIssued":{"a":true,"fo":"date-time","h":"Date Issued","n":"dateIssued","r":true,"t":"`$STRING`","key$":"dateIssued","index$":8},"deliveryMethod":{"a":true,"h":"Delivery Method","n":"deliveryMethod","r":false,"t":"`$STRING`","key$":"deliveryMethod","index$":9},"deliveryStatus":{"a":true,"h":"Delivery Status","n":"deliveryStatus","r":false,"t":"`$STRING`","key$":"deliveryStatus","index$":10},"emailStatus":{"a":true,"h":"Email Status","n":"emailStatus","r":true,"t":"`$STRING`","key$":"emailStatus","index$":11},"etid":{"a":true,"h":"Etid","n":"etid","r":true,"t":"`$STRING`","key$":"etid","index$":12},"expirationDate":{"a":true,"fo":"date-time","h":"Expiration Date","n":"expirationDate","r":true,"t":"`$STRING`","key$":"expirationDate","index$":13},"externalReferenceLineItemID":{"a":true,"h":"External Reference Line Item Id","n":"externalReferenceLineItemID","r":false,"t":"`$STRING`","key$":"externalReferenceLineItemID","index$":14},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":15},"lineItemActionHistory":{"a":true,"h":"Line Item Action History","n":"lineItemActionHistory","r":false,"t":"`$ARRAY`","key$":"lineItemActionHistory","index$":16},"lineItemActionReason":{"a":true,"h":"Line Item Action Reason","n":"lineItemActionReason","r":false,"t":"`$STRING`","key$":"lineItemActionReason","index$":17},"lineItemErrors":{"a":true,"h":"Line Item Errors","n":"lineItemErrors","r":false,"sh":"Errors related to the line item","t":"`$ARRAY`","key$":"lineItemErrors","index$":18},"lineNumber":{"a":true,"fo":"int32","h":"Line Number","n":"lineNumber","r":true,"t":"`$INTEGER`","key$":"lineNumber","index$":19},"orderNotes":{"a":true,"h":"Order Notes","n":"orderNotes","r":false,"t":"`$STRING`","key$":"orderNotes","index$":20},"orderSource":{"a":true,"h":"Order Source","n":"orderSource","r":true,"t":"`$STRING`","key$":"orderSource","index$":21},"orderStatus":{"a":true,"h":"Order Status","n":"orderStatus","r":true,"t":"`$STRING`","key$":"orderStatus","index$":22},"ptid":{"a":true,"h":"Ptid","n":"ptid","r":false,"t":"`$STRING`","key$":"ptid","index$":23},"purchaseOrderNumber":{"a":true,"h":"Purchase Order Number","n":"purchaseOrderNumber","r":false,"t":"`$STRING`","key$":"purchaseOrderNumber","index$":24},"quantity":{"a":true,"fo":"int32","h":"Quantity","n":"quantity","r":false,"sh":"quantity of line items","t":"`$INTEGER`","key$":"quantity","index$":25},"recipient":{"a":true,"h":"Recipient","n":"recipient","r":false,"t":"`$OBJECT`","key$":"recipient","index$":26},"redemptionHistory":{"a":true,"h":"Redemption History","n":"redemptionHistory","r":false,"t":"`$ARRAY`","key$":"redemptionHistory","index$":27},"referenceLineItemID":{"a":true,"h":"Reference Line Item Id","n":"referenceLineItemID","r":true,"t":"`$STRING`","key$":"referenceLineItemID","index$":28},"referenceOrderID":{"a":true,"h":"Reference Order Id","n":"referenceOrderID","r":true,"t":"`$STRING`","key$":"referenceOrderID","index$":29},"reissuedFromReferenceLineItemId":{"a":true,"h":"Reissued From Reference Line Item Id","n":"reissuedFromReferenceLineItemId","r":false,"sh":"Reissued from reference line item ID","t":"`$STRING`","key$":"reissuedFromReferenceLineItemId","index$":30},"reissuedToReferenceLineItemId":{"a":true,"h":"Reissued To Reference Line Item Id","n":"reissuedToReferenceLineItemId","r":false,"sh":"Reissued to reference line item ID","t":"`$STRING`","key$":"reissuedToReferenceLineItemId","index$":31},"remainingBalance":{"a":true,"h":"Remaining Balance","n":"remainingBalance","r":false,"t":"`$NUMBER`","key$":"remainingBalance","index$":32},"resendHistory":{"a":true,"h":"Resend History","n":"resendHistory","r":false,"t":"`$ARRAY`","key$":"resendHistory","index$":33},"reward":{"a":true,"h":"Reward","n":"reward","r":true,"t":"`$OBJECT`","key$":"reward","index$":34},"rewardName":{"a":true,"h":"Reward Name","n":"rewardName","r":true,"t":"`$STRING`","key$":"rewardName","index$":35},"rewardStatus":{"a":true,"h":"Reward Status","n":"rewardStatus","r":false,"t":"`$STRING`","key$":"rewardStatus","index$":36},"rewardViewHistory":{"a":true,"h":"Reward View History","n":"rewardViewHistory","r":false,"t":"`$ARRAY`","key$":"rewardViewHistory","index$":37},"sender":{"a":true,"h":"Sender","n":"sender","r":false,"t":"`$OBJECT`","key$":"sender","index$":38},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":39},"utid":{"a":true,"h":"Utid","n":"utid","r":true,"t":"`$STRING`","key$":"utid","index$":40}},"id":{"field":"id","name":"id"},"name":"line_item","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /lineItems/{referenceLineItemID}/cancel","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"reference_line_item_id","or":"reference_line_item_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/lineItems/{referenceLineItemID}/cancel","q":{"$action":"cancel","exist":["reference_line_item_id"]},"r":{"param":{"referenceLineItemID":"reference_line_item_id"}},"s":[{"lit":"lineItems"},{"var":"reference_line_item_id"},{"lit":"cancel"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /lineItems/{referenceLineItemID}/freeze","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"reference_line_item_id","or":"reference_line_item_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/lineItems/{referenceLineItemID}/freeze","q":{"$action":"freeze","exist":["reference_line_item_id"]},"r":{"param":{"referenceLineItemID":"reference_line_item_id"}},"s":[{"lit":"lineItems"},{"var":"reference_line_item_id"},{"lit":"freeze"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /lineItems/{referenceLineItemID}/unfreeze","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"reference_line_item_id","or":"reference_line_item_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/lineItems/{referenceLineItemID}/unfreeze","q":{"$action":"unfreeze","exist":["reference_line_item_id"]},"r":{"param":{"referenceLineItemID":"reference_line_item_id"}},"s":[{"lit":"lineItems"},{"var":"reference_line_item_id"},{"lit":"unfreeze"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /lineItems","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"account_identifier","or":"account_identifier","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"campaign","or":"campaign","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"false","k":"query","n":"column_sort_ascending","or":"column_sort_ascending","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"dateIssued","k":"query","n":"column_sort_name","or":"column_sort_name","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"delivery_method","or":"delivery_method","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"delivery_status","or":"delivery_status","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"elements_per_block","or":"elements_per_block","r":false,"t":"`$INTEGER`","index$":6},{"a":true,"k":"query","n":"email_status","or":"email_status","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"end_date","or":"end_date","r":false,"t":"`$STRING`","index$":8},{"a":true,"k":"query","n":"etid","or":"etid","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"external_ref_id","or":"external_ref_id","r":false,"t":"`$STRING`","index$":10},{"a":true,"k":"query","n":"has_remaining_balance","or":"has_remaining_balance","r":false,"t":"`$BOOLEAN`","index$":11},{"a":true,"k":"query","n":"max_remaining_balance","or":"max_remaining_balance","r":false,"t":"`$NUMBER`","index$":12},{"a":true,"k":"query","n":"min_remaining_balance","or":"min_remaining_balance","r":false,"t":"`$NUMBER`","index$":13},{"a":true,"k":"query","n":"order_note","or":"order_note","r":false,"t":"`$STRING`","index$":14},{"a":true,"k":"query","n":"order_source","or":"order_source","r":false,"t":"`$STRING`","index$":15},{"a":true,"k":"query","n":"order_status","or":"order_status","r":false,"t":"`$STRING`","index$":16},{"a":true,"k":"query","n":"page_key","or":"page_key","r":false,"t":"`$ARRAY`","index$":17},{"a":true,"ex":false,"k":"query","n":"page_previous","or":"page_previous","r":false,"t":"`$BOOLEAN`","index$":18},{"a":true,"k":"query","n":"ptid","or":"ptid","r":false,"t":"`$STRING`","index$":19},{"a":true,"k":"query","n":"purchase_order_number","or":"purchase_order_number","r":false,"t":"`$STRING`","index$":20},{"a":true,"k":"query","n":"recipient_city","or":"recipient_city","r":false,"t":"`$STRING`","index$":21},{"a":true,"k":"query","n":"recipient_country","or":"recipient_country","r":false,"t":"`$STRING`","index$":22},{"a":true,"k":"query","n":"recipient_email","or":"recipient_email","r":false,"t":"`$STRING`","index$":23},{"a":true,"k":"query","n":"recipient_first_name","or":"recipient_first_name","r":false,"t":"`$STRING`","index$":24},{"a":true,"k":"query","n":"recipient_last_name","or":"recipient_last_name","r":false,"t":"`$STRING`","index$":25},{"a":true,"k":"query","n":"recipient_mobile_number","or":"recipient_mobile_number","r":false,"t":"`$STRING`","index$":26},{"a":true,"k":"query","n":"recipient_postal_code","or":"recipient_postal_code","r":false,"t":"`$STRING`","index$":27},{"a":true,"k":"query","n":"recipient_state_or_province","or":"recipient_state_or_province","r":false,"t":"`$STRING`","index$":28},{"a":true,"k":"query","n":"recipient_street_line1","or":"recipient_street_line1","r":false,"t":"`$STRING`","index$":29},{"a":true,"k":"query","n":"recipient_street_line2","or":"recipient_street_line2","r":false,"t":"`$STRING`","index$":30},{"a":true,"k":"query","n":"reference_order_id","or":"reference_order_id","r":false,"t":"`$STRING`","index$":31},{"a":true,"k":"query","n":"start_date","or":"start_date","r":false,"t":"`$STRING`","index$":32},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":33},{"a":true,"k":"query","n":"utid","or":"utid","r":false,"t":"`$STRING`","index$":34}]},"k":"http","m":"GET","o":"/lineItems","q":{"exist":["account_identifier","campaign","column_sort_ascending","column_sort_name","delivery_method","delivery_status","elements_per_block","email_status","end_date","etid","external_ref_id","has_remaining_balance","max_remaining_balance","min_remaining_balance","order_note","order_source","order_status","page_key","page_previous","ptid","purchase_order_number","recipient_city","recipient_country","recipient_email","recipient_first_name","recipient_last_name","recipient_mobile_number","recipient_postal_code","recipient_state_or_province","recipient_street_line1","recipient_street_line2","reference_order_id","start_date","status","utid"]},"r":{},"s":[{"lit":"lineItems"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /lineItems/{referenceLineItemID}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"reference_line_item_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/lineItems/{referenceLineItemID}","q":{"exist":["id"]},"r":{"param":{"referenceLineItemID":"id"}},"s":[{"lit":"lineItems"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"line_item","name__orig":"line_item","Name":"LineItem","name_":"line_item","name-":"line-item","NAME":"LINE_ITEM","index$":22}, {"active":true,"entity":"line_item","key$":"BasicLineItemFlow","kind":"basic","name":"BasicLineItemFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"line_item_ref01"},"m":{"reference_line_item_id":"reference_line_item01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"line_item_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"line_item_ref01","srcdatavar":"line_item_ref01_data","suffix":"_dt0"},"m":{"id":"line_item01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-line_item_ref01"}}],"index$":2}]}, 'LineItem', {"POST /lineItems/{referenceLineItemID}/cancel":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"reasonCode":{"type":"string","enum":["DELIVERY_INFO","REWARD_AMOUNT","REWARD_TYPE","RECIPIENT","CURRENCY","RECIPIENT_REQUESTED","RECIPIENT_OBLIGATIONS","DUPLICATE","FRAUD","OTHER"],"title":"Required reason code for change"},"otherReason":{"type":"string","title":"Required when reasonCode is OTHER"}},"required":["reasonCode"],"x-ref":"#/components/schemas/CancelLineItemRequestCriteria"}}},"required":true},"parameters":[{"name":"referenceLineItemID","in":"path","description":"Reference line item ID is returned in the line items response.","required":true,"schema":{"type":"string"},"index$":0}]},"POST /lineItems/{referenceLineItemID}/freeze":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"reasonCode":{"type":"string","description":"Enter the reason why this line item is being Cancelled, Frozen, Unfrozen (respectively)","enum":["DELIVERY_INFO","REWARD_AMOUNT","REWARD_TYPE","VERIFY_ORDER","FRAUD","OTHER"],"title":"Required reason code for change"},"otherReason":{"type":"string","description":"Required when reasonCode is \"OTHER\", enter the reason why the line item is being C/F/UF","title":"Required when ReasonCode is Other"}},"required":["reasonCode"],"x-ref":"#/components/schemas/FreezeLineItemRequestCriteria"}}},"required":true},"parameters":[{"name":"referenceLineItemID","in":"path","description":"Reference line item ID is returned in the line items response.","required":true,"schema":{"type":"string"},"index$":0}]},"POST /lineItems/{referenceLineItemID}/unfreeze":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"reasonCode":{"type":"string","enum":["DELIVERY_INFO","REWARD_AMOUNT","REWARD_TYPE","VERIFY_ORDER","FRAUD","OTHER"],"title":"Required reason code for change"},"otherReason":{"type":"string","title":"Required when ReasonCode is Other"}},"required":["reasonCode"],"x-ref":"#/components/schemas/UnfreezeLineItemRequestCriteria"}}},"required":true},"parameters":[{"name":"referenceLineItemID","in":"path","description":"Reference line item ID is returned in the line items response.","required":true,"schema":{"type":"string"},"index$":0}]},"GET /lineItems":{"protocol":"http","parameters":[{"name":"referenceOrderID","in":"query","description":"Specify the reference order ID to be queried.","required":false,"schema":{"type":"string"},"index$":0},{"name":"externalRefID","in":"query","description":"Specify the external reference order ID to be queried.","required":false,"schema":{"type":"string"},"index$":1},{"name":"utid","in":"query","description":"The unique identifier for the reward as provided in the Get Catalog call","required":false,"schema":{"type":"string"},"index$":2},{"name":"ptid","in":"query","description":"The unique identifier for the Print Reward Link Template provided in the Tango Portal on the Printed Template page. Only applicable when sending a Printed Reward Link.","required":false,"schema":{"type":"string"},"index$":3},{"name":"etid","in":"query","description":"The unique identifier for the electronic template. Only applicable when deliveryMethod is EMAIL or PHONE","required":false,"schema":{"type":"string"},"index$":4},{"name":"status","in":"query","description":"Specify the line item status to be queried.","required":false,"schema":{"type":"string","enum":["COMPLETE","PENDING","FAILED","CANCELLED"]},"index$":5},{"name":"emailStatus","in":"query","description":"Specify the email status to be queried.","required":false,"schema":{"type":"string","enum":["DELIVERED","NOT_DELIVERED","PENDING","SENT","DEFERRED","DROPPED","BOUNCE","BLOCKED"]},"index$":6},{"name":"deliveryMethod","in":"query","description":"Specify the delivery method to be queried.","required":false,"schema":{"type":"string","enum":["NONE","EMAIL","PHONE","ADDRESS","EMBEDDED","BULKSHIPMENT","QRCODE","BULKDIGITAL","EMBEDDED_COMPONENT","WHATSAPP"]},"index$":7},{"name":"deliveryStatus","in":"query","description":"Specify the delivery status to be queried.","required":false,"schema":{"type":"string","enum":["PENDING","PROCESSING","DISPATCHED","DELIVERED","FAILED","ENGAGED"]},"index$":8},{"name":"orderStatus","in":"query","description":"Specify the order status to be queried.","required":false,"schema":{"type":"string","enum":["COMPLETE","PENDING","FAILED","CANCELLED","PARTIAL"]},"index$":9},{"name":"orderSource","in":"query","description":"Specify the order source to be queried.","required":false,"schema":{"type":"string","enum":["RA","RG","BE","BI","CI","QW","AA"]},"index$":10},{"name":"recipientEmail","in":"query","description":"Specify the recipient email address to be queried.","required":false,"schema":{"type":"string"},"index$":11},{"name":"recipientMobileNumber","in":"query","description":"Specify the recipient mobile number to be queried.","required":false,"schema":{"type":"string"},"index$":12},{"name":"recipientFirstName","in":"query","description":"Specify the recipient first name to be queried.","required":false,"schema":{"type":"string"},"index$":13},{"name":"recipientLastName","in":"query","description":"Specify the recipient last name to be queried.","required":false,"schema":{"type":"string"},"index$":14},{"name":"accountIdentifier","in":"query","description":"Specify the account identifier to be queried.","required":false,"schema":{"type":"string"},"index$":15},{"name":"campaign","in":"query","description":"Specify the campaign to be queried.","required":false,"schema":{"type":"string"},"index$":16},{"name":"purchaseOrderNumber","in":"query","description":"Specify the purchaseOrderNumber to be queried.","required":false,"schema":{"type":"string"},"index$":17},{"name":"orderNotes","in":"query","description":"Specify the orderNotes to be queried.","required":false,"schema":{"type":"string"},"index$":18},{"name":"recipientStreetLine1","in":"query","description":"Specify the recipientStreetLine1 to be queried.","required":false,"schema":{"type":"string"},"index$":19},{"name":"recipientStreetLine2","in":"query","description":"Specify the recipientStreetLine2 to be queried.","required":false,"schema":{"type":"string"},"index$":20},{"name":"recipientCity","in":"query","description":"Specify the recipientCity to be queried.","required":false,"schema":{"type":"string"},"index$":21},{"name":"recipientStateOrProvince","in":"query","description":"Specify the recipientStateOrProvince to be queried.","required":false,"schema":{"type":"string"},"index$":22},{"name":"recipientPostalCode","in":"query","description":"Specify the recipientPostalCode to be queried.","required":false,"schema":{"type":"string"},"index$":23},{"name":"recipientCountry","in":"query","description":"Specify the recipientCountry to be queried.","required":false,"schema":{"type":"string"},"index$":24},{"name":"startDate","in":"query","description":"specify the starting date or date time to be queried according to RFC 3339, i.e. \"2016-01-01\" or \"2016-01-01T00:00:00Z\". See https://www.ietf.org/rfc/rfc3339.txt\n","required":false,"schema":{"type":"string"},"index$":25},{"name":"endDate","in":"query","description":"specify the ending date or date time to be queried according to RFC 3339, i.e. \"2016-01-01\" or \"2016-01-01T00:00:00Z\". See https://www.ietf.org/rfc/rfc3339.txt\n","required":false,"schema":{"type":"string"},"index$":26},{"name":"columnSortName","in":"query","description":"Specify the column name to sort by.","required":false,"schema":{"type":"string","default":"dateIssued","enum":["accountNumber","amountIssued","dateIssued","emailStatus","deliveryMethod","externalReferenceId","status","orderSource","orderStatus","recipientFirstName","recipientLastName","rewardName"]},"index$":27},{"name":"columnSortAscending","in":"query","description":"Specify the sorting line-items ascending.","required":false,"schema":{"type":"string","default":"false"},"index$":28},{"name":"elementsPerBlock","in":"query","description":"Specify the number of elements in a block.","required":false,"schema":{"type":"integer","format":"int32"},"index$":29},{"name":"pagePrevious","in":"query","description":"Return the previous page instead of the next page.","required":false,"schema":{"type":"boolean","default":false},"index$":30},{"name":"pageKeys","in":"query","description":"Specify the page keys to query the next page.","required":false,"schema":{"type":"array","items":{"type":"string"}},"index$":31},{"name":"minRemainingBalance","in":"query","description":"Specify the minimum remaining balance to be queried.","required":false,"schema":{"type":"number"},"index$":32},{"name":"maxRemainingBalance","in":"query","description":"Specify the maximum remaining balance to be queried.","required":false,"schema":{"type":"number"},"index$":33},{"name":"hasRemainingBalance","in":"query","description":"If true, return any line item that has a remaining balance.","required":false,"schema":{"type":"boolean"},"index$":34}]},"GET /lineItems/{referenceLineItemID}":{"protocol":"http","parameters":[{"name":"referenceLineItemID","in":"path","description":"Reference line item ID is returned in the line items response.","required":true,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const line_item_ref01_ent = client.LineItem()
    let line_item_ref01_data = setup.data.new.line_item['line_item_ref01']
    line_item_ref01_data['reference_line_item_id'] = setup.idmap['reference_line_item01']

    line_item_ref01_data = (await line_item_ref01_ent.create(line_item_ref01_data)).data()
    assert(null != line_item_ref01_data.id)


    // LIST
    const line_item_ref01_match = {}

    const line_item_ref01_list = (await line_item_ref01_ent.list(line_item_ref01_match)).map((e) => e.data())

    assert(!isempty(select(line_item_ref01_list, { id: line_item_ref01_data.id })))


    // LOAD
    const line_item_ref01_match_dt0 = {}
    line_item_ref01_match_dt0.id = line_item_ref01_data.id
    const line_item_ref01_data_dt0 = (await line_item_ref01_ent.load(line_item_ref01_match_dt0)).data()
    assert(line_item_ref01_data_dt0.id === line_item_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/line_item/LineItemTestData.json')

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
    ['line_item01','line_item02','line_item03','reference_line_item01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_LINE_ITEM_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
  })

  idmap = env['TANGOCARD_TEST_LINE_ITEM_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_LINE_ITEM_ENTID']
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
  
