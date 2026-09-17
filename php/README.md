# Tangocard PHP SDK



The PHP SDK for the Tangocard API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Account()` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/tangocard-sdk/releases](https://github.com/voxgig-sdk/tangocard-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'tangocard_sdk.php';

$client = new TangocardSDK([
    "apikey" => getenv("TANGOCARD_APIKEY"),
]);
```

### 3. Load an asyncorderdetailview

AsyncOrderDetailView is nested under account_identifier, so provide the `account_identifier`.

```php
try {
    // load() returns the ENTITY — call data_get() for the AsyncOrderDetailView record (throws on error).
    $asyncorderdetailview = $client->AsyncOrderDetailView()->load(["account_identifier" => "example_account_identifier", "customer_identifier" => "example_customer_identifier", "external_ref_id" => "example_external_ref_id"]);
    print_r($asyncorderdetailview->data_get());
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 4. Create, update, and remove

```php
// Update
$client->Account()->update(["id" => "example_id", "customer_identifier" => "example_customer_identifier", "accountIdentifier" => "example_accountIdentifier"]);

```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $rewardreasonsmap = $client->RewardReasonsMap()->load();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = TangocardSDK::test([
    "entity" => ["webhook" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$webhook = $client->Webhook()->load(["id" => "test01"]);
print_r($webhook->data_get());
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new TangocardSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
TANGOCARD_TEST_LIVE=TRUE
TANGOCARD_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### TangocardSDK

```php
require_once 'tangocard_sdk.php';
$client = new TangocardSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = TangocardSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### TangocardSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Account` | `($data): AccountEntity` | Create an Account entity instance. |
| `AddCommentEscalation` | `($data): AddCommentEscalationEntity` | Create an AddCommentEscalation entity instance. |
| `AllEventType` | `($data): AllEventTypeEntity` | Create an AllEventType entity instance. |
| `AsyncOrder` | `($data): AsyncOrderEntity` | Create an AsyncOrder entity instance. |
| `AsyncOrderDetailView` | `($data): AsyncOrderDetailViewEntity` | Create an AsyncOrderDetailView entity instance. |
| `AsyncOrderLineItemsView` | `($data): AsyncOrderLineItemsViewEntity` | Create an AsyncOrderLineItemsView entity instance. |
| `AsyncReasonCodesView` | `($data): AsyncReasonCodesViewEntity` | Create an AsyncReasonCodesView entity instance. |
| `AsyncUpdateLineItemView` | `($data): AsyncUpdateLineItemViewEntity` | Create an AsyncUpdateLineItemView entity instance. |
| `BalanceAlertView` | `($data): BalanceAlertViewEntity` | Create a BalanceAlertView entity instance. |
| `BrandCategoriesView` | `($data): BrandCategoriesViewEntity` | Create a BrandCategoriesView entity instance. |
| `Catalog` | `($data): CatalogEntity` | Create a Catalog entity instance. |
| `ChoiceProduct` | `($data): ChoiceProductEntity` | Create a ChoiceProduct entity instance. |
| `CountryViewSummary` | `($data): CountryViewSummaryEntity` | Create a CountryViewSummary entity instance. |
| `CreateAccountCriterion` | `($data): CreateAccountCriterionEntity` | Create a CreateAccountCriterion entity instance. |
| `CreateCustomerCriterion` | `($data): CreateCustomerCriterionEntity` | Create a CreateCustomerCriterion entity instance. |
| `CredentialTypeView` | `($data): CredentialTypeViewEntity` | Create a CredentialTypeView entity instance. |
| `CreditCard` | `($data): CreditCardEntity` | Create a CreditCard entity instance. |
| `CreditCardDeposit` | `($data): CreditCardDepositEntity` | Create a CreditCardDeposit entity instance. |
| `CreditCardUnregister` | `($data): CreditCardUnregisterEntity` | Create a CreditCardUnregister entity instance. |
| `Customer` | `($data): CustomerEntity` | Create a Customer entity instance. |
| `EmailTemplateListView` | `($data): EmailTemplateListViewEntity` | Create an EmailTemplateListView entity instance. |
| `EmailTemplateViewVerbose` | `($data): EmailTemplateViewVerboseEntity` | Create an EmailTemplateViewVerbose entity instance. |
| `EmbeddableResponseDto` | `($data): EmbeddableResponseDtoEntity` | Create an EmbeddableResponseDto entity instance. |
| `ExchangeRatesWithDisclaimer` | `($data): ExchangeRatesWithDisclaimerEntity` | Create an ExchangeRatesWithDisclaimer entity instance. |
| `LineItem` | `($data): LineItemEntity` | Create a LineItem entity instance. |
| `LowBalanceAlertListView` | `($data): LowBalanceAlertListViewEntity` | Create a LowBalanceAlertListView entity instance. |
| `LowBalanceAlertView` | `($data): LowBalanceAlertViewEntity` | Create a LowBalanceAlertView entity instance. |
| `MobileCountry` | `($data): MobileCountryEntity` | Create a MobileCountry entity instance. |
| `N14Webhook` | `($data): N14WebhookEntity` | Create a N14Webhook entity instance. |
| `N1Customer` | `($data): N1CustomerEntity` | Create a N1Customer entity instance. |
| `N2Account` | `($data): N2AccountEntity` | Create a N2Account entity instance. |
| `N3Fund` | `($data): N3FundEntity` | Create a N3Fund entity instance. |
| `N8LineItem` | `($data): N8LineItemEntity` | Create a N8LineItem entity instance. |
| `N9DigitalTemplate` | `($data): N9DigitalTemplateEntity` | Create a N9DigitalTemplate entity instance. |
| `Order` | `($data): OrderEntity` | Create an Order entity instance. |
| `OrderViewSummary` | `($data): OrderViewSummaryEntity` | Create an OrderViewSummary entity instance. |
| `PrepaidCardInfo` | `($data): PrepaidCardInfoEntity` | Create a PrepaidCardInfo entity instance. |
| `PrepaidCardTransaction` | `($data): PrepaidCardTransactionEntity` | Create a PrepaidCardTransaction entity instance. |
| `ReissueCard` | `($data): ReissueCardEntity` | Create a ReissueCard entity instance. |
| `ReplacementReason` | `($data): ReplacementReasonEntity` | Create a ReplacementReason entity instance. |
| `Resend` | `($data): ResendEntity` | Create a Resend entity instance. |
| `RewardReasonsMap` | `($data): RewardReasonsMapEntity` | Create a RewardReasonsMap entity instance. |
| `TransferFund` | `($data): TransferFundEntity` | Create a TransferFund entity instance. |
| `UpdateAccount` | `($data): UpdateAccountEntity` | Create an UpdateAccount entity instance. |
| `UpdateWebhookSubscriptionResponseView` | `($data): UpdateWebhookSubscriptionResponseViewEntity` | Create an UpdateWebhookSubscriptionResponseView entity instance. |
| `Webhook` | `($data): WebhookEntity` | Create a Webhook entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$account = $client->Account();`

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
| `currentBalance` | `float` |  |
| `displayName` | `string` | optional, a friendly name for this account. |
| `fundingNotification` | `array` | optional, send funding notification emails to the following address(es). |
| `id` | `string` |  |
| `status` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Account record (throws on error).
$account = $client->Account()->load(["id" => "account_id"]);
```


