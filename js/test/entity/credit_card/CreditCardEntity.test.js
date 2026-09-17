
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { TangocardSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('CreditCardEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.CreditCard()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"accountIdentifier","req":true,"short":"specify the account this credit card is associated with","type":"`$STRING`","index$":0},{"active":true,"name":"accountNumber","req":true,"type":"`$STRING`","index$":1},{"active":true,"name":"activationDate","req":true,"type":"`$STRING`","index$":2},{"active":true,"name":"billingAddress","req":true,"short":"required Enter the billing address information for the credit card that is being registered","type":"`$OBJECT`","index$":3},{"active":true,"name":"contactInformation","op":{"create":{"req":false,"type":"`$ARRAY`"}},"req":true,"short":"Optional.","type":"`$ARRAY`","index$":4},{"active":true,"name":"createdDate","req":true,"type":"`$STRING`","index$":5},{"active":true,"name":"creditCard","req":true,"short":"required Enter the credit card details that is being registered","type":"`$OBJECT`","index$":6},{"active":true,"name":"customerIdentifier","req":true,"short":"specify the customer associated with the credit card.","type":"`$STRING`","index$":7},{"active":true,"name":"expirationDate","req":true,"type":"`$STRING`","index$":8},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"ipAddress","req":true,"short":"specify the The IP address of the person adding the credit card","type":"`$STRING`","index$":10},{"active":true,"name":"label","req":true,"short":"specify a label for the credit card","type":"`$STRING`","index$":11},{"active":true,"name":"lastFourDigits","req":true,"type":"`$STRING`","index$":12},{"active":true,"name":"status","req":true,"type":"`$STRING`","index$":13},{"active":true,"name":"token","req":true,"type":"`$STRING`","index$":14}],"id":{"field":"id","name":"id"},"name":"credit_card","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /creditCards","json":"{\"operationId\":\"createCreditCard\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"<strong>customerIdentifier</strong> - specify the customer associated with the credit card. Must be the customer the accountIdentifier is associated with.<br/><br/><strong>accountIdentifier</strong> - specify the account this credit card is associated with<br/><br/><strong>label</strong> - specify a label for the credit card<br/><br/><strong>ipAddress</strong> - specify the The IP address of the person adding the credit card<br/><br/><strong>creditCard - number</strong> - specify the account this order will be deducted from<br/><br/><strong>creditCard - expiration</strong> - specify the card expiration date in YYYY-MM format<br/><br/><strong>creditCard - verificationNumber</strong> - specify the 3 or 4-digit card security code on back of card (CVV2, CVC2, or CID)<br/><br/><strong>billingAddress - firstName</strong> - specify the billing address first name<br/><br/><strong>billingAddress - lastName</strong> - specify the billing address last name<br/><br/><strong>billingAddress - addressLine1</strong> - specify the billing address line 1<br/><br/><strong>billingAddress - addressLine2</strong> - Optional. Specify the billing address line 2<br/><br/><strong>billingAddress - city</strong> - specify the billing address city<br/><br/><strong>billingAddress - state</strong> - specify the billing address state<br/><br/><strong>billingAddress - postalCode</strong> - specify the billing address postal code<br/><br/><strong>billingAddress - country</strong> - specify the billing address 2-letter country code<br/><br/><strong>billingAddress - emailAddress</strong> - specify the billing address email<br/><br/><strong>contactInformation - fullName</strong> - Optional. Used for email receipts. Specify the contact full name.<br/><br/><strong>contactInformation - emailAddress</strong> - Optional. Used for email receipts. Specify the contact email address.<br/><br/>\",\"properties\":{\"accountIdentifier\":{\"description\":\"specify the account this credit card is associated with\",\"title\":\"Account Identifier\",\"type\":\"string\"},\"billingAddress\":{\"description\":\"required Enter the billing address information for the credit card that is being registered\",\"properties\":{\"addressLine1\":{\"description\":\"specify the billing address line 1\",\"minLength\":1,\"title\":\"Address Line 1\",\"type\":\"string\"},\"addressLine2\":{\"description\":\"Optional. Specify the billing address line 2\",\"title\":\"Address Line 2\",\"type\":\"string\"},\"city\":{\"description\":\"specify the billing address city\",\"minLength\":1,\"title\":\"City\",\"type\":\"string\"},\"country\":{\"description\":\"specify the billing address 2-letter country code\",\"minLength\":1,\"title\":\"Country\",\"type\":\"string\"},\"emailAddress\":{\"description\":\"specify the billing address email\",\"minLength\":1,\"title\":\"Email Address\",\"type\":\"string\"},\"firstName\":{\"description\":\"specify the billing address first name\",\"minLength\":1,\"title\":\"First Name\",\"type\":\"string\"},\"lastName\":{\"description\":\"specify the billing address last name\",\"minLength\":1,\"title\":\"Last Name\",\"type\":\"string\"},\"postalCode\":{\"description\":\"specify the billing address postal code\",\"minLength\":1,\"title\":\"Postal Code\",\"type\":\"string\"},\"state\":{\"description\":\"specify the billing address state\",\"minLength\":1,\"title\":\"State\",\"type\":\"string\"}},\"required\":[\"addressLine1\",\"city\",\"country\",\"emailAddress\",\"firstName\",\"lastName\",\"postalCode\",\"state\"],\"title\":\"Billing Address\",\"type\":\"object\"},\"contactInformation\":{\"description\":\"Optional.  Enter the contact information of the any person(s) who will be notified if there are issues.\",\"items\":{\"properties\":{\"emailAddress\":{\"description\":\"Optional. Used for email receipts. Specify the contact email address.\",\"title\":\"Contact email address\",\"type\":\"string\"},\"fullName\":{\"description\":\"Optional. Used for email receipts. Specify the contact full name.\",\"title\":\"Contact full name\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":\"Contact Information\",\"type\":\"array\"},\"creditCard\":{\"description\":\"required  Enter the credit card details that is being registered\",\"properties\":{\"expiration\":{\"description\":\"specify the card expiration date in YYYY-MM format\",\"title\":\"Expiration Date\",\"type\":\"string\"},\"number\":{\"description\":\"specify the account this order will be deducted from\",\"title\":\"Credit Card Number\",\"type\":\"string\"},\"verificationNumber\":{\"description\":\"specify the 3 or 4-digit card security code on back of card (CVV2, CVC2, or CID)\",\"title\":\"Verification Number\",\"type\":\"string\"}},\"required\":[\"expiration\",\"number\",\"verificationNumber\"],\"title\":\"Credit Card Information\",\"type\":\"object\"},\"customerIdentifier\":{\"description\":\"specify the customer associated with the credit card. Must be the customer the accountIdentifier is associated with.\",\"title\":\"Customer Identifier\",\"type\":\"string\"},\"ipAddress\":{\"description\":\"specify the The IP address of the person adding the credit card\",\"title\":\"IP Address\",\"type\":\"string\"},\"label\":{\"description\":\"specify a label for the credit card\",\"title\":\"Credit Card Label\",\"type\":\"string\"}},\"required\":[\"accountIdentifier\",\"billingAddress\",\"creditCard\",\"customerIdentifier\",\"ipAddress\",\"label\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"accountIdentifier\":{\"title\":\"Account Identifier\",\"type\":\"string\"},\"accountNumber\":{\"title\":\"Account Number\",\"type\":\"string\"},\"activationDate\":{\"title\":\"Date when the the credit card will be activated for use in funding\",\"type\":\"string\"},\"contactInformation\":{\"items\":{\"properties\":{\"emailAddress\":{\"title\":\"Contact email address\",\"type\":\"string\"},\"fullName\":{\"title\":\"Contact full name\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":\"List of contact information for funding confirmation emails\",\"type\":\"array\"},\"createdDate\":{\"title\":\"Date the credit card was created\",\"type\":\"string\"},\"customerIdentifier\":{\"title\":\"Customer Identifier\",\"type\":\"string\"},\"expirationDate\":{\"title\":\"Expiration date of the registered card in YYYY-MM format\",\"type\":\"string\"},\"label\":{\"title\":\"Credit Card label\",\"type\":\"string\"},\"lastFourDigits\":{\"title\":\"Last four digits of the registered credit card\",\"type\":\"string\"},\"status\":{\"title\":\"Status of the registered card\",\"type\":\"string\"},\"token\":{\"title\":\"Credit Card token identifier\",\"type\":\"string\"}},\"required\":[\"accountIdentifier\",\"accountNumber\",\"activationDate\",\"contactInformation\",\"createdDate\",\"customerIdentifier\",\"expirationDate\",\"label\",\"lastFourDigits\",\"status\",\"token\"],\"type\":\"object\"}}},\"description\":\"Created\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Forbidden\"},\"422\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unprocessable Entity\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Internal Server Error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Service Unavailable\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/creditCards","segments":[{"lit":"creditCards"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"account_identifier","orig":"account_identifier","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"account_number","orig":"account_number","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"customer_identifier","orig":"customer_identifier","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"email_address","orig":"email_address","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"expiration_date","orig":"expiration_date","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"full_name","orig":"full_name","reqd":false,"type":"`$STRING`","index$":5},{"active":true,"kind":"query","name":"label","orig":"label","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"kind":"query","name":"last_four_digit","orig":"last_four_digit","reqd":false,"type":"`$STRING`","index$":7},{"active":true,"kind":"query","name":"max_result","orig":"max_result","reqd":false,"type":"`$INTEGER`","index$":8},{"active":true,"kind":"query","name":"next_cursor","orig":"next_cursor","reqd":false,"type":"`$STRING`","index$":9},{"active":true,"kind":"query","name":"paginate","orig":"paginate","reqd":false,"type":"`$BOOLEAN`","index$":10},{"active":true,"kind":"query","name":"prev_cursor","orig":"prev_cursor","reqd":false,"type":"`$STRING`","index$":11},{"active":true,"example":"false","kind":"query","name":"show_inactive","orig":"show_inactive","reqd":false,"type":"`$STRING`","index$":12},{"active":true,"kind":"query","name":"status","orig":"status","reqd":false,"type":"`$STRING`","index$":13},{"active":true,"kind":"query","name":"token","orig":"token","reqd":false,"type":"`$STRING`","index$":14}]},"contract":{"id":"GET /creditCards","json":"{\"operationId\":\"listCreditCards\",\"parameters\":[{\"description\":\"Whether to paginate the results or not. Defaults to false.\",\"in\":\"query\",\"name\":\"paginate\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"The cursor to use for the previous page of results. This will be ignored if paginate is false.\",\"in\":\"query\",\"name\":\"prevCursor\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"The cursor to use for the next page of results. This will be ignored if paginate is false.\",\"in\":\"query\",\"name\":\"nextCursor\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"The maximum number of results to return. The default is 10, and the maximum is 200. This will be ignored if paginate is false.\",\"in\":\"query\",\"name\":\"maxResults\",\"required\":false,\"schema\":{\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"Show inactive cards (true or false).\",\"in\":\"query\",\"name\":\"showInactive\",\"required\":false,\"schema\":{\"default\":\"false\",\"type\":\"string\"}},{\"description\":\"Specify the account number to be queried.\",\"in\":\"query\",\"name\":\"accountNumber\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Get cards associated with a specific account\",\"in\":\"query\",\"name\":\"accountIdentifier\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Specify the customer identifier to be queried.\",\"in\":\"query\",\"name\":\"customerIdentifier\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Credit card token to be queried\",\"in\":\"query\",\"name\":\"token\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Specify the expiration date of the credit card to be queried.\",\"in\":\"query\",\"name\":\"expirationDate\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Get cards with specific status. When set, this option will override the showInactive parameter\",\"in\":\"query\",\"name\":\"status\",\"required\":false,\"schema\":{\"enum\":[\"ACTIVE\",\"DELETED\"],\"type\":\"string\"}},{\"description\":\"Specify the contact email address to be queried.\",\"in\":\"query\",\"name\":\"emailAddress\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Contact person's full name to be queried.\",\"in\":\"query\",\"name\":\"fullName\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Label for the credit card to be queried.\",\"in\":\"query\",\"name\":\"label\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"The last four digits of the credit card to be queried.\",\"in\":\"query\",\"name\":\"lastFourDigits\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"items\":{\"properties\":{\"accountIdentifier\":{\"title\":\"Account Identifier\",\"type\":\"string\"},\"accountNumber\":{\"title\":\"Account Number\",\"type\":\"string\"},\"activationDate\":{\"title\":\"Date when the the credit card will be activated for use in funding\",\"type\":\"string\"},\"contactInformation\":{\"items\":{\"properties\":{\"emailAddress\":{\"title\":\"Contact email address\",\"type\":\"string\"},\"fullName\":{\"title\":\"Contact full name\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":\"List of contact information for funding confirmation emails\",\"type\":\"array\"},\"createdDate\":{\"title\":\"Date the credit card was created\",\"type\":\"string\"},\"customerIdentifier\":{\"title\":\"Customer Identifier\",\"type\":\"string\"},\"expirationDate\":{\"title\":\"Expiration date of the registered card in YYYY-MM format\",\"type\":\"string\"},\"label\":{\"title\":\"Credit Card label\",\"type\":\"string\"},\"lastFourDigits\":{\"title\":\"Last four digits of the registered credit card\",\"type\":\"string\"},\"status\":{\"title\":\"Status of the registered card\",\"type\":\"string\"},\"token\":{\"title\":\"Credit Card token identifier\",\"type\":\"string\"}},\"required\":[\"accountIdentifier\",\"accountNumber\",\"activationDate\",\"contactInformation\",\"createdDate\",\"customerIdentifier\",\"expirationDate\",\"label\",\"lastFourDigits\",\"status\",\"token\"],\"type\":\"object\"},\"properties\":{\"empty\":{\"type\":\"boolean\"},\"first\":{\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/items/properties\"},\"required\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/items/required\"},\"type\":\"object\"},\"last\":{\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/items/properties\"},\"required\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/items/required\"},\"type\":\"object\"}},\"title\":\"Non Paginated\",\"type\":\"array\"},{\"properties\":{\"items\":{\"items\":{\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/items/properties\"},\"required\":{\"$ref\":\"#/responses/200/content/application~1json/schema/oneOf/0/items/required\"},\"type\":\"object\"},\"type\":\"array\"},\"maxResults\":{\"format\":\"int32\",\"type\":\"integer\"},\"nextCursor\":{\"type\":\"string\"},\"nextPageAvailable\":{\"type\":\"boolean\"},\"numberOfElements\":{\"format\":\"int32\",\"type\":\"integer\"},\"prevCursor\":{\"type\":\"string\"},\"prevPageAvailable\":{\"type\":\"boolean\"}},\"title\":\"Paginated\",\"type\":\"object\"}]}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Forbidden\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Internal Server Error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Service Unavailable\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/creditCards","segments":[{"lit":"creditCards"}],"select":{"exist":["account_identifier","account_number","customer_identifier","email_address","expiration_date","full_name","label","last_four_digit","max_result","next_cursor","paginate","prev_cursor","show_inactive","status","token"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"token","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /creditCards/{token}","json":"{\"operationId\":\"getCreditCard\",\"parameters\":[{\"description\":\"Credit card token\",\"in\":\"path\",\"name\":\"token\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"accountIdentifier\":{\"title\":\"Account Identifier\",\"type\":\"string\"},\"accountNumber\":{\"title\":\"Account Number\",\"type\":\"string\"},\"activationDate\":{\"title\":\"Date when the the credit card will be activated for use in funding\",\"type\":\"string\"},\"contactInformation\":{\"items\":{\"properties\":{\"emailAddress\":{\"title\":\"Contact email address\",\"type\":\"string\"},\"fullName\":{\"title\":\"Contact full name\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":\"List of contact information for funding confirmation emails\",\"type\":\"array\"},\"createdDate\":{\"title\":\"Date the credit card was created\",\"type\":\"string\"},\"customerIdentifier\":{\"title\":\"Customer Identifier\",\"type\":\"string\"},\"expirationDate\":{\"title\":\"Expiration date of the registered card in YYYY-MM format\",\"type\":\"string\"},\"label\":{\"title\":\"Credit Card label\",\"type\":\"string\"},\"lastFourDigits\":{\"title\":\"Last four digits of the registered credit card\",\"type\":\"string\"},\"status\":{\"title\":\"Status of the registered card\",\"type\":\"string\"},\"token\":{\"title\":\"Credit Card token identifier\",\"type\":\"string\"}},\"required\":[\"accountIdentifier\",\"accountNumber\",\"activationDate\",\"contactInformation\",\"createdDate\",\"customerIdentifier\",\"expirationDate\",\"label\",\"lastFourDigits\",\"status\",\"token\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Forbidden\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Not Found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Internal Server Error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Service Unavailable\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/creditCards/{token}","rename":{"param":{"token":"id"}},"segments":[{"lit":"creditCards"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"credit_card","name__orig":"credit_card","Name":"CreditCard","name_":"credit_card","name-":"credit-card","NAME":"CREDIT_CARD","index$":16}, {"active":true,"entity":"credit_card","key$":"BasicCreditCardFlow","kind":"basic","name":"BasicCreditCardFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"credit_card_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"credit_card_ref01","srcdatavar":"credit_card_ref01_data","suffix":"_dt0"},"match":{"id":"credit_card01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-credit_card_ref01"}}],"index$":1}]}, 'CreditCard')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const credit_card_ref01_ent = client.CreditCard()
    let credit_card_ref01_data = setup.data.new.credit_card['credit_card_ref01']

    credit_card_ref01_data = (await credit_card_ref01_ent.create(credit_card_ref01_data)).data()
    assert(null != credit_card_ref01_data.id)


    // LOAD
    const credit_card_ref01_match_dt0 = {}
    credit_card_ref01_match_dt0.id = credit_card_ref01_data.id
    const credit_card_ref01_data_dt0 = (await credit_card_ref01_ent.load(credit_card_ref01_match_dt0)).data()
    assert(credit_card_ref01_data_dt0.id === credit_card_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/credit_card/CreditCardTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = TangocardSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['credit_card01','credit_card02','credit_card03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_CREDIT_CARD_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
  })

  idmap = env['TANGOCARD_TEST_CREDIT_CARD_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_CREDIT_CARD_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new TangocardSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.TANGOCARD_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
