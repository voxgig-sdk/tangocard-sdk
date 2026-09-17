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
(0, node_test_1.describe)('LowBalanceAlertListViewEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TANGOCARD_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TangocardSDK.test();
        const ent = testsdk.LowBalanceAlertListView();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'low_balance_alert_list_view.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "accountIdentifier", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "balanceAlertDisplayName", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "format": "uuid", "name": "balanceAlertID", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "balanceAlertNotification", "req": false, "type": "`$ARRAY`", "index$": 3 }, { "active": true, "name": "balanceAlertThreshold", "req": false, "type": "`$NUMBER`", "index$": 4 }, { "active": true, "name": "createdAt", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "customerIdentifier", "req": false, "type": "`$STRING`", "index$": 6 }], "name": "low_balance_alert_list_view", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "account_identifier", "orig": "account_identifier", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "customer_identifier", "orig": "customer_identifier", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "kind": "query", "name": "balance_alert_display_name", "orig": "balance_alert_display_name", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "balance_alert_notification", "orig": "balance_alert_notification", "reqd": false, "type": "`$ARRAY`", "index$": 1 }, { "active": true, "kind": "query", "name": "balance_alert_threshold", "orig": "balance_alert_threshold", "reqd": false, "type": "`$NUMBER`", "index$": 2 }, { "active": true, "kind": "query", "name": "elements_per_block", "orig": "elements_per_block", "reqd": false, "type": "`$INTEGER`", "index$": 3 }, { "active": true, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 4 }] }, "contract": { "id": "GET /customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance", "json": "{\"operationId\":\"listBalanceAlerts\",\"parameters\":[{\"description\":\"The customerIdentifier for the Customer / Account combination.\",\"in\":\"path\",\"name\":\"customerIdentifier\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The accountIdentifier for the Customer / Account combination.\",\"in\":\"path\",\"name\":\"accountIdentifier\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"specify the number of elements in a block.\",\"in\":\"query\",\"name\":\"elementsPerBlock\",\"required\":false,\"schema\":{\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"specify the page number to return.\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"A friendly name for this low balance alert (will be displayed in the Tango Portal) to be queried.\",\"in\":\"query\",\"name\":\"balanceAlertDisplayName\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"The threshold amount that will trigger the low balance alert to be queried.\",\"in\":\"query\",\"name\":\"balanceAlertThreshold\",\"required\":false,\"schema\":{\"type\":\"number\"}},{\"description\":\" Low balance notification emails address(es) to be queried.\",\"in\":\"query\",\"name\":\"balanceAlertNotification\",\"required\":false,\"schema\":{\"items\":{\"properties\":{\"emailAddress\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"lowBalanceAlerts\":{\"items\":{\"properties\":{\"accountIdentifier\":{\"title\":\"Account Identifier\",\"type\":\"string\"},\"balanceAlertDisplayName\":{\"title\":\"Balance Alert Display Name\",\"type\":\"string\"},\"balanceAlertID\":{\"format\":\"uuid\",\"title\":\"Balance Alert ID\",\"type\":\"string\"},\"balanceAlertNotification\":{\"items\":{\"properties\":{\"emailAddress\":{\"type\":\"string\"}},\"type\":\"object\"},\"title\":\"Balance Alert Notification\",\"type\":\"array\",\"uniqueItems\":true},\"balanceAlertThreshold\":{\"title\":\"Balance Alert Threshold\",\"type\":\"number\"},\"createdAt\":{\"title\":\"Created At\",\"type\":\"string\"},\"customerIdentifier\":{\"title\":\"Customer Identifier\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":\"Low balance alerts for the current page\",\"type\":\"array\"},\"page\":{\"properties\":{\"number\":{\"format\":\"int32\",\"type\":\"integer\"},\"size\":{\"format\":\"int32\",\"type\":\"integer\"},\"totalElements\":{\"format\":\"int64\",\"type\":\"integer\"},\"totalPages\":{\"format\":\"int32\",\"type\":\"integer\"}},\"title\":\"Page data for matching low balance alerts\",\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},{\"properties\":{\"i18nKey\":{\"type\":\"string\"},\"i18nTokenReplacements\":{\"items\":{},\"type\":\"array\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"}]}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Forbidden\"},\"422\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Unprocessable Entity\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Internal Server Error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Service Unavailable\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance", "rename": { "param": { "accountIdentifier": "account_identifier", "customerIdentifier": "customer_identifier" } }, "segments": [{ "lit": "customers" }, { "var": "customer_identifier" }, { "lit": "accounts" }, { "var": "account_identifier" }, { "lit": "lowbalance" }], "select": { "exist": ["account_identifier", "balance_alert_display_name", "balance_alert_notification", "balance_alert_threshold", "customer_identifier", "elements_per_block", "page"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["customer", "account"]] }, "key$": "low_balance_alert_list_view", "name__orig": "low_balance_alert_list_view", "Name": "LowBalanceAlertListView", "name_": "low_balance_alert_list_view", "name-": "low-balance-alert-list-view", "NAME": "LOW_BALANCE_ALERT_LIST_VIEW", "index$": 25 }, { "active": true, "entity": "low_balance_alert_list_view", "key$": "BasicLowBalanceAlertListViewFlow", "kind": "basic", "name": "BasicLowBalanceAlertListViewFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "account_identifier": "accountentifier01", "customer_identifier": "customerentifier01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "low_balance_alert_list_view_ref01" } }], "index$": 0 }] }, 'LowBalanceAlertListView');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let low_balance_alert_list_view_ref01_data = Object.values(setup.data.existing.low_balance_alert_list_view)[0];
        // LIST
        const low_balance_alert_list_view_ref01_ent = client.LowBalanceAlertListView();
        const low_balance_alert_list_view_ref01_match = {};
        low_balance_alert_list_view_ref01_match['account_identifier'] = setup.idmap['accountentifier01'];
        low_balance_alert_list_view_ref01_match['customer_identifier'] = setup.idmap['customerentifier01'];
        const low_balance_alert_list_view_ref01_list = (await low_balance_alert_list_view_ref01_ent.list(low_balance_alert_list_view_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/low_balance_alert_list_view/LowBalanceAlertListViewTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TangocardSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['low_balance_alert_list_view01', 'low_balance_alert_list_view02', 'low_balance_alert_list_view03', 'customer01', 'customer02', 'customer03', 'account01', 'account02', 'account03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TANGOCARD_TEST_LOW_BALANCE_ALERT_LIST_VIEW_ENTID': idmap,
        'TANGOCARD_TEST_LIVE': 'FALSE',
        'TANGOCARD_TEST_EXPLAIN': 'FALSE',
        'TANGOCARD_APIKEY': '',
        'TANGOCARD_SECRET': '',
    });
    idmap = env['TANGOCARD_TEST_LOW_BALANCE_ALERT_LIST_VIEW_ENTID'];
    const live = 'TRUE' === env.TANGOCARD_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TANGOCARD_TEST_LOW_BALANCE_ALERT_LIST_VIEW_ENTID'];
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
//# sourceMappingURL=LowBalanceAlertListViewEntity.test.js.map