### AddCommentEscalation

Create an instance: `$add_comment_escalation = $client->AddCommentEscalation();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `int` | Assignee ID. |
| `commentText` | `string` | Free-text comment to add to the prepaid card. |
| `id` | `string` |  |
| `inquiryCategoryCode` | `int` | Inquiry category code. |
| `inquiryIdNumber` | `int` | Inquiry ID number. |
| `inquirySource` | `string` | Origination source identifier (e.g. |
| `inquiryTypeCode` | `int` | Inquiry type code. |
| `issueDescription` | `string` | Short description of the issue. |
| `status` | `string` | Status of the inquiry (e.g. |
| `userId` | `string` | Agent or CSR user ID. |

#### Example: Create

```php
$add_comment_escalation = $client->AddCommentEscalation()->create([
    "id" => null, // string
    "commentText" => null, // string
    "issueDescription" => null, // string
]);
```


### AllEventType

Create an instance: `$all_event_type = $client->AllEventType();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` | The category of events can be subscribed to. |
| `eventTypes` | `array` | The event types that can be subscribed to. |

#### Example: List

```php
// list() returns an array of AllEventType records (throws on error).
$all_event_types = $client->AllEventType()->list();
```


### AsyncOrder

Create an instance: `$async_order = $client->AsyncOrder();`

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
| `amountCharged` | `array` | Initial value and the total charged amount on the account |
| `campaign` | `string` | Optional. |
| `createdAt` | `string` |  |
| `customerIdentifier` | `string` | specify the customer associated with the order. |
| `duplicateLineItemRefIds` | `array` | If any duplicate duplicateLineItemRefIds exist in the request |
| `externalRefID` | `string` | Required. |
| `failedLineItems` | `array` | Failed line items list (business validations) |
| `fulfillBy` | `string` |  |
| `lineItems` | `array` | Line Items of the bulk order a required field |
| `notes` | `string` | Optional order notes. |
| `orderStatus` | `string` |  |
| `purchaseOrderNumber` | `string` | The Purchase Order Number associated with this order. |
| `referenceOrderID` | `string` |  |
| `sender` | `array` | Optional. |
| `status` | `string` | This status reflects about cart status or validation status based on the processing |
| `totalLineItems` | `int` | Total number of line items submitted in the request |
| `totalLineItemsRows` | `int` |  |

#### Example: List

```php
// list() returns an array of AsyncOrder records (throws on error).
$async_orders = $client->AsyncOrder()->list();
```

#### Example: Create

```php
$async_order = $client->AsyncOrder()->create([
    "accountIdentifier" => null, // string
    "accountNumber" => null, // string
    "customerIdentifier" => null, // string
    "lineItems" => null, // array
    "referenceOrderID" => null, // string
]);
```


### AsyncOrderDetailView

Create an instance: `$async_order_detail_view = $client->AsyncOrderDetailView();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` | Account identifier |
| `amountCharged` | `array` | Initial value and the total charged amount on the account |
| `campaign` | `string` | Campaign name |
| `completedAt` | `string` | Order completion timestamp |
| `createdAt` | `string` | Order creation timestamp |
| `customerIdentifier` | `string` | Customer identifier |
| `externalRefID` | `string` | External reference ID provided by client |
| `id` | `string` |  |
| `lineItems` | `array` | list of line items |
| `notes` | `string` | Order notes |
| `orderErrors` | `array` | Order level errors |
| `orderStatus` | `string` | Current status of the order |
| `pagination` | `array` | Pagination information |
| `purchaseOrderNumber` | `string` | Purchase order number |
| `referenceOrderID` | `string` | Internal reference order ID |
| `sender` | `array` | Sender information |
| `totalLineItems` | `int` | Total number of line items |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AsyncOrderDetailView record (throws on error).
$async_order_detail_view = $client->AsyncOrderDetailView()->load(["account_identifier" => "account_identifier", "customer_identifier" => "customer_identifier", "external_ref_id" => "external_ref_id"]);
```


