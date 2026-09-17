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
(0, node_test_1.describe)('AccountEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TANGOCARD_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TangocardSDK.test();
        const ent = testsdk.Account();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'account.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "accountIdentifier", "req": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "accountNumber", "req": true, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "contactEmail", "req": false, "short": "optional, an email address for a designated representative for this account.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "createdAt", "req": true, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "currencyCode", "req": true, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "currentBalance", "req": true, "type": "`$NUMBER`", "index$": 5 }, { "active": true, "name": "displayName", "op": { "update": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "optional, a friendly name for this account.", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "fundingNotification", "req": false, "short": "optional, send funding notification emails to the following address(es).", "type": "`$ARRAY`", "index$": 7 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "status", "req": true, "type": "`$STRING`", "index$": 9 }], "id": { "field": "id", "name": "id" }, "name": "account", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "account_number", "orig": "account_number", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "contact_email", "orig": "contact_email", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "query", "name": "currency_code", "orig": "currency_code", "reqd": false, "type": "`$ARRAY`", "index$": 2 }, { "active": true, "kind": "query", "name": "display_name", "orig": "display_name", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "kind": "query", "name": "funding_notification_email", "orig": "funding_notification_email", "reqd": false, "type": "`$ARRAY`", "index$": 4 }, { "active": true, "kind": "query", "name": "max_balance", "orig": "max_balance", "reqd": false, "type": "`$NUMBER`", "index$": 5 }, { "active": true, "kind": "query", "name": "max_date_created_at", "orig": "max_date_created_at", "reqd": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "kind": "query", "name": "max_result", "orig": "max_result", "reqd": false, "type": "`$INTEGER`", "index$": 7 }, { "active": true, "kind": "query", "name": "min_balance", "orig": "min_balance", "reqd": false, "type": "`$NUMBER`", "index$": 8 }, { "active": true, "kind": "query", "name": "min_date_created_at", "orig": "min_date_created_at", "reqd": false, "type": "`$STRING`", "index$": 9 }, { "active": true, "kind": "query", "name": "next_cursor", "orig": "next_cursor", "reqd": false, "type": "`$STRING`", "index$": 10 }, { "active": true, "kind": "query", "name": "paginate", "orig": "paginate", "reqd": false, "type": "`$BOOLEAN`", "index$": 11 }, { "active": true, "kind": "query", "name": "prev_cursor", "orig": "prev_cursor", "reqd": false, "type": "`$STRING`", "index$": 12 }, { "active": true, "kind": "query", "name": "status", "orig": "status", "reqd": false, "type": "`$STRING`", "index$": 13 }] }, "contract": { "id": "GET /accounts", "json": "{\"operationId\":\"listCustomerAccounts_1\",\"parameters\":[{\"description\":\"Whether to paginate the results or not. Defaults to false.\",\"in\":\"query\",\"name\":\"paginate\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"The cursor to use for the previous page of results. This will be ignored if paginate is false.\",\"in\":\"query\",\"name\":\"prevCursor\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"The cursor to use for the next page of results. This will be ignored if paginate is false.\",\"in\":\"query\",\"name\":\"nextCursor\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"The maximum number of results to return. The default is 10, and the maximum is 200. This will be ignored if paginate is false.\",\"in\":\"query\",\"name\":\"maxResults\",\"required\":false,\"schema\":{\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"Specify the account number to be queried.\",\"in\":\"query\",\"name\":\"accountNumber\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Specify the account display name to be queried.\",\"in\":\"query\",\"name\":\"displayName\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Specify the status to be queried.\",\"in\":\"query\",\"name\":\"status\",\"required\":false,\"schema\":{\"enum\":[\"ACTIVE\",\"INACTIVE\",\"DISABLED\",\"FROZEN\",\"DELETED\"],\"pattern\":\"ACTIVE|INACTIVE|DISABLED|FROZEN|DELETED\",\"type\":\"string\"}},{\"description\":\"Specify the contact email address to be queried.\",\"in\":\"query\",\"name\":\"contactEmail\",\"required\":false,\"schema\":{\"format\":\"email\",\"maxLength\":255,\"minLength\":0,\"type\":\"string\"}},{\"description\":\"Specify the currency code(s) to be queried.\",\"in\":\"query\",\"name\":\"currencyCode\",\"required\":false,\"schema\":{\"items\":{\"enum\":[\"AUD\",\"CAD\",\"EUR\",\"GBP\",\"USD\",\"MXN\",\"SGD\",\"PLN\"],\"type\":\"string\"},\"type\":\"array\"}},{\"description\":\"Specify the minimum currentBalance to be queried.\",\"in\":\"query\",\"name\":\"minBalance\",\"required\":false,\"schema\":{\"type\":\"number\"}},{\"description\":\"Specify the maximum currentBalance to be queried.\",\"in\":\"query\",\"name\":\"maxBalance\",\"required\":false,\"schema\":{\"type\":\"number\"}},{\"description\":\"Specify the earliest createdAt date to be queried.\",\"in\":\"query\",\"name\":\"minDateCreatedAt\",\"required\":false,\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}},{\"description\":\"Specify the latest createdAt date to be queried.\",\"in\":\"query\",\"name\":\"maxDateCreatedAt\",\"required\":false,\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}},{\"description\":\"Specify the funding notification email(s) to be queried.\",\"in\":\"query\",\"name\":\"fundingNotificationEmail\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"items\":{\"properties\":{\"accountIdentifier\":{\"title\":\"Account Identifier\",\"type\":\"string\"},\"accountNumber\":{\"title\":\"Account Number\",\"type\":\"string\"},\"contactEmail\":{\"title\":\"Contact Email\",\"type\":\"string\"},\"createdAt\":{\"title\":\"Account Creation Timestamp\",\"type\":\"string\"},\"currencyCode\":{\"title\":\"Currency Code\",\"type\":\"string\"},\"currentBalance\":{\"title\":\"Current Balance\",\"type\":\"number\"},\"displayName\":{\"title\":\"Account Display Name\",\"type\":\"string\"},\"fundingNotification\":{\"items\":{\"properties\":{\"emailAddress\":{\"title\":\"Email Address\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":\"Funding Notification Email Addresses\",\"type\":\"array\"},\"status\":{\"title\":\"Account Status\",\"type\":\"string\"}},\"required\":[\"accountIdentifier\",\"accountNumber\",\"createdAt\",\"currencyCode\",\"currentBalance\",\"displayName\",\"status\"],\"type\":\"object\"},\"properties\":{\"empty\":{\"type\":\"boolean\"},\"first\":{\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/items/properties\"},\"required\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/items/required\"},\"type\":\"object\"},\"last\":{\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/items/properties\"},\"required\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/items/required\"},\"type\":\"object\"}},\"title\":\"Non Paginated\",\"type\":\"array\"},{\"properties\":{\"items\":{\"items\":{\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/items/properties\"},\"required\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/items/required\"},\"type\":\"object\"},\"type\":\"array\"},\"maxResults\":{\"format\":\"int32\",\"type\":\"integer\"},\"nextCursor\":{\"type\":\"string\"},\"nextPageAvailable\":{\"type\":\"boolean\"},\"numberOfElements\":{\"format\":\"int32\",\"type\":\"integer\"},\"prevCursor\":{\"type\":\"string\"},\"prevPageAvailable\":{\"type\":\"boolean\"}},\"title\":\"Paginated\",\"type\":\"object\"}]}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Forbidden\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Internal Server Error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Service Unavailable\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/accounts", "segments": [{ "lit": "accounts" }], "select": { "exist": ["account_number", "contact_email", "currency_code", "display_name", "funding_notification_email", "max_balance", "max_date_created_at", "max_result", "min_balance", "min_date_created_at", "next_cursor", "paginate", "prev_cursor", "status"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "account_identifier", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /accounts/{accountIdentifier}", "json": "{\"operationId\":\"getAccount\",\"parameters\":[{\"description\":\"The accountIdentifier for the Account you are seeking details.\",\"in\":\"path\",\"name\":\"accountIdentifier\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"accountIdentifier\":{\"title\":\"Account Identifier\",\"type\":\"string\"},\"accountNumber\":{\"title\":\"Account Number\",\"type\":\"string\"},\"contactEmail\":{\"title\":\"Contact Email\",\"type\":\"string\"},\"createdAt\":{\"title\":\"Account Creation Timestamp\",\"type\":\"string\"},\"currencyCode\":{\"title\":\"Currency Code\",\"type\":\"string\"},\"currentBalance\":{\"title\":\"Current Balance\",\"type\":\"number\"},\"displayName\":{\"title\":\"Account Display Name\",\"type\":\"string\"},\"fundingNotification\":{\"items\":{\"properties\":{\"emailAddress\":{\"title\":\"Email Address\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":\"Funding Notification Email Addresses\",\"type\":\"array\"},\"status\":{\"title\":\"Account Status\",\"type\":\"string\"}},\"required\":[\"accountIdentifier\",\"accountNumber\",\"createdAt\",\"currencyCode\",\"currentBalance\",\"displayName\",\"status\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Forbidden\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Not Found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Internal Server Error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Service Unavailable\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/accounts/{accountIdentifier}", "rename": { "param": { "accountIdentifier": "id" } }, "segments": [{ "lit": "accounts" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "customer_identifier", "orig": "customer_identifier", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "id", "orig": "account_identifier", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "PATCH /customers/{customerIdentifier}/accounts/{accountIdentifier}", "json": "{\"operationId\":\"updateCustomerAccount\",\"parameters\":[{\"description\":\"The customerIdentifier for the Customer under which you are updating an account.\",\"in\":\"path\",\"name\":\"customerIdentifier\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The accountIdentifier for the Account you are updating.\",\"in\":\"path\",\"name\":\"accountIdentifier\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"contactEmail\":{\"description\":\"optional, an email address for a designated representative for this account.\",\"title\":\"Email\",\"type\":\"string\"},\"displayName\":{\"description\":\"optional, a friendly name for this account.\",\"title\":\"Display Name\",\"type\":\"string\"},\"fundingNotification\":{\"description\":\"optional, send funding notification emails to the following address(es). A provided list replaces the existing list, an empty list clears all existing emails, and a null/omitted value leaves the list unchanged.\",\"items\":{\"properties\":{\"emailAddress\":{\"description\":\"optional, email address to send funding notifications to for this account.\",\"title\":\"Email\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":\"Funding Notification\",\"type\":\"array\",\"uniqueItems\":true}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"accountIdentifier\":{\"title\":\"Account Identifier\",\"type\":\"string\"},\"accountNumber\":{\"title\":\"Account Number\",\"type\":\"string\"},\"contactEmail\":{\"title\":\"Contact Email\",\"type\":\"string\"},\"createdAt\":{\"title\":\"Account Creation Timestamp\",\"type\":\"string\"},\"currencyCode\":{\"title\":\"Currency Code\",\"type\":\"string\"},\"currentBalance\":{\"title\":\"Current Balance\",\"type\":\"number\"},\"displayName\":{\"title\":\"Account Display Name\",\"type\":\"string\"},\"fundingNotification\":{\"items\":{\"properties\":{\"emailAddress\":{\"title\":\"Email Address\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":\"Funding Notification Email Addresses\",\"type\":\"array\"},\"status\":{\"title\":\"Account Status\",\"type\":\"string\"}},\"required\":[\"accountIdentifier\",\"accountNumber\",\"createdAt\",\"currencyCode\",\"currentBalance\",\"displayName\",\"status\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},{\"properties\":{\"i18nKey\":{\"type\":\"string\"},\"i18nTokenReplacements\":{\"items\":{},\"type\":\"array\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"}]}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Forbidden\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Not Found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Internal Server Error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/0/properties\"},\"type\":\"object\"},{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/oneOf/1/properties\"},\"type\":\"object\"}]}}},\"description\":\"Service Unavailable\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "PATCH", "orig": "/customers/{customerIdentifier}/accounts/{accountIdentifier}", "rename": { "param": { "accountIdentifier": "id", "customerIdentifier": "customer_identifier" } }, "segments": [{ "lit": "customers" }, { "var": "customer_identifier" }, { "lit": "accounts" }, { "var": "id" }], "select": { "exist": ["customer_identifier", "id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["customer"]] }, "key$": "account", "name__orig": "account", "Name": "Account", "name_": "account", "name-": "account", "NAME": "ACCOUNT", "index$": 0 }, { "active": true, "entity": "account", "key$": "BasicAccountFlow", "kind": "basic", "name": "BasicAccountFlow", "param": {}, "step": [{ "active": true, "data": { "customer_identifier": "customerentifier01" }, "input": { "ref": "account_ref01", "srcdatavar": "account_ref01_data", "suffix": "_up0", "textfield": "accountIdentifier" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-account_ref01" } }], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "account_ref01", "srcdatavar": "account_ref01_data", "suffix": "_dt0" }, "match": { "id": "account01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-account_ref01" } }], "index$": 1 }] }, 'Account');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let account_ref01_data = Object.values(setup.data.existing.account)[0];
        // UPDATE
        const account_ref01_ent = client.Account();
        const account_ref01_data_up0 = {};
        account_ref01_data_up0.id = account_ref01_data.id;
        account_ref01_data_up0['customer_identifier'] = setup.idmap['customer_identifier'];
        const account_ref01_markdef_up0 = { name: 'accountIdentifier', value: 'Mark01-account_ref01_' + setup.now };
        account_ref01_data_up0[account_ref01_markdef_up0.name] = account_ref01_markdef_up0.value;
        const account_ref01_resdata_up0 = (await account_ref01_ent.update(account_ref01_data_up0)).data();
        (0, node_assert_1.default)(account_ref01_resdata_up0.id === account_ref01_data_up0.id);
        (0, node_assert_1.default)(account_ref01_resdata_up0[account_ref01_markdef_up0.name] === account_ref01_markdef_up0.value);
        // LOAD
        const account_ref01_match_dt0 = {};
        account_ref01_match_dt0.id = account_ref01_data.id;
        const account_ref01_data_dt0 = (await account_ref01_ent.load(account_ref01_match_dt0)).data();
        (0, node_assert_1.default)(account_ref01_data_dt0.id === account_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/account/AccountTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TangocardSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['account01', 'account02', 'account03', 'customer01', 'customer02', 'customer03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TANGOCARD_TEST_ACCOUNT_ENTID': idmap,
        'TANGOCARD_TEST_LIVE': 'FALSE',
        'TANGOCARD_TEST_EXPLAIN': 'FALSE',
        'TANGOCARD_APIKEY': '',
        'TANGOCARD_SECRET': '',
    });
    idmap = env['TANGOCARD_TEST_ACCOUNT_ENTID'];
    const live = 'TRUE' === env.TANGOCARD_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TANGOCARD_TEST_ACCOUNT_ENTID'];
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
//# sourceMappingURL=AccountEntity.test.js.map