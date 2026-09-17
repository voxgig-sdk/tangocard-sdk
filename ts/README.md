# Tangocard TypeScript SDK



The TypeScript SDK for the Tangocard API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Account()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/tangocard-sdk/releases](https://github.com/voxgig-sdk/tangocard-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { TangocardSDK } from '@voxgig-sdk/tangocard'

const client = new TangocardSDK({
  apikey: process.env.TANGOCARD_APIKEY,
  secret: process.env.TANGOCARD_SECRET,
})
```

### 3. Load an asyncorderdetailview

AsyncOrderDetailView is nested under account_identifier, so provide the `account_identifier`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const asyncorderdetailview = await client.AsyncOrderDetailView().load({
    account_identifier: 'example_account_identifier',
    customer_identifier: 'example_customer_identifier',
    external_ref_id: 'example_external_ref_id',
  })
  console.log(asyncorderdetailview)
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Update
const updated = await client.Account().update({
  id: 'example_id',
  customer_identifier: 'example_customer_identifier',
  accountIdentifier: 'example_accountIdentifier',
})

```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const rewardreasonsmap = await client.RewardReasonsMap().load()
  console.log(rewardreasonsmap)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = TangocardSDK.test()

const rewardreasonsmap = await client.RewardReasonsMap().load()
// rewardreasonsmap is the entity, populated with mock response data
// — call rewardreasonsmap.data() for the record itself
console.log(rewardreasonsmap)
```

You can also use the instance method:

```ts
const client = new TangocardSDK({ apikey: '...', secret: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.RewardReasonsMap()

// First call runs the operation and stores its result
await entity.load()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new TangocardSDK({
  apikey: '...',
  secret: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
TANGOCARD_TEST_LIVE=TRUE
TANGOCARD_APIKEY=<your-key>
TANGOCARD_SECRET=<your-secret>
```

Then run:

```bash
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### TangocardSDK

#### Constructor

```ts
new TangocardSDK(options?: {
  apikey?: string
  secret?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `secret` | `string` | API secret for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Account(data?)` | `AccountEntity` | Create an Account entity instance. |
| `AddCommentEscalation(data?)` | `AddCommentEscalationEntity` | Create an AddCommentEscalation entity instance. |
| `AllEventType(data?)` | `AllEventTypeEntity` | Create an AllEventType entity instance. |
| `AsyncOrder(data?)` | `AsyncOrderEntity` | Create an AsyncOrder entity instance. |
| `AsyncOrderDetailView(data?)` | `AsyncOrderDetailViewEntity` | Create an AsyncOrderDetailView entity instance. |
| `AsyncOrderLineItemsView(data?)` | `AsyncOrderLineItemsViewEntity` | Create an AsyncOrderLineItemsView entity instance. |
| `AsyncReasonCodesView(data?)` | `AsyncReasonCodesViewEntity` | Create an AsyncReasonCodesView entity instance. |
| `AsyncUpdateLineItemView(data?)` | `AsyncUpdateLineItemViewEntity` | Create an AsyncUpdateLineItemView entity instance. |
| `BalanceAlertView(data?)` | `BalanceAlertViewEntity` | Create a BalanceAlertView entity instance. |
| `BrandCategoriesView(data?)` | `BrandCategoriesViewEntity` | Create a BrandCategoriesView entity instance. |
| `Catalog(data?)` | `CatalogEntity` | Create a Catalog entity instance. |
| `ChoiceProduct(data?)` | `ChoiceProductEntity` | Create a ChoiceProduct entity instance. |
| `CountryViewSummary(data?)` | `CountryViewSummaryEntity` | Create a CountryViewSummary entity instance. |
| `CreateAccountCriterion(data?)` | `CreateAccountCriterionEntity` | Create a CreateAccountCriterion entity instance. |
| `CreateCustomerCriterion(data?)` | `CreateCustomerCriterionEntity` | Create a CreateCustomerCriterion entity instance. |
| `CredentialTypeView(data?)` | `CredentialTypeViewEntity` | Create a CredentialTypeView entity instance. |
| `CreditCard(data?)` | `CreditCardEntity` | Create a CreditCard entity instance. |
| `CreditCardDeposit(data?)` | `CreditCardDepositEntity` | Create a CreditCardDeposit entity instance. |
| `CreditCardUnregister(data?)` | `CreditCardUnregisterEntity` | Create a CreditCardUnregister entity instance. |
| `Customer(data?)` | `CustomerEntity` | Create a Customer entity instance. |
| `EmailTemplateListView(data?)` | `EmailTemplateListViewEntity` | Create an EmailTemplateListView entity instance. |
| `EmailTemplateViewVerbose(data?)` | `EmailTemplateViewVerboseEntity` | Create an EmailTemplateViewVerbose entity instance. |
| `EmbeddableResponseDto(data?)` | `EmbeddableResponseDtoEntity` | Create an EmbeddableResponseDto entity instance. |
| `ExchangeRatesWithDisclaimer(data?)` | `ExchangeRatesWithDisclaimerEntity` | Create an ExchangeRatesWithDisclaimer entity instance. |
| `LineItem(data?)` | `LineItemEntity` | Create a LineItem entity instance. |
| `LowBalanceAlertListView(data?)` | `LowBalanceAlertListViewEntity` | Create a LowBalanceAlertListView entity instance. |
| `LowBalanceAlertView(data?)` | `LowBalanceAlertViewEntity` | Create a LowBalanceAlertView entity instance. |
| `MobileCountry(data?)` | `MobileCountryEntity` | Create a MobileCountry entity instance. |
| `N14Webhook(data?)` | `N14WebhookEntity` | Create a N14Webhook entity instance. |
| `N1Customer(data?)` | `N1CustomerEntity` | Create a N1Customer entity instance. |
| `N2Account(data?)` | `N2AccountEntity` | Create a N2Account entity instance. |
| `N3Fund(data?)` | `N3FundEntity` | Create a N3Fund entity instance. |
| `N8LineItem(data?)` | `N8LineItemEntity` | Create a N8LineItem entity instance. |
| `N9DigitalTemplate(data?)` | `N9DigitalTemplateEntity` | Create a N9DigitalTemplate entity instance. |
| `Order(data?)` | `OrderEntity` | Create an Order entity instance. |
| `OrderViewSummary(data?)` | `OrderViewSummaryEntity` | Create an OrderViewSummary entity instance. |
| `PrepaidCardInfo(data?)` | `PrepaidCardInfoEntity` | Create a PrepaidCardInfo entity instance. |
| `PrepaidCardTransaction(data?)` | `PrepaidCardTransactionEntity` | Create a PrepaidCardTransaction entity instance. |
| `ReissueCard(data?)` | `ReissueCardEntity` | Create a ReissueCard entity instance. |
| `ReplacementReason(data?)` | `ReplacementReasonEntity` | Create a ReplacementReason entity instance. |
| `Resend(data?)` | `ResendEntity` | Create a Resend entity instance. |
| `RewardReasonsMap(data?)` | `RewardReasonsMapEntity` | Create a RewardReasonsMap entity instance. |
| `TransferFund(data?)` | `TransferFundEntity` | Create a TransferFund entity instance. |
| `UpdateAccount(data?)` | `UpdateAccountEntity` | Create an UpdateAccount entity instance. |
| `UpdateWebhookSubscriptionResponseView(data?)` | `UpdateWebhookSubscriptionResponseViewEntity` | Create an UpdateWebhookSubscriptionResponseView entity instance. |
| `Webhook(data?)` | `WebhookEntity` | Create a Webhook entity instance. |
| `tester(testopts?, sdkopts?)` | `TangocardSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `TangocardSDK.test(testopts?, sdkopts?)` | `TangocardSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): TangocardSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Account

| Field | Description |
| --- | --- |
| `accountIdentifier` |  |
| `accountNumber` |  |
| `contactEmail` | optional, an email address for a designated representative for this account. |
| `createdAt` |  |
| `currencyCode` |  |
| `currentBalance` |  |
| `displayName` | optional, a friendly name for this account. |
| `fundingNotification` | optional, send funding notification emails to the following address(es). |
| `id` |  |
| `status` |  |

Operations: load, update.

API path: `/accounts`

#### AddCommentEscalation

| Field | Description |
| --- | --- |
| `assignee` | Assignee ID. |
| `commentText` | Free-text comment to add to the prepaid card. |
| `id` |  |
| `inquiryCategoryCode` | Inquiry category code. |
| `inquiryIdNumber` | Inquiry ID number. |
| `inquirySource` | Origination source identifier (e.g. |
| `inquiryTypeCode` | Inquiry type code. |
| `issueDescription` | Short description of the issue. |
| `status` | Status of the inquiry (e.g. |
| `userId` | Agent or CSR user ID. |

Operations: create.

API path: `/prepaidCardService/addCommentEscalation/{referenceLineItemID}`

#### AllEventType

| Field | Description |
| --- | --- |
| `category` | The category of events can be subscribed to. |
| `eventTypes` | The event types that can be subscribed to. |

Operations: list.

API path: `/webhooks/eventtypes`

#### AsyncOrder

| Field | Description |
| --- | --- |
| `accountIdentifier` | specify the account this order will be deducted from |
| `accountNumber` |  |
| `amountCharged` | Initial value and the total charged amount on the account |
| `campaign` | Optional. |
| `createdAt` |  |
| `customerIdentifier` | specify the customer associated with the order. |
| `duplicateLineItemRefIds` | If any duplicate duplicateLineItemRefIds exist in the request |
| `externalRefID` | Required. |
| `failedLineItems` | Failed line items list (business validations) |
| `fulfillBy` |  |
| `lineItems` | Line Items of the bulk order a required field |
| `notes` | Optional order notes. |
| `orderStatus` |  |
| `purchaseOrderNumber` | The Purchase Order Number associated with this order. |
| `referenceOrderID` |  |
| `sender` | Optional. |
| `status` | This status reflects about cart status or validation status based on the processing |
| `totalLineItems` | Total number of line items submitted in the request |
| `totalLineItemsRows` |  |

Operations: create, list.

API path: `/asyncOrders`

#### AsyncOrderDetailView

| Field | Description |
| --- | --- |
| `accountIdentifier` | Account identifier |
| `amountCharged` | Initial value and the total charged amount on the account |
| `campaign` | Campaign name |
| `completedAt` | Order completion timestamp |
| `createdAt` | Order creation timestamp |
| `customerIdentifier` | Customer identifier |
| `externalRefID` | External reference ID provided by client |
| `id` |  |
| `lineItems` | list of line items |
| `notes` | Order notes |
| `orderErrors` | Order level errors |
| `orderStatus` | Current status of the order |
| `pagination` | Pagination information |
| `purchaseOrderNumber` | Purchase order number |
| `referenceOrderID` | Internal reference order ID |
| `sender` | Sender information |
| `totalLineItems` | Total number of line items |

Operations: load, update.

API path: `/asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}`

#### AsyncOrderLineItemsView

| Field | Description |
| --- | --- |
| `accountIdentifier` |  |
| `amountCharged` | Initial value and the total charged amount on the account |
| `campaign` |  |
| `customerIdentifier` |  |
| `externalRefID` |  |
| `lineItems` | The List of Line Items for the Async Order. |
| `orderErrors` | The List of Errors for the Async Order. |
| `orderNotes` |  |
| `orderStatus` |  |
| `pagination` | The cursor for pagination of the async order line items. |
| `purchaseOrderNumber` |  |
| `referenceOrderID` |  |
| `sender` |  |

Operations: list.

API path: `/asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}/lineItems`

#### AsyncReasonCodesView

| Field | Description |
| --- | --- |

Operations: load.

API path: `/asyncOrders/reasonCodes`

#### AsyncUpdateLineItemView

| Field | Description |
| --- | --- |
| `deliveryDate` | Optional. |
| `lineItemNote` | Optional line item notes (up to 150 characters) |
| `senderInfo` | Optional. |

Operations: update.

API path: `/asyncOrders/lineItems/{referenceLineItemId}`

#### BalanceAlertView

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}`

#### BrandCategoriesView

| Field | Description |
| --- | --- |
| `description` |  |
| `identifier` |  |

Operations: list.

API path: `/brandCategories`

#### Catalog

| Field | Description |
| --- | --- |
| `barcodeType` |  |
| `brandKey` |  |
| `brandName` |  |
| `brandRequirements` |  |
| `categories` |  |
| `createdDate` |  |
| `description` |  |
| `disclaimer` |  |
| `imageUrls` |  |
| `items` |  |
| `lastUpdateDate` |  |
| `shortDescription` |  |
| `status` |  |
| `terms` |  |

Operations: list.

API path: `/choiceProducts/{choiceProductUtid}/catalog`

#### ChoiceProduct

| Field | Description |
| --- | --- |
| `countries` |  |
| `currencyCode` |  |
| `id` |  |
| `rewardName` |  |
| `utid` |  |

Operations: list, load.

API path: `/choiceProducts`

#### CountryViewSummary

| Field | Description |
| --- | --- |
| `countryName` |  |
| `preferredCurrency` |  |
| `threeLetterCode` |  |
| `twoLetterCode` |  |

Operations: load.

API path: `/rewardCountries`

#### CreateAccountCriterion

| Field | Description |
| --- | --- |
| `accountIdentifier` | A unique identifier for this account. |
| `contactEmail` | An email address for a designated representative for this account. |
| `currencyCode` | The currency this account will accept for deposits/withdraws. |
| `displayName` | A friendly name for this account. |
| `fundingNotification` | optional, send funding notification emails to the following address(es) |

Operations: create.

API path: `/customers/{customerIdentifier}/accounts`

#### CreateCustomerCriterion

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### CredentialTypeView

| Field | Description |
| --- | --- |
| `credentialType` |  |
| `description` |  |

Operations: list.

API path: `/credentialtypes`

#### CreditCard

| Field | Description |
| --- | --- |
| `accountIdentifier` | specify the account this credit card is associated with |
| `accountNumber` |  |
| `activationDate` |  |
| `billingAddress` | required Enter the billing address information for the credit card that is being registered |
| `contactInformation` | Optional. |
| `createdDate` |  |
| `creditCard` | required Enter the credit card details that is being registered |
| `customerIdentifier` | specify the customer associated with the credit card. |
| `expirationDate` |  |
| `id` |  |
| `ipAddress` | specify the The IP address of the person adding the credit card |
| `label` | specify a label for the credit card |
| `lastFourDigits` |  |
| `status` |  |
| `token` |  |

Operations: create, load.

API path: `/creditCards`

#### CreditCardDeposit

| Field | Description |
| --- | --- |
| `accountIdentifier` | specify the account this credit card is associated with |
| `accountNumber` |  |
| `amount` | specify the amount to fund in USD |
| `amountCharged` |  |
| `createdDate` |  |
| `creditCardToken` | specify the credit card token to fund with |
| `customerIdentifier` | specify the customer associated with the credit card. |
| `externalRefID` | specify the external reference id to associate with this funding action. |
| `feePercent` |  |
| `id` |  |
| `referenceDepositID` |  |
| `status` |  |

Operations: create, load.

API path: `/creditCardDeposits`

#### CreditCardUnregister

| Field | Description |
| --- | --- |
| `accountIdentifier` | Specify the account this credit card is associated with. |
| `createdDate` |  |
| `creditCardToken` | Specify the credit card token to unregister. |
| `customerIdentifier` | Specify the customer associated with the credit card. |
| `message` |  |
| `token` |  |

Operations: create.

API path: `/creditCardUnregisters`

#### Customer

| Field | Description |
| --- | --- |
| `accounts` |  |
| `createdAt` |  |
| `customerIdentifier` | A unique identifier for this customer. |
| `displayName` | A friendly name for this customer. |
| `id` |  |
| `status` |  |

Operations: create, list, load.

API path: `/customers`

#### EmailTemplateListView

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### EmailTemplateViewVerbose

| Field | Description |
| --- | --- |
| `accentColor` | A Hex color value, six hexadecimal digits preceded by a pound sign, used as an accent in the email. |
| `accessControl` | (Optional) Which Customers and/or Accounts should have access to this template. |
| `accessControls` |  |
| `closing` | After the reward credential, a space to close the email message to the recipient. |
| `customerServiceMessage` | If left null, Tango Card's Customer Support contact information will be included. |
| `defaults` | If you want this template to be used at order time for the given Platform, Customer or Account when the Email Template Identifier (etid) is not provided with the order. |
| `etid` |  |
| `fromName` | The name that will appear in the From line of the email and the {from_name} in the text message. |
| `headerImage` | A Base64 encoded string of an image that will show as the header of the email. |
| `headerImageAltText` | The Alt Text for the Header Image in the email. |
| `messageBody` | The message body for the email. |
| `name` | A unique name to give the template. |
| `smsMessageBody` | The message body for the SMS. |
| `subject` | The Subject of the email. |

Operations: create, list, load, update.

API path: `/digitalTemplates`

#### EmbeddableResponseDto

| Field | Description |
| --- | --- |
| `url` |  |

Operations: load.

API path: `/lineItems/{referenceLineItemID}/embeddedUrl`

#### ExchangeRatesWithDisclaimer

| Field | Description |
| --- | --- |
| `baseCurrency` |  |
| `baseFx` |  |
| `lastModifiedDate` |  |
| `rewardCurrency` |  |

Operations: list.

API path: `/exchangerates`

#### LineItem

| Field | Description |
| --- | --- |
| `accountIdentifier` |  |
| `accountNumber` |  |
| `amountCharged` |  |
| `amountIssued` |  |
| `campaign` |  |
| `canCancel` |  |
| `canFreeze` |  |
| `customerIdentifier` |  |
| `dateIssued` |  |
| `deliveryMethod` |  |
| `deliveryStatus` |  |
| `emailStatus` |  |
| `etid` |  |
| `expirationDate` |  |
| `externalReferenceLineItemID` |  |
| `id` |  |
| `lineItemActionHistory` |  |
| `lineItemActionReason` |  |
| `lineItemErrors` | Errors related to the line item |
| `lineNumber` |  |
| `orderNotes` |  |
| `orderSource` |  |
| `orderStatus` |  |
| `ptid` |  |
| `purchaseOrderNumber` |  |
| `quantity` | quantity of line items |
| `recipient` |  |
| `redemptionHistory` |  |
| `referenceLineItemID` |  |
| `referenceOrderID` |  |
| `reissuedFromReferenceLineItemId` | Reissued from reference line item ID |
| `reissuedToReferenceLineItemId` | Reissued to reference line item ID |
| `remainingBalance` |  |
| `resendHistory` |  |
| `reward` |  |
| `rewardName` |  |
| `rewardStatus` |  |
| `rewardViewHistory` |  |
| `sender` |  |
| `status` |  |
| `utid` |  |

Operations: create, list, load.

API path: `/lineItems/{referenceLineItemID}/cancel`

#### LowBalanceAlertListView

| Field | Description |
| --- | --- |
| `accountIdentifier` |  |
| `balanceAlertDisplayName` |  |
| `balanceAlertID` |  |
| `balanceAlertNotification` |  |
| `balanceAlertThreshold` |  |
| `createdAt` |  |
| `customerIdentifier` |  |

Operations: list.

API path: `/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance`

#### LowBalanceAlertView

| Field | Description |
| --- | --- |
| `accountIdentifier` |  |
| `balanceAlertDisplayName` | A friendly name for this low balance alert (will be displayed in the Tango Portal). |
| `balanceAlertID` |  |
| `balanceAlertNotification` | Send low balance notification emails to the following address(es). |
| `balanceAlertThreshold` | The threshold amount that will trigger the low balance alert. |
| `createdAt` |  |
| `customerIdentifier` |  |

Operations: create, load, update.

API path: `/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance`

#### MobileCountry

| Field | Description |
| --- | --- |
| `countryCode` |  |
| `countryName` |  |
| `isoCode` |  |
| `languageCode` |  |

Operations: load.

API path: `/mobileCountries`

#### N14Webhook

| Field | Description |
| --- | --- |
| `categories` | The categories the customer wants to subscribe to. |
| `createdAt` | The date and time the webhook was created. |
| `eventTypes` | The event types the customer wants to subscribe to. |
| `expiresAt` | The date and time the webhook expires. |
| `headers` | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | The HMAC secret key used to sign the webhook payload. |
| `id` |  |
| `payloadVerificationMethod` | Method to verify webhook payload authenticity |
| `signingCertificate` | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | The date and time when the webhook was last updated. |
| `url` | The URL of the customer's webhook listener. |
| `webhookId` | The ID of the webhook. |

Operations: create, list, load, remove.

API path: `/webhooks/{webhookId}/tests/{testName}`

#### N1Customer

| Field | Description |
| --- | --- |

Operations: load.

API path: `/customers/{customerIdentifier}/accounts`

#### N2Account

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### N3Fund

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### N8LineItem

| Field | Description |
| --- | --- |
| `campaign` | optional campaign that may be used to administratively categorize a specific order. |
| `id` |  |
| `orderNotes` | Optional order notes (up to 150 characters) |
| `purchaseOrderNumber` | The Purchase Order Number associated with this order. |

Operations: update.

API path: `/lineItems/{referenceLineItemID}`

#### N9DigitalTemplate

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/digitalTemplates/{etid}`

#### Order

| Field | Description |
| --- | --- |
| `accountIdentifier` | Specify the account this order will be deducted from |
| `accountNumber` |  |
| `amount` | Specify the face value of of the reward. |
| `amountCharged` |  |
| `asyncOrderEntity` |  |
| `campaign` | Optional. |
| `createdAt` |  |
| `customFields` | Optional. |
| `customerIdentifier` | Specify the customer associated with the order. |
| `deliveryMethod` | Specify delivery method for the order |
| `denomination` |  |
| `emailSubject` | Optional. |
| `etid` | Optional. |
| `expirationDate` | Optional for Promo Links, the exact calendar date the Promo Link will expire. |
| `externalRefID` | Optional. |
| `id` |  |
| `lineItemStatus` |  |
| `message` | Optional gift message |
| `notes` | Optional order notes. |
| `orderClientSource` |  |
| `orderExternalRefIdDupe` |  |
| `orderStatus` |  |
| `ptid` | Only required for Printed Reward Links, the unique identifier for the Printed Reward Link Template provided in the Tango Portal on the Printed Template page. |
| `purchaseOrderNumber` | The Purchase Order Number associated with this order. |
| `recipient` | Required if deliveryMethod is EMAIL, PHONE, or ADDRESS. |
| `redemptionInstructions` |  |
| `referenceLineItemID` |  |
| `referenceOrderID` |  |
| `reward` |  |
| `rewardName` |  |
| `sendEmail` | Deprecated Oct 1, 2025. |
| `sender` | Optional. |
| `status` |  |
| `utid` | The unique identifier for the reward you are sending as provided in the Get Catalog call |

Operations: create, list, load.

API path: `/orders`

#### OrderViewSummary

| Field | Description |
| --- | --- |
| `amount` | Optional. |
| `deliveryMethod` | Optional. |
| `notes` | Optional order notes (up to 150 characters). |
| `otherReason` | Required when reasonCode is "OTHER", enter the reason why the line item is being reissued. |
| `reasonCode` | Required. |
| `recipient` | Optional. |

Operations: create.

API path: `/lineItems/{referenceLineItemID}/reissue`

#### PrepaidCardInfo

| Field | Description |
| --- | --- |
| `balance` |  |
| `card` |  |
| `comments` |  |
| `registration` |  |

Operations: load.

API path: `/prepaidCardService/getCardInfo/{referenceLineItemID}`

#### PrepaidCardTransaction

| Field | Description |
| --- | --- |
| `journal` |  |
| `page` |  |

Operations: load.

API path: `/prepaidCardService/getCardTransactions/{referenceLineItemID}`

#### ReissueCard

| Field | Description |
| --- | --- |
| `commentText` | Optional comment for the card replacement. |
| `id` |  |
| `reason` | Reason for the card replacement. |
| `status` | Status of the reissue request. |
| `updatedBy` | Identifier of the agent initiating the request. |

Operations: create.

API path: `/prepaidCardService/reissueCard/{referenceLineItemID}`

#### ReplacementReason

| Field | Description |
| --- | --- |
| `replacementReasons` | List of valid replacement reason codes. |

Operations: list.

API path: `/prepaidCardService/replacementReasons`

#### Resend

| Field | Description |
| --- | --- |
| `newDeliveryMethod` | The delivery method used to re-deliver the reward. |
| `newEmail` | A new email address to re-deliver this order to. |
| `newEtid` | A new etid used to re-deliver an order. |
| `newMobile` | A new mobile number to use for resending an order. |
| `newMobileNumber` | A new phone number to re-deliver this order to. |
| `otherReason` | Required when lineItemResendReasonCode is "OTHER", enter the reason why the line item is being RESENT |
| `reasonCode` | Enter the reason why this line item is being RESENT (respectively) |

Operations: create.

API path: `/lineItems/{referenceLineItemId}/resends`

#### RewardReasonsMap

| Field | Description |
| --- | --- |
| `CANCEL` | Map of cancel reasons |
| `CANCEL_AND_REISSUE` | Map of cancel and reissue reasons |
| `FREEZE` | Map of freeze reasons |
| `UNFREEZE` | Map of unfreeze reasons |

Operations: load.

API path: `/lineItems/reasonCodes`

#### TransferFund

| Field | Description |
| --- | --- |
| `amount` | Specify the currency amount of the funds being transferred. |
| `externalRefID` | specify the external reference id to associate with this funding action. |
| `transferDate` |  |
| `transferFrom` | The accountIdentifier for the Account transferring funds from. |
| `transferNotes` | Optional transfer notes (up to 150 characters) |
| `transferTo` | The accountIdentifier for the Account transferring funds to. |
| `transferredAmount` |  |

Operations: create.

API path: `/transferFunds`

#### UpdateAccount

| Field | Description |
| --- | --- |
| `id` |  |
| `registration` |  |
| `status` |  |
| `updatedBy` |  |

Operations: create.

API path: `/prepaidCardService/updateAccount/{referenceLineItemID}`

#### UpdateWebhookSubscriptionResponseView

| Field | Description |
| --- | --- |
| `categories` | The categories the customer is subscribed to. |
| `createdAt` | The date and time the webhook was created. |
| `eventTypes` | The event types the customer is subscribed to. |
| `expiresAt` | The date and time the webhook expires. |
| `headers` | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | The HMAC secret key used to sign the webhook payload. |
| `payloadVerificationMethod` | Method to verify webhook payload integrity |
| `signingCertificate` | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | The date and time when the webhook was last updated. |
| `url` | The URL of the customer's webhook listener. |
| `webhookId` | The ID of the webhook. |

Operations: update.

API path: `/webhooks/{webhookId}`

#### Webhook

| Field | Description |
| --- | --- |
| `categories` | The categories the customer wants to subscribe to. |
| `createdAt` | The date and time the webhook was created. |
| `eventTypes` | The event types the customer wants to subscribe to. |
| `expiresAt` | The date and time the webhook expires. |
| `headers` | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | The HMAC secret key used to sign the webhook payload. |
| `id` |  |
| `payloadVerificationMethod` | Method to verify webhook payload integrity. |
| `signingCertificate` | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | The date and time when the webhook was last updated. |
| `url` | The URL of the customer's webhook listener. |
| `webhookId` | The ID of the webhook. |

Operations: create, load.

API path: `/webhooks/{webhookId}/replay`



## Entities


### Account

Create an instance: `const account = client.Account()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` |  |
| `accountNumber` | `string` |  |
| `contactEmail` | `string` | optional, an email address for a designated representative for this account. |
| `createdAt` | `string` |  |
| `currencyCode` | `string` |  |
| `currentBalance` | `number` |  |
| `displayName` | `string` | optional, a friendly name for this account. |
| `fundingNotification` | `any[]` | optional, send funding notification emails to the following address(es). |
| `id` | `string` |  |
| `status` | `string` |  |

#### Example: Load

```ts
const account = await client.Account().load({ id: 'account_id' })
```


### AddCommentEscalation

Create an instance: `const add_comment_escalation = client.AddCommentEscalation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `number` | Assignee ID. |
| `commentText` | `string` | Free-text comment to add to the prepaid card. |
| `id` | `string` |  |
| `inquiryCategoryCode` | `number` | Inquiry category code. |
| `inquiryIdNumber` | `number` | Inquiry ID number. |
| `inquirySource` | `string` | Origination source identifier (e.g. |
| `inquiryTypeCode` | `number` | Inquiry type code. |
| `issueDescription` | `string` | Short description of the issue. |
| `status` | `string` | Status of the inquiry (e.g. |
| `userId` | `string` | Agent or CSR user ID. |

#### Example: Create

```ts
const add_comment_escalation = await client.AddCommentEscalation().create({
  id: 'example_id',
  commentText: 'example_commentText',
  issueDescription: 'example_issueDescription',
})
```


### AllEventType

Create an instance: `const all_event_type = client.AllEventType()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` | The category of events can be subscribed to. |
| `eventTypes` | `any[]` | The event types that can be subscribed to. |

#### Example: List

```ts
const all_event_types = await client.AllEventType().list()
```


### AsyncOrder

Create an instance: `const async_order = client.AsyncOrder()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` | specify the account this order will be deducted from |
| `accountNumber` | `string` |  |
| `amountCharged` | `Record<string, any>` | Initial value and the total charged amount on the account |
| `campaign` | `string` | Optional. |
| `createdAt` | `string` |  |
| `customerIdentifier` | `string` | specify the customer associated with the order. |
| `duplicateLineItemRefIds` | `Record<string, any>` | If any duplicate duplicateLineItemRefIds exist in the request |
| `externalRefID` | `string` | Required. |
| `failedLineItems` | `any[]` | Failed line items list (business validations) |
| `fulfillBy` | `string` |  |
| `lineItems` | `any[]` | Line Items of the bulk order a required field |
| `notes` | `string` | Optional order notes. |
| `orderStatus` | `string` |  |
| `purchaseOrderNumber` | `string` | The Purchase Order Number associated with this order. |
| `referenceOrderID` | `string` |  |
| `sender` | `Record<string, any>` | Optional. |
| `status` | `string` | This status reflects about cart status or validation status based on the processing |
| `totalLineItems` | `number` | Total number of line items submitted in the request |
| `totalLineItemsRows` | `number` |  |

#### Example: List

```ts
const async_orders = await client.AsyncOrder().list()
```

#### Example: Create

```ts
const async_order = await client.AsyncOrder().create({
  accountIdentifier: 'example_accountIdentifier',
  accountNumber: 'example_accountNumber',
  customerIdentifier: 'example_customerIdentifier',
  lineItems: [],
  referenceOrderID: 'example_referenceOrderID',
})
```


### AsyncOrderDetailView

Create an instance: `const async_order_detail_view = client.AsyncOrderDetailView()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` | Account identifier |
| `amountCharged` | `Record<string, any>` | Initial value and the total charged amount on the account |
| `campaign` | `string` | Campaign name |
| `completedAt` | `string` | Order completion timestamp |
| `createdAt` | `string` | Order creation timestamp |
| `customerIdentifier` | `string` | Customer identifier |
| `externalRefID` | `string` | External reference ID provided by client |
| `id` | `string` |  |
| `lineItems` | `any[]` | list of line items |
| `notes` | `string` | Order notes |
| `orderErrors` | `any[]` | Order level errors |
| `orderStatus` | `string` | Current status of the order |
| `pagination` | `Record<string, any>` | Pagination information |
| `purchaseOrderNumber` | `string` | Purchase order number |
| `referenceOrderID` | `string` | Internal reference order ID |
| `sender` | `Record<string, any>` | Sender information |
| `totalLineItems` | `number` | Total number of line items |

#### Example: Load

```ts
const async_order_detail_view = await client.AsyncOrderDetailView().load({ account_identifier: 'account_identifier', customer_identifier: 'customer_identifier', external_ref_id: 'external_ref_id' })
```


### AsyncOrderLineItemsView

Create an instance: `const async_order_line_items_view = client.AsyncOrderLineItemsView()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` |  |
| `amountCharged` | `Record<string, any>` | Initial value and the total charged amount on the account |
| `campaign` | `string` |  |
| `customerIdentifier` | `string` |  |
| `externalRefID` | `string` |  |
| `lineItems` | `any[]` | The List of Line Items for the Async Order. |
| `orderErrors` | `any[]` | The List of Errors for the Async Order. |
| `orderNotes` | `string` |  |
| `orderStatus` | `string` |  |
| `pagination` | `Record<string, any>` | The cursor for pagination of the async order line items. |
| `purchaseOrderNumber` | `string` |  |
| `referenceOrderID` | `string` |  |
| `sender` | `Record<string, any>` |  |

#### Example: List

```ts
const async_order_line_items_views = await client.AsyncOrderLineItemsView().list({ account_id: "example", customer_id: "example", external_ref_id: "example" })
```


### AsyncReasonCodesView

Create an instance: `const async_reason_codes_view = client.AsyncReasonCodesView()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const async_reason_codes_view = await client.AsyncReasonCodesView().load()
```


### AsyncUpdateLineItemView

Create an instance: `const async_update_line_item_view = client.AsyncUpdateLineItemView()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deliveryDate` | `string` | Optional. |
| `lineItemNote` | `string` | Optional line item notes (up to 150 characters) |
| `senderInfo` | `Record<string, any>` | Optional. |


### BalanceAlertView

Create an instance: `const balance_alert_view = client.BalanceAlertView()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### BrandCategoriesView

Create an instance: `const brand_categories_view = client.BrandCategoriesView()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `identifier` | `string` |  |

#### Example: List

```ts
const brand_categories_views = await client.BrandCategoriesView().list()
```


### Catalog

Create an instance: `const catalog = client.Catalog()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `barcodeType` | `string` |  |
| `brandKey` | `string` |  |
| `brandName` | `string` |  |
| `brandRequirements` | `Record<string, any>` |  |
| `categories` | `any[]` |  |
| `createdDate` | `string` |  |
| `description` | `string` |  |
| `disclaimer` | `string` |  |
| `imageUrls` | `Record<string, any>` |  |
| `items` | `any[]` |  |
| `lastUpdateDate` | `string` |  |
| `shortDescription` | `string` |  |
| `status` | `string` |  |
| `terms` | `string` |  |

#### Example: List

```ts
const catalogs = await client.Catalog().list()
```


### ChoiceProduct

Create an instance: `const choice_product = client.ChoiceProduct()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `countries` | `any[]` |  |
| `currencyCode` | `string` |  |
| `id` | `string` |  |
| `rewardName` | `string` |  |
| `utid` | `string` |  |

#### Example: Load

```ts
const choice_product = await client.ChoiceProduct().load({ id: 'choice_product_id' })
```

#### Example: List

```ts
const choice_products = await client.ChoiceProduct().list()
```


### CountryViewSummary

Create an instance: `const country_view_summary = client.CountryViewSummary()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `countryName` | `string` |  |
| `preferredCurrency` | `string` |  |
| `threeLetterCode` | `string` |  |
| `twoLetterCode` | `string` |  |

#### Example: Load

```ts
const country_view_summary = await client.CountryViewSummary().load()
```


### CreateAccountCriterion

Create an instance: `const create_account_criterion = client.CreateAccountCriterion()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` | A unique identifier for this account. |
| `contactEmail` | `string` | An email address for a designated representative for this account. |
| `currencyCode` | `string` | The currency this account will accept for deposits/withdraws. |
| `displayName` | `string` | A friendly name for this account. |
| `fundingNotification` | `any[]` | optional, send funding notification emails to the following address(es) |

#### Example: Create

```ts
const create_account_criterion = await client.CreateAccountCriterion().create({
  customer_identifier: 'example_customer_identifier',
  accountIdentifier: 'example_accountIdentifier',
  contactEmail: 'example_contactEmail',
  displayName: 'example_displayName',
})
```


### CreateCustomerCriterion

Create an instance: `const create_customer_criterion = client.CreateCustomerCriterion()`


### CredentialTypeView

Create an instance: `const credential_type_view = client.CredentialTypeView()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `credentialType` | `string` |  |
| `description` | `string` |  |

#### Example: List

```ts
const credential_type_views = await client.CredentialTypeView().list()
```


### CreditCard

Create an instance: `const credit_card = client.CreditCard()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` | specify the account this credit card is associated with |
| `accountNumber` | `string` |  |
| `activationDate` | `string` |  |
| `billingAddress` | `Record<string, any>` | required Enter the billing address information for the credit card that is being registered |
| `contactInformation` | `any[]` | Optional. |
| `createdDate` | `string` |  |
| `creditCard` | `Record<string, any>` | required Enter the credit card details that is being registered |
| `customerIdentifier` | `string` | specify the customer associated with the credit card. |
| `expirationDate` | `string` |  |
| `id` | `string` |  |
| `ipAddress` | `string` | specify the The IP address of the person adding the credit card |
| `label` | `string` | specify a label for the credit card |
| `lastFourDigits` | `string` |  |
| `status` | `string` |  |
| `token` | `string` |  |

#### Example: Load

```ts
const credit_card = await client.CreditCard().load({ id: 'credit_card_id' })
```

#### Example: Create

```ts
const credit_card = await client.CreditCard().create({
  accountIdentifier: 'example_accountIdentifier',
  accountNumber: 'example_accountNumber',
  activationDate: 'example_activationDate',
  billingAddress: {},
  contactInformation: [],
  createdDate: 'example_createdDate',
  creditCard: {},
  customerIdentifier: 'example_customerIdentifier',
  expirationDate: 'example_expirationDate',
  ipAddress: 'example_ipAddress',
  label: 'example_label',
  lastFourDigits: 'example_lastFourDigits',
  status: 'example_status',
  token: 'example_token',
})
```


### CreditCardDeposit

Create an instance: `const credit_card_deposit = client.CreditCardDeposit()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` | specify the account this credit card is associated with |
| `accountNumber` | `string` |  |
| `amount` | `number` | specify the amount to fund in USD |
| `amountCharged` | `number` |  |
| `createdDate` | `string` |  |
| `creditCardToken` | `string` | specify the credit card token to fund with |
| `customerIdentifier` | `string` | specify the customer associated with the credit card. |
| `externalRefID` | `string` | specify the external reference id to associate with this funding action. |
| `feePercent` | `number` |  |
| `id` | `string` |  |
| `referenceDepositID` | `string` |  |
| `status` | `string` |  |

#### Example: Load

```ts
const credit_card_deposit = await client.CreditCardDeposit().load({ id: 'credit_card_deposit_id' })
```

#### Example: Create

```ts
const credit_card_deposit = await client.CreditCardDeposit().create({
  accountIdentifier: 'example_accountIdentifier',
  accountNumber: 'example_accountNumber',
  amount: 1,
  amountCharged: 1,
  createdDate: 'example_createdDate',
  creditCardToken: 'example_creditCardToken',
  customerIdentifier: 'example_customerIdentifier',
  feePercent: 1,
  referenceDepositID: 'example_referenceDepositID',
  status: 'example_status',
})
```


### CreditCardUnregister

Create an instance: `const credit_card_unregister = client.CreditCardUnregister()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` | Specify the account this credit card is associated with. |
| `createdDate` | `string` |  |
| `creditCardToken` | `string` | Specify the credit card token to unregister. |
| `customerIdentifier` | `string` | Specify the customer associated with the credit card. |
| `message` | `string` |  |
| `token` | `string` |  |

#### Example: Create

```ts
const credit_card_unregister = await client.CreditCardUnregister().create({
  accountIdentifier: 'example_accountIdentifier',
  createdDate: 'example_createdDate',
  creditCardToken: 'example_creditCardToken',
  customerIdentifier: 'example_customerIdentifier',
  message: 'example_message',
  token: 'example_token',
})
```


### Customer

Create an instance: `const customer = client.Customer()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accounts` | `any[]` |  |
| `createdAt` | `string` |  |
| `customerIdentifier` | `string` | A unique identifier for this customer. |
| `displayName` | `string` | A friendly name for this customer. |
| `id` | `string` |  |
| `status` | `string` |  |

#### Example: Load

```ts
const customer = await client.Customer().load({ id: 'customer_id' })
```

#### Example: List

```ts
const customers = await client.Customer().list()
```

#### Example: Create

```ts
const customer = await client.Customer().create({
  accounts: [],
  createdAt: 'example_createdAt',
  customerIdentifier: 'example_customerIdentifier',
  displayName: 'example_displayName',
  status: 'example_status',
})
```


### EmailTemplateListView

Create an instance: `const email_template_list_view = client.EmailTemplateListView()`


### EmailTemplateViewVerbose

Create an instance: `const email_template_view_verbose = client.EmailTemplateViewVerbose()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accentColor` | `string` | A Hex color value, six hexadecimal digits preceded by a pound sign, used as an accent in the email. |
| `accessControl` | `any[]` | (Optional) Which Customers and/or Accounts should have access to this template. |
| `accessControls` | `any[]` |  |
| `closing` | `string` | After the reward credential, a space to close the email message to the recipient. |
| `customerServiceMessage` | `string` | If left null, Tango Card's Customer Support contact information will be included. |
| `defaults` | `any[]` | If you want this template to be used at order time for the given Platform, Customer or Account when the Email Template Identifier (etid) is not provided with the order. |
| `etid` | `string` |  |
| `fromName` | `string` | The name that will appear in the From line of the email and the {from_name} in the text message. |
| `headerImage` | `string` | A Base64 encoded string of an image that will show as the header of the email. |
| `headerImageAltText` | `string` | The Alt Text for the Header Image in the email. |
| `messageBody` | `string` | The message body for the email. |
| `name` | `string` | A unique name to give the template. |
| `smsMessageBody` | `string` | The message body for the SMS. |
| `subject` | `string` | The Subject of the email. |

#### Example: Load

```ts
const email_template_view_verbose = await client.EmailTemplateViewVerbose().load({ etid: 'etid' })
```

#### Example: List

```ts
const email_template_view_verboses = await client.EmailTemplateViewVerbose().list()
```

#### Example: Create

```ts
const email_template_view_verbose = await client.EmailTemplateViewVerbose().create({
  accentColor: 'example_accentColor',
  closing: 'example_closing',
  etid: 'example_etid',
  fromName: 'example_fromName',
  headerImage: 'example_headerImage',
  headerImageAltText: 'example_headerImageAltText',
  messageBody: 'example_messageBody',
  name: 'example_name',
  subject: 'example_subject',
})
```


### EmbeddableResponseDto

Create an instance: `const embeddable_response_dto = client.EmbeddableResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `url` | `string` |  |

#### Example: Load

```ts
const embeddable_response_dto = await client.EmbeddableResponseDto().load({ reference_line_item_id: 'reference_line_item_id' })
```


### ExchangeRatesWithDisclaimer

Create an instance: `const exchange_rates_with_disclaimer = client.ExchangeRatesWithDisclaimer()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `baseCurrency` | `string` |  |
| `baseFx` | `string` |  |
| `lastModifiedDate` | `string` |  |
| `rewardCurrency` | `string` |  |

#### Example: List

```ts
const exchange_rates_with_disclaimers = await client.ExchangeRatesWithDisclaimer().list()
```


### LineItem

Create an instance: `const line_item = client.LineItem()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` |  |
| `accountNumber` | `string` |  |
| `amountCharged` | `Record<string, any>` |  |
| `amountIssued` | `Record<string, any>` |  |
| `campaign` | `string` |  |
| `canCancel` | `boolean` |  |
| `canFreeze` | `boolean` |  |
| `customerIdentifier` | `string` |  |
| `dateIssued` | `string` |  |
| `deliveryMethod` | `string` |  |
| `deliveryStatus` | `string` |  |
| `emailStatus` | `string` |  |
| `etid` | `string` |  |
| `expirationDate` | `string` |  |
| `externalReferenceLineItemID` | `string` |  |
| `id` | `string` |  |
| `lineItemActionHistory` | `any[]` |  |
| `lineItemActionReason` | `string` |  |
| `lineItemErrors` | `any[]` | Errors related to the line item |
| `lineNumber` | `number` |  |
| `orderNotes` | `string` |  |
| `orderSource` | `string` |  |
| `orderStatus` | `string` |  |
| `ptid` | `string` |  |
| `purchaseOrderNumber` | `string` |  |
| `quantity` | `number` | quantity of line items |
| `recipient` | `Record<string, any>` |  |
| `redemptionHistory` | `any[]` |  |
| `referenceLineItemID` | `string` |  |
| `referenceOrderID` | `string` |  |
| `reissuedFromReferenceLineItemId` | `string` | Reissued from reference line item ID |
| `reissuedToReferenceLineItemId` | `string` | Reissued to reference line item ID |
| `remainingBalance` | `number` |  |
| `resendHistory` | `any[]` |  |
| `reward` | `Record<string, any>` |  |
| `rewardName` | `string` |  |
| `rewardStatus` | `string` |  |
| `rewardViewHistory` | `any[]` |  |
| `sender` | `Record<string, any>` |  |
| `status` | `string` |  |
| `utid` | `string` |  |

#### Example: Load

```ts
const line_item = await client.LineItem().load({ id: 'line_item_id' })
```

#### Example: List

```ts
const line_items = await client.LineItem().list()
```

#### Example: Create

```ts
const line_item = await client.LineItem().create({
  reference_line_item_id: 'example_reference_line_item_id',
  accountIdentifier: 'example_accountIdentifier',
  accountNumber: 'example_accountNumber',
  amountIssued: {},
  customerIdentifier: 'example_customerIdentifier',
  dateIssued: 'example_dateIssued',
  emailStatus: 'example_emailStatus',
  etid: 'example_etid',
  expirationDate: 'example_expirationDate',
  lineNumber: 1,
  orderSource: 'example_orderSource',
  orderStatus: 'example_orderStatus',
  referenceLineItemID: 'example_referenceLineItemID',
  referenceOrderID: 'example_referenceOrderID',
  reward: {},
  rewardName: 'example_rewardName',
  status: 'example_status',
  utid: 'example_utid',
})
```


### LowBalanceAlertListView

Create an instance: `const low_balance_alert_list_view = client.LowBalanceAlertListView()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` |  |
| `balanceAlertDisplayName` | `string` |  |
| `balanceAlertID` | `string` |  |
| `balanceAlertNotification` | `any[]` |  |
| `balanceAlertThreshold` | `number` |  |
| `createdAt` | `string` |  |
| `customerIdentifier` | `string` |  |

#### Example: List

```ts
const low_balance_alert_list_views = await client.LowBalanceAlertListView().list({ account_identifier: "example", customer_identifier: "example" })
```


### LowBalanceAlertView

Create an instance: `const low_balance_alert_view = client.LowBalanceAlertView()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` |  |
| `balanceAlertDisplayName` | `string` | A friendly name for this low balance alert (will be displayed in the Tango Portal). |
| `balanceAlertID` | `string` |  |
| `balanceAlertNotification` | `any[]` | Send low balance notification emails to the following address(es). |
| `balanceAlertThreshold` | `number` | The threshold amount that will trigger the low balance alert. |
| `createdAt` | `string` |  |
| `customerIdentifier` | `string` |  |

#### Example: Load

```ts
const low_balance_alert_view = await client.LowBalanceAlertView().load({ account_id: 'account_id', balance_alert_id: 'balance_alert_id', customer_identifier: 'customer_identifier' })
```

#### Example: Create

```ts
const low_balance_alert_view = await client.LowBalanceAlertView().create({
  account_identifier: 'example_account_identifier',
  customer_identifier: 'example_customer_identifier',
})
```


### MobileCountry

Create an instance: `const mobile_country = client.MobileCountry()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `countryCode` | `string` |  |
| `countryName` | `string` |  |
| `isoCode` | `string` |  |
| `languageCode` | `string` |  |

#### Example: Load

```ts
const mobile_country = await client.MobileCountry().load()
```


### N14Webhook

Create an instance: `const n14_webhook = client.N14Webhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `any[]` | The categories the customer wants to subscribe to. |
| `createdAt` | `string` | The date and time the webhook was created. |
| `eventTypes` | `any[]` | The event types the customer wants to subscribe to. |
| `expiresAt` | `string` | The date and time the webhook expires. |
| `headers` | `any[]` | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `string` | The HMAC secret key used to sign the webhook payload. |
| `id` | `string` |  |
| `payloadVerificationMethod` | `string` | Method to verify webhook payload authenticity |
| `signingCertificate` | `string` | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `string` | The date and time when the webhook was last updated. |
| `url` | `string` | The URL of the customer's webhook listener. |
| `webhookId` | `string` | The ID of the webhook. |

#### Example: Load

```ts
const n14_webhook = await client.N14Webhook().load({ webhook_id: 'webhook_id' })
```

#### Example: List

```ts
const n14_webhooks = await client.N14Webhook().list()
```

#### Example: Create

```ts
const n14_webhook = await client.N14Webhook().create({
  test_name: 'example_test_name',
  webhook_id: 'example_webhook_id',
  url: 'example_url',
})
```


### N1Customer

Create an instance: `const n1_customer = client.N1Customer()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const n1_customer = await client.N1Customer().load({ customer_identifier: 'customer_identifier' })
```


### N2Account

Create an instance: `const n2_account = client.N2Account()`


### N3Fund

Create an instance: `const n3_fund = client.N3Fund()`


### N8LineItem

Create an instance: `const n8_line_item = client.N8LineItem()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `campaign` | `string` | optional campaign that may be used to administratively categorize a specific order. |
| `id` | `string` |  |
| `orderNotes` | `string` | Optional order notes (up to 150 characters) |
| `purchaseOrderNumber` | `string` | The Purchase Order Number associated with this order. |


### N9DigitalTemplate

Create an instance: `const n9_digital_template = client.N9DigitalTemplate()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Order

Create an instance: `const order = client.Order()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` | Specify the account this order will be deducted from |
| `accountNumber` | `string` |  |
| `amount` | `number` | Specify the face value of of the reward. |
| `amountCharged` | `Record<string, any>` |  |
| `asyncOrderEntity` | `Record<string, any>` |  |
| `campaign` | `string` | Optional. |
| `createdAt` | `string` |  |
| `customFields` | `Record<string, any>` | Optional. |
| `customerIdentifier` | `string` | Specify the customer associated with the order. |
| `deliveryMethod` | `string` | Specify delivery method for the order |
| `denomination` | `Record<string, any>` |  |
| `emailSubject` | `string` | Optional. |
| `etid` | `string` | Optional. |
| `expirationDate` | `string` | Optional for Promo Links, the exact calendar date the Promo Link will expire. |
| `externalRefID` | `string` | Optional. |
| `id` | `string` |  |
| `lineItemStatus` | `string` |  |
| `message` | `string` | Optional gift message |
| `notes` | `string` | Optional order notes. |
| `orderClientSource` | `string` |  |
| `orderExternalRefIdDupe` | `boolean` |  |
| `orderStatus` | `string` |  |
| `ptid` | `string` | Only required for Printed Reward Links, the unique identifier for the Printed Reward Link Template provided in the Tango Portal on the Printed Template page. |
| `purchaseOrderNumber` | `string` | The Purchase Order Number associated with this order. |
| `recipient` | `Record<string, any>` | Required if deliveryMethod is EMAIL, PHONE, or ADDRESS. |
| `redemptionInstructions` | `string` |  |
| `referenceLineItemID` | `string` |  |
| `referenceOrderID` | `string` |  |
| `reward` | `Record<string, any>` |  |
| `rewardName` | `string` |  |
| `sendEmail` | `boolean` | Deprecated Oct 1, 2025. |
| `sender` | `Record<string, any>` | Optional. |
| `status` | `string` |  |
| `utid` | `string` | The unique identifier for the reward you are sending as provided in the Get Catalog call |

#### Example: Load

```ts
const order = await client.Order().load({ id: 'order_id' })
```

#### Example: List

```ts
const orders = await client.Order().list()
```

#### Example: Create

```ts
const order = await client.Order().create({
  accountIdentifier: 'example_accountIdentifier',
  accountNumber: 'example_accountNumber',
  amount: 1,
  amountCharged: {},
  campaign: 'example_campaign',
  createdAt: 'example_createdAt',
  customerIdentifier: 'example_customerIdentifier',
  emailSubject: 'example_emailSubject',
  etid: 'example_etid',
  message: 'example_message',
  referenceOrderID: 'example_referenceOrderID',
  reward: {},
  rewardName: 'example_rewardName',
  status: 'example_status',
  utid: 'example_utid',
})
```


### OrderViewSummary

Create an instance: `const order_view_summary = client.OrderViewSummary()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Optional. |
| `deliveryMethod` | `string` | Optional. |
| `notes` | `string` | Optional order notes (up to 150 characters). |
| `otherReason` | `string` | Required when reasonCode is "OTHER", enter the reason why the line item is being reissued. |
| `reasonCode` | `string` | Required. |
| `recipient` | `Record<string, any>` | Optional. |

#### Example: Create

```ts
const order_view_summary = await client.OrderViewSummary().create({
  reference_line_item_id: 'example_reference_line_item_id',
  reasonCode: 'example_reasonCode',
})
```


### PrepaidCardInfo

Create an instance: `const prepaid_card_info = client.PrepaidCardInfo()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `balance` | `Record<string, any>` |  |
| `card` | `Record<string, any>` |  |
| `comments` | `any[]` |  |
| `registration` | `Record<string, any>` |  |

#### Example: Load

```ts
const prepaid_card_info = await client.PrepaidCardInfo().load({ reference_line_item_id: 'reference_line_item_id' })
```


### PrepaidCardTransaction

Create an instance: `const prepaid_card_transaction = client.PrepaidCardTransaction()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `journal` | `any[]` |  |
| `page` | `Record<string, any>` |  |

#### Example: Load

```ts
const prepaid_card_transaction = await client.PrepaidCardTransaction().load({ reference_line_item_id: 'reference_line_item_id' })
```


### ReissueCard

Create an instance: `const reissue_card = client.ReissueCard()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commentText` | `string` | Optional comment for the card replacement. |
| `id` | `string` |  |
| `reason` | `string` | Reason for the card replacement. |
| `status` | `string` | Status of the reissue request. |
| `updatedBy` | `string` | Identifier of the agent initiating the request. |

#### Example: Create

```ts
const reissue_card = await client.ReissueCard().create({
  id: 'example_id',
  reason: 'example_reason',
  updatedBy: 'example_updatedBy',
})
```


### ReplacementReason

Create an instance: `const replacement_reason = client.ReplacementReason()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `replacementReasons` | `any[]` | List of valid replacement reason codes. |

#### Example: List

```ts
const replacement_reasons = await client.ReplacementReason().list()
```


### Resend

Create an instance: `const resend = client.Resend()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `newDeliveryMethod` | `string` | The delivery method used to re-deliver the reward. |
| `newEmail` | `string` | A new email address to re-deliver this order to. |
| `newEtid` | `string` | A new etid used to re-deliver an order. |
| `newMobile` | `string` | A new mobile number to use for resending an order. |
| `newMobileNumber` | `string` | A new phone number to re-deliver this order to. |
| `otherReason` | `string` | Required when lineItemResendReasonCode is "OTHER", enter the reason why the line item is being RESENT |
| `reasonCode` | `string` | Enter the reason why this line item is being RESENT (respectively) |

#### Example: Create

```ts
const resend = await client.Resend().create({
  line_item_id: 'example_line_item_id',
})
```


### RewardReasonsMap

Create an instance: `const reward_reasons_map = client.RewardReasonsMap()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `CANCEL` | `Record<string, any>` | Map of cancel reasons |
| `CANCEL_AND_REISSUE` | `Record<string, any>` | Map of cancel and reissue reasons |
| `FREEZE` | `Record<string, any>` | Map of freeze reasons |
| `UNFREEZE` | `Record<string, any>` | Map of unfreeze reasons |

#### Example: Load

```ts
const reward_reasons_map = await client.RewardReasonsMap().load()
```


### TransferFund

Create an instance: `const transfer_fund = client.TransferFund()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Specify the currency amount of the funds being transferred. |
| `externalRefID` | `string` | specify the external reference id to associate with this funding action. |
| `transferDate` | `string` |  |
| `transferFrom` | `Record<string, any>` | The accountIdentifier for the Account transferring funds from. |
| `transferNotes` | `string` | Optional transfer notes (up to 150 characters) |
| `transferTo` | `Record<string, any>` | The accountIdentifier for the Account transferring funds to. |
| `transferredAmount` | `number` |  |

#### Example: Create

```ts
const transfer_fund = await client.TransferFund().create({
  amount: 1,
})
```


### UpdateAccount

Create an instance: `const update_account = client.UpdateAccount()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `registration` | `Record<string, any>` |  |
| `status` | `string` |  |
| `updatedBy` | `string` |  |

#### Example: Create

```ts
const update_account = await client.UpdateAccount().create({
  id: 'example_id',
  registration: {},
})
```


### UpdateWebhookSubscriptionResponseView

Create an instance: `const update_webhook_subscription_response_view = client.UpdateWebhookSubscriptionResponseView()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `any[]` | The categories the customer is subscribed to. |
| `createdAt` | `string` | The date and time the webhook was created. |
| `eventTypes` | `any[]` | The event types the customer is subscribed to. |
| `expiresAt` | `string` | The date and time the webhook expires. |
| `headers` | `any[]` | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `string` | The HMAC secret key used to sign the webhook payload. |
| `payloadVerificationMethod` | `string` | Method to verify webhook payload integrity |
| `signingCertificate` | `string` | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `string` | The date and time when the webhook was last updated. |
| `url` | `string` | The URL of the customer's webhook listener. |
| `webhookId` | `string` | The ID of the webhook. |


### Webhook

Create an instance: `const webhook = client.Webhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `any[]` | The categories the customer wants to subscribe to. |
| `createdAt` | `string` | The date and time the webhook was created. |
| `eventTypes` | `any[]` | The event types the customer wants to subscribe to. |
| `expiresAt` | `string` | The date and time the webhook expires. |
| `headers` | `any[]` | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `string` | The HMAC secret key used to sign the webhook payload. |
| `id` | `string` |  |
| `payloadVerificationMethod` | `string` | Method to verify webhook payload integrity. |
| `signingCertificate` | `string` | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `string` | The date and time when the webhook was last updated. |
| `url` | `string` | The URL of the customer's webhook listener. |
| `webhookId` | `string` | The ID of the webhook. |

#### Example: Load

```ts
const webhook = await client.Webhook().load({ id: 'webhook_id' })
```

#### Example: Create

```ts
const webhook = await client.Webhook().create({
  id: 'example_id',
})
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Request/response capture ring buffer for debugging |
| [`idempotency`](#idempotency) | Idempotency keys for safe retries of mutating operations |
| [`metrics`](#metrics) | Statistics capture: per-operation counters and latency |
| [`paging`](#paging) | Pagination signals for list operations |
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Request/response capture ring buffer for debugging.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency keys for safe retries of mutating operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Statistics capture: per-operation counters and latency.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Pagination signals for list operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **DebugFeature**: Request/response capture ring buffer for debugging
- **IdempotencyFeature**: Idempotency keys for safe retries of mutating operations
- **MetricsFeature**: Statistics capture: per-operation counters and latency
- **PagingFeature**: Pagination signals for list operations
- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
tangocard/
├── src/
│   ├── TangocardSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { TangocardSDK } from '@voxgig-sdk/tangocard'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const rewardreasonsmap = client.RewardReasonsMap()
await rewardreasonsmap.load()

// rewardreasonsmap.data() now returns the rewardreasonsmap data from the last `load`
// rewardreasonsmap.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