### AsyncOrderLineItemsView

Create an instance: `$async_order_line_items_view = $client->AsyncOrderLineItemsView();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` |  |
| `amountCharged` | `array` | Initial value and the total charged amount on the account |
| `campaign` | `string` |  |
| `customerIdentifier` | `string` |  |
| `externalRefID` | `string` |  |
| `lineItems` | `array` | The List of Line Items for the Async Order. |
| `orderErrors` | `array` | The List of Errors for the Async Order. |
| `orderNotes` | `string` |  |
| `orderStatus` | `string` |  |
| `pagination` | `array` | The cursor for pagination of the async order line items. |
| `purchaseOrderNumber` | `string` |  |
| `referenceOrderID` | `string` |  |
| `sender` | `array` |  |

#### Example: List

```php
// list() returns an array of AsyncOrderLineItemsView records (throws on error).
$async_order_line_items_views = $client->AsyncOrderLineItemsView()->list();
```


### AsyncReasonCodesView

Create an instance: `$async_reason_codes_view = $client->AsyncReasonCodesView();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AsyncReasonCodesView record (throws on error).
$async_reason_codes_view = $client->AsyncReasonCodesView()->load();
```


### AsyncUpdateLineItemView

Create an instance: `$async_update_line_item_view = $client->AsyncUpdateLineItemView();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deliveryDate` | `string` | Optional. |
| `lineItemNote` | `string` | Optional line item notes (up to 150 characters) |
| `senderInfo` | `array` | Optional. |


