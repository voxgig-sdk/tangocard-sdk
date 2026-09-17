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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "baseCurrency", "req": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "baseFx", "req": true, "type": "`$STRING`", "index$": 1 }, { "active": true, "format": "date-time", "name": "lastModifiedDate", "req": true, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "rewardCurrency", "req": true, "type": "`$STRING`", "index$": 3 }], "name": "exchange_rates_with_disclaimer", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "base_currency", "orig": "base_currency", "reqd": false, "type": "`$ARRAY`", "index$": 0 }, { "active": true, "kind": "query", "name": "max_result", "orig": "max_result", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "kind": "query", "name": "next_cursor", "orig": "next_cursor", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "kind": "query", "name": "paginate", "orig": "paginate", "reqd": false, "type": "`$BOOLEAN`", "index$": 3 }, { "active": true, "kind": "query", "name": "prev_cursor", "orig": "prev_cursor", "reqd": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "kind": "query", "name": "reward_currency", "orig": "reward_currency", "reqd": false, "type": "`$ARRAY`", "index$": 5 }] }, "contract": { "id": "GET /exchangerates", "json": "{\"operationId\":\"getExchangeRates\",\"parameters\":[{\"description\":\"Whether to paginate the results or not. Defaults to false.\",\"in\":\"query\",\"name\":\"paginate\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"The cursor to use for the previous page of results. This will be ignored if paginate is false.\",\"in\":\"query\",\"name\":\"prevCursor\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"The cursor to use for the next page of results. This will be ignored if paginate is false.\",\"in\":\"query\",\"name\":\"nextCursor\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"The maximum number of results to return. The default is 10, and the maximum is 200. This will be ignored if paginate is false.\",\"in\":\"query\",\"name\":\"maxResults\",\"required\":false,\"schema\":{\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"Returns all exchange rates for a specific base currency.\",\"in\":\"query\",\"name\":\"baseCurrency\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}},{\"description\":\"Returns all exchange rates for a specific reward currency.\",\"in\":\"query\",\"name\":\"rewardCurrency\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"disclaimer\":{\"type\":\"string\"},\"exchangeRates\":{\"items\":{\"properties\":{\"baseCurrency\":{\"title\":\"Base Currency\",\"type\":\"string\"},\"baseFx\":{\"title\":\"Base Fixed Exchange Rate\",\"type\":\"string\"},\"lastModifiedDate\":{\"format\":\"date-time\",\"title\":\"Last Modified Timestamp\",\"type\":\"string\"},\"rewardCurrency\":{\"title\":\"Reward Currency\",\"type\":\"string\"}},\"required\":[\"baseCurrency\",\"baseFx\",\"lastModifiedDate\",\"rewardCurrency\"],\"type\":\"object\"},\"type\":\"array\"},\"maxResults\":{\"format\":\"int32\",\"type\":\"integer\"},\"nextCursor\":{\"type\":\"string\"},\"nextPageAvailable\":{\"type\":\"boolean\"},\"prevCursor\":{\"type\":\"string\"},\"prevPageAvailable\":{\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Forbidden\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Internal Server Error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Service Unavailable\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/exchangerates", "segments": [{ "lit": "exchangerates" }], "select": { "exist": ["base_currency", "max_result", "next_cursor", "paginate", "prev_cursor", "reward_currency"] }, "transform": { "req": "`reqdata`", "res": "`body.exchangeRates`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "exchange_rates_with_disclaimer", "name__orig": "exchange_rates_with_disclaimer", "Name": "ExchangeRatesWithDisclaimer", "name_": "exchange_rates_with_disclaimer", "name-": "exchange-rates-with-disclaimer", "NAME": "EXCHANGE_RATES_WITH_DISCLAIMER", "index$": 23 }, { "active": true, "entity": "exchange_rates_with_disclaimer", "key$": "BasicExchangeRatesWithDisclaimerFlow", "kind": "basic", "name": "BasicExchangeRatesWithDisclaimerFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "exchange_rates_with_disclaimer_ref01" } }], "index$": 0 }] }, 'ExchangeRatesWithDisclaimer');
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