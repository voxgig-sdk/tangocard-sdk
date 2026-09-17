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
(0, node_test_1.describe)('CreateAccountCriterionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TANGOCARD_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TangocardSDK.test();
        const ent = testsdk.CreateAccountCriterion();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'create_account_criterion.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "accountIdentifier", "req": true, "short": "A unique identifier for this account.", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "contactEmail", "req": true, "short": "An email address for a designated representative for this account.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "currencyCode", "req": false, "short": "The currency this account will accept for deposits/withdraws.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "displayName", "req": true, "short": "A friendly name for this account.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "fundingNotification", "req": false, "short": "optional, send funding notification emails to the following address(es)", "type": "`$ARRAY`", "index$": 4 }], "name": "create_account_criterion", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "customer_identifier", "orig": "customer_identifier", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST /customers/{customerIdentifier}/accounts", "json": "{\"operationId\":\"createCustomerAccount\",\"parameters\":[{\"description\":\"The customerIdentifier for the Customer under which you are creating a new account\",\"in\":\"path\",\"name\":\"customerIdentifier\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"accountIdentifier\":{\"description\":\"A unique identifier for this account. Must be between 5-100 characters and accepts the following: -0-9a-zA-Z in any sequence.\",\"pattern\":\"^[-a-zA-Z0-9]{5,100}$\",\"title\":\"Account Identifier\",\"type\":\"string\"},\"contactEmail\":{\"description\":\"An email address for a designated representative for this account.\",\"title\":\"Email\",\"type\":\"string\"},\"currencyCode\":{\"default\":\"USD\",\"description\":\"The currency this account will accept for deposits/withdraws. Only one currency can be specified, and can never be changed. Default to USD if not specified.\",\"enum\":[\"AUD\",\"CAD\",\"EUR\",\"GBP\",\"USD\",\"MXN\",\"SGD\",\"PLN\"],\"title\":\"Currency Code\",\"type\":\"string\"},\"displayName\":{\"description\":\"A friendly name for this account.\",\"title\":\"Display Name\",\"type\":\"string\"},\"fundingNotification\":{\"description\":\"optional, send funding notification emails to the following address(es)\",\"items\":{\"properties\":{\"emailAddress\":{\"description\":\"optional, email address to send funding notifications to for this account.\",\"title\":\"Email\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":\"Funding Notification\",\"type\":\"array\",\"uniqueItems\":true}},\"required\":[\"accountIdentifier\",\"contactEmail\",\"displayName\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"accountIdentifier\":{\"description\":\"A unique identifier for this account. Must be between 5-100 characters and accepts the following: -0-9a-zA-Z in any sequence.\",\"pattern\":\"^[-a-zA-Z0-9]{5,100}$\",\"title\":\"Account Identifier\",\"type\":\"string\"},\"contactEmail\":{\"description\":\"An email address for a designated representative for this account.\",\"title\":\"Email\",\"type\":\"string\"},\"currencyCode\":{\"default\":\"USD\",\"description\":\"The currency this account will accept for deposits/withdraws. Only one currency can be specified, and can never be changed. Default to USD if not specified.\",\"enum\":[\"AUD\",\"CAD\",\"EUR\",\"GBP\",\"USD\",\"MXN\",\"SGD\",\"PLN\"],\"title\":\"Currency Code\",\"type\":\"string\"},\"displayName\":{\"description\":\"A friendly name for this account.\",\"title\":\"Display Name\",\"type\":\"string\"},\"fundingNotification\":{\"description\":\"optional, send funding notification emails to the following address(es)\",\"items\":{\"properties\":{\"emailAddress\":{\"description\":\"optional, email address to send funding notifications to for this account.\",\"title\":\"Email\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":\"Funding Notification\",\"type\":\"array\",\"uniqueItems\":true}},\"required\":[\"accountIdentifier\",\"contactEmail\",\"displayName\"],\"type\":\"object\"}}},\"description\":\"Created\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},{\"properties\":{\"i18nKey\":{\"type\":\"string\"},\"i18nTokenReplacements\":{\"items\":{},\"type\":\"array\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"}]}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Forbidden\"},\"409\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Conflict; Duplicate Exists\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Internal Server Error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Service Unavailable\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/customers/{customerIdentifier}/accounts", "rename": { "param": { "customerIdentifier": "customer_identifier" } }, "segments": [{ "lit": "customers" }, { "var": "customer_identifier" }, { "lit": "accounts" }], "select": { "exist": ["customer_identifier"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["customer"]] }, "key$": "create_account_criterion", "name__orig": "create_account_criterion", "Name": "CreateAccountCriterion", "name_": "create_account_criterion", "name-": "create-account-criterion", "NAME": "CREATE_ACCOUNT_CRITERION", "index$": 13 }, { "active": true, "entity": "create_account_criterion", "key$": "BasicCreateAccountCriterionFlow", "kind": "basic", "name": "BasicCreateAccountCriterionFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "create_account_criterion_ref01" }, "match": { "customer_identifier": "customerentifier01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'CreateAccountCriterion');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const create_account_criterion_ref01_ent = client.CreateAccountCriterion();
        let create_account_criterion_ref01_data = setup.data.new.create_account_criterion['create_account_criterion_ref01'];
        create_account_criterion_ref01_data['customer_identifier'] = setup.idmap['customerentifier01'];
        create_account_criterion_ref01_data = (await create_account_criterion_ref01_ent.create(create_account_criterion_ref01_data)).data();
        (0, node_assert_1.default)(null != create_account_criterion_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/create_account_criterion/CreateAccountCriterionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TangocardSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['create_account_criterion01', 'create_account_criterion02', 'create_account_criterion03', 'customer01', 'customer02', 'customer03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TANGOCARD_TEST_CREATE_ACCOUNT_CRITERION_ENTID': idmap,
        'TANGOCARD_TEST_LIVE': 'FALSE',
        'TANGOCARD_TEST_EXPLAIN': 'FALSE',
        'TANGOCARD_APIKEY': '',
        'TANGOCARD_SECRET': '',
    });
    idmap = env['TANGOCARD_TEST_CREATE_ACCOUNT_CRITERION_ENTID'];
    const live = 'TRUE' === env.TANGOCARD_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TANGOCARD_TEST_CREATE_ACCOUNT_CRITERION_ENTID'];
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
//# sourceMappingURL=CreateAccountCriterionEntity.test.js.map