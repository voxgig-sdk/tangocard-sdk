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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('OrderEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TANGOCARD_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TangocardSDK.test();
        const ent = testsdk.Order();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE;
        for (const op of ['create', 'list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'order.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "accountIdentifier", "req": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "amount", "op": { "create": { "req": true, "type": "`$NUMBER`" } }, "req": false, "type": "`$NUMBER`", "index$": 1 }, { "active": true, "name": "campaign", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "created", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "customerIdentifier", "req": true, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "recipient", "req": false, "type": "`$OBJECT`", "index$": 5 }, { "active": true, "name": "referenceOrderID", "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "rewardName", "req": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "sendEmail", "req": false, "type": "`$BOOLEAN`", "index$": 8 }, { "active": true, "name": "status", "req": false, "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "utid", "op": { "create": { "req": true, "type": "`$STRING`" } }, "req": false, "type": "`$STRING`", "index$": 10 }], "name": "order", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST /orders", "json": "{\"operationId\":\"createOrder\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"accountIdentifier\":{\"type\":\"string\"},\"amount\":{\"type\":\"number\"},\"campaign\":{\"type\":\"string\"},\"customerIdentifier\":{\"type\":\"string\"},\"recipient\":{\"properties\":{\"email\":{\"type\":\"string\"},\"firstName\":{\"type\":\"string\"},\"lastName\":{\"type\":\"string\"}},\"type\":\"object\"},\"sendEmail\":{\"type\":\"boolean\"},\"utid\":{\"type\":\"string\"}},\"required\":[\"accountIdentifier\",\"customerIdentifier\",\"amount\",\"utid\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"amount\":{\"type\":\"number\"},\"created\":{\"type\":\"string\"},\"referenceOrderID\":{\"type\":\"string\"},\"rewardName\":{\"type\":\"string\"},\"status\":{\"type\":\"string\"},\"utid\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"The created order\"}},\"security\":[{\"basicAuth\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/orders", "segments": [{ "lit": "orders" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "kind": "query", "name": "offset", "orig": "offset", "reqd": false, "type": "`$INTEGER`", "index$": 1 }] }, "contract": { "id": "GET /orders", "json": "{\"operationId\":\"listOrders\",\"parameters\":[{\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"orders\":{\"items\":{\"properties\":{\"amount\":{\"type\":\"number\"},\"created\":{\"type\":\"string\"},\"referenceOrderID\":{\"type\":\"string\"},\"rewardName\":{\"type\":\"string\"},\"status\":{\"type\":\"string\"},\"utid\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"page\":{\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Orders\"}},\"security\":[{\"basicAuth\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/orders", "segments": [{ "lit": "orders" }], "select": { "exist": ["limit", "offset"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "order", "name__orig": "order", "Name": "Order", "name_": "order", "name-": "order", "NAME": "ORDER", "index$": 2 }, { "active": true, "entity": "order", "key$": "BasicOrderFlow", "kind": "basic", "name": "BasicOrderFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "order_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "order_ref01" } }], "index$": 1 }] }, 'Order');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const order_ref01_ent = client.Order();
        let order_ref01_data = setup.data.new.order['order_ref01'];
        order_ref01_data = (await order_ref01_ent.create(order_ref01_data)).data();
        (0, node_assert_1.default)(null != order_ref01_data);
        // LIST
        const order_ref01_match = {};
        const order_ref01_list = (await order_ref01_ent.list(order_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/order/OrderTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TangocardSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['order01', 'order02', 'order03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TANGOCARD_TEST_ORDER_ENTID': idmap,
        'TANGOCARD_TEST_LIVE': 'FALSE',
        'TANGOCARD_TEST_EXPLAIN': 'FALSE',
        'TANGOCARD_APIKEY': '',
        'TANGOCARD_SECRET': '',
    });
    idmap = env['TANGOCARD_TEST_ORDER_ENTID'];
    const live = 'TRUE' === env.TANGOCARD_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TANGOCARD_TEST_ORDER_ENTID'];
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
//# sourceMappingURL=OrderEntity.test.js.map