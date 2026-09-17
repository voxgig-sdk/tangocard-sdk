# Tangocard PHP SDK Reference

Complete API reference for the Tangocard PHP SDK.


## TangocardSDK

### Constructor

```php
require_once __DIR__ . '/tangocard_sdk.php';

$client = new TangocardSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TangocardSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = TangocardSDK::test();
```


### Instance Methods

#### `Account($data = null)`

Create a new `AccountEntity` instance. Pass `null` for no initial data.

#### `AddCommentEscalation($data = null)`

Create a new `AddCommentEscalationEntity` instance. Pass `null` for no initial data.

#### `AllEventType($data = null)`

Create a new `AllEventTypeEntity` instance. Pass `null` for no initial data.

#### `AsyncOrder($data = null)`

Create a new `AsyncOrderEntity` instance. Pass `null` for no initial data.

#### `AsyncOrderDetailView($data = null)`

Create a new `AsyncOrderDetailViewEntity` instance. Pass `null` for no initial data.

#### `AsyncOrderLineItemsView($data = null)`

Create a new `AsyncOrderLineItemsViewEntity` instance. Pass `null` for no initial data.

#### `AsyncReasonCodesView($data = null)`

Create a new `AsyncReasonCodesViewEntity` instance. Pass `null` for no initial data.

#### `AsyncUpdateLineItemView($data = null)`

Create a new `AsyncUpdateLineItemViewEntity` instance. Pass `null` for no initial data.

#### `BalanceAlertView($data = null)`

Create a new `BalanceAlertViewEntity` instance. Pass `null` for no initial data.

#### `BrandCategoriesView($data = null)`

Create a new `BrandCategoriesViewEntity` instance. Pass `null` for no initial data.

#### `Catalog($data = null)`

Create a new `CatalogEntity` instance. Pass `null` for no initial data.

#### `ChoiceProduct($data = null)`

Create a new `ChoiceProductEntity` instance. Pass `null` for no initial data.

#### `CountryViewSummary($data = null)`

Create a new `CountryViewSummaryEntity` instance. Pass `null` for no initial data.

#### `CreateAccountCriterion($data = null)`

Create a new `CreateAccountCriterionEntity` instance. Pass `null` for no initial data.

#### `CreateCustomerCriterion($data = null)`

Create a new `CreateCustomerCriterionEntity` instance. Pass `null` for no initial data.

#### `CredentialTypeView($data = null)`

Create a new `CredentialTypeViewEntity` instance. Pass `null` for no initial data.

#### `CreditCard($data = null)`

Create a new `CreditCardEntity` instance. Pass `null` for no initial data.

#### `CreditCardDeposit($data = null)`

Create a new `CreditCardDepositEntity` instance. Pass `null` for no initial data.

#### `CreditCardUnregister($data = null)`

Create a new `CreditCardUnregisterEntity` instance. Pass `null` for no initial data.

#### `Customer($data = null)`

Create a new `CustomerEntity` instance. Pass `null` for no initial data.

#### `EmailTemplateListView($data = null)`

Create a new `EmailTemplateListViewEntity` instance. Pass `null` for no initial data.

#### `EmailTemplateViewVerbose($data = null)`

Create a new `EmailTemplateViewVerboseEntity` instance. Pass `null` for no initial data.

#### `EmbeddableResponseDto($data = null)`

Create a new `EmbeddableResponseDtoEntity` instance. Pass `null` for no initial data.

#### `ExchangeRatesWithDisclaimer($data = null)`

Create a new `ExchangeRatesWithDisclaimerEntity` instance. Pass `null` for no initial data.

#### `LineItem($data = null)`

Create a new `LineItemEntity` instance. Pass `null` for no initial data.

#### `LowBalanceAlertListView($data = null)`

Create a new `LowBalanceAlertListViewEntity` instance. Pass `null` for no initial data.

#### `LowBalanceAlertView($data = null)`

Create a new `LowBalanceAlertViewEntity` instance. Pass `null` for no initial data.

#### `MobileCountry($data = null)`

Create a new `MobileCountryEntity` instance. Pass `null` for no initial data.

#### `N14Webhook($data = null)`

Create a new `N14WebhookEntity` instance. Pass `null` for no initial data.

#### `N1Customer($data = null)`

Create a new `N1CustomerEntity` instance. Pass `null` for no initial data.

#### `N2Account($data = null)`

Create a new `N2AccountEntity` instance. Pass `null` for no initial data.

#### `N3Fund($data = null)`

Create a new `N3FundEntity` instance. Pass `null` for no initial data.

#### `N8LineItem($data = null)`

Create a new `N8LineItemEntity` instance. Pass `null` for no initial data.

#### `N9DigitalTemplate($data = null)`

Create a new `N9DigitalTemplateEntity` instance. Pass `null` for no initial data.

#### `Order($data = null)`

Create a new `OrderEntity` instance. Pass `null` for no initial data.

#### `OrderViewSummary($data = null)`

Create a new `OrderViewSummaryEntity` instance. Pass `null` for no initial data.

#### `PrepaidCardInfo($data = null)`

Create a new `PrepaidCardInfoEntity` instance. Pass `null` for no initial data.

#### `PrepaidCardTransaction($data = null)`

Create a new `PrepaidCardTransactionEntity` instance. Pass `null` for no initial data.

#### `ReissueCard($data = null)`

Create a new `ReissueCardEntity` instance. Pass `null` for no initial data.

#### `ReplacementReason($data = null)`

Create a new `ReplacementReasonEntity` instance. Pass `null` for no initial data.

#### `Resend($data = null)`

Create a new `ResendEntity` instance. Pass `null` for no initial data.

#### `RewardReasonsMap($data = null)`

Create a new `RewardReasonsMapEntity` instance. Pass `null` for no initial data.

#### `TransferFund($data = null)`

Create a new `TransferFundEntity` instance. Pass `null` for no initial data.

#### `UpdateAccount($data = null)`

Create a new `UpdateAccountEntity` instance. Pass `null` for no initial data.

#### `UpdateWebhookSubscriptionResponseView($data = null)`

Create a new `UpdateWebhookSubscriptionResponseViewEntity` instance. Pass `null` for no initial data.

#### `Webhook($data = null)`

Create a new `WebhookEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): TangocardUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AccountEntity

```php
$account = $client->Account();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes |  |
| `accountNumber` | `string` | Yes |  |
| `contactEmail` | `string` | No | optional, an email address for a designated representative for this account. |
| `createdAt` | `string` | Yes |  |
| `currencyCode` | `string` | Yes |  |
| `currentBalance` | `float` | Yes |  |
| `displayName` | `string` | Yes | optional, a friendly name for this account. |
| `fundingNotification` | `array` | No | optional, send funding notification emails to the following address(es). |
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Account()->load(["id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Account()->update([
  "id" => "account_id",
  "customer_identifier" => "customer_identifier",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AccountEntity`

Create a new `AccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AddCommentEscalationEntity

```php
$add_comment_escalation = $client->AddCommentEscalation();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AddCommentEscalation()->create([
  "id" => null, // string
  "commentText" => null, // string
  "issueDescription" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AddCommentEscalationEntity`

Create a new `AddCommentEscalationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AllEventTypeEntity

```php
$all_event_type = $client->AllEventType();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No | The category of events can be subscribed to. |
| `eventTypes` | `array` | No | The event types that can be subscribed to. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AllEventType()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AllEventTypeEntity`

Create a new `AllEventTypeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AsyncOrderEntity

```php
$async_order = $client->AsyncOrder();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes | specify the account this order will be deducted from |
| `accountNumber` | `string` | Yes |  |
| `amountCharged` | `array` | No | Initial value and the total charged amount on the account |
| `campaign` | `string` | No | Optional. |
| `createdAt` | `string` | No |  |
| `customerIdentifier` | `string` | Yes | specify the customer associated with the order. |
| `duplicateLineItemRefIds` | `array` | No | If any duplicate duplicateLineItemRefIds exist in the request |
| `externalRefID` | `string` | No | Required. |
| `failedLineItems` | `array` | No | Failed line items list (business validations) |
| `fulfillBy` | `string` | No |  |
| `lineItems` | `array` | Yes | Line Items of the bulk order a required field |
| `notes` | `string` | No | Optional order notes. |
| `orderStatus` | `string` | No |  |
| `purchaseOrderNumber` | `string` | No | The Purchase Order Number associated with this order. |
| `referenceOrderID` | `string` | Yes |  |
| `sender` | `array` | No | Optional. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AsyncOrder()->create([
  "accountIdentifier" => null, // string
  "accountNumber" => null, // string
  "customerIdentifier" => null, // string
  "lineItems" => null, // array
  "referenceOrderID" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AsyncOrder()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AsyncOrderEntity`

Create a new `AsyncOrderEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AsyncOrderDetailViewEntity

```php
$async_order_detail_view = $client->AsyncOrderDetailView();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | No | Account identifier |
| `amountCharged` | `array` | No | Initial value and the total charged amount on the account |
| `campaign` | `string` | No | Campaign name |
| `completedAt` | `string` | No | Order completion timestamp |
| `createdAt` | `string` | No | Order creation timestamp |
| `customerIdentifier` | `string` | No | Customer identifier |
| `externalRefID` | `string` | No | External reference ID provided by client |
| `id` | `string` | No |  |
| `lineItems` | `array` | No | list of line items |
| `notes` | `string` | No | Order notes |
| `orderErrors` | `array` | No | Order level errors |
| `orderStatus` | `string` | No | Current status of the order |
| `pagination` | `array` | No | Pagination information |
| `purchaseOrderNumber` | `string` | No | Purchase order number |
| `referenceOrderID` | `string` | No | Internal reference order ID |
| `sender` | `array` | No | Sender information |
| `totalLineItems` | `int` | No | Total number of line items |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AsyncOrderDetailView()->load(["account_identifier" => "account_identifier", "customer_identifier" => "customer_identifier", "external_ref_id" => "external_ref_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AsyncOrderDetailView()->update([
  "account_identifier" => "account_identifier",
  "customer_identifier" => "customer_identifier",
  "external_ref_id" => "external_ref_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AsyncOrderDetailViewEntity`

Create a new `AsyncOrderDetailViewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AsyncOrderLineItemsViewEntity

```php
$async_order_line_items_view = $client->AsyncOrderLineItemsView();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes |  |
| `amountCharged` | `array` | No | Initial value and the total charged amount on the account |
| `campaign` | `string` | No |  |
| `customerIdentifier` | `string` | Yes |  |
| `externalRefID` | `string` | No |  |
| `lineItems` | `array` | No | The List of Line Items for the Async Order. |
| `orderErrors` | `array` | No | The List of Errors for the Async Order. |
| `orderNotes` | `string` | No |  |
| `orderStatus` | `string` | Yes |  |
| `pagination` | `array` | No | The cursor for pagination of the async order line items. |
| `purchaseOrderNumber` | `string` | No |  |
| `referenceOrderID` | `string` | Yes |  |
| `sender` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AsyncOrderLineItemsView()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AsyncOrderLineItemsViewEntity`

Create a new `AsyncOrderLineItemsViewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AsyncReasonCodesViewEntity

```php
$async_reason_codes_view = $client->AsyncReasonCodesView();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AsyncReasonCodesView()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AsyncReasonCodesViewEntity`

Create a new `AsyncReasonCodesViewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AsyncUpdateLineItemViewEntity

```php
$async_update_line_item_view = $client->AsyncUpdateLineItemView();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deliveryDate` | `string` | No | Optional. |
| `lineItemNote` | `string` | No | Optional line item notes (up to 150 characters) |
| `senderInfo` | `array` | No | Optional. |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AsyncUpdateLineItemView()->update([
  "reference_line_item_id" => "reference_line_item_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AsyncUpdateLineItemViewEntity`

Create a new `AsyncUpdateLineItemViewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BalanceAlertViewEntity

```php
$balance_alert_view = $client->BalanceAlertView();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->BalanceAlertView()->remove(["account_id" => "account_id", "balance_alert_id" => "balance_alert_id", "customer_identifier" => "customer_identifier"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BalanceAlertViewEntity`

Create a new `BalanceAlertViewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BrandCategoriesViewEntity

```php
$brand_categories_view = $client->BrandCategoriesView();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `identifier` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BrandCategoriesView()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BrandCategoriesViewEntity`

Create a new `BrandCategoriesViewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CatalogEntity

```php
$catalog = $client->Catalog();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `barcodeType` | `string` | No |  |
| `brandKey` | `string` | Yes |  |
| `brandName` | `string` | Yes |  |
| `brandRequirements` | `array` | Yes |  |
| `categories` | `array` | Yes |  |
| `createdDate` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `disclaimer` | `string` | Yes |  |
| `imageUrls` | `array` | Yes |  |
| `items` | `array` | Yes |  |
| `lastUpdateDate` | `string` | Yes |  |
| `shortDescription` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `terms` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Catalog()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CatalogEntity`

Create a new `CatalogEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ChoiceProductEntity

```php
$choice_product = $client->ChoiceProduct();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `countries` | `array` | No |  |
| `currencyCode` | `string` | No |  |
| `id` | `string` | No |  |
| `rewardName` | `string` | No |  |
| `utid` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ChoiceProduct()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ChoiceProduct()->load(["id" => "choice_product_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ChoiceProductEntity`

Create a new `ChoiceProductEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CountryViewSummaryEntity

```php
$country_view_summary = $client->CountryViewSummary();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `countryName` | `string` | Yes |  |
| `preferredCurrency` | `string` | Yes |  |
| `threeLetterCode` | `string` | Yes |  |
| `twoLetterCode` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CountryViewSummary()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CountryViewSummaryEntity`

Create a new `CountryViewSummaryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreateAccountCriterionEntity

```php
$create_account_criterion = $client->CreateAccountCriterion();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes | A unique identifier for this account. |
| `contactEmail` | `string` | Yes | An email address for a designated representative for this account. |
| `currencyCode` | `string` | No | The currency this account will accept for deposits/withdraws. |
| `displayName` | `string` | Yes | A friendly name for this account. |
| `fundingNotification` | `array` | No | optional, send funding notification emails to the following address(es) |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CreateAccountCriterion()->create([
  "customer_identifier" => null, // string
  "accountIdentifier" => null, // string
  "contactEmail" => null, // string
  "displayName" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreateAccountCriterionEntity`

Create a new `CreateAccountCriterionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreateCustomerCriterionEntity

```php
$create_customer_criterion = $client->CreateCustomerCriterion();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreateCustomerCriterionEntity`

Create a new `CreateCustomerCriterionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CredentialTypeViewEntity

```php
$credential_type_view = $client->CredentialTypeView();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credentialType` | `string` | Yes |  |
| `description` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CredentialTypeView()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CredentialTypeViewEntity`

Create a new `CredentialTypeViewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreditCardEntity

```php
$credit_card = $client->CreditCard();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes | specify the account this credit card is associated with |
| `accountNumber` | `string` | Yes |  |
| `activationDate` | `string` | Yes |  |
| `billingAddress` | `array` | Yes | required Enter the billing address information for the credit card that is being registered |
| `contactInformation` | `array` | Yes | Optional. |
| `createdDate` | `string` | Yes |  |
| `creditCard` | `array` | Yes | required Enter the credit card details that is being registered |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CreditCard()->create([
  "accountIdentifier" => null, // string
  "accountNumber" => null, // string
  "activationDate" => null, // string
  "billingAddress" => null, // array
  "contactInformation" => null, // array
  "createdDate" => null, // string
  "creditCard" => null, // array
  "customerIdentifier" => null, // string
  "expirationDate" => null, // string
  "ipAddress" => null, // string
  "label" => null, // string
  "lastFourDigits" => null, // string
  "status" => null, // string
  "token" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CreditCard()->load(["id" => "credit_card_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreditCardEntity`

Create a new `CreditCardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreditCardDepositEntity

```php
$credit_card_deposit = $client->CreditCardDeposit();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes | specify the account this credit card is associated with |
| `accountNumber` | `string` | Yes |  |
| `amount` | `float` | Yes | specify the amount to fund in USD |
| `amountCharged` | `float` | Yes |  |
| `createdDate` | `string` | Yes |  |
| `creditCardToken` | `string` | Yes | specify the credit card token to fund with |
| `customerIdentifier` | `string` | Yes | specify the customer associated with the credit card. |
| `externalRefID` | `string` | No | specify the external reference id to associate with this funding action. |
| `feePercent` | `float` | Yes |  |
| `id` | `string` | No |  |
| `referenceDepositID` | `string` | Yes |  |
| `status` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CreditCardDeposit()->create([
  "accountIdentifier" => null, // string
  "accountNumber" => null, // string
  "amount" => null, // float
  "amountCharged" => null, // float
  "createdDate" => null, // string
  "creditCardToken" => null, // string
  "customerIdentifier" => null, // string
  "feePercent" => null, // float
  "referenceDepositID" => null, // string
  "status" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CreditCardDeposit()->load(["id" => "credit_card_deposit_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreditCardDepositEntity`

Create a new `CreditCardDepositEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreditCardUnregisterEntity

```php
$credit_card_unregister = $client->CreditCardUnregister();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CreditCardUnregister()->create([
  "accountIdentifier" => null, // string
  "createdDate" => null, // string
  "creditCardToken" => null, // string
  "customerIdentifier" => null, // string
  "message" => null, // string
  "token" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreditCardUnregisterEntity`

Create a new `CreditCardUnregisterEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomerEntity

```php
$customer = $client->Customer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accounts` | `array` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `customerIdentifier` | `string` | Yes | A unique identifier for this customer. |
| `displayName` | `string` | Yes | A friendly name for this customer. |
| `id` | `string` | No |  |
| `status` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Customer()->create([
  "accounts" => null, // array
  "createdAt" => null, // string
  "customerIdentifier" => null, // string
  "displayName" => null, // string
  "status" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Customer()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Customer()->load(["id" => "customer_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomerEntity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmailTemplateListViewEntity

```php
$email_template_list_view = $client->EmailTemplateListView();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmailTemplateListViewEntity`

Create a new `EmailTemplateListViewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmailTemplateViewVerboseEntity

```php
$email_template_view_verbose = $client->EmailTemplateViewVerbose();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accentColor` | `string` | Yes | A Hex color value, six hexadecimal digits preceded by a pound sign, used as an accent in the email. |
| `accessControl` | `array` | No | (Optional) Which Customers and/or Accounts should have access to this template. |
| `accessControls` | `array` | No |  |
| `closing` | `string` | Yes | After the reward credential, a space to close the email message to the recipient. |
| `customerServiceMessage` | `string` | No | If left null, Tango Card's Customer Support contact information will be included. |
| `defaults` | `array` | No | If you want this template to be used at order time for the given Platform, Customer or Account when the Email Template Identifier (etid) is not provided with the order. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->EmailTemplateViewVerbose()->create([
  "accentColor" => null, // string
  "closing" => null, // string
  "etid" => null, // string
  "fromName" => null, // string
  "headerImage" => null, // string
  "headerImageAltText" => null, // string
  "messageBody" => null, // string
  "name" => null, // string
  "subject" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EmailTemplateViewVerbose()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->EmailTemplateViewVerbose()->load(["etid" => "etid"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->EmailTemplateViewVerbose()->update([
  "etid" => "etid",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmailTemplateViewVerboseEntity`

Create a new `EmailTemplateViewVerboseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmbeddableResponseDtoEntity

```php
$embeddable_response_dto = $client->EmbeddableResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `url` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->EmbeddableResponseDto()->load(["reference_line_item_id" => "reference_line_item_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmbeddableResponseDtoEntity`

Create a new `EmbeddableResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ExchangeRatesWithDisclaimerEntity

```php
$exchange_rates_with_disclaimer = $client->ExchangeRatesWithDisclaimer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `baseCurrency` | `string` | Yes |  |
| `baseFx` | `string` | Yes |  |
| `lastModifiedDate` | `string` | Yes |  |
| `rewardCurrency` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ExchangeRatesWithDisclaimer()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ExchangeRatesWithDisclaimerEntity`

Create a new `ExchangeRatesWithDisclaimerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LineItemEntity

```php
$line_item = $client->LineItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes |  |
| `accountNumber` | `string` | Yes |  |
| `amountCharged` | `array` | No |  |
| `amountIssued` | `array` | Yes |  |
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
| `lineItemActionHistory` | `array` | No |  |
| `lineItemActionReason` | `string` | No |  |
| `lineItemErrors` | `array` | No | Errors related to the line item |
| `lineNumber` | `int` | Yes |  |
| `orderNotes` | `string` | No |  |
| `orderSource` | `string` | Yes |  |
| `orderStatus` | `string` | Yes |  |
| `ptid` | `string` | No |  |
| `purchaseOrderNumber` | `string` | No |  |
| `quantity` | `int` | No | quantity of line items |
| `recipient` | `array` | No |  |
| `redemptionHistory` | `array` | No |  |
| `referenceLineItemID` | `string` | Yes |  |
| `referenceOrderID` | `string` | Yes |  |
| `reissuedFromReferenceLineItemId` | `string` | No | Reissued from reference line item ID |
| `reissuedToReferenceLineItemId` | `string` | No | Reissued to reference line item ID |
| `remainingBalance` | `float` | No |  |
| `resendHistory` | `array` | No |  |
| `reward` | `array` | Yes |  |
| `rewardName` | `string` | Yes |  |
| `rewardStatus` | `string` | No |  |
| `rewardViewHistory` | `array` | No |  |
| `sender` | `array` | No |  |
| `status` | `string` | Yes |  |
| `utid` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LineItem()->create([
  "reference_line_item_id" => null, // string
  "accountIdentifier" => null, // string
  "accountNumber" => null, // string
  "amountIssued" => null, // array
  "customerIdentifier" => null, // string
  "dateIssued" => null, // string
  "emailStatus" => null, // string
  "etid" => null, // string
  "expirationDate" => null, // string
  "lineNumber" => null, // int
  "orderSource" => null, // string
  "orderStatus" => null, // string
  "referenceLineItemID" => null, // string
  "referenceOrderID" => null, // string
  "reward" => null, // array
  "rewardName" => null, // string
  "status" => null, // string
  "utid" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->LineItem()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->LineItem()->load(["id" => "line_item_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LineItemEntity`

Create a new `LineItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LowBalanceAlertListViewEntity

```php
$low_balance_alert_list_view = $client->LowBalanceAlertListView();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | No |  |
| `balanceAlertDisplayName` | `string` | No |  |
| `balanceAlertID` | `string` | No |  |
| `balanceAlertNotification` | `array` | No |  |
| `balanceAlertThreshold` | `float` | No |  |
| `createdAt` | `string` | No |  |
| `customerIdentifier` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->LowBalanceAlertListView()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LowBalanceAlertListViewEntity`

Create a new `LowBalanceAlertListViewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LowBalanceAlertViewEntity

```php
$low_balance_alert_view = $client->LowBalanceAlertView();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | No |  |
| `balanceAlertDisplayName` | `string` | No | A friendly name for this low balance alert (will be displayed in the Tango Portal). |
| `balanceAlertID` | `string` | No |  |
| `balanceAlertNotification` | `array` | No | Send low balance notification emails to the following address(es). |
| `balanceAlertThreshold` | `float` | No | The threshold amount that will trigger the low balance alert. |
| `createdAt` | `string` | No |  |
| `customerIdentifier` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LowBalanceAlertView()->create([
  "account_identifier" => null, // string
  "customer_identifier" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->LowBalanceAlertView()->load(["account_id" => "account_id", "balance_alert_id" => "balance_alert_id", "customer_identifier" => "customer_identifier"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->LowBalanceAlertView()->update([
  "account_id" => "account_id",
  "balance_alert_id" => "balance_alert_id",
  "customer_identifier" => "customer_identifier",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LowBalanceAlertViewEntity`

Create a new `LowBalanceAlertViewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MobileCountryEntity

```php
$mobile_country = $client->MobileCountry();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `countryCode` | `string` | No |  |
| `countryName` | `string` | No |  |
| `isoCode` | `string` | No |  |
| `languageCode` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->MobileCountry()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MobileCountryEntity`

Create a new `MobileCountryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## N14WebhookEntity

```php
$n14_webhook = $client->N14Webhook();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `array` | No | The categories the customer wants to subscribe to. |
| `createdAt` | `string` | No | The date and time the webhook was created. |
| `eventTypes` | `array` | No | The event types the customer wants to subscribe to. |
| `expiresAt` | `string` | No | The date and time the webhook expires. |
| `headers` | `array` | No | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->N14Webhook()->create([
  "test_name" => null, // string
  "webhook_id" => null, // string
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->N14Webhook()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->N14Webhook()->load(["webhook_id" => "webhook_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->N14Webhook()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): N14WebhookEntity`

Create a new `N14WebhookEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## N1CustomerEntity

```php
$n1_customer = $client->N1Customer();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->N1Customer()->load(["customer_identifier" => "customer_identifier"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): N1CustomerEntity`

Create a new `N1CustomerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## N2AccountEntity

```php
$n2_account = $client->N2Account();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): N2AccountEntity`

Create a new `N2AccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## N3FundEntity

```php
$n3_fund = $client->N3Fund();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): N3FundEntity`

Create a new `N3FundEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## N8LineItemEntity

```php
$n8_line_item = $client->N8LineItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `campaign` | `string` | No | optional campaign that may be used to administratively categorize a specific order. |
| `id` | `string` | No |  |
| `orderNotes` | `string` | No | Optional order notes (up to 150 characters) |
| `purchaseOrderNumber` | `string` | No | The Purchase Order Number associated with this order. |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->N8LineItem()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): N8LineItemEntity`

Create a new `N8LineItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## N9DigitalTemplateEntity

```php
$n9_digital_template = $client->N9DigitalTemplate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->N9DigitalTemplate()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): N9DigitalTemplateEntity`

Create a new `N9DigitalTemplateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrderEntity

```php
$order = $client->Order();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes | Specify the account this order will be deducted from |
| `accountNumber` | `string` | Yes |  |
| `amount` | `float` | Yes | Specify the face value of of the reward. |
| `amountCharged` | `array` | Yes |  |
| `asyncOrderEntity` | `array` | No |  |
| `campaign` | `string` | Yes | Optional. |
| `createdAt` | `string` | Yes |  |
| `customFields` | `array` | No | Optional. |
| `customerIdentifier` | `string` | Yes | Specify the customer associated with the order. |
| `deliveryMethod` | `string` | No | Specify delivery method for the order |
| `denomination` | `array` | No |  |
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
| `recipient` | `array` | No | Required if deliveryMethod is EMAIL, PHONE, or ADDRESS. |
| `redemptionInstructions` | `string` | No |  |
| `referenceLineItemID` | `string` | No |  |
| `referenceOrderID` | `string` | Yes |  |
| `reward` | `array` | Yes |  |
| `rewardName` | `string` | Yes |  |
| `sendEmail` | `bool` | No | Deprecated Oct 1, 2025. |
| `sender` | `array` | No | Optional. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Order()->create([
  "accountIdentifier" => null, // string
  "accountNumber" => null, // string
  "amount" => null, // float
  "amountCharged" => null, // array
  "campaign" => null, // string
  "createdAt" => null, // string
  "customerIdentifier" => null, // string
  "emailSubject" => null, // string
  "etid" => null, // string
  "message" => null, // string
  "referenceOrderID" => null, // string
  "reward" => null, // array
  "rewardName" => null, // string
  "status" => null, // string
  "utid" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Order()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Order()->load(["id" => "order_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrderEntity`

Create a new `OrderEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrderViewSummaryEntity

```php
$order_view_summary = $client->OrderViewSummary();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `float` | No | Optional. |
| `deliveryMethod` | `string` | No | Optional. |
| `notes` | `string` | No | Optional order notes (up to 150 characters). |
| `otherReason` | `string` | No | Required when reasonCode is "OTHER", enter the reason why the line item is being reissued. |
| `reasonCode` | `string` | Yes | Required. |
| `recipient` | `array` | No | Optional. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OrderViewSummary()->create([
  "reference_line_item_id" => null, // string
  "reasonCode" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrderViewSummaryEntity`

Create a new `OrderViewSummaryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PrepaidCardInfoEntity

```php
$prepaid_card_info = $client->PrepaidCardInfo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `balance` | `array` | No |  |
| `card` | `array` | No |  |
| `comments` | `array` | No |  |
| `registration` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PrepaidCardInfo()->load(["reference_line_item_id" => "reference_line_item_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PrepaidCardInfoEntity`

Create a new `PrepaidCardInfoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PrepaidCardTransactionEntity

```php
$prepaid_card_transaction = $client->PrepaidCardTransaction();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `journal` | `array` | No |  |
| `page` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PrepaidCardTransaction()->load(["reference_line_item_id" => "reference_line_item_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PrepaidCardTransactionEntity`

Create a new `PrepaidCardTransactionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReissueCardEntity

```php
$reissue_card = $client->ReissueCard();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ReissueCard()->create([
  "id" => null, // string
  "reason" => null, // string
  "updatedBy" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReissueCardEntity`

Create a new `ReissueCardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReplacementReasonEntity

```php
$replacement_reason = $client->ReplacementReason();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `replacementReasons` | `array` | No | List of valid replacement reason codes. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ReplacementReason()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReplacementReasonEntity`

Create a new `ReplacementReasonEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ResendEntity

```php
$resend = $client->Resend();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Resend()->create([
  "line_item_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ResendEntity`

Create a new `ResendEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RewardReasonsMapEntity

```php
$reward_reasons_map = $client->RewardReasonsMap();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `CANCEL` | `array` | No | Map of cancel reasons |
| `CANCEL_AND_REISSUE` | `array` | No | Map of cancel and reissue reasons |
| `FREEZE` | `array` | No | Map of freeze reasons |
| `UNFREEZE` | `array` | No | Map of unfreeze reasons |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RewardReasonsMap()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RewardReasonsMapEntity`

Create a new `RewardReasonsMapEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TransferFundEntity

```php
$transfer_fund = $client->TransferFund();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `float` | Yes | Specify the currency amount of the funds being transferred. |
| `externalRefID` | `string` | No | specify the external reference id to associate with this funding action. |
| `transferDate` | `string` | No |  |
| `transferFrom` | `array` | No | The accountIdentifier for the Account transferring funds from. |
| `transferNotes` | `string` | No | Optional transfer notes (up to 150 characters) |
| `transferTo` | `array` | No | The accountIdentifier for the Account transferring funds to. |
| `transferredAmount` | `float` | No |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TransferFund()->create([
  "amount" => null, // float
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TransferFundEntity`

Create a new `TransferFundEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UpdateAccountEntity

```php
$update_account = $client->UpdateAccount();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `registration` | `array` | Yes |  |
| `status` | `string` | No |  |
| `updatedBy` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->UpdateAccount()->create([
  "id" => null, // string
  "registration" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UpdateAccountEntity`

Create a new `UpdateAccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UpdateWebhookSubscriptionResponseViewEntity

```php
$update_webhook_subscription_response_view = $client->UpdateWebhookSubscriptionResponseView();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `array` | No | The categories the customer is subscribed to. |
| `createdAt` | `string` | No | The date and time the webhook was created. |
| `eventTypes` | `array` | No | The event types the customer is subscribed to. |
| `expiresAt` | `string` | No | The date and time the webhook expires. |
| `headers` | `array` | No | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `string` | No | The HMAC secret key used to sign the webhook payload. |
| `payloadVerificationMethod` | `string` | No | Method to verify webhook payload integrity |
| `signingCertificate` | `string` | No | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `string` | No | The date and time when the webhook was last updated. |
| `url` | `string` | No | The URL of the customer's webhook listener. |
| `webhookId` | `string` | No | The ID of the webhook. |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->UpdateWebhookSubscriptionResponseView()->update([
  "webhook_id" => "webhook_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UpdateWebhookSubscriptionResponseViewEntity`

Create a new `UpdateWebhookSubscriptionResponseViewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhookEntity

```php
$webhook = $client->Webhook();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `array` | No | The categories the customer wants to subscribe to. |
| `createdAt` | `string` | No | The date and time the webhook was created. |
| `eventTypes` | `array` | No | The event types the customer wants to subscribe to. |
| `expiresAt` | `string` | No | The date and time the webhook expires. |
| `headers` | `array` | No | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `string` | No | The HMAC secret key used to sign the webhook payload. |
| `id` | `string` | No |  |
| `payloadVerificationMethod` | `string` | No | Method to verify webhook payload integrity. |
| `signingCertificate` | `string` | No | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `string` | No | The date and time when the webhook was last updated. |
| `url` | `string` | No | The URL of the customer's webhook listener. |
| `webhookId` | `string` | No | The ID of the webhook. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Webhook()->create([
  "id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Webhook()->load(["id" => "webhook_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhookEntity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name(): string`

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

```php
$client = new TangocardSDK([
  "feature" => [
    "debug" => ["active" => true],
    "idempotency" => ["active" => true],
    "metrics" => ["active" => true],
    "paging" => ["active" => true],
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
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