### BalanceAlertView

Create an instance: `$balance_alert_view = $client->BalanceAlertView();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### BrandCategoriesView

Create an instance: `$brand_categories_view = $client->BrandCategoriesView();`

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

```php
// list() returns an array of BrandCategoriesView records (throws on error).
$brand_categories_views = $client->BrandCategoriesView()->list();
```


### Catalog

Create an instance: `$catalog = $client->Catalog();`

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
| `brandRequirements` | `array` |  |
| `categories` | `array` |  |
| `createdDate` | `string` |  |
| `description` | `string` |  |
| `disclaimer` | `string` |  |
| `imageUrls` | `array` |  |
| `items` | `array` |  |
| `lastUpdateDate` | `string` |  |
| `shortDescription` | `string` |  |
| `status` | `string` |  |
| `terms` | `string` |  |

#### Example: List

```php
// list() returns an array of Catalog records (throws on error).
$catalogs = $client->Catalog()->list();
```


### ChoiceProduct

Create an instance: `$choice_product = $client->ChoiceProduct();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `countries` | `array` |  |
| `currencyCode` | `string` |  |
| `id` | `string` |  |
| `rewardName` | `string` |  |
| `utid` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ChoiceProduct record (throws on error).
$choice_product = $client->ChoiceProduct()->load(["id" => "choice_product_id"]);
```

#### Example: List

```php
// list() returns an array of ChoiceProduct records (throws on error).
$choice_products = $client->ChoiceProduct()->list();
```


### CountryViewSummary

Create an instance: `$country_view_summary = $client->CountryViewSummary();`

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

```php
// load() returns the ENTITY — call data_get() for the CountryViewSummary record (throws on error).
$country_view_summary = $client->CountryViewSummary()->load();
```


### CreateAccountCriterion

Create an instance: `$create_account_criterion = $client->CreateAccountCriterion();`

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
| `fundingNotification` | `array` | optional, send funding notification emails to the following address(es) |

#### Example: Create

```php
$create_account_criterion = $client->CreateAccountCriterion()->create([
    "customer_identifier" => null, // string
    "accountIdentifier" => null, // string
    "contactEmail" => null, // string
    "displayName" => null, // string
]);
```


### CreateCustomerCriterion

Create an instance: `$create_customer_criterion = $client->CreateCustomerCriterion();`


### CredentialTypeView

Create an instance: `$credential_type_view = $client->CredentialTypeView();`

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

```php
// list() returns an array of CredentialTypeView records (throws on error).
$credential_type_views = $client->CredentialTypeView()->list();
```


### CreditCard

Create an instance: `$credit_card = $client->CreditCard();`

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
| `billingAddress` | `array` | required Enter the billing address information for the credit card that is being registered |
| `contactInformation` | `array` | Optional. |
| `createdDate` | `string` |  |
| `creditCard` | `array` | required Enter the credit card details that is being registered |
| `customerIdentifier` | `string` | specify the customer associated with the credit card. |
| `expirationDate` | `string` |  |
| `id` | `string` |  |
| `ipAddress` | `string` | specify the The IP address of the person adding the credit card |
| `label` | `string` | specify a label for the credit card |
| `lastFourDigits` | `string` |  |
| `status` | `string` |  |
| `token` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CreditCard record (throws on error).
$credit_card = $client->CreditCard()->load(["id" => "credit_card_id"]);
```

#### Example: Create

```php
$credit_card = $client->CreditCard()->create([
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


### CreditCardDeposit

Create an instance: `$credit_card_deposit = $client->CreditCardDeposit();`

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
| `amount` | `float` | specify the amount to fund in USD |
| `amountCharged` | `float` |  |
| `createdDate` | `string` |  |
| `creditCardToken` | `string` | specify the credit card token to fund with |
| `customerIdentifier` | `string` | specify the customer associated with the credit card. |
| `externalRefID` | `string` | specify the external reference id to associate with this funding action. |
| `feePercent` | `float` |  |
| `id` | `string` |  |
| `referenceDepositID` | `string` |  |
| `status` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CreditCardDeposit record (throws on error).
$credit_card_deposit = $client->CreditCardDeposit()->load(["id" => "credit_card_deposit_id"]);
```

#### Example: Create

```php
$credit_card_deposit = $client->CreditCardDeposit()->create([
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


### CreditCardUnregister

Create an instance: `$credit_card_unregister = $client->CreditCardUnregister();`

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

```php
$credit_card_unregister = $client->CreditCardUnregister()->create([
    "accountIdentifier" => null, // string
    "createdDate" => null, // string
    "creditCardToken" => null, // string
    "customerIdentifier" => null, // string
    "message" => null, // string
    "token" => null, // string
]);
```


### Customer

Create an instance: `$customer = $client->Customer();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accounts` | `array` |  |
| `createdAt` | `string` |  |
| `customerIdentifier` | `string` | A unique identifier for this customer. |
| `displayName` | `string` | A friendly name for this customer. |
| `id` | `string` |  |
| `status` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Customer record (throws on error).
$customer = $client->Customer()->load(["id" => "customer_id"]);
```

#### Example: List

```php
// list() returns an array of Customer records (throws on error).
$customers = $client->Customer()->list();
```

#### Example: Create

```php
$customer = $client->Customer()->create([
    "accounts" => null, // array
    "createdAt" => null, // string
    "customerIdentifier" => null, // string
    "displayName" => null, // string
    "status" => null, // string
]);
```


### EmailTemplateListView

Create an instance: `$email_template_list_view = $client->EmailTemplateListView();`


### EmailTemplateViewVerbose

