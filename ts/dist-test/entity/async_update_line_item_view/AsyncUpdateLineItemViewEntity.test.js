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
(0, node_test_1.describe)('AsyncUpdateLineItemViewEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TANGOCARD_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TangocardSDK.test();
        const ent = testsdk.AsyncUpdateLineItemView();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'async_update_line_item_view.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "deliveryDate": { "a": true, "h": "Delivery Date", "n": "deliveryDate", "r": false, "sh": "Optional.", "t": "`$STRING`", "key$": "deliveryDate", "index$": 0 }, "lineItemNote": { "a": true, "h": "Line Item Note", "n": "lineItemNote", "r": false, "sh": "Optional line item notes (up to 150 characters)", "t": "`$STRING`", "key$": "lineItemNote", "index$": 1 }, "senderInfo": { "a": true, "h": "Sender Info", "n": "senderInfo", "r": false, "sh": "Optional.", "t": "`$OBJECT`", "key$": "senderInfo", "index$": 2 } }, "name": "async_update_line_item_view", "op": { "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /asyncOrders/lineItems/{referenceLineItemId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "reference_line_item_id", "or": "reference_line_item_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/asyncOrders/lineItems/{referenceLineItemId}", "q": { "exist": ["reference_line_item_id"] }, "r": { "param": { "referenceLineItemId": "reference_line_item_id" } }, "s": [{ "lit": "asyncOrders" }, { "lit": "lineItems" }, { "var": "reference_line_item_id" }], "t": { "req": "`reqdata`", "res": "`body.senderInfo`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.line_item"]] }, "key$": "async_update_line_item_view", "name__orig": "async_update_line_item_view", "Name": "AsyncUpdateLineItemView", "name_": "async_update_line_item_view", "name-": "async-update-line-item-view", "NAME": "ASYNC_UPDATE_LINE_ITEM_VIEW", "index$": 7 }, { "active": true, "entity": "async_update_line_item_view", "key$": "BasicAsyncUpdateLineItemViewFlow", "kind": "basic", "name": "BasicAsyncUpdateLineItemViewFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "async_update_line_item_view_ref01", "srcdatavar": "async_update_line_item_view_ref01_data", "suffix": "_up0", "textfield": "deliveryDate" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-async_update_line_item_view_ref01" } }], "v": [], "index$": 0 }] }, 'AsyncUpdateLineItemView', { "PATCH /asyncOrders/lineItems/{referenceLineItemId}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "lineItemNote": { "type": "string", "description": "Optional line item notes (up to 150 characters)", "maxLength": 150, "minLength": 0, "title": "Notes", "key$": "lineItemNote" }, "deliveryDate": { "type": "string", "description": "Optional. Specify the date to deliver the reward to the recipient. It must be at least 7 days in the future. If not specified, the reward will be immediately send.", "title": "Schedule Delivery Date", "key$": "deliveryDate" }, "senderInfo": { "type": "object", "properties": { "firstName": { "type": "string", "description": "always optional (100 character max)", "title": "First Name" }, "lastName": { "type": "string", "description": "always optional (100 character max)", "title": "Last Name" }, "email": { "type": "string", "description": "always optional", "title": "Email" } }, "description": "Optional.  Use to set the sender’s name and email address if different than the default platform setting.", "title": "Sender Details", "x-ref": "#/components/schemas/SenderInfoCriteria", "key$": "senderInfo" } }, "x-ref": "#/components/schemas/UpdateAsyncLineItemCriteria", "index$": 1 } } }, "required": true }, "parameters": [{ "name": "referenceLineItemId", "in": "path", "description": "Reference Line Item ID", "required": true, "schema": { "type": "string", "minLength": 1 }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let async_update_line_item_view_ref01_data = Object.values(setup.data.existing.async_update_line_item_view)[0];
        // UPDATE
        const async_update_line_item_view_ref01_ent = client.AsyncUpdateLineItemView();
        const async_update_line_item_view_ref01_data_up0 = {};
        const async_update_line_item_view_ref01_markdef_up0 = { name: 'deliveryDate', value: 'Mark01-async_update_line_item_view_ref01_' + setup.now };
        async_update_line_item_view_ref01_data_up0[async_update_line_item_view_ref01_markdef_up0.name] = async_update_line_item_view_ref01_markdef_up0.value;
        const async_update_line_item_view_ref01_resdata_up0 = (await async_update_line_item_view_ref01_ent.update(async_update_line_item_view_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != async_update_line_item_view_ref01_resdata_up0);
        (0, node_assert_1.default)(async_update_line_item_view_ref01_resdata_up0[async_update_line_item_view_ref01_markdef_up0.name] === async_update_line_item_view_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/async_update_line_item_view/AsyncUpdateLineItemViewTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TangocardSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['async_update_line_item_view01', 'async_update_line_item_view02', 'async_update_line_item_view03', 'line_item01', 'line_item02', 'line_item03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TANGOCARD_TEST_ASYNC_UPDATE_LINE_ITEM_VIEW_ENTID': idmap,
        'TANGOCARD_TEST_LIVE': 'FALSE',
        'TANGOCARD_TEST_EXPLAIN': 'FALSE',
        'TANGOCARD_APIKEY': '',
        'TANGOCARD_SECRET': '',
    });
    idmap = env['TANGOCARD_TEST_ASYNC_UPDATE_LINE_ITEM_VIEW_ENTID'];
    const live = 'TRUE' === env.TANGOCARD_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TANGOCARD_TEST_ASYNC_UPDATE_LINE_ITEM_VIEW_ENTID'];
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
//# sourceMappingURL=AsyncUpdateLineItemViewEntity.test.js.map