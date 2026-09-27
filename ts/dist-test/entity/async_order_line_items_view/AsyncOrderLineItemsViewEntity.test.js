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
(0, node_test_1.describe)('AsyncOrderLineItemsViewEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TANGOCARD_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TangocardSDK.test();
        const ent = testsdk.AsyncOrderLineItemsView();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'async_order_line_items_view.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "accountIdentifier": { "a": true, "h": "Account Identifier", "n": "accountIdentifier", "r": true, "t": "`$STRING`", "key$": "accountIdentifier", "index$": 0 }, "amountCharged": { "a": true, "h": "Amount Charged", "n": "amountCharged", "r": false, "sh": "Initial value and the total charged amount on the account", "t": "`$OBJECT`", "key$": "amountCharged", "index$": 1 }, "campaign": { "a": true, "h": "Campaign", "n": "campaign", "r": false, "t": "`$STRING`", "key$": "campaign", "index$": 2 }, "customerIdentifier": { "a": true, "h": "Customer Identifier", "n": "customerIdentifier", "r": true, "t": "`$STRING`", "key$": "customerIdentifier", "index$": 3 }, "externalRefID": { "a": true, "h": "External Ref Id", "n": "externalRefID", "r": false, "t": "`$STRING`", "key$": "externalRefID", "index$": 4 }, "lineItems": { "a": true, "h": "Line Items", "n": "lineItems", "r": false, "sh": "The List of Line Items for the Async Order.", "t": "`$ARRAY`", "key$": "lineItems", "index$": 5 }, "orderErrors": { "a": true, "h": "Order Errors", "n": "orderErrors", "r": false, "sh": "The List of Errors for the Async Order.", "t": "`$ARRAY`", "key$": "orderErrors", "index$": 6 }, "orderNotes": { "a": true, "h": "Order Notes", "n": "orderNotes", "r": false, "t": "`$STRING`", "key$": "orderNotes", "index$": 7 }, "orderStatus": { "a": true, "h": "Order Status", "n": "orderStatus", "r": true, "t": "`$STRING`", "key$": "orderStatus", "index$": 8 }, "pagination": { "a": true, "h": "Pagination", "n": "pagination", "r": false, "sh": "The cursor for pagination of the async order line items.", "t": "`$OBJECT`", "key$": "pagination", "index$": 9 }, "purchaseOrderNumber": { "a": true, "h": "Purchase Order Number", "n": "purchaseOrderNumber", "r": false, "t": "`$STRING`", "key$": "purchaseOrderNumber", "index$": 10 }, "referenceOrderID": { "a": true, "h": "Reference Order Id", "n": "referenceOrderID", "r": true, "t": "`$STRING`", "key$": "referenceOrderID", "index$": 11 }, "sender": { "a": true, "h": "Sender", "n": "sender", "r": false, "t": "`$OBJECT`", "key$": "sender", "index$": 12 } }, "name": "async_order_line_items_view", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}/lineItems", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_identifier", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "customer_id", "or": "customer_identifier", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "external_ref_id", "or": "external_ref_id", "r": true, "t": "`$STRING`", "index$": 2 }], "query": [{ "a": true, "k": "query", "n": "external_ref_line_item_i_d", "or": "external_ref_line_item_i_d", "r": false, "t": "`$ARRAY`", "index$": 0 }, { "a": true, "ex": false, "k": "query", "n": "failed_only", "or": "failed_only", "r": false, "t": "`$BOOLEAN`", "index$": 1 }, { "a": true, "ex": 50, "k": "query", "n": "max_result", "or": "max_result", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": "", "k": "query", "n": "next_cursor", "or": "next_cursor", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": "", "k": "query", "n": "prev_cursor", "or": "prev_cursor", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "reference_line_item_i_d", "or": "reference_line_item_i_d", "r": false, "t": "`$ARRAY`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}/lineItems", "q": { "exist": ["account_id", "customer_id", "external_ref_id", "external_ref_line_item_i_d", "failed_only", "max_result", "next_cursor", "prev_cursor", "reference_line_item_i_d"] }, "r": { "param": { "accountIdentifier": "account_id", "customerIdentifier": "customer_id", "externalRefID": "external_ref_id" } }, "s": [{ "lit": "asyncOrders" }, { "lit": "customers" }, { "var": "customer_id" }, { "lit": "accounts" }, { "var": "account_id" }, { "var": "external_ref_id" }, { "lit": "lineItems" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.customer", "$.main.kit.entity.account"]] }, "key$": "async_order_line_items_view", "name__orig": "async_order_line_items_view", "Name": "AsyncOrderLineItemsView", "name_": "async_order_line_items_view", "name-": "async-order-line-items-view", "NAME": "ASYNC_ORDER_LINE_ITEMS_VIEW", "index$": 5 }, { "active": true, "entity": "async_order_line_items_view", "key$": "BasicAsyncOrderLineItemsViewFlow", "kind": "basic", "name": "BasicAsyncOrderLineItemsViewFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "account_id": "account01", "customer_id": "customer01", "external_ref_id": "external_ref01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "async_order_line_items_view_ref01" } }], "index$": 0 }] }, 'AsyncOrderLineItemsView', { "GET /asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}/lineItems": { "protocol": "http", "parameters": [{ "name": "customerIdentifier", "in": "path", "description": "specify the customer to be queried", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "accountIdentifier", "in": "path", "description": "specify the account to be queried.", "required": true, "schema": { "type": "string" }, "index$": 1 }, { "name": "externalRefID", "in": "path", "description": "External Reference ID for a specific async order", "required": true, "schema": { "type": "string" }, "index$": 2 }, { "name": "prevCursor", "in": "query", "description": "Specify previous cursor to return (optional).", "required": false, "schema": { "type": "string", "default": "" }, "index$": 3 }, { "name": "nextCursor", "in": "query", "description": "Specify next cursor to return (optional).", "required": false, "schema": { "type": "string", "default": "" }, "index$": 4 }, { "name": "maxResults", "in": "query", "description": "Specify the max results to return (optional).", "required": false, "schema": { "type": "integer", "format": "int32", "default": 50, "maximum": 100, "minimum": 1 }, "index$": 5 }, { "name": "externalRefLineItemIDs", "in": "query", "description": "Specify the externalRefLineItemIDs to be queried. A maximum of 50 externalRefLineItemIDs can be provided", "required": false, "schema": { "type": "array", "items": { "type": "string" } }, "index$": 6 }, { "name": "referenceLineItemIDs", "in": "query", "description": "Specify the referenceLineItemIDs to be queried. A maximum of 50 referenceLineItemIDs can be provided", "required": false, "schema": { "type": "array", "items": { "type": "string" } }, "index$": 7 }, { "name": "failedOnly", "in": "query", "description": "Specify true to return only failed line items", "required": false, "schema": { "type": "boolean", "default": false }, "index$": 8 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let async_order_line_items_view_ref01_data = Object.values(setup.data.existing.async_order_line_items_view)[0];
        // LIST
        const async_order_line_items_view_ref01_ent = client.AsyncOrderLineItemsView();
        const async_order_line_items_view_ref01_match = {};
        async_order_line_items_view_ref01_match['account_id'] = setup.idmap['account01'];
        async_order_line_items_view_ref01_match['customer_id'] = setup.idmap['customer01'];
        async_order_line_items_view_ref01_match['external_ref_id'] = setup.idmap['external_ref01'];
        const async_order_line_items_view_ref01_list = (await async_order_line_items_view_ref01_ent.list(async_order_line_items_view_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/async_order_line_items_view/AsyncOrderLineItemsViewTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TangocardSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['async_order_line_items_view01', 'async_order_line_items_view02', 'async_order_line_items_view03', 'customer01', 'customer02', 'customer03', 'account01', 'account02', 'account03', 'external_ref01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TANGOCARD_TEST_ASYNC_ORDER_LINE_ITEMS_VIEW_ENTID': idmap,
        'TANGOCARD_TEST_LIVE': 'FALSE',
        'TANGOCARD_TEST_EXPLAIN': 'FALSE',
        'TANGOCARD_APIKEY': '',
        'TANGOCARD_SECRET': '',
    });
    idmap = env['TANGOCARD_TEST_ASYNC_ORDER_LINE_ITEMS_VIEW_ENTID'];
    const live = 'TRUE' === env.TANGOCARD_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TANGOCARD_TEST_ASYNC_ORDER_LINE_ITEMS_VIEW_ENTID'];
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
//# sourceMappingURL=AsyncOrderLineItemsViewEntity.test.js.map