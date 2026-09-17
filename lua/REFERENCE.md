# Tangocard Lua SDK Reference

Complete API reference for the Tangocard Lua SDK.


## TangocardSDK

### Constructor

```lua
local sdk = require("tangocard_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Account(data)`

Create a new `Account` entity instance. Pass `nil` for no initial data.

#### `AddCommentEscalation(data)`

Create a new `AddCommentEscalation` entity instance. Pass `nil` for no initial data.

#### `AllEventType(data)`

Create a new `AllEventType` entity instance. Pass `nil` for no initial data.

#### `AsyncOrder(data)`

Create a new `AsyncOrder` entity instance. Pass `nil` for no initial data.

#### `AsyncOrderDetailView(data)`

Create a new `AsyncOrderDetailView` entity instance. Pass `nil` for no initial data.

#### `AsyncOrderLineItemsView(data)`

Create a new `AsyncOrderLineItemsView` entity instance. Pass `nil` for no initial data.

#### `AsyncReasonCodesView(data)`

Create a new `AsyncReasonCodesView` entity instance. Pass `nil` for no initial data.

#### `AsyncUpdateLineItemView(data)`

Create a new `AsyncUpdateLineItemView` entity instance. Pass `nil` for no initial data.

#### `BalanceAlertView(data)`

Create a new `BalanceAlertView` entity instance. Pass `nil` for no initial data.

#### `BrandCategoriesView(data)`

Create a new `BrandCategoriesView` entity instance. Pass `nil` for no initial data.

#### `Catalog(data)`

Create a new `Catalog` entity instance. Pass `nil` for no initial data.

#### `ChoiceProduct(data)`

Create a new `ChoiceProduct` entity instance. Pass `nil` for no initial data.

#### `CountryViewSummary(data)`

Create a new `CountryViewSummary` entity instance. Pass `nil` for no initial data.

#### `CreateAccountCriterion(data)`

Create a new `CreateAccountCriterion` entity instance. Pass `nil` for no initial data.

#### `CreateCustomerCriterion(data)`

Create a new `CreateCustomerCriterion` entity instance. Pass `nil` for no initial data.

#### `CredentialTypeView(data)`

Create a new `CredentialTypeView` entity instance. Pass `nil` for no initial data.

#### `CreditCard(data)`

Create a new `CreditCard` entity instance. Pass `nil` for no initial data.

#### `CreditCardDeposit(data)`

Create a new `CreditCardDeposit` entity instance. Pass `nil` for no initial data.

#### `CreditCardUnregister(data)`

Create a new `CreditCardUnregister` entity instance. Pass `nil` for no initial data.

#### `Customer(data)`

Create a new `Customer` entity instance. Pass `nil` for no initial data.

#### `EmailTemplateListView(data)`

Create a new `EmailTemplateListView` entity instance. Pass `nil` for no initial data.

#### `EmailTemplateViewVerbose(data)`

Create a new `EmailTemplateViewVerbose` entity instance. Pass `nil` for no initial data.

#### `EmbeddableResponseDto(data)`

Create a new `EmbeddableResponseDto` entity instance. Pass `nil` for no initial data.

#### `ExchangeRatesWithDisclaimer(data)`

Create a new `ExchangeRatesWithDisclaimer` entity instance. Pass `nil` for no initial data.

#### `LineItem(data)`

Create a new `LineItem` entity instance. Pass `nil` for no initial data.

#### `LowBalanceAlertListView(data)`

Create a new `LowBalanceAlertListView` entity instance. Pass `nil` for no initial data.

#### `LowBalanceAlertView(data)`

Create a new `LowBalanceAlertView` entity instance. Pass `nil` for no initial data.

#### `MobileCountry(data)`

Create a new `MobileCountry` entity instance. Pass `nil` for no initial data.

#### `N14Webhook(data)`

Create a new `N14Webhook` entity instance. Pass `nil` for no initial data.

#### `N1Customer(data)`

Create a new `N1Customer` entity instance. Pass `nil` for no initial data.

#### `N2Account(data)`

Create a new `N2Account` entity instance. Pass `nil` for no initial data.

#### `N3Fund(data)`

Create a new `N3Fund` entity instance. Pass `nil` for no initial data.

#### `N8LineItem(data)`

Create a new `N8LineItem` entity instance. Pass `nil` for no initial data.

