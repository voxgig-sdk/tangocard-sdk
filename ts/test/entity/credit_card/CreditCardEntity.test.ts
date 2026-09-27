

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


loadEnvLocal(__dirname + '/../../../.env.local')


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

    const live = 'TRUE' === process.env.TANGOCARD_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'credit_card.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"accountIdentifier":{"a":true,"h":"Account Identifier","n":"accountIdentifier","r":true,"sh":"specify the account this credit card is associated with","t":"`$STRING`","key$":"accountIdentifier","index$":0},"accountNumber":{"a":true,"h":"Account Number","n":"accountNumber","r":true,"t":"`$STRING`","key$":"accountNumber","index$":1},"activationDate":{"a":true,"h":"Activation Date","n":"activationDate","r":true,"t":"`$STRING`","key$":"activationDate","index$":2},"billingAddress":{"a":true,"h":"Billing Address","n":"billingAddress","r":true,"sh":"required Enter the billing address information for the credit card that is being registered","t":"`$OBJECT`","key$":"billingAddress","index$":3},"contactInformation":{"a":true,"h":"Contact Information","n":"contactInformation","op":{"create":{"req":false,"type":"`$ARRAY`"}},"r":true,"sh":"Optional.","t":"`$ARRAY`","key$":"contactInformation","index$":4},"createdDate":{"a":true,"h":"Created Date","n":"createdDate","r":true,"t":"`$STRING`","key$":"createdDate","index$":5},"creditCard":{"a":true,"h":"Credit Card","n":"creditCard","r":true,"sh":"required Enter the credit card details that is being registered","t":"`$OBJECT`","key$":"creditCard","index$":6},"customerIdentifier":{"a":true,"h":"Customer Identifier","n":"customerIdentifier","r":true,"sh":"specify the customer associated with the credit card.","t":"`$STRING`","key$":"customerIdentifier","index$":7},"expirationDate":{"a":true,"h":"Expiration Date","n":"expirationDate","r":true,"t":"`$STRING`","key$":"expirationDate","index$":8},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":9},"ipAddress":{"a":true,"h":"Ip Address","n":"ipAddress","r":true,"sh":"specify the The IP address of the person adding the credit card","t":"`$STRING`","key$":"ipAddress","index$":10},"label":{"a":true,"h":"Label","n":"label","r":true,"sh":"specify a label for the credit card","t":"`$STRING`","key$":"label","index$":11},"lastFourDigits":{"a":true,"h":"Last Four Digits","n":"lastFourDigits","r":true,"t":"`$STRING`","key$":"lastFourDigits","index$":12},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":13},"token":{"a":true,"h":"Token","n":"token","r":true,"t":"`$STRING`","key$":"token","index$":14}},"id":{"field":"id","name":"id"},"name":"credit_card","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /creditCards","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/creditCards","q":{},"r":{},"s":[{"lit":"creditCards"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /creditCards","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"account_identifier","or":"account_identifier","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"account_number","or":"account_number","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"customer_identifier","or":"customer_identifier","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"email_address","or":"email_address","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"expiration_date","or":"expiration_date","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"full_name","or":"full_name","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"label","or":"label","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"last_four_digit","or":"last_four_digit","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"max_result","or":"max_result","r":false,"t":"`$INTEGER`","index$":8},{"a":true,"k":"query","n":"next_cursor","or":"next_cursor","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"paginate","or":"paginate","r":false,"t":"`$BOOLEAN`","index$":10},{"a":true,"k":"query","n":"prev_cursor","or":"prev_cursor","r":false,"t":"`$STRING`","index$":11},{"a":true,"ex":"false","k":"query","n":"show_inactive","or":"show_inactive","r":false,"t":"`$STRING`","index$":12},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":13},{"a":true,"k":"query","n":"token","or":"token","r":false,"t":"`$STRING`","index$":14}]},"k":"http","m":"GET","o":"/creditCards","q":{"exist":["account_identifier","account_number","customer_identifier","email_address","expiration_date","full_name","label","last_four_digit","max_result","next_cursor","paginate","prev_cursor","show_inactive","status","token"]},"r":{},"s":[{"lit":"creditCards"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /creditCards/{token}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"token","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/creditCards/{token}","q":{"exist":["id"]},"r":{"param":{"token":"id"}},"s":[{"lit":"creditCards"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"credit_card","name__orig":"credit_card","Name":"CreditCard","name_":"credit_card","name-":"credit-card","NAME":"CREDIT_CARD","index$":15}, {"active":true,"entity":"credit_card","key$":"BasicCreditCardFlow","kind":"basic","name":"BasicCreditCardFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"credit_card_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"credit_card_ref01","srcdatavar":"credit_card_ref01_data","suffix":"_dt0"},"m":{"id":"credit_card01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-credit_card_ref01"}}],"index$":1}]}, 'CreditCard', {"POST /creditCards":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","description":"<strong>customerIdentifier</strong> - specify the customer associated with the credit card. Must be the customer the accountIdentifier is associated with.<br/><br/><strong>accountIdentifier</strong> - specify the account this credit card is associated with<br/><br/><strong>label</strong> - specify a label for the credit card<br/><br/><strong>ipAddress</strong> - specify the The IP address of the person adding the credit card<br/><br/><strong>creditCard - number</strong> - specify the account this order will be deducted from<br/><br/><strong>creditCard - expiration</strong> - specify the card expiration date in YYYY-MM format<br/><br/><strong>creditCard - verificationNumber</strong> - specify the 3 or 4-digit card security code on back of card (CVV2, CVC2, or CID)<br/><br/><strong>billingAddress - firstName</strong> - specify the billing address first name<br/><br/><strong>billingAddress - lastName</strong> - specify the billing address last name<br/><br/><strong>billingAddress - addressLine1</strong> - specify the billing address line 1<br/><br/><strong>billingAddress - addressLine2</strong> - Optional. Specify the billing address line 2<br/><br/><strong>billingAddress - city</strong> - specify the billing address city<br/><br/><strong>billingAddress - state</strong> - specify the billing address state<br/><br/><strong>billingAddress - postalCode</strong> - specify the billing address postal code<br/><br/><strong>billingAddress - country</strong> - specify the billing address 2-letter country code<br/><br/><strong>billingAddress - emailAddress</strong> - specify the billing address email<br/><br/><strong>contactInformation - fullName</strong> - Optional. Used for email receipts. Specify the contact full name.<br/><br/><strong>contactInformation - emailAddress</strong> - Optional. Used for email receipts. Specify the contact email address.<br/><br/>","properties":{"customerIdentifier":{"type":"string","description":"specify the customer associated with the credit card. Must be the customer the accountIdentifier is associated with.","title":"Customer Identifier","key$":"customerIdentifier"},"accountIdentifier":{"type":"string","description":"specify the account this credit card is associated with","title":"Account Identifier","key$":"accountIdentifier"},"ipAddress":{"type":"string","description":"specify the The IP address of the person adding the credit card","title":"IP Address","key$":"ipAddress"},"label":{"type":"string","description":"specify a label for the credit card","title":"Credit Card Label","key$":"label"},"creditCard":{"type":"object","properties":{"number":{"type":"string","description":"specify the account this order will be deducted from","title":"Credit Card Number"},"expiration":{"type":"string","description":"specify the card expiration date in YYYY-MM format","title":"Expiration Date"},"verificationNumber":{"type":"string","description":"specify the 3 or 4-digit card security code on back of card (CVV2, CVC2, or CID)","title":"Verification Number"}},"required":["expiration","number","verificationNumber"],"description":"required  Enter the credit card details that is being registered","title":"Credit Card Information","x-ref":"#/components/schemas/CreditCardCriteria","key$":"creditCard"},"billingAddress":{"type":"object","properties":{"firstName":{"type":"string","description":"specify the billing address first name","minLength":1,"title":"First Name"},"lastName":{"type":"string","description":"specify the billing address last name","minLength":1,"title":"Last Name"},"addressLine1":{"type":"string","description":"specify the billing address line 1","minLength":1,"title":"Address Line 1"},"addressLine2":{"type":"string","description":"Optional. Specify the billing address line 2","title":"Address Line 2"},"city":{"type":"string","description":"specify the billing address city","minLength":1,"title":"City"},"state":{"type":"string","description":"specify the billing address state","minLength":1,"title":"State"},"postalCode":{"type":"string","description":"specify the billing address postal code","minLength":1,"title":"Postal Code"},"country":{"type":"string","description":"specify the billing address 2-letter country code","minLength":1,"title":"Country"},"emailAddress":{"type":"string","description":"specify the billing address email","minLength":1,"title":"Email Address"}},"required":["addressLine1","city","country","emailAddress","firstName","lastName","postalCode","state"],"description":"required Enter the billing address information for the credit card that is being registered","title":"Billing Address","x-ref":"#/components/schemas/BillingAddressCriteria","key$":"billingAddress"},"contactInformation":{"type":"array","description":"Optional.  Enter the contact information of the any person(s) who will be notified if there are issues.","items":{"type":"object","properties":{"fullName":{"type":"string","description":"Optional. Used for email receipts. Specify the contact full name.","title":"Contact full name"},"emailAddress":{"type":"string","description":"Optional. Used for email receipts. Specify the contact email address.","title":"Contact email address"}},"x-ref":"#/components/schemas/ContactInformationCriteria"},"title":"Contact Information","key$":"contactInformation"}},"required":["accountIdentifier","billingAddress","creditCard","customerIdentifier","ipAddress","label"],"x-ref":"#/components/schemas/CreateCreditCardCriteria","index$":1}}},"required":true},"parameters":[]},"GET /creditCards":{"protocol":"http","parameters":[{"name":"paginate","in":"query","description":"Whether to paginate the results or not. Defaults to false.","required":false,"schema":{"type":"boolean"},"index$":0},{"name":"prevCursor","in":"query","description":"The cursor to use for the previous page of results. This will be ignored if paginate is false.","required":false,"schema":{"type":"string"},"index$":1},{"name":"nextCursor","in":"query","description":"The cursor to use for the next page of results. This will be ignored if paginate is false.","required":false,"schema":{"type":"string"},"index$":2},{"name":"maxResults","in":"query","description":"The maximum number of results to return. The default is 10, and the maximum is 200. This will be ignored if paginate is false.","required":false,"schema":{"type":"integer","format":"int32"},"index$":3},{"name":"showInactive","in":"query","description":"Show inactive cards (true or false).","required":false,"schema":{"type":"string","default":"false"},"index$":4},{"name":"accountNumber","in":"query","description":"Specify the account number to be queried.","required":false,"schema":{"type":"string"},"index$":5},{"name":"accountIdentifier","in":"query","description":"Get cards associated with a specific account","required":false,"schema":{"type":"string"},"index$":6},{"name":"customerIdentifier","in":"query","description":"Specify the customer identifier to be queried.","required":false,"schema":{"type":"string"},"index$":7},{"name":"token","in":"query","description":"Credit card token to be queried","required":false,"schema":{"type":"string"},"index$":8},{"name":"expirationDate","in":"query","description":"Specify the expiration date of the credit card to be queried.","required":false,"schema":{"type":"string"},"index$":9},{"name":"status","in":"query","description":"Get cards with specific status. When set, this option will override the showInactive parameter","required":false,"schema":{"type":"string","enum":["ACTIVE","DELETED"]},"index$":10},{"name":"emailAddress","in":"query","description":"Specify the contact email address to be queried.","required":false,"schema":{"type":"string"},"index$":11},{"name":"fullName","in":"query","description":"Contact person's full name to be queried.","required":false,"schema":{"type":"string"},"index$":12},{"name":"label","in":"query","description":"Label for the credit card to be queried.","required":false,"schema":{"type":"string"},"index$":13},{"name":"lastFourDigits","in":"query","description":"The last four digits of the credit card to be queried.","required":false,"schema":{"type":"string"},"index$":14}]},"GET /creditCards/{token}":{"protocol":"http","parameters":[{"name":"token","in":"path","description":"Credit card token","required":true,"schema":{"type":"string"},"index$":0}]}})
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
    const credit_card_ref01_match_dt0: any = {}
    credit_card_ref01_match_dt0.id = credit_card_ref01_data.id
    const credit_card_ref01_data_dt0 = (await credit_card_ref01_ent.load(credit_card_ref01_match_dt0)).data()
    assert(credit_card_ref01_data_dt0.id === credit_card_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

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
    'TANGOCARD_SECRET': '',
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
  