Create an instance: `$email_template_view_verbose = $client->EmailTemplateViewVerbose();`

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
| `accessControl` | `array` | (Optional) Which Customers and/or Accounts should have access to this template. |
| `accessControls` | `array` |  |
| `closing` | `string` | After the reward credential, a space to close the email message to the recipient. |
| `customerServiceMessage` | `string` | If left null, Tango Card's Customer Support contact information will be included. |
| `defaults` | `array` | If you want this template to be used at order time for the given Platform, Customer or Account when the Email Template Identifier (etid) is not provided with the order. |
| `etid` | `string` |  |
| `fromName` | `string` | The name that will appear in the From line of the email and the {from_name} in the text message. |
| `headerImage` | `string` | A Base64 encoded string of an image that will show as the header of the email. |
| `headerImageAltText` | `string` | The Alt Text for the Header Image in the email. |
| `messageBody` | `string` | The message body for the email. |
| `name` | `string` | A unique name to give the template. |
| `smsMessageBody` | `string` | The message body for the SMS. |
| `subject` | `string` | The Subject of the email. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the EmailTemplateViewVerbose record (throws on error).
$email_template_view_verbose = $client->EmailTemplateViewVerbose()->load(["etid" => "etid"]);
```

#### Example: List

```php
// list() returns an array of EmailTemplateViewVerbose records (throws on error).
$email_template_view_verboses = $client->EmailTemplateViewVerbose()->list();
```

#### Example: Create

```php
$email_template_view_verbose = $client->EmailTemplateViewVerbose()->create([
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


### EmbeddableResponseDto

Create an instance: `$embeddable_response_dto = $client->EmbeddableResponseDto();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the EmbeddableResponseDto record (throws on error).
$embeddable_response_dto = $client->EmbeddableResponseDto()->load(["reference_line_item_id" => "reference_line_item_id"]);
```


### ExchangeRatesWithDisclaimer

Create an instance: `$exchange_rates_with_disclaimer = $client->ExchangeRatesWithDisclaimer();`

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

```php
// list() returns an array of ExchangeRatesWithDisclaimer records (throws on error).
$exchange_rates_with_disclaimers = $client->ExchangeRatesWithDisclaimer()->list();
```


### LineItem

Create an instance: `$line_item = $client->LineItem();`

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
| `amountCharged` | `array` |  |
| `amountIssued` | `array` |  |
| `campaign` | `string` |  |
| `canCancel` | `bool` |  |
| `canFreeze` | `bool` |  |
| `customerIdentifier` | `string` |  |
| `dateIssued` | `string` |  |
| `deliveryMethod` | `string` |  |
| `deliveryStatus` | `string` |  |
| `emailStatus` | `string` |  |
| `etid` | `string` |  |
| `expirationDate` | `string` |  |
| `externalReferenceLineItemID` | `string` |  |
| `id` | `string` |  |
| `lineItemActionHistory` | `array` |  |
| `lineItemActionReason` | `string` |  |
| `lineItemErrors` | `array` | Errors related to the line item |
| `lineNumber` | `int` |  |
| `orderNotes` | `string` |  |
| `orderSource` | `string` |  |
| `orderStatus` | `string` |  |
| `ptid` | `string` |  |
| `purchaseOrderNumber` | `string` |  |
| `quantity` | `int` | quantity of line items |
| `recipient` | `array` |  |
| `redemptionHistory` | `array` |  |
| `referenceLineItemID` | `string` |  |
| `referenceOrderID` | `string` |  |
| `reissuedFromReferenceLineItemId` | `string` | Reissued from reference line item ID |
| `reissuedToReferenceLineItemId` | `string` | Reissued to reference line item ID |
| `remainingBalance` | `float` |  |
| `resendHistory` | `array` |  |
| `reward` | `array` |  |
| `rewardName` | `string` |  |
| `rewardStatus` | `string` |  |
| `rewardViewHistory` | `array` |  |
| `sender` | `array` |  |
| `status` | `string` |  |
| `utid` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the LineItem record (throws on error).
$line_item = $client->LineItem()->load(["id" => "line_item_id"]);
```

#### Example: List

```php
// list() returns an array of LineItem records (throws on error).
$line_items = $client->LineItem()->list();
```

#### Example: Create

```php
$line_item = $client->LineItem()->create([
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


### LowBalanceAlertListView

Create an instance: `$low_balance_alert_list_view = $client->LowBalanceAlertListView();`

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
| `balanceAlertNotification` | `array` |  |
| `balanceAlertThreshold` | `float` |  |
| `createdAt` | `string` |  |
| `customerIdentifier` | `string` |  |

#### Example: List

```php
// list() returns an array of LowBalanceAlertListView records (throws on error).
$low_balance_alert_list_views = $client->LowBalanceAlertListView()->list();
```


### LowBalanceAlertView

Create an instance: `$low_balance_alert_view = $client->LowBalanceAlertView();`

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
| `balanceAlertNotification` | `array` | Send low balance notification emails to the following address(es). |
| `balanceAlertThreshold` | `float` | The threshold amount that will trigger the low balance alert. |
| `createdAt` | `string` |  |
| `customerIdentifier` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the LowBalanceAlertView record (throws on error).
$low_balance_alert_view = $client->LowBalanceAlertView()->load(["account_id" => "account_id", "balance_alert_id" => "balance_alert_id", "customer_identifier" => "customer_identifier"]);
```

#### Example: Create

```php
$low_balance_alert_view = $client->LowBalanceAlertView()->create([
    "account_identifier" => null, // string
    "customer_identifier" => null, // string
]);
```


### MobileCountry

Create an instance: `$mobile_country = $client->MobileCountry();`

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

```php
// load() returns the ENTITY — call data_get() for the MobileCountry record (throws on error).
$mobile_country = $client->MobileCountry()->load();
```


### N14Webhook

Create an instance: `$n14_webhook = $client->N14Webhook();`

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
| `categories` | `array` | The categories the customer wants to subscribe to. |
| `createdAt` | `string` | The date and time the webhook was created. |
| `eventTypes` | `array` | The event types the customer wants to subscribe to. |
| `expiresAt` | `string` | The date and time the webhook expires. |
| `headers` | `array` | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `string` | The HMAC secret key used to sign the webhook payload. |
| `id` | `string` |  |
| `payloadVerificationMethod` | `string` | Method to verify webhook payload authenticity |
| `signingCertificate` | `string` | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `string` | The date and time when the webhook was last updated. |
| `url` | `string` | The URL of the customer's webhook listener. |
| `webhookId` | `string` | The ID of the webhook. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the N14Webhook record (throws on error).
$n14_webhook = $client->N14Webhook()->load(["webhook_id" => "webhook_id"]);
```

#### Example: List

```php
// list() returns an array of N14Webhook records (throws on error).
$n14_webhooks = $client->N14Webhook()->list();
```

#### Example: Create

```php
$n14_webhook = $client->N14Webhook()->create([
    "test_name" => null, // string
    "webhook_id" => null, // string
    "url" => null, // string
]);
```


### N1Customer

Create an instance: `$n1_customer = $client->N1Customer();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the N1Customer record (throws on error).
$n1_customer = $client->N1Customer()->load(["customer_identifier" => "customer_identifier"]);
```


### N2Account

Create an instance: `$n2_account = $client->N2Account();`


### N3Fund

Create an instance: `$n3_fund = $client->N3Fund();`


### N8LineItem

Create an instance: `$n8_line_item = $client->N8LineItem();`

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

Create an instance: `$n9_digital_template = $client->N9DigitalTemplate();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Order

Create an instance: `$order = $client->Order();`

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
| `amount` | `float` | Specify the face value of of the reward. |
| `amountCharged` | `array` |  |
| `asyncOrderEntity` | `array` |  |
| `campaign` | `string` | Optional. |
| `createdAt` | `string` |  |
| `customFields` | `array` | Optional. |
| `customerIdentifier` | `string` | Specify the customer associated with the order. |
| `deliveryMethod` | `string` | Specify delivery method for the order |
| `denomination` | `array` |  |
| `emailSubject` | `string` | Optional. |
| `etid` | `string` | Optional. |
| `expirationDate` | `string` | Optional for Promo Links, the exact calendar date the Promo Link will expire. |
| `externalRefID` | `string` | Optional. |
| `id` | `string` |  |
| `lineItemStatus` | `string` |  |
| `message` | `string` | Optional gift message |
| `notes` | `string` | Optional order notes. |
| `orderClientSource` | `string` |  |
| `orderExternalRefIdDupe` | `bool` |  |
| `orderStatus` | `string` |  |
| `ptid` | `string` | Only required for Printed Reward Links, the unique identifier for the Printed Reward Link Template provided in the Tango Portal on the Printed Template page. |
| `purchaseOrderNumber` | `string` | The Purchase Order Number associated with this order. |
| `recipient` | `array` | Required if deliveryMethod is EMAIL, PHONE, or ADDRESS. |
| `redemptionInstructions` | `string` |  |
| `referenceLineItemID` | `string` |  |
| `referenceOrderID` | `string` |  |
| `reward` | `array` |  |
| `rewardName` | `string` |  |
| `sendEmail` | `bool` | Deprecated Oct 1, 2025. |
| `sender` | `array` | Optional. |
| `status` | `string` |  |
| `utid` | `string` | The unique identifier for the reward you are sending as provided in the Get Catalog call |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Order record (throws on error).
$order = $client->Order()->load(["id" => "order_id"]);
```

#### Example: List

```php
// list() returns an array of Order records (throws on error).
$orders = $client->Order()->list();
```

#### Example: Create

```php
$order = $client->Order()->create([
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


### OrderViewSummary

Create an instance: `$order_view_summary = $client->OrderViewSummary();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `float` | Optional. |
| `deliveryMethod` | `string` | Optional. |
| `notes` | `string` | Optional order notes (up to 150 characters). |
| `otherReason` | `string` | Required when reasonCode is "OTHER", enter the reason why the line item is being reissued. |
| `reasonCode` | `string` | Required. |
| `recipient` | `array` | Optional. |

#### Example: Create

```php
$order_view_summary = $client->OrderViewSummary()->create([
    "reference_line_item_id" => null, // string
    "reasonCode" => null, // string
]);
```


### PrepaidCardInfo

Create an instance: `$prepaid_card_info = $client->PrepaidCardInfo();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `balance` | `array` |  |
| `card` | `array` |  |
| `comments` | `array` |  |
| `registration` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PrepaidCardInfo record (throws on error).
$prepaid_card_info = $client->PrepaidCardInfo()->load(["reference_line_item_id" => "reference_line_item_id"]);
```


### PrepaidCardTransaction

Create an instance: `$prepaid_card_transaction = $client->PrepaidCardTransaction();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `journal` | `array` |  |
| `page` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PrepaidCardTransaction record (throws on error).
$prepaid_card_transaction = $client->PrepaidCardTransaction()->load(["reference_line_item_id" => "reference_line_item_id"]);
```


### ReissueCard

Create an instance: `$reissue_card = $client->ReissueCard();`

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

```php
$reissue_card = $client->ReissueCard()->create([
    "id" => null, // string
    "reason" => null, // string
    "updatedBy" => null, // string
]);
```


### ReplacementReason

Create an instance: `$replacement_reason = $client->ReplacementReason();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `replacementReasons` | `array` | List of valid replacement reason codes. |

#### Example: List

```php
// list() returns an array of ReplacementReason records (throws on error).
$replacement_reasons = $client->ReplacementReason()->list();
```


### Resend

Create an instance: `$resend = $client->Resend();`

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

```php
$resend = $client->Resend()->create([
    "line_item_id" => null, // string
]);
```


### RewardReasonsMap

Create an instance: `$reward_reasons_map = $client->RewardReasonsMap();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `CANCEL` | `array` | Map of cancel reasons |
| `CANCEL_AND_REISSUE` | `array` | Map of cancel and reissue reasons |
| `FREEZE` | `array` | Map of freeze reasons |
| `UNFREEZE` | `array` | Map of unfreeze reasons |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the RewardReasonsMap record (throws on error).
$reward_reasons_map = $client->RewardReasonsMap()->load();
```


### TransferFund

Create an instance: `$transfer_fund = $client->TransferFund();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `float` | Specify the currency amount of the funds being transferred. |
| `externalRefID` | `string` | specify the external reference id to associate with this funding action. |
| `transferDate` | `string` |  |
| `transferFrom` | `array` | The accountIdentifier for the Account transferring funds from. |
| `transferNotes` | `string` | Optional transfer notes (up to 150 characters) |
| `transferTo` | `array` | The accountIdentifier for the Account transferring funds to. |
| `transferredAmount` | `float` |  |

#### Example: Create

```php
$transfer_fund = $client->TransferFund()->create([
    "amount" => null, // float
]);
```


### UpdateAccount

Create an instance: `$update_account = $client->UpdateAccount();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `registration` | `array` |  |
| `status` | `string` |  |
| `updatedBy` | `string` |  |

#### Example: Create

```php
$update_account = $client->UpdateAccount()->create([
    "id" => null, // string
    "registration" => null, // array
]);
```


### UpdateWebhookSubscriptionResponseView

Create an instance: `$update_webhook_subscription_response_view = $client->UpdateWebhookSubscriptionResponseView();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `array` | The categories the customer is subscribed to. |
| `createdAt` | `string` | The date and time the webhook was created. |
| `eventTypes` | `array` | The event types the customer is subscribed to. |
| `expiresAt` | `string` | The date and time the webhook expires. |
| `headers` | `array` | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `string` | The HMAC secret key used to sign the webhook payload. |
| `payloadVerificationMethod` | `string` | Method to verify webhook payload integrity |
| `signingCertificate` | `string` | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `string` | The date and time when the webhook was last updated. |
| `url` | `string` | The URL of the customer's webhook listener. |
| `webhookId` | `string` | The ID of the webhook. |


### Webhook

Create an instance: `$webhook = $client->Webhook();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `array` | The categories the customer wants to subscribe to. |
| `createdAt` | `string` | The date and time the webhook was created. |
| `eventTypes` | `array` | The event types the customer wants to subscribe to. |
| `expiresAt` | `string` | The date and time the webhook expires. |
| `headers` | `array` | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `string` | The HMAC secret key used to sign the webhook payload. |
| `id` | `string` |  |
| `payloadVerificationMethod` | `string` | Method to verify webhook payload integrity. |
| `signingCertificate` | `string` | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `string` | The date and time when the webhook was last updated. |
| `url` | `string` | The URL of the customer's webhook listener. |
| `webhookId` | `string` | The ID of the webhook. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Webhook record (throws on error).
$webhook = $client->Webhook()->load(["id" => "webhook_id"]);
```

#### Example: Create

```php
$webhook = $client->Webhook()->create([
    "id" => null, // string
]);
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

Features are the extension mechanism. A feature is a PHP class
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

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── tangocard_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`tangocard_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$rewardreasonsmap = $client->RewardReasonsMap();
$rewardreasonsmap->load();

// $rewardreasonsmap->data_get() now returns the rewardreasonsmap data from the last load
// $rewardreasonsmap->match_get() returns the last match criteria
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
