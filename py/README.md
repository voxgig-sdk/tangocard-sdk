# Tangocard Python SDK



The Python SDK for the Tangocard API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Account()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/tangocard-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from tangocard_sdk import TangocardSDK

client = TangocardSDK({
    "apikey": os.environ.get("TANGOCARD_APIKEY"),
})
```

### 3. Load an asyncorderdetailview

AsyncOrderDetailView is nested under account_identifier, so provide the `account_identifier`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    asyncorderdetailview = client.AsyncOrderDetailView().load({"account_identifier": "example_account_identifier", "customer_identifier": "example_customer_identifier", "external_ref_id": "example_external_ref_id"})
    print(asyncorderdetailview)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Update
client.Account().update({"id": "example_id", "customer_identifier": "example_customer_identifier", "accountIdentifier": "example_accountIdentifier"})

```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    rewardreasonsmap = client.RewardReasonsMap().load()
    print(rewardreasonsmap)
except Exception as err:
    print(f"load failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = TangocardSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
rewardreasonsmap = client.RewardReasonsMap().load()
# rewardreasonsmap contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = TangocardSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
TANGOCARD_TEST_LIVE=TRUE
TANGOCARD_APIKEY=<your-key>
```

Then run:

```bash
cd py && pytest test/
```


## Reference

### TangocardSDK

```python
from tangocard_sdk import TangocardSDK

client = TangocardSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = TangocardSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### TangocardSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `Account` | `(data) -> AccountEntity` | Create an Account entity instance. |
| `AddCommentEscalation` | `(data) -> AddCommentEscalationEntity` | Create an AddCommentEscalation entity instance. |
| `AllEventType` | `(data) -> AllEventTypeEntity` | Create an AllEventType entity instance. |
| `AsyncOrder` | `(data) -> AsyncOrderEntity` | Create an AsyncOrder entity instance. |
| `AsyncOrderDetailView` | `(data) -> AsyncOrderDetailViewEntity` | Create an AsyncOrderDetailView entity instance. |
| `AsyncOrderLineItemsView` | `(data) -> AsyncOrderLineItemsViewEntity` | Create an AsyncOrderLineItemsView entity instance. |
| `AsyncReasonCodesView` | `(data) -> AsyncReasonCodesViewEntity` | Create an AsyncReasonCodesView entity instance. |
| `AsyncUpdateLineItemView` | `(data) -> AsyncUpdateLineItemViewEntity` | Create an AsyncUpdateLineItemView entity instance. |
| `BalanceAlertView` | `(data) -> BalanceAlertViewEntity` | Create a BalanceAlertView entity instance. |
| `BrandCategoriesView` | `(data) -> BrandCategoriesViewEntity` | Create a BrandCategoriesView entity instance. |
| `Catalog` | `(data) -> CatalogEntity` | Create a Catalog entity instance. |
| `ChoiceProduct` | `(data) -> ChoiceProductEntity` | Create a ChoiceProduct entity instance. |
| `CountryViewSummary` | `(data) -> CountryViewSummaryEntity` | Create a CountryViewSummary entity instance. |
| `CreateAccountCriterion` | `(data) -> CreateAccountCriterionEntity` | Create a CreateAccountCriterion entity instance. |
| `CreateCustomerCriterion` | `(data) -> CreateCustomerCriterionEntity` | Create a CreateCustomerCriterion entity instance. |
| `CredentialTypeView` | `(data) -> CredentialTypeViewEntity` | Create a CredentialTypeView entity instance. |
| `CreditCard` | `(data) -> CreditCardEntity` | Create a CreditCard entity instance. |
| `CreditCardDeposit` | `(data) -> CreditCardDepositEntity` | Create a CreditCardDeposit entity instance. |
| `CreditCardUnregister` | `(data) -> CreditCardUnregisterEntity` | Create a CreditCardUnregister entity instance. |
| `Customer` | `(data) -> CustomerEntity` | Create a Customer entity instance. |
| `EmailTemplateListView` | `(data) -> EmailTemplateListViewEntity` | Create an EmailTemplateListView entity instance. |
| `EmailTemplateViewVerbose` | `(data) -> EmailTemplateViewVerboseEntity` | Create an EmailTemplateViewVerbose entity instance. |
| `EmbeddableResponseDto` | `(data) -> EmbeddableResponseDtoEntity` | Create an EmbeddableResponseDto entity instance. |
| `ExchangeRatesWithDisclaimer` | `(data) -> ExchangeRatesWithDisclaimerEntity` | Create an ExchangeRatesWithDisclaimer entity instance. |
| `LineItem` | `(data) -> LineItemEntity` | Create a LineItem entity instance. |
| `LowBalanceAlertListView` | `(data) -> LowBalanceAlertListViewEntity` | Create a LowBalanceAlertListView entity instance. |
| `LowBalanceAlertView` | `(data) -> LowBalanceAlertViewEntity` | Create a LowBalanceAlertView entity instance. |
| `MobileCountry` | `(data) -> MobileCountryEntity` | Create a MobileCountry entity instance. |
| `N14Webhook` | `(data) -> N14WebhookEntity` | Create a N14Webhook entity instance. |
| `N1Customer` | `(data) -> N1CustomerEntity` | Create a N1Customer entity instance. |
| `N2Account` | `(data) -> N2AccountEntity` | Create a N2Account entity instance. |
| `N3Fund` | `(data) -> N3FundEntity` | Create a N3Fund entity instance. |
| `N8LineItem` | `(data) -> N8LineItemEntity` | Create a N8LineItem entity instance. |
| `N9DigitalTemplate` | `(data) -> N9DigitalTemplateEntity` | Create a N9DigitalTemplate entity instance. |
| `Order` | `(data) -> OrderEntity` | Create an Order entity instance. |
| `OrderViewSummary` | `(data) -> OrderViewSummaryEntity` | Create an OrderViewSummary entity instance. |
| `PrepaidCardInfo` | `(data) -> PrepaidCardInfoEntity` | Create a PrepaidCardInfo entity instance. |
| `PrepaidCardTransaction` | `(data) -> PrepaidCardTransactionEntity` | Create a PrepaidCardTransaction entity instance. |
| `ReissueCard` | `(data) -> ReissueCardEntity` | Create a ReissueCard entity instance. |
| `ReplacementReason` | `(data) -> ReplacementReasonEntity` | Create a ReplacementReason entity instance. |
| `Resend` | `(data) -> ResendEntity` | Create a Resend entity instance. |
| `RewardReasonsMap` | `(data) -> RewardReasonsMapEntity` | Create a RewardReasonsMap entity instance. |
| `TransferFund` | `(data) -> TransferFundEntity` | Create a TransferFund entity instance. |
| `UpdateAccount` | `(data) -> UpdateAccountEntity` | Create an UpdateAccount entity instance. |
| `UpdateWebhookSubscriptionResponseView` | `(data) -> UpdateWebhookSubscriptionResponseViewEntity` | Create an UpdateWebhookSubscriptionResponseView entity instance. |
| `Webhook` | `(data) -> WebhookEntity` | Create a Webhook entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Operations: Load, Update.

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

Operations: Create.

API path: `/prepaidCardService/addCommentEscalation/{referenceLineItemID}`

#### AllEventType

| Field | Description |
| --- | --- |
| `category` | The category of events can be subscribed to. |
| `eventTypes` | The event types that can be subscribed to. |

Operations: List.

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

Operations: Create, List.

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

Operations: Load, Update.

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

Operations: List.

API path: `/asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}/lineItems`

#### AsyncReasonCodesView

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/asyncOrders/reasonCodes`

#### AsyncUpdateLineItemView

| Field | Description |
| --- | --- |
| `deliveryDate` | Optional. |
| `lineItemNote` | Optional line item notes (up to 150 characters) |
| `senderInfo` | Optional. |

Operations: Update.

API path: `/asyncOrders/lineItems/{referenceLineItemId}`

#### BalanceAlertView

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}`

#### BrandCategoriesView

| Field | Description |
| --- | --- |
| `description` |  |
| `identifier` |  |

Operations: List.

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

Operations: List.

API path: `/choiceProducts/{choiceProductUtid}/catalog`

#### ChoiceProduct

| Field | Description |
| --- | --- |
| `countries` |  |
| `currencyCode` |  |
| `id` |  |
| `rewardName` |  |
| `utid` |  |

Operations: List, Load.

API path: `/choiceProducts`

#### CountryViewSummary

| Field | Description |
| --- | --- |
| `countryName` |  |
| `preferredCurrency` |  |
| `threeLetterCode` |  |
| `twoLetterCode` |  |

Operations: Load.

API path: `/rewardCountries`

#### CreateAccountCriterion

| Field | Description |
| --- | --- |
| `accountIdentifier` | A unique identifier for this account. |
| `contactEmail` | An email address for a designated representative for this account. |
| `currencyCode` | The currency this account will accept for deposits/withdraws. |
| `displayName` | A friendly name for this account. |
| `fundingNotification` | optional, send funding notification emails to the following address(es) |

Operations: Create.

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

Operations: List.

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

Operations: Create, Load.

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

Operations: Create, Load.

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

Operations: Create.

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

Operations: Create, List, Load.

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

Operations: Create, List, Load, Update.

API path: `/digitalTemplates`

#### EmbeddableResponseDto

| Field | Description |
| --- | --- |
| `url` |  |

Operations: Load.

API path: `/lineItems/{referenceLineItemID}/embeddedUrl`

#### ExchangeRatesWithDisclaimer

| Field | Description |
| --- | --- |
| `baseCurrency` |  |
| `baseFx` |  |
| `lastModifiedDate` |  |
| `rewardCurrency` |  |

Operations: List.

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

Operations: Create, List, Load.

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

Operations: List.

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

Operations: Create, Load, Update.

API path: `/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance`

#### MobileCountry

| Field | Description |
| --- | --- |
| `countryCode` |  |
| `countryName` |  |
| `isoCode` |  |
| `languageCode` |  |

Operations: Load.

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

Operations: Create, List, Load, Remove.

API path: `/webhooks/{webhookId}/tests/{testName}`

#### N1Customer

| Field | Description |
| --- | --- |

Operations: Load.

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

Operations: Update.

API path: `/lineItems/{referenceLineItemID}`

#### N9DigitalTemplate

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

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

Operations: Create, List, Load.

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

Operations: Create.

API path: `/lineItems/{referenceLineItemID}/reissue`

#### PrepaidCardInfo

| Field | Description |
| --- | --- |
| `balance` |  |
| `card` |  |
| `comments` |  |
| `registration` |  |

Operations: Load.

API path: `/prepaidCardService/getCardInfo/{referenceLineItemID}`

#### PrepaidCardTransaction

| Field | Description |
| --- | --- |
| `journal` |  |
| `page` |  |

Operations: Load.

API path: `/prepaidCardService/getCardTransactions/{referenceLineItemID}`

#### ReissueCard

| Field | Description |
| --- | --- |
| `commentText` | Optional comment for the card replacement. |
| `id` |  |
| `reason` | Reason for the card replacement. |
| `status` | Status of the reissue request. |
| `updatedBy` | Identifier of the agent initiating the request. |

Operations: Create.

API path: `/prepaidCardService/reissueCard/{referenceLineItemID}`

#### ReplacementReason

| Field | Description |
| --- | --- |
| `replacementReasons` | List of valid replacement reason codes. |

Operations: List.

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

Operations: Create.

API path: `/lineItems/{referenceLineItemId}/resends`

#### RewardReasonsMap

| Field | Description |
| --- | --- |
| `CANCEL` | Map of cancel reasons |
| `CANCEL_AND_REISSUE` | Map of cancel and reissue reasons |
| `FREEZE` | Map of freeze reasons |
| `UNFREEZE` | Map of unfreeze reasons |

Operations: Load.

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

Operations: Create.

API path: `/transferFunds`

#### UpdateAccount

| Field | Description |
| --- | --- |
| `id` |  |
| `registration` |  |
| `status` |  |
| `updatedBy` |  |

Operations: Create.

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

Operations: Update.

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

Operations: Create, Load.

API path: `/webhooks/{webhookId}/replay`



## Entities


### Account

Create an instance: `account = client.Account()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `str` |  |
| `accountNumber` | `str` |  |
| `contactEmail` | `str` | optional, an email address for a designated representative for this account. |
| `createdAt` | `str` |  |
| `currencyCode` | `str` |  |
| `currentBalance` | `float` |  |
| `displayName` | `str` | optional, a friendly name for this account. |
| `fundingNotification` | `list` | optional, send funding notification emails to the following address(es). |
| `id` | `str` |  |
| `status` | `str` |  |

#### Example: Load

```python
account = client.Account().load({"id": "account_id"})
```


### AddCommentEscalation

Create an instance: `add_comment_escalation = client.AddCommentEscalation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `int` | Assignee ID. |
| `commentText` | `str` | Free-text comment to add to the prepaid card. |
| `id` | `str` |  |
| `inquiryCategoryCode` | `int` | Inquiry category code. |
| `inquiryIdNumber` | `int` | Inquiry ID number. |
| `inquirySource` | `str` | Origination source identifier (e.g. |
| `inquiryTypeCode` | `int` | Inquiry type code. |
| `issueDescription` | `str` | Short description of the issue. |
| `status` | `str` | Status of the inquiry (e.g. |
| `userId` | `str` | Agent or CSR user ID. |

#### Example: Create

```python
add_comment_escalation = client.AddCommentEscalation().create({
    "id": "example_id",  # str
    "commentText": "example_commentText",  # str
    "issueDescription": "example_issueDescription",  # str
})
```


### AllEventType

Create an instance: `all_event_type = client.AllEventType()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `str` | The category of events can be subscribed to. |
| `eventTypes` | `list` | The event types that can be subscribed to. |

#### Example: List

```python
all_event_types = client.AllEventType().list()
```


### AsyncOrder

Create an instance: `async_order = client.AsyncOrder()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `str` | specify the account this order will be deducted from |
| `accountNumber` | `str` |  |
| `amountCharged` | `dict` | Initial value and the total charged amount on the account |
| `campaign` | `str` | Optional. |
| `createdAt` | `str` |  |
| `customerIdentifier` | `str` | specify the customer associated with the order. |
| `duplicateLineItemRefIds` | `dict` | If any duplicate duplicateLineItemRefIds exist in the request |
| `externalRefID` | `str` | Required. |
| `failedLineItems` | `list` | Failed line items list (business validations) |
| `fulfillBy` | `str` |  |
| `lineItems` | `list` | Line Items of the bulk order a required field |
| `notes` | `str` | Optional order notes. |
| `orderStatus` | `str` |  |
| `purchaseOrderNumber` | `str` | The Purchase Order Number associated with this order. |
| `referenceOrderID` | `str` |  |
| `sender` | `dict` | Optional. |
| `status` | `str` | This status reflects about cart status or validation status based on the processing |
| `totalLineItems` | `int` | Total number of line items submitted in the request |
| `totalLineItemsRows` | `int` |  |

#### Example: List

```python
async_orders = client.AsyncOrder().list()
```

#### Example: Create

```python
async_order = client.AsyncOrder().create({
    "accountIdentifier": "example_accountIdentifier",  # str
    "accountNumber": "example_accountNumber",  # str
    "customerIdentifier": "example_customerIdentifier",  # str
    "lineItems": [],  # list
    "referenceOrderID": "example_referenceOrderID",  # str
})
```


### AsyncOrderDetailView

Create an instance: `async_order_detail_view = client.AsyncOrderDetailView()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `str` | Account identifier |
| `amountCharged` | `dict` | Initial value and the total charged amount on the account |
| `campaign` | `str` | Campaign name |
| `completedAt` | `str` | Order completion timestamp |
| `createdAt` | `str` | Order creation timestamp |
| `customerIdentifier` | `str` | Customer identifier |
| `externalRefID` | `str` | External reference ID provided by client |
| `id` | `str` |  |
| `lineItems` | `list` | list of line items |
| `notes` | `str` | Order notes |
| `orderErrors` | `list` | Order level errors |
| `orderStatus` | `str` | Current status of the order |
| `pagination` | `dict` | Pagination information |
| `purchaseOrderNumber` | `str` | Purchase order number |
| `referenceOrderID` | `str` | Internal reference order ID |
| `sender` | `dict` | Sender information |
| `totalLineItems` | `int` | Total number of line items |

#### Example: Load

```python
async_order_detail_view = client.AsyncOrderDetailView().load({"account_identifier": "account_identifier", "customer_identifier": "customer_identifier", "external_ref_id": "external_ref_id"})
```


### AsyncOrderLineItemsView

Create an instance: `async_order_line_items_view = client.AsyncOrderLineItemsView()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `str` |  |
| `amountCharged` | `dict` | Initial value and the total charged amount on the account |
| `campaign` | `str` |  |
| `customerIdentifier` | `str` |  |
| `externalRefID` | `str` |  |
| `lineItems` | `list` | The List of Line Items for the Async Order. |
| `orderErrors` | `list` | The List of Errors for the Async Order. |
| `orderNotes` | `str` |  |
| `orderStatus` | `str` |  |
| `pagination` | `dict` | The cursor for pagination of the async order line items. |
| `purchaseOrderNumber` | `str` |  |
| `referenceOrderID` | `str` |  |
| `sender` | `dict` |  |

#### Example: List

```python
async_order_line_items_views = client.AsyncOrderLineItemsView().list({"account_id": "example", "customer_id": "example", "external_ref_id": "example"})
```


### AsyncReasonCodesView

Create an instance: `async_reason_codes_view = client.AsyncReasonCodesView()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
async_reason_codes_view = client.AsyncReasonCodesView().load()
```


### AsyncUpdateLineItemView

Create an instance: `async_update_line_item_view = client.AsyncUpdateLineItemView()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deliveryDate` | `str` | Optional. |
| `lineItemNote` | `str` | Optional line item notes (up to 150 characters) |
| `senderInfo` | `dict` | Optional. |


### BalanceAlertView

Create an instance: `balance_alert_view = client.BalanceAlertView()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### BrandCategoriesView

Create an instance: `brand_categories_view = client.BrandCategoriesView()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` |  |
| `identifier` | `str` |  |

#### Example: List

```python
brand_categories_views = client.BrandCategoriesView().list()
```


### Catalog

Create an instance: `catalog = client.Catalog()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `barcodeType` | `str` |  |
| `brandKey` | `str` |  |
| `brandName` | `str` |  |
| `brandRequirements` | `dict` |  |
| `categories` | `list` |  |
| `createdDate` | `str` |  |
| `description` | `str` |  |
| `disclaimer` | `str` |  |
| `imageUrls` | `dict` |  |
| `items` | `list` |  |
| `lastUpdateDate` | `str` |  |
| `shortDescription` | `str` |  |
| `status` | `str` |  |
| `terms` | `str` |  |

#### Example: List

```python
catalogs = client.Catalog().list()
```


### ChoiceProduct

Create an instance: `choice_product = client.ChoiceProduct()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `countries` | `list` |  |
| `currencyCode` | `str` |  |
| `id` | `str` |  |
| `rewardName` | `str` |  |
| `utid` | `str` |  |

#### Example: Load

```python
choice_product = client.ChoiceProduct().load({"id": "choice_product_id"})
```

#### Example: List

```python
choice_products = client.ChoiceProduct().list()
```


### CountryViewSummary

Create an instance: `country_view_summary = client.CountryViewSummary()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `countryName` | `str` |  |
| `preferredCurrency` | `str` |  |
| `threeLetterCode` | `str` |  |
| `twoLetterCode` | `str` |  |

#### Example: Load

```python
country_view_summary = client.CountryViewSummary().load()
```


### CreateAccountCriterion

Create an instance: `create_account_criterion = client.CreateAccountCriterion()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `str` | A unique identifier for this account. |
| `contactEmail` | `str` | An email address for a designated representative for this account. |
| `currencyCode` | `str` | The currency this account will accept for deposits/withdraws. |
| `displayName` | `str` | A friendly name for this account. |
| `fundingNotification` | `list` | optional, send funding notification emails to the following address(es) |

#### Example: Create

```python
create_account_criterion = client.CreateAccountCriterion().create({
    "customer_identifier": "example_customer_identifier",  # str
    "accountIdentifier": "example_accountIdentifier",  # str
    "contactEmail": "example_contactEmail",  # str
    "displayName": "example_displayName",  # str
})
```


### CreateCustomerCriterion

Create an instance: `create_customer_criterion = client.CreateCustomerCriterion()`


### CredentialTypeView

Create an instance: `credential_type_view = client.CredentialTypeView()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `credentialType` | `str` |  |
| `description` | `str` |  |

#### Example: List

```python
credential_type_views = client.CredentialTypeView().list()
```


### CreditCard

Create an instance: `credit_card = client.CreditCard()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `str` | specify the account this credit card is associated with |
| `accountNumber` | `str` |  |
| `activationDate` | `str` |  |
| `billingAddress` | `dict` | required Enter the billing address information for the credit card that is being registered |
| `contactInformation` | `list` | Optional. |
| `createdDate` | `str` |  |
| `creditCard` | `dict` | required Enter the credit card details that is being registered |
| `customerIdentifier` | `str` | specify the customer associated with the credit card. |
| `expirationDate` | `str` |  |
| `id` | `str` |  |
| `ipAddress` | `str` | specify the The IP address of the person adding the credit card |
| `label` | `str` | specify a label for the credit card |
| `lastFourDigits` | `str` |  |
| `status` | `str` |  |
| `token` | `str` |  |

#### Example: Load

```python
credit_card = client.CreditCard().load({"id": "credit_card_id"})
```

#### Example: Create

```python
credit_card = client.CreditCard().create({
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


### CreditCardDeposit

Create an instance: `credit_card_deposit = client.CreditCardDeposit()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `str` | specify the account this credit card is associated with |
| `accountNumber` | `str` |  |
| `amount` | `float` | specify the amount to fund in USD |
| `amountCharged` | `float` |  |
| `createdDate` | `str` |  |
| `creditCardToken` | `str` | specify the credit card token to fund with |
| `customerIdentifier` | `str` | specify the customer associated with the credit card. |
| `externalRefID` | `str` | specify the external reference id to associate with this funding action. |
| `feePercent` | `float` |  |
| `id` | `str` |  |
| `referenceDepositID` | `str` |  |
| `status` | `str` |  |

#### Example: Load

```python
credit_card_deposit = client.CreditCardDeposit().load({"id": "credit_card_deposit_id"})
```

#### Example: Create

```python
credit_card_deposit = client.CreditCardDeposit().create({
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


### CreditCardUnregister

Create an instance: `credit_card_unregister = client.CreditCardUnregister()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `str` | Specify the account this credit card is associated with. |
| `createdDate` | `str` |  |
| `creditCardToken` | `str` | Specify the credit card token to unregister. |
| `customerIdentifier` | `str` | Specify the customer associated with the credit card. |
| `message` | `str` |  |
| `token` | `str` |  |

#### Example: Create

```python
credit_card_unregister = client.CreditCardUnregister().create({
    "accountIdentifier": "example_accountIdentifier",  # str
    "createdDate": "example_createdDate",  # str
    "creditCardToken": "example_creditCardToken",  # str
    "customerIdentifier": "example_customerIdentifier",  # str
    "message": "example_message",  # str
    "token": "example_token",  # str
})
```


### Customer

Create an instance: `customer = client.Customer()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accounts` | `list` |  |
| `createdAt` | `str` |  |
| `customerIdentifier` | `str` | A unique identifier for this customer. |
| `displayName` | `str` | A friendly name for this customer. |
| `id` | `str` |  |
| `status` | `str` |  |

#### Example: Load

```python
customer = client.Customer().load({"id": "customer_id"})
```

#### Example: List

```python
customers = client.Customer().list()
```

#### Example: Create

```python
customer = client.Customer().create({
    "accounts": [],  # list
    "createdAt": "example_createdAt",  # str
    "customerIdentifier": "example_customerIdentifier",  # str
    "displayName": "example_displayName",  # str
    "status": "example_status",  # str
})
```


### EmailTemplateListView

Create an instance: `email_template_list_view = client.EmailTemplateListView()`


### EmailTemplateViewVerbose

Create an instance: `email_template_view_verbose = client.EmailTemplateViewVerbose()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accentColor` | `str` | A Hex color value, six hexadecimal digits preceded by a pound sign, used as an accent in the email. |
| `accessControl` | `list` | (Optional) Which Customers and/or Accounts should have access to this template. |
| `accessControls` | `list` |  |
| `closing` | `str` | After the reward credential, a space to close the email message to the recipient. |
| `customerServiceMessage` | `str` | If left null, Tango Card's Customer Support contact information will be included. |
| `defaults` | `list` | If you want this template to be used at order time for the given Platform, Customer or Account when the Email Template Identifier (etid) is not provided with the order. |
| `etid` | `str` |  |
| `fromName` | `str` | The name that will appear in the From line of the email and the {from_name} in the text message. |
| `headerImage` | `str` | A Base64 encoded string of an image that will show as the header of the email. |
| `headerImageAltText` | `str` | The Alt Text for the Header Image in the email. |
| `messageBody` | `str` | The message body for the email. |
| `name` | `str` | A unique name to give the template. |
| `smsMessageBody` | `str` | The message body for the SMS. |
| `subject` | `str` | The Subject of the email. |

#### Example: Load

```python
email_template_view_verbose = client.EmailTemplateViewVerbose().load({"etid": "etid"})
```

#### Example: List

```python
email_template_view_verboses = client.EmailTemplateViewVerbose().list()
```

#### Example: Create

```python
email_template_view_verbose = client.EmailTemplateViewVerbose().create({
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


### EmbeddableResponseDto

Create an instance: `embeddable_response_dto = client.EmbeddableResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `url` | `str` |  |

#### Example: Load

```python
embeddable_response_dto = client.EmbeddableResponseDto().load({"reference_line_item_id": "reference_line_item_id"})
```


### ExchangeRatesWithDisclaimer

Create an instance: `exchange_rates_with_disclaimer = client.ExchangeRatesWithDisclaimer()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `baseCurrency` | `str` |  |
| `baseFx` | `str` |  |
| `lastModifiedDate` | `str` |  |
| `rewardCurrency` | `str` |  |

#### Example: List

```python
exchange_rates_with_disclaimers = client.ExchangeRatesWithDisclaimer().list()
```


### LineItem

Create an instance: `line_item = client.LineItem()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `str` |  |
| `accountNumber` | `str` |  |
| `amountCharged` | `dict` |  |
| `amountIssued` | `dict` |  |
| `campaign` | `str` |  |
| `canCancel` | `bool` |  |
| `canFreeze` | `bool` |  |
| `customerIdentifier` | `str` |  |
| `dateIssued` | `str` |  |
| `deliveryMethod` | `str` |  |
| `deliveryStatus` | `str` |  |
| `emailStatus` | `str` |  |
| `etid` | `str` |  |
| `expirationDate` | `str` |  |
| `externalReferenceLineItemID` | `str` |  |
| `id` | `str` |  |
| `lineItemActionHistory` | `list` |  |
| `lineItemActionReason` | `str` |  |
| `lineItemErrors` | `list` | Errors related to the line item |
| `lineNumber` | `int` |  |
| `orderNotes` | `str` |  |
| `orderSource` | `str` |  |
| `orderStatus` | `str` |  |
| `ptid` | `str` |  |
| `purchaseOrderNumber` | `str` |  |
| `quantity` | `int` | quantity of line items |
| `recipient` | `dict` |  |
| `redemptionHistory` | `list` |  |
| `referenceLineItemID` | `str` |  |
| `referenceOrderID` | `str` |  |
| `reissuedFromReferenceLineItemId` | `str` | Reissued from reference line item ID |
| `reissuedToReferenceLineItemId` | `str` | Reissued to reference line item ID |
| `remainingBalance` | `float` |  |
| `resendHistory` | `list` |  |
| `reward` | `dict` |  |
| `rewardName` | `str` |  |
| `rewardStatus` | `str` |  |
| `rewardViewHistory` | `list` |  |
| `sender` | `dict` |  |
| `status` | `str` |  |
| `utid` | `str` |  |

#### Example: Load

```python
line_item = client.LineItem().load({"id": "line_item_id"})
```

#### Example: List

```python
line_items = client.LineItem().list()
```

#### Example: Create

```python
line_item = client.LineItem().create({
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


### LowBalanceAlertListView

Create an instance: `low_balance_alert_list_view = client.LowBalanceAlertListView()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `str` |  |
| `balanceAlertDisplayName` | `str` |  |
| `balanceAlertID` | `str` |  |
| `balanceAlertNotification` | `list` |  |
| `balanceAlertThreshold` | `float` |  |
| `createdAt` | `str` |  |
| `customerIdentifier` | `str` |  |

#### Example: List

```python
low_balance_alert_list_views = client.LowBalanceAlertListView().list({"account_identifier": "example", "customer_identifier": "example"})
```


### LowBalanceAlertView

Create an instance: `low_balance_alert_view = client.LowBalanceAlertView()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `str` |  |
| `balanceAlertDisplayName` | `str` | A friendly name for this low balance alert (will be displayed in the Tango Portal). |
| `balanceAlertID` | `str` |  |
| `balanceAlertNotification` | `list` | Send low balance notification emails to the following address(es). |
| `balanceAlertThreshold` | `float` | The threshold amount that will trigger the low balance alert. |
| `createdAt` | `str` |  |
| `customerIdentifier` | `str` |  |

#### Example: Load

```python
low_balance_alert_view = client.LowBalanceAlertView().load({"account_id": "account_id", "balance_alert_id": "balance_alert_id", "customer_identifier": "customer_identifier"})
```

#### Example: Create

```python
low_balance_alert_view = client.LowBalanceAlertView().create({
    "account_identifier": "example_account_identifier",  # str
    "customer_identifier": "example_customer_identifier",  # str
})
```


### MobileCountry

Create an instance: `mobile_country = client.MobileCountry()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `countryCode` | `str` |  |
| `countryName` | `str` |  |
| `isoCode` | `str` |  |
| `languageCode` | `str` |  |

#### Example: Load

```python
mobile_country = client.MobileCountry().load()
```


### N14Webhook

Create an instance: `n14_webhook = client.N14Webhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `list` | The categories the customer wants to subscribe to. |
| `createdAt` | `str` | The date and time the webhook was created. |
| `eventTypes` | `list` | The event types the customer wants to subscribe to. |
| `expiresAt` | `str` | The date and time the webhook expires. |
| `headers` | `list` | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `str` | The HMAC secret key used to sign the webhook payload. |
| `id` | `str` |  |
| `payloadVerificationMethod` | `str` | Method to verify webhook payload authenticity |
| `signingCertificate` | `str` | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `str` | The date and time when the webhook was last updated. |
| `url` | `str` | The URL of the customer's webhook listener. |
| `webhookId` | `str` | The ID of the webhook. |

#### Example: Load

```python
n14_webhook = client.N14Webhook().load({"webhook_id": "webhook_id"})
```

#### Example: List

```python
n14_webhooks = client.N14Webhook().list()
```

#### Example: Create

```python
n14_webhook = client.N14Webhook().create({
    "test_name": "example_test_name",  # str
    "webhook_id": "example_webhook_id",  # str
    "url": "example_url",  # str
})
```


### N1Customer

Create an instance: `n1_customer = client.N1Customer()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
n1_customer = client.N1Customer().load({"customer_identifier": "customer_identifier"})
```


### N2Account

Create an instance: `n2_account = client.N2Account()`


### N3Fund

Create an instance: `n3_fund = client.N3Fund()`


### N8LineItem

Create an instance: `n8_line_item = client.N8LineItem()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `campaign` | `str` | optional campaign that may be used to administratively categorize a specific order. |
| `id` | `str` |  |
| `orderNotes` | `str` | Optional order notes (up to 150 characters) |
| `purchaseOrderNumber` | `str` | The Purchase Order Number associated with this order. |


### N9DigitalTemplate

Create an instance: `n9_digital_template = client.N9DigitalTemplate()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Order

Create an instance: `order = client.Order()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `str` | Specify the account this order will be deducted from |
| `accountNumber` | `str` |  |
| `amount` | `float` | Specify the face value of of the reward. |
| `amountCharged` | `dict` |  |
| `asyncOrderEntity` | `dict` |  |
| `campaign` | `str` | Optional. |
| `createdAt` | `str` |  |
| `customFields` | `dict` | Optional. |
| `customerIdentifier` | `str` | Specify the customer associated with the order. |
| `deliveryMethod` | `str` | Specify delivery method for the order |
| `denomination` | `dict` |  |
| `emailSubject` | `str` | Optional. |
| `etid` | `str` | Optional. |
| `expirationDate` | `str` | Optional for Promo Links, the exact calendar date the Promo Link will expire. |
| `externalRefID` | `str` | Optional. |
| `id` | `str` |  |
| `lineItemStatus` | `str` |  |
| `message` | `str` | Optional gift message |
| `notes` | `str` | Optional order notes. |
| `orderClientSource` | `str` |  |
| `orderExternalRefIdDupe` | `bool` |  |
| `orderStatus` | `str` |  |
| `ptid` | `str` | Only required for Printed Reward Links, the unique identifier for the Printed Reward Link Template provided in the Tango Portal on the Printed Template page. |
| `purchaseOrderNumber` | `str` | The Purchase Order Number associated with this order. |
| `recipient` | `dict` | Required if deliveryMethod is EMAIL, PHONE, or ADDRESS. |
| `redemptionInstructions` | `str` |  |
| `referenceLineItemID` | `str` |  |
| `referenceOrderID` | `str` |  |
| `reward` | `dict` |  |
| `rewardName` | `str` |  |
| `sendEmail` | `bool` | Deprecated Oct 1, 2025. |
| `sender` | `dict` | Optional. |
| `status` | `str` |  |
| `utid` | `str` | The unique identifier for the reward you are sending as provided in the Get Catalog call |

#### Example: Load

```python
order = client.Order().load({"id": "order_id"})
```

#### Example: List

```python
orders = client.Order().list()
```

#### Example: Create

```python
order = client.Order().create({
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


### OrderViewSummary

Create an instance: `order_view_summary = client.OrderViewSummary()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `float` | Optional. |
| `deliveryMethod` | `str` | Optional. |
| `notes` | `str` | Optional order notes (up to 150 characters). |
| `otherReason` | `str` | Required when reasonCode is "OTHER", enter the reason why the line item is being reissued. |
| `reasonCode` | `str` | Required. |
| `recipient` | `dict` | Optional. |

#### Example: Create

```python
order_view_summary = client.OrderViewSummary().create({
    "reference_line_item_id": "example_reference_line_item_id",  # str
    "reasonCode": "example_reasonCode",  # str
})
```


### PrepaidCardInfo

Create an instance: `prepaid_card_info = client.PrepaidCardInfo()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `balance` | `dict` |  |
| `card` | `dict` |  |
| `comments` | `list` |  |
| `registration` | `dict` |  |

#### Example: Load

```python
prepaid_card_info = client.PrepaidCardInfo().load({"reference_line_item_id": "reference_line_item_id"})
```


### PrepaidCardTransaction

Create an instance: `prepaid_card_transaction = client.PrepaidCardTransaction()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `journal` | `list` |  |
| `page` | `dict` |  |

#### Example: Load

```python
prepaid_card_transaction = client.PrepaidCardTransaction().load({"reference_line_item_id": "reference_line_item_id"})
```


### ReissueCard

Create an instance: `reissue_card = client.ReissueCard()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commentText` | `str` | Optional comment for the card replacement. |
| `id` | `str` |  |
| `reason` | `str` | Reason for the card replacement. |
| `status` | `str` | Status of the reissue request. |
| `updatedBy` | `str` | Identifier of the agent initiating the request. |

#### Example: Create

```python
reissue_card = client.ReissueCard().create({
    "id": "example_id",  # str
    "reason": "example_reason",  # str
    "updatedBy": "example_updatedBy",  # str
})
```


### ReplacementReason

Create an instance: `replacement_reason = client.ReplacementReason()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `replacementReasons` | `list` | List of valid replacement reason codes. |

#### Example: List

```python
replacement_reasons = client.ReplacementReason().list()
```


### Resend

Create an instance: `resend = client.Resend()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `newDeliveryMethod` | `str` | The delivery method used to re-deliver the reward. |
| `newEmail` | `str` | A new email address to re-deliver this order to. |
| `newEtid` | `str` | A new etid used to re-deliver an order. |
| `newMobile` | `str` | A new mobile number to use for resending an order. |
| `newMobileNumber` | `str` | A new phone number to re-deliver this order to. |
| `otherReason` | `str` | Required when lineItemResendReasonCode is "OTHER", enter the reason why the line item is being RESENT |
| `reasonCode` | `str` | Enter the reason why this line item is being RESENT (respectively) |

#### Example: Create

```python
resend = client.Resend().create({
    "line_item_id": "example_line_item_id",  # str
})
```


### RewardReasonsMap

Create an instance: `reward_reasons_map = client.RewardReasonsMap()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `CANCEL` | `dict` | Map of cancel reasons |
| `CANCEL_AND_REISSUE` | `dict` | Map of cancel and reissue reasons |
| `FREEZE` | `dict` | Map of freeze reasons |
| `UNFREEZE` | `dict` | Map of unfreeze reasons |

#### Example: Load

```python
reward_reasons_map = client.RewardReasonsMap().load()
```


### TransferFund

Create an instance: `transfer_fund = client.TransferFund()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `float` | Specify the currency amount of the funds being transferred. |
| `externalRefID` | `str` | specify the external reference id to associate with this funding action. |
| `transferDate` | `str` |  |
| `transferFrom` | `dict` | The accountIdentifier for the Account transferring funds from. |
| `transferNotes` | `str` | Optional transfer notes (up to 150 characters) |
| `transferTo` | `dict` | The accountIdentifier for the Account transferring funds to. |
| `transferredAmount` | `float` |  |

#### Example: Create

```python
transfer_fund = client.TransferFund().create({
    "amount": 1,  # float
})
```


### UpdateAccount

Create an instance: `update_account = client.UpdateAccount()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `registration` | `dict` |  |
| `status` | `str` |  |
| `updatedBy` | `str` |  |

#### Example: Create

```python
update_account = client.UpdateAccount().create({
    "id": "example_id",  # str
    "registration": {},  # dict
})
```


### UpdateWebhookSubscriptionResponseView

Create an instance: `update_webhook_subscription_response_view = client.UpdateWebhookSubscriptionResponseView()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `list` | The categories the customer is subscribed to. |
| `createdAt` | `str` | The date and time the webhook was created. |
| `eventTypes` | `list` | The event types the customer is subscribed to. |
| `expiresAt` | `str` | The date and time the webhook expires. |
| `headers` | `list` | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `str` | The HMAC secret key used to sign the webhook payload. |
| `payloadVerificationMethod` | `str` | Method to verify webhook payload integrity |
| `signingCertificate` | `str` | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `str` | The date and time when the webhook was last updated. |
| `url` | `str` | The URL of the customer's webhook listener. |
| `webhookId` | `str` | The ID of the webhook. |


### Webhook

Create an instance: `webhook = client.Webhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `list` | The categories the customer wants to subscribe to. |
| `createdAt` | `str` | The date and time the webhook was created. |
| `eventTypes` | `list` | The event types the customer wants to subscribe to. |
| `expiresAt` | `str` | The date and time the webhook expires. |
| `headers` | `list` | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `str` | The HMAC secret key used to sign the webhook payload. |
| `id` | `str` |  |
| `payloadVerificationMethod` | `str` | Method to verify webhook payload integrity. |
| `signingCertificate` | `str` | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `str` | The date and time when the webhook was last updated. |
| `url` | `str` | The URL of the customer's webhook listener. |
| `webhookId` | `str` | The ID of the webhook. |

#### Example: Load

```python
webhook = client.Webhook().load({"id": "webhook_id"})
```

#### Example: Create

```python
webhook = client.Webhook().create({
    "id": "example_id",  # str
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

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

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── tangocard_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`tangocard_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
rewardreasonsmap = client.RewardReasonsMap()
rewardreasonsmap.load()

# rewardreasonsmap.data_get() now returns the rewardreasonsmap data from the last load
# rewardreasonsmap.match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
