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
(0, node_test_1.describe)('EmailTemplateViewVerboseEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TANGOCARD_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TangocardSDK.test();
        const ent = testsdk.EmailTemplateViewVerbose();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'email_template_view_verbose.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "accentColor": { "a": true, "h": "Accent Color", "n": "accentColor", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "A Hex color value, six hexadecimal digits preceded by a pound sign, used as an accent in the email.", "t": "`$STRING`", "key$": "accentColor", "index$": 0 }, "accessControl": { "a": true, "h": "Access Control", "n": "accessControl", "r": false, "sh": "(Optional) Which Customers and/or Accounts should have access to this template.", "t": "`$ARRAY`", "key$": "accessControl", "index$": 1 }, "accessControls": { "a": true, "h": "Access Controls", "n": "accessControls", "r": false, "t": "`$ARRAY`", "key$": "accessControls", "index$": 2 }, "closing": { "a": true, "h": "Closing", "n": "closing", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "After the reward credential, a space to close the email message to the recipient.", "t": "`$STRING`", "key$": "closing", "index$": 3 }, "customerServiceMessage": { "a": true, "h": "Customer Service Message", "n": "customerServiceMessage", "r": false, "sh": "If left null, Tango Card's Customer Support contact information will be included.", "t": "`$STRING`", "key$": "customerServiceMessage", "index$": 4 }, "defaults": { "a": true, "h": "Defaults", "n": "defaults", "r": false, "sh": "If you want this template to be used at order time for the given Platform, Customer or Account when the Email Template Identifier (etid) is not provided with the order.", "t": "`$ARRAY`", "key$": "defaults", "index$": 5 }, "etid": { "a": true, "h": "Etid", "n": "etid", "r": true, "t": "`$STRING`", "key$": "etid", "index$": 6 }, "fromName": { "a": true, "h": "From Name", "n": "fromName", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "The name that will appear in the From line of the email and the {from_name} in the text message.", "t": "`$STRING`", "key$": "fromName", "index$": 7 }, "headerImage": { "a": true, "h": "Header Image", "n": "headerImage", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "A Base64 encoded string of an image that will show as the header of the email.", "t": "`$STRING`", "key$": "headerImage", "index$": 8 }, "headerImageAltText": { "a": true, "h": "Header Image Alt Text", "n": "headerImageAltText", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "The Alt Text for the Header Image in the email.", "t": "`$STRING`", "key$": "headerImageAltText", "index$": 9 }, "messageBody": { "a": true, "h": "Message Body", "n": "messageBody", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "The message body for the email.", "t": "`$STRING`", "key$": "messageBody", "index$": 10 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "A unique name to give the template.", "t": "`$STRING`", "key$": "name", "index$": 11 }, "smsMessageBody": { "a": true, "h": "Sms Message Body", "n": "smsMessageBody", "r": false, "sh": "The message body for the SMS.", "t": "`$STRING`", "key$": "smsMessageBody", "index$": 12 }, "subject": { "a": true, "h": "Subject", "n": "subject", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "The Subject of the email.", "t": "`$STRING`", "key$": "subject", "index$": 13 } }, "name": "email_template_view_verbose", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /digitalTemplates", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/digitalTemplates", "q": {}, "r": {}, "s": [{ "lit": "digitalTemplates" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /digitalTemplates", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "elements_per_block", "or": "elements_per_block", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/digitalTemplates", "q": { "exist": ["elements_per_block", "page"] }, "r": {}, "s": [{ "lit": "digitalTemplates" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /digitalTemplates/{etid}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "etid", "or": "etid", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/digitalTemplates/{etid}", "q": { "exist": ["etid"] }, "r": {}, "s": [{ "lit": "digitalTemplates" }, { "var": "etid" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /digitalTemplates/{etid}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "etid", "or": "etid", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/digitalTemplates/{etid}", "q": { "exist": ["etid"] }, "r": {}, "s": [{ "lit": "digitalTemplates" }, { "var": "etid" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "email_template_view_verbose", "name__orig": "email_template_view_verbose", "Name": "EmailTemplateViewVerbose", "name_": "email_template_view_verbose", "name-": "email-template-view-verbose", "NAME": "EMAIL_TEMPLATE_VIEW_VERBOSE", "index$": 19 }, { "active": true, "entity": "email_template_view_verbose", "key$": "BasicEmailTemplateViewVerboseFlow", "kind": "basic", "name": "BasicEmailTemplateViewVerboseFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "email_template_view_verbose_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "email_template_view_verbose_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "email_template_view_verbose_ref01", "srcdatavar": "email_template_view_verbose_ref01_data", "suffix": "_up0", "textfield": "accentColor" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-email_template_view_verbose_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "email_template_view_verbose_ref01", "srcdatavar": "email_template_view_verbose_ref01_data", "suffix": "_dt0" }, "m": { "id": "email_template_view_verbose01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-email_template_view_verbose_ref01" } }], "index$": 3 }] }, 'EmailTemplateViewVerbose', { "POST /digitalTemplates": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "description": "<strong>name</strong> - A unique name to give the template.<br/><br/><strong>fromName</strong> - The name that will appear in the From line of the email and the {from_name} in the text message.<br/><br/><strong>subject</strong> - The Subject of the email.<br/><br/><strong>headerImage</strong> - A Base64 encoded string of an image that will show as the header of the email.<br/><br/><strong>headerImageAltText</strong> - The Alt Text for the Header Image in the email.<br/><br/><strong>accentColor</strong> - A Hex color value, six hexadecimal digits preceded by a pound sign, used as an accent in the email.<br/><br/><strong>messageBody</strong> - The message body for the email. This is often used to let the recipient know why they have received the reward.<br/><br/><strong>smsMessageBody</strong> - The message body for the SMS. This is often used to let the recipient know why they have received the reward. Must be non-NULL when sending rewards via SMS. (limited to 90 characters)<br/><br/><strong>closing</strong> - After the reward credential, a space to close the email message to the recipient.<br/><br/><strong>customerServiceMessage</strong> - If left null, Tango Card's Customer Support contact information will be included. Otherwise, please provide the contact information for your customer support if you are responsible for providing first-tier customer support to your recipients. (email only)<br/><br/><strong>accessControl</strong> - (Optional) Which Customers and/or Accounts should have access to this template.<br/><br/><strong>accessControl - type</strong> - The type of access being specified: PLATFORM, CUSTOMER or ACCOUNT.<br/><br/><strong>accessControl - identifier</strong> - Leave this field blank if the type is PLATFORM.  Enter either the the customerIdentifier or the accountIdentifier if the type is CUSTOMER OR ACCOUNT, respectively.<br/><br/><strong>defaults</strong> - If you want this template to be used at order time for the given Platform, Customer or Account when the Email Template Identifier (etid) is not provided with the order.<br/><br/><strong>defaults - type</strong> - The type of default being specified: PLATFORM, CUSTOMER or ACCOUNT.<br/><br/><strong>defaults - identifier</strong> - Leave this field blank if the type is PLATFORM.  Enter either the the customerIdentifier or the accountIdentifier if the type is CUSTOMER OR ACCOUNT, respectively.", "properties": { "name": { "type": "string", "description": "A unique name to give the template.", "title": "Name", "key$": "name" }, "fromName": { "type": "string", "description": "The name that will appear in the From line of the email and the {from_name} in the text message.", "title": "From Name", "key$": "fromName" }, "subject": { "type": "string", "description": "The Subject of the email.", "title": "Subject", "key$": "subject" }, "headerImage": { "type": "string", "description": "A Base64 encoded string of an image that will show as the header of the email.", "title": "Header Image (Base 64 Encoded)", "key$": "headerImage" }, "headerImageAltText": { "type": "string", "description": "The Alt Text for the Header Image in the email.", "title": "Header Image - Alt Text", "key$": "headerImageAltText" }, "accentColor": { "type": "string", "description": "A Hex color value, six hexadecimal digits preceded by a pound sign, used as an accent in the email.", "example": "#000000", "title": "Accent Color", "key$": "accentColor" }, "messageBody": { "type": "string", "description": "The message body for the email. This is often used to let the recipient know why they have received the reward.", "title": "Message Body", "key$": "messageBody" }, "smsMessageBody": { "type": "string", "description": "The message body for the SMS. This is often used to let the recipient know why they have received the reward. Must be non-NULL when sending rewards via SMS. (limited to 90 characters)", "maxLength": 90, "minLength": 0, "title": "SMS Message Body", "key$": "smsMessageBody" }, "closing": { "type": "string", "description": "After the reward credential, a space to close the email message to the recipient.", "title": "Closing Message", "key$": "closing" }, "customerServiceMessage": { "type": "string", "description": "If left null, Tango Card's Customer Support contact information will be included. Otherwise, please provide the contact information for your customer support if you are responsible for providing first-tier customer support to your recipients. (email only)", "title": "Customer Service Message", "key$": "customerServiceMessage" }, "accessControl": { "type": "array", "description": "(Optional) Which Customers and/or Accounts should have access to this template.", "items": { "type": "object", "properties": { "type": { "description": "The type of access being specified: PLATFORM, CUSTOMER or ACCOUNT.", "enum": [], "type": "string" }, "identifier": { "description": "Leave this field blank if the type is PLATFORM.  Enter either the the customerIdentifier or the accountIdentifier if the type is CUSTOMER OR ACCOUNT, respectively.", "type": "string" } }, "x-ref": "#/components/schemas/StandardRewardEmailTemplateAccess" }, "title": "Access Control", "key$": "accessControl" }, "defaults": { "type": "array", "description": "If you want this template to be used at order time for the given Platform, Customer or Account when the Email Template Identifier (etid) is not provided with the order.", "items": { "type": "object", "properties": { "type": { "description": "The type of default being specified: PLATFORM, CUSTOMER or ACCOUNT.", "enum": [], "type": "string" }, "identifier": { "description": "Leave this field blank if the type is PLATFORM.  Enter either the the customerIdentifier or the accountIdentifier if the type is CUSTOMER OR ACCOUNT, respectively.", "type": "string" } }, "x-ref": "#/components/schemas/StandardRewardEmailTemplateDefault" }, "title": "Defaults", "key$": "defaults" } }, "required": ["accentColor", "closing", "fromName", "headerImage", "headerImageAltText", "messageBody", "name", "subject"], "x-ref": "#/components/schemas/CreateEmailTemplateCriteria", "index$": 1 } } }, "required": true }, "parameters": [] }, "GET /digitalTemplates": { "protocol": "http", "parameters": [{ "name": "elementsPerBlock", "in": "query", "description": "specify the number of elements in a block.", "required": false, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }, { "name": "page", "in": "query", "description": "specify the page number to return.", "required": false, "schema": { "type": "integer", "format": "int32" }, "index$": 1 }] }, "GET /digitalTemplates/{etid}": { "protocol": "http", "parameters": [{ "name": "etid", "in": "path", "description": "Template ID (ETID) is returned in the digital template response payload payload", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "PATCH /digitalTemplates/{etid}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "description": "<strong>name</strong> - (Optional) A unique name to give the template.<br/><br/><strong>fromName</strong> - (Optional) The name that will appear in the From line of the email and the {from_name} in the text message.<br/><br/><strong>subject</strong> - (Optional) The Subject of the email.<br/><br/><strong>headerImage</strong> - (Optional) A Base64 encoded string of an image that will show as the header of the email.<br/><br/><strong>headerImageAltText</strong> - (Optional) The Alt Text for the Header Image in the email.<br/><br/><strong>accentColor</strong> - (Optional) A Hex color value, six hexadecimal digits preceded by a pound sign, used as an accent in the email.<br/><br/><strong>messageBody</strong> - (Optional) The message body for the email. This is often used to let the recipient know why they have received the reward.<br/><br/><strong>closing</strong> - (Optional) After the reward credential, a space to close the email message to the recipient.<br/><br/><strong>customerServiceMessage</strong> - (Optional) If left null, Tango Card's Customer Support contact information will be included. Otherwise, please provide the contact information for your customer support if you are responsible for providing first-tier customer support to your recipients. (email only)<br/><br/><strong>accessControl</strong> - Optional. Which Customers and/or Accounts should have access to this template<br/><br/><strong>accessControl - type</strong> - The type of access being specified: PLATFORM, CUSTOMER or ACCOUNT.<br/><br/><strong>accessControl - identifier</strong> - Leave this field blank if the type is PLATFORM.  Enter either the the customerIdentifier or the accountIdentifier if the type is CUSTOMER OR ACCOUNT, respectively.<br/><br/><strong>defaults</strong> - Optional. If you want this template to be used at order time for the given Platform, Customer or Account when the Email Template Identifier (etid) is not provided with the order.<br/><br/><strong>defaults - type</strong> - The type of default being specified: PLATFORM, CUSTOMER or ACCOUNT.<br/><br/><strong>defaults - identifier</strong> - Leave this field blank if the type is PLATFORM.  Enter either the the customerIdentifier or the accountIdentifier if the type is CUSTOMER OR ACCOUNT, respectively.", "properties": { "name": { "type": "string", "description": "(Optional) A unique name to give the template.", "title": "Name", "key$": "name" }, "fromName": { "type": "string", "description": "(Optional) The name that will appear in the From line of the email and the {from_name} in the text message.", "title": "From Name", "key$": "fromName" }, "subject": { "type": "string", "description": "(Optional) The Subject of the email.", "title": "Subject", "key$": "subject" }, "headerImage": { "type": "string", "description": "(Optional) A Base64 encoded string of an image that will show as the header of the email.", "title": "Header Image (Base 64 Encoded)", "key$": "headerImage" }, "headerImageAltText": { "type": "string", "description": "(Optional) The Alt Text for the Header Image in the email.", "title": "Header Image - Alt Text", "key$": "headerImageAltText" }, "accentColor": { "type": "string", "description": "(Optional) A Hex color value, six hexadecimal digits preceded by a pound sign, used as an accent in the email.", "example": "#000000", "pattern": "^(#)([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$", "title": "Accent Color", "key$": "accentColor" }, "messageBody": { "type": "string", "description": "(Optional) The message body for the email. This is often used to let the recipient know why they have received the reward.", "title": "Message Body", "key$": "messageBody" }, "smsMessageBody": { "type": "string", "description": "The message body for the SMS. This is often used to let the recipient know why they have received the reward. Must be non-NULL when sending rewards via SMS. (limited to 90 characters)", "maxLength": 90, "minLength": 0, "title": "SMS Message Body", "key$": "smsMessageBody" }, "closing": { "type": "string", "description": "(Optional) After the reward credential, a space to close the email message to the recipient.", "title": "Closing Message", "key$": "closing" }, "customerServiceMessage": { "type": "string", "description": "(Optional) If left null, Tango Card's Customer Support contact information will be included. Otherwise, please provide the contact information for your customer support if you are responsible for providing first-tier customer support to your recipients. (email only)", "title": "Customer Service Message", "key$": "customerServiceMessage" }, "accessControl": { "type": "array", "description": "Optional. Which Customers and/or Accounts should have access to this template", "items": { "type": "object", "properties": { "type": { "description": "The type of access being specified: PLATFORM, CUSTOMER or ACCOUNT.", "enum": [], "type": "string" }, "identifier": { "description": "Leave this field blank if the type is PLATFORM.  Enter either the the customerIdentifier or the accountIdentifier if the type is CUSTOMER OR ACCOUNT, respectively.", "type": "string" } }, "x-ref": "#/components/schemas/StandardRewardEmailTemplateAccess" }, "title": "Access Control", "key$": "accessControl" }, "defaults": { "type": "array", "description": "Optional. If you want this template to be used at order time for the given Platform, Customer or Account when the Email Template Identifier (etid) is not provided with the order.", "items": { "type": "object", "properties": { "type": { "description": "The type of default being specified: PLATFORM, CUSTOMER or ACCOUNT.", "enum": [], "type": "string" }, "identifier": { "description": "Leave this field blank if the type is PLATFORM.  Enter either the the customerIdentifier or the accountIdentifier if the type is CUSTOMER OR ACCOUNT, respectively.", "type": "string" } }, "x-ref": "#/components/schemas/StandardRewardEmailTemplateDefault" }, "title": "Defaults", "key$": "defaults" } }, "x-ref": "#/components/schemas/UpdateEmailTemplateCriteria", "index$": 1 } } }, "required": true }, "parameters": [{ "name": "etid", "in": "path", "description": "Template ID (ETID) is returned in the digital template response payload", "required": true, "schema": { "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const email_template_view_verbose_ref01_ent = client.EmailTemplateViewVerbose();
        let email_template_view_verbose_ref01_data = setup.data.new.email_template_view_verbose['email_template_view_verbose_ref01'];
        email_template_view_verbose_ref01_data = (await email_template_view_verbose_ref01_ent.create(email_template_view_verbose_ref01_data)).data();
        (0, node_assert_1.default)(null != email_template_view_verbose_ref01_data);
        // LIST
        const email_template_view_verbose_ref01_match = {};
        const email_template_view_verbose_ref01_list = (await email_template_view_verbose_ref01_ent.list(email_template_view_verbose_ref01_match)).map((e) => e.data());
        // UPDATE
        const email_template_view_verbose_ref01_data_up0 = {};
        const email_template_view_verbose_ref01_markdef_up0 = { name: 'accentColor', value: 'Mark01-email_template_view_verbose_ref01_' + setup.now };
        email_template_view_verbose_ref01_data_up0[email_template_view_verbose_ref01_markdef_up0.name] = email_template_view_verbose_ref01_markdef_up0.value;
        const email_template_view_verbose_ref01_resdata_up0 = (await email_template_view_verbose_ref01_ent.update(email_template_view_verbose_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != email_template_view_verbose_ref01_resdata_up0);
        (0, node_assert_1.default)(email_template_view_verbose_ref01_resdata_up0[email_template_view_verbose_ref01_markdef_up0.name] === email_template_view_verbose_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/email_template_view_verbose/EmailTemplateViewVerboseTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TangocardSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['email_template_view_verbose01', 'email_template_view_verbose02', 'email_template_view_verbose03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TANGOCARD_TEST_EMAIL_TEMPLATE_VIEW_VERBOSE_ENTID': idmap,
        'TANGOCARD_TEST_LIVE': 'FALSE',
        'TANGOCARD_TEST_EXPLAIN': 'FALSE',
        'TANGOCARD_APIKEY': '',
        'TANGOCARD_SECRET': '',
    });
    idmap = env['TANGOCARD_TEST_EMAIL_TEMPLATE_VIEW_VERBOSE_ENTID'];
    const live = 'TRUE' === env.TANGOCARD_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TANGOCARD_TEST_EMAIL_TEMPLATE_VIEW_VERBOSE_ENTID'];
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
//# sourceMappingURL=EmailTemplateViewVerboseEntity.test.js.map