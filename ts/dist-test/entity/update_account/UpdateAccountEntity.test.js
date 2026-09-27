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
(0, node_test_1.describe)('UpdateAccountEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TANGOCARD_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TangocardSDK.test();
        const ent = testsdk.UpdateAccount();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'update_account.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 }, "registration": { "a": true, "h": "Registration", "n": "registration", "r": true, "t": "`$OBJECT`", "key$": "registration", "index$": 1 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "t": "`$STRING`", "key$": "status", "index$": 2 }, "updatedBy": { "a": true, "h": "Updated By", "n": "updatedBy", "r": false, "t": "`$STRING`", "key$": "updatedBy", "index$": 3 } }, "id": { "field": "id", "name": "id" }, "name": "update_account", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /prepaidCardService/updateAccount/{referenceLineItemID}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "reference_line_item_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/prepaidCardService/updateAccount/{referenceLineItemID}", "q": { "exist": ["id"] }, "r": { "param": { "referenceLineItemID": "id" } }, "s": [{ "lit": "prepaidCardService" }, { "lit": "updateAccount" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "update_account", "name__orig": "update_account", "Name": "UpdateAccount", "name_": "update_account", "name-": "update-account", "NAME": "UPDATE_ACCOUNT", "index$": 39 }, { "active": true, "entity": "update_account", "key$": "BasicUpdateAccountFlow", "kind": "basic", "name": "BasicUpdateAccountFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "update_account_ref01" }, "m": { "reference_line_item_i_d": "reference_line_item_i_d01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'UpdateAccount', { "POST /prepaidCardService/updateAccount/{referenceLineItemID}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "registration": { "type": "object", "properties": { "firstName": { "type": "string", "maxLength": 50, "minLength": 0 }, "lastName": { "type": "string", "maxLength": 50, "minLength": 0 }, "email": { "type": "string", "format": "email", "maxLength": 100, "minLength": 0 }, "homePhone": { "type": "string", "pattern": "^\\d{10}$" }, "mobilePhone": { "type": "string", "pattern": "^\\d{10}$" }, "address1": { "type": "string", "maxLength": 100, "minLength": 0 }, "address2": { "type": "string", "maxLength": 100, "minLength": 0 }, "city": { "type": "string", "maxLength": 50, "minLength": 0 }, "state": { "type": "string", "pattern": "^[A-Za-z]{2}$" }, "postal": { "type": "string", "pattern": "^[A-Za-z0-9\\- ]{1,10}$" }, "country": { "type": "string", "pattern": "^[A-Za-z]{2,3}$" } }, "x-ref": "#/components/schemas/Registration", "key$": "registration" }, "updatedBy": { "type": "string", "maxLength": 100, "minLength": 0, "key$": "updatedBy" } }, "required": ["registration"], "x-ref": "#/components/schemas/UpdateAccountRequest", "index$": 1 } } }, "required": true }, "parameters": [{ "name": "referenceLineItemID", "in": "path", "description": "Reference Line Item ID", "required": true, "schema": { "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const update_account_ref01_ent = client.UpdateAccount();
        let update_account_ref01_data = setup.data.new.update_account['update_account_ref01'];
        update_account_ref01_data['reference_line_item_i_d'] = setup.idmap['reference_line_item_i_d01'];
        update_account_ref01_data = (await update_account_ref01_ent.create(update_account_ref01_data)).data();
        (0, node_assert_1.default)(null != update_account_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/update_account/UpdateAccountTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TangocardSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['update_account01', 'update_account02', 'update_account03', 'reference_line_item_i_d01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TANGOCARD_TEST_UPDATE_ACCOUNT_ENTID': idmap,
        'TANGOCARD_TEST_LIVE': 'FALSE',
        'TANGOCARD_TEST_EXPLAIN': 'FALSE',
        'TANGOCARD_APIKEY': '',
        'TANGOCARD_SECRET': '',
    });
    idmap = env['TANGOCARD_TEST_UPDATE_ACCOUNT_ENTID'];
    const live = 'TRUE' === env.TANGOCARD_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TANGOCARD_TEST_UPDATE_ACCOUNT_ENTID'];
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
//# sourceMappingURL=UpdateAccountEntity.test.js.map