
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


describe('ExchangeRatesWithDisclaimerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.ExchangeRatesWithDisclaimer()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"baseCurrency":{"a":true,"h":"Base Currency","n":"baseCurrency","r":true,"t":"`$STRING`","key$":"baseCurrency","index$":0},"baseFx":{"a":true,"h":"Base Fx","n":"baseFx","r":true,"t":"`$STRING`","key$":"baseFx","index$":1},"lastModifiedDate":{"a":true,"fo":"date-time","h":"Last Modified Date","n":"lastModifiedDate","r":true,"t":"`$STRING`","key$":"lastModifiedDate","index$":2},"rewardCurrency":{"a":true,"h":"Reward Currency","n":"rewardCurrency","r":true,"t":"`$STRING`","key$":"rewardCurrency","index$":3}},"name":"exchange_rates_with_disclaimer","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /exchangerates","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"base_currency","or":"base_currency","r":false,"t":"`$ARRAY`","index$":0},{"a":true,"k":"query","n":"max_result","or":"max_result","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"next_cursor","or":"next_cursor","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"paginate","or":"paginate","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"query","n":"prev_cursor","or":"prev_cursor","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"reward_currency","or":"reward_currency","r":false,"t":"`$ARRAY`","index$":5}]},"k":"http","m":"GET","o":"/exchangerates","q":{"exist":["base_currency","max_result","next_cursor","paginate","prev_cursor","reward_currency"]},"r":{},"s":[{"lit":"exchangerates"}],"t":{"req":"`reqdata`","res":"`body.exchangeRates`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"exchange_rates_with_disclaimer","name__orig":"exchange_rates_with_disclaimer","Name":"ExchangeRatesWithDisclaimer","name_":"exchange_rates_with_disclaimer","name-":"exchange-rates-with-disclaimer","NAME":"EXCHANGE_RATES_WITH_DISCLAIMER","index$":21}, {"active":true,"entity":"exchange_rates_with_disclaimer","key$":"BasicExchangeRatesWithDisclaimerFlow","kind":"basic","name":"BasicExchangeRatesWithDisclaimerFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"exchange_rates_with_disclaimer_ref01"}}],"index$":0}]}, 'ExchangeRatesWithDisclaimer', {"GET /exchangerates":{"protocol":"http","parameters":[{"name":"paginate","in":"query","description":"Whether to paginate the results or not. Defaults to false.","required":false,"schema":{"type":"boolean"},"index$":0},{"name":"prevCursor","in":"query","description":"The cursor to use for the previous page of results. This will be ignored if paginate is false.","required":false,"schema":{"type":"string"},"index$":1},{"name":"nextCursor","in":"query","description":"The cursor to use for the next page of results. This will be ignored if paginate is false.","required":false,"schema":{"type":"string"},"index$":2},{"name":"maxResults","in":"query","description":"The maximum number of results to return. The default is 10, and the maximum is 200. This will be ignored if paginate is false.","required":false,"schema":{"type":"integer","format":"int32"},"index$":3},{"name":"baseCurrency","in":"query","description":"Returns all exchange rates for a specific base currency.","required":false,"schema":{"type":"array","items":{"type":"string"},"uniqueItems":true},"index$":4},{"name":"rewardCurrency","in":"query","description":"Returns all exchange rates for a specific reward currency.","required":false,"schema":{"type":"array","items":{"type":"string"},"uniqueItems":true},"index$":5}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let exchange_rates_with_disclaimer_ref01_data = Object.values(setup.data.existing.exchange_rates_with_disclaimer)[0]

    // LIST
    const exchange_rates_with_disclaimer_ref01_ent = client.ExchangeRatesWithDisclaimer()
    const exchange_rates_with_disclaimer_ref01_match = {}

    const exchange_rates_with_disclaimer_ref01_list = (await exchange_rates_with_disclaimer_ref01_ent.list(exchange_rates_with_disclaimer_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/exchange_rates_with_disclaimer/ExchangeRatesWithDisclaimerTestData.json')

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
    ['exchange_rates_with_disclaimer01','exchange_rates_with_disclaimer02','exchange_rates_with_disclaimer03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_EXCHANGE_RATES_WITH_DISCLAIMER_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
  })

  idmap = env['TANGOCARD_TEST_EXCHANGE_RATES_WITH_DISCLAIMER_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_EXCHANGE_RATES_WITH_DISCLAIMER_ENTID']
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
  
