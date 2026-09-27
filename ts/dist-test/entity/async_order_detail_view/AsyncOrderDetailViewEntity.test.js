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
(0, node_test_1.describe)('AsyncOrderDetailViewEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TANGOCARD_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TangocardSDK.test();
        const ent = testsdk.AsyncOrderDetailView();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'async_order_detail_view.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "accountIdentifier": { "a": true, "h": "Account Identifier", "n": "accountIdentifier", "r": false, "sh": "Account identifier", "t": "`$STRING`", "key$": "accountIdentifier", "index$": 0 }, "amountCharged": { "a": true, "h": "Amount Charged", "n": "amountCharged", "r": false, "sh": "Initial value and the total charged amount on the account", "t": "`$OBJECT`", "key$": "amountCharged", "index$": 1 }, "campaign": { "a": true, "h": "Campaign", "n": "campaign", "r": false, "sh": "Campaign name", "t": "`$STRING`", "key$": "campaign", "index$": 2 }, "completedAt": { "a": true, "fo": "date-time", "h": "Completed At", "n": "completedAt", "r": false, "sh": "Order completion timestamp", "t": "`$STRING`", "key$": "completedAt", "index$": 3 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": false, "sh": "Order creation timestamp", "t": "`$STRING`", "key$": "createdAt", "index$": 4 }, "customerIdentifier": { "a": true, "h": "Customer Identifier", "n": "customerIdentifier", "r": false, "sh": "Customer identifier", "t": "`$STRING`", "key$": "customerIdentifier", "index$": 5 }, "externalRefID": { "a": true, "h": "External Ref Id", "n": "externalRefID", "r": false, "sh": "External reference ID provided by client", "t": "`$STRING`", "key$": "externalRefID", "index$": 6 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 7 }, "lineItems": { "a": true, "h": "Line Items", "n": "lineItems", "r": false, "sh": "list of line items", "t": "`$ARRAY`", "key$": "lineItems", "index$": 8 }, "notes": { "a": true, "h": "Notes", "n": "notes", "r": false, "sh": "Order notes", "t": "`$STRING`", "key$": "notes", "index$": 9 }, "orderErrors": { "a": true, "h": "Order Errors", "n": "orderErrors", "r": false, "sh": "Order level errors", "t": "`$ARRAY`", "key$": "orderErrors", "index$": 10 }, "orderStatus": { "a": true, "h": "Order Status", "n": "orderStatus", "r": false, "sh": "Current status of the order", "t": "`$STRING`", "key$": "orderStatus", "index$": 11 }, "pagination": { "a": true, "h": "Pagination", "n": "pagination", "r": false, "sh": "Pagination information", "t": "`$OBJECT`", "key$": "pagination", "index$": 12 }, "purchaseOrderNumber": { "a": true, "h": "Purchase Order Number", "n": "purchaseOrderNumber", "r": false, "sh": "Purchase order number", "t": "`$STRING`", "key$": "purchaseOrderNumber", "index$": 13 }, "referenceOrderID": { "a": true, "h": "Reference Order Id", "n": "referenceOrderID", "r": false, "sh": "Internal reference order ID", "t": "`$STRING`", "key$": "referenceOrderID", "index$": 14 }, "sender": { "a": true, "h": "Sender", "n": "sender", "r": false, "sh": "Sender information", "t": "`$OBJECT`", "key$": "sender", "index$": 15 }, "totalLineItems": { "a": true, "fo": "int64", "h": "Total Line Items", "n": "totalLineItems", "r": false, "sh": "Total number of line items", "t": "`$INTEGER`", "key$": "totalLineItems", "index$": 16 } }, "id": { "field": "id", "from": { "account_identifier": "accountIdentifier", "external_ref_id": "externalRefID" }, "name": "id", "parts": ["account_identifier", "external_ref_id"], "sep": "/" }, "name": "async_order_detail_view", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_identifier", "or": "account_identifier", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "customer_identifier", "or": "customer_identifier", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "external_ref_id", "or": "external_ref_id", "r": true, "t": "`$STRING`", "index$": 2 }], "query": [{ "a": true, "k": "query", "n": "external_ref_line_item_i_d", "or": "external_ref_line_item_i_d", "r": false, "t": "`$ARRAY`", "index$": 0 }, { "a": true, "ex": false, "k": "query", "n": "failed_only", "or": "failed_only", "r": false, "t": "`$BOOLEAN`", "index$": 1 }, { "a": true, "ex": 100, "k": "query", "n": "max_result", "or": "max_result", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": "NjI=", "k": "query", "n": "next_cursor", "or": "next_cursor", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": "NjE=", "k": "query", "n": "prev_cursor", "or": "prev_cursor", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "reference_line_item_i_d", "or": "reference_line_item_i_d", "r": false, "t": "`$ARRAY`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}", "q": { "exist": ["account_identifier", "customer_identifier", "external_ref_id", "external_ref_line_item_i_d", "failed_only", "max_result", "next_cursor", "prev_cursor", "reference_line_item_i_d"] }, "r": { "param": { "accountIdentifier": "account_identifier", "customerIdentifier": "customer_identifier", "externalRefID": "external_ref_id" } }, "s": [{ "lit": "asyncOrders" }, { "lit": "customers" }, { "var": "customer_identifier" }, { "lit": "accounts" }, { "var": "account_identifier" }, { "var": "external_ref_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_identifier", "or": "account_identifier", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "customer_identifier", "or": "customer_identifier", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "external_ref_id", "or": "external_ref_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "PATCH", "o": "/asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}", "q": { "exist": ["account_identifier", "customer_identifier", "external_ref_id"] }, "r": { "param": { "accountIdentifier": "account_identifier", "customerIdentifier": "customer_identifier", "externalRefID": "external_ref_id" } }, "s": [{ "lit": "asyncOrders" }, { "lit": "customers" }, { "var": "customer_identifier" }, { "lit": "accounts" }, { "var": "account_identifier" }, { "var": "external_ref_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.customer", "$.main.kit.entity.account"]] }, "key$": "async_order_detail_view", "name__orig": "async_order_detail_view", "Name": "AsyncOrderDetailView", "name_": "async_order_detail_view", "name-": "async-order-detail-view", "NAME": "ASYNC_ORDER_DETAIL_VIEW", "index$": 4 }, { "active": true, "entity": "async_order_detail_view", "key$": "BasicAsyncOrderDetailViewFlow", "kind": "basic", "name": "BasicAsyncOrderDetailViewFlow", "param": {}, "step": [{ "a": true, "d": { "account_identifier": "accountentifier01", "customer_identifier": "customerentifier01" }, "i": { "ref": "async_order_detail_view_ref01", "srcdatavar": "async_order_detail_view_ref01_data", "suffix": "_up0", "textfield": "accountIdentifier" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-async_order_detail_view_ref01" } }], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "async_order_detail_view_ref01", "srcdatavar": "async_order_detail_view_ref01_data", "suffix": "_dt0" }, "m": { "account_identifier": "accountentifier01", "customer_identifier": "customerentifier01", "id": "async_order_detail_view01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-async_order_detail_view_ref01" } }], "index$": 1 }] }, 'AsyncOrderDetailView', { "GET /asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}": { "protocol": "http", "parameters": [{ "name": "customerIdentifier", "in": "path", "description": "specify the customer to be queried", "required": true, "schema": { "type": "string", "minLength": 1 }, "index$": 0 }, { "name": "accountIdentifier", "in": "path", "description": "Specify the account to be queried.", "required": true, "schema": { "type": "string", "minLength": 1 }, "index$": 1 }, { "name": "externalRefID", "in": "path", "description": "External reference ID of the async order", "required": true, "schema": { "type": "string", "minLength": 1 }, "index$": 2 }, { "name": "prevCursor", "in": "query", "description": "Cursor for navigating to previous page", "required": false, "schema": { "type": "string", "default": "" }, "example": "NjE=", "index$": 3 }, { "name": "nextCursor", "in": "query", "description": "Cursor for navigating to next page", "required": false, "schema": { "type": "string", "default": "" }, "example": "NjI=", "index$": 4 }, { "name": "maxResults", "in": "query", "description": "Maximum number of line items to return", "required": false, "schema": { "type": "integer", "format": "int32", "default": 100, "maximum": 500, "minimum": 1 }, "example": 100, "index$": 5 }, { "name": "externalRefLineItemIDs", "in": "query", "description": "Specify the externalRefLineItemIDs to be queried. A maximum of 50 externalRefLineItemIDs can be provided.", "required": false, "schema": { "type": "array", "items": { "type": "string" } }, "index$": 6 }, { "name": "referenceLineItemIDs", "in": "query", "description": "Specify the referenceLineItemIDs to be queried. A maximum of 50 referenceLineItemIDs can be provided.", "required": false, "schema": { "type": "array", "items": { "type": "string" } }, "index$": 7 }, { "name": "failedOnly", "in": "query", "description": "Specify true to return only failed line items", "required": false, "schema": { "type": "boolean", "default": false }, "index$": 8 }] }, "PATCH /asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "campaign": { "type": "string", "description": "Optional. Campaign that may be used to administratively categorize a specific order. Must be between 0 and 1024 characters in length.", "title": "Campaign", "key$": "campaign" }, "purchaseOrderNumber": { "type": "string", "description": "The Purchase Order Number associated with this order.", "title": "Purchase Order Number", "key$": "purchaseOrderNumber" }, "notes": { "type": "string", "description": "Optional order notes (up to 150 characters)", "maxLength": 150, "minLength": 0, "title": "Notes", "key$": "notes" } }, "x-ref": "#/components/schemas/UpdateAsyncOrderCriteria", "index$": 1 } } }, "required": true }, "parameters": [{ "name": "customerIdentifier", "in": "path", "description": "Specify the customer to be queried", "required": true, "schema": { "type": "string", "minLength": 1 }, "index$": 0 }, { "name": "accountIdentifier", "in": "path", "description": "Specify the account to be queried.", "required": true, "schema": { "type": "string", "minLength": 1 }, "index$": 1 }, { "name": "externalRefID", "in": "path", "description": "External reference ID of the async order", "required": true, "schema": { "type": "string", "minLength": 1 }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let async_order_detail_view_ref01_data = Object.values(setup.data.existing.async_order_detail_view)[0];
        // UPDATE
        const async_order_detail_view_ref01_ent = client.AsyncOrderDetailView();
        const async_order_detail_view_ref01_data_up0 = {};
        async_order_detail_view_ref01_data_up0.id = async_order_detail_view_ref01_data.id;
        async_order_detail_view_ref01_data_up0['account_identifier'] = setup.idmap['account_identifier'];
        async_order_detail_view_ref01_data_up0['customer_identifier'] = setup.idmap['customer_identifier'];
        const async_order_detail_view_ref01_markdef_up0 = { name: 'accountIdentifier', value: 'Mark01-async_order_detail_view_ref01_' + setup.now };
        async_order_detail_view_ref01_data_up0[async_order_detail_view_ref01_markdef_up0.name] = async_order_detail_view_ref01_markdef_up0.value;
        const async_order_detail_view_ref01_resdata_up0 = (await async_order_detail_view_ref01_ent.update(async_order_detail_view_ref01_data_up0)).data();
        (0, node_assert_1.default)(async_order_detail_view_ref01_resdata_up0.id === async_order_detail_view_ref01_data_up0.id);
        (0, node_assert_1.default)(async_order_detail_view_ref01_resdata_up0[async_order_detail_view_ref01_markdef_up0.name] === async_order_detail_view_ref01_markdef_up0.value);
        // LOAD
        const async_order_detail_view_ref01_match_dt0 = {};
        async_order_detail_view_ref01_match_dt0.id = async_order_detail_view_ref01_data.id;
        const async_order_detail_view_ref01_data_dt0 = (await async_order_detail_view_ref01_ent.load(async_order_detail_view_ref01_match_dt0)).data();
        (0, node_assert_1.default)(async_order_detail_view_ref01_data_dt0.id === async_order_detail_view_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/async_order_detail_view/AsyncOrderDetailViewTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TangocardSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['async_order_detail_view01', 'async_order_detail_view02', 'async_order_detail_view03', 'customer01', 'customer02', 'customer03', 'account01', 'account02', 'account03', 'accountentifier01', 'customerentifier01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TANGOCARD_TEST_ASYNC_ORDER_DETAIL_VIEW_ENTID': idmap,
        'TANGOCARD_TEST_LIVE': 'FALSE',
        'TANGOCARD_TEST_EXPLAIN': 'FALSE',
        'TANGOCARD_APIKEY': '',
        'TANGOCARD_SECRET': '',
    });
    idmap = env['TANGOCARD_TEST_ASYNC_ORDER_DETAIL_VIEW_ENTID'];
    const live = 'TRUE' === env.TANGOCARD_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TANGOCARD_TEST_ASYNC_ORDER_DETAIL_VIEW_ENTID'];
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
//# sourceMappingURL=AsyncOrderDetailViewEntity.test.js.map