#### `N9DigitalTemplate(data)`

Create a new `N9DigitalTemplate` entity instance. Pass `nil` for no initial data.

#### `Order(data)`

Create a new `Order` entity instance. Pass `nil` for no initial data.

#### `OrderViewSummary(data)`

Create a new `OrderViewSummary` entity instance. Pass `nil` for no initial data.

#### `PrepaidCardInfo(data)`

Create a new `PrepaidCardInfo` entity instance. Pass `nil` for no initial data.

#### `PrepaidCardTransaction(data)`

Create a new `PrepaidCardTransaction` entity instance. Pass `nil` for no initial data.

#### `ReissueCard(data)`

Create a new `ReissueCard` entity instance. Pass `nil` for no initial data.

#### `ReplacementReason(data)`

Create a new `ReplacementReason` entity instance. Pass `nil` for no initial data.

#### `Resend(data)`

Create a new `Resend` entity instance. Pass `nil` for no initial data.

#### `RewardReasonsMap(data)`

Create a new `RewardReasonsMap` entity instance. Pass `nil` for no initial data.

#### `TransferFund(data)`

Create a new `TransferFund` entity instance. Pass `nil` for no initial data.

#### `UpdateAccount(data)`

Create a new `UpdateAccount` entity instance. Pass `nil` for no initial data.

#### `UpdateWebhookSubscriptionResponseView(data)`

Create a new `UpdateWebhookSubscriptionResponseView` entity instance. Pass `nil` for no initial data.

#### `Webhook(data)`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AccountEntity

