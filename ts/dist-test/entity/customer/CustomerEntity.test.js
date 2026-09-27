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
(0, node_test_1.describe)('CustomerEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TANGOCARD_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TangocardSDK.test();
        const ent = testsdk.Customer();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'customer.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "accounts": { "a": true, "h": "Accounts", "n": "accounts", "r": true, "t": "`$ARRAY`", "key$": "accounts", "index$": 0 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "t": "`$STRING`", "key$": "createdAt", "index$": 1 }, "customerIdentifier": { "a": true, "h": "Customer Identifier", "n": "customerIdentifier", "r": true, "sh": "A unique identifier for this customer.", "t": "`$STRING`", "key$": "customerIdentifier", "index$": 2 }, "displayName": { "a": true, "h": "Display Name", "n": "displayName", "r": true, "sh": "A friendly name for this customer.", "t": "`$STRING`", "key$": "displayName", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 4 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$STRING`", "key$": "status", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "customer", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /customers", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/customers", "q": {}, "r": {}, "s": [{ "lit": "customers" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /customers", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "account_display_name", "or": "account_display_name", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "account_identifier", "or": "account_identifier", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "account_max_date_created_at", "or": "account_max_date_created_at", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "account_min_date_created_at", "or": "account_min_date_created_at", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "account_number", "or": "account_number", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "account_status", "or": "account_status", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "customer_max_date_created_at", "or": "customer_max_date_created_at", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "customer_min_date_created_at", "or": "customer_min_date_created_at", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "query", "n": "display_name", "or": "display_name", "r": false, "t": "`$STRING`", "index$": 8 }, { "a": true, "k": "query", "n": "max_result", "or": "max_result", "r": false, "t": "`$INTEGER`", "index$": 9 }, { "a": true, "k": "query", "n": "next_cursor", "or": "next_cursor", "r": false, "t": "`$STRING`", "index$": 10 }, { "a": true, "k": "query", "n": "paginate", "or": "paginate", "r": false, "t": "`$BOOLEAN`", "index$": 11 }, { "a": true, "k": "query", "n": "prev_cursor", "or": "prev_cursor", "r": false, "t": "`$STRING`", "index$": 12 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$STRING`", "index$": 13 }] }, "k": "http", "m": "GET", "o": "/customers", "q": { "exist": ["account_display_name", "account_identifier", "account_max_date_created_at", "account_min_date_created_at", "account_number", "account_status", "customer_max_date_created_at", "customer_min_date_created_at", "display_name", "max_result", "next_cursor", "paginate", "prev_cursor", "status"] }, "r": {}, "s": [{ "lit": "customers" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /customers/{customerIdentifier}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "customer_identifier", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/customers/{customerIdentifier}", "q": { "exist": ["id"] }, "r": { "param": { "customerIdentifier": "id" } }, "s": [{ "lit": "customers" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "customer", "name__orig": "customer", "Name": "Customer", "name_": "customer", "name-": "customer", "NAME": "CUSTOMER", "index$": 18 }, { "active": true, "entity": "customer", "key$": "BasicCustomerFlow", "kind": "basic", "name": "BasicCustomerFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "customer_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "customer_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "customer_ref01", "srcdatavar": "customer_ref01_data", "suffix": "_dt0" }, "m": { "id": "customer01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-customer_ref01" } }], "index$": 2 }] }, 'Customer', { "POST /customers": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "customerIdentifier": { "type": "string", "description": "A unique identifier for this customer. Must be between 5-100 characters and accepts the following: -0-9a-zA-Z in any sequence.", "pattern": "^[-a-zA-Z0-9]{5,100}$", "title": "Customer Identifier", "key$": "customerIdentifier" }, "displayName": { "type": "string", "description": "A friendly name for this customer. Must be between 5-100 characters and accepts letters, numbers, punctuation and whitespace separators in any sequence.", "pattern": "^[\\p{L}\\p{N}\\p{P}\\p{Z}]{5,100}$", "title": "Display Name", "key$": "displayName" } }, "required": ["customerIdentifier", "displayName"], "x-ref": "#/components/schemas/CreateCustomerCriteria", "index$": 1 } } }, "required": true }, "parameters": [] }, "GET /customers": { "protocol": "http", "parameters": [{ "name": "displayName", "in": "query", "description": "Specify the customer display name to be queried.", "required": false, "schema": { "type": "string" }, "index$": 0 }, { "name": "status", "in": "query", "description": "Specify the status to be queried.", "required": false, "schema": { "type": "string" }, "index$": 1 }, { "name": "customerMinDateCreatedAt", "in": "query", "description": "Specify the customer earliest createdAt date to be queried.", "required": false, "schema": { "type": "string", "format": "date-time" }, "index$": 2 }, { "name": "customerMaxDateCreatedAt", "in": "query", "description": "Specify the customer latest createdAt date to be queried.", "required": false, "schema": { "type": "string", "format": "date-time" }, "index$": 3 }, { "name": "accountStatus", "in": "query", "description": "Specify the account status to be queried.", "required": false, "schema": { "type": "string" }, "index$": 4 }, { "name": "accountIdentifier", "in": "query", "description": "Specify the account identifier to be queried.", "required": false, "schema": { "type": "string" }, "index$": 5 }, { "name": "accountNumber", "in": "query", "description": "Specify the account number to be queried.", "required": false, "schema": { "type": "string" }, "index$": 6 }, { "name": "accountDisplayName", "in": "query", "description": "Specify the account display name to be queried.", "required": false, "schema": { "type": "string" }, "index$": 7 }, { "name": "accountMinDateCreatedAt", "in": "query", "description": "Specify the earliest createdAt date to be queried.", "required": false, "schema": { "type": "string", "format": "date-time" }, "index$": 8 }, { "name": "accountMaxDateCreatedAt", "in": "query", "description": "Specify the latest createdAt date to be queried.", "required": false, "schema": { "type": "string", "format": "date-time" }, "index$": 9 }, { "name": "paginate", "in": "query", "description": "Whether to paginate the results or not. Defaults to false.", "required": false, "schema": { "type": "boolean" }, "index$": 10 }, { "name": "prevCursor", "in": "query", "description": "The cursor to use for the previous page of results. This will be ignored if paginate is false.", "required": false, "schema": { "type": "string" }, "index$": 11 }, { "name": "nextCursor", "in": "query", "description": "The cursor to use for the next page of results. This will be ignored if paginate is false.", "required": false, "schema": { "type": "string" }, "index$": 12 }, { "name": "maxResults", "in": "query", "description": "The maximum number of results to return. The default is 10, and the maximum is 200. This will be ignored if paginate is false.", "required": false, "schema": { "type": "integer", "format": "int32" }, "index$": 13 }] }, "GET /customers/{customerIdentifier}": { "protocol": "http", "parameters": [{ "name": "customerIdentifier", "in": "path", "description": "The customerIdentifier for the Customer under which you are seeking details.", "required": true, "schema": { "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const customer_ref01_ent = client.Customer();
        let customer_ref01_data = setup.data.new.customer['customer_ref01'];
        customer_ref01_data = (await customer_ref01_ent.create(customer_ref01_data)).data();
        (0, node_assert_1.default)(null != customer_ref01_data.id);
        // LIST
        const customer_ref01_match = {};
        const customer_ref01_list = (await customer_ref01_ent.list(customer_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(customer_ref01_list, { id: customer_ref01_data.id })));
        // LOAD
        const customer_ref01_match_dt0 = {};
        customer_ref01_match_dt0.id = customer_ref01_data.id;
        const customer_ref01_data_dt0 = (await customer_ref01_ent.load(customer_ref01_match_dt0)).data();
        (0, node_assert_1.default)(customer_ref01_data_dt0.id === customer_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/customer/CustomerTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TangocardSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['customer01', 'customer02', 'customer03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TANGOCARD_TEST_CUSTOMER_ENTID': idmap,
        'TANGOCARD_TEST_LIVE': 'FALSE',
        'TANGOCARD_TEST_EXPLAIN': 'FALSE',
        'TANGOCARD_APIKEY': '',
        'TANGOCARD_SECRET': '',
    });
    idmap = env['TANGOCARD_TEST_CUSTOMER_ENTID'];
    const live = 'TRUE' === env.TANGOCARD_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TANGOCARD_TEST_CUSTOMER_ENTID'];
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
//# sourceMappingURL=CustomerEntity.test.js.map