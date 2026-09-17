# Tangocard Golang SDK



The Golang SDK for the Tangocard API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Account(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/tangocard-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/tangocard-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/tangocard-sdk/go=../tangocard-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/tangocard-sdk/go"
)

func main() {
    client := sdk.NewTangocardSDK(map[string]any{
        "apikey": os.Getenv("TANGOCARD_APIKEY"),
    })

    // Load a single account — the value is the loaded record.
    account, err := client.Account(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(account)

    // Update a account.
    updated, err := client.Account(nil).Update(map[string]any{"id": "example_id", "customer_identifier": "example_customer_identifier", "accountIdentifier": "example_accountIdentifier"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(updated)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
rewardreasonsmap, err := client.RewardReasonsMap(nil).Load(nil, nil)
if err != nil {
    // handle err
    return
}
_ = rewardreasonsmap
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

rewardReasonsMap, err := client.RewardReasonsMap(nil).Load(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(rewardReasonsMap) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewTangocardSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewTangocardSDK

```go
func NewTangocardSDK(options map[string]any) *TangocardSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *TangocardSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### TangocardSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Account` | `(data map[string]any) TangocardEntity` | Create an Account entity instance. |
| `AddCommentEscalation` | `(data map[string]any) TangocardEntity` | Create an AddCommentEscalation entity instance. |
| `AllEventType` | `(data map[string]any) TangocardEntity` | Create an AllEventType entity instance. |
| `AsyncOrder` | `(data map[string]any) TangocardEntity` | Create an AsyncOrder entity instance. |
| `AsyncOrderDetailView` | `(data map[string]any) TangocardEntity` | Create an AsyncOrderDetailView entity instance. |
| `AsyncOrderLineItemsView` | `(data map[string]any) TangocardEntity` | Create an AsyncOrderLineItemsView entity instance. |
| `AsyncReasonCodesView` | `(data map[string]any) TangocardEntity` | Create an AsyncReasonCodesView entity instance. |
| `AsyncUpdateLineItemView` | `(data map[string]any) TangocardEntity` | Create an AsyncUpdateLineItemView entity instance. |
| `BalanceAlertView` | `(data map[string]any) TangocardEntity` | Create a BalanceAlertView entity instance. |
| `BrandCategoriesView` | `(data map[string]any) TangocardEntity` | Create a BrandCategoriesView entity instance. |
| `Catalog` | `(data map[string]any) TangocardEntity` | Create a Catalog entity instance. |
| `ChoiceProduct` | `(data map[string]any) TangocardEntity` | Create a ChoiceProduct entity instance. |
| `CountryViewSummary` | `(data map[string]any) TangocardEntity` | Create a CountryViewSummary entity instance. |
| `CreateAccountCriterion` | `(data map[string]any) TangocardEntity` | Create a CreateAccountCriterion entity instance. |
| `CreateCustomerCriterion` | `(data map[string]any) TangocardEntity` | Create a CreateCustomerCriterion entity instance. |
| `CredentialTypeView` | `(data map[string]any) TangocardEntity` | Create a CredentialTypeView entity instance. |
| `CreditCard` | `(data map[string]any) TangocardEntity` | Create a CreditCard entity instance. |
| `CreditCardDeposit` | `(data map[string]any) TangocardEntity` | Create a CreditCardDeposit entity instance. |
| `CreditCardUnregister` | `(data map[string]any) TangocardEntity` | Create a CreditCardUnregister entity instance. |
| `Customer` | `(data map[string]any) TangocardEntity` | Create a Customer entity instance. |
| `EmailTemplateListView` | `(data map[string]any) TangocardEntity` | Create an EmailTemplateListView entity instance. |
| `EmailTemplateViewVerbose` | `(data map[string]any) TangocardEntity` | Create an EmailTemplateViewVerbose entity instance. |
| `EmbeddableResponseDto` | `(data map[string]any) TangocardEntity` | Create an EmbeddableResponseDto entity instance. |
| `ExchangeRatesWithDisclaimer` | `(data map[string]any) TangocardEntity` | Create an ExchangeRatesWithDisclaimer entity instance. |
| `LineItem` | `(data map[string]any) TangocardEntity` | Create a LineItem entity instance. |
| `LowBalanceAlertListView` | `(data map[string]any) TangocardEntity` | Create a LowBalanceAlertListView entity instance. |
| `LowBalanceAlertView` | `(data map[string]any) TangocardEntity` | Create a LowBalanceAlertView entity instance. |
| `MobileCountry` | `(data map[string]any) TangocardEntity` | Create a MobileCountry entity instance. |
| `N14Webhook` | `(data map[string]any) TangocardEntity` | Create a N14Webhook entity instance. |
| `N1Customer` | `(data map[string]any) TangocardEntity` | Create a N1Customer entity instance. |
| `N2Account` | `(data map[string]any) TangocardEntity` | Create a N2Account entity instance. |
| `N3Fund` | `(data map[string]any) TangocardEntity` | Create a N3Fund entity instance. |
| `N8LineItem` | `(data map[string]any) TangocardEntity` | Create a N8LineItem entity instance. |
| `N9DigitalTemplate` | `(data map[string]any) TangocardEntity` | Create a N9DigitalTemplate entity instance. |
| `Order` | `(data map[string]any) TangocardEntity` | Create an Order entity instance. |
| `OrderViewSummary` | `(data map[string]any) TangocardEntity` | Create an OrderViewSummary entity instance. |
| `PrepaidCardInfo` | `(data map[string]any) TangocardEntity` | Create a PrepaidCardInfo entity instance. |
| `PrepaidCardTransaction` | `(data map[string]any) TangocardEntity` | Create a PrepaidCardTransaction entity instance. |
| `ReissueCard` | `(data map[string]any) TangocardEntity` | Create a ReissueCard entity instance. |
| `ReplacementReason` | `(data map[string]any) TangocardEntity` | Create a ReplacementReason entity instance. |
| `Resend` | `(data map[string]any) TangocardEntity` | Create a Resend entity instance. |
| `RewardReasonsMap` | `(data map[string]any) TangocardEntity` | Create a RewardReasonsMap entity instance. |
| `TransferFund` | `(data map[string]any) TangocardEntity` | Create a TransferFund entity instance. |
| `UpdateAccount` | `(data map[string]any) TangocardEntity` | Create an UpdateAccount entity instance. |
| `UpdateWebhookSubscriptionResponseView` | `(data map[string]any) TangocardEntity` | Create an UpdateWebhookSubscriptionResponseView entity instance. |
| `Webhook` | `(data map[string]any) TangocardEntity` | Create a Webhook entity instance. |

### Entity interface (TangocardEntity)

All entities implement the `TangocardEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    account, err := client.Account(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil { /* handle */ }
    // account is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Account

| Field | Description |
| --- | --- |
| `"accountIdentifier"` |  |
| `"accountNumber"` |  |
| `"contactEmail"` | optional, an email address for a designated representative for this account. |
| `"createdAt"` |  |
| `"currencyCode"` |  |
| `"currentBalance"` |  |
| `"displayName"` | optional, a friendly name for this account. |
| `"fundingNotification"` | optional, send funding notification emails to the following address(es). |
| `"id"` |  |
| `"status"` |  |

Operations: Load, Update.

API path: `/accounts`

#### AddCommentEscalation

| Field | Description |
| --- | --- |
| `"assignee"` | Assignee ID. |
| `"commentText"` | Free-text comment to add to the prepaid card. |
| `"id"` |  |
| `"inquiryCategoryCode"` | Inquiry category code. |
| `"inquiryIdNumber"` | Inquiry ID number. |
| `"inquirySource"` | Origination source identifier (e.g. |
| `"inquiryTypeCode"` | Inquiry type code. |
| `"issueDescription"` | Short description of the issue. |
| `"status"` | Status of the inquiry (e.g. |
| `"userId"` | Agent or CSR user ID. |

Operations: Create.

API path: `/prepaidCardService/addCommentEscalation/{referenceLineItemID}`

#### AllEventType

| Field | Description |
| --- | --- |
| `"category"` | The category of events can be subscribed to. |
| `"eventTypes"` | The event types that can be subscribed to. |

Operations: List.

API path: `/webhooks/eventtypes`

#### AsyncOrder

| Field | Description |
| --- | --- |
| `"accountIdentifier"` | specify the account this order will be deducted from |
| `"accountNumber"` |  |
| `"amountCharged"` | Initial value and the total charged amount on the account |
| `"campaign"` | Optional. |
| `"createdAt"` |  |
| `"customerIdentifier"` | specify the customer associated with the order. |
| `"duplicateLineItemRefIds"` | If any duplicate duplicateLineItemRefIds exist in the request |
| `"externalRefID"` | Required. |
| `"failedLineItems"` | Failed line items list (business validations) |
| `"fulfillBy"` |  |
| `"lineItems"` | Line Items of the bulk order a required field |
| `"notes"` | Optional order notes. |
| `"orderStatus"` |  |
| `"purchaseOrderNumber"` | The Purchase Order Number associated with this order. |
| `"referenceOrderID"` |  |
| `"sender"` | Optional. |
| `"status"` | This status reflects about cart status or validation status based on the processing |
| `"totalLineItems"` | Total number of line items submitted in the request |
| `"totalLineItemsRows"` |  |

Operations: Create, List.

API path: `/asyncOrders`

#### AsyncOrderDetailView

| Field | Description |
| --- | --- |
| `"accountIdentifier"` | Account identifier |
| `"amountCharged"` | Initial value and the total charged amount on the account |
| `"campaign"` | Campaign name |
| `"completedAt"` | Order completion timestamp |
| `"createdAt"` | Order creation timestamp |
| `"customerIdentifier"` | Customer identifier |
| `"externalRefID"` | External reference ID provided by client |
| `"id"` |  |
| `"lineItems"` | list of line items |
| `"notes"` | Order notes |
| `"orderErrors"` | Order level errors |
| `"orderStatus"` | Current status of the order |
| `"pagination"` | Pagination information |
| `"purchaseOrderNumber"` | Purchase order number |
| `"referenceOrderID"` | Internal reference order ID |
| `"sender"` | Sender information |
| `"totalLineItems"` | Total number of line items |

Operations: Load, Update.

API path: `/asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}`

#### AsyncOrderLineItemsView

| Field | Description |
| --- | --- |
| `"accountIdentifier"` |  |
| `"amountCharged"` | Initial value and the total charged amount on the account |
| `"campaign"` |  |
| `"customerIdentifier"` |  |
| `"externalRefID"` |  |
| `"lineItems"` | The List of Line Items for the Async Order. |
| `"orderErrors"` | The List of Errors for the Async Order. |
| `"orderNotes"` |  |
| `"orderStatus"` |  |
| `"pagination"` | The cursor for pagination of the async order line items. |
| `"purchaseOrderNumber"` |  |
| `"referenceOrderID"` |  |
| `"sender"` |  |

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
| `"deliveryDate"` | Optional. |
| `"lineItemNote"` | Optional line item notes (up to 150 characters) |
| `"senderInfo"` | Optional. |

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
| `"description"` |  |
| `"identifier"` |  |

Operations: List.

API path: `/brandCategories`

#### Catalog

| Field | Description |
| --- | --- |
| `"barcodeType"` |  |
| `"brandKey"` |  |
| `"brandName"` |  |
| `"brandRequirements"` |  |
| `"categories"` |  |
| `"createdDate"` |  |
| `"description"` |  |
| `"disclaimer"` |  |
| `"imageUrls"` |  |
| `"items"` |  |
| `"lastUpdateDate"` |  |
| `"shortDescription"` |  |
| `"status"` |  |
| `"terms"` |  |

Operations: List.

API path: `/choiceProducts/{choiceProductUtid}/catalog`

#### ChoiceProduct

| Field | Description |
| --- | --- |
| `"countries"` |  |
| `"currencyCode"` |  |
| `"id"` |  |
| `"rewardName"` |  |
| `"utid"` |  |

Operations: List, Load.

API path: `/choiceProducts`

#### CountryViewSummary

| Field | Description |
| --- | --- |
| `"countryName"` |  |
| `"preferredCurrency"` |  |
| `"threeLetterCode"` |  |
| `"twoLetterCode"` |  |

Operations: Load.

API path: `/rewardCountries`

#### CreateAccountCriterion

| Field | Description |
| --- | --- |
| `"accountIdentifier"` | A unique identifier for this account. |
| `"contactEmail"` | An email address for a designated representative for this account. |
| `"currencyCode"` | The currency this account will accept for deposits/withdraws. |
| `"displayName"` | A friendly name for this account. |
| `"fundingNotification"` | optional, send funding notification emails to the following address(es) |

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
| `"credentialType"` |  |
| `"description"` |  |

Operations: List.

API path: `/credentialtypes`

#### CreditCard

| Field | Description |
| --- | --- |
| `"accountIdentifier"` | specify the account this credit card is associated with |
| `"accountNumber"` |  |
| `"activationDate"` |  |
| `"billingAddress"` | required Enter the billing address information for the credit card that is being registered |
| `"contactInformation"` | Optional. |
| `"createdDate"` |  |
| `"creditCard"` | required Enter the credit card details that is being registered |
| `"customerIdentifier"` | specify the customer associated with the credit card. |
| `"expirationDate"` |  |
| `"id"` |  |
| `"ipAddress"` | specify the The IP address of the person adding the credit card |
| `"label"` | specify a label for the credit card |
| `"lastFourDigits"` |  |
| `"status"` |  |
| `"token"` |  |

Operations: Create, Load.

API path: `/creditCards`

#### CreditCardDeposit

| Field | Description |
| --- | --- |
| `"accountIdentifier"` | specify the account this credit card is associated with |
| `"accountNumber"` |  |
| `"amount"` | specify the amount to fund in USD |
| `"amountCharged"` |  |
| `"createdDate"` |  |
| `"creditCardToken"` | specify the credit card token to fund with |
| `"customerIdentifier"` | specify the customer associated with the credit card. |
| `"externalRefID"` | specify the external reference id to associate with this funding action. |
| `"feePercent"` |  |
| `"id"` |  |
| `"referenceDepositID"` |  |
| `"status"` |  |

Operations: Create, Load.

API path: `/creditCardDeposits`

#### CreditCardUnregister

| Field | Description |
| --- | --- |
| `"accountIdentifier"` | Specify the account this credit card is associated with. |
| `"createdDate"` |  |
| `"creditCardToken"` | Specify the credit card token to unregister. |
| `"customerIdentifier"` | Specify the customer associated with the credit card. |
| `"message"` |  |
| `"token"` |  |

Operations: Create.

API path: `/creditCardUnregisters`

#### Customer

| Field | Description |
| --- | --- |
| `"accounts"` |  |
| `"createdAt"` |  |
| `"customerIdentifier"` | A unique identifier for this customer. |
| `"displayName"` | A friendly name for this customer. |
| `"id"` |  |
| `"status"` |  |

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
| `"accentColor"` | A Hex color value, six hexadecimal digits preceded by a pound sign, used as an accent in the email. |
| `"accessControl"` | (Optional) Which Customers and/or Accounts should have access to this template. |
| `"accessControls"` |  |
| `"closing"` | After the reward credential, a space to close the email message to the recipient. |
| `"customerServiceMessage"` | If left null, Tango Card's Customer Support contact information will be included. |
| `"defaults"` | If you want this template to be used at order time for the given Platform, Customer or Account when the Email Template Identifier (etid) is not provided with the order. |
| `"etid"` |  |
| `"fromName"` | The name that will appear in the From line of the email and the {from_name} in the text message. |
| `"headerImage"` | A Base64 encoded string of an image that will show as the header of the email. |
| `"headerImageAltText"` | The Alt Text for the Header Image in the email. |
| `"messageBody"` | The message body for the email. |
| `"name"` | A unique name to give the template. |
| `"smsMessageBody"` | The message body for the SMS. |
| `"subject"` | The Subject of the email. |

Operations: Create, List, Load, Update.

API path: `/digitalTemplates`

#### EmbeddableResponseDto

| Field | Description |
| --- | --- |
| `"url"` |  |

Operations: Load.

API path: `/lineItems/{referenceLineItemID}/embeddedUrl`

#### ExchangeRatesWithDisclaimer

| Field | Description |
| --- | --- |
| `"baseCurrency"` |  |
| `"baseFx"` |  |
| `"lastModifiedDate"` |  |
| `"rewardCurrency"` |  |

Operations: List.

API path: `/exchangerates`

#### LineItem

| Field | Description |
| --- | --- |
| `"accountIdentifier"` |  |
| `"accountNumber"` |  |
| `"amountCharged"` |  |
| `"amountIssued"` |  |
| `"campaign"` |  |
| `"canCancel"` |  |
| `"canFreeze"` |  |
| `"customerIdentifier"` |  |
| `"dateIssued"` |  |
| `"deliveryMethod"` |  |
| `"deliveryStatus"` |  |
| `"emailStatus"` |  |
| `"etid"` |  |
| `"expirationDate"` |  |
| `"externalReferenceLineItemID"` |  |
| `"id"` |  |
| `"lineItemActionHistory"` |  |
| `"lineItemActionReason"` |  |
| `"lineItemErrors"` | Errors related to the line item |
| `"lineNumber"` |  |
| `"orderNotes"` |  |
| `"orderSource"` |  |
| `"orderStatus"` |  |
| `"ptid"` |  |
| `"purchaseOrderNumber"` |  |
| `"quantity"` | quantity of line items |
| `"recipient"` |  |
| `"redemptionHistory"` |  |
| `"referenceLineItemID"` |  |
| `"referenceOrderID"` |  |
| `"reissuedFromReferenceLineItemId"` | Reissued from reference line item ID |
| `"reissuedToReferenceLineItemId"` | Reissued to reference line item ID |
| `"remainingBalance"` |  |
| `"resendHistory"` |  |
| `"reward"` |  |
| `"rewardName"` |  |
| `"rewardStatus"` |  |
| `"rewardViewHistory"` |  |
| `"sender"` |  |
| `"status"` |  |
| `"utid"` |  |

Operations: Create, List, Load.

API path: `/lineItems/{referenceLineItemID}/cancel`

#### LowBalanceAlertListView

| Field | Description |
| --- | --- |
| `"accountIdentifier"` |  |
| `"balanceAlertDisplayName"` |  |
| `"balanceAlertID"` |  |
| `"balanceAlertNotification"` |  |
| `"balanceAlertThreshold"` |  |
| `"createdAt"` |  |
| `"customerIdentifier"` |  |

Operations: List.

API path: `/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance`

#### LowBalanceAlertView

| Field | Description |
| --- | --- |
| `"accountIdentifier"` |  |
| `"balanceAlertDisplayName"` | A friendly name for this low balance alert (will be displayed in the Tango Portal). |
| `"balanceAlertID"` |  |
| `"balanceAlertNotification"` | Send low balance notification emails to the following address(es). |
| `"balanceAlertThreshold"` | The threshold amount that will trigger the low balance alert. |
| `"createdAt"` |  |
| `"customerIdentifier"` |  |

Operations: Create, Load, Update.

API path: `/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance`

#### MobileCountry

| Field | Description |
| --- | --- |
| `"countryCode"` |  |
| `"countryName"` |  |
| `"isoCode"` |  |
| `"languageCode"` |  |

Operations: Load.

API path: `/mobileCountries`

#### N14Webhook

| Field | Description |
| --- | --- |
| `"categories"` | The categories the customer wants to subscribe to. |
| `"createdAt"` | The date and time the webhook was created. |
| `"eventTypes"` | The event types the customer wants to subscribe to. |
| `"expiresAt"` | The date and time the webhook expires. |
| `"headers"` | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `"hmacSharedSecretKey"` | The HMAC secret key used to sign the webhook payload. |
| `"id"` |  |
| `"payloadVerificationMethod"` | Method to verify webhook payload authenticity |
| `"signingCertificate"` | The public X509 certificate used to sign the webhook payload. |
| `"updatedAt"` | The date and time when the webhook was last updated. |
| `"url"` | The URL of the customer's webhook listener. |
| `"webhookId"` | The ID of the webhook. |

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
| `"campaign"` | optional campaign that may be used to administratively categorize a specific order. |
| `"id"` |  |
| `"orderNotes"` | Optional order notes (up to 150 characters) |
| `"purchaseOrderNumber"` | The Purchase Order Number associated with this order. |

Operations: Update.

API path: `/lineItems/{referenceLineItemID}`

#### N9DigitalTemplate

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/digitalTemplates/{etid}`

#### Order

| Field | Description |
| --- | --- |
| `"accountIdentifier"` | Specify the account this order will be deducted from |
| `"accountNumber"` |  |
| `"amount"` | Specify the face value of of the reward. |
| `"amountCharged"` |  |
| `"asyncOrderEntity"` |  |
| `"campaign"` | Optional. |
| `"createdAt"` |  |
| `"customFields"` | Optional. |
| `"customerIdentifier"` | Specify the customer associated with the order. |
| `"deliveryMethod"` | Specify delivery method for the order |
| `"denomination"` |  |
| `"emailSubject"` | Optional. |
| `"etid"` | Optional. |
| `"expirationDate"` | Optional for Promo Links, the exact calendar date the Promo Link will expire. |
| `"externalRefID"` | Optional. |
| `"id"` |  |
| `"lineItemStatus"` |  |
| `"message"` | Optional gift message |
| `"notes"` | Optional order notes. |
| `"orderClientSource"` |  |
| `"orderExternalRefIdDupe"` |  |
| `"orderStatus"` |  |
| `"ptid"` | Only required for Printed Reward Links, the unique identifier for the Printed Reward Link Template provided in the Tango Portal on the Printed Template page. |
| `"purchaseOrderNumber"` | The Purchase Order Number associated with this order. |
| `"recipient"` | Required if deliveryMethod is EMAIL, PHONE, or ADDRESS. |
| `"redemptionInstructions"` |  |
| `"referenceLineItemID"` |  |
| `"referenceOrderID"` |  |
| `"reward"` |  |
| `"rewardName"` |  |
| `"sendEmail"` | Deprecated Oct 1, 2025. |
| `"sender"` | Optional. |
| `"status"` |  |
| `"utid"` | The unique identifier for the reward you are sending as provided in the Get Catalog call |

Operations: Create, List, Load.

API path: `/orders`

#### OrderViewSummary

| Field | Description |
| --- | --- |
| `"amount"` | Optional. |
| `"deliveryMethod"` | Optional. |
| `"notes"` | Optional order notes (up to 150 characters). |
| `"otherReason"` | Required when reasonCode is "OTHER", enter the reason why the line item is being reissued. |
| `"reasonCode"` | Required. |
| `"recipient"` | Optional. |

Operations: Create.

API path: `/lineItems/{referenceLineItemID}/reissue`

#### PrepaidCardInfo

| Field | Description |
| --- | --- |
| `"balance"` |  |
| `"card"` |  |
| `"comments"` |  |
| `"registration"` |  |

Operations: Load.

API path: `/prepaidCardService/getCardInfo/{referenceLineItemID}`

#### PrepaidCardTransaction

| Field | Description |
| --- | --- |
| `"journal"` |  |
| `"page"` |  |

Operations: Load.

API path: `/prepaidCardService/getCardTransactions/{referenceLineItemID}`

#### ReissueCard

| Field | Description |
| --- | --- |
| `"commentText"` | Optional comment for the card replacement. |
| `"id"` |  |
| `"reason"` | Reason for the card replacement. |
| `"status"` | Status of the reissue request. |
| `"updatedBy"` | Identifier of the agent initiating the request. |

Operations: Create.

API path: `/prepaidCardService/reissueCard/{referenceLineItemID}`

#### ReplacementReason

| Field | Description |
| --- | --- |
| `"replacementReasons"` | List of valid replacement reason codes. |

Operations: List.

API path: `/prepaidCardService/replacementReasons`

#### Resend

| Field | Description |
| --- | --- |
| `"newDeliveryMethod"` | The delivery method used to re-deliver the reward. |
| `"newEmail"` | A new email address to re-deliver this order to. |
| `"newEtid"` | A new etid used to re-deliver an order. |
| `"newMobile"` | A new mobile number to use for resending an order. |
| `"newMobileNumber"` | A new phone number to re-deliver this order to. |
| `"otherReason"` | Required when lineItemResendReasonCode is "OTHER", enter the reason why the line item is being RESENT |
| `"reasonCode"` | Enter the reason why this line item is being RESENT (respectively) |

Operations: Create.

API path: `/lineItems/{referenceLineItemId}/resends`

#### RewardReasonsMap

| Field | Description |
| --- | --- |
| `"CANCEL"` | Map of cancel reasons |
| `"CANCEL_AND_REISSUE"` | Map of cancel and reissue reasons |
| `"FREEZE"` | Map of freeze reasons |
| `"UNFREEZE"` | Map of unfreeze reasons |

Operations: Load.

API path: `/lineItems/reasonCodes`

#### TransferFund

| Field | Description |
| --- | --- |
| `"amount"` | Specify the currency amount of the funds being transferred. |
| `"externalRefID"` | specify the external reference id to associate with this funding action. |
| `"transferDate"` |  |
| `"transferFrom"` | The accountIdentifier for the Account transferring funds from. |
| `"transferNotes"` | Optional transfer notes (up to 150 characters) |
| `"transferTo"` | The accountIdentifier for the Account transferring funds to. |
| `"transferredAmount"` |  |

Operations: Create.

API path: `/transferFunds`

#### UpdateAccount

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"registration"` |  |
| `"status"` |  |
| `"updatedBy"` |  |

Operations: Create.

API path: `/prepaidCardService/updateAccount/{referenceLineItemID}`

#### UpdateWebhookSubscriptionResponseView

| Field | Description |
| --- | --- |
| `"categories"` | The categories the customer is subscribed to. |
| `"createdAt"` | The date and time the webhook was created. |
| `"eventTypes"` | The event types the customer is subscribed to. |
| `"expiresAt"` | The date and time the webhook expires. |
| `"headers"` | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `"hmacSharedSecretKey"` | The HMAC secret key used to sign the webhook payload. |
| `"payloadVerificationMethod"` | Method to verify webhook payload integrity |
| `"signingCertificate"` | The public X509 certificate used to sign the webhook payload. |
| `"updatedAt"` | The date and time when the webhook was last updated. |
| `"url"` | The URL of the customer's webhook listener. |
| `"webhookId"` | The ID of the webhook. |

Operations: Update.

API path: `/webhooks/{webhookId}`

#### Webhook

| Field | Description |
| --- | --- |
| `"categories"` | The categories the customer wants to subscribe to. |
| `"createdAt"` | The date and time the webhook was created. |
| `"eventTypes"` | The event types the customer wants to subscribe to. |
| `"expiresAt"` | The date and time the webhook expires. |
| `"headers"` | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `"hmacSharedSecretKey"` | The HMAC secret key used to sign the webhook payload. |
| `"id"` |  |
| `"payloadVerificationMethod"` | Method to verify webhook payload integrity. |
| `"signingCertificate"` | The public X509 certificate used to sign the webhook payload. |
| `"updatedAt"` | The date and time when the webhook was last updated. |
| `"url"` | The URL of the customer's webhook listener. |
| `"webhookId"` | The ID of the webhook. |

Operations: Create, Load.

API path: `/webhooks/{webhookId}/replay`



## Entities


### Account

Create an instance: `account := client.Account(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` |  |
| `accountNumber` | `string` |  |
| `contactEmail` | `string` | optional, an email address for a designated representative for this account. |
| `createdAt` | `string` |  |
| `currencyCode` | `string` |  |
| `currentBalance` | `float64` |  |
| `displayName` | `string` | optional, a friendly name for this account. |
| `fundingNotification` | `[]any` | optional, send funding notification emails to the following address(es). |
| `id` | `string` |  |
| `status` | `string` |  |

#### Example: Load

```go
account, err := client.Account(nil).Load(map[string]any{"id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(account) // the loaded record
```


### AddCommentEscalation

Create an instance: `addCommentEscalation := client.AddCommentEscalation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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


### AllEventType

Create an instance: `allEventType := client.AllEventType(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` | The category of events can be subscribed to. |
| `eventTypes` | `[]any` | The event types that can be subscribed to. |

#### Example: List

```go
allEventTypes, err := client.AllEventType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(allEventTypes) // the array of records
```


### AsyncOrder

Create an instance: `asyncOrder := client.AsyncOrder(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` | specify the account this order will be deducted from |
| `accountNumber` | `string` |  |
| `amountCharged` | `map[string]any` | Initial value and the total charged amount on the account |
| `campaign` | `string` | Optional. |
| `createdAt` | `string` |  |
| `customerIdentifier` | `string` | specify the customer associated with the order. |
| `duplicateLineItemRefIds` | `map[string]any` | If any duplicate duplicateLineItemRefIds exist in the request |
| `externalRefID` | `string` | Required. |
| `failedLineItems` | `[]any` | Failed line items list (business validations) |
| `fulfillBy` | `string` |  |
| `lineItems` | `[]any` | Line Items of the bulk order a required field |
| `notes` | `string` | Optional order notes. |
| `orderStatus` | `string` |  |
| `purchaseOrderNumber` | `string` | The Purchase Order Number associated with this order. |
| `referenceOrderID` | `string` |  |
| `sender` | `map[string]any` | Optional. |
| `status` | `string` | This status reflects about cart status or validation status based on the processing |
| `totalLineItems` | `int` | Total number of line items submitted in the request |
| `totalLineItemsRows` | `int` |  |

#### Example: List

```go
asyncOrders, err := client.AsyncOrder(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(asyncOrders) // the array of records
```

#### Example: Create

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


### AsyncOrderDetailView

Create an instance: `asyncOrderDetailView := client.AsyncOrderDetailView(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` | Account identifier |
| `amountCharged` | `map[string]any` | Initial value and the total charged amount on the account |
| `campaign` | `string` | Campaign name |
| `completedAt` | `string` | Order completion timestamp |
| `createdAt` | `string` | Order creation timestamp |
| `customerIdentifier` | `string` | Customer identifier |
| `externalRefID` | `string` | External reference ID provided by client |
| `id` | `string` |  |
| `lineItems` | `[]any` | list of line items |
| `notes` | `string` | Order notes |
| `orderErrors` | `[]any` | Order level errors |
| `orderStatus` | `string` | Current status of the order |
| `pagination` | `map[string]any` | Pagination information |
| `purchaseOrderNumber` | `string` | Purchase order number |
| `referenceOrderID` | `string` | Internal reference order ID |
| `sender` | `map[string]any` | Sender information |
| `totalLineItems` | `int` | Total number of line items |

#### Example: Load

```go
asyncOrderDetailView, err := client.AsyncOrderDetailView(nil).Load(map[string]any{"account_identifier": "account_identifier", "customer_identifier": "customer_identifier", "external_ref_id": "external_ref_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(asyncOrderDetailView) // the loaded record
```


### AsyncOrderLineItemsView

Create an instance: `asyncOrderLineItemsView := client.AsyncOrderLineItemsView(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` |  |
| `amountCharged` | `map[string]any` | Initial value and the total charged amount on the account |
| `campaign` | `string` |  |
| `customerIdentifier` | `string` |  |
| `externalRefID` | `string` |  |
| `lineItems` | `[]any` | The List of Line Items for the Async Order. |
| `orderErrors` | `[]any` | The List of Errors for the Async Order. |
| `orderNotes` | `string` |  |
| `orderStatus` | `string` |  |
| `pagination` | `map[string]any` | The cursor for pagination of the async order line items. |
| `purchaseOrderNumber` | `string` |  |
| `referenceOrderID` | `string` |  |
| `sender` | `map[string]any` |  |

#### Example: List

```go
asyncOrderLineItemsViews, err := client.AsyncOrderLineItemsView(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(asyncOrderLineItemsViews) // the array of records
```


### AsyncReasonCodesView

Create an instance: `asyncReasonCodesView := client.AsyncReasonCodesView(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
asyncReasonCodesView, err := client.AsyncReasonCodesView(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(asyncReasonCodesView) // the loaded record
```


### AsyncUpdateLineItemView

Create an instance: `asyncUpdateLineItemView := client.AsyncUpdateLineItemView(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deliveryDate` | `string` | Optional. |
| `lineItemNote` | `string` | Optional line item notes (up to 150 characters) |
| `senderInfo` | `map[string]any` | Optional. |


### BalanceAlertView

Create an instance: `balanceAlertView := client.BalanceAlertView(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### BrandCategoriesView

Create an instance: `brandCategoriesView := client.BrandCategoriesView(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `identifier` | `string` |  |

#### Example: List

```go
brandCategoriesViews, err := client.BrandCategoriesView(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(brandCategoriesViews) // the array of records
```


### Catalog

Create an instance: `catalog := client.Catalog(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `barcodeType` | `string` |  |
| `brandKey` | `string` |  |
| `brandName` | `string` |  |
| `brandRequirements` | `map[string]any` |  |
| `categories` | `[]any` |  |
| `createdDate` | `string` |  |
| `description` | `string` |  |
| `disclaimer` | `string` |  |
| `imageUrls` | `map[string]any` |  |
| `items` | `[]any` |  |
| `lastUpdateDate` | `string` |  |
| `shortDescription` | `string` |  |
| `status` | `string` |  |
| `terms` | `string` |  |

#### Example: List

```go
catalogs, err := client.Catalog(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(catalogs) // the array of records
```


### ChoiceProduct

Create an instance: `choiceProduct := client.ChoiceProduct(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `countries` | `[]any` |  |
| `currencyCode` | `string` |  |
| `id` | `string` |  |
| `rewardName` | `string` |  |
| `utid` | `string` |  |

#### Example: Load

```go
choiceProduct, err := client.ChoiceProduct(nil).Load(map[string]any{"id": "choice_product_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(choiceProduct) // the loaded record
```

#### Example: List

```go
choiceProducts, err := client.ChoiceProduct(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(choiceProducts) // the array of records
```


### CountryViewSummary

Create an instance: `countryViewSummary := client.CountryViewSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `countryName` | `string` |  |
| `preferredCurrency` | `string` |  |
| `threeLetterCode` | `string` |  |
| `twoLetterCode` | `string` |  |

#### Example: Load

```go
countryViewSummary, err := client.CountryViewSummary(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(countryViewSummary) // the loaded record
```


### CreateAccountCriterion

Create an instance: `createAccountCriterion := client.CreateAccountCriterion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` | A unique identifier for this account. |
| `contactEmail` | `string` | An email address for a designated representative for this account. |
| `currencyCode` | `string` | The currency this account will accept for deposits/withdraws. |
| `displayName` | `string` | A friendly name for this account. |
| `fundingNotification` | `[]any` | optional, send funding notification emails to the following address(es) |

#### Example: Create

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


### CreateCustomerCriterion

Create an instance: `createCustomerCriterion := client.CreateCustomerCriterion(nil)`


### CredentialTypeView

Create an instance: `credentialTypeView := client.CredentialTypeView(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `credentialType` | `string` |  |
| `description` | `string` |  |

#### Example: List

```go
credentialTypeViews, err := client.CredentialTypeView(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(credentialTypeViews) // the array of records
```


### CreditCard

Create an instance: `creditCard := client.CreditCard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` | specify the account this credit card is associated with |
| `accountNumber` | `string` |  |
| `activationDate` | `string` |  |
| `billingAddress` | `map[string]any` | required Enter the billing address information for the credit card that is being registered |
| `contactInformation` | `[]any` | Optional. |
| `createdDate` | `string` |  |
| `creditCard` | `map[string]any` | required Enter the credit card details that is being registered |
| `customerIdentifier` | `string` | specify the customer associated with the credit card. |
| `expirationDate` | `string` |  |
| `id` | `string` |  |
| `ipAddress` | `string` | specify the The IP address of the person adding the credit card |
| `label` | `string` | specify a label for the credit card |
| `lastFourDigits` | `string` |  |
| `status` | `string` |  |
| `token` | `string` |  |

#### Example: Load

```go
creditCard, err := client.CreditCard(nil).Load(map[string]any{"id": "credit_card_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(creditCard) // the loaded record
```

#### Example: Create

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


### CreditCardDeposit

Create an instance: `creditCardDeposit := client.CreditCardDeposit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` | specify the account this credit card is associated with |
| `accountNumber` | `string` |  |
| `amount` | `float64` | specify the amount to fund in USD |
| `amountCharged` | `float64` |  |
| `createdDate` | `string` |  |
| `creditCardToken` | `string` | specify the credit card token to fund with |
| `customerIdentifier` | `string` | specify the customer associated with the credit card. |
| `externalRefID` | `string` | specify the external reference id to associate with this funding action. |
| `feePercent` | `float64` |  |
| `id` | `string` |  |
| `referenceDepositID` | `string` |  |
| `status` | `string` |  |

#### Example: Load

```go
creditCardDeposit, err := client.CreditCardDeposit(nil).Load(map[string]any{"id": "credit_card_deposit_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(creditCardDeposit) // the loaded record
```

#### Example: Create

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


### CreditCardUnregister

Create an instance: `creditCardUnregister := client.CreditCardUnregister(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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


### Customer

Create an instance: `customer := client.Customer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accounts` | `[]any` |  |
| `createdAt` | `string` |  |
| `customerIdentifier` | `string` | A unique identifier for this customer. |
| `displayName` | `string` | A friendly name for this customer. |
| `id` | `string` |  |
| `status` | `string` |  |

#### Example: Load

```go
customer, err := client.Customer(nil).Load(map[string]any{"id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customer) // the loaded record
```

#### Example: List

```go
customers, err := client.Customer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(customers) // the array of records
```

#### Example: Create

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


### EmailTemplateListView

Create an instance: `emailTemplateListView := client.EmailTemplateListView(nil)`


### EmailTemplateViewVerbose

Create an instance: `emailTemplateViewVerbose := client.EmailTemplateViewVerbose(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accentColor` | `string` | A Hex color value, six hexadecimal digits preceded by a pound sign, used as an accent in the email. |
| `accessControl` | `[]any` | (Optional) Which Customers and/or Accounts should have access to this template. |
| `accessControls` | `[]any` |  |
| `closing` | `string` | After the reward credential, a space to close the email message to the recipient. |
| `customerServiceMessage` | `string` | If left null, Tango Card's Customer Support contact information will be included. |
| `defaults` | `[]any` | If you want this template to be used at order time for the given Platform, Customer or Account when the Email Template Identifier (etid) is not provided with the order. |
| `etid` | `string` |  |
| `fromName` | `string` | The name that will appear in the From line of the email and the {from_name} in the text message. |
| `headerImage` | `string` | A Base64 encoded string of an image that will show as the header of the email. |
| `headerImageAltText` | `string` | The Alt Text for the Header Image in the email. |
| `messageBody` | `string` | The message body for the email. |
| `name` | `string` | A unique name to give the template. |
| `smsMessageBody` | `string` | The message body for the SMS. |
| `subject` | `string` | The Subject of the email. |

#### Example: Load

```go
emailTemplateViewVerbose, err := client.EmailTemplateViewVerbose(nil).Load(map[string]any{"etid": "etid"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(emailTemplateViewVerbose) // the loaded record
```

#### Example: List

```go
emailTemplateViewVerboses, err := client.EmailTemplateViewVerbose(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(emailTemplateViewVerboses) // the array of records
```

#### Example: Create

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


### EmbeddableResponseDto

Create an instance: `embeddableResponseDto := client.EmbeddableResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `url` | `string` |  |

#### Example: Load

```go
embeddableResponseDto, err := client.EmbeddableResponseDto(nil).Load(map[string]any{"reference_line_item_id": "reference_line_item_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(embeddableResponseDto) // the loaded record
```


### ExchangeRatesWithDisclaimer

Create an instance: `exchangeRatesWithDisclaimer := client.ExchangeRatesWithDisclaimer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `baseCurrency` | `string` |  |
| `baseFx` | `string` |  |
| `lastModifiedDate` | `string` |  |
| `rewardCurrency` | `string` |  |

#### Example: List

```go
exchangeRatesWithDisclaimers, err := client.ExchangeRatesWithDisclaimer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(exchangeRatesWithDisclaimers) // the array of records
```


### LineItem

Create an instance: `lineItem := client.LineItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` |  |
| `accountNumber` | `string` |  |
| `amountCharged` | `map[string]any` |  |
| `amountIssued` | `map[string]any` |  |
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
| `lineItemActionHistory` | `[]any` |  |
| `lineItemActionReason` | `string` |  |
| `lineItemErrors` | `[]any` | Errors related to the line item |
| `lineNumber` | `int` |  |
| `orderNotes` | `string` |  |
| `orderSource` | `string` |  |
| `orderStatus` | `string` |  |
| `ptid` | `string` |  |
| `purchaseOrderNumber` | `string` |  |
| `quantity` | `int` | quantity of line items |
| `recipient` | `map[string]any` |  |
| `redemptionHistory` | `[]any` |  |
| `referenceLineItemID` | `string` |  |
| `referenceOrderID` | `string` |  |
| `reissuedFromReferenceLineItemId` | `string` | Reissued from reference line item ID |
| `reissuedToReferenceLineItemId` | `string` | Reissued to reference line item ID |
| `remainingBalance` | `float64` |  |
| `resendHistory` | `[]any` |  |
| `reward` | `map[string]any` |  |
| `rewardName` | `string` |  |
| `rewardStatus` | `string` |  |
| `rewardViewHistory` | `[]any` |  |
| `sender` | `map[string]any` |  |
| `status` | `string` |  |
| `utid` | `string` |  |

#### Example: Load

```go
lineItem, err := client.LineItem(nil).Load(map[string]any{"id": "line_item_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(lineItem) // the loaded record
```

#### Example: List

```go
lineItems, err := client.LineItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(lineItems) // the array of records
```

#### Example: Create

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


### LowBalanceAlertListView

Create an instance: `lowBalanceAlertListView := client.LowBalanceAlertListView(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` |  |
| `balanceAlertDisplayName` | `string` |  |
| `balanceAlertID` | `string` |  |
| `balanceAlertNotification` | `[]any` |  |
| `balanceAlertThreshold` | `float64` |  |
| `createdAt` | `string` |  |
| `customerIdentifier` | `string` |  |

#### Example: List

```go
lowBalanceAlertListViews, err := client.LowBalanceAlertListView(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(lowBalanceAlertListViews) // the array of records
```


### LowBalanceAlertView

Create an instance: `lowBalanceAlertView := client.LowBalanceAlertView(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` |  |
| `balanceAlertDisplayName` | `string` | A friendly name for this low balance alert (will be displayed in the Tango Portal). |
| `balanceAlertID` | `string` |  |
| `balanceAlertNotification` | `[]any` | Send low balance notification emails to the following address(es). |
| `balanceAlertThreshold` | `float64` | The threshold amount that will trigger the low balance alert. |
| `createdAt` | `string` |  |
| `customerIdentifier` | `string` |  |

#### Example: Load

```go
lowBalanceAlertView, err := client.LowBalanceAlertView(nil).Load(map[string]any{"account_id": "account_id", "balance_alert_id": "balance_alert_id", "customer_identifier": "customer_identifier"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(lowBalanceAlertView) // the loaded record
```

#### Example: Create

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


### MobileCountry

Create an instance: `mobileCountry := client.MobileCountry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `countryCode` | `string` |  |
| `countryName` | `string` |  |
| `isoCode` | `string` |  |
| `languageCode` | `string` |  |

#### Example: Load

```go
mobileCountry, err := client.MobileCountry(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(mobileCountry) // the loaded record
```


### N14Webhook

Create an instance: `n14Webhook := client.N14Webhook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `[]any` | The categories the customer wants to subscribe to. |
| `createdAt` | `string` | The date and time the webhook was created. |
| `eventTypes` | `[]any` | The event types the customer wants to subscribe to. |
| `expiresAt` | `string` | The date and time the webhook expires. |
| `headers` | `[]any` | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `string` | The HMAC secret key used to sign the webhook payload. |
| `id` | `string` |  |
| `payloadVerificationMethod` | `string` | Method to verify webhook payload authenticity |
| `signingCertificate` | `string` | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `string` | The date and time when the webhook was last updated. |
| `url` | `string` | The URL of the customer's webhook listener. |
| `webhookId` | `string` | The ID of the webhook. |

#### Example: Load

```go
n14Webhook, err := client.N14Webhook(nil).Load(map[string]any{"webhook_id": "webhook_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(n14Webhook) // the loaded record
```

#### Example: List

```go
n14Webhooks, err := client.N14Webhook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(n14Webhooks) // the array of records
```

#### Example: Create

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


### N1Customer

Create an instance: `n1Customer := client.N1Customer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
n1Customer, err := client.N1Customer(nil).Load(map[string]any{"customer_identifier": "customer_identifier"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(n1Customer) // the loaded record
```


### N2Account

Create an instance: `n2Account := client.N2Account(nil)`


### N3Fund

Create an instance: `n3Fund := client.N3Fund(nil)`


### N8LineItem

Create an instance: `n8LineItem := client.N8LineItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `campaign` | `string` | optional campaign that may be used to administratively categorize a specific order. |
| `id` | `string` |  |
| `orderNotes` | `string` | Optional order notes (up to 150 characters) |
| `purchaseOrderNumber` | `string` | The Purchase Order Number associated with this order. |


### N9DigitalTemplate

Create an instance: `n9DigitalTemplate := client.N9DigitalTemplate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Order

Create an instance: `order := client.Order(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accountIdentifier` | `string` | Specify the account this order will be deducted from |
| `accountNumber` | `string` |  |
| `amount` | `float64` | Specify the face value of of the reward. |
| `amountCharged` | `map[string]any` |  |
| `asyncOrderEntity` | `map[string]any` |  |
| `campaign` | `string` | Optional. |
| `createdAt` | `string` |  |
| `customFields` | `map[string]any` | Optional. |
| `customerIdentifier` | `string` | Specify the customer associated with the order. |
| `deliveryMethod` | `string` | Specify delivery method for the order |
| `denomination` | `map[string]any` |  |
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
| `recipient` | `map[string]any` | Required if deliveryMethod is EMAIL, PHONE, or ADDRESS. |
| `redemptionInstructions` | `string` |  |
| `referenceLineItemID` | `string` |  |
| `referenceOrderID` | `string` |  |
| `reward` | `map[string]any` |  |
| `rewardName` | `string` |  |
| `sendEmail` | `bool` | Deprecated Oct 1, 2025. |
| `sender` | `map[string]any` | Optional. |
| `status` | `string` |  |
| `utid` | `string` | The unique identifier for the reward you are sending as provided in the Get Catalog call |

#### Example: Load

```go
order, err := client.Order(nil).Load(map[string]any{"id": "order_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(order) // the loaded record
```

#### Example: List

```go
orders, err := client.Order(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(orders) // the array of records
```

#### Example: Create

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


### OrderViewSummary

Create an instance: `orderViewSummary := client.OrderViewSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `float64` | Optional. |
| `deliveryMethod` | `string` | Optional. |
| `notes` | `string` | Optional order notes (up to 150 characters). |
| `otherReason` | `string` | Required when reasonCode is "OTHER", enter the reason why the line item is being reissued. |
| `reasonCode` | `string` | Required. |
| `recipient` | `map[string]any` | Optional. |

#### Example: Create

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


### PrepaidCardInfo

Create an instance: `prepaidCardInfo := client.PrepaidCardInfo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `balance` | `map[string]any` |  |
| `card` | `map[string]any` |  |
| `comments` | `[]any` |  |
| `registration` | `map[string]any` |  |

#### Example: Load

```go
prepaidCardInfo, err := client.PrepaidCardInfo(nil).Load(map[string]any{"reference_line_item_id": "reference_line_item_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(prepaidCardInfo) // the loaded record
```


### PrepaidCardTransaction

Create an instance: `prepaidCardTransaction := client.PrepaidCardTransaction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `journal` | `[]any` |  |
| `page` | `map[string]any` |  |

#### Example: Load

```go
prepaidCardTransaction, err := client.PrepaidCardTransaction(nil).Load(map[string]any{"reference_line_item_id": "reference_line_item_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(prepaidCardTransaction) // the loaded record
```


### ReissueCard

Create an instance: `reissueCard := client.ReissueCard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commentText` | `string` | Optional comment for the card replacement. |
| `id` | `string` |  |
| `reason` | `string` | Reason for the card replacement. |
| `status` | `string` | Status of the reissue request. |
| `updatedBy` | `string` | Identifier of the agent initiating the request. |

#### Example: Create

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


### ReplacementReason

Create an instance: `replacementReason := client.ReplacementReason(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `replacementReasons` | `[]any` | List of valid replacement reason codes. |

#### Example: List

```go
replacementReasons, err := client.ReplacementReason(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(replacementReasons) // the array of records
```


### Resend

Create an instance: `resend := client.Resend(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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

```go
result, err := client.Resend(nil).Create(map[string]any{
    "line_item_id": "example_line_item_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### RewardReasonsMap

Create an instance: `rewardReasonsMap := client.RewardReasonsMap(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `CANCEL` | `map[string]any` | Map of cancel reasons |
| `CANCEL_AND_REISSUE` | `map[string]any` | Map of cancel and reissue reasons |
| `FREEZE` | `map[string]any` | Map of freeze reasons |
| `UNFREEZE` | `map[string]any` | Map of unfreeze reasons |

#### Example: Load

```go
rewardReasonsMap, err := client.RewardReasonsMap(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(rewardReasonsMap) // the loaded record
```


### TransferFund

Create an instance: `transferFund := client.TransferFund(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `float64` | Specify the currency amount of the funds being transferred. |
| `externalRefID` | `string` | specify the external reference id to associate with this funding action. |
| `transferDate` | `string` |  |
| `transferFrom` | `map[string]any` | The accountIdentifier for the Account transferring funds from. |
| `transferNotes` | `string` | Optional transfer notes (up to 150 characters) |
| `transferTo` | `map[string]any` | The accountIdentifier for the Account transferring funds to. |
| `transferredAmount` | `float64` |  |

#### Example: Create

```go
result, err := client.TransferFund(nil).Create(map[string]any{
    "amount": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### UpdateAccount

Create an instance: `updateAccount := client.UpdateAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `registration` | `map[string]any` |  |
| `status` | `string` |  |
| `updatedBy` | `string` |  |

#### Example: Create

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


### UpdateWebhookSubscriptionResponseView

Create an instance: `updateWebhookSubscriptionResponseView := client.UpdateWebhookSubscriptionResponseView(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `[]any` | The categories the customer is subscribed to. |
| `createdAt` | `string` | The date and time the webhook was created. |
| `eventTypes` | `[]any` | The event types the customer is subscribed to. |
| `expiresAt` | `string` | The date and time the webhook expires. |
| `headers` | `[]any` | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `string` | The HMAC secret key used to sign the webhook payload. |
| `payloadVerificationMethod` | `string` | Method to verify webhook payload integrity |
| `signingCertificate` | `string` | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `string` | The date and time when the webhook was last updated. |
| `url` | `string` | The URL of the customer's webhook listener. |
| `webhookId` | `string` | The ID of the webhook. |


### Webhook

Create an instance: `webhook := client.Webhook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `[]any` | The categories the customer wants to subscribe to. |
| `createdAt` | `string` | The date and time the webhook was created. |
| `eventTypes` | `[]any` | The event types the customer wants to subscribe to. |
| `expiresAt` | `string` | The date and time the webhook expires. |
| `headers` | `[]any` | Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener. |
| `hmacSharedSecretKey` | `string` | The HMAC secret key used to sign the webhook payload. |
| `id` | `string` |  |
| `payloadVerificationMethod` | `string` | Method to verify webhook payload integrity. |
| `signingCertificate` | `string` | The public X509 certificate used to sign the webhook payload. |
| `updatedAt` | `string` | The date and time when the webhook was last updated. |
| `url` | `string` | The URL of the customer's webhook listener. |
| `webhookId` | `string` | The ID of the webhook. |

#### Example: Load

```go
webhook, err := client.Webhook(nil).Load(map[string]any{"id": "webhook_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhook) // the loaded record
```

#### Example: Create

```go
result, err := client.Webhook(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

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

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/tangocard-sdk/go/
├── tangocard.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/tangocard-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
rewardreasonsmap := client.RewardReasonsMap(nil)
rewardreasonsmap.Load(nil, nil)

// rewardreasonsmap.Data() now returns the rewardreasonsmap data from the last load
// rewardreasonsmap.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
