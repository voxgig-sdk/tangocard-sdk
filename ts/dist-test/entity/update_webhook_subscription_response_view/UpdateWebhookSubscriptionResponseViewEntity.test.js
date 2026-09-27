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
(0, node_test_1.describe)('UpdateWebhookSubscriptionResponseViewEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TANGOCARD_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TangocardSDK.test();
        const ent = testsdk.UpdateWebhookSubscriptionResponseView();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'update_webhook_subscription_response_view.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "categories": { "a": true, "h": "Categories", "n": "categories", "r": false, "sh": "The categories the customer is subscribed to.", "t": "`$ARRAY`", "key$": "categories", "index$": 0 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": false, "sh": "The date and time the webhook was created.", "t": "`$STRING`", "key$": "createdAt", "index$": 1 }, "eventTypes": { "a": true, "h": "Event Types", "n": "eventTypes", "r": false, "sh": "The event types the customer is subscribed to.", "t": "`$ARRAY`", "key$": "eventTypes", "index$": 2 }, "expiresAt": { "a": true, "fo": "date-time", "h": "Expires At", "n": "expiresAt", "r": false, "sh": "The date and time the webhook expires.", "t": "`$STRING`", "key$": "expiresAt", "index$": 3 }, "headers": { "a": true, "h": "Headers", "n": "headers", "r": false, "sh": "Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.", "t": "`$ARRAY`", "key$": "headers", "index$": 4 }, "hmacSharedSecretKey": { "a": true, "h": "Hmac Shared Secret Key", "n": "hmacSharedSecretKey", "r": false, "sh": "The HMAC secret key used to sign the webhook payload.", "t": "`$STRING`", "key$": "hmacSharedSecretKey", "index$": 5 }, "payloadVerificationMethod": { "a": true, "h": "Payload Verification Method", "n": "payloadVerificationMethod", "r": false, "sh": "Method to verify webhook payload integrity", "t": "`$STRING`", "key$": "payloadVerificationMethod", "index$": 6 }, "signingCertificate": { "a": true, "h": "Signing Certificate", "n": "signingCertificate", "r": false, "sh": "The public X509 certificate used to sign the webhook payload.", "t": "`$STRING`", "key$": "signingCertificate", "index$": 7 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": false, "sh": "The date and time when the webhook was last updated.", "t": "`$STRING`", "key$": "updatedAt", "index$": 8 }, "url": { "a": true, "h": "Url", "n": "url", "r": false, "sh": "The URL of the customer's webhook listener.", "t": "`$STRING`", "key$": "url", "index$": 9 }, "webhookId": { "a": true, "fo": "uuid", "h": "Webhook Id", "n": "webhookId", "r": false, "sh": "The ID of the webhook.", "t": "`$STRING`", "key$": "webhookId", "index$": 10 } }, "name": "update_webhook_subscription_response_view", "op": { "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /webhooks/{webhookId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "webhook_id", "or": "webhook_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/webhooks/{webhookId}", "q": { "exist": ["webhook_id"] }, "r": { "param": { "webhookId": "webhook_id" } }, "s": [{ "lit": "webhooks" }, { "var": "webhook_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.webhook"]] }, "key$": "update_webhook_subscription_response_view", "name__orig": "update_webhook_subscription_response_view", "Name": "UpdateWebhookSubscriptionResponseView", "name_": "update_webhook_subscription_response_view", "name-": "update-webhook-subscription-response-view", "NAME": "UPDATE_WEBHOOK_SUBSCRIPTION_RESPONSE_VIEW", "index$": 40 }, { "active": true, "entity": "update_webhook_subscription_response_view", "key$": "BasicUpdateWebhookSubscriptionResponseViewFlow", "kind": "basic", "name": "BasicUpdateWebhookSubscriptionResponseViewFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "update_webhook_subscription_response_view_ref01", "srcdatavar": "update_webhook_subscription_response_view_ref01_data", "suffix": "_up0", "textfield": "createdAt" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-update_webhook_subscription_response_view_ref01" } }], "v": [], "index$": 0 }] }, 'UpdateWebhookSubscriptionResponseView', { "PATCH /webhooks/{webhookId}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "description": "The webhook subscription request.", "properties": { "url": { "type": "string", "description": "The URL of the customer's webhook listener. Must be a valid URL.", "title": "Webhook URL", "key$": "url" }, "headers": { "type": "array", "description": "Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.", "items": { "type": "object", "description": "The header to be included in the webhook request.", "properties": { "name": { "description": "The name of the header.", "minLength": 1, "title": "Header Name", "type": "string" }, "value": { "description": "The value of the header.", "minLength": 1, "title": "Header Value", "type": "string" } }, "required": ["name", "value"], "title": "Subscription Header", "x-ref": "#/components/schemas/SubscriptionHeaderView" }, "title": "Webhook Headers", "key$": "headers" }, "categories": { "type": "array", "description": "The categories the customer wants to subscribe to.", "items": { "type": "string" }, "title": "Subscription Categories", "key$": "categories" }, "eventTypes": { "type": "array", "description": "The event types the customer wants to subscribe to.", "items": { "type": "string" }, "title": "Subscription Event Types", "key$": "eventTypes" }, "signingCertificate": { "type": "string", "description": "The public X509 certificate used to sign the webhook payload. The certificate must be base64 encoded.", "title": "Signing Certificate", "key$": "signingCertificate" }, "hmacSharedSecretKey": { "type": "string", "description": "The HMAC secret key used to sign the webhook payload. Required when payloadVerificationMethod is HMAC. The key must be base64 encoded.", "title": "Hmac Shared Secret Key", "key$": "hmacSharedSecretKey" }, "payloadVerificationMethod": { "type": "string", "description": "Method to verify webhook payload integrity", "enum": ["HMAC", "X509", "NONE"], "key$": "payloadVerificationMethod" } }, "title": "Update Webhook Subscription Request", "x-ref": "#/components/schemas/UpdateWebhookSubscriptionRequestView", "index$": 1 } } }, "required": true }, "parameters": [{ "name": "webhookId", "in": "path", "description": "The webhook identifier", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let update_webhook_subscription_response_view_ref01_data = Object.values(setup.data.existing.update_webhook_subscription_response_view)[0];
        // UPDATE
        const update_webhook_subscription_response_view_ref01_ent = client.UpdateWebhookSubscriptionResponseView();
        const update_webhook_subscription_response_view_ref01_data_up0 = {};
        const update_webhook_subscription_response_view_ref01_markdef_up0 = { name: 'createdAt', value: 'Mark01-update_webhook_subscription_response_view_ref01_' + setup.now };
        update_webhook_subscription_response_view_ref01_data_up0[update_webhook_subscription_response_view_ref01_markdef_up0.name] = update_webhook_subscription_response_view_ref01_markdef_up0.value;
        const update_webhook_subscription_response_view_ref01_resdata_up0 = (await update_webhook_subscription_response_view_ref01_ent.update(update_webhook_subscription_response_view_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != update_webhook_subscription_response_view_ref01_resdata_up0);
        (0, node_assert_1.default)(update_webhook_subscription_response_view_ref01_resdata_up0[update_webhook_subscription_response_view_ref01_markdef_up0.name] === update_webhook_subscription_response_view_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/update_webhook_subscription_response_view/UpdateWebhookSubscriptionResponseViewTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TangocardSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['update_webhook_subscription_response_view01', 'update_webhook_subscription_response_view02', 'update_webhook_subscription_response_view03', 'webhook01', 'webhook02', 'webhook03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TANGOCARD_TEST_UPDATE_WEBHOOK_SUBSCRIPTION_RESPONSE_VIEW_ENTID': idmap,
        'TANGOCARD_TEST_LIVE': 'FALSE',
        'TANGOCARD_TEST_EXPLAIN': 'FALSE',
        'TANGOCARD_APIKEY': '',
        'TANGOCARD_SECRET': '',
    });
    idmap = env['TANGOCARD_TEST_UPDATE_WEBHOOK_SUBSCRIPTION_RESPONSE_VIEW_ENTID'];
    const live = 'TRUE' === env.TANGOCARD_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TANGOCARD_TEST_UPDATE_WEBHOOK_SUBSCRIPTION_RESPONSE_VIEW_ENTID'];
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
//# sourceMappingURL=UpdateWebhookSubscriptionResponseViewEntity.test.js.map