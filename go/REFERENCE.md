# Tangocard Golang SDK Reference

Complete API reference for the Tangocard Golang SDK.


## TangocardSDK

### Constructor

```go
func NewTangocardSDK(options map[string]any) *TangocardSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *TangocardSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *TangocardSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Account(data map[string]any) TangocardEntity`

Create a new `Account` entity instance. Pass `nil` for no initial data.

#### `AddCommentEscalation(data map[string]any) TangocardEntity`

Create a new `AddCommentEscalation` entity instance. Pass `nil` for no initial data.

#### `AllEventType(data map[string]any) TangocardEntity`

Create a new `AllEventType` entity instance. Pass `nil` for no initial data.

#### `AsyncOrder(data map[string]any) TangocardEntity`

Create a new `AsyncOrder` entity instance. Pass `nil` for no initial data.

#### `AsyncOrderDetailView(data map[string]any) TangocardEntity`

Create a new `AsyncOrderDetailView` entity instance. Pass `nil` for no initial data.

#### `AsyncOrderLineItemsView(data map[string]any) TangocardEntity`

Create a new `AsyncOrderLineItemsView` entity instance. Pass `nil` for no initial data.

#### `AsyncReasonCodesView(data map[string]any) TangocardEntity`

Create a new `AsyncReasonCodesView` entity instance. Pass `nil` for no initial data.

#### `AsyncUpdateLineItemView(data map[string]any) TangocardEntity`

Create a new `AsyncUpdateLineItemView` entity instance. Pass `nil` for no initial data.

#### `BalanceAlertView(data map[string]any) TangocardEntity`

Create a new `BalanceAlertView` entity instance. Pass `nil` for no initial data.

#### `BrandCategoriesView(data map[string]any) TangocardEntity`

Create a new `BrandCategoriesView` entity instance. Pass `nil` for no initial data.

#### `Catalog(data map[string]any) TangocardEntity`

Create a new `Catalog` entity instance. Pass `nil` for no initial data.

#### `ChoiceProduct(data map[string]any) TangocardEntity`

Create a new `ChoiceProduct` entity instance. Pass `nil` for no initial data.

#### `CountryViewSummary(data map[string]any) TangocardEntity`

Create a new `CountryViewSummary` entity instance. Pass `nil` for no initial data.

#### `CreateAccountCriterion(data map[string]any) TangocardEntity`

Create a new `CreateAccountCriterion` entity instance. Pass `nil` for no initial data.

#### `CreateCustomerCriterion(data map[string]any) TangocardEntity`

Create a new `CreateCustomerCriterion` entity instance. Pass `nil` for no initial data.

#### `CredentialTypeView(data map[string]any) TangocardEntity`

Create a new `CredentialTypeView` entity instance. Pass `nil` for no initial data.

#### `CreditCard(data map[string]any) TangocardEntity`

Create a new `CreditCard` entity instance. Pass `nil` for no initial data.

#### `CreditCardDeposit(data map[string]any) TangocardEntity`

Create a new `CreditCardDeposit` entity instance. Pass `nil` for no initial data.

#### `CreditCardUnregister(data map[string]any) TangocardEntity`

Create a new `CreditCardUnregister` entity instance. Pass `nil` for no initial data.

#### `Customer(data map[string]any) TangocardEntity`

Create a new `Customer` entity instance. Pass `nil` for no initial data.

#### `EmailTemplateListView(data map[string]any) TangocardEntity`

Create a new `EmailTemplateListView` entity instance. Pass `nil` for no initial data.

#### `EmailTemplateViewVerbose(data map[string]any) TangocardEntity`

Create a new `EmailTemplateViewVerbose` entity instance. Pass `nil` for no initial data.

#### `EmbeddableResponseDto(data map[string]any) TangocardEntity`

Create a new `EmbeddableResponseDto` entity instance. Pass `nil` for no initial data.

#### `ExchangeRatesWithDisclaimer(data map[string]any) TangocardEntity`

Create a new `ExchangeRatesWithDisclaimer` entity instance. Pass `nil` for no initial data.

#### `LineItem(data map[string]any) TangocardEntity`

Create a new `LineItem` entity instance. Pass `nil` for no initial data.

#### `LowBalanceAlertListView(data map[string]any) TangocardEntity`

Create a new `LowBalanceAlertListView` entity instance. Pass `nil` for no initial data.

#### `LowBalanceAlertView(data map[string]any) TangocardEntity`

Create a new `LowBalanceAlertView` entity instance. Pass `nil` for no initial data.

#### `MobileCountry(data map[string]any) TangocardEntity`

Create a new `MobileCountry` entity instance. Pass `nil` for no initial data.

#### `N14Webhook(data map[string]any) TangocardEntity`

Create a new `N14Webhook` entity instance. Pass `nil` for no initial data.

#### `N1Customer(data map[string]any) TangocardEntity`

Create a new `N1Customer` entity instance. Pass `nil` for no initial data.

#### `N2Account(data map[string]any) TangocardEntity`

Create a new `N2Account` entity instance. Pass `nil` for no initial data.

#### `N3Fund(data map[string]any) TangocardEntity`

Create a new `N3Fund` entity instance. Pass `nil` for no initial data.

#### `N8LineItem(data map[string]any) TangocardEntity`

Create a new `N8LineItem` entity instance. Pass `nil` for no initial data.

#### `N9DigitalTemplate(data map[string]any) TangocardEntity`

Create a new `N9DigitalTemplate` entity instance. Pass `nil` for no initial data.

#### `Order(data map[string]any) TangocardEntity`

Create a new `Order` entity instance. Pass `nil` for no initial data.

#### `OrderViewSummary(data map[string]any) TangocardEntity`

Create a new `OrderViewSummary` entity instance. Pass `nil` for no initial data.

#### `PrepaidCardInfo(data map[string]any) TangocardEntity`

Create a new `PrepaidCardInfo` entity instance. Pass `nil` for no initial data.

#### `PrepaidCardTransaction(data map[string]any) TangocardEntity`

Create a new `PrepaidCardTransaction` entity instance. Pass `nil` for no initial data.

#### `ReissueCard(data map[string]any) TangocardEntity`

Create a new `ReissueCard` entity instance. Pass `nil` for no initial data.

#### `ReplacementReason(data map[string]any) TangocardEntity`

Create a new `ReplacementReason` entity instance. Pass `nil` for no initial data.

#### `Resend(data map[string]any) TangocardEntity`

Create a new `Resend` entity instance. Pass `nil` for no initial data.

#### `RewardReasonsMap(data map[string]any) TangocardEntity`

Create a new `RewardReasonsMap` entity instance. Pass `nil` for no initial data.

#### `TransferFund(data map[string]any) TangocardEntity`

Create a new `TransferFund` entity instance. Pass `nil` for no initial data.

#### `UpdateAccount(data map[string]any) TangocardEntity`

Create a new `UpdateAccount` entity instance. Pass `nil` for no initial data.

#### `UpdateWebhookSubscriptionResponseView(data map[string]any) TangocardEntity`

Create a new `UpdateWebhookSubscriptionResponseView` entity instance. Pass `nil` for no initial data.

#### `Webhook(data map[string]any) TangocardEntity`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AccountEntity

```go
account := client.Account(nil)
fmt.Println(account.GetName()) // "account"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes |  |
| `accountNumber` | `string` | Yes |  |
| `contactEmail` | `string` | No | optional, an email address for a designated representative for this account. |
| `createdAt` | `string` | Yes |  |
| `currencyCode` | `string` | Yes |  |
| `currentBalance` | `float64` | Yes |  |
| `displayName` | `string` | Yes | optional, a friendly name for this account. |
| `fundingNotification` | `[]any` | No | optional, send funding notification emails to the following address(es). |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Account(nil).Load(map[string]any{"id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Account(nil).Update(map[string]any{
    "id": "account_id",
    "customer_identifier": "customer_identifier",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AddCommentEscalationEntity

```go
addCommentEscalation := client.AddCommentEscalation(nil)
fmt.Println(addCommentEscalation.GetName()) // "add_comment_escalation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `int` | No | Assignee ID. |
| `commentText` | `string` | Yes | Free-text comment to add to the prepaid card. |
| `id` | `string` | No |  |
| `inquiryCategoryCode` | `int` | No | Inquiry category code. |
| `inquiryIdNumber` | `int` | No | Inquiry ID number. |
| `inquirySource` | `string` | No | Origination source identifier (e.g. |
| `inquiryTypeCode` | `int` | No | Inquiry type code. |
| `issueDescription` | `string` | Yes | Short description of the issue. |
| `status` | `string` | No | Status of the inquiry (e.g. |
| `userId` | `string` | No | Agent or CSR user ID. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AddCommentEscalation(nil).Create(map[string]any{
    "id": "example_id",
    "commentText": "example_commentText",
    "issueDescription": "example_issueDescription",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AddCommentEscalationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AllEventTypeEntity

```go
allEventType := client.AllEventType(nil)
fmt.Println(allEventType.GetName()) // "all_event_type"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No | The category of events can be subscribed to. |
| `eventTypes` | `[]any` | No | The event types that can be subscribed to. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AllEventType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AllEventTypeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AsyncOrderEntity

```go
asyncOrder := client.AsyncOrder(nil)
fmt.Println(asyncOrder.GetName()) // "async_order"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes | specify the account this order will be deducted from |
| `accountNumber` | `string` | Yes |  |
| `amountCharged` | `map[string]any` | No | Initial value and the total charged amount on the account |
| `campaign` | `string` | No | Optional. |
| `createdAt` | `string` | No |  |
| `customerIdentifier` | `string` | Yes | specify the customer associated with the order. |
| `duplicateLineItemRefIds` | `map[string]any` | No | If any duplicate duplicateLineItemRefIds exist in the request |
| `externalRefID` | `string` | No | Required. |
| `failedLineItems` | `[]any` | No | Failed line items list (business validations) |
| `fulfillBy` | `string` | No |  |
| `lineItems` | `[]any` | Yes | Line Items of the bulk order a required field |
| `notes` | `string` | No | Optional order notes. |
| `orderStatus` | `string` | No |  |
| `purchaseOrderNumber` | `string` | No | The Purchase Order Number associated with this order. |
| `referenceOrderID` | `string` | Yes |  |
| `sender` | `map[string]any` | No | Optional. |
| `status` | `string` | No | This status reflects about cart status or validation status based on the processing |
| `totalLineItems` | `int` | No | Total number of line items submitted in the request |
| `totalLineItemsRows` | `int` | No |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AsyncOrder(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AsyncOrder(nil).Create(map[string]any{
    "accountIdentifier": "example_accountIdentifier",
    "accountNumber": "example_accountNumber",
    "customerIdentifier": "example_customerIdentifier",
    "lineItems": []any{},
    "referenceOrderID": "example_referenceOrderID",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AsyncOrderEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AsyncOrderDetailViewEntity

```go
asyncOrderDetailView := client.AsyncOrderDetailView(nil)
fmt.Println(asyncOrderDetailView.GetName()) // "async_order_detail_view"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | No | Account identifier |
| `amountCharged` | `map[string]any` | No | Initial value and the total charged amount on the account |
| `campaign` | `string` | No | Campaign name |
| `completedAt` | `string` | No | Order completion timestamp |
| `createdAt` | `string` | No | Order creation timestamp |
| `customerIdentifier` | `string` | No | Customer identifier |
| `externalRefID` | `string` | No | External reference ID provided by client |
| `id` | `string` | No |  |
| `lineItems` | `[]any` | No | list of line items |
| `notes` | `string` | No | Order notes |
| `orderErrors` | `[]any` | No | Order level errors |
| `orderStatus` | `string` | No | Current status of the order |
| `pagination` | `map[string]any` | No | Pagination information |
| `purchaseOrderNumber` | `string` | No | Purchase order number |
| `referenceOrderID` | `string` | No | Internal reference order ID |
| `sender` | `map[string]any` | No | Sender information |
| `totalLineItems` | `int` | No | Total number of line items |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AsyncOrderDetailView(nil).Load(map[string]any{"account_identifier": "account_identifier", "customer_identifier": "customer_identifier", "external_ref_id": "external_ref_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AsyncOrderDetailView(nil).Update(map[string]any{
    "account_identifier": "account_identifier",
    "customer_identifier": "customer_identifier",
    "external_ref_id": "external_ref_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AsyncOrderDetailViewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AsyncOrderLineItemsViewEntity

```go
asyncOrderLineItemsView := client.AsyncOrderLineItemsView(nil)
fmt.Println(asyncOrderLineItemsView.GetName()) // "async_order_line_items_view"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes |  |
| `amountCharged` | `map[string]any` | No | Initial value and the total charged amount on the account |
| `campaign` | `string` | No |  |
| `customerIdentifier` | `string` | Yes |  |
| `externalRefID` | `string` | No |  |
| `lineItems` | `[]any` | No | The List of Line Items for the Async Order. |
| `orderErrors` | `[]any` | No | The List of Errors for the Async Order. |
| `orderNotes` | `string` | No |  |
| `orderStatus` | `string` | Yes |  |
| `pagination` | `map[string]any` | No | The cursor for pagination of the async order line items. |
| `purchaseOrderNumber` | `string` | No |  |
| `referenceOrderID` | `string` | Yes |  |
| `sender` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AsyncOrderLineItemsView(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AsyncOrderLineItemsViewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AsyncReasonCodesViewEntity

```go
asyncReasonCodesView := client.AsyncReasonCodesView(nil)
fmt.Println(asyncReasonCodesView.GetName()) // "async_reason_codes_view"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AsyncReasonCodesView(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AsyncReasonCodesViewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AsyncUpdateLineItemViewEntity

```go
asyncUpdateLineItemView := client.AsyncUpdateLineItemView(nil)
fmt.Println(asyncUpdateLineItemView.GetName()) // "async_update_line_item_view"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deliveryDate` | `string` | No | Optional. |
| `lineItemNote` | `string` | No | Optional line item notes (up to 150 characters) |
| `senderInfo` | `map[string]any` | No | Optional. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AsyncUpdateLineItemView(nil).Update(map[string]any{
    "reference_line_item_id": "reference_line_item_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AsyncUpdateLineItemViewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BalanceAlertViewEntity

```go
balanceAlertView := client.BalanceAlertView(nil)
fmt.Println(balanceAlertView.GetName()) // "balance_alert_view"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.BalanceAlertView(nil).Remove(map[string]any{"account_id": "account_id", "balance_alert_id": "balance_alert_id", "customer_identifier": "customer_identifier"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BalanceAlertViewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BrandCategoriesViewEntity

```go
brandCategoriesView := client.BrandCategoriesView(nil)
fmt.Println(brandCategoriesView.GetName()) // "brand_categories_view"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `identifier` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BrandCategoriesView(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BrandCategoriesViewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CatalogEntity

```go
catalog := client.Catalog(nil)
fmt.Println(catalog.GetName()) // "catalog"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `barcodeType` | `string` | No |  |
| `brandKey` | `string` | Yes |  |
| `brandName` | `string` | Yes |  |
| `brandRequirements` | `map[string]any` | Yes |  |
| `categories` | `[]any` | Yes |  |
| `createdDate` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `imageUrls` | `map[string]any` | Yes |  |
| `items` | `[]any` | Yes |  |
| `lastUpdateDate` | `string` | Yes |  |
| `shortDescription` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `terms` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Catalog(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CatalogEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ChoiceProductEntity

```go
choiceProduct := client.ChoiceProduct(nil)
fmt.Println(choiceProduct.GetName()) // "choice_product"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `countries` | `[]any` | No |  |
| `currencyCode` | `string` | No |  |
| `id` | `string` | No |  |
| `rewardName` | `string` | No |  |
| `utid` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ChoiceProduct(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ChoiceProduct(nil).Load(map[string]any{"id": "choice_product_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ChoiceProductEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CountryViewSummaryEntity

```go
countryViewSummary := client.CountryViewSummary(nil)
fmt.Println(countryViewSummary.GetName()) // "country_view_summary"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `countryName` | `string` | Yes |  |
| `preferredCurrency` | `string` | Yes |  |
| `threeLetterCode` | `string` | Yes |  |
| `twoLetterCode` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CountryViewSummary(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CountryViewSummaryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreateAccountCriterionEntity

```go
createAccountCriterion := client.CreateAccountCriterion(nil)
fmt.Println(createAccountCriterion.GetName()) // "create_account_criterion"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes | A unique identifier for this account. |
| `contactEmail` | `string` | Yes | An email address for a designated representative for this account. |
| `currencyCode` | `string` | No | The currency this account will accept for deposits/withdraws. |
| `displayName` | `string` | Yes | A friendly name for this account. |
| `fundingNotification` | `[]any` | No | optional, send funding notification emails to the following address(es) |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CreateAccountCriterion(nil).Create(map[string]any{
    "customer_identifier": "example_customer_identifier",
    "accountIdentifier": "example_accountIdentifier",
    "contactEmail": "example_contactEmail",
    "displayName": "example_displayName",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreateAccountCriterionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreateCustomerCriterionEntity

```go
createCustomerCriterion := client.CreateCustomerCriterion(nil)
fmt.Println(createCustomerCriterion.GetName()) // "create_customer_criterion"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreateCustomerCriterionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CredentialTypeViewEntity

```go
credentialTypeView := client.CredentialTypeView(nil)
fmt.Println(credentialTypeView.GetName()) // "credential_type_view"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credentialType` | `string` | Yes |  |
| `description` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CredentialTypeView(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CredentialTypeViewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreditCardEntity

```go
creditCard := client.CreditCard(nil)
fmt.Println(creditCard.GetName()) // "credit_card"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes | specify the account this credit card is associated with |
| `accountNumber` | `string` | Yes |  |
| `activationDate` | `string` | Yes |  |
| `billingAddress` | `map[string]any` | Yes | required Enter the billing address information for the credit card that is being registered |
| `contactInformation` | `[]any` | Yes | Optional. |
| `createdDate` | `string` | Yes |  |
| `creditCard` | `map[string]any` | Yes | required Enter the credit card details that is being registered |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CreditCard(nil).Load(map[string]any{"id": "credit_card_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CreditCard(nil).Create(map[string]any{
    "accountIdentifier": "example_accountIdentifier",
    "accountNumber": "example_accountNumber",
    "activationDate": "example_activationDate",
    "billingAddress": map[string]any{},
    "contactInformation": []any{},
    "createdDate": "example_createdDate",
    "creditCard": map[string]any{},
    "customerIdentifier": "example_customerIdentifier",
    "expirationDate": "example_expirationDate",
    "ipAddress": "example_ipAddress",
    "label": "example_label",
    "lastFourDigits": "example_lastFourDigits",
    "status": "example_status",
    "token": "example_token",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreditCardEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreditCardDepositEntity

```go
creditCardDeposit := client.CreditCardDeposit(nil)
fmt.Println(creditCardDeposit.GetName()) // "credit_card_deposit"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes | specify the account this credit card is associated with |
| `accountNumber` | `string` | Yes |  |
| `amount` | `float64` | Yes | specify the amount to fund in USD |
| `amountCharged` | `float64` | Yes |  |
| `createdDate` | `string` | Yes |  |
| `creditCardToken` | `string` | Yes | specify the credit card token to fund with |
| `customerIdentifier` | `string` | Yes | specify the customer associated with the credit card. |
| `externalRefID` | `string` | No | specify the external reference id to associate with this funding action. |
| `feePercent` | `float64` | Yes |  |
| `id` | `string` | No |  |
| `referenceDepositID` | `string` | Yes |  |
| `status` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CreditCardDeposit(nil).Load(map[string]any{"id": "credit_card_deposit_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CreditCardDeposit(nil).Create(map[string]any{
    "accountIdentifier": "example_accountIdentifier",
    "accountNumber": "example_accountNumber",
    "amount": 1,
    "amountCharged": 1,
    "createdDate": "example_createdDate",
    "creditCardToken": "example_creditCardToken",
    "customerIdentifier": "example_customerIdentifier",
    "feePercent": 1,
    "referenceDepositID": "example_referenceDepositID",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreditCardDepositEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreditCardUnregisterEntity

```go
creditCardUnregister := client.CreditCardUnregister(nil)
fmt.Println(creditCardUnregister.GetName()) // "credit_card_unregister"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CreditCardUnregister(nil).Create(map[string]any{
    "accountIdentifier": "example_accountIdentifier",
    "createdDate": "example_createdDate",
    "creditCardToken": "example_creditCardToken",
    "customerIdentifier": "example_customerIdentifier",
    "message": "example_message",
    "token": "example_token",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreditCardUnregisterEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomerEntity

```go
customer := client.Customer(nil)
fmt.Println(customer.GetName()) // "customer"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accounts` | `[]any` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `customerIdentifier` | `string` | Yes | A unique identifier for this customer. |
| `displayName` | `string` | Yes | A friendly name for this customer. |
| `id` | `string` | No |  |
| `status` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Customer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Customer(nil).Load(map[string]any{"id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Customer(nil).Create(map[string]any{
    "accounts": []any{},
    "createdAt": "example_createdAt",
    "customerIdentifier": "example_customerIdentifier",
    "displayName": "example_displayName",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmailTemplateListViewEntity

```go
emailTemplateListView := client.EmailTemplateListView(nil)
fmt.Println(emailTemplateListView.GetName()) // "email_template_list_view"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmailTemplateListViewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmailTemplateViewVerboseEntity

```go
emailTemplateViewVerbose := client.EmailTemplateViewVerbose(nil)
fmt.Println(emailTemplateViewVerbose.GetName()) // "email_template_view_verbose"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accentColor` | `string` | Yes | A Hex color value, six hexadecimal digits preceded by a pound sign, used as an accent in the email. |
| `accessControl` | `[]any` | No | (Optional) Which Customers and/or Accounts should have access to this template. |
| `accessControls` | `[]any` | No |  |
| `closing` | `string` | Yes | After the reward credential, a space to close the email message to the recipient. |
| `customerServiceMessage` | `string` | No | If left null, Tango Card's Customer Support contact information will be included. |
| `defaults` | `[]any` | No | If you want this template to be used at order time for the given Platform, Customer or Account when the Email Template Identifier (etid) is not provided with the order. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EmailTemplateViewVerbose(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.EmailTemplateViewVerbose(nil).Load(map[string]any{"etid": "etid"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.EmailTemplateViewVerbose(nil).Create(map[string]any{
    "accentColor": "example_accentColor",
    "closing": "example_closing",
    "etid": "example_etid",
    "fromName": "example_fromName",
    "headerImage": "example_headerImage",
    "headerImageAltText": "example_headerImageAltText",
    "messageBody": "example_messageBody",
    "name": "example_name",
    "subject": "example_subject",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.EmailTemplateViewVerbose(nil).Update(map[string]any{
    "etid": "etid",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmailTemplateViewVerboseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmbeddableResponseDtoEntity

```go
embeddableResponseDto := client.EmbeddableResponseDto(nil)
fmt.Println(embeddableResponseDto.GetName()) // "embeddable_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `url` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.EmbeddableResponseDto(nil).Load(map[string]any{"reference_line_item_id": "reference_line_item_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmbeddableResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ExchangeRatesWithDisclaimerEntity

```go
exchangeRatesWithDisclaimer := client.ExchangeRatesWithDisclaimer(nil)
fmt.Println(exchangeRatesWithDisclaimer.GetName()) // "exchange_rates_with_disclaimer"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `baseCurrency` | `string` | Yes |  |
| `baseFx` | `string` | Yes |  |
| `lastModifiedDate` | `string` | Yes |  |
| `rewardCurrency` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ExchangeRatesWithDisclaimer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ExchangeRatesWithDisclaimerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LineItemEntity

```go
lineItem := client.LineItem(nil)
fmt.Println(lineItem.GetName()) // "line_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes |  |
| `accountNumber` | `string` | Yes |  |
| `amountCharged` | `map[string]any` | No |  |
| `amountIssued` | `map[string]any` | Yes |  |
| `campaign` | `string` | No |  |
| `canCancel` | `bool` | No |  |
| `canFreeze` | `bool` | No |  |
| `customerIdentifier` | `string` | Yes |  |
| `dateIssued` | `string` | Yes |  |
| `deliveryMethod` | `string` | No |  |
| `deliveryStatus` | `string` | No |  |
| `emailStatus` | `string` | Yes |  |
| `etid` | `string` | Yes |  |
| `expirationDate` | `string` | Yes |  |
| `externalReferenceLineItemID` | `string` | No |  |
| `id` | `string` | No |  |
| `lineItemActionHistory` | `[]any` | No |  |
| `lineItemActionReason` | `string` | No |  |
| `lineItemErrors` | `[]any` | No | Errors related to the line item |
| `lineNumber` | `int` | Yes |  |
| `orderNotes` | `string` | No |  |
| `orderSource` | `string` | Yes |  |
| `orderStatus` | `string` | Yes |  |
| `ptid` | `string` | No |  |
| `purchaseOrderNumber` | `string` | No |  |
| `quantity` | `int` | No | quantity of line items |
| `recipient` | `map[string]any` | No |  |
| `redemptionHistory` | `[]any` | No |  |
| `referenceLineItemID` | `string` | Yes |  |
| `referenceOrderID` | `string` | Yes |  |
| `reissuedFromReferenceLineItemId` | `string` | No | Reissued from reference line item ID |
| `reissuedToReferenceLineItemId` | `string` | No | Reissued to reference line item ID |
| `remainingBalance` | `float64` | No |  |
| `resendHistory` | `[]any` | No |  |
| `reward` | `map[string]any` | Yes |  |
| `rewardName` | `string` | Yes |  |
| `rewardStatus` | `string` | No |  |
| `rewardViewHistory` | `[]any` | No |  |
| `sender` | `map[string]any` | No |  |
| `status` | `string` | Yes |  |
| `utid` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.LineItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.LineItem(nil).Load(map[string]any{"id": "line_item_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LineItem(nil).Create(map[string]any{
    "reference_line_item_id": "example_reference_line_item_id",
    "accountIdentifier": "example_accountIdentifier",
    "accountNumber": "example_accountNumber",
    "amountIssued": map[string]any{},
    "customerIdentifier": "example_customerIdentifier",
    "dateIssued": "example_dateIssued",
    "emailStatus": "example_emailStatus",
    "etid": "example_etid",
    "expirationDate": "example_expirationDate",
    "lineNumber": 1,
    "orderSource": "example_orderSource",
    "orderStatus": "example_orderStatus",
    "referenceLineItemID": "example_referenceLineItemID",
    "referenceOrderID": "example_referenceOrderID",
    "reward": map[string]any{},
    "rewardName": "example_rewardName",
    "status": "example_status",
    "utid": "example_utid",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LineItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LowBalanceAlertListViewEntity

```go
lowBalanceAlertListView := client.LowBalanceAlertListView(nil)
fmt.Println(lowBalanceAlertListView.GetName()) // "low_balance_alert_list_view"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | No |  |
| `balanceAlertDisplayName` | `string` | No |  |
| `balanceAlertID` | `string` | No |  |
| `balanceAlertNotification` | `[]any` | No |  |
| `balanceAlertThreshold` | `float64` | No |  |
| `createdAt` | `string` | No |  |
| `customerIdentifier` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.LowBalanceAlertListView(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LowBalanceAlertListViewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LowBalanceAlertViewEntity

```go
lowBalanceAlertView := client.LowBalanceAlertView(nil)
fmt.Println(lowBalanceAlertView.GetName()) // "low_balance_alert_view"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | No |  |
| `balanceAlertDisplayName` | `string` | No | A friendly name for this low balance alert (will be displayed in the Tango Portal). |
| `balanceAlertID` | `string` | No |  |
| `balanceAlertNotification` | `[]any` | No | Send low balance notification emails to the following address(es). |
| `balanceAlertThreshold` | `float64` | No | The threshold amount that will trigger the low balance alert. |
| `createdAt` | `string` | No |  |
| `customerIdentifier` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.LowBalanceAlertView(nil).Load(map[string]any{"account_id": "account_id", "balance_alert_id": "balance_alert_id", "customer_identifier": "customer_identifier"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LowBalanceAlertView(nil).Create(map[string]any{
    "account_identifier": "example_account_identifier",
    "customer_identifier": "example_customer_identifier",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.LowBalanceAlertView(nil).Update(map[string]any{
    "account_id": "account_id",
    "balance_alert_id": "balance_alert_id",
    "customer_identifier": "customer_identifier",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LowBalanceAlertViewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MobileCountryEntity

```go
mobileCountry := client.MobileCountry(nil)
fmt.Println(mobileCountry.GetName()) // "mobile_country"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `countryCode` | `string` | No |  |
| `countryName` | `string` | No |  |
| `isoCode` | `string` | No |  |
| `languageCode` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.MobileCountry(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MobileCountryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## N14WebhookEntity

```go
n14Webhook := client.N14Webhook(nil)
fmt.Println(n14Webhook.GetName()) // "n14_webhook"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `[]any` | No | The categories the customer wants to subscribe to. |
| `createdAt` | `string` | No | The date and time the webhook was created. |
| `eventTypes` | `[]any` | No | The event types the customer wants to subscribe to. |
| `expiresAt` | `string` | No | The date and time the webhook expires. |
| `headers` | `[]any` | No | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.N14Webhook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.N14Webhook(nil).Load(map[string]any{"webhook_id": "webhook_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.N14Webhook(nil).Create(map[string]any{
    "test_name": "example_test_name",
    "webhook_id": "example_webhook_id",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.N14Webhook(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `N14WebhookEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## N1CustomerEntity

```go
n1Customer := client.N1Customer(nil)
fmt.Println(n1Customer.GetName()) // "n1_customer"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.N1Customer(nil).Load(map[string]any{"customer_identifier": "customer_identifier"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `N1CustomerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## N2AccountEntity

```go
n2Account := client.N2Account(nil)
fmt.Println(n2Account.GetName()) // "n2_account"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `N2AccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## N3FundEntity

```go
n3Fund := client.N3Fund(nil)
fmt.Println(n3Fund.GetName()) // "n3_fund"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `N3FundEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## N8LineItemEntity

```go
n8LineItem := client.N8LineItem(nil)
fmt.Println(n8LineItem.GetName()) // "n8_line_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `campaign` | `string` | No | optional campaign that may be used to administratively categorize a specific order. |
| `id` | `string` | No |  |
| `orderNotes` | `string` | No | Optional order notes (up to 150 characters) |
| `purchaseOrderNumber` | `string` | No | The Purchase Order Number associated with this order. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.N8LineItem(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `N8LineItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## N9DigitalTemplateEntity

```go
n9DigitalTemplate := client.N9DigitalTemplate(nil)
fmt.Println(n9DigitalTemplate.GetName()) // "n9_digital_template"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.N9DigitalTemplate(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `N9DigitalTemplateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrderEntity

```go
order := client.Order(nil)
fmt.Println(order.GetName()) // "order"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes | Specify the account this order will be deducted from |
| `accountNumber` | `string` | Yes |  |
| `amount` | `float64` | Yes | Specify the face value of of the reward. |
| `amountCharged` | `map[string]any` | Yes |  |
| `asyncOrderEntity` | `map[string]any` | No |  |
| `campaign` | `string` | Yes | Optional. |
| `createdAt` | `string` | Yes |  |
| `customFields` | `map[string]any` | No | Optional. |
| `customerIdentifier` | `string` | Yes | Specify the customer associated with the order. |
| `deliveryMethod` | `string` | No | Specify delivery method for the order |
| `denomination` | `map[string]any` | No |  |
| `emailSubject` | `string` | Yes | Optional. |
| `etid` | `string` | Yes | Optional. |
| `expirationDate` | `string` | No | Optional for Promo Links, the exact calendar date the Promo Link will expire. |
| `externalRefID` | `string` | No | Optional. |
| `id` | `string` | No |  |
| `lineItemStatus` | `string` | No |  |
| `message` | `string` | Yes | Optional gift message |
| `notes` | `string` | No | Optional order notes. |
| `orderClientSource` | `string` | No |  |
| `orderExternalRefIdDupe` | `bool` | No |  |
| `orderStatus` | `string` | No |  |
| `ptid` | `string` | No | Only required for Printed Reward Links, the unique identifier for the Printed Reward Link Template provided in the Tango Portal on the Printed Template page. |
| `purchaseOrderNumber` | `string` | No | The Purchase Order Number associated with this order. |
| `recipient` | `map[string]any` | No | Required if deliveryMethod is EMAIL, PHONE, or ADDRESS. |
| `redemptionInstructions` | `string` | No |  |
| `referenceLineItemID` | `string` | No |  |
| `referenceOrderID` | `string` | Yes |  |
| `reward` | `map[string]any` | Yes |  |
| `rewardName` | `string` | Yes |  |
| `sendEmail` | `bool` | No | Deprecated Oct 1, 2025. |
| `sender` | `map[string]any` | No | Optional. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Order(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Order(nil).Load(map[string]any{"id": "order_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Order(nil).Create(map[string]any{
    "accountIdentifier": "example_accountIdentifier",
    "accountNumber": "example_accountNumber",
    "amount": 1,
    "amountCharged": map[string]any{},
    "campaign": "example_campaign",
    "createdAt": "example_createdAt",
    "customerIdentifier": "example_customerIdentifier",
    "emailSubject": "example_emailSubject",
    "etid": "example_etid",
    "message": "example_message",
    "referenceOrderID": "example_referenceOrderID",
    "reward": map[string]any{},
    "rewardName": "example_rewardName",
    "status": "example_status",
    "utid": "example_utid",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrderEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrderViewSummaryEntity

```go
orderViewSummary := client.OrderViewSummary(nil)
fmt.Println(orderViewSummary.GetName()) // "order_view_summary"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `float64` | No | Optional. |
| `deliveryMethod` | `string` | No | Optional. |
| `notes` | `string` | No | Optional order notes (up to 150 characters). |
| `otherReason` | `string` | No | Required when reasonCode is "OTHER", enter the reason why the line item is being reissued. |
| `reasonCode` | `string` | Yes | Required. |
| `recipient` | `map[string]any` | No | Optional. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OrderViewSummary(nil).Create(map[string]any{
    "reference_line_item_id": "example_reference_line_item_id",
    "reasonCode": "example_reasonCode",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrderViewSummaryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PrepaidCardInfoEntity

```go
prepaidCardInfo := client.PrepaidCardInfo(nil)
fmt.Println(prepaidCardInfo.GetName()) // "prepaid_card_info"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `balance` | `map[string]any` | No |  |
| `card` | `map[string]any` | No |  |
| `comments` | `[]any` | No |  |
| `registration` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PrepaidCardInfo(nil).Load(map[string]any{"reference_line_item_id": "reference_line_item_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PrepaidCardInfoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PrepaidCardTransactionEntity

```go
prepaidCardTransaction := client.PrepaidCardTransaction(nil)
fmt.Println(prepaidCardTransaction.GetName()) // "prepaid_card_transaction"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `journal` | `[]any` | No |  |
| `page` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PrepaidCardTransaction(nil).Load(map[string]any{"reference_line_item_id": "reference_line_item_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PrepaidCardTransactionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReissueCardEntity

```go
reissueCard := client.ReissueCard(nil)
fmt.Println(reissueCard.GetName()) // "reissue_card"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ReissueCard(nil).Create(map[string]any{
    "id": "example_id",
    "reason": "example_reason",
    "updatedBy": "example_updatedBy",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReissueCardEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReplacementReasonEntity

```go
replacementReason := client.ReplacementReason(nil)
fmt.Println(replacementReason.GetName()) // "replacement_reason"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `replacementReasons` | `[]any` | No | List of valid replacement reason codes. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ReplacementReason(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReplacementReasonEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ResendEntity

```go
resend := client.Resend(nil)
fmt.Println(resend.GetName()) // "resend"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Resend(nil).Create(map[string]any{
    "line_item_id": "example_line_item_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ResendEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RewardReasonsMapEntity

```go
rewardReasonsMap := client.RewardReasonsMap(nil)
fmt.Println(rewardReasonsMap.GetName()) // "reward_reasons_map"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `CANCEL` | `map[string]any` | No | Map of cancel reasons |
| `CANCEL_AND_REISSUE` | `map[string]any` | No | Map of cancel and reissue reasons |
| `FREEZE` | `map[string]any` | No | Map of freeze reasons |
| `UNFREEZE` | `map[string]any` | No | Map of unfreeze reasons |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RewardReasonsMap(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RewardReasonsMapEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TransferFundEntity

```go
transferFund := client.TransferFund(nil)
fmt.Println(transferFund.GetName()) // "transfer_fund"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `float64` | Yes | Specify the currency amount of the funds being transferred. |
| `externalRefID` | `string` | No | specify the external reference id to associate with this funding action. |
| `transferDate` | `string` | No |  |
| `transferFrom` | `map[string]any` | No | The accountIdentifier for the Account transferring funds from. |
| `transferNotes` | `string` | No | Optional transfer notes (up to 150 characters) |
| `transferTo` | `map[string]any` | No | The accountIdentifier for the Account transferring funds to. |
| `transferredAmount` | `float64` | No |  |

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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TransferFund(nil).Create(map[string]any{
    "amount": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TransferFundEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UpdateAccountEntity

```go
updateAccount := client.UpdateAccount(nil)
fmt.Println(updateAccount.GetName()) // "update_account"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `registration` | `map[string]any` | Yes |  |
| `status` | `string` | No |  |
| `updatedBy` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.UpdateAccount(nil).Create(map[string]any{
    "id": "example_id",
    "registration": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UpdateAccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UpdateWebhookSubscriptionResponseViewEntity

```go
updateWebhookSubscriptionResponseView := client.UpdateWebhookSubscriptionResponseView(nil)
fmt.Println(updateWebhookSubscriptionResponseView.GetName()) // "update_webhook_subscription_response_view"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `[]any` | No | The categories the customer is subscribed to. |
| `createdAt` | `string` | No | The date and time the webhook was created. |
| `eventTypes` | `[]any` | No | The event types the customer is subscribed to. |
| `expiresAt` | `string` | No | The date and time the webhook expires. |
| `headers` | `[]any` | No | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `string` | No | The HMAC secret key used to sign the webhook payload. |
| `payloadVerificationMethod` | `string` | No | Method to verify webhook payload integrity |
| `signingCertificate` | `string` | No | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `string` | No | The date and time when the webhook was last updated. |
| `url` | `string` | No | The URL of the customer's webhook listener. |
| `webhookId` | `string` | No | The ID of the webhook. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.UpdateWebhookSubscriptionResponseView(nil).Update(map[string]any{
    "webhook_id": "webhook_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UpdateWebhookSubscriptionResponseViewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhookEntity

```go
webhook := client.Webhook(nil)
fmt.Println(webhook.GetName()) // "webhook"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `[]any` | No | The categories the customer wants to subscribe to. |
| `createdAt` | `string` | No | The date and time the webhook was created. |
| `eventTypes` | `[]any` | No | The event types the customer wants to subscribe to. |
| `expiresAt` | `string` | No | The date and time the webhook expires. |
| `headers` | `[]any` | No | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `string` | No | The HMAC secret key used to sign the webhook payload. |
| `id` | `string` | No |  |
| `payloadVerificationMethod` | `string` | No | Method to verify webhook payload integrity. |
| `signingCertificate` | `string` | No | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `string` | No | The date and time when the webhook was last updated. |
| `url` | `string` | No | The URL of the customer's webhook listener. |
| `webhookId` | `string` | No | The ID of the webhook. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Webhook(nil).Load(map[string]any{"id": "webhook_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Webhook(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `GetName() string`

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

```go
client := sdk.NewTangocardSDK(map[string]any{
    "feature": map[string]any{
        "debug": map[string]any{"active": true},
        "idempotency": map[string]any{"active": true},
        "metrics": map[string]any{"active": true},
        "paging": map[string]any{"active": true},
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
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

