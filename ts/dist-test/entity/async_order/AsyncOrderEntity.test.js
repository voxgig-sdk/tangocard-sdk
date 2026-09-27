"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('AsyncOrderEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TANGOCARD_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TangocardSDK.test();
        const ent = testsdk.AsyncOrder();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE;
        for (const op of ['create', 'list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'async_order.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "accountIdentifier": { "a": true, "h": "Account Identifier", "n": "accountIdentifier", "r": true, "sh": "specify the account this order will be deducted from", "t": "`$STRING`", "key$": "accountIdentifier", "index$": 0 }, "accountNumber": { "a": true, "h": "Account Number", "n": "accountNumber", "r": true, "t": "`$STRING`", "key$": "accountNumber", "index$": 1 }, "amountCharged": { "a": true, "h": "Amount Charged", "n": "amountCharged", "r": false, "sh": "Initial value and the total charged amount on the account", "t": "`$OBJECT`", "key$": "amountCharged", "index$": 2 }, "campaign": { "a": true, "h": "Campaign", "n": "campaign", "op": { "list": { "req": true, "type": "`$STRING`" } }, "r": false, "sh": "Optional.", "t": "`$STRING`", "key$": "campaign", "index$": 3 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "op": { "list": { "req": true, "type": "`$STRING`" } }, "r": false, "t": "`$STRING`", "key$": "createdAt", "index$": 4 }, "customerIdentifier": { "a": true, "h": "Customer Identifier", "n": "customerIdentifier", "r": true, "sh": "specify the customer associated with the order.", "t": "`$STRING`", "key$": "customerIdentifier", "index$": 5 }, "duplicateLineItemRefIds": { "a": true, "h": "Duplicate Line Item Ref Ids", "n": "duplicateLineItemRefIds", "r": false, "sh": "If any duplicate duplicateLineItemRefIds exist in the request", "t": "`$OBJECT`", "key$": "duplicateLineItemRefIds", "index$": 6 }, "externalRefID": { "a": true, "h": "External Ref Id", "n": "externalRefID", "op": { "create": { "req": true, "type": "`$STRING`" } }, "r": false, "sh": "Required.", "t": "`$STRING`", "key$": "externalRefID", "index$": 7 }, "failedLineItems": { "a": true, "h": "Failed Line Items", "n": "failedLineItems", "r": false, "sh": "Failed line items list (business validations)", "t": "`$ARRAY`", "key$": "failedLineItems", "index$": 8 }, "fulfillBy": { "a": true, "h": "Fulfill By", "n": "fulfillBy", "r": false, "t": "`$STRING`", "key$": "fulfillBy", "index$": 9 }, "lineItems": { "a": true, "h": "Line Items", "n": "lineItems", "r": true, "sh": "Line Items of the bulk order a required field", "t": "`$ARRAY`", "key$": "lineItems", "index$": 10 }, "notes": { "a": true, "h": "Notes", "n": "notes", "r": false, "sh": "Optional order notes.", "t": "`$STRING`", "key$": "notes", "index$": 11 }, "orderStatus": { "a": true, "h": "Order Status", "n": "orderStatus", "r": false, "t": "`$STRING`", "key$": "orderStatus", "index$": 12 }, "purchaseOrderNumber": { "a": true, "h": "Purchase Order Number", "n": "purchaseOrderNumber", "r": false, "sh": "The Purchase Order Number associated with this order.", "t": "`$STRING`", "key$": "purchaseOrderNumber", "index$": 13 }, "referenceOrderID": { "a": true, "h": "Reference Order Id", "n": "referenceOrderID", "r": true, "t": "`$STRING`", "key$": "referenceOrderID", "index$": 14 }, "sender": { "a": true, "h": "Sender", "n": "sender", "r": false, "sh": "Optional.", "t": "`$OBJECT`", "key$": "sender", "index$": 15 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "sh": "This status reflects about cart status or validation status based on the processing", "t": "`$STRING`", "key$": "status", "index$": 16 }, "totalLineItems": { "a": true, "fo": "int32", "h": "Total Line Items", "n": "totalLineItems", "r": false, "sh": "Total number of line items submitted in the request", "t": "`$INTEGER`", "key$": "totalLineItems", "index$": 17 }, "totalLineItemsRows": { "a": true, "fo": "int64", "h": "Total Line Items Rows", "n": "totalLineItemsRows", "r": false, "t": "`$INTEGER`", "key$": "totalLineItemsRows", "index$": 18 } }, "name": "async_order", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /asyncOrders", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/asyncOrders", "q": {}, "r": {}, "s": [{ "lit": "asyncOrders" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /asyncOrders", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "account_identifier", "or": "account_identifier", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "campaign", "or": "campaign", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "currency_code", "or": "currency_code", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "customer_identifier", "or": "customer_identifier", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "delivery_method", "or": "delivery_method", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "elements_per_block", "or": "elements_per_block", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "end_date", "or": "end_date", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "external_ref_id", "or": "external_ref_id", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "query", "n": "line_item_note", "or": "line_item_note", "r": false, "t": "`$STRING`", "index$": 8 }, { "a": true, "k": "query", "n": "line_item_status", "or": "line_item_status", "r": false, "t": "`$STRING`", "index$": 9 }, { "a": true, "k": "query", "n": "max_amount", "or": "max_amount", "r": false, "t": "`$STRING`", "index$": 10 }, { "a": true, "k": "query", "n": "max_result", "or": "max_result", "r": false, "t": "`$STRING`", "index$": 11 }, { "a": true, "k": "query", "n": "min_amount", "or": "min_amount", "r": false, "t": "`$STRING`", "index$": 12 }, { "a": true, "k": "query", "n": "next_cursor", "or": "next_cursor", "r": false, "t": "`$STRING`", "index$": 13 }, { "a": true, "k": "query", "n": "note", "or": "note", "r": false, "t": "`$STRING`", "index$": 14 }, { "a": true, "k": "query", "n": "order_status", "or": "order_status", "r": false, "t": "`$STRING`", "index$": 15 }, { "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$STRING`", "index$": 16 }, { "a": true, "k": "query", "n": "prev_cursor", "or": "prev_cursor", "r": false, "t": "`$STRING`", "index$": 17 }, { "a": true, "k": "query", "n": "ptid", "or": "ptid", "r": false, "t": "`$STRING`", "index$": 18 }, { "a": true, "k": "query", "n": "purchase_order_number", "or": "purchase_order_number", "r": false, "t": "`$STRING`", "index$": 19 }, { "a": true, "k": "query", "n": "recipient_email", "or": "recipient_email", "r": false, "t": "`$STRING`", "index$": 20 }, { "a": true, "k": "query", "n": "recipient_first_name", "or": "recipient_first_name", "r": false, "t": "`$STRING`", "index$": 21 }, { "a": true, "k": "query", "n": "recipient_last_name", "or": "recipient_last_name", "r": false, "t": "`$STRING`", "index$": 22 }, { "a": true, "k": "query", "n": "recipient_mobile_number", "or": "recipient_mobile_number", "r": false, "t": "`$STRING`", "index$": 23 }, { "a": true, "k": "query", "n": "reward_name", "or": "reward_name", "r": false, "t": "`$STRING`", "index$": 24 }, { "a": true, "k": "query", "n": "send_email", "or": "send_email", "r": false, "t": "`$STRING`", "index$": 25 }, { "a": true, "k": "query", "n": "sender_email", "or": "sender_email", "r": false, "t": "`$STRING`", "index$": 26 }, { "a": true, "k": "query", "n": "sender_first_name", "or": "sender_first_name", "r": false, "t": "`$STRING`", "index$": 27 }, { "a": true, "k": "query", "n": "sender_last_name", "or": "sender_last_name", "r": false, "t": "`$STRING`", "index$": 28 }, { "a": true, "k": "query", "n": "start_date", "or": "start_date", "r": false, "t": "`$STRING`", "index$": 29 }, { "a": true, "k": "query", "n": "utid", "or": "utid", "r": false, "t": "`$STRING`", "index$": 30 }] }, "k": "http", "m": "GET", "o": "/asyncOrders", "q": { "exist": ["account_identifier", "campaign", "currency_code", "customer_identifier", "delivery_method", "elements_per_block", "end_date", "external_ref_id", "line_item_note", "line_item_status", "max_amount", "max_result", "min_amount", "next_cursor", "note", "order_status", "page", "prev_cursor", "ptid", "purchase_order_number", "recipient_email", "recipient_first_name", "recipient_last_name", "recipient_mobile_number", "reward_name", "send_email", "sender_email", "sender_first_name", "sender_last_name", "start_date", "utid"] }, "r": {}, "s": [{ "lit": "asyncOrders" }], "t": { "req": "`reqdata`", "res": "`body.orders`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "async_order", "name__orig": "async_order", "Name": "AsyncOrder", "name_": "async_order", "name-": "async-order", "NAME": "ASYNC_ORDER", "index$": 3 }, { "active": true, "entity": "async_order", "key$": "BasicAsyncOrderFlow", "kind": "basic", "name": "BasicAsyncOrderFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "async_order_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "async_order_ref01" } }], "index$": 1 }] }, 'AsyncOrder', { "POST /asyncOrders": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "externalRefID": { "type": "string", "description": "Required. Idempotent field that can be used for client-side order cross reference and prevent accidental order duplication. Will be returned in order response.", "maxLength": 100, "minLength": 0, "title": "External Reference ID", "key$": "externalRefID" }, "customerIdentifier": { "type": "string", "description": "specify the customer associated with the order. Must be the customer the accountIdentifier is associated with.", "pattern": "^[-a-zA-Z0-9]{5,100}$", "title": "Customer Identifier", "key$": "customerIdentifier" }, "accountIdentifier": { "type": "string", "description": "specify the account this order will be deducted from", "pattern": "^[-a-zA-Z0-9]{5,100}$", "title": "Account Identifier", "key$": "accountIdentifier" }, "sender": { "type": "object", "properties": { "firstName": { "type": "string", "description": "always optional (100 character max)", "title": "First Name" }, "lastName": { "type": "string", "description": "always optional (100 character max)", "title": "Last Name" }, "email": { "type": "string", "description": "always optional", "title": "Email" } }, "description": "Optional.  Use to set the sender’s name and email address if different than the default platform setting.", "title": "Sender Details", "x-ref": "#/components/schemas/SenderInfoCriteria", "key$": "sender" }, "campaign": { "type": "string", "description": "Optional. Campaign that may be used to administratively categorize a specific order. Must be between 0 and 1024 characters in length.", "maxLength": 1024, "minLength": 0, "title": "Campaign", "key$": "campaign" }, "purchaseOrderNumber": { "type": "string", "description": "The Purchase Order Number associated with this order.", "title": "Purchase Order Number", "key$": "purchaseOrderNumber" }, "notes": { "type": "string", "description": "Optional order notes. Must be between 0 and 1024 characters in length.", "maxLength": 1024, "minLength": 0, "title": "Notes", "key$": "notes" }, "lineItems": { "type": "array", "description": "Line Items of the bulk order a required field", "items": { "type": "object", "properties": { "externalRefLineItemID": { "type": "string", "description": "Required. Idempotent field that can be used for client-side order line item cross reference and used to map failed and success line items on client side.", "maxLength": 100, "minLength": 0, "title": "External Reference Line Item ID" }, "quantity": { "type": "integer", "format": "int32", "default": 1, "description": "The number of rewards to send to the recipient", "minimum": 1, "title": "Rewards quantity" }, "bulkShipping": { "type": "object", "properties": {}, "required": [], "description": "Only used for and is required when deliveryMethod is BULKSHIPMENT", "title": "Bulk Shipping Details", "x-ref": "#/components/schemas/ShippingCriteria" }, "recipient": { "type": "object", "properties": {}, "description": "Required if deliveryMethod is EMAIL, PHONE, or ADDRESS. Use to set and store the recipient’s contact information. When deliveryMethod is NONE or EMBEDDED, setting these parameters will allow the platform to store this information for reporting, auditing, and reconciliation.", "title": "Recipient Details", "x-ref": "#/components/schemas/RecipientInfoCriteria" }, "utid": { "type": "string", "description": "the unique identifier for the reward you are sending as provided in the Get Catalog call", "pattern": "^[uU][\\d]+$", "title": "Unique Tango Card Identifier" }, "amount": { "type": "number", "description": "specify the face value of of the reward. Always required, including for fixed value items.", "minimum": 0, "title": "Amount" }, "deliveryMethod": { "type": "string", "default": "EMAIL", "description": "Specify delivery method for the line item", "enum": [], "title": "Delivery Method" }, "deliveryDate": { "type": "string", "description": "Optional. Specify the date to deliver the reward to the recipient. It must be at least 7 days in the future. If not specified, the reward will be immediately send.", "title": "Delivery Date" }, "etid": { "type": "string", "description": "Optional. Used with deliveryMethod of EMAIL or PHONE. The unique identifier for the electronic template you would like to use. If not specified, the system will use the default etid.", "example": "E000000", "pattern": "^[eE][\\d]{6}$", "title": "Email Template Identifier" }, "ptid": { "type": "string", "description": "Only required for Printed Reward Links, the unique identifier for the Printed Reward Link Template provided in the Tango Portal on the Printed Template page.", "pattern": "^[pP][\\d]+$", "title": "Physical Delivery Template Identifier" }, "expirationDate": { "type": "string", "description": "Optional for Promo Links, the exact calendar date the Promo Link will expire.", "title": "Expiration Date" }, "emailSubject": { "type": "string", "description": "Optional. If not specified, a default email subject will be used for the specified reward.", "title": "subject" }, "message": { "type": "string", "description": "optional gift message", "title": "Message" }, "lineItemNote": { "type": "string", "description": "Optional line item notes (up to 150 characters)", "maxLength": 150, "minLength": 0, "title": "Notes" }, "shippingMethod": { "type": "string", "description": "Enumeration for the selected shipping method. Required for deliveryMethod of ADDRESS or BULKSHIPMENT.", "enum": [], "title": "Shipping Method" } }, "required": ["amount", "deliveryMethod", "externalRefLineItemID", "recipient", "utid"], "x-ref": "#/components/schemas/LineItem" }, "title": "LineItem/s", "key$": "lineItems" } }, "required": ["accountIdentifier", "customerIdentifier", "externalRefID", "lineItems"], "x-ref": "#/components/schemas/CreateAsyncOrderCriteria", "index$": 1 } } }, "required": true }, "parameters": [] }, "GET /asyncOrders": { "protocol": "http", "parameters": [{ "name": "accountIdentifier", "in": "query", "description": "specify the account to be queried.", "required": false, "schema": { "type": "string" }, "index$": 0 }, { "name": "customerIdentifier", "in": "query", "description": "specify the customer to be queried", "required": false, "schema": { "type": "string" }, "index$": 1 }, { "name": "externalRefID", "in": "query", "description": "specify the external reference ID to be queried", "required": false, "schema": { "type": "string" }, "index$": 2 }, { "name": "startDate", "in": "query", "description": "specify the starting date or date time to be queried according to RFC 3339, i.e. \"2016-01-01\" or \"2016-01-01T00:00:00Z\". See https://www.ietf.org/rfc/rfc3339.txt\n", "required": false, "schema": { "type": "string" }, "index$": 3 }, { "name": "endDate", "in": "query", "description": "specify the ending date or date time to be queried according to RFC 3339, i.e. \"2016-01-01\" or \"2016-01-01T00:00:00Z\". See https://www.ietf.org/rfc/rfc3339.txt\n", "required": false, "schema": { "type": "string" }, "index$": 4 }, { "name": "maxResults", "in": "query", "description": "specify the number of maxResults per page.", "required": false, "schema": { "type": "string" }, "index$": 5 }, { "name": "elementsPerBlock", "in": "query", "description": "specify the number of elements in a block.", "required": false, "schema": { "type": "string" }, "index$": 6 }, { "name": "page", "in": "query", "description": "specify the page number to return.", "required": false, "schema": { "type": "string" }, "index$": 7 }, { "name": "minAmount", "in": "query", "description": "specify the minimum face value of the reward to be queried.", "required": false, "schema": { "type": "string" }, "index$": 8 }, { "name": "maxAmount", "in": "query", "description": "specify the maximum face value of the reward to be queried.", "required": false, "schema": { "type": "string" }, "index$": 9 }, { "name": "currencyCode", "in": "query", "description": "specify the currency code of the reward to be queried.", "required": false, "schema": { "type": "string" }, "index$": 10 }, { "name": "utid", "in": "query", "description": "specify the unique identifier of the reward to be queried.", "required": false, "schema": { "type": "string" }, "index$": 11 }, { "name": "ptid", "in": "query", "description": "specify the unique identifier of the physical delivery template to be queried.", "required": false, "schema": { "type": "string" }, "index$": 12 }, { "name": "rewardName", "in": "query", "description": "specify the reward name of the reward to be queried.", "required": false, "schema": { "type": "string" }, "index$": 13 }, { "name": "senderFirstName", "in": "query", "description": "specify the sender's first name to be queried.", "required": false, "schema": { "type": "string" }, "index$": 14 }, { "name": "senderLastName", "in": "query", "description": "specify the sender's last name to be queried.", "required": false, "schema": { "type": "string" }, "index$": 15 }, { "name": "senderEmail", "in": "query", "description": "specify the sender email address to be queried.", "required": false, "schema": { "type": "string" }, "index$": 16 }, { "name": "recipientEmail", "in": "query", "description": "specify the recipient's email address to be queried.", "required": false, "schema": { "type": "string" }, "index$": 17 }, { "name": "recipientMobileNumber", "in": "query", "description": "specify the recipient's mobile number to be queried.", "required": false, "schema": { "type": "string" }, "index$": 18 }, { "name": "recipientFirstName", "in": "query", "description": "specify the recipient's first name to be queried.", "required": false, "schema": { "type": "string" }, "index$": 19 }, { "name": "recipientLastName", "in": "query", "description": "specify the recipient's last name to be queried.", "required": false, "schema": { "type": "string" }, "index$": 20 }, { "name": "sendEmail", "in": "query", "description": "specify if sendEmail is true or false to be queried.", "required": false, "deprecated": true, "schema": { "type": "string" }, "index$": 21 }, { "name": "deliveryMethod", "in": "query", "description": "specify the delivery method to be queried.", "required": false, "schema": { "type": "string" }, "index$": 22 }, { "name": "orderStatus", "in": "query", "description": "specify the order status to be queried.", "required": false, "schema": { "type": "string" }, "index$": 23 }, { "name": "lineItemStatus", "in": "query", "description": "specify the line item status to be queried.", "required": false, "schema": { "type": "string" }, "index$": 24 }, { "name": "campaign", "in": "query", "description": "specify the campaign to be queried.", "required": false, "schema": { "type": "string" }, "index$": 25 }, { "name": "notes", "in": "query", "description": "specify the notes to be queried.", "required": false, "schema": { "type": "string" }, "index$": 26 }, { "name": "lineItemNotes", "in": "query", "description": "specify the notes to be queried.", "required": false, "schema": { "type": "string" }, "index$": 27 }, { "name": "purchaseOrderNumber", "in": "query", "description": "specify the purchaseOrderNumber to be queried.", "required": false, "schema": { "type": "string" }, "index$": 28 }, { "name": "prevCursor", "in": "query", "required": false, "schema": { "type": "string" }, "index$": 29 }, { "name": "nextCursor", "in": "query", "required": false, "schema": { "type": "string" }, "index$": 30 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const async_order_ref01_ent = client.AsyncOrder();
        let async_order_ref01_data = setup.data.new.async_order['async_order_ref01'];
        async_order_ref01_data = (await async_order_ref01_ent.create(async_order_ref01_data)).data();
        (0, node_assert_1.default)(null != async_order_ref01_data);
        // LIST
        const async_order_ref01_match = {};
        const async_order_ref01_list = (await async_order_ref01_ent.list(async_order_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/async_order/AsyncOrderTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TangocardSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['async_order01', 'async_order02', 'async_order03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TANGOCARD_TEST_ASYNC_ORDER_ENTID': idmap,
        'TANGOCARD_TEST_LIVE': 'FALSE',
        'TANGOCARD_TEST_EXPLAIN': 'FALSE',
        'TANGOCARD_APIKEY': '',
        'TANGOCARD_SECRET': '',
    });
    idmap = env['TANGOCARD_TEST_ASYNC_ORDER_ENTID'];
    const live = 'TRUE' === env.TANGOCARD_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TANGOCARD_TEST_ASYNC_ORDER_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.TangocardSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
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
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=AsyncOrderEntity.test.js.map