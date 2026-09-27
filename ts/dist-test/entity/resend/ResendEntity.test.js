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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "newDeliveryMethod": { "a": true, "h": "New Delivery Method", "n": "newDeliveryMethod", "r": false, "sh": "The delivery method used to re-deliver the reward.", "t": "`$STRING`", "key$": "newDeliveryMethod", "index$": 0 }, "newEmail": { "a": true, "h": "New Email", "n": "newEmail", "r": false, "sh": "A new email address to re-deliver this order to.", "t": "`$STRING`", "key$": "newEmail", "index$": 1 }, "newEtid": { "a": true, "h": "New Etid", "n": "newEtid", "r": false, "sh": "A new etid used to re-deliver an order.", "t": "`$STRING`", "key$": "newEtid", "index$": 2 }, "newMobile": { "a": true, "h": "New Mobile", "n": "newMobile", "r": false, "sh": "A new mobile number to use for resending an order.", "t": "`$STRING`", "key$": "newMobile", "index$": 3 }, "newMobileNumber": { "a": true, "h": "New Mobile Number", "n": "newMobileNumber", "r": false, "sh": "A new phone number to re-deliver this order to.", "t": "`$STRING`", "key$": "newMobileNumber", "index$": 4 }, "otherReason": { "a": true, "h": "Other Reason", "n": "otherReason", "r": false, "sh": "Required when lineItemResendReasonCode is \"OTHER\", enter the reason why the line item is being RESENT", "t": "`$STRING`", "key$": "otherReason", "index$": 5 }, "reasonCode": { "a": true, "h": "Reason Code", "n": "reasonCode", "r": false, "sh": "Enter the reason why this line item is being RESENT (respectively)", "t": "`$STRING`", "key$": "reasonCode", "index$": 6 } }, "name": "resend", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /lineItems/{referenceLineItemId}/resends", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "line_item_id", "or": "reference_line_item_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/lineItems/{referenceLineItemId}/resends", "q": { "exist": ["line_item_id"] }, "r": { "param": { "referenceLineItemId": "line_item_id" } }, "s": [{ "lit": "lineItems" }, { "var": "line_item_id" }, { "lit": "resends" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /orders/{referenceOrderID}/resends", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "reference_order_id", "or": "reference_order_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/orders/{referenceOrderID}/resends", "q": { "exist": ["reference_order_id"] }, "r": { "param": { "referenceOrderID": "reference_order_id" } }, "s": [{ "lit": "orders" }, { "var": "reference_order_id" }, { "lit": "resends" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.line_item"], ["$.main.kit.entity.order"]] }, "key$": "resend", "name__orig": "resend", "Name": "Resend", "name_": "resend", "name-": "resend", "NAME": "RESEND", "index$": 36 }, { "active": true, "entity": "resend", "key$": "BasicResendFlow", "kind": "basic", "name": "BasicResendFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "resend_ref01" }, "m": { "reference_order_id": "reference_order01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'Resend', { "POST /lineItems/{referenceLineItemId}/resends": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "description": "<strong>newDeliveryMethod</strong> - The delivery method used to re-deliver the reward.  If missing, the redelivery will use the delivery method used on the original order<br/><br/><strong>newEmail</strong> - A new email address to re-deliver this order to. If missing, use the original order email if deliveryMethod=EMAIL<br/><br/><strong>newMobile</strong> - A new phone number to re-deliver this order to. If missing, use the original order phoneNumber of deliveryMethod=PHONE<br/><br/><strong>newEtid</strong> - A new etid used to re-deliver an order. If missing, use the original order etid.<br/><br/><strong>reasonCode</strong> - Enter the reason why this line item is being RESENT (respectively)<br/><br/><strong>otherReason</strong> - Required when lineItemResendReasonCode is \"OTHER\", enter the reason why the line item is being RESENT", "properties": { "newDeliveryMethod": { "type": "string", "description": "The delivery method used to re-deliver the reward.  If missing, the redelivery will use the delivery method used on the original order", "enum": ["NONE", "EMAIL", "PHONE", "WHATSAPP"], "title": "New Delivery Method", "key$": "newDeliveryMethod" }, "newEmail": { "type": "string", "description": "A new email address to re-deliver this order to. If missing, use the original order email if deliveryMethod=EMAIL", "title": "New Email Address", "key$": "newEmail" }, "newMobileNumber": { "type": "string", "description": "A new phone number to re-deliver this order to. If missing, use the original order phoneNumber of deliveryMethod=PHONE", "title": "New Mobile Number", "key$": "newMobileNumber" }, "newEtid": { "type": "string", "description": "A new etid used to re-deliver an order. If missing, use the original order etid.", "title": "New ETID", "key$": "newEtid" }, "reasonCode": { "type": "string", "description": "Enter the reason why this line item is being RESENT (respectively)", "enum": ["NOT_RECEIVED", "LOST_DELETED", "DELIVERY_INFO", "DELIVERY_METHOD", "REMINDER", "OTHER"], "title": "Reason Code", "key$": "reasonCode" }, "otherReason": { "type": "string", "description": "Required when lineItemResendReasonCode is \"OTHER\", enter the reason why the line item is being RESENT", "title": "Other Reason", "key$": "otherReason" } }, "x-ref": "#/components/schemas/LineItemResendRequestCriteria", "index$": 1 } } } }, "parameters": [{ "name": "referenceLineItemId", "in": "path", "description": "Reference line item id is returned in the line item response payload.", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "POST /orders/{referenceOrderID}/resends": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "description": "<strong>newEmail</strong> - A new email address to resend this order to.<br/><br/><strong>newMobile</strong> - A new mobile number to use for resending an order.<br/><br/><strong>newEtid</strong> - A new etid to use for resending an order.<strong>newEtid</strong> - A new delivery method to use for resending an order.", "properties": { "newEmail": { "type": "string", "description": "A new email address to resend this order to.", "title": "Optional new email address for resending an order to", "key$": "newEmail" }, "newMobile": { "type": "string", "description": "A new mobile number to use for resending an order.", "title": "Mobile Number", "key$": "newMobile" }, "newEtid": { "type": "string", "description": "A new etid to use for resending an order.", "title": "Optional new etid to use for resending an order", "key$": "newEtid" }, "newDeliveryMethod": { "type": "string", "description": "A new delivery method to use for resending an order.", "enum": ["NONE", "EMAIL", "PHONE", "WHATSAPP"], "example": "EMAIL", "title": "Delivery Method", "key$": "newDeliveryMethod" } }, "x-ref": "#/components/schemas/OrderResendRequestCriteria", "index$": 1 } } } }, "parameters": [{ "name": "referenceOrderID", "in": "path", "description": "Reference order ID is returned in the order response payload", "required": true, "schema": { "type": "string" }, "index$": 0 }] } });
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
    let idmap = transform(['resend01', 'resend02', 'resend03', 'line_item01', 'line_item02', 'line_item03', 'order01', 'order02', 'order03', 'reference_order01'], {
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