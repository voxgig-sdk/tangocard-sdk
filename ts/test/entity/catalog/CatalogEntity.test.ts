

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { TangocardSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('CatalogEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.Catalog()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'catalog.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"barcodeType","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"brandKey","req":true,"type":"`$STRING`","index$":1},{"active":true,"name":"brandName","req":true,"type":"`$STRING`","index$":2},{"active":true,"name":"brandRequirements","req":true,"type":"`$OBJECT`","index$":3},{"active":true,"name":"categories","req":true,"type":"`$ARRAY`","index$":4},{"active":true,"name":"createdDate","req":true,"type":"`$STRING`","index$":5},{"active":true,"name":"description","req":true,"type":"`$STRING`","index$":6},{"active":true,"name":"disclaimer","req":true,"type":"`$STRING`","index$":7},{"active":true,"name":"imageUrls","req":true,"type":"`$OBJECT`","index$":8},{"active":true,"name":"items","req":true,"type":"`$ARRAY`","index$":9},{"active":true,"name":"lastUpdateDate","req":true,"type":"`$STRING`","index$":10},{"active":true,"name":"shortDescription","req":true,"type":"`$STRING`","index$":11},{"active":true,"name":"status","req":true,"type":"`$STRING`","index$":12},{"active":true,"name":"terms","req":true,"type":"`$STRING`","index$":13}],"name":"catalog","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"choice_product_id","orig":"choice_product_utid","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"brand_key","orig":"brand_key","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"brand_name","orig":"brand_name","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"category_id","orig":"category_id","reqd":false,"type":"`$ARRAY`","index$":2},{"active":true,"kind":"query","name":"country","orig":"country","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"currency_code","orig":"currency_code","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"fulfillment_type","orig":"fulfillment_type","reqd":false,"type":"`$ARRAY`","index$":5},{"active":true,"kind":"query","name":"item_attribute","orig":"item_attribute","reqd":false,"type":"`$ARRAY`","index$":6},{"active":true,"kind":"query","name":"reward_name","orig":"reward_name","reqd":false,"type":"`$STRING`","index$":7},{"active":true,"kind":"query","name":"reward_type","orig":"reward_type","reqd":false,"type":"`$ARRAY`","index$":8},{"active":true,"kind":"query","name":"status","orig":"status","reqd":false,"type":"`$STRING`","index$":9},{"active":true,"kind":"query","name":"utid","orig":"utid","reqd":false,"type":"`$STRING`","index$":10},{"active":true,"example":true,"kind":"query","name":"verbose","orig":"verbose","reqd":false,"type":"`$BOOLEAN`","index$":11}]},"contract":{"id":"GET /choiceProducts/{choiceProductUtid}/catalog","json":"{\"operationId\":\"getChoiceProductCatalog\",\"parameters\":[{\"description\":\"Utid - Unique Tango Card ID\",\"in\":\"path\",\"name\":\"choiceProductUtid\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"When true, will return the additional brand fields: status, disclaimer, description, shortDescription, terms, brandRequirements collection, and imageUrls collection.\",\"in\":\"query\",\"name\":\"verbose\",\"required\":false,\"schema\":{\"default\":true,\"type\":\"boolean\"}},{\"description\":\"Returns the brand and item details for a specific brand ID.\",\"in\":\"query\",\"name\":\"brandKey\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Returns the brand and item details for a specific brand name.\",\"in\":\"query\",\"name\":\"brandName\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Returns the brand and item details for a specific utid. The utid is the unique identifier for a specific reward.\",\"in\":\"query\",\"name\":\"utid\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Returns the brand and item details of the specified reward name.\",\"in\":\"query\",\"name\":\"rewardName\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Returns all brands and item details with the specified status.  Possible statuses are: \\\"test\\\", \\\"active\\\", \\\"inactive\\\", \\\"deleted\\\"\",\"in\":\"query\",\"name\":\"status\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Returns all brands and item details with the specified rewardType.\",\"in\":\"query\",\"name\":\"rewardType\",\"required\":false,\"schema\":{\"enum\":[\"all\",\"gift card\",\"promo\",\"donation\",\"reward link\",\"payment ach\",\"payment card\",\"reporting\",\"payment-paypal\",\"tango open loop\",\"cash equivalent\",\"physical gift card\"],\"items\":{\"enum\":[\"all\",\"gift card\",\"promo\",\"donation\",\"reward link\",\"payment ach\",\"payment card\",\"reporting\",\"payment-paypal\",\"tango open loop\",\"cash equivalent\",\"physical gift card\"],\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}},{\"description\":\"Return all brands and item details associated with a specific currency.\",\"in\":\"query\",\"name\":\"currencyCode\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Returns all brands and item details from a specific country.\",\"in\":\"query\",\"name\":\"country\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"deprecated\":true,\"description\":\"Returns all brands and item details for a specific fulfillment type.\",\"in\":\"query\",\"name\":\"fulfillmentType\",\"required\":false,\"schema\":{\"items\":{\"enum\":[\"DIGITAL\",\"PHYSICAL\"],\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}},{\"description\":\"Returns all brands and item details for a specific item attribute.\",\"in\":\"query\",\"name\":\"itemAttribute\",\"required\":false,\"schema\":{\"enum\":[\"EMAIL\",\"PHONE\",\"ADDRESS\",\"EMBEDDED\"],\"items\":{\"enum\":[\"EMAIL\",\"PHONE\",\"ADDRESS\",\"EMBEDDED\"],\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}},{\"description\":\"Returns all brands and item details for specific brand categories.\",\"in\":\"query\",\"name\":\"categoryIds\",\"required\":false,\"schema\":{\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"brands\":{\"items\":{\"properties\":{\"barcodeType\":{\"title\":\"Barcode type code for this brand\",\"type\":\"string\"},\"brandKey\":{\"title\":\"Brand Key\",\"type\":\"string\"},\"brandName\":{\"title\":\"Brand Display Name\",\"type\":\"string\"},\"brandRequirements\":{\"properties\":{\"alwaysShowDisclaimer\":{\"title\":\"Always Show Disclaimer\",\"type\":\"boolean\"},\"disclaimerInstructions\":{\"title\":\"Disclaimer Instructions\",\"type\":\"string\"},\"displayInstructions\":{\"title\":\"Display Instructions\",\"type\":\"string\"},\"termsAndConditionsInstructions\":{\"title\":\"Terms and Conditions Instructions\",\"type\":\"string\"}},\"required\":[\"alwaysShowDisclaimer\",\"disclaimerInstructions\",\"displayInstructions\",\"termsAndConditionsInstructions\"],\"title\":\"Brand Requirements\",\"type\":\"object\"},\"categories\":{\"items\":{\"properties\":{\"description\":{\"title\":\"Description\",\"type\":\"string\"},\"identifier\":{\"format\":\"uuid\",\"title\":\"Identifier\",\"type\":\"string\"}},\"required\":[\"description\",\"identifier\"],\"type\":\"object\"},\"title\":\"List of categories associated with this Brand\",\"type\":\"array\"},\"createdDate\":{\"title\":\"Created Date\",\"type\":\"string\"},\"description\":{\"title\":\"Brand Description\",\"type\":\"string\"},\"disclaimer\":{\"title\":\"Brand Disclaimer\",\"type\":\"string\"},\"imageUrls\":{\"additionalProperties\":{\"type\":\"string\"},\"title\":\"Brand Images in various sizes\",\"type\":\"object\"},\"items\":{\"items\":{\"properties\":{\"attributes\":{\"items\":{\"type\":\"string\"},\"title\":\"Attributes\",\"type\":\"array\",\"uniqueItems\":true},\"countries\":{\"items\":{\"type\":\"string\"},\"title\":\"Countries\",\"type\":\"array\",\"uniqueItems\":true},\"createdDate\":{\"title\":\"Created Date\",\"type\":\"string\"},\"credentialTypes\":{\"items\":{\"type\":\"string\"},\"title\":\"Credential Types\",\"type\":\"array\",\"uniqueItems\":true},\"currencyCode\":{\"title\":\"Currency Code\",\"type\":\"string\"},\"exchangeRateRule\":{\"title\":\"Exchange Rate Rule\",\"type\":\"string\"},\"faceValue\":{\"title\":\"Face Value\",\"type\":\"number\"},\"fee\":{\"properties\":{\"type\":{\"type\":\"string\"},\"value\":{\"type\":\"number\"}},\"title\":\"Fee\",\"type\":\"object\"},\"fulfillmentType\":{\"deprecated\":true,\"enum\":[\"DIGITAL\",\"PHYSICAL\"],\"title\":\"Fulfillment Type\",\"type\":\"string\"},\"isExpirable\":{\"title\":\"Item Is Expirable\",\"type\":\"boolean\"},\"isWholeAmountValueRequired\":{\"title\":\"Whole Value Required\",\"type\":\"boolean\"},\"lastUpdateDate\":{\"title\":\"Last Updated Date\",\"type\":\"string\"},\"maxValue\":{\"title\":\"Max Value\",\"type\":\"number\"},\"minValue\":{\"title\":\"Min Value\",\"type\":\"number\"},\"quantityConstraints\":{\"properties\":{\"maxQuantity\":{\"example\":1,\"format\":\"int32\",\"title\":\"Maximum Quantity\",\"type\":\"integer\"},\"minQuantity\":{\"example\":1,\"format\":\"int32\",\"title\":\"Minimum Quantity\",\"type\":\"integer\"}},\"required\":[\"maxQuantity\",\"minQuantity\"],\"title\":\"Quantity Constraints\",\"type\":\"object\"},\"redemptionInstructions\":{\"title\":\"Redemption Instructions\",\"type\":\"string\"},\"rewardName\":{\"title\":\"Reward Name\",\"type\":\"string\"},\"rewardType\":{\"title\":\"Reward Type\",\"type\":\"string\"},\"status\":{\"title\":\"Status\",\"type\":\"string\"},\"utid\":{\"title\":\"Utid - Unique Tango Card ID.\",\"type\":\"string\"},\"valueType\":{\"title\":\"Value Type\",\"type\":\"string\"}},\"required\":[\"attributes\",\"countries\",\"createdDate\",\"credentialTypes\",\"currencyCode\",\"fee\",\"isExpirable\",\"isWholeAmountValueRequired\",\"lastUpdateDate\",\"quantityConstraints\",\"redemptionInstructions\",\"rewardName\",\"rewardType\",\"status\",\"utid\",\"valueType\"],\"type\":\"object\"},\"title\":\"List of Items associated with this Brand\",\"type\":\"array\"},\"lastUpdateDate\":{\"title\":\"Last Updated Date\",\"type\":\"string\"},\"shortDescription\":{\"title\":\"Short Description\",\"type\":\"string\"},\"status\":{\"title\":\"Brand Status\",\"type\":\"string\"},\"terms\":{\"title\":\"Brand Terms and Conditions\",\"type\":\"string\"}},\"required\":[\"brandKey\",\"brandName\",\"categories\",\"createdDate\",\"description\",\"disclaimer\",\"imageUrls\",\"items\",\"lastUpdateDate\",\"shortDescription\",\"status\",\"terms\"],\"type\":\"object\"},\"title\":\"List of Brands inside of this Catalog\",\"type\":\"array\"},\"catalogName\":{\"title\":\"Catalog Name\",\"type\":\"string\"}},\"required\":[\"brands\",\"catalogName\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Forbidden\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/choiceProducts/{choiceProductUtid}/catalog","rename":{"param":{"choiceProductUtid":"choice_product_id"}},"segments":[{"lit":"choiceProducts"},{"var":"choice_product_id"},{"lit":"catalog"}],"select":{"exist":["brand_key","brand_name","category_id","choice_product_id","country","currency_code","fulfillment_type","item_attribute","reward_name","reward_type","status","utid","verbose"]},"transform":{"req":"`reqdata`","res":"`body.brands`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"brand_key","orig":"brand_key","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"brand_name","orig":"brand_name","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"category_id","orig":"category_id","reqd":false,"type":"`$ARRAY`","index$":2},{"active":true,"kind":"query","name":"country","orig":"country","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"currency_code","orig":"currency_code","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"fulfillment_type","orig":"fulfillment_type","reqd":false,"type":"`$ARRAY`","index$":5},{"active":true,"kind":"query","name":"item_attribute","orig":"item_attribute","reqd":false,"type":"`$ARRAY`","index$":6},{"active":true,"kind":"query","name":"reward_name","orig":"reward_name","reqd":false,"type":"`$STRING`","index$":7},{"active":true,"kind":"query","name":"reward_type","orig":"reward_type","reqd":false,"type":"`$ARRAY`","index$":8},{"active":true,"kind":"query","name":"status","orig":"status","reqd":false,"type":"`$STRING`","index$":9},{"active":true,"kind":"query","name":"utid","orig":"utid","reqd":false,"type":"`$STRING`","index$":10},{"active":true,"example":true,"kind":"query","name":"verbose","orig":"verbose","reqd":false,"type":"`$BOOLEAN`","index$":11}]},"contract":{"id":"GET /catalogs","json":"{\"operationId\":\"getCatalog\",\"parameters\":[{\"description\":\"When true, will return the additional brand fields: status, disclaimer, description, shortDescription, terms, brandRequirements collection, and imageUrls collection.\",\"in\":\"query\",\"name\":\"verbose\",\"required\":false,\"schema\":{\"default\":true,\"type\":\"boolean\"}},{\"description\":\"Returns the brand and item details for a specific brand ID.\",\"in\":\"query\",\"name\":\"brandKey\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Returns the brand and item details for a specific brand name.\",\"in\":\"query\",\"name\":\"brandName\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Returns the brand and item details for a specific utid. The utid is the unique identifier for a specific reward.\",\"in\":\"query\",\"name\":\"utid\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Returns the brand and item details of the specified reward name.\",\"in\":\"query\",\"name\":\"rewardName\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Returns all brands and item details with the specified status.  Possible statuses are: \\\"test\\\", \\\"active\\\", \\\"inactive\\\", \\\"deleted\\\"\",\"in\":\"query\",\"name\":\"status\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Returns all brands and item details with the specified rewardType.\",\"in\":\"query\",\"name\":\"rewardType\",\"required\":false,\"schema\":{\"enum\":[\"all\",\"gift card\",\"promo\",\"donation\",\"reward link\",\"payment ach\",\"payment card\",\"reporting\",\"payment-paypal\",\"tango open loop\",\"cash equivalent\",\"physical gift card\"],\"items\":{\"enum\":[\"all\",\"gift card\",\"promo\",\"donation\",\"reward link\",\"payment ach\",\"payment card\",\"reporting\",\"payment-paypal\",\"tango open loop\",\"cash equivalent\",\"physical gift card\"],\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}},{\"description\":\"Return all brands and item details associated with a specific currency.\",\"in\":\"query\",\"name\":\"currencyCode\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Returns all brands and item details from a specific country.\",\"in\":\"query\",\"name\":\"country\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"deprecated\":true,\"description\":\"Returns all brands and item details for a specific fulfillment type.\",\"in\":\"query\",\"name\":\"fulfillmentType\",\"required\":false,\"schema\":{\"items\":{\"enum\":[\"DIGITAL\",\"PHYSICAL\"],\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}},{\"description\":\"Returns all brands and item details for a specific item attribute.\",\"in\":\"query\",\"name\":\"itemAttribute\",\"required\":false,\"schema\":{\"enum\":[\"EMAIL\",\"PHONE\",\"ADDRESS\",\"EMBEDDED\"],\"items\":{\"enum\":[\"EMAIL\",\"PHONE\",\"ADDRESS\",\"EMBEDDED\"],\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}},{\"description\":\"Returns all brands and item details for specific brand categories.\",\"in\":\"query\",\"name\":\"categoryIds\",\"required\":false,\"schema\":{\"items\":{\"format\":\"uuid\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"brands\":{\"items\":{\"properties\":{\"barcodeType\":{\"title\":\"Barcode type code for this brand\",\"type\":\"string\"},\"brandKey\":{\"title\":\"Brand Key\",\"type\":\"string\"},\"brandName\":{\"title\":\"Brand Display Name\",\"type\":\"string\"},\"brandRequirements\":{\"properties\":{\"alwaysShowDisclaimer\":{\"title\":\"Always Show Disclaimer\",\"type\":\"boolean\"},\"disclaimerInstructions\":{\"title\":\"Disclaimer Instructions\",\"type\":\"string\"},\"displayInstructions\":{\"title\":\"Display Instructions\",\"type\":\"string\"},\"termsAndConditionsInstructions\":{\"title\":\"Terms and Conditions Instructions\",\"type\":\"string\"}},\"required\":[\"alwaysShowDisclaimer\",\"disclaimerInstructions\",\"displayInstructions\",\"termsAndConditionsInstructions\"],\"title\":\"Brand Requirements\",\"type\":\"object\"},\"categories\":{\"items\":{\"properties\":{\"description\":{\"title\":\"Description\",\"type\":\"string\"},\"identifier\":{\"format\":\"uuid\",\"title\":\"Identifier\",\"type\":\"string\"}},\"required\":[\"description\",\"identifier\"],\"type\":\"object\"},\"title\":\"List of categories associated with this Brand\",\"type\":\"array\"},\"createdDate\":{\"title\":\"Created Date\",\"type\":\"string\"},\"description\":{\"title\":\"Brand Description\",\"type\":\"string\"},\"disclaimer\":{\"title\":\"Brand Disclaimer\",\"type\":\"string\"},\"imageUrls\":{\"additionalProperties\":{\"type\":\"string\"},\"title\":\"Brand Images in various sizes\",\"type\":\"object\"},\"items\":{\"items\":{\"properties\":{\"attributes\":{\"items\":{\"type\":\"string\"},\"title\":\"Attributes\",\"type\":\"array\",\"uniqueItems\":true},\"countries\":{\"items\":{\"type\":\"string\"},\"title\":\"Countries\",\"type\":\"array\",\"uniqueItems\":true},\"createdDate\":{\"title\":\"Created Date\",\"type\":\"string\"},\"credentialTypes\":{\"items\":{\"type\":\"string\"},\"title\":\"Credential Types\",\"type\":\"array\",\"uniqueItems\":true},\"currencyCode\":{\"title\":\"Currency Code\",\"type\":\"string\"},\"exchangeRateRule\":{\"title\":\"Exchange Rate Rule\",\"type\":\"string\"},\"faceValue\":{\"title\":\"Face Value\",\"type\":\"number\"},\"fee\":{\"properties\":{\"type\":{\"type\":\"string\"},\"value\":{\"type\":\"number\"}},\"title\":\"Fee\",\"type\":\"object\"},\"fulfillmentType\":{\"deprecated\":true,\"enum\":[\"DIGITAL\",\"PHYSICAL\"],\"title\":\"Fulfillment Type\",\"type\":\"string\"},\"isExpirable\":{\"title\":\"Item Is Expirable\",\"type\":\"boolean\"},\"isWholeAmountValueRequired\":{\"title\":\"Whole Value Required\",\"type\":\"boolean\"},\"lastUpdateDate\":{\"title\":\"Last Updated Date\",\"type\":\"string\"},\"maxValue\":{\"title\":\"Max Value\",\"type\":\"number\"},\"minValue\":{\"title\":\"Min Value\",\"type\":\"number\"},\"quantityConstraints\":{\"properties\":{\"maxQuantity\":{\"example\":1,\"format\":\"int32\",\"title\":\"Maximum Quantity\",\"type\":\"integer\"},\"minQuantity\":{\"example\":1,\"format\":\"int32\",\"title\":\"Minimum Quantity\",\"type\":\"integer\"}},\"required\":[\"maxQuantity\",\"minQuantity\"],\"title\":\"Quantity Constraints\",\"type\":\"object\"},\"redemptionInstructions\":{\"title\":\"Redemption Instructions\",\"type\":\"string\"},\"rewardName\":{\"title\":\"Reward Name\",\"type\":\"string\"},\"rewardType\":{\"title\":\"Reward Type\",\"type\":\"string\"},\"status\":{\"title\":\"Status\",\"type\":\"string\"},\"utid\":{\"title\":\"Utid - Unique Tango Card ID.\",\"type\":\"string\"},\"valueType\":{\"title\":\"Value Type\",\"type\":\"string\"}},\"required\":[\"attributes\",\"countries\",\"createdDate\",\"credentialTypes\",\"currencyCode\",\"fee\",\"isExpirable\",\"isWholeAmountValueRequired\",\"lastUpdateDate\",\"quantityConstraints\",\"redemptionInstructions\",\"rewardName\",\"rewardType\",\"status\",\"utid\",\"valueType\"],\"type\":\"object\"},\"title\":\"List of Items associated with this Brand\",\"type\":\"array\"},\"lastUpdateDate\":{\"title\":\"Last Updated Date\",\"type\":\"string\"},\"shortDescription\":{\"title\":\"Short Description\",\"type\":\"string\"},\"status\":{\"title\":\"Brand Status\",\"type\":\"string\"},\"terms\":{\"title\":\"Brand Terms and Conditions\",\"type\":\"string\"}},\"required\":[\"brandKey\",\"brandName\",\"categories\",\"createdDate\",\"description\",\"disclaimer\",\"imageUrls\",\"items\",\"lastUpdateDate\",\"shortDescription\",\"status\",\"terms\"],\"type\":\"object\"},\"title\":\"List of Brands inside of this Catalog\",\"type\":\"array\"},\"catalogName\":{\"title\":\"Catalog Name\",\"type\":\"string\"}},\"required\":[\"brands\",\"catalogName\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Forbidden\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Internal Server Error\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Service Unavailable\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/catalogs","segments":[{"lit":"catalogs"}],"select":{"exist":["brand_key","brand_name","category_id","country","currency_code","fulfillment_type","item_attribute","reward_name","reward_type","status","utid","verbose"]},"transform":{"req":"`reqdata`","res":"`body.brands`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["choice_product"]]},"key$":"catalog","name__orig":"catalog","Name":"Catalog","name_":"catalog","name-":"catalog","NAME":"CATALOG","index$":10}, {"active":true,"entity":"catalog","key$":"BasicCatalogFlow","kind":"basic","name":"BasicCatalogFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"catalog_ref01"}}],"index$":0}]}, 'Catalog')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let catalog_ref01_data = Object.values(setup.data.existing.catalog)[0] as any

    // LIST
    const catalog_ref01_ent = client.Catalog()
    const catalog_ref01_match: any = {}

    const catalog_ref01_list = (await catalog_ref01_ent.list(catalog_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/catalog/CatalogTestData.json')

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
    ['catalog01','catalog02','catalog03','choice_product01','choice_product02','choice_product03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_CATALOG_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
    'TANGOCARD_SECRET': '',
  })

  idmap = env['TANGOCARD_TEST_CATALOG_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_CATALOG_ENTID']
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
        secret: env.TANGOCARD_SECRET,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
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
  