```lua
local account = client:Account(nil)
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
| `fundingNotification` | `table` | No | optional, send funding notification emails to the following address(es). |
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

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Account():load({ id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Account():update({
  id = "account_id",
  customer_identifier = "customer_identifier",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AddCommentEscalationEntity

```lua
local add_comment_escalation = client:AddCommentEscalation(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AddCommentEscalation():create({
  id = --[[ string ]],
  commentText = --[[ string ]],
  issueDescription = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AddCommentEscalationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AllEventTypeEntity

```lua
local all_event_type = client:AllEventType(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No | The category of events can be subscribed to. |
| `eventTypes` | `table` | No | The event types that can be subscribed to. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AllEventType():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AllEventTypeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AsyncOrderEntity

```lua
local async_order = client:AsyncOrder(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes | specify the account this order will be deducted from |
| `accountNumber` | `string` | Yes |  |
| `amountCharged` | `table` | No | Initial value and the total charged amount on the account |
| `campaign` | `string` | No | Optional. |
| `createdAt` | `string` | No |  |
| `customerIdentifier` | `string` | Yes | specify the customer associated with the order. |
| `duplicateLineItemRefIds` | `table` | No | If any duplicate duplicateLineItemRefIds exist in the request |
| `externalRefID` | `string` | No | Required. |
| `failedLineItems` | `table` | No | Failed line items list (business validations) |
| `fulfillBy` | `string` | No |  |
| `lineItems` | `table` | Yes | Line Items of the bulk order a required field |
| `notes` | `string` | No | Optional order notes. |
| `orderStatus` | `string` | No |  |
| `purchaseOrderNumber` | `string` | No | The Purchase Order Number associated with this order. |
| `referenceOrderID` | `string` | Yes |  |
| `sender` | `table` | No | Optional. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AsyncOrder():create({
  accountIdentifier = --[[ string ]],
  accountNumber = --[[ string ]],
  customerIdentifier = --[[ string ]],
  lineItems = --[[ table ]],
  referenceOrderID = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AsyncOrder():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AsyncOrderEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AsyncOrderDetailViewEntity

```lua
local async_order_detail_view = client:AsyncOrderDetailView(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | No | Account identifier |
| `amountCharged` | `table` | No | Initial value and the total charged amount on the account |
| `campaign` | `string` | No | Campaign name |
| `completedAt` | `string` | No | Order completion timestamp |
| `createdAt` | `string` | No | Order creation timestamp |
| `customerIdentifier` | `string` | No | Customer identifier |
| `externalRefID` | `string` | No | External reference ID provided by client |
| `id` | `string` | No |  |
| `lineItems` | `table` | No | list of line items |
| `notes` | `string` | No | Order notes |
| `orderErrors` | `table` | No | Order level errors |
| `orderStatus` | `string` | No | Current status of the order |
| `pagination` | `table` | No | Pagination information |
| `purchaseOrderNumber` | `string` | No | Purchase order number |
| `referenceOrderID` | `string` | No | Internal reference order ID |
| `sender` | `table` | No | Sender information |
| `totalLineItems` | `number` | No | Total number of line items |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AsyncOrderDetailView():load({ account_identifier = "account_identifier", customer_identifier = "customer_identifier", external_ref_id = "external_ref_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AsyncOrderDetailView():update({
  account_identifier = "account_identifier",
  customer_identifier = "customer_identifier",
  external_ref_id = "external_ref_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AsyncOrderDetailViewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AsyncOrderLineItemsViewEntity

```lua
local async_order_line_items_view = client:AsyncOrderLineItemsView(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes |  |
| `amountCharged` | `table` | No | Initial value and the total charged amount on the account |
| `campaign` | `string` | No |  |
| `customerIdentifier` | `string` | Yes |  |
| `externalRefID` | `string` | No |  |
| `lineItems` | `table` | No | The List of Line Items for the Async Order. |
| `orderErrors` | `table` | No | The List of Errors for the Async Order. |
| `orderNotes` | `string` | No |  |
| `orderStatus` | `string` | Yes |  |
| `pagination` | `table` | No | The cursor for pagination of the async order line items. |
| `purchaseOrderNumber` | `string` | No |  |
| `referenceOrderID` | `string` | Yes |  |
| `sender` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AsyncOrderLineItemsView():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AsyncOrderLineItemsViewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AsyncReasonCodesViewEntity

```lua
local async_reason_codes_view = client:AsyncReasonCodesView(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AsyncReasonCodesView():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AsyncReasonCodesViewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AsyncUpdateLineItemViewEntity

```lua
local async_update_line_item_view = client:AsyncUpdateLineItemView(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deliveryDate` | `string` | No | Optional. |
| `lineItemNote` | `string` | No | Optional line item notes (up to 150 characters) |
| `senderInfo` | `table` | No | Optional. |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AsyncUpdateLineItemView():update({
  reference_line_item_id = "reference_line_item_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AsyncUpdateLineItemViewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BalanceAlertViewEntity

```lua
local balance_alert_view = client:BalanceAlertView(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:BalanceAlertView():remove({ account_id = "account_id", balance_alert_id = "balance_alert_id", customer_identifier = "customer_identifier" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BalanceAlertViewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BrandCategoriesViewEntity

```lua
local brand_categories_view = client:BrandCategoriesView(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `identifier` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BrandCategoriesView():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BrandCategoriesViewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CatalogEntity

```lua
local catalog = client:Catalog(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `barcodeType` | `string` | No |  |
| `brandKey` | `string` | Yes |  |
| `brandName` | `string` | Yes |  |
| `brandRequirements` | `table` | Yes |  |
| `categories` | `table` | Yes |  |
| `createdDate` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `imageUrls` | `table` | Yes |  |
| `items` | `table` | Yes |  |
| `lastUpdateDate` | `string` | Yes |  |
| `shortDescription` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `terms` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Catalog():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CatalogEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ChoiceProductEntity

```lua
local choice_product = client:ChoiceProduct(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `countries` | `table` | No |  |
| `currencyCode` | `string` | No |  |
| `id` | `string` | No |  |
| `rewardName` | `string` | No |  |
| `utid` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ChoiceProduct():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ChoiceProduct():load({ id = "choice_product_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChoiceProductEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CountryViewSummaryEntity

```lua
local country_view_summary = client:CountryViewSummary(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `countryName` | `string` | Yes |  |
| `preferredCurrency` | `string` | Yes |  |
| `threeLetterCode` | `string` | Yes |  |
| `twoLetterCode` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CountryViewSummary():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CountryViewSummaryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreateAccountCriterionEntity

```lua
local create_account_criterion = client:CreateAccountCriterion(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes | A unique identifier for this account. |
| `contactEmail` | `string` | Yes | An email address for a designated representative for this account. |
| `currencyCode` | `string` | No | The currency this account will accept for deposits/withdraws. |
| `displayName` | `string` | Yes | A friendly name for this account. |
| `fundingNotification` | `table` | No | optional, send funding notification emails to the following address(es) |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CreateAccountCriterion():create({
  customer_identifier = --[[ string ]],
  accountIdentifier = --[[ string ]],
  contactEmail = --[[ string ]],
  displayName = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateAccountCriterionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreateCustomerCriterionEntity

```lua
local create_customer_criterion = client:CreateCustomerCriterion(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateCustomerCriterionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CredentialTypeViewEntity

```lua
local credential_type_view = client:CredentialTypeView(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credentialType` | `string` | Yes |  |
| `description` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CredentialTypeView():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CredentialTypeViewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreditCardEntity

```lua
local credit_card = client:CreditCard(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes | specify the account this credit card is associated with |
| `accountNumber` | `string` | Yes |  |
| `activationDate` | `string` | Yes |  |
| `billingAddress` | `table` | Yes | required Enter the billing address information for the credit card that is being registered |
| `contactInformation` | `table` | Yes | Optional. |
| `createdDate` | `string` | Yes |  |
| `creditCard` | `table` | Yes | required Enter the credit card details that is being registered |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CreditCard():create({
  accountIdentifier = --[[ string ]],
  accountNumber = --[[ string ]],
  activationDate = --[[ string ]],
  billingAddress = --[[ table ]],
  contactInformation = --[[ table ]],
  createdDate = --[[ string ]],
  creditCard = --[[ table ]],
  customerIdentifier = --[[ string ]],
  expirationDate = --[[ string ]],
  ipAddress = --[[ string ]],
  label = --[[ string ]],
  lastFourDigits = --[[ string ]],
  status = --[[ string ]],
  token = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CreditCard():load({ id = "credit_card_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreditCardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreditCardDepositEntity

```lua
local credit_card_deposit = client:CreditCardDeposit(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CreditCardDeposit():create({
  accountIdentifier = --[[ string ]],
  accountNumber = --[[ string ]],
  amount = --[[ number ]],
  amountCharged = --[[ number ]],
  createdDate = --[[ string ]],
  creditCardToken = --[[ string ]],
  customerIdentifier = --[[ string ]],
  feePercent = --[[ number ]],
  referenceDepositID = --[[ string ]],
  status = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CreditCardDeposit():load({ id = "credit_card_deposit_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreditCardDepositEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreditCardUnregisterEntity

```lua
local credit_card_unregister = client:CreditCardUnregister(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CreditCardUnregister():create({
  accountIdentifier = --[[ string ]],
  createdDate = --[[ string ]],
  creditCardToken = --[[ string ]],
  customerIdentifier = --[[ string ]],
  message = --[[ string ]],
  token = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreditCardUnregisterEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomerEntity

```lua
local customer = client:Customer(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accounts` | `table` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `customerIdentifier` | `string` | Yes | A unique identifier for this customer. |
| `displayName` | `string` | Yes | A friendly name for this customer. |
| `id` | `string` | No |  |
| `status` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Customer():create({
  accounts = --[[ table ]],
  createdAt = --[[ string ]],
  customerIdentifier = --[[ string ]],
  displayName = --[[ string ]],
  status = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Customer():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Customer():load({ id = "customer_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmailTemplateListViewEntity

```lua
local email_template_list_view = client:EmailTemplateListView(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailTemplateListViewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmailTemplateViewVerboseEntity

```lua
local email_template_view_verbose = client:EmailTemplateViewVerbose(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accentColor` | `string` | Yes | A Hex color value, six hexadecimal digits preceded by a pound sign, used as an accent in the email. |
| `accessControl` | `table` | No | (Optional) Which Customers and/or Accounts should have access to this template. |
| `accessControls` | `table` | No |  |
| `closing` | `string` | Yes | After the reward credential, a space to close the email message to the recipient. |
| `customerServiceMessage` | `string` | No | If left null, Tango Card's Customer Support contact information will be included. |
| `defaults` | `table` | No | If you want this template to be used at order time for the given Platform, Customer or Account when the Email Template Identifier (etid) is not provided with the order. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:EmailTemplateViewVerbose():create({
  accentColor = --[[ string ]],
  closing = --[[ string ]],
  etid = --[[ string ]],
  fromName = --[[ string ]],
  headerImage = --[[ string ]],
  headerImageAltText = --[[ string ]],
  messageBody = --[[ string ]],
  name = --[[ string ]],
  subject = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EmailTemplateViewVerbose():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:EmailTemplateViewVerbose():load({ etid = "etid" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:EmailTemplateViewVerbose():update({
  etid = "etid",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailTemplateViewVerboseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmbeddableResponseDtoEntity

```lua
local embeddable_response_dto = client:EmbeddableResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `url` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:EmbeddableResponseDto():load({ reference_line_item_id = "reference_line_item_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmbeddableResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ExchangeRatesWithDisclaimerEntity

```lua
local exchange_rates_with_disclaimer = client:ExchangeRatesWithDisclaimer(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `baseCurrency` | `string` | Yes |  |
| `baseFx` | `string` | Yes |  |
| `lastModifiedDate` | `string` | Yes |  |
| `rewardCurrency` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ExchangeRatesWithDisclaimer():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExchangeRatesWithDisclaimerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LineItemEntity

```lua
local line_item = client:LineItem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes |  |
| `accountNumber` | `string` | Yes |  |
| `amountCharged` | `table` | No |  |
| `amountIssued` | `table` | Yes |  |
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
| `lineItemActionHistory` | `table` | No |  |
| `lineItemActionReason` | `string` | No |  |
| `lineItemErrors` | `table` | No | Errors related to the line item |
| `lineNumber` | `number` | Yes |  |
| `orderNotes` | `string` | No |  |
| `orderSource` | `string` | Yes |  |
| `orderStatus` | `string` | Yes |  |
| `ptid` | `string` | No |  |
| `purchaseOrderNumber` | `string` | No |  |
| `quantity` | `number` | No | quantity of line items |
| `recipient` | `table` | No |  |
| `redemptionHistory` | `table` | No |  |
| `referenceLineItemID` | `string` | Yes |  |
| `referenceOrderID` | `string` | Yes |  |
| `reissuedFromReferenceLineItemId` | `string` | No | Reissued from reference line item ID |
| `reissuedToReferenceLineItemId` | `string` | No | Reissued to reference line item ID |
| `remainingBalance` | `number` | No |  |
| `resendHistory` | `table` | No |  |
| `reward` | `table` | Yes |  |
| `rewardName` | `string` | Yes |  |
| `rewardStatus` | `string` | No |  |
| `rewardViewHistory` | `table` | No |  |
| `sender` | `table` | No |  |
| `status` | `string` | Yes |  |
| `utid` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LineItem():create({
  reference_line_item_id = --[[ string ]],
  accountIdentifier = --[[ string ]],
  accountNumber = --[[ string ]],
  amountIssued = --[[ table ]],
  customerIdentifier = --[[ string ]],
  dateIssued = --[[ string ]],
  emailStatus = --[[ string ]],
  etid = --[[ string ]],
  expirationDate = --[[ string ]],
  lineNumber = --[[ number ]],
  orderSource = --[[ string ]],
  orderStatus = --[[ string ]],
  referenceLineItemID = --[[ string ]],
  referenceOrderID = --[[ string ]],
  reward = --[[ table ]],
  rewardName = --[[ string ]],
  status = --[[ string ]],
  utid = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:LineItem():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:LineItem():load({ id = "line_item_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LineItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LowBalanceAlertListViewEntity

```lua
local low_balance_alert_list_view = client:LowBalanceAlertListView(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | No |  |
| `balanceAlertDisplayName` | `string` | No |  |
| `balanceAlertID` | `string` | No |  |
| `balanceAlertNotification` | `table` | No |  |
| `balanceAlertThreshold` | `number` | No |  |
| `createdAt` | `string` | No |  |
| `customerIdentifier` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:LowBalanceAlertListView():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LowBalanceAlertListViewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LowBalanceAlertViewEntity

```lua
local low_balance_alert_view = client:LowBalanceAlertView(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | No |  |
| `balanceAlertDisplayName` | `string` | No | A friendly name for this low balance alert (will be displayed in the Tango Portal). |
| `balanceAlertID` | `string` | No |  |
| `balanceAlertNotification` | `table` | No | Send low balance notification emails to the following address(es). |
| `balanceAlertThreshold` | `number` | No | The threshold amount that will trigger the low balance alert. |
| `createdAt` | `string` | No |  |
| `customerIdentifier` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LowBalanceAlertView():create({
  account_identifier = --[[ string ]],
  customer_identifier = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:LowBalanceAlertView():load({ account_id = "account_id", balance_alert_id = "balance_alert_id", customer_identifier = "customer_identifier" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:LowBalanceAlertView():update({
  account_id = "account_id",
  balance_alert_id = "balance_alert_id",
  customer_identifier = "customer_identifier",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LowBalanceAlertViewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MobileCountryEntity

```lua
local mobile_country = client:MobileCountry(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `countryCode` | `string` | No |  |
| `countryName` | `string` | No |  |
| `isoCode` | `string` | No |  |
| `languageCode` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:MobileCountry():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MobileCountryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## N14WebhookEntity

```lua
local n14_webhook = client:N14Webhook(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `table` | No | The categories the customer wants to subscribe to. |
| `createdAt` | `string` | No | The date and time the webhook was created. |
| `eventTypes` | `table` | No | The event types the customer wants to subscribe to. |
| `expiresAt` | `string` | No | The date and time the webhook expires. |
| `headers` | `table` | No | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:N14Webhook():create({
  test_name = --[[ string ]],
  webhook_id = --[[ string ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:N14Webhook():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:N14Webhook():load({ webhook_id = "webhook_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:N14Webhook():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `N14WebhookEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## N1CustomerEntity

```lua
local n1_customer = client:N1Customer(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:N1Customer():load({ customer_identifier = "customer_identifier" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `N1CustomerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## N2AccountEntity

```lua
local n2_account = client:N2Account(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `N2AccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## N3FundEntity

```lua
local n3_fund = client:N3Fund(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `N3FundEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## N8LineItemEntity

```lua
local n8_line_item = client:N8LineItem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `campaign` | `string` | No | optional campaign that may be used to administratively categorize a specific order. |
| `id` | `string` | No |  |
| `orderNotes` | `string` | No | Optional order notes (up to 150 characters) |
| `purchaseOrderNumber` | `string` | No | The Purchase Order Number associated with this order. |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:N8LineItem():update({
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `N8LineItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## N9DigitalTemplateEntity

```lua
local n9_digital_template = client:N9DigitalTemplate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:N9DigitalTemplate():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `N9DigitalTemplateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrderEntity

```lua
local order = client:Order(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes | Specify the account this order will be deducted from |
| `accountNumber` | `string` | Yes |  |
| `amount` | `number` | Yes | Specify the face value of of the reward. |
| `amountCharged` | `table` | Yes |  |
| `asyncOrderEntity` | `table` | No |  |
| `campaign` | `string` | Yes | Optional. |
| `createdAt` | `string` | Yes |  |
| `customFields` | `table` | No | Optional. |
| `customerIdentifier` | `string` | Yes | Specify the customer associated with the order. |
| `deliveryMethod` | `string` | No | Specify delivery method for the order |
| `denomination` | `table` | No |  |
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
| `recipient` | `table` | No | Required if deliveryMethod is EMAIL, PHONE, or ADDRESS. |
| `redemptionInstructions` | `string` | No |  |
| `referenceLineItemID` | `string` | No |  |
| `referenceOrderID` | `string` | Yes |  |
| `reward` | `table` | Yes |  |
| `rewardName` | `string` | Yes |  |
| `sendEmail` | `boolean` | No | Deprecated Oct 1, 2025. |
| `sender` | `table` | No | Optional. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Order():create({
  accountIdentifier = --[[ string ]],
  accountNumber = --[[ string ]],
  amount = --[[ number ]],
  amountCharged = --[[ table ]],
  campaign = --[[ string ]],
  createdAt = --[[ string ]],
  customerIdentifier = --[[ string ]],
  emailSubject = --[[ string ]],
  etid = --[[ string ]],
  message = --[[ string ]],
  referenceOrderID = --[[ string ]],
  reward = --[[ table ]],
  rewardName = --[[ string ]],
  status = --[[ string ]],
  utid = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Order():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Order():load({ id = "order_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrderEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrderViewSummaryEntity

```lua
local order_view_summary = client:OrderViewSummary(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | No | Optional. |
| `deliveryMethod` | `string` | No | Optional. |
| `notes` | `string` | No | Optional order notes (up to 150 characters). |
| `otherReason` | `string` | No | Required when reasonCode is "OTHER", enter the reason why the line item is being reissued. |
| `reasonCode` | `string` | Yes | Required. |
| `recipient` | `table` | No | Optional. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OrderViewSummary():create({
  reference_line_item_id = --[[ string ]],
  reasonCode = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrderViewSummaryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PrepaidCardInfoEntity

```lua
local prepaid_card_info = client:PrepaidCardInfo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `balance` | `table` | No |  |
| `card` | `table` | No |  |
| `comments` | `table` | No |  |
| `registration` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PrepaidCardInfo():load({ reference_line_item_id = "reference_line_item_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PrepaidCardInfoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PrepaidCardTransactionEntity

```lua
local prepaid_card_transaction = client:PrepaidCardTransaction(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `journal` | `table` | No |  |
| `page` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PrepaidCardTransaction():load({ reference_line_item_id = "reference_line_item_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PrepaidCardTransactionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReissueCardEntity

```lua
local reissue_card = client:ReissueCard(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ReissueCard():create({
  id = --[[ string ]],
  reason = --[[ string ]],
  updatedBy = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReissueCardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReplacementReasonEntity

```lua
local replacement_reason = client:ReplacementReason(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `replacementReasons` | `table` | No | List of valid replacement reason codes. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ReplacementReason():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReplacementReasonEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ResendEntity

```lua
local resend = client:Resend(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Resend():create({
  line_item_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResendEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RewardReasonsMapEntity

```lua
local reward_reasons_map = client:RewardReasonsMap(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `CANCEL` | `table` | No | Map of cancel reasons |
| `CANCEL_AND_REISSUE` | `table` | No | Map of cancel and reissue reasons |
| `FREEZE` | `table` | No | Map of freeze reasons |
| `UNFREEZE` | `table` | No | Map of unfreeze reasons |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RewardReasonsMap():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RewardReasonsMapEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TransferFundEntity

```lua
local transfer_fund = client:TransferFund(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Specify the currency amount of the funds being transferred. |
| `externalRefID` | `string` | No | specify the external reference id to associate with this funding action. |
| `transferDate` | `string` | No |  |
| `transferFrom` | `table` | No | The accountIdentifier for the Account transferring funds from. |
| `transferNotes` | `string` | No | Optional transfer notes (up to 150 characters) |
| `transferTo` | `table` | No | The accountIdentifier for the Account transferring funds to. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TransferFund():create({
  amount = --[[ number ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TransferFundEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UpdateAccountEntity

```lua
local update_account = client:UpdateAccount(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `registration` | `table` | Yes |  |
| `status` | `string` | No |  |
| `updatedBy` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:UpdateAccount():create({
  id = --[[ string ]],
  registration = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateAccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UpdateWebhookSubscriptionResponseViewEntity

```lua
local update_webhook_subscription_response_view = client:UpdateWebhookSubscriptionResponseView(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `table` | No | The categories the customer is subscribed to. |
| `createdAt` | `string` | No | The date and time the webhook was created. |
| `eventTypes` | `table` | No | The event types the customer is subscribed to. |
| `expiresAt` | `string` | No | The date and time the webhook expires. |
| `headers` | `table` | No | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `string` | No | The HMAC secret key used to sign the webhook payload. |
| `payloadVerificationMethod` | `string` | No | Method to verify webhook payload integrity |
| `signingCertificate` | `string` | No | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `string` | No | The date and time when the webhook was last updated. |
| `url` | `string` | No | The URL of the customer's webhook listener. |
| `webhookId` | `string` | No | The ID of the webhook. |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:UpdateWebhookSubscriptionResponseView():update({
  webhook_id = "webhook_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateWebhookSubscriptionResponseViewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhookEntity

```lua
local webhook = client:Webhook(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `table` | No | The categories the customer wants to subscribe to. |
| `createdAt` | `string` | No | The date and time the webhook was created. |
| `eventTypes` | `table` | No | The event types the customer wants to subscribe to. |
| `expiresAt` | `string` | No | The date and time the webhook expires. |
| `headers` | `table` | No | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `string` | No | The HMAC secret key used to sign the webhook payload. |
| `id` | `string` | No |  |
| `payloadVerificationMethod` | `string` | No | Method to verify webhook payload integrity. |
| `signingCertificate` | `string` | No | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `string` | No | The date and time when the webhook was last updated. |
| `url` | `string` | No | The URL of the customer's webhook listener. |
| `webhookId` | `string` | No | The ID of the webhook. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Webhook():create({
  id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Webhook():load({ id = "webhook_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


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

```lua
local client = sdk.new({
  feature = {
    debug = { active = true },
    idempotency = { active = true },
    metrics = { active = true },
    paging = { active = true },
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
  },
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

