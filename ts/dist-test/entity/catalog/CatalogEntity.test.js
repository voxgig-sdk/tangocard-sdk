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
(0, node_test_1.describe)('CatalogEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TANGOCARD_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TangocardSDK.test();
        const ent = testsdk.Catalog();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'catalog.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "barcodeType": { "a": true, "h": "Barcode Type", "n": "barcodeType", "r": false, "t": "`$STRING`", "key$": "barcodeType", "index$": 0 }, "brandKey": { "a": true, "h": "Brand Key", "n": "brandKey", "r": true, "t": "`$STRING`", "key$": "brandKey", "index$": 1 }, "brandName": { "a": true, "h": "Brand Name", "n": "brandName", "r": true, "t": "`$STRING`", "key$": "brandName", "index$": 2 }, "brandRequirements": { "a": true, "h": "Brand Requirements", "n": "brandRequirements", "r": true, "t": "`$OBJECT`", "key$": "brandRequirements", "index$": 3 }, "categories": { "a": true, "h": "Categories", "n": "categories", "r": true, "t": "`$ARRAY`", "key$": "categories", "index$": 4 }, "createdDate": { "a": true, "h": "Created Date", "n": "createdDate", "r": true, "t": "`$STRING`", "key$": "createdDate", "index$": 5 }, "description": { "a": true, "h": "Description", "n": "description", "r": true, "t": "`$STRING`", "key$": "description", "index$": 6 }, "disclaimer": { "a": true, "h": "Disclaimer", "n": "disclaimer", "r": true, "t": "`$STRING`", "key$": "disclaimer", "index$": 7 }, "imageUrls": { "a": true, "h": "Image Urls", "n": "imageUrls", "r": true, "t": "`$OBJECT`", "key$": "imageUrls", "index$": 8 }, "items": { "a": true, "h": "Items", "n": "items", "r": true, "t": "`$ARRAY`", "key$": "items", "index$": 9 }, "lastUpdateDate": { "a": true, "h": "Last Update Date", "n": "lastUpdateDate", "r": true, "t": "`$STRING`", "key$": "lastUpdateDate", "index$": 10 }, "shortDescription": { "a": true, "h": "Short Description", "n": "shortDescription", "r": true, "t": "`$STRING`", "key$": "shortDescription", "index$": 11 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$STRING`", "key$": "status", "index$": 12 }, "terms": { "a": true, "h": "Terms", "n": "terms", "r": true, "t": "`$STRING`", "key$": "terms", "index$": 13 } }, "name": "catalog", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /choiceProducts/{choiceProductUtid}/catalog", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "choice_product_id", "or": "choice_product_utid", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "brand_key", "or": "brand_key", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "brand_name", "or": "brand_name", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "category_id", "or": "category_id", "r": false, "t": "`$ARRAY`", "index$": 2 }, { "a": true, "k": "query", "n": "country", "or": "country", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "currency_code", "or": "currency_code", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "fulfillment_type", "or": "fulfillment_type", "r": false, "t": "`$ARRAY`", "index$": 5 }, { "a": true, "k": "query", "n": "item_attribute", "or": "item_attribute", "r": false, "t": "`$ARRAY`", "index$": 6 }, { "a": true, "k": "query", "n": "reward_name", "or": "reward_name", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "query", "n": "reward_type", "or": "reward_type", "r": false, "t": "`$ARRAY`", "index$": 8 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$STRING`", "index$": 9 }, { "a": true, "k": "query", "n": "utid", "or": "utid", "r": false, "t": "`$STRING`", "index$": 10 }, { "a": true, "ex": true, "k": "query", "n": "verbose", "or": "verbose", "r": false, "t": "`$BOOLEAN`", "index$": 11 }] }, "k": "http", "m": "GET", "o": "/choiceProducts/{choiceProductUtid}/catalog", "q": { "exist": ["brand_key", "brand_name", "category_id", "choice_product_id", "country", "currency_code", "fulfillment_type", "item_attribute", "reward_name", "reward_type", "status", "utid", "verbose"] }, "r": { "param": { "choiceProductUtid": "choice_product_id" } }, "s": [{ "lit": "choiceProducts" }, { "var": "choice_product_id" }, { "lit": "catalog" }], "t": { "req": "`reqdata`", "res": "`body.brands`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /catalogs", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "brand_key", "or": "brand_key", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "brand_name", "or": "brand_name", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "category_id", "or": "category_id", "r": false, "t": "`$ARRAY`", "index$": 2 }, { "a": true, "k": "query", "n": "country", "or": "country", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "currency_code", "or": "currency_code", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "fulfillment_type", "or": "fulfillment_type", "r": false, "t": "`$ARRAY`", "index$": 5 }, { "a": true, "k": "query", "n": "item_attribute", "or": "item_attribute", "r": false, "t": "`$ARRAY`", "index$": 6 }, { "a": true, "k": "query", "n": "reward_name", "or": "reward_name", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "query", "n": "reward_type", "or": "reward_type", "r": false, "t": "`$ARRAY`", "index$": 8 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$STRING`", "index$": 9 }, { "a": true, "k": "query", "n": "utid", "or": "utid", "r": false, "t": "`$STRING`", "index$": 10 }, { "a": true, "ex": true, "k": "query", "n": "verbose", "or": "verbose", "r": false, "t": "`$BOOLEAN`", "index$": 11 }] }, "k": "http", "m": "GET", "o": "/catalogs", "q": { "exist": ["brand_key", "brand_name", "category_id", "country", "currency_code", "fulfillment_type", "item_attribute", "reward_name", "reward_type", "status", "utid", "verbose"] }, "r": {}, "s": [{ "lit": "catalogs" }], "t": { "req": "`reqdata`", "res": "`body.brands`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.choice_product"]] }, "key$": "catalog", "name__orig": "catalog", "Name": "Catalog", "name_": "catalog", "name-": "catalog", "NAME": "CATALOG", "index$": 10 }, { "active": true, "entity": "catalog", "key$": "BasicCatalogFlow", "kind": "basic", "name": "BasicCatalogFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "catalog_ref01" } }], "index$": 0 }] }, 'Catalog', { "GET /choiceProducts/{choiceProductUtid}/catalog": { "protocol": "http", "parameters": [{ "name": "choiceProductUtid", "in": "path", "description": "Utid - Unique Tango Card ID", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "verbose", "in": "query", "description": "When true, will return the additional brand fields: status, disclaimer, description, shortDescription, terms, brandRequirements collection, and imageUrls collection.", "required": false, "schema": { "type": "boolean", "default": true }, "index$": 1 }, { "name": "brandKey", "in": "query", "description": "Returns the brand and item details for a specific brand ID.", "required": false, "schema": { "type": "string" }, "index$": 2 }, { "name": "brandName", "in": "query", "description": "Returns the brand and item details for a specific brand name.", "required": false, "schema": { "type": "string" }, "index$": 3 }, { "name": "utid", "in": "query", "description": "Returns the brand and item details for a specific utid. The utid is the unique identifier for a specific reward.", "required": false, "schema": { "type": "string" }, "index$": 4 }, { "name": "rewardName", "in": "query", "description": "Returns the brand and item details of the specified reward name.", "required": false, "schema": { "type": "string" }, "index$": 5 }, { "name": "status", "in": "query", "description": "Returns all brands and item details with the specified status.  Possible statuses are: \"test\", \"active\", \"inactive\", \"deleted\"", "required": false, "schema": { "type": "string" }, "index$": 6 }, { "name": "rewardType", "in": "query", "description": "Returns all brands and item details with the specified rewardType.", "required": false, "schema": { "type": "array", "enum": ["all", "gift card", "promo", "donation", "reward link", "payment ach", "payment card", "reporting", "payment-paypal", "tango open loop", "cash equivalent", "physical gift card"], "items": { "type": "string", "enum": ["all", "gift card", "promo", "donation", "reward link", "payment ach", "payment card", "reporting", "payment-paypal", "tango open loop", "cash equivalent", "physical gift card"] }, "uniqueItems": true }, "index$": 7 }, { "name": "currencyCode", "in": "query", "description": "Return all brands and item details associated with a specific currency.", "required": false, "schema": { "type": "string" }, "index$": 8 }, { "name": "country", "in": "query", "description": "Returns all brands and item details from a specific country.", "required": false, "schema": { "type": "string" }, "index$": 9 }, { "name": "fulfillmentType", "in": "query", "description": "Returns all brands and item details for a specific fulfillment type.", "required": false, "deprecated": true, "schema": { "type": "array", "items": { "type": "string", "enum": ["DIGITAL", "PHYSICAL"] }, "uniqueItems": true }, "index$": 10 }, { "name": "itemAttribute", "in": "query", "description": "Returns all brands and item details for a specific item attribute.", "required": false, "schema": { "type": "array", "enum": ["EMAIL", "PHONE", "ADDRESS", "EMBEDDED"], "items": { "type": "string", "enum": ["EMAIL", "PHONE", "ADDRESS", "EMBEDDED"] }, "uniqueItems": true }, "index$": 11 }, { "name": "categoryIds", "in": "query", "description": "Returns all brands and item details for specific brand categories.", "required": false, "schema": { "type": "array", "items": { "type": "string", "format": "uuid" }, "uniqueItems": true }, "index$": 12 }] }, "GET /catalogs": { "protocol": "http", "parameters": [{ "name": "verbose", "in": "query", "description": "When true, will return the additional brand fields: status, disclaimer, description, shortDescription, terms, brandRequirements collection, and imageUrls collection.", "required": false, "schema": { "type": "boolean", "default": true }, "index$": 0 }, { "name": "brandKey", "in": "query", "description": "Returns the brand and item details for a specific brand ID.", "required": false, "schema": { "type": "string" }, "index$": 1 }, { "name": "brandName", "in": "query", "description": "Returns the brand and item details for a specific brand name.", "required": false, "schema": { "type": "string" }, "index$": 2 }, { "name": "utid", "in": "query", "description": "Returns the brand and item details for a specific utid. The utid is the unique identifier for a specific reward.", "required": false, "schema": { "type": "string" }, "index$": 3 }, { "name": "rewardName", "in": "query", "description": "Returns the brand and item details of the specified reward name.", "required": false, "schema": { "type": "string" }, "index$": 4 }, { "name": "status", "in": "query", "description": "Returns all brands and item details with the specified status.  Possible statuses are: \"test\", \"active\", \"inactive\", \"deleted\"", "required": false, "schema": { "type": "string" }, "index$": 5 }, { "name": "rewardType", "in": "query", "description": "Returns all brands and item details with the specified rewardType.", "required": false, "schema": { "type": "array", "enum": ["all", "gift card", "promo", "donation", "reward link", "payment ach", "payment card", "reporting", "payment-paypal", "tango open loop", "cash equivalent", "physical gift card"], "items": { "type": "string", "enum": ["all", "gift card", "promo", "donation", "reward link", "payment ach", "payment card", "reporting", "payment-paypal", "tango open loop", "cash equivalent", "physical gift card"] }, "uniqueItems": true }, "index$": 6 }, { "name": "currencyCode", "in": "query", "description": "Return all brands and item details associated with a specific currency.", "required": false, "schema": { "type": "string" }, "index$": 7 }, { "name": "country", "in": "query", "description": "Returns all brands and item details from a specific country.", "required": false, "schema": { "type": "string" }, "index$": 8 }, { "name": "fulfillmentType", "in": "query", "description": "Returns all brands and item details for a specific fulfillment type.", "required": false, "deprecated": true, "schema": { "type": "array", "items": { "type": "string", "enum": ["DIGITAL", "PHYSICAL"] }, "uniqueItems": true }, "index$": 9 }, { "name": "itemAttribute", "in": "query", "description": "Returns all brands and item details for a specific item attribute.", "required": false, "schema": { "type": "array", "enum": ["EMAIL", "PHONE", "ADDRESS", "EMBEDDED"], "items": { "type": "string", "enum": ["EMAIL", "PHONE", "ADDRESS", "EMBEDDED"] }, "uniqueItems": true }, "index$": 10 }, { "name": "categoryIds", "in": "query", "description": "Returns all brands and item details for specific brand categories.", "required": false, "schema": { "type": "array", "items": { "type": "string", "format": "uuid" }, "uniqueItems": true }, "index$": 11 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let catalog_ref01_data = Object.values(setup.data.existing.catalog)[0];
        // LIST
        const catalog_ref01_ent = client.Catalog();
        const catalog_ref01_match = {};
        const catalog_ref01_list = (await catalog_ref01_ent.list(catalog_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/catalog/CatalogTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TangocardSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['catalog01', 'catalog02', 'catalog03', 'choice_product01', 'choice_product02', 'choice_product03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TANGOCARD_TEST_CATALOG_ENTID': idmap,
        'TANGOCARD_TEST_LIVE': 'FALSE',
        'TANGOCARD_TEST_EXPLAIN': 'FALSE',
        'TANGOCARD_APIKEY': '',
        'TANGOCARD_SECRET': '',
    });
    idmap = env['TANGOCARD_TEST_CATALOG_ENTID'];
    const live = 'TRUE' === env.TANGOCARD_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TANGOCARD_TEST_CATALOG_ENTID'];
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
//# sourceMappingURL=CatalogEntity.test.js.map