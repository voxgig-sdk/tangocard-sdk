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
(0, node_test_1.describe)('LowBalanceAlertViewEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TANGOCARD_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TangocardSDK.test();
        const ent = testsdk.LowBalanceAlertView();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'low_balance_alert_view.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "accountIdentifier": { "a": true, "h": "Account Identifier", "n": "accountIdentifier", "r": false, "t": "`$STRING`", "key$": "accountIdentifier", "index$": 0 }, "balanceAlertDisplayName": { "a": true, "h": "Balance Alert Display Name", "n": "balanceAlertDisplayName", "r": false, "sh": "A friendly name for this low balance alert (will be displayed in the Tango Portal).", "t": "`$STRING`", "key$": "balanceAlertDisplayName", "index$": 1 }, "balanceAlertID": { "a": true, "fo": "uuid", "h": "Balance Alert Id", "n": "balanceAlertID", "r": false, "t": "`$STRING`", "key$": "balanceAlertID", "index$": 2 }, "balanceAlertNotification": { "a": true, "h": "Balance Alert Notification", "n": "balanceAlertNotification", "r": false, "sh": "Send low balance notification emails to the following address(es).", "t": "`$ARRAY`", "key$": "balanceAlertNotification", "index$": 3 }, "balanceAlertThreshold": { "a": true, "h": "Balance Alert Threshold", "n": "balanceAlertThreshold", "r": false, "sh": "The threshold amount that will trigger the low balance alert.", "t": "`$NUMBER`", "key$": "balanceAlertThreshold", "index$": 4 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": false, "t": "`$STRING`", "key$": "createdAt", "index$": 5 }, "customerIdentifier": { "a": true, "h": "Customer Identifier", "n": "customerIdentifier", "r": false, "t": "`$STRING`", "key$": "customerIdentifier", "index$": 6 } }, "name": "low_balance_alert_view", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_identifier", "or": "account_identifier", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "customer_identifier", "or": "customer_identifier", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance", "q": { "exist": ["account_identifier", "customer_identifier"] }, "r": { "param": { "accountIdentifier": "account_identifier", "customerIdentifier": "customer_identifier" } }, "s": [{ "lit": "customers" }, { "var": "customer_identifier" }, { "lit": "accounts" }, { "var": "account_identifier" }, { "lit": "lowbalance" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_identifier", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "balance_alert_id", "or": "balance_alert_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "customer_identifier", "or": "customer_identifier", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}", "q": { "exist": ["account_id", "balance_alert_id", "customer_identifier"] }, "r": { "param": { "accountIdentifier": "account_id", "balanceAlertID": "balance_alert_id", "customerIdentifier": "customer_identifier" } }, "s": [{ "lit": "customers" }, { "var": "customer_identifier" }, { "lit": "accounts" }, { "var": "account_id" }, { "lit": "lowbalance" }, { "var": "balance_alert_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_identifier", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "balance_alert_id", "or": "balance_alert_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "customer_identifier", "or": "customer_identifier", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "PATCH", "o": "/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}", "q": { "exist": ["account_id", "balance_alert_id", "customer_identifier"] }, "r": { "param": { "accountIdentifier": "account_id", "balanceAlertID": "balance_alert_id", "customerIdentifier": "customer_identifier" } }, "s": [{ "lit": "customers" }, { "var": "customer_identifier" }, { "lit": "accounts" }, { "var": "account_id" }, { "lit": "lowbalance" }, { "var": "balance_alert_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.customer", "$.main.kit.entity.account"], ["$.main.kit.entity.customer", "$.main.kit.entity.account"]] }, "key$": "low_balance_alert_view", "name__orig": "low_balance_alert_view", "Name": "LowBalanceAlertView", "name_": "low_balance_alert_view", "name-": "low-balance-alert-view", "NAME": "LOW_BALANCE_ALERT_VIEW", "index$": 24 }, { "active": true, "entity": "low_balance_alert_view", "key$": "BasicLowBalanceAlertViewFlow", "kind": "basic", "name": "BasicLowBalanceAlertViewFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "low_balance_alert_view_ref01" }, "m": { "account_id": "account01", "account_identifier": "accountentifier01", "customer_identifier": "customerentifier01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "account_id": "account01", "customer_identifier": "customerentifier01" }, "i": { "ref": "low_balance_alert_view_ref01", "srcdatavar": "low_balance_alert_view_ref01_data", "suffix": "_up0", "textfield": "accountIdentifier" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-low_balance_alert_view_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "low_balance_alert_view_ref01", "srcdatavar": "low_balance_alert_view_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "customer_identifier": "customerentifier01", "id": "low_balance_alert_view01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-low_balance_alert_view_ref01" } }], "index$": 2 }] }, 'LowBalanceAlertView', { "POST /customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "balanceAlertDisplayName": { "type": "string", "key$": "balanceAlertDisplayName" }, "balanceAlertThreshold": { "type": "number", "key$": "balanceAlertThreshold" }, "balanceAlertNotification": { "type": "array", "items": { "type": "object", "properties": { "emailAddress": { "type": "string" } }, "x-ref": "#/components/schemas/BalanceAlertContactDTO" }, "uniqueItems": true, "key$": "balanceAlertNotification" } }, "x-ref": "#/components/schemas/LowBalanceAlertDTO", "index$": 1 } } }, "required": true }, "parameters": [{ "name": "customerIdentifier", "in": "path", "description": "The customerIdentifier for the Customer / Account combination.", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "accountIdentifier", "in": "path", "description": "The accountIdentifier for the Customer / Account combination.", "required": true, "schema": { "type": "string" }, "index$": 1 }] }, "GET /customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}": { "protocol": "http", "parameters": [{ "name": "customerIdentifier", "in": "path", "description": "The customerIdentifier for the Customer / Account combination.", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "accountIdentifier", "in": "path", "description": "The accountIdentifier for the Customer / Account combination.", "required": true, "schema": { "type": "string" }, "index$": 1 }, { "name": "balanceAlertID", "in": "path", "description": "The specific balance alert ID.", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 2 }] }, "PATCH /customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "balanceAlertDisplayName": { "type": "string", "description": "A friendly name for this low balance alert (will be displayed in the Tango Portal).", "title": "Balance Alert Display Name", "key$": "balanceAlertDisplayName" }, "balanceAlertThreshold": { "type": "number", "description": "The threshold amount that will trigger the low balance alert.", "title": "Balance Alert Threshold", "key$": "balanceAlertThreshold" }, "balanceAlertNotification": { "type": "array", "description": "Send low balance notification emails to the following address(es). A provided list replaces the existing list, an empty list clears all existing emails, and a null/omitted value leaves the list unchanged.", "items": { "type": "object", "properties": { "emailAddress": { "type": "string" } }, "x-ref": "#/components/schemas/BalanceAlertContactDTO" }, "title": "Balance Alert Notification", "key$": "balanceAlertNotification" } }, "x-ref": "#/components/schemas/UpdateLowBalanceAlertRequest", "index$": 1 } } }, "required": true }, "parameters": [{ "name": "customerIdentifier", "in": "path", "description": "The customerIdentifier for the Customer / Account combination under which you update the low balance alert.", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "accountIdentifier", "in": "path", "description": "The accountIdentifier for the Customer / Account combination under which you update the low balance alert.", "required": true, "schema": { "type": "string" }, "index$": 1 }, { "name": "balanceAlertID", "in": "path", "description": "The lowBalanceIdentifier for the Customer / Account / low balance combination under which you update the low balance alert.", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const low_balance_alert_view_ref01_ent = client.LowBalanceAlertView();
        let low_balance_alert_view_ref01_data = setup.data.new.low_balance_alert_view['low_balance_alert_view_ref01'];
        low_balance_alert_view_ref01_data['account_id'] = setup.idmap['account01'];
        low_balance_alert_view_ref01_data['account_identifier'] = setup.idmap['accountentifier01'];
        low_balance_alert_view_ref01_data['customer_identifier'] = setup.idmap['customerentifier01'];
        low_balance_alert_view_ref01_data = (await low_balance_alert_view_ref01_ent.create(low_balance_alert_view_ref01_data)).data();
        (0, node_assert_1.default)(null != low_balance_alert_view_ref01_data);
        // UPDATE
        const low_balance_alert_view_ref01_data_up0 = {};
        low_balance_alert_view_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        low_balance_alert_view_ref01_data_up0['customer_identifier'] = setup.idmap['customer_identifier'];
        const low_balance_alert_view_ref01_markdef_up0 = { name: 'accountIdentifier', value: 'Mark01-low_balance_alert_view_ref01_' + setup.now };
        low_balance_alert_view_ref01_data_up0[low_balance_alert_view_ref01_markdef_up0.name] = low_balance_alert_view_ref01_markdef_up0.value;
        const low_balance_alert_view_ref01_resdata_up0 = (await low_balance_alert_view_ref01_ent.update(low_balance_alert_view_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != low_balance_alert_view_ref01_resdata_up0);
        (0, node_assert_1.default)(low_balance_alert_view_ref01_resdata_up0[low_balance_alert_view_ref01_markdef_up0.name] === low_balance_alert_view_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/low_balance_alert_view/LowBalanceAlertViewTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TangocardSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['low_balance_alert_view01', 'low_balance_alert_view02', 'low_balance_alert_view03', 'customer01', 'customer02', 'customer03', 'account01', 'account02', 'account03', 'accountentifier01', 'customerentifier01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TANGOCARD_TEST_LOW_BALANCE_ALERT_VIEW_ENTID': idmap,
        'TANGOCARD_TEST_LIVE': 'FALSE',
        'TANGOCARD_TEST_EXPLAIN': 'FALSE',
        'TANGOCARD_APIKEY': '',
        'TANGOCARD_SECRET': '',
    });
    idmap = env['TANGOCARD_TEST_LOW_BALANCE_ALERT_VIEW_ENTID'];
    const live = 'TRUE' === env.TANGOCARD_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TANGOCARD_TEST_LOW_BALANCE_ALERT_VIEW_ENTID'];
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
//# sourceMappingURL=LowBalanceAlertViewEntity.test.js.map