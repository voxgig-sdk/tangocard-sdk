
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

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"barcodeType":{"a":true,"h":"Barcode Type","n":"barcodeType","r":false,"t":"`$STRING`","key$":"barcodeType","index$":0},"brandKey":{"a":true,"h":"Brand Key","n":"brandKey","r":true,"t":"`$STRING`","key$":"brandKey","index$":1},"brandName":{"a":true,"h":"Brand Name","n":"brandName","r":true,"t":"`$STRING`","key$":"brandName","index$":2},"brandRequirements":{"a":true,"h":"Brand Requirements","n":"brandRequirements","r":true,"t":"`$OBJECT`","key$":"brandRequirements","index$":3},"categories":{"a":true,"h":"Categories","n":"categories","r":true,"t":"`$ARRAY`","key$":"categories","index$":4},"createdDate":{"a":true,"h":"Created Date","n":"createdDate","r":true,"t":"`$STRING`","key$":"createdDate","index$":5},"description":{"a":true,"h":"Description","n":"description","r":true,"t":"`$STRING`","key$":"description","index$":6},"disclaimer":{"a":true,"h":"Disclaimer","n":"disclaimer","r":true,"t":"`$STRING`","key$":"disclaimer","index$":7},"imageUrls":{"a":true,"h":"Image Urls","n":"imageUrls","r":true,"t":"`$OBJECT`","key$":"imageUrls","index$":8},"items":{"a":true,"h":"Items","n":"items","r":true,"t":"`$ARRAY`","key$":"items","index$":9},"lastUpdateDate":{"a":true,"h":"Last Update Date","n":"lastUpdateDate","r":true,"t":"`$STRING`","key$":"lastUpdateDate","index$":10},"shortDescription":{"a":true,"h":"Short Description","n":"shortDescription","r":true,"t":"`$STRING`","key$":"shortDescription","index$":11},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":12},"terms":{"a":true,"h":"Terms","n":"terms","r":true,"t":"`$STRING`","key$":"terms","index$":13}},"name":"catalog","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /choiceProducts/{choiceProductUtid}/catalog","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"choice_product_id","or":"choice_product_utid","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"brand_key","or":"brand_key","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"brand_name","or":"brand_name","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"category_id","or":"category_id","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"k":"query","n":"country","or":"country","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"currency_code","or":"currency_code","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"fulfillment_type","or":"fulfillment_type","r":false,"t":"`$ARRAY`","index$":5},{"a":true,"k":"query","n":"item_attribute","or":"item_attribute","r":false,"t":"`$ARRAY`","index$":6},{"a":true,"k":"query","n":"reward_name","or":"reward_name","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"reward_type","or":"reward_type","r":false,"t":"`$ARRAY`","index$":8},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"utid","or":"utid","r":false,"t":"`$STRING`","index$":10},{"a":true,"ex":true,"k":"query","n":"verbose","or":"verbose","r":false,"t":"`$BOOLEAN`","index$":11}]},"k":"http","m":"GET","o":"/choiceProducts/{choiceProductUtid}/catalog","q":{"exist":["brand_key","brand_name","category_id","choice_product_id","country","currency_code","fulfillment_type","item_attribute","reward_name","reward_type","status","utid","verbose"]},"r":{"param":{"choiceProductUtid":"choice_product_id"}},"s":[{"lit":"choiceProducts"},{"var":"choice_product_id"},{"lit":"catalog"}],"t":{"req":"`reqdata`","res":"`body.brands`"},"index$":0},{"a":true,"co":{"id":"GET /catalogs","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"brand_key","or":"brand_key","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"brand_name","or":"brand_name","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"category_id","or":"category_id","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"k":"query","n":"country","or":"country","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"currency_code","or":"currency_code","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"fulfillment_type","or":"fulfillment_type","r":false,"t":"`$ARRAY`","index$":5},{"a":true,"k":"query","n":"item_attribute","or":"item_attribute","r":false,"t":"`$ARRAY`","index$":6},{"a":true,"k":"query","n":"reward_name","or":"reward_name","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"reward_type","or":"reward_type","r":false,"t":"`$ARRAY`","index$":8},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"utid","or":"utid","r":false,"t":"`$STRING`","index$":10},{"a":true,"ex":true,"k":"query","n":"verbose","or":"verbose","r":false,"t":"`$BOOLEAN`","index$":11}]},"k":"http","m":"GET","o":"/catalogs","q":{"exist":["brand_key","brand_name","category_id","country","currency_code","fulfillment_type","item_attribute","reward_name","reward_type","status","utid","verbose"]},"r":{},"s":[{"lit":"catalogs"}],"t":{"req":"`reqdata`","res":"`body.brands`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.choice_product"]]},"key$":"catalog","name__orig":"catalog","Name":"Catalog","name_":"catalog","name-":"catalog","NAME":"CATALOG","index$":10}, {"active":true,"entity":"catalog","key$":"BasicCatalogFlow","kind":"basic","name":"BasicCatalogFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"catalog_ref01"}}],"index$":0}]}, 'Catalog', {"GET /choiceProducts/{choiceProductUtid}/catalog":{"protocol":"http","parameters":[{"name":"choiceProductUtid","in":"path","description":"Utid - Unique Tango Card ID","required":true,"schema":{"type":"string"},"index$":0},{"name":"verbose","in":"query","description":"When true, will return the additional brand fields: status, disclaimer, description, shortDescription, terms, brandRequirements collection, and imageUrls collection.","required":false,"schema":{"type":"boolean","default":true},"index$":1},{"name":"brandKey","in":"query","description":"Returns the brand and item details for a specific brand ID.","required":false,"schema":{"type":"string"},"index$":2},{"name":"brandName","in":"query","description":"Returns the brand and item details for a specific brand name.","required":false,"schema":{"type":"string"},"index$":3},{"name":"utid","in":"query","description":"Returns the brand and item details for a specific utid. The utid is the unique identifier for a specific reward.","required":false,"schema":{"type":"string"},"index$":4},{"name":"rewardName","in":"query","description":"Returns the brand and item details of the specified reward name.","required":false,"schema":{"type":"string"},"index$":5},{"name":"status","in":"query","description":"Returns all brands and item details with the specified status.  Possible statuses are: \"test\", \"active\", \"inactive\", \"deleted\"","required":false,"schema":{"type":"string"},"index$":6},{"name":"rewardType","in":"query","description":"Returns all brands and item details with the specified rewardType.","required":false,"schema":{"type":"array","enum":["all","gift card","promo","donation","reward link","payment ach","payment card","reporting","payment-paypal","tango open loop","cash equivalent","physical gift card"],"items":{"type":"string","enum":["all","gift card","promo","donation","reward link","payment ach","payment card","reporting","payment-paypal","tango open loop","cash equivalent","physical gift card"]},"uniqueItems":true},"index$":7},{"name":"currencyCode","in":"query","description":"Return all brands and item details associated with a specific currency.","required":false,"schema":{"type":"string"},"index$":8},{"name":"country","in":"query","description":"Returns all brands and item details from a specific country.","required":false,"schema":{"type":"string"},"index$":9},{"name":"fulfillmentType","in":"query","description":"Returns all brands and item details for a specific fulfillment type.","required":false,"deprecated":true,"schema":{"type":"array","items":{"type":"string","enum":["DIGITAL","PHYSICAL"]},"uniqueItems":true},"index$":10},{"name":"itemAttribute","in":"query","description":"Returns all brands and item details for a specific item attribute.","required":false,"schema":{"type":"array","enum":["EMAIL","PHONE","ADDRESS","EMBEDDED"],"items":{"type":"string","enum":["EMAIL","PHONE","ADDRESS","EMBEDDED"]},"uniqueItems":true},"index$":11},{"name":"categoryIds","in":"query","description":"Returns all brands and item details for specific brand categories.","required":false,"schema":{"type":"array","items":{"type":"string","format":"uuid"},"uniqueItems":true},"index$":12}]},"GET /catalogs":{"protocol":"http","parameters":[{"name":"verbose","in":"query","description":"When true, will return the additional brand fields: status, disclaimer, description, shortDescription, terms, brandRequirements collection, and imageUrls collection.","required":false,"schema":{"type":"boolean","default":true},"index$":0},{"name":"brandKey","in":"query","description":"Returns the brand and item details for a specific brand ID.","required":false,"schema":{"type":"string"},"index$":1},{"name":"brandName","in":"query","description":"Returns the brand and item details for a specific brand name.","required":false,"schema":{"type":"string"},"index$":2},{"name":"utid","in":"query","description":"Returns the brand and item details for a specific utid. The utid is the unique identifier for a specific reward.","required":false,"schema":{"type":"string"},"index$":3},{"name":"rewardName","in":"query","description":"Returns the brand and item details of the specified reward name.","required":false,"schema":{"type":"string"},"index$":4},{"name":"status","in":"query","description":"Returns all brands and item details with the specified status.  Possible statuses are: \"test\", \"active\", \"inactive\", \"deleted\"","required":false,"schema":{"type":"string"},"index$":5},{"name":"rewardType","in":"query","description":"Returns all brands and item details with the specified rewardType.","required":false,"schema":{"type":"array","enum":["all","gift card","promo","donation","reward link","payment ach","payment card","reporting","payment-paypal","tango open loop","cash equivalent","physical gift card"],"items":{"type":"string","enum":["all","gift card","promo","donation","reward link","payment ach","payment card","reporting","payment-paypal","tango open loop","cash equivalent","physical gift card"]},"uniqueItems":true},"index$":6},{"name":"currencyCode","in":"query","description":"Return all brands and item details associated with a specific currency.","required":false,"schema":{"type":"string"},"index$":7},{"name":"country","in":"query","description":"Returns all brands and item details from a specific country.","required":false,"schema":{"type":"string"},"index$":8},{"name":"fulfillmentType","in":"query","description":"Returns all brands and item details for a specific fulfillment type.","required":false,"deprecated":true,"schema":{"type":"array","items":{"type":"string","enum":["DIGITAL","PHYSICAL"]},"uniqueItems":true},"index$":9},{"name":"itemAttribute","in":"query","description":"Returns all brands and item details for a specific item attribute.","required":false,"schema":{"type":"array","enum":["EMAIL","PHONE","ADDRESS","EMBEDDED"],"items":{"type":"string","enum":["EMAIL","PHONE","ADDRESS","EMBEDDED"]},"uniqueItems":true},"index$":10},{"name":"categoryIds","in":"query","description":"Returns all brands and item details for specific brand categories.","required":false,"schema":{"type":"array","items":{"type":"string","format":"uuid"},"uniqueItems":true},"index$":11}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let catalog_ref01_data = Object.values(setup.data.existing.catalog)[0]

    // LIST
    const catalog_ref01_ent = client.Catalog()
    const catalog_ref01_match = {}

    const catalog_ref01_list = (await catalog_ref01_ent.list(catalog_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

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
  
