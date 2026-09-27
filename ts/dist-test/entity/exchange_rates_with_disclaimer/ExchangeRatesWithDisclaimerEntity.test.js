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
(0, node_test_1.describe)('ExchangeRatesWithDisclaimerEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TANGOCARD_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TangocardSDK.test();
        const ent = testsdk.ExchangeRatesWithDisclaimer();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'exchange_rates_with_disclaimer.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "baseCurrency": { "a": true, "h": "Base Currency", "n": "baseCurrency", "r": true, "t": "`$STRING`", "key$": "baseCurrency", "index$": 0 }, "baseFx": { "a": true, "h": "Base Fx", "n": "baseFx", "r": true, "t": "`$STRING`", "key$": "baseFx", "index$": 1 }, "lastModifiedDate": { "a": true, "fo": "date-time", "h": "Last Modified Date", "n": "lastModifiedDate", "r": true, "t": "`$STRING`", "key$": "lastModifiedDate", "index$": 2 }, "rewardCurrency": { "a": true, "h": "Reward Currency", "n": "rewardCurrency", "r": true, "t": "`$STRING`", "key$": "rewardCurrency", "index$": 3 } }, "name": "exchange_rates_with_disclaimer", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /exchangerates", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "base_currency", "or": "base_currency", "r": false, "t": "`$ARRAY`", "index$": 0 }, { "a": true, "k": "query", "n": "max_result", "or": "max_result", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "next_cursor", "or": "next_cursor", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "paginate", "or": "paginate", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "k": "query", "n": "prev_cursor", "or": "prev_cursor", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "reward_currency", "or": "reward_currency", "r": false, "t": "`$ARRAY`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/exchangerates", "q": { "exist": ["base_currency", "max_result", "next_cursor", "paginate", "prev_cursor", "reward_currency"] }, "r": {}, "s": [{ "lit": "exchangerates" }], "t": { "req": "`reqdata`", "res": "`body.exchangeRates`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "exchange_rates_with_disclaimer", "name__orig": "exchange_rates_with_disclaimer", "Name": "ExchangeRatesWithDisclaimer", "name_": "exchange_rates_with_disclaimer", "name-": "exchange-rates-with-disclaimer", "NAME": "EXCHANGE_RATES_WITH_DISCLAIMER", "index$": 21 }, { "active": true, "entity": "exchange_rates_with_disclaimer", "key$": "BasicExchangeRatesWithDisclaimerFlow", "kind": "basic", "name": "BasicExchangeRatesWithDisclaimerFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "exchange_rates_with_disclaimer_ref01" } }], "index$": 0 }] }, 'ExchangeRatesWithDisclaimer', { "GET /exchangerates": { "protocol": "http", "parameters": [{ "name": "paginate", "in": "query", "description": "Whether to paginate the results or not. Defaults to false.", "required": false, "schema": { "type": "boolean" }, "index$": 0 }, { "name": "prevCursor", "in": "query", "description": "The cursor to use for the previous page of results. This will be ignored if paginate is false.", "required": false, "schema": { "type": "string" }, "index$": 1 }, { "name": "nextCursor", "in": "query", "description": "The cursor to use for the next page of results. This will be ignored if paginate is false.", "required": false, "schema": { "type": "string" }, "index$": 2 }, { "name": "maxResults", "in": "query", "description": "The maximum number of results to return. The default is 10, and the maximum is 200. This will be ignored if paginate is false.", "required": false, "schema": { "type": "integer", "format": "int32" }, "index$": 3 }, { "name": "baseCurrency", "in": "query", "description": "Returns all exchange rates for a specific base currency.", "required": false, "schema": { "type": "array", "items": { "type": "string" }, "uniqueItems": true }, "index$": 4 }, { "name": "rewardCurrency", "in": "query", "description": "Returns all exchange rates for a specific reward currency.", "required": false, "schema": { "type": "array", "items": { "type": "string" }, "uniqueItems": true }, "index$": 5 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let exchange_rates_with_disclaimer_ref01_data = Object.values(setup.data.existing.exchange_rates_with_disclaimer)[0];
        // LIST
        const exchange_rates_with_disclaimer_ref01_ent = client.ExchangeRatesWithDisclaimer();
        const exchange_rates_with_disclaimer_ref01_match = {};
        const exchange_rates_with_disclaimer_ref01_list = (await exchange_rates_with_disclaimer_ref01_ent.list(exchange_rates_with_disclaimer_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/exchange_rates_with_disclaimer/ExchangeRatesWithDisclaimerTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TangocardSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['exchange_rates_with_disclaimer01', 'exchange_rates_with_disclaimer02', 'exchange_rates_with_disclaimer03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TANGOCARD_TEST_EXCHANGE_RATES_WITH_DISCLAIMER_ENTID': idmap,
        'TANGOCARD_TEST_LIVE': 'FALSE',
        'TANGOCARD_TEST_EXPLAIN': 'FALSE',
        'TANGOCARD_APIKEY': '',
        'TANGOCARD_SECRET': '',
    });
    idmap = env['TANGOCARD_TEST_EXCHANGE_RATES_WITH_DISCLAIMER_ENTID'];
    const live = 'TRUE' === env.TANGOCARD_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TANGOCARD_TEST_EXCHANGE_RATES_WITH_DISCLAIMER_ENTID'];
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
//# sourceMappingURL=ExchangeRatesWithDisclaimerEntity.test.js.map