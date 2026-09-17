# Tangocard Python SDK Reference

Complete API reference for the Tangocard Python SDK.


## TangocardSDK

### Constructor

```python
from tangocard_sdk import TangocardSDK

client = TangocardSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TangocardSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = TangocardSDK.test()
```


### Instance Methods

#### `Account(data=None)`

Create a new `AccountEntity` instance. Pass `None` for no initial data.

#### `AddCommentEscalation(data=None)`

Create a new `AddCommentEscalationEntity` instance. Pass `None` for no initial data.

#### `AllEventType(data=None)`

Create a new `AllEventTypeEntity` instance. Pass `None` for no initial data.

#### `AsyncOrder(data=None)`

Create a new `AsyncOrderEntity` instance. Pass `None` for no initial data.

#### `AsyncOrderDetailView(data=None)`

Create a new `AsyncOrderDetailViewEntity` instance. Pass `None` for no initial data.

#### `AsyncOrderLineItemsView(data=None)`

Create a new `AsyncOrderLineItemsViewEntity` instance. Pass `None` for no initial data.

#### `AsyncReasonCodesView(data=None)`

Create a new `AsyncReasonCodesViewEntity` instance. Pass `None` for no initial data.

#### `AsyncUpdateLineItemView(data=None)`

Create a new `AsyncUpdateLineItemViewEntity` instance. Pass `None` for no initial data.

#### `BalanceAlertView(data=None)`

Create a new `BalanceAlertViewEntity` instance. Pass `None` for no initial data.

#### `BrandCategoriesView(data=None)`

Create a new `BrandCategoriesViewEntity` instance. Pass `None` for no initial data.

#### `Catalog(data=None)`

Create a new `CatalogEntity` instance. Pass `None` for no initial data.

#### `ChoiceProduct(data=None)`

Create a new `ChoiceProductEntity` instance. Pass `None` for no initial data.

#### `CountryViewSummary(data=None)`

Create a new `CountryViewSummaryEntity` instance. Pass `None` for no initial data.

#### `CreateAccountCriterion(data=None)`

Create a new `CreateAccountCriterionEntity` instance. Pass `None` for no initial data.

#### `CreateCustomerCriterion(data=None)`

Create a new `CreateCustomerCriterionEntity` instance. Pass `None` for no initial data.

#### `CredentialTypeView(data=None)`

Create a new `CredentialTypeViewEntity` instance. Pass `None` for no initial data.

#### `CreditCard(data=None)`

Create a new `CreditCardEntity` instance. Pass `None` for no initial data.

#### `CreditCardDeposit(data=None)`

Create a new `CreditCardDepositEntity` instance. Pass `None` for no initial data.

#### `CreditCardUnregister(data=None)`

Create a new `CreditCardUnregisterEntity` instance. Pass `None` for no initial data.

#### `Customer(data=None)`

Create a new `CustomerEntity` instance. Pass `None` for no initial data.

#### `EmailTemplateListView(data=None)`

Create a new `EmailTemplateListViewEntity` instance. Pass `None` for no initial data.

#### `EmailTemplateViewVerbose(data=None)`

Create a new `EmailTemplateViewVerboseEntity` instance. Pass `None` for no initial data.

#### `EmbeddableResponseDto(data=None)`

Create a new `EmbeddableResponseDtoEntity` instance. Pass `None` for no initial data.

#### `ExchangeRatesWithDisclaimer(data=None)`

Create a new `ExchangeRatesWithDisclaimerEntity` instance. Pass `None` for no initial data.

#### `LineItem(data=None)`

Create a new `LineItemEntity` instance. Pass `None` for no initial data.

#### `LowBalanceAlertListView(data=None)`

Create a new `LowBalanceAlertListViewEntity` instance. Pass `None` for no initial data.

#### `LowBalanceAlertView(data=None)`

Create a new `LowBalanceAlertViewEntity` instance. Pass `None` for no initial data.

#### `MobileCountry(data=None)`

Create a new `MobileCountryEntity` instance. Pass `None` for no initial data.

#### `N14Webhook(data=None)`

Create a new `N14WebhookEntity` instance. Pass `None` for no initial data.

#### `N1Customer(data=None)`

Create a new `N1CustomerEntity` instance. Pass `None` for no initial data.

#### `N2Account(data=None)`

Create a new `N2AccountEntity` instance. Pass `None` for no initial data.

#### `N3Fund(data=None)`

Create a new `N3FundEntity` instance. Pass `None` for no initial data.

#### `N8LineItem(data=None)`

Create a new `N8LineItemEntity` instance. Pass `None` for no initial data.

#### `N9DigitalTemplate(data=None)`

Create a new `N9DigitalTemplateEntity` instance. Pass `None` for no initial data.

#### `Order(data=None)`

Create a new `OrderEntity` instance. Pass `None` for no initial data.

#### `OrderViewSummary(data=None)`

Create a new `OrderViewSummaryEntity` instance. Pass `None` for no initial data.

#### `PrepaidCardInfo(data=None)`

Create a new `PrepaidCardInfoEntity` instance. Pass `None` for no initial data.

#### `PrepaidCardTransaction(data=None)`

Create a new `PrepaidCardTransactionEntity` instance. Pass `None` for no initial data.

#### `ReissueCard(data=None)`

Create a new `ReissueCardEntity` instance. Pass `None` for no initial data.

#### `ReplacementReason(data=None)`

Create a new `ReplacementReasonEntity` instance. Pass `None` for no initial data.

#### `Resend(data=None)`

Create a new `ResendEntity` instance. Pass `None` for no initial data.

#### `RewardReasonsMap(data=None)`

Create a new `RewardReasonsMapEntity` instance. Pass `None` for no initial data.

#### `TransferFund(data=None)`

Create a new `TransferFundEntity` instance. Pass `None` for no initial data.

#### `UpdateAccount(data=None)`

Create a new `UpdateAccountEntity` instance. Pass `None` for no initial data.

#### `UpdateWebhookSubscriptionResponseView(data=None)`

Create a new `UpdateWebhookSubscriptionResponseViewEntity` instance. Pass `None` for no initial data.

#### `Webhook(data=None)`

Create a new `WebhookEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AccountEntity

```python
account = client.Account()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `str` | Yes |  |
| `accountNumber` | `str` | Yes |  |
| `contactEmail` | `str` | No | optional, an email address for a designated representative for this account. |
| `createdAt` | `str` | Yes |  |
| `currencyCode` | `str` | Yes |  |
| `currentBalance` | `float` | Yes |  |
| `displayName` | `str` | Yes | optional, a friendly name for this account. |
| `fundingNotification` | `list` | No | optional, send funding notification emails to the following address(es). |
| `id` | `str` | No |  |
| `status` | `str` | Yes |  |

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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Account().load({"id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Account().update({
    "id": "account_id",
    "customer_identifier": "customer_identifier",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AddCommentEscalationEntity

```python
add_comment_escalation = client.AddCommentEscalation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `int` | No | Assignee ID. |
| `commentText` | `str` | Yes | Free-text comment to add to the prepaid card. |
| `id` | `str` | No |  |
| `inquiryCategoryCode` | `int` | No | Inquiry category code. |
| `inquiryIdNumber` | `int` | No | Inquiry ID number. |
| `inquirySource` | `str` | No | Origination source identifier (e.g. |
| `inquiryTypeCode` | `int` | No | Inquiry type code. |
| `issueDescription` | `str` | Yes | Short description of the issue. |
| `status` | `str` | No | Status of the inquiry (e.g. |
| `userId` | `str` | No | Agent or CSR user ID. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AddCommentEscalation().create({
    "id": "example_id",  # str
    "commentText": "example_commentText",  # str
    "issueDescription": "example_issueDescription",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AddCommentEscalationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AllEventTypeEntity

```python
all_event_type = client.AllEventType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `str` | No | The category of events can be subscribed to. |
| `eventTypes` | `list` | No | The event types that can be subscribed to. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AllEventType().list()
for all_event_type in results:
    print(all_event_type)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AllEventTypeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AsyncOrderEntity

```python
async_order = client.AsyncOrder()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `str` | Yes | specify the account this order will be deducted from |
| `accountNumber` | `str` | Yes |  |
| `amountCharged` | `dict` | No | Initial value and the total charged amount on the account |
| `campaign` | `str` | No | Optional. |
| `createdAt` | `str` | No |  |
| `customerIdentifier` | `str` | Yes | specify the customer associated with the order. |
| `duplicateLineItemRefIds` | `dict` | No | If any duplicate duplicateLineItemRefIds exist in the request |
| `externalRefID` | `str` | No | Required. |
| `failedLineItems` | `list` | No | Failed line items list (business validations) |
| `fulfillBy` | `str` | No |  |
| `lineItems` | `list` | Yes | Line Items of the bulk order a required field |
| `notes` | `str` | No | Optional order notes. |
| `orderStatus` | `str` | No |  |
| `purchaseOrderNumber` | `str` | No | The Purchase Order Number associated with this order. |
| `referenceOrderID` | `str` | Yes |  |
| `sender` | `dict` | No | Optional. |
| `status` | `str` | No | This status reflects about cart status or validation status based on the processing |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AsyncOrder().create({
    "accountIdentifier": "example_accountIdentifier",  # str
    "accountNumber": "example_accountNumber",  # str
    "customerIdentifier": "example_customerIdentifier",  # str
    "lineItems": [],  # list
    "referenceOrderID": "example_referenceOrderID",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AsyncOrder().list()
for async_order in results:
    print(async_order)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AsyncOrderEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AsyncOrderDetailViewEntity

```python
async_order_detail_view = client.AsyncOrderDetailView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `str` | No | Account identifier |
| `amountCharged` | `dict` | No | Initial value and the total charged amount on the account |
| `campaign` | `str` | No | Campaign name |
| `completedAt` | `str` | No | Order completion timestamp |
| `createdAt` | `str` | No | Order creation timestamp |
| `customerIdentifier` | `str` | No | Customer identifier |
| `externalRefID` | `str` | No | External reference ID provided by client |
| `id` | `str` | No |  |
| `lineItems` | `list` | No | list of line items |
| `notes` | `str` | No | Order notes |
| `orderErrors` | `list` | No | Order level errors |
| `orderStatus` | `str` | No | Current status of the order |
| `pagination` | `dict` | No | Pagination information |
| `purchaseOrderNumber` | `str` | No | Purchase order number |
| `referenceOrderID` | `str` | No | Internal reference order ID |
| `sender` | `dict` | No | Sender information |
| `totalLineItems` | `int` | No | Total number of line items |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AsyncOrderDetailView().load({"account_identifier": "account_identifier", "customer_identifier": "customer_identifier", "external_ref_id": "external_ref_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AsyncOrderDetailView().update({
    "account_identifier": "account_identifier",
    "customer_identifier": "customer_identifier",
    "external_ref_id": "external_ref_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AsyncOrderDetailViewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AsyncOrderLineItemsViewEntity

```python
async_order_line_items_view = client.AsyncOrderLineItemsView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `str` | Yes |  |
| `amountCharged` | `dict` | No | Initial value and the total charged amount on the account |
| `campaign` | `str` | No |  |
| `customerIdentifier` | `str` | Yes |  |
| `externalRefID` | `str` | No |  |
| `lineItems` | `list` | No | The List of Line Items for the Async Order. |
| `orderErrors` | `list` | No | The List of Errors for the Async Order. |
| `orderNotes` | `str` | No |  |
| `orderStatus` | `str` | Yes |  |
| `pagination` | `dict` | No | The cursor for pagination of the async order line items. |
| `purchaseOrderNumber` | `str` | No |  |
| `referenceOrderID` | `str` | Yes |  |
| `sender` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AsyncOrderLineItemsView().list({"account_id": "example", "customer_id": "example", "external_ref_id": "example"})
for async_order_line_items_view in results:
    print(async_order_line_items_view)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AsyncOrderLineItemsViewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AsyncReasonCodesViewEntity

```python
async_reason_codes_view = client.AsyncReasonCodesView()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AsyncReasonCodesView().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AsyncReasonCodesViewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AsyncUpdateLineItemViewEntity

```python
async_update_line_item_view = client.AsyncUpdateLineItemView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deliveryDate` | `str` | No | Optional. |
| `lineItemNote` | `str` | No | Optional line item notes (up to 150 characters) |
| `senderInfo` | `dict` | No | Optional. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AsyncUpdateLineItemView().update({
    "reference_line_item_id": "reference_line_item_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AsyncUpdateLineItemViewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BalanceAlertViewEntity

```python
balance_alert_view = client.BalanceAlertView()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.BalanceAlertView().remove({"account_id": "account_id", "balance_alert_id": "balance_alert_id", "customer_identifier": "customer_identifier"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BalanceAlertViewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BrandCategoriesViewEntity

```python
brand_categories_view = client.BrandCategoriesView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No |  |
| `identifier` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BrandCategoriesView().list()
for brand_categories_view in results:
    print(brand_categories_view)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BrandCategoriesViewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CatalogEntity

```python
catalog = client.Catalog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `barcodeType` | `str` | No |  |
| `brandKey` | `str` | Yes |  |
| `brandName` | `str` | Yes |  |
| `brandRequirements` | `dict` | Yes |  |
| `categories` | `list` | Yes |  |
| `createdDate` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `disclaimer` | `str` | Yes |  |
| `imageUrls` | `dict` | Yes |  |
| `items` | `list` | Yes |  |
| `lastUpdateDate` | `str` | Yes |  |
| `shortDescription` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `terms` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Catalog().list()
for catalog in results:
    print(catalog)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CatalogEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ChoiceProductEntity

```python
choice_product = client.ChoiceProduct()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `countries` | `list` | No |  |
| `currencyCode` | `str` | No |  |
| `id` | `str` | No |  |
| `rewardName` | `str` | No |  |
| `utid` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ChoiceProduct().list()
for choice_product in results:
    print(choice_product)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ChoiceProduct().load({"id": "choice_product_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChoiceProductEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CountryViewSummaryEntity

```python
country_view_summary = client.CountryViewSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `countryName` | `str` | Yes |  |
| `preferredCurrency` | `str` | Yes |  |
| `threeLetterCode` | `str` | Yes |  |
| `twoLetterCode` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CountryViewSummary().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CountryViewSummaryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreateAccountCriterionEntity

```python
create_account_criterion = client.CreateAccountCriterion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `str` | Yes | A unique identifier for this account. |
| `contactEmail` | `str` | Yes | An email address for a designated representative for this account. |
| `currencyCode` | `str` | No | The currency this account will accept for deposits/withdraws. |
| `displayName` | `str` | Yes | A friendly name for this account. |
| `fundingNotification` | `list` | No | optional, send funding notification emails to the following address(es) |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CreateAccountCriterion().create({
    "customer_identifier": "example_customer_identifier",  # str
    "accountIdentifier": "example_accountIdentifier",  # str
    "contactEmail": "example_contactEmail",  # str
    "displayName": "example_displayName",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateAccountCriterionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreateCustomerCriterionEntity

```python
create_customer_criterion = client.CreateCustomerCriterion()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateCustomerCriterionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CredentialTypeViewEntity

```python
credential_type_view = client.CredentialTypeView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credentialType` | `str` | Yes |  |
| `description` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CredentialTypeView().list()
for credential_type_view in results:
    print(credential_type_view)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CredentialTypeViewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreditCardEntity

```python
credit_card = client.CreditCard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `str` | Yes | specify the account this credit card is associated with |
| `accountNumber` | `str` | Yes |  |
| `activationDate` | `str` | Yes |  |
| `billingAddress` | `dict` | Yes | required Enter the billing address information for the credit card that is being registered |
| `contactInformation` | `list` | Yes | Optional. |
| `createdDate` | `str` | Yes |  |
| `creditCard` | `dict` | Yes | required Enter the credit card details that is being registered |
| `customerIdentifier` | `str` | Yes | specify the customer associated with the credit card. |
| `expirationDate` | `str` | Yes |  |
| `id` | `str` | No |  |
| `ipAddress` | `str` | Yes | specify the The IP address of the person adding the credit card |
| `label` | `str` | Yes | specify a label for the credit card |
| `lastFourDigits` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `token` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CreditCard().create({
    "accountIdentifier": "example_accountIdentifier",  # str
    "accountNumber": "example_accountNumber",  # str
    "activationDate": "example_activationDate",  # str
    "billingAddress": {},  # dict
    "contactInformation": [],  # list
    "createdDate": "example_createdDate",  # str
    "creditCard": {},  # dict
    "customerIdentifier": "example_customerIdentifier",  # str
    "expirationDate": "example_expirationDate",  # str
    "ipAddress": "example_ipAddress",  # str
    "label": "example_label",  # str
    "lastFourDigits": "example_lastFourDigits",  # str
    "status": "example_status",  # str
    "token": "example_token",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CreditCard().load({"id": "credit_card_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreditCardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreditCardDepositEntity

```python
credit_card_deposit = client.CreditCardDeposit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `str` | Yes | specify the account this credit card is associated with |
| `accountNumber` | `str` | Yes |  |
| `amount` | `float` | Yes | specify the amount to fund in USD |
| `amountCharged` | `float` | Yes |  |
| `createdDate` | `str` | Yes |  |
| `creditCardToken` | `str` | Yes | specify the credit card token to fund with |
| `customerIdentifier` | `str` | Yes | specify the customer associated with the credit card. |
| `externalRefID` | `str` | No | specify the external reference id to associate with this funding action. |
| `feePercent` | `float` | Yes |  |
| `id` | `str` | No |  |
| `referenceDepositID` | `str` | Yes |  |
| `status` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CreditCardDeposit().create({
    "accountIdentifier": "example_accountIdentifier",  # str
    "accountNumber": "example_accountNumber",  # str
    "amount": 1,  # float
    "amountCharged": 1,  # float
    "createdDate": "example_createdDate",  # str
    "creditCardToken": "example_creditCardToken",  # str
    "customerIdentifier": "example_customerIdentifier",  # str
    "feePercent": 1,  # float
    "referenceDepositID": "example_referenceDepositID",  # str
    "status": "example_status",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CreditCardDeposit().load({"id": "credit_card_deposit_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreditCardDepositEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreditCardUnregisterEntity

```python
credit_card_unregister = client.CreditCardUnregister()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `str` | Yes | Specify the account this credit card is associated with. |
| `createdDate` | `str` | Yes |  |
| `creditCardToken` | `str` | Yes | Specify the credit card token to unregister. |
| `customerIdentifier` | `str` | Yes | Specify the customer associated with the credit card. |
| `message` | `str` | Yes |  |
| `token` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CreditCardUnregister().create({
    "accountIdentifier": "example_accountIdentifier",  # str
    "createdDate": "example_createdDate",  # str
    "creditCardToken": "example_creditCardToken",  # str
    "customerIdentifier": "example_customerIdentifier",  # str
    "message": "example_message",  # str
    "token": "example_token",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreditCardUnregisterEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomerEntity

```python
customer = client.Customer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accounts` | `list` | Yes |  |
| `createdAt` | `str` | Yes |  |
| `customerIdentifier` | `str` | Yes | A unique identifier for this customer. |
| `displayName` | `str` | Yes | A friendly name for this customer. |
| `id` | `str` | No |  |
| `status` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Customer().create({
    "accounts": [],  # list
    "createdAt": "example_createdAt",  # str
    "customerIdentifier": "example_customerIdentifier",  # str
    "displayName": "example_displayName",  # str
    "status": "example_status",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Customer().list()
for customer in results:
    print(customer)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Customer().load({"id": "customer_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmailTemplateListViewEntity

```python
email_template_list_view = client.EmailTemplateListView()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailTemplateListViewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmailTemplateViewVerboseEntity

```python
email_template_view_verbose = client.EmailTemplateViewVerbose()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accentColor` | `str` | Yes | A Hex color value, six hexadecimal digits preceded by a pound sign, used as an accent in the email. |
| `accessControl` | `list` | No | (Optional) Which Customers and/or Accounts should have access to this template. |
| `accessControls` | `list` | No |  |
| `closing` | `str` | Yes | After the reward credential, a space to close the email message to the recipient. |
| `customerServiceMessage` | `str` | No | If left null, Tango Card's Customer Support contact information will be included. |
| `defaults` | `list` | No | If you want this template to be used at order time for the given Platform, Customer or Account when the Email Template Identifier (etid) is not provided with the order. |
| `etid` | `str` | Yes |  |
| `fromName` | `str` | Yes | The name that will appear in the From line of the email and the {from_name} in the text message. |
| `headerImage` | `str` | Yes | A Base64 encoded string of an image that will show as the header of the email. |
| `headerImageAltText` | `str` | Yes | The Alt Text for the Header Image in the email. |
| `messageBody` | `str` | Yes | The message body for the email. |
| `name` | `str` | Yes | A unique name to give the template. |
| `smsMessageBody` | `str` | No | The message body for the SMS. |
| `subject` | `str` | Yes | The Subject of the email. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.EmailTemplateViewVerbose().create({
    "accentColor": "example_accentColor",  # str
    "closing": "example_closing",  # str
    "etid": "example_etid",  # str
    "fromName": "example_fromName",  # str
    "headerImage": "example_headerImage",  # str
    "headerImageAltText": "example_headerImageAltText",  # str
    "messageBody": "example_messageBody",  # str
    "name": "example_name",  # str
    "subject": "example_subject",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EmailTemplateViewVerbose().list()
for email_template_view_verbose in results:
    print(email_template_view_verbose)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.EmailTemplateViewVerbose().load({"etid": "etid"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.EmailTemplateViewVerbose().update({
    "etid": "etid",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailTemplateViewVerboseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmbeddableResponseDtoEntity

```python
embeddable_response_dto = client.EmbeddableResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `url` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.EmbeddableResponseDto().load({"reference_line_item_id": "reference_line_item_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmbeddableResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ExchangeRatesWithDisclaimerEntity

```python
exchange_rates_with_disclaimer = client.ExchangeRatesWithDisclaimer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `baseCurrency` | `str` | Yes |  |
| `baseFx` | `str` | Yes |  |
| `lastModifiedDate` | `str` | Yes |  |
| `rewardCurrency` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ExchangeRatesWithDisclaimer().list()
for exchange_rates_with_disclaimer in results:
    print(exchange_rates_with_disclaimer)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExchangeRatesWithDisclaimerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LineItemEntity

```python
line_item = client.LineItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `str` | Yes |  |
| `accountNumber` | `str` | Yes |  |
| `amountCharged` | `dict` | No |  |
| `amountIssued` | `dict` | Yes |  |
| `campaign` | `str` | No |  |
| `canCancel` | `bool` | No |  |
| `canFreeze` | `bool` | No |  |
| `customerIdentifier` | `str` | Yes |  |
| `dateIssued` | `str` | Yes |  |
| `deliveryMethod` | `str` | No |  |
| `deliveryStatus` | `str` | No |  |
| `emailStatus` | `str` | Yes |  |
| `etid` | `str` | Yes |  |
| `expirationDate` | `str` | Yes |  |
| `externalReferenceLineItemID` | `str` | No |  |
| `id` | `str` | No |  |
| `lineItemActionHistory` | `list` | No |  |
| `lineItemActionReason` | `str` | No |  |
| `lineItemErrors` | `list` | No | Errors related to the line item |
| `lineNumber` | `int` | Yes |  |
| `orderNotes` | `str` | No |  |
| `orderSource` | `str` | Yes |  |
| `orderStatus` | `str` | Yes |  |
| `ptid` | `str` | No |  |
| `purchaseOrderNumber` | `str` | No |  |
| `quantity` | `int` | No | quantity of line items |
| `recipient` | `dict` | No |  |
| `redemptionHistory` | `list` | No |  |
| `referenceLineItemID` | `str` | Yes |  |
| `referenceOrderID` | `str` | Yes |  |
| `reissuedFromReferenceLineItemId` | `str` | No | Reissued from reference line item ID |
| `reissuedToReferenceLineItemId` | `str` | No | Reissued to reference line item ID |
| `remainingBalance` | `float` | No |  |
| `resendHistory` | `list` | No |  |
| `reward` | `dict` | Yes |  |
| `rewardName` | `str` | Yes |  |
| `rewardStatus` | `str` | No |  |
| `rewardViewHistory` | `list` | No |  |
| `sender` | `dict` | No |  |
| `status` | `str` | Yes |  |
| `utid` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LineItem().create({
    "reference_line_item_id": "example_reference_line_item_id",  # str
    "accountIdentifier": "example_accountIdentifier",  # str
    "accountNumber": "example_accountNumber",  # str
    "amountIssued": {},  # dict
    "customerIdentifier": "example_customerIdentifier",  # str
    "dateIssued": "example_dateIssued",  # str
    "emailStatus": "example_emailStatus",  # str
    "etid": "example_etid",  # str
    "expirationDate": "example_expirationDate",  # str
    "lineNumber": 1,  # int
    "orderSource": "example_orderSource",  # str
    "orderStatus": "example_orderStatus",  # str
    "referenceLineItemID": "example_referenceLineItemID",  # str
    "referenceOrderID": "example_referenceOrderID",  # str
    "reward": {},  # dict
    "rewardName": "example_rewardName",  # str
    "status": "example_status",  # str
    "utid": "example_utid",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.LineItem().list()
for line_item in results:
    print(line_item)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.LineItem().load({"id": "line_item_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LineItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LowBalanceAlertListViewEntity

```python
low_balance_alert_list_view = client.LowBalanceAlertListView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `str` | No |  |
| `balanceAlertDisplayName` | `str` | No |  |
| `balanceAlertID` | `str` | No |  |
| `balanceAlertNotification` | `list` | No |  |
| `balanceAlertThreshold` | `float` | No |  |
| `createdAt` | `str` | No |  |
| `customerIdentifier` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.LowBalanceAlertListView().list({"account_identifier": "example", "customer_identifier": "example"})
for low_balance_alert_list_view in results:
    print(low_balance_alert_list_view)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LowBalanceAlertListViewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LowBalanceAlertViewEntity

```python
low_balance_alert_view = client.LowBalanceAlertView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `str` | No |  |
| `balanceAlertDisplayName` | `str` | No | A friendly name for this low balance alert (will be displayed in the Tango Portal). |
| `balanceAlertID` | `str` | No |  |
| `balanceAlertNotification` | `list` | No | Send low balance notification emails to the following address(es). |
| `balanceAlertThreshold` | `float` | No | The threshold amount that will trigger the low balance alert. |
| `createdAt` | `str` | No |  |
| `customerIdentifier` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LowBalanceAlertView().create({
    "account_identifier": "example_account_identifier",  # str
    "customer_identifier": "example_customer_identifier",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.LowBalanceAlertView().load({"account_id": "account_id", "balance_alert_id": "balance_alert_id", "customer_identifier": "customer_identifier"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.LowBalanceAlertView().update({
    "account_id": "account_id",
    "balance_alert_id": "balance_alert_id",
    "customer_identifier": "customer_identifier",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LowBalanceAlertViewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MobileCountryEntity

```python
mobile_country = client.MobileCountry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `countryCode` | `str` | No |  |
| `countryName` | `str` | No |  |
| `isoCode` | `str` | No |  |
| `languageCode` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.MobileCountry().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MobileCountryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## N14WebhookEntity

```python
n14_webhook = client.N14Webhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `list` | No | The categories the customer wants to subscribe to. |
| `createdAt` | `str` | No | The date and time the webhook was created. |
| `eventTypes` | `list` | No | The event types the customer wants to subscribe to. |
| `expiresAt` | `str` | No | The date and time the webhook expires. |
| `headers` | `list` | No | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `str` | No | The HMAC secret key used to sign the webhook payload. |
| `id` | `str` | No |  |
| `payloadVerificationMethod` | `str` | No | Method to verify webhook payload authenticity |
| `signingCertificate` | `str` | No | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `str` | No | The date and time when the webhook was last updated. |
| `url` | `str` | Yes | The URL of the customer's webhook listener. |
| `webhookId` | `str` | No | The ID of the webhook. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.N14Webhook().create({
    "test_name": "example_test_name",  # str
    "webhook_id": "example_webhook_id",  # str
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.N14Webhook().list()
for n14_webhook in results:
    print(n14_webhook)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.N14Webhook().load({"webhook_id": "webhook_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.N14Webhook().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `N14WebhookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## N1CustomerEntity

```python
n1_customer = client.N1Customer()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.N1Customer().load({"customer_identifier": "customer_identifier"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `N1CustomerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## N2AccountEntity

```python
n2_account = client.N2Account()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `N2AccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## N3FundEntity

```python
n3_fund = client.N3Fund()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `N3FundEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## N8LineItemEntity

```python
n8_line_item = client.N8LineItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `campaign` | `str` | No | optional campaign that may be used to administratively categorize a specific order. |
| `id` | `str` | No |  |
| `orderNotes` | `str` | No | Optional order notes (up to 150 characters) |
| `purchaseOrderNumber` | `str` | No | The Purchase Order Number associated with this order. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.N8LineItem().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `N8LineItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## N9DigitalTemplateEntity

```python
n9_digital_template = client.N9DigitalTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.N9DigitalTemplate().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `N9DigitalTemplateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrderEntity

```python
order = client.Order()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `str` | Yes | Specify the account this order will be deducted from |
| `accountNumber` | `str` | Yes |  |
| `amount` | `float` | Yes | Specify the face value of of the reward. |
| `amountCharged` | `dict` | Yes |  |
| `asyncOrderEntity` | `dict` | No |  |
| `campaign` | `str` | Yes | Optional. |
| `createdAt` | `str` | Yes |  |
| `customFields` | `dict` | No | Optional. |
| `customerIdentifier` | `str` | Yes | Specify the customer associated with the order. |
| `deliveryMethod` | `str` | No | Specify delivery method for the order |
| `denomination` | `dict` | No |  |
| `emailSubject` | `str` | Yes | Optional. |
| `etid` | `str` | Yes | Optional. |
| `expirationDate` | `str` | No | Optional for Promo Links, the exact calendar date the Promo Link will expire. |
| `externalRefID` | `str` | No | Optional. |
| `id` | `str` | No |  |
| `lineItemStatus` | `str` | No |  |
| `message` | `str` | Yes | Optional gift message |
| `notes` | `str` | No | Optional order notes. |
| `orderClientSource` | `str` | No |  |
| `orderExternalRefIdDupe` | `bool` | No |  |
| `orderStatus` | `str` | No |  |
| `ptid` | `str` | No | Only required for Printed Reward Links, the unique identifier for the Printed Reward Link Template provided in the Tango Portal on the Printed Template page. |
| `purchaseOrderNumber` | `str` | No | The Purchase Order Number associated with this order. |
| `recipient` | `dict` | No | Required if deliveryMethod is EMAIL, PHONE, or ADDRESS. |
| `redemptionInstructions` | `str` | No |  |
| `referenceLineItemID` | `str` | No |  |
| `referenceOrderID` | `str` | Yes |  |
| `reward` | `dict` | Yes |  |
| `rewardName` | `str` | Yes |  |
| `sendEmail` | `bool` | No | Deprecated Oct 1, 2025. |
| `sender` | `dict` | No | Optional. |
| `status` | `str` | Yes |  |
| `utid` | `str` | Yes | The unique identifier for the reward you are sending as provided in the Get Catalog call |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Order().create({
    "accountIdentifier": "example_accountIdentifier",  # str
    "accountNumber": "example_accountNumber",  # str
    "amount": 1,  # float
    "amountCharged": {},  # dict
    "campaign": "example_campaign",  # str
    "createdAt": "example_createdAt",  # str
    "customerIdentifier": "example_customerIdentifier",  # str
    "emailSubject": "example_emailSubject",  # str
    "etid": "example_etid",  # str
    "message": "example_message",  # str
    "referenceOrderID": "example_referenceOrderID",  # str
    "reward": {},  # dict
    "rewardName": "example_rewardName",  # str
    "status": "example_status",  # str
    "utid": "example_utid",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Order().list()
for order in results:
    print(order)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Order().load({"id": "order_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrderEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrderViewSummaryEntity

```python
order_view_summary = client.OrderViewSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `float` | No | Optional. |
| `deliveryMethod` | `str` | No | Optional. |
| `notes` | `str` | No | Optional order notes (up to 150 characters). |
| `otherReason` | `str` | No | Required when reasonCode is "OTHER", enter the reason why the line item is being reissued. |
| `reasonCode` | `str` | Yes | Required. |
| `recipient` | `dict` | No | Optional. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OrderViewSummary().create({
    "reference_line_item_id": "example_reference_line_item_id",  # str
    "reasonCode": "example_reasonCode",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrderViewSummaryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PrepaidCardInfoEntity

```python
prepaid_card_info = client.PrepaidCardInfo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `balance` | `dict` | No |  |
| `card` | `dict` | No |  |
| `comments` | `list` | No |  |
| `registration` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PrepaidCardInfo().load({"reference_line_item_id": "reference_line_item_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PrepaidCardInfoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PrepaidCardTransactionEntity

```python
prepaid_card_transaction = client.PrepaidCardTransaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `journal` | `list` | No |  |
| `page` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PrepaidCardTransaction().load({"reference_line_item_id": "reference_line_item_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PrepaidCardTransactionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReissueCardEntity

```python
reissue_card = client.ReissueCard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commentText` | `str` | No | Optional comment for the card replacement. |
| `id` | `str` | No |  |
| `reason` | `str` | Yes | Reason for the card replacement. |
| `status` | `str` | No | Status of the reissue request. |
| `updatedBy` | `str` | Yes | Identifier of the agent initiating the request. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ReissueCard().create({
    "id": "example_id",  # str
    "reason": "example_reason",  # str
    "updatedBy": "example_updatedBy",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReissueCardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReplacementReasonEntity

```python
replacement_reason = client.ReplacementReason()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `replacementReasons` | `list` | No | List of valid replacement reason codes. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ReplacementReason().list()
for replacement_reason in results:
    print(replacement_reason)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReplacementReasonEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ResendEntity

```python
resend = client.Resend()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `newDeliveryMethod` | `str` | No | The delivery method used to re-deliver the reward. |
| `newEmail` | `str` | No | A new email address to re-deliver this order to. |
| `newEtid` | `str` | No | A new etid used to re-deliver an order. |
| `newMobile` | `str` | No | A new mobile number to use for resending an order. |
| `newMobileNumber` | `str` | No | A new phone number to re-deliver this order to. |
| `otherReason` | `str` | No | Required when lineItemResendReasonCode is "OTHER", enter the reason why the line item is being RESENT |
| `reasonCode` | `str` | No | Enter the reason why this line item is being RESENT (respectively) |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Resend().create({
    "line_item_id": "example_line_item_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResendEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RewardReasonsMapEntity

```python
reward_reasons_map = client.RewardReasonsMap()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `CANCEL` | `dict` | No | Map of cancel reasons |
| `CANCEL_AND_REISSUE` | `dict` | No | Map of cancel and reissue reasons |
| `FREEZE` | `dict` | No | Map of freeze reasons |
| `UNFREEZE` | `dict` | No | Map of unfreeze reasons |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RewardReasonsMap().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RewardReasonsMapEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TransferFundEntity

```python
transfer_fund = client.TransferFund()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `float` | Yes | Specify the currency amount of the funds being transferred. |
| `externalRefID` | `str` | No | specify the external reference id to associate with this funding action. |
| `transferDate` | `str` | No |  |
| `transferFrom` | `dict` | No | The accountIdentifier for the Account transferring funds from. |
| `transferNotes` | `str` | No | Optional transfer notes (up to 150 characters) |
| `transferTo` | `dict` | No | The accountIdentifier for the Account transferring funds to. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TransferFund().create({
    "amount": 1,  # float
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TransferFundEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpdateAccountEntity

```python
update_account = client.UpdateAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `registration` | `dict` | Yes |  |
| `status` | `str` | No |  |
| `updatedBy` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.UpdateAccount().create({
    "id": "example_id",  # str
    "registration": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateAccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpdateWebhookSubscriptionResponseViewEntity

```python
update_webhook_subscription_response_view = client.UpdateWebhookSubscriptionResponseView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `list` | No | The categories the customer is subscribed to. |
| `createdAt` | `str` | No | The date and time the webhook was created. |
| `eventTypes` | `list` | No | The event types the customer is subscribed to. |
| `expiresAt` | `str` | No | The date and time the webhook expires. |
| `headers` | `list` | No | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `str` | No | The HMAC secret key used to sign the webhook payload. |
| `payloadVerificationMethod` | `str` | No | Method to verify webhook payload integrity |
| `signingCertificate` | `str` | No | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `str` | No | The date and time when the webhook was last updated. |
| `url` | `str` | No | The URL of the customer's webhook listener. |
| `webhookId` | `str` | No | The ID of the webhook. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UpdateWebhookSubscriptionResponseView().update({
    "webhook_id": "webhook_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateWebhookSubscriptionResponseViewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhookEntity

```python
webhook = client.Webhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `list` | No | The categories the customer wants to subscribe to. |
| `createdAt` | `str` | No | The date and time the webhook was created. |
| `eventTypes` | `list` | No | The event types the customer wants to subscribe to. |
| `expiresAt` | `str` | No | The date and time the webhook expires. |
| `headers` | `list` | No | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `str` | No | The HMAC secret key used to sign the webhook payload. |
| `id` | `str` | No |  |
| `payloadVerificationMethod` | `str` | No | Method to verify webhook payload integrity. |
| `signingCertificate` | `str` | No | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `str` | No | The date and time when the webhook was last updated. |
| `url` | `str` | No | The URL of the customer's webhook listener. |
| `webhookId` | `str` | No | The ID of the webhook. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Webhook().create({
    "id": "example_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Webhook().load({"id": "webhook_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEntity` instance with the same options.

#### `get_name() -> str`

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

```python
client = TangocardSDK({
    "feature": {
        "debug": {"active": True},
        "idempotency": {"active": True},
        "metrics": {"active": True},
        "paging": {"active": True},
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
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

