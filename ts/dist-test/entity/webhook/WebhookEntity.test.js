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
(0, node_test_1.describe)('WebhookEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TANGOCARD_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TangocardSDK.test();
        const ent = testsdk.Webhook();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'webhook.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "categories", "req": false, "short": "The categories the customer wants to subscribe to.", "type": "`$ARRAY`", "index$": 0 }, { "active": true, "format": "date-time", "name": "createdAt", "req": false, "short": "The date and time the webhook was created.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "eventTypes", "req": false, "short": "The event types the customer wants to subscribe to.", "type": "`$ARRAY`", "index$": 2 }, { "active": true, "format": "date-time", "name": "expiresAt", "req": false, "short": "The date and time the webhook expires.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "headers", "req": false, "short": "Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.", "type": "`$ARRAY`", "index$": 4 }, { "active": true, "name": "hmacSharedSecretKey", "req": false, "short": "The HMAC secret key used to sign the webhook payload.", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "payloadVerificationMethod", "req": false, "short": "Method to verify webhook payload integrity.", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "signingCertificate", "req": false, "short": "The public X509 certificate used to sign the webhook payload.", "type": "`$STRING`", "index$": 8 }, { "active": true, "format": "date-time", "name": "updatedAt", "req": false, "short": "The date and time when the webhook was last updated.", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "url", "req": false, "short": "The URL of the customer's webhook listener.", "type": "`$STRING`", "index$": 10 }, { "active": true, "format": "uuid", "name": "webhookId", "req": false, "short": "The ID of the webhook.", "type": "`$STRING`", "index$": 11 }], "id": { "field": "id", "name": "id" }, "name": "webhook", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "webhook_id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "from_revision", "orig": "from_revision", "reqd": true, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "kind": "query", "name": "to_revision", "orig": "to_revision", "reqd": false, "type": "`$INTEGER`", "index$": 1 }] }, "contract": { "id": "POST /webhooks/{webhookId}/replay", "json": "{\"operationId\":\"redeliverSubscriptionEvents\",\"parameters\":[{\"in\":\"path\",\"name\":\"webhookId\",\"required\":true,\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"fromRevision\",\"required\":true,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"toRevision\",\"required\":false,\"schema\":{\"format\":\"int64\",\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Not Found\"},\"422\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unprocessable Entity\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/webhooks/{webhookId}/replay", "rename": { "param": { "webhookId": "id" } }, "segments": [{ "lit": "webhooks" }, { "var": "id" }, { "lit": "replay" }], "select": { "$action": "replay", "exist": ["from_revision", "id", "to_revision"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "webhook_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST /webhooks/{webhookId}/renew", "json": "{\"operationId\":\"renewSubscription\",\"parameters\":[{\"description\":\"The webhook identifier\",\"in\":\"path\",\"name\":\"webhookId\",\"required\":true,\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The response from renewing a webhook subscription.\",\"properties\":{\"expiresAt\":{\"description\":\"The date and time the webhook expires.\",\"format\":\"date-time\",\"title\":\"Webhook Expiration\",\"type\":\"string\"},\"webhookId\":{\"description\":\"The ID of the webhook.\",\"format\":\"uuid\",\"title\":\"Webhook ID\",\"type\":\"string\"}},\"title\":\"Renew Webhook Subscription Response\",\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/webhooks/{webhookId}/renew", "rename": { "param": { "webhookId": "id" } }, "segments": [{ "lit": "webhooks" }, { "var": "id" }, { "lit": "renew" }], "select": { "$action": "renew", "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "webhook_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /webhooks/{webhookId}", "json": "{\"operationId\":\"getSubscription\",\"parameters\":[{\"description\":\"The webhook identifier\",\"in\":\"path\",\"name\":\"webhookId\",\"required\":true,\"schema\":{\"format\":\"uuid\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"The response from getting a webhook.\",\"properties\":{\"categories\":{\"description\":\"The categories the customer wants to subscribe to.\",\"items\":{\"type\":\"string\"},\"title\":\"Subscription Categories\",\"type\":\"array\"},\"createdAt\":{\"description\":\"The date and time the webhook was created.\",\"format\":\"date-time\",\"title\":\"Webhook Created At\",\"type\":\"string\"},\"eventTypes\":{\"description\":\"The event types the customer wants to subscribe to.\",\"items\":{\"type\":\"string\"},\"title\":\"Subscription Event Types\",\"type\":\"array\"},\"expiresAt\":{\"description\":\"The date and time the webhook expires.\",\"format\":\"date-time\",\"title\":\"Webhook Expires At\",\"type\":\"string\"},\"headers\":{\"description\":\"Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.\",\"items\":{\"description\":\"The header to be included in the webhook request.\",\"properties\":{\"name\":{\"description\":\"The name of the header.\",\"minLength\":1,\"title\":\"Header Name\",\"type\":\"string\"},\"value\":{\"description\":\"The value of the header.\",\"minLength\":1,\"title\":\"Header Value\",\"type\":\"string\"}},\"required\":[\"name\",\"value\"],\"title\":\"Subscription Header\",\"type\":\"object\"},\"title\":\"Webhook Headers\",\"type\":\"array\"},\"hmacSharedSecretKey\":{\"description\":\"The HMAC secret key used to sign the webhook payload. Required when payloadVerificationMethod is HMAC. The key must be base64 encoded.\",\"title\":\"Hmac Shared Secret Key\",\"type\":\"string\"},\"payloadVerificationMethod\":{\"description\":\"Method to verify webhook payload integrity.\",\"enum\":[\"HMAC\",\"X509\",\"NONE\"],\"type\":\"string\"},\"signingCertificate\":{\"description\":\"The public X509 certificate used to sign the webhook payload. The certificate is base64 encoded.\",\"title\":\"Signing Certificate\",\"type\":\"string\"},\"updatedAt\":{\"description\":\"The date and time when the webhook was last updated.\",\"format\":\"date-time\",\"title\":\"Webhook Updated At\",\"type\":\"string\"},\"url\":{\"description\":\"The URL of the customer's webhook listener.\",\"title\":\"Webhook URL\",\"type\":\"string\"},\"webhookId\":{\"description\":\"The ID of the webhook.\",\"format\":\"uuid\",\"title\":\"Webhook ID\",\"type\":\"string\"}},\"title\":\"Get Webhook Response\",\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/webhooks/{webhookId}", "rename": { "param": { "webhookId": "id" } }, "segments": [{ "lit": "webhooks" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "webhook", "name__orig": "webhook", "Name": "Webhook", "name_": "webhook", "name-": "webhook", "NAME": "WEBHOOK", "index$": 45 }, { "active": true, "entity": "webhook", "key$": "BasicWebhookFlow", "kind": "basic", "name": "BasicWebhookFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "webhook_ref01" }, "match": { "webhook_id": "webhook01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "webhook_ref01", "srcdatavar": "webhook_ref01_data", "suffix": "_dt0" }, "match": { "id": "webhook01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-webhook_ref01" } }], "index$": 1 }] }, 'Webhook');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const webhook_ref01_ent = client.Webhook();
        let webhook_ref01_data = setup.data.new.webhook['webhook_ref01'];
        webhook_ref01_data['webhook_id'] = setup.idmap['webhook01'];
        webhook_ref01_data = (await webhook_ref01_ent.create(webhook_ref01_data)).data();
        (0, node_assert_1.default)(null != webhook_ref01_data.id);
        // LOAD
        const webhook_ref01_match_dt0 = {};
        webhook_ref01_match_dt0.id = webhook_ref01_data.id;
        const webhook_ref01_data_dt0 = (await webhook_ref01_ent.load(webhook_ref01_match_dt0)).data();
        (0, node_assert_1.default)(webhook_ref01_data_dt0.id === webhook_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/webhook/WebhookTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TangocardSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['webhook01', 'webhook02', 'webhook03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TANGOCARD_TEST_WEBHOOK_ENTID': idmap,
        'TANGOCARD_TEST_LIVE': 'FALSE',
        'TANGOCARD_TEST_EXPLAIN': 'FALSE',
        'TANGOCARD_APIKEY': '',
        'TANGOCARD_SECRET': '',
    });
    idmap = env['TANGOCARD_TEST_WEBHOOK_ENTID'];
    const live = 'TRUE' === env.TANGOCARD_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TANGOCARD_TEST_WEBHOOK_ENTID'];
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
//# sourceMappingURL=WebhookEntity.test.js.map