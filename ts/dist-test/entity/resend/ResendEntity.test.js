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
(0, node_test_1.describe)('ResendEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TANGOCARD_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TangocardSDK.test();
        const ent = testsdk.Resend();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'resend.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "newDeliveryMethod", "req": false, "short": "The delivery method used to re-deliver the reward.", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "newEmail", "req": false, "short": "A new email address to re-deliver this order to.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "newEtid", "req": false, "short": "A new etid used to re-deliver an order.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "newMobile", "req": false, "short": "A new mobile number to use for resending an order.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "newMobileNumber", "req": false, "short": "A new phone number to re-deliver this order to.", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "otherReason", "req": false, "short": "Required when lineItemResendReasonCode is \"OTHER\", enter the reason why the line item is being RESENT", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "reasonCode", "req": false, "short": "Enter the reason why this line item is being RESENT (respectively)", "type": "`$STRING`", "index$": 6 }], "name": "resend", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "line_item_id", "orig": "reference_line_item_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST /lineItems/{referenceLineItemId}/resends", "json": "{\"operationId\":\"resendLineItem\",\"parameters\":[{\"description\":\"Reference line item id is returned in the line item response payload.\",\"in\":\"path\",\"name\":\"referenceLineItemId\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"<strong>newDeliveryMethod</strong> - The delivery method used to re-deliver the reward.  If missing, the redelivery will use the delivery method used on the original order<br/><br/><strong>newEmail</strong> - A new email address to re-deliver this order to. If missing, use the original order email if deliveryMethod=EMAIL<br/><br/><strong>newMobile</strong> - A new phone number to re-deliver this order to. If missing, use the original order phoneNumber of deliveryMethod=PHONE<br/><br/><strong>newEtid</strong> - A new etid used to re-deliver an order. If missing, use the original order etid.<br/><br/><strong>reasonCode</strong> - Enter the reason why this line item is being RESENT (respectively)<br/><br/><strong>otherReason</strong> - Required when lineItemResendReasonCode is \\\"OTHER\\\", enter the reason why the line item is being RESENT\",\"properties\":{\"newDeliveryMethod\":{\"description\":\"The delivery method used to re-deliver the reward.  If missing, the redelivery will use the delivery method used on the original order\",\"enum\":[\"NONE\",\"EMAIL\",\"PHONE\",\"WHATSAPP\"],\"title\":\"New Delivery Method\",\"type\":\"string\"},\"newEmail\":{\"description\":\"A new email address to re-deliver this order to. If missing, use the original order email if deliveryMethod=EMAIL\",\"title\":\"New Email Address\",\"type\":\"string\"},\"newEtid\":{\"description\":\"A new etid used to re-deliver an order. If missing, use the original order etid.\",\"title\":\"New ETID\",\"type\":\"string\"},\"newMobileNumber\":{\"description\":\"A new phone number to re-deliver this order to. If missing, use the original order phoneNumber of deliveryMethod=PHONE\",\"title\":\"New Mobile Number\",\"type\":\"string\"},\"otherReason\":{\"description\":\"Required when lineItemResendReasonCode is \\\"OTHER\\\", enter the reason why the line item is being RESENT\",\"title\":\"Other Reason\",\"type\":\"string\"},\"reasonCode\":{\"description\":\"Enter the reason why this line item is being RESENT (respectively)\",\"enum\":[\"NOT_RECEIVED\",\"LOST_DELETED\",\"DELIVERY_INFO\",\"DELIVERY_METHOD\",\"REMINDER\",\"OTHER\"],\"title\":\"Reason Code\",\"type\":\"string\"}},\"type\":\"object\"}}}},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"createdAt\":{\"title\":\"Created Date\",\"type\":\"string\"},\"deliveryMethod\":{\"enum\":[\"NONE\",\"EMAIL\",\"PHONE\",\"ADDRESS\",\"EMBEDDED\",\"BULKSHIPMENT\",\"QRCODE\",\"BULKDIGITAL\",\"EMBEDDED_COMPONENT\",\"WHATSAPP\"],\"title\":\"The delivery method of the resend\",\"type\":\"string\"},\"email\":{\"title\":\"Email address that the resend was sent to if deliveryMethod=EMAIL\",\"type\":\"string\"},\"id\":{\"format\":\"int64\",\"title\":\"ID\",\"type\":\"integer\"},\"legacyId\":{\"title\":\"Legacy ID (only when resending v1 orders)\",\"type\":\"string\"},\"mobileNumber\":{\"title\":\"Mobile number that the resend was sent to if deliveryMethod=PHONE\",\"type\":\"string\"},\"otherReason\":{\"title\":\"The reason for the resend if reasonCode=OTHER\",\"type\":\"string\"},\"reasonCode\":{\"enum\":[\"NOT_RECEIVED\",\"LOST_DELETED\",\"DELIVERY_INFO\",\"DELIVERY_METHOD\",\"REMINDER\",\"OTHER\"],\"title\":\"The reason for the resend\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Created\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Forbidden\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/lineItems/{referenceLineItemId}/resends", "rename": { "param": { "referenceLineItemId": "line_item_id" } }, "segments": [{ "lit": "lineItems" }, { "var": "line_item_id" }, { "lit": "resends" }], "select": { "exist": ["line_item_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "reference_order_id", "orig": "reference_order_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST /orders/{referenceOrderID}/resends", "json": "{\"operationId\":\"getOrderResends\",\"parameters\":[{\"description\":\"Reference order ID is returned in the order response payload\",\"in\":\"path\",\"name\":\"referenceOrderID\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"<strong>newEmail</strong> - A new email address to resend this order to.<br/><br/><strong>newMobile</strong> - A new mobile number to use for resending an order.<br/><br/><strong>newEtid</strong> - A new etid to use for resending an order.<strong>newEtid</strong> - A new delivery method to use for resending an order.\",\"properties\":{\"newDeliveryMethod\":{\"description\":\"A new delivery method to use for resending an order.\",\"enum\":[\"NONE\",\"EMAIL\",\"PHONE\",\"WHATSAPP\"],\"example\":\"EMAIL\",\"title\":\"Delivery Method\",\"type\":\"string\"},\"newEmail\":{\"description\":\"A new email address to resend this order to.\",\"title\":\"Optional new email address for resending an order to\",\"type\":\"string\"},\"newEtid\":{\"description\":\"A new etid to use for resending an order.\",\"title\":\"Optional new etid to use for resending an order\",\"type\":\"string\"},\"newMobile\":{\"description\":\"A new mobile number to use for resending an order.\",\"title\":\"Mobile Number\",\"type\":\"string\"}},\"type\":\"object\"}}}},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"createdAt\":{\"title\":\"Created Date\",\"type\":\"string\"},\"email\":{\"title\":\"Email address that the resend was sent to\",\"type\":\"string\"},\"id\":{\"format\":\"int64\",\"title\":\"ID\",\"type\":\"integer\"},\"legacyId\":{\"title\":\"Legacy ID (only when resending v1 orders)\",\"type\":\"string\"},\"mobileNumber\":{\"title\":\"Mobile Number that the resend was sent to\",\"type\":\"string\"}},\"required\":[\"createdAt\",\"id\"],\"type\":\"object\"}}},\"description\":\"Created\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Forbidden\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/orders/{referenceOrderID}/resends", "rename": { "param": { "referenceOrderID": "reference_order_id" } }, "segments": [{ "lit": "orders" }, { "var": "reference_order_id" }, { "lit": "resends" }], "select": { "exist": ["reference_order_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [["line_item"], ["order"]] }, "key$": "resend", "name__orig": "resend", "Name": "Resend", "name_": "resend", "name-": "resend", "NAME": "RESEND", "index$": 40 }, { "active": true, "entity": "resend", "key$": "BasicResendFlow", "kind": "basic", "name": "BasicResendFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "resend_ref01" }, "match": { "reference_order_id": "reference_order01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'Resend');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const resend_ref01_ent = client.Resend();
        let resend_ref01_data = setup.data.new.resend['resend_ref01'];
        resend_ref01_data['reference_order_id'] = setup.idmap['reference_order01'];
        resend_ref01_data = (await resend_ref01_ent.create(resend_ref01_data)).data();
        (0, node_assert_1.default)(null != resend_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/resend/ResendTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TangocardSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['resend01', 'resend02', 'resend03', 'line_item01', 'line_item02', 'line_item03', 'order01', 'order02', 'order03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TANGOCARD_TEST_RESEND_ENTID': idmap,
        'TANGOCARD_TEST_LIVE': 'FALSE',
        'TANGOCARD_TEST_EXPLAIN': 'FALSE',
        'TANGOCARD_APIKEY': '',
        'TANGOCARD_SECRET': '',
    });
    idmap = env['TANGOCARD_TEST_RESEND_ENTID'];
    const live = 'TRUE' === env.TANGOCARD_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TANGOCARD_TEST_RESEND_ENTID'];
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
//# sourceMappingURL=ResendEntity.test.js.map