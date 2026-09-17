# Tangocard TypeScript SDK Reference

Complete API reference for the Tangocard TypeScript SDK.


## TangocardSDK

### Constructor

```ts
new TangocardSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.secret` | `string` | API secret for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TangocardSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = TangocardSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `TangocardSDK` instance in test mode.


### Instance Methods

#### `Account(data?: object)`

Create a new `Account` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountEntity` instance.

#### `AddCommentEscalation(data?: object)`

Create a new `AddCommentEscalation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AddCommentEscalationEntity` instance.

#### `AllEventType(data?: object)`

Create a new `AllEventType` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AllEventTypeEntity` instance.

#### `AsyncOrder(data?: object)`

Create a new `AsyncOrder` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AsyncOrderEntity` instance.

#### `AsyncOrderDetailView(data?: object)`

Create a new `AsyncOrderDetailView` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AsyncOrderDetailViewEntity` instance.

#### `AsyncOrderLineItemsView(data?: object)`

Create a new `AsyncOrderLineItemsView` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AsyncOrderLineItemsViewEntity` instance.

#### `AsyncReasonCodesView(data?: object)`

Create a new `AsyncReasonCodesView` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AsyncReasonCodesViewEntity` instance.

#### `AsyncUpdateLineItemView(data?: object)`

Create a new `AsyncUpdateLineItemView` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AsyncUpdateLineItemViewEntity` instance.

#### `BalanceAlertView(data?: object)`

Create a new `BalanceAlertView` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BalanceAlertViewEntity` instance.

#### `BrandCategoriesView(data?: object)`

Create a new `BrandCategoriesView` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BrandCategoriesViewEntity` instance.

#### `Catalog(data?: object)`

Create a new `Catalog` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CatalogEntity` instance.

#### `ChoiceProduct(data?: object)`

Create a new `ChoiceProduct` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ChoiceProductEntity` instance.

#### `CountryViewSummary(data?: object)`

Create a new `CountryViewSummary` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CountryViewSummaryEntity` instance.

#### `CreateAccountCriterion(data?: object)`

Create a new `CreateAccountCriterion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateAccountCriterionEntity` instance.

#### `CreateCustomerCriterion(data?: object)`

Create a new `CreateCustomerCriterion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateCustomerCriterionEntity` instance.

#### `CredentialTypeView(data?: object)`

Create a new `CredentialTypeView` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CredentialTypeViewEntity` instance.

#### `CreditCard(data?: object)`

Create a new `CreditCard` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreditCardEntity` instance.

#### `CreditCardDeposit(data?: object)`

Create a new `CreditCardDeposit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreditCardDepositEntity` instance.

#### `CreditCardUnregister(data?: object)`

Create a new `CreditCardUnregister` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreditCardUnregisterEntity` instance.

#### `Customer(data?: object)`

Create a new `Customer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomerEntity` instance.

#### `EmailTemplateListView(data?: object)`

Create a new `EmailTemplateListView` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmailTemplateListViewEntity` instance.

#### `EmailTemplateViewVerbose(data?: object)`

Create a new `EmailTemplateViewVerbose` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmailTemplateViewVerboseEntity` instance.

#### `EmbeddableResponseDto(data?: object)`

Create a new `EmbeddableResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmbeddableResponseDtoEntity` instance.

#### `ExchangeRatesWithDisclaimer(data?: object)`

Create a new `ExchangeRatesWithDisclaimer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ExchangeRatesWithDisclaimerEntity` instance.

#### `LineItem(data?: object)`

Create a new `LineItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LineItemEntity` instance.

#### `LowBalanceAlertListView(data?: object)`

Create a new `LowBalanceAlertListView` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LowBalanceAlertListViewEntity` instance.

#### `LowBalanceAlertView(data?: object)`

Create a new `LowBalanceAlertView` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LowBalanceAlertViewEntity` instance.

#### `MobileCountry(data?: object)`

Create a new `MobileCountry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MobileCountryEntity` instance.

#### `N14Webhook(data?: object)`

Create a new `N14Webhook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `N14WebhookEntity` instance.

#### `N1Customer(data?: object)`

Create a new `N1Customer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `N1CustomerEntity` instance.

#### `N2Account(data?: object)`

Create a new `N2Account` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `N2AccountEntity` instance.

#### `N3Fund(data?: object)`

Create a new `N3Fund` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `N3FundEntity` instance.

#### `N8LineItem(data?: object)`

Create a new `N8LineItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `N8LineItemEntity` instance.

#### `N9DigitalTemplate(data?: object)`

Create a new `N9DigitalTemplate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `N9DigitalTemplateEntity` instance.

#### `Order(data?: object)`

Create a new `Order` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrderEntity` instance.

#### `OrderViewSummary(data?: object)`

Create a new `OrderViewSummary` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrderViewSummaryEntity` instance.

#### `PrepaidCardInfo(data?: object)`

Create a new `PrepaidCardInfo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PrepaidCardInfoEntity` instance.

#### `PrepaidCardTransaction(data?: object)`

Create a new `PrepaidCardTransaction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PrepaidCardTransactionEntity` instance.

#### `ReissueCard(data?: object)`

Create a new `ReissueCard` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReissueCardEntity` instance.

