

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


describe('CountryViewSummaryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TANGOCARD_TEST_LIVE=TRUE.
  afterEach(liveDelay('TANGOCARD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TangocardSDK.test()
    const ent = testsdk.CountryViewSummary()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'country_view_summary.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"countryName","req":true,"type":"`$STRING`","index$":0},{"active":true,"name":"preferredCurrency","req":true,"type":"`$STRING`","index$":1},{"active":true,"name":"threeLetterCode","req":true,"type":"`$STRING`","index$":2},{"active":true,"name":"twoLetterCode","req":true,"type":"`$STRING`","index$":3}],"name":"country_view_summary","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"country","orig":"country","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"max_result","orig":"max_result","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"next_cursor","orig":"next_cursor","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"preferred_currency","orig":"preferred_currency","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"prev_cursor","orig":"prev_cursor","reqd":false,"type":"`$STRING`","index$":4}]},"contract":{"id":"GET /rewardCountries","json":"{\"operationId\":\"listCountries\",\"parameters\":[{\"description\":\"The cursor to use for the previous page of results.\",\"in\":\"query\",\"name\":\"prevCursor\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"The cursor to use for the next page of results.\",\"in\":\"query\",\"name\":\"nextCursor\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"The maximum number of results to return. The default is 10, and the maximum is 200.\",\"in\":\"query\",\"name\":\"maxResults\",\"required\":false,\"schema\":{\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"Comma-separated string of the countries to be queried.\",\"in\":\"query\",\"name\":\"countries\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated string of the preferred currencies to be queried.\",\"in\":\"query\",\"name\":\"preferredCurrencies\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"countryName\":{\"title\":\"Country Name\",\"type\":\"string\"},\"preferredCurrency\":{\"title\":\"Preferred Currency\",\"type\":\"string\"},\"threeLetterCode\":{\"title\":\"Three Letter Code\",\"type\":\"string\"},\"twoLetterCode\":{\"title\":\"Two Letter Code\",\"type\":\"string\"}},\"required\":[\"countryName\",\"preferredCurrency\",\"threeLetterCode\",\"twoLetterCode\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{},\"type\":\"array\"},\"httpCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"httpPhrase\":{\"type\":\"string\"},\"i18nKey\":{\"type\":\"string\"},\"message\":{\"description\":\"A Generic Example \",\"example\":\"The error message will show here for error codes\",\"title\":\"message\",\"type\":\"string\"},\"path\":{\"type\":\"string\"},\"requestId\":{\"type\":\"string\"},\"timestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"$ref\":\"#/responses/400/content/application~1json/schema/properties\"},\"type\":\"object\"}}},\"description\":\"Forbidden\"}},\"security\":[{\"basicAuth\":[]},{\"bearerToken\":[]}],\"securitySchemes\":{\"basicAuth\":{\"scheme\":\"basic\",\"type\":\"http\"},\"bearerToken\":{\"bearerFormat\":\"JWT\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/rewardCountries","segments":[{"lit":"rewardCountries"}],"select":{"exist":["country","max_result","next_cursor","preferred_currency","prev_cursor"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"country_view_summary","name__orig":"country_view_summary","Name":"CountryViewSummary","name_":"country_view_summary","name-":"country-view-summary","NAME":"COUNTRY_VIEW_SUMMARY","index$":12}, {"active":true,"entity":"country_view_summary","key$":"BasicCountryViewSummaryFlow","kind":"basic","name":"BasicCountryViewSummaryFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"country_view_summary_ref01","srcdatavar":"country_view_summary_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-country_view_summary_ref01"}}],"index$":0}]}, 'CountryViewSummary')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let country_view_summary_ref01_data = Object.values(setup.data.existing.country_view_summary)[0] as any

    // LOAD
    const country_view_summary_ref01_ent = client.CountryViewSummary()
    const country_view_summary_ref01_match_dt0: any = {}
    const country_view_summary_ref01_data_dt0 = (await country_view_summary_ref01_ent.load(country_view_summary_ref01_match_dt0)).data()
    assert(null != country_view_summary_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/country_view_summary/CountryViewSummaryTestData.json')

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
    ['country_view_summary01','country_view_summary02','country_view_summary03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TANGOCARD_TEST_COUNTRY_VIEW_SUMMARY_ENTID': idmap,
    'TANGOCARD_TEST_LIVE': 'FALSE',
    'TANGOCARD_TEST_EXPLAIN': 'FALSE',
    'TANGOCARD_APIKEY': '',
    'TANGOCARD_SECRET': '',
  })

  idmap = env['TANGOCARD_TEST_COUNTRY_VIEW_SUMMARY_ENTID']

  const live = 'TRUE' === env.TANGOCARD_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TANGOCARD_TEST_COUNTRY_VIEW_SUMMARY_ENTID']
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
  