#### `ReplacementReason(data?: object)`

Create a new `ReplacementReason` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReplacementReasonEntity` instance.

#### `Resend(data?: object)`

Create a new `Resend` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ResendEntity` instance.

#### `RewardReasonsMap(data?: object)`

Create a new `RewardReasonsMap` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RewardReasonsMapEntity` instance.

#### `TransferFund(data?: object)`

Create a new `TransferFund` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TransferFundEntity` instance.

#### `UpdateAccount(data?: object)`

Create a new `UpdateAccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateAccountEntity` instance.

#### `UpdateWebhookSubscriptionResponseView(data?: object)`

Create a new `UpdateWebhookSubscriptionResponseView` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateWebhookSubscriptionResponseViewEntity` instance.

#### `Webhook(data?: object)`

Create a new `Webhook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhookEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `TangocardSDK.test()`.

**Returns:** `TangocardSDK` instance in test mode.


---

## AccountEntity

```ts
const account = client.Account()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes |  |
| `accountNumber` | `string` | Yes |  |
| `contactEmail` | `string` | No | optional, an email address for a designated representative for this account. |
| `createdAt` | `string` | Yes |  |
| `currencyCode` | `string` | Yes |  |
| `currentBalance` | `number` | Yes |  |
| `displayName` | `string` | Yes | optional, a friendly name for this account. |
| `fundingNotification` | `any[]` | No | optional, send funding notification emails to the following address(es). |
| `id` | `string` | No |  |
| `status` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `accountIdentifier` | - | - |
| `accountNumber` | - | - |
| `contactEmail` | - | - |
| `createdAt` | - | - |
| `currencyCode` | - | - |
| `currentBalance` | - | - |
| `displayName` | - | Yes |
| `fundingNotification` | - | - |
| `id` | - | - |
| `status` | - | - |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Account().load({ id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Account().update({
  id: 'account_id',
  customer_identifier: 'customer_identifier',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AddCommentEscalationEntity

```ts
const add_comment_escalation = client.AddCommentEscalation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `number` | No | Assignee ID. |
| `commentText` | `string` | Yes | Free-text comment to add to the prepaid card. |
| `id` | `string` | No |  |
| `inquiryCategoryCode` | `number` | No | Inquiry category code. |
| `inquiryIdNumber` | `number` | No | Inquiry ID number. |
| `inquirySource` | `string` | No | Origination source identifier (e.g. |
| `inquiryTypeCode` | `number` | No | Inquiry type code. |
| `issueDescription` | `string` | Yes | Short description of the issue. |
| `status` | `string` | No | Status of the inquiry (e.g. |
| `userId` | `string` | No | Agent or CSR user ID. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AddCommentEscalation().create({
  id: 'example_id',
  commentText: 'example_commentText',
  issueDescription: 'example_issueDescription',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AddCommentEscalationEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AllEventTypeEntity

```ts
const all_event_type = client.AllEventType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No | The category of events can be subscribed to. |
| `eventTypes` | `any[]` | No | The event types that can be subscribed to. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AllEventType().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AllEventTypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AsyncOrderEntity

```ts
const async_order = client.AsyncOrder()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes | specify the account this order will be deducted from |
| `accountNumber` | `string` | Yes |  |
| `amountCharged` | `Record<string, any>` | No | Initial value and the total charged amount on the account |
| `campaign` | `string` | No | Optional. |
| `createdAt` | `string` | No |  |
| `customerIdentifier` | `string` | Yes | specify the customer associated with the order. |
| `duplicateLineItemRefIds` | `Record<string, any>` | No | If any duplicate duplicateLineItemRefIds exist in the request |
| `externalRefID` | `string` | No | Required. |
| `failedLineItems` | `any[]` | No | Failed line items list (business validations) |
| `fulfillBy` | `string` | No |  |
| `lineItems` | `any[]` | Yes | Line Items of the bulk order a required field |
| `notes` | `string` | No | Optional order notes. |
| `orderStatus` | `string` | No |  |
| `purchaseOrderNumber` | `string` | No | The Purchase Order Number associated with this order. |
| `referenceOrderID` | `string` | Yes |  |
| `sender` | `Record<string, any>` | No | Optional. |
| `status` | `string` | No | This status reflects about cart status or validation status based on the processing |
| `totalLineItems` | `number` | No | Total number of line items submitted in the request |
| `totalLineItemsRows` | `number` | No |  |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `accountIdentifier` | - | - |
| `accountNumber` | - | - |
| `amountCharged` | - | - |
| `campaign` | Yes | - |
| `createdAt` | Yes | - |
| `customerIdentifier` | - | - |
| `duplicateLineItemRefIds` | - | - |
| `externalRefID` | - | Yes |
| `failedLineItems` | - | - |
| `fulfillBy` | - | - |
| `lineItems` | - | - |
| `notes` | - | - |
| `orderStatus` | - | - |
| `purchaseOrderNumber` | - | - |
| `referenceOrderID` | - | - |
| `sender` | - | - |
| `status` | - | - |
| `totalLineItems` | - | - |
| `totalLineItemsRows` | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AsyncOrder().create({
  accountIdentifier: 'example_accountIdentifier',
  accountNumber: 'example_accountNumber',
  customerIdentifier: 'example_customerIdentifier',
  lineItems: [],
  referenceOrderID: 'example_referenceOrderID',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AsyncOrder().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AsyncOrderEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AsyncOrderDetailViewEntity

```ts
const async_order_detail_view = client.AsyncOrderDetailView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | No | Account identifier |
| `amountCharged` | `Record<string, any>` | No | Initial value and the total charged amount on the account |
| `campaign` | `string` | No | Campaign name |
| `completedAt` | `string` | No | Order completion timestamp |
| `createdAt` | `string` | No | Order creation timestamp |
| `customerIdentifier` | `string` | No | Customer identifier |
| `externalRefID` | `string` | No | External reference ID provided by client |
| `id` | `string` | No |  |
| `lineItems` | `any[]` | No | list of line items |
| `notes` | `string` | No | Order notes |
| `orderErrors` | `any[]` | No | Order level errors |
| `orderStatus` | `string` | No | Current status of the order |
| `pagination` | `Record<string, any>` | No | Pagination information |
| `purchaseOrderNumber` | `string` | No | Purchase order number |
| `referenceOrderID` | `string` | No | Internal reference order ID |
| `sender` | `Record<string, any>` | No | Sender information |
| `totalLineItems` | `number` | No | Total number of line items |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AsyncOrderDetailView().load({ account_identifier: 'account_identifier', customer_identifier: 'customer_identifier', external_ref_id: 'external_ref_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AsyncOrderDetailView().update({
  account_identifier: 'account_identifier',
  customer_identifier: 'customer_identifier',
  external_ref_id: 'external_ref_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AsyncOrderDetailViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AsyncOrderLineItemsViewEntity

```ts
const async_order_line_items_view = client.AsyncOrderLineItemsView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes |  |
| `amountCharged` | `Record<string, any>` | No | Initial value and the total charged amount on the account |
| `campaign` | `string` | No |  |
| `customerIdentifier` | `string` | Yes |  |
| `externalRefID` | `string` | No |  |
| `lineItems` | `any[]` | No | The List of Line Items for the Async Order. |
| `orderErrors` | `any[]` | No | The List of Errors for the Async Order. |
| `orderNotes` | `string` | No |  |
| `orderStatus` | `string` | Yes |  |
| `pagination` | `Record<string, any>` | No | The cursor for pagination of the async order line items. |
| `purchaseOrderNumber` | `string` | No |  |
| `referenceOrderID` | `string` | Yes |  |
| `sender` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AsyncOrderLineItemsView().list({ account_id: "example", customer_id: "example", external_ref_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AsyncOrderLineItemsViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AsyncReasonCodesViewEntity

```ts
const async_reason_codes_view = client.AsyncReasonCodesView()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AsyncReasonCodesView().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AsyncReasonCodesViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AsyncUpdateLineItemViewEntity

```ts
const async_update_line_item_view = client.AsyncUpdateLineItemView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deliveryDate` | `string` | No | Optional. |
| `lineItemNote` | `string` | No | Optional line item notes (up to 150 characters) |
| `senderInfo` | `Record<string, any>` | No | Optional. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AsyncUpdateLineItemView().update({
  reference_line_item_id: 'reference_line_item_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AsyncUpdateLineItemViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BalanceAlertViewEntity

```ts
const balance_alert_view = client.BalanceAlertView()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.BalanceAlertView().remove({ account_id: 'account_id', balance_alert_id: 'balance_alert_id', customer_identifier: 'customer_identifier' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BalanceAlertViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BrandCategoriesViewEntity

```ts
const brand_categories_view = client.BrandCategoriesView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `identifier` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BrandCategoriesView().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BrandCategoriesViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CatalogEntity

```ts
const catalog = client.Catalog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `barcodeType` | `string` | No |  |
| `brandKey` | `string` | Yes |  |
| `brandName` | `string` | Yes |  |
| `brandRequirements` | `Record<string, any>` | Yes |  |
| `categories` | `any[]` | Yes |  |
| `createdDate` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `imageUrls` | `Record<string, any>` | Yes |  |
| `items` | `any[]` | Yes |  |
| `lastUpdateDate` | `string` | Yes |  |
| `shortDescription` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `terms` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Catalog().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CatalogEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ChoiceProductEntity

```ts
const choice_product = client.ChoiceProduct()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `countries` | `any[]` | No |  |
| `currencyCode` | `string` | No |  |
| `id` | `string` | No |  |
| `rewardName` | `string` | No |  |
| `utid` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ChoiceProduct().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ChoiceProduct().load({ id: 'choice_product_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ChoiceProductEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CountryViewSummaryEntity

```ts
const country_view_summary = client.CountryViewSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `countryName` | `string` | Yes |  |
| `preferredCurrency` | `string` | Yes |  |
| `threeLetterCode` | `string` | Yes |  |
| `twoLetterCode` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CountryViewSummary().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CountryViewSummaryEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateAccountCriterionEntity

```ts
const create_account_criterion = client.CreateAccountCriterion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes | A unique identifier for this account. |
| `contactEmail` | `string` | Yes | An email address for a designated representative for this account. |
| `currencyCode` | `string` | No | The currency this account will accept for deposits/withdraws. |
| `displayName` | `string` | Yes | A friendly name for this account. |
| `fundingNotification` | `any[]` | No | optional, send funding notification emails to the following address(es) |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreateAccountCriterion().create({
  customer_identifier: 'example_customer_identifier',
  accountIdentifier: 'example_accountIdentifier',
  contactEmail: 'example_contactEmail',
  displayName: 'example_displayName',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateAccountCriterionEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateCustomerCriterionEntity

```ts
const create_customer_criterion = client.CreateCustomerCriterion()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateCustomerCriterionEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CredentialTypeViewEntity

```ts
const credential_type_view = client.CredentialTypeView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credentialType` | `string` | Yes |  |
| `description` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CredentialTypeView().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CredentialTypeViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreditCardEntity

```ts
const credit_card = client.CreditCard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes | specify the account this credit card is associated with |
| `accountNumber` | `string` | Yes |  |
| `activationDate` | `string` | Yes |  |
| `billingAddress` | `Record<string, any>` | Yes | required Enter the billing address information for the credit card that is being registered |
| `contactInformation` | `any[]` | Yes | Optional. |
| `createdDate` | `string` | Yes |  |
| `creditCard` | `Record<string, any>` | Yes | required Enter the credit card details that is being registered |
| `customerIdentifier` | `string` | Yes | specify the customer associated with the credit card. |
| `expirationDate` | `string` | Yes |  |
| `id` | `string` | No |  |
| `ipAddress` | `string` | Yes | specify the The IP address of the person adding the credit card |
| `label` | `string` | Yes | specify a label for the credit card |
| `lastFourDigits` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `token` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `accountIdentifier` | - | - |
| `accountNumber` | - | - |
| `activationDate` | - | - |
| `billingAddress` | - | - |
| `contactInformation` | - | Yes |
| `createdDate` | - | - |
| `creditCard` | - | - |
| `customerIdentifier` | - | - |
| `expirationDate` | - | - |
| `id` | - | - |
| `ipAddress` | - | - |
| `label` | - | - |
| `lastFourDigits` | - | - |
| `status` | - | - |
| `token` | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreditCard().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CreditCard().load({ id: 'credit_card_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreditCardEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreditCardDepositEntity

```ts
const credit_card_deposit = client.CreditCardDeposit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes | specify the account this credit card is associated with |
| `accountNumber` | `string` | Yes |  |
| `amount` | `number` | Yes | specify the amount to fund in USD |
| `amountCharged` | `number` | Yes |  |
| `createdDate` | `string` | Yes |  |
| `creditCardToken` | `string` | Yes | specify the credit card token to fund with |
| `customerIdentifier` | `string` | Yes | specify the customer associated with the credit card. |
| `externalRefID` | `string` | No | specify the external reference id to associate with this funding action. |
| `feePercent` | `number` | Yes |  |
| `id` | `string` | No |  |
| `referenceDepositID` | `string` | Yes |  |
| `status` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreditCardDeposit().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CreditCardDeposit().load({ id: 'credit_card_deposit_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreditCardDepositEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreditCardUnregisterEntity

```ts
const credit_card_unregister = client.CreditCardUnregister()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes | Specify the account this credit card is associated with. |
| `createdDate` | `string` | Yes |  |
| `creditCardToken` | `string` | Yes | Specify the credit card token to unregister. |
| `customerIdentifier` | `string` | Yes | Specify the customer associated with the credit card. |
| `message` | `string` | Yes |  |
| `token` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreditCardUnregister().create({
  accountIdentifier: 'example_accountIdentifier',
  createdDate: 'example_createdDate',
  creditCardToken: 'example_creditCardToken',
  customerIdentifier: 'example_customerIdentifier',
  message: 'example_message',
  token: 'example_token',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreditCardUnregisterEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomerEntity

```ts
const customer = client.Customer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accounts` | `any[]` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `customerIdentifier` | `string` | Yes | A unique identifier for this customer. |
| `displayName` | `string` | Yes | A friendly name for this customer. |
| `id` | `string` | No |  |
| `status` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Customer().create({
  accounts: [],
  createdAt: 'example_createdAt',
  customerIdentifier: 'example_customerIdentifier',
  displayName: 'example_displayName',
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Customer().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Customer().load({ id: 'customer_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomerEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmailTemplateListViewEntity

```ts
const email_template_list_view = client.EmailTemplateListView()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmailTemplateListViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmailTemplateViewVerboseEntity

```ts
const email_template_view_verbose = client.EmailTemplateViewVerbose()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accentColor` | `string` | Yes | A Hex color value, six hexadecimal digits preceded by a pound sign, used as an accent in the email. |
| `accessControl` | `any[]` | No | (Optional) Which Customers and/or Accounts should have access to this template. |
| `accessControls` | `any[]` | No |  |
| `closing` | `string` | Yes | After the reward credential, a space to close the email message to the recipient. |
| `customerServiceMessage` | `string` | No | If left null, Tango Card's Customer Support contact information will be included. |
| `defaults` | `any[]` | No | If you want this template to be used at order time for the given Platform, Customer or Account when the Email Template Identifier (etid) is not provided with the order. |
| `etid` | `string` | Yes |  |
| `fromName` | `string` | Yes | The name that will appear in the From line of the email and the {from_name} in the text message. |
| `headerImage` | `string` | Yes | A Base64 encoded string of an image that will show as the header of the email. |
| `headerImageAltText` | `string` | Yes | The Alt Text for the Header Image in the email. |
| `messageBody` | `string` | Yes | The message body for the email. |
| `name` | `string` | Yes | A unique name to give the template. |
| `smsMessageBody` | `string` | No | The message body for the SMS. |
| `subject` | `string` | Yes | The Subject of the email. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `accentColor` | - | - | - | Yes |
| `accessControl` | - | - | - | - |
| `accessControls` | - | - | - | - |
| `closing` | - | - | - | Yes |
| `customerServiceMessage` | - | - | - | - |
| `defaults` | - | - | - | - |
| `etid` | - | - | - | - |
| `fromName` | - | - | - | Yes |
| `headerImage` | - | - | - | Yes |
| `headerImageAltText` | - | - | - | Yes |
| `messageBody` | - | - | - | Yes |
| `name` | - | - | - | Yes |
| `smsMessageBody` | - | - | - | - |
| `subject` | - | - | - | Yes |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EmailTemplateViewVerbose().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EmailTemplateViewVerbose().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.EmailTemplateViewVerbose().load({ etid: 'etid' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.EmailTemplateViewVerbose().update({
  etid: 'etid',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmailTemplateViewVerboseEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmbeddableResponseDtoEntity

```ts
const embeddable_response_dto = client.EmbeddableResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `url` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.EmbeddableResponseDto().load({ reference_line_item_id: 'reference_line_item_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmbeddableResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ExchangeRatesWithDisclaimerEntity

```ts
const exchange_rates_with_disclaimer = client.ExchangeRatesWithDisclaimer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `baseCurrency` | `string` | Yes |  |
| `baseFx` | `string` | Yes |  |
| `lastModifiedDate` | `string` | Yes |  |
| `rewardCurrency` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ExchangeRatesWithDisclaimer().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ExchangeRatesWithDisclaimerEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LineItemEntity

```ts
const line_item = client.LineItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes |  |
| `accountNumber` | `string` | Yes |  |
| `amountCharged` | `Record<string, any>` | No |  |
| `amountIssued` | `Record<string, any>` | Yes |  |
| `campaign` | `string` | No |  |
| `canCancel` | `boolean` | No |  |
| `canFreeze` | `boolean` | No |  |
| `customerIdentifier` | `string` | Yes |  |
| `dateIssued` | `string` | Yes |  |
| `deliveryMethod` | `string` | No |  |
| `deliveryStatus` | `string` | No |  |
| `emailStatus` | `string` | Yes |  |
| `etid` | `string` | Yes |  |
| `expirationDate` | `string` | Yes |  |
| `externalReferenceLineItemID` | `string` | No |  |
| `id` | `string` | No |  |
| `lineItemActionHistory` | `any[]` | No |  |
| `lineItemActionReason` | `string` | No |  |
| `lineItemErrors` | `any[]` | No | Errors related to the line item |
| `lineNumber` | `number` | Yes |  |
| `orderNotes` | `string` | No |  |
| `orderSource` | `string` | Yes |  |
| `orderStatus` | `string` | Yes |  |
| `ptid` | `string` | No |  |
| `purchaseOrderNumber` | `string` | No |  |
| `quantity` | `number` | No | quantity of line items |
| `recipient` | `Record<string, any>` | No |  |
| `redemptionHistory` | `any[]` | No |  |
| `referenceLineItemID` | `string` | Yes |  |
| `referenceOrderID` | `string` | Yes |  |
| `reissuedFromReferenceLineItemId` | `string` | No | Reissued from reference line item ID |
| `reissuedToReferenceLineItemId` | `string` | No | Reissued to reference line item ID |
| `remainingBalance` | `number` | No |  |
| `resendHistory` | `any[]` | No |  |
| `reward` | `Record<string, any>` | Yes |  |
| `rewardName` | `string` | Yes |  |
| `rewardStatus` | `string` | No |  |
| `rewardViewHistory` | `any[]` | No |  |
| `sender` | `Record<string, any>` | No |  |
| `status` | `string` | Yes |  |
| `utid` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cancel` | `/lineItems/{referenceLineItemID}/cancel` | `client.LineItem().create({ $action: 'cancel', ... })` |
| `freeze` | `/lineItems/{referenceLineItemID}/freeze` | `client.LineItem().create({ $action: 'freeze', ... })` |
| `unfreeze` | `/lineItems/{referenceLineItemID}/unfreeze` | `client.LineItem().create({ $action: 'unfreeze', ... })` |

An action returns that action's OWN response, which is not necessarily a
LineItem record — check the API definition for its shape.

```ts
const result = await client.LineItem().create({
  $action: 'cancel',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LineItem().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.LineItem().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.LineItem().load({ id: 'line_item_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LineItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LowBalanceAlertListViewEntity

```ts
const low_balance_alert_list_view = client.LowBalanceAlertListView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | No |  |
| `balanceAlertDisplayName` | `string` | No |  |
| `balanceAlertID` | `string` | No |  |
| `balanceAlertNotification` | `any[]` | No |  |
| `balanceAlertThreshold` | `number` | No |  |
| `createdAt` | `string` | No |  |
| `customerIdentifier` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.LowBalanceAlertListView().list({ account_identifier: "example", customer_identifier: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LowBalanceAlertListViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LowBalanceAlertViewEntity

```ts
const low_balance_alert_view = client.LowBalanceAlertView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | No |  |
| `balanceAlertDisplayName` | `string` | No | A friendly name for this low balance alert (will be displayed in the Tango Portal). |
| `balanceAlertID` | `string` | No |  |
| `balanceAlertNotification` | `any[]` | No | Send low balance notification emails to the following address(es). |
| `balanceAlertThreshold` | `number` | No | The threshold amount that will trigger the low balance alert. |
| `createdAt` | `string` | No |  |
| `customerIdentifier` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LowBalanceAlertView().create({
  account_identifier: 'example_account_identifier',
  customer_identifier: 'example_customer_identifier',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.LowBalanceAlertView().load({ account_id: 'account_id', balance_alert_id: 'balance_alert_id', customer_identifier: 'customer_identifier' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.LowBalanceAlertView().update({
  account_id: 'account_id',
  balance_alert_id: 'balance_alert_id',
  customer_identifier: 'customer_identifier',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LowBalanceAlertViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MobileCountryEntity

```ts
const mobile_country = client.MobileCountry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `countryCode` | `string` | No |  |
| `countryName` | `string` | No |  |
| `isoCode` | `string` | No |  |
| `languageCode` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.MobileCountry().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MobileCountryEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## N14WebhookEntity

```ts
const n14_webhook = client.N14Webhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `any[]` | No | The categories the customer wants to subscribe to. |
| `createdAt` | `string` | No | The date and time the webhook was created. |
| `eventTypes` | `any[]` | No | The event types the customer wants to subscribe to. |
| `expiresAt` | `string` | No | The date and time the webhook expires. |
| `headers` | `any[]` | No | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `string` | No | The HMAC secret key used to sign the webhook payload. |
| `id` | `string` | No |  |
| `payloadVerificationMethod` | `string` | No | Method to verify webhook payload authenticity |
| `signingCertificate` | `string` | No | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `string` | No | The date and time when the webhook was last updated. |
| `url` | `string` | Yes | The URL of the customer's webhook listener. |
| `webhookId` | `string` | No | The ID of the webhook. |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `categories` | - | - | - | - |
| `createdAt` | - | - | - | - |
| `eventTypes` | - | - | - | - |
| `expiresAt` | - | - | - | - |
| `headers` | - | - | - | - |
| `hmacSharedSecretKey` | - | - | - | - |
| `id` | - | - | - | - |
| `payloadVerificationMethod` | - | - | - | - |
| `signingCertificate` | - | - | - | - |
| `updatedAt` | - | - | - | - |
| `url` | - | Yes | - | - |
| `webhookId` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.N14Webhook().create({
  test_name: 'example_test_name',
  webhook_id: 'example_webhook_id',
  url: 'example_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.N14Webhook().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.N14Webhook().load({ webhook_id: 'webhook_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.N14Webhook().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `N14WebhookEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## N1CustomerEntity

```ts
const n1_customer = client.N1Customer()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.N1Customer().load({ customer_identifier: 'customer_identifier' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `N1CustomerEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## N2AccountEntity

```ts
const n2_account = client.N2Account()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `N2AccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## N3FundEntity

```ts
const n3_fund = client.N3Fund()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `N3FundEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## N8LineItemEntity

```ts
const n8_line_item = client.N8LineItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `campaign` | `string` | No | optional campaign that may be used to administratively categorize a specific order. |
| `id` | `string` | No |  |
| `orderNotes` | `string` | No | Optional order notes (up to 150 characters) |
| `purchaseOrderNumber` | `string` | No | The Purchase Order Number associated with this order. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.N8LineItem().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `N8LineItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## N9DigitalTemplateEntity

```ts
const n9_digital_template = client.N9DigitalTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.N9DigitalTemplate().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `N9DigitalTemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrderEntity

```ts
const order = client.Order()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes | Specify the account this order will be deducted from |
| `accountNumber` | `string` | Yes |  |
| `amount` | `number` | Yes | Specify the face value of of the reward. |
| `amountCharged` | `Record<string, any>` | Yes |  |
| `asyncOrderEntity` | `Record<string, any>` | No |  |
| `campaign` | `string` | Yes | Optional. |
| `createdAt` | `string` | Yes |  |
| `customFields` | `Record<string, any>` | No | Optional. |
| `customerIdentifier` | `string` | Yes | Specify the customer associated with the order. |
| `deliveryMethod` | `string` | No | Specify delivery method for the order |
| `denomination` | `Record<string, any>` | No |  |
| `emailSubject` | `string` | Yes | Optional. |
| `etid` | `string` | Yes | Optional. |
| `expirationDate` | `string` | No | Optional for Promo Links, the exact calendar date the Promo Link will expire. |
| `externalRefID` | `string` | No | Optional. |
| `id` | `string` | No |  |
| `lineItemStatus` | `string` | No |  |
| `message` | `string` | Yes | Optional gift message |
| `notes` | `string` | No | Optional order notes. |
| `orderClientSource` | `string` | No |  |
| `orderExternalRefIdDupe` | `boolean` | No |  |
| `orderStatus` | `string` | No |  |
| `ptid` | `string` | No | Only required for Printed Reward Links, the unique identifier for the Printed Reward Link Template provided in the Tango Portal on the Printed Template page. |
| `purchaseOrderNumber` | `string` | No | The Purchase Order Number associated with this order. |
| `recipient` | `Record<string, any>` | No | Required if deliveryMethod is EMAIL, PHONE, or ADDRESS. |
| `redemptionInstructions` | `string` | No |  |
| `referenceLineItemID` | `string` | No |  |
| `referenceOrderID` | `string` | Yes |  |
| `reward` | `Record<string, any>` | Yes |  |
| `rewardName` | `string` | Yes |  |
| `sendEmail` | `boolean` | No | Deprecated Oct 1, 2025. |
| `sender` | `Record<string, any>` | No | Optional. |
| `status` | `string` | Yes |  |
| `utid` | `string` | Yes | The unique identifier for the reward you are sending as provided in the Get Catalog call |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `accountIdentifier` | - | - | - |
| `accountNumber` | - | - | - |
| `amount` | - | - | - |
| `amountCharged` | - | - | - |
| `asyncOrderEntity` | - | - | - |
| `campaign` | - | - | Yes |
| `createdAt` | - | - | - |
| `customFields` | - | - | - |
| `customerIdentifier` | - | - | - |
| `deliveryMethod` | - | - | Yes |
| `denomination` | - | - | Yes |
| `emailSubject` | - | - | Yes |
| `etid` | - | - | Yes |
| `expirationDate` | - | - | - |
| `externalRefID` | - | - | Yes |
| `id` | - | - | - |
| `lineItemStatus` | - | - | - |
| `message` | - | - | Yes |
| `notes` | - | - | - |
| `orderClientSource` | - | - | - |
| `orderExternalRefIdDupe` | - | - | - |
| `orderStatus` | - | - | - |
| `ptid` | - | - | - |
| `purchaseOrderNumber` | - | - | - |
| `recipient` | - | - | Yes |
| `redemptionInstructions` | - | - | - |
| `referenceLineItemID` | - | - | Yes |
| `referenceOrderID` | - | - | - |
| `reward` | - | - | - |
| `rewardName` | - | - | - |
| `sendEmail` | - | - | - |
| `sender` | - | - | Yes |
| `status` | - | - | - |
| `utid` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Order().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Order().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Order().load({ id: 'order_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrderEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrderViewSummaryEntity

```ts
const order_view_summary = client.OrderViewSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | No | Optional. |
| `deliveryMethod` | `string` | No | Optional. |
| `notes` | `string` | No | Optional order notes (up to 150 characters). |
| `otherReason` | `string` | No | Required when reasonCode is "OTHER", enter the reason why the line item is being reissued. |
| `reasonCode` | `string` | Yes | Required. |
| `recipient` | `Record<string, any>` | No | Optional. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OrderViewSummary().create({
  reference_line_item_id: 'example_reference_line_item_id',
  reasonCode: 'example_reasonCode',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrderViewSummaryEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PrepaidCardInfoEntity

```ts
const prepaid_card_info = client.PrepaidCardInfo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `balance` | `Record<string, any>` | No |  |
| `card` | `Record<string, any>` | No |  |
| `comments` | `any[]` | No |  |
| `registration` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PrepaidCardInfo().load({ reference_line_item_id: 'reference_line_item_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PrepaidCardInfoEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PrepaidCardTransactionEntity

```ts
const prepaid_card_transaction = client.PrepaidCardTransaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `journal` | `any[]` | No |  |
| `page` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PrepaidCardTransaction().load({ reference_line_item_id: 'reference_line_item_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PrepaidCardTransactionEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReissueCardEntity

```ts
const reissue_card = client.ReissueCard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commentText` | `string` | No | Optional comment for the card replacement. |
| `id` | `string` | No |  |
| `reason` | `string` | Yes | Reason for the card replacement. |
| `status` | `string` | No | Status of the reissue request. |
| `updatedBy` | `string` | Yes | Identifier of the agent initiating the request. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ReissueCard().create({
  id: 'example_id',
  reason: 'example_reason',
  updatedBy: 'example_updatedBy',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReissueCardEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReplacementReasonEntity

```ts
const replacement_reason = client.ReplacementReason()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `replacementReasons` | `any[]` | No | List of valid replacement reason codes. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ReplacementReason().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReplacementReasonEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ResendEntity

```ts
const resend = client.Resend()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `newDeliveryMethod` | `string` | No | The delivery method used to re-deliver the reward. |
| `newEmail` | `string` | No | A new email address to re-deliver this order to. |
| `newEtid` | `string` | No | A new etid used to re-deliver an order. |
| `newMobile` | `string` | No | A new mobile number to use for resending an order. |
| `newMobileNumber` | `string` | No | A new phone number to re-deliver this order to. |
| `otherReason` | `string` | No | Required when lineItemResendReasonCode is "OTHER", enter the reason why the line item is being RESENT |
| `reasonCode` | `string` | No | Enter the reason why this line item is being RESENT (respectively) |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Resend().create({
  line_item_id: 'example_line_item_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ResendEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RewardReasonsMapEntity

```ts
const reward_reasons_map = client.RewardReasonsMap()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `CANCEL` | `Record<string, any>` | No | Map of cancel reasons |
| `CANCEL_AND_REISSUE` | `Record<string, any>` | No | Map of cancel and reissue reasons |
| `FREEZE` | `Record<string, any>` | No | Map of freeze reasons |
| `UNFREEZE` | `Record<string, any>` | No | Map of unfreeze reasons |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RewardReasonsMap().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RewardReasonsMapEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TransferFundEntity

```ts
const transfer_fund = client.TransferFund()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Specify the currency amount of the funds being transferred. |
| `externalRefID` | `string` | No | specify the external reference id to associate with this funding action. |
| `transferDate` | `string` | No |  |
| `transferFrom` | `Record<string, any>` | No | The accountIdentifier for the Account transferring funds from. |
| `transferNotes` | `string` | No | Optional transfer notes (up to 150 characters) |
| `transferTo` | `Record<string, any>` | No | The accountIdentifier for the Account transferring funds to. |
| `transferredAmount` | `number` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `amount` | - |
| `externalRefID` | - |
| `transferDate` | - |
| `transferFrom` | Yes |
| `transferNotes` | - |
| `transferTo` | Yes |
| `transferredAmount` | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TransferFund().create({
  amount: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TransferFundEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateAccountEntity

```ts
const update_account = client.UpdateAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `registration` | `Record<string, any>` | Yes |  |
| `status` | `string` | No |  |
| `updatedBy` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.UpdateAccount().create({
  id: 'example_id',
  registration: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateAccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateWebhookSubscriptionResponseViewEntity

```ts
const update_webhook_subscription_response_view = client.UpdateWebhookSubscriptionResponseView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `any[]` | No | The categories the customer is subscribed to. |
| `createdAt` | `string` | No | The date and time the webhook was created. |
| `eventTypes` | `any[]` | No | The event types the customer is subscribed to. |
| `expiresAt` | `string` | No | The date and time the webhook expires. |
| `headers` | `any[]` | No | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `string` | No | The HMAC secret key used to sign the webhook payload. |
| `payloadVerificationMethod` | `string` | No | Method to verify webhook payload integrity |
| `signingCertificate` | `string` | No | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `string` | No | The date and time when the webhook was last updated. |
| `url` | `string` | No | The URL of the customer's webhook listener. |
| `webhookId` | `string` | No | The ID of the webhook. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateWebhookSubscriptionResponseView().update({
  webhook_id: 'webhook_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateWebhookSubscriptionResponseViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhookEntity

```ts
const webhook = client.Webhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `any[]` | No | The categories the customer wants to subscribe to. |
| `createdAt` | `string` | No | The date and time the webhook was created. |
| `eventTypes` | `any[]` | No | The event types the customer wants to subscribe to. |
| `expiresAt` | `string` | No | The date and time the webhook expires. |
| `headers` | `any[]` | No | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `string` | No | The HMAC secret key used to sign the webhook payload. |
| `id` | `string` | No |  |
| `payloadVerificationMethod` | `string` | No | Method to verify webhook payload integrity. |
| `signingCertificate` | `string` | No | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `string` | No | The date and time when the webhook was last updated. |
| `url` | `string` | No | The URL of the customer's webhook listener. |
| `webhookId` | `string` | No | The ID of the webhook. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `renew` | `/webhooks/{webhookId}/renew` | `client.Webhook().create({ $action: 'renew', ... })` |
| `replay` | `/webhooks/{webhookId}/replay` | `client.Webhook().create({ $action: 'replay', ... })` |

An action returns that action's OWN response, which is not necessarily a
Webhook record — check the API definition for its shape.

```ts
const result = await client.Webhook().create({
  $action: 'renew',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Webhook().create({
  id: 'example_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Webhook().load({ id: 'webhook_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhookEntity` instance with the same client and
options.

#### `client()`

Return the parent `TangocardSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Request/response capture ring buffer for debugging |
| `idempotency` | 0.0.1 | Idempotency keys for safe retries of mutating operations |
| `metrics` | 0.0.1 | Statistics capture: per-operation counters and latency |
| `paging` | 0.0.1 | Pagination signals for list operations |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```ts
const client = new TangocardSDK({
  feature: {
    debug: { active: true },
    idempotency: { active: true },
    metrics: { active: true },
    paging: { active: true },
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Request/response capture ring buffer for debugging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency keys for safe retries of mutating operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Statistics capture: per-operation counters and latency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Pagination signals for list operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

