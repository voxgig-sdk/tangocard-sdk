# Tango API

Welcome to the Tango API – with this RESTful API you can integrate a global reward or incentive program into your app or platform. This console works in our Sandbox environment. To receive your own credentials or to ask questions, please contact us at &lt;a href=\&quot;mailto:devsupport@tangocard.com\&quot;&gt;devsupport@tangocard.com&lt;/a&gt;.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 46 entities and 72 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [Account](docs/api/account.html)

Results: OK.

SDK operations: `load`, `update`.

Key fields to recognise:

- `contactEmail`: optional, an email address for a designated representative for this account.
- `displayName`: optional, a friendly name for this account.
- `fundingNotification`: optional, send funding notification emails to the following address(es).

### [AddCommentEscalation](docs/api/add_comment_escalation.html)

Results: OK.

SDK operations: `create`.

Key fields to recognise:

- `assignee`: Assignee ID.
- `commentText`: Free-text comment to add to the prepaid card.
- `inquiryCategoryCode`: Inquiry category code.
- `inquiryIdNumber`: Inquiry ID number.
- `inquirySource`: Origination source identifier (for example

### [AllEventType](docs/api/all_event_type.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `category`: The category of events can be subscribed to.
- `eventTypes`: The event types that can be subscribed to.

### [AsyncOrder](docs/api/async_order.html)

Results: OK; Accepted.

SDK operations: `create`, `list`.

Key fields to recognise:

- `accountIdentifier`: specify the account this order will be deducted from
- `amountCharged`: Initial value and the total charged amount on the account
- `campaign`: Optional.
- `customerIdentifier`: specify the customer associated with the order.
- `duplicateLineItemRefIds`: If any duplicate duplicateLineItemRefIds exist in the request

### [AsyncOrderDetailView](docs/api/async_order_detail_view.html)

Results: OK.

SDK operations: `load`, `update`.

Key fields to recognise:

- `accountIdentifier`: Account identifier
- `amountCharged`: Initial value and the total charged amount on the account
- `campaign`: Campaign name
- `completedAt`: Order completion timestamp
- `createdAt`: Order creation timestamp

### [AsyncOrderLineItemsView](docs/api/async_order_line_items_view.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `amountCharged`: Initial value and the total charged amount on the account
- `lineItems`: The List of Line Items for the Async Order.
- `orderErrors`: The List of Errors for the Async Order.
- `pagination`: The cursor for pagination of the async order line items.

### [AsyncReasonCodesView](docs/api/async_reason_codes_view.html)

Results: OK.

SDK operations: `load`.

### [AsyncUpdateLineItemView](docs/api/async_update_line_item_view.html)

Results: Created.

SDK operations: `update`.

Key fields to recognise:

- `deliveryDate`: Updated delivery date
- `lineItemNote`: Optional line item notes (up to 150 characters)
- `senderInfo`: Updated sender information

### [BalanceAlertView](docs/api/balance_alert_view.html)

Results: OK.

SDK operations: `remove`.

### [BrandCategoriesView](docs/api/brand_categories_view.html)

Results: OK.

SDK operations: `list`.

### [Catalog](docs/api/catalog.html)

Results: OK.

SDK operations: `list`.

### [ChoiceProduct](docs/api/choice_product.html)

Results: OK.

SDK operations: `list`, `load`.

### [CountryViewSummary](docs/api/country_view_summary.html)

Results: OK.

SDK operations: `load`.

### [CreateAccountCriterion](docs/api/create_account_criterion.html)

Results: Created.

SDK operations: `create`.

Key fields to recognise:

- `accountIdentifier`: A unique identifier for this account. Must be between 5-100 characters and accepts the following: -0-9a-zA-Z in any sequence.
- `contactEmail`: An email address for a designated representative for this account.
- `currencyCode`: The currency this account will accept for deposits/withdraws. Only one currency can be specified, and can never be changed. Default to USD if not specified.
- `displayName`: A friendly name for this account.
- `fundingNotification`: optional, send funding notification emails to the following address(es)

### [CreateCustomerCriterion](docs/api/create_customer_criterion.html)

SDK operations: .

### [CredentialTypeView](docs/api/credential_type_view.html)

Results: OK.

SDK operations: `list`.

### [CreditCard](docs/api/credit_card.html)

Results: Created; OK.

SDK operations: `create`, `load`.

Key fields to recognise:

- `accountIdentifier`: specify the account this credit card is associated with
- `billingAddress`: required Enter the billing address information for the credit card that is being registered
- `contactInformation`: Optional.
- `creditCard`: required Enter the credit card details that is being registered
- `customerIdentifier`: specify the customer associated with the credit card.

### [CreditCardDeposit](docs/api/credit_card_deposit.html)

Results: OK.

SDK operations: `create`, `load`.

Key fields to recognise:

- `accountIdentifier`: specify the account this credit card is associated with
- `amount`: specify the amount to fund in USD
- `creditCardToken`: specify the credit card token to fund with
- `customerIdentifier`: specify the customer associated with the credit card.
- `externalRefID`: specify the external reference id to associate with this funding action.

### [CreditCardUnregister](docs/api/credit_card_unregister.html)

Results: OK.

SDK operations: `create`.

Key fields to recognise:

- `accountIdentifier`: Specify the account this credit card is associated with.
- `creditCardToken`: Specify the credit card token to unregister.
- `customerIdentifier`: Specify the customer associated with the credit card.

### [Customer](docs/api/customer.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `customerIdentifier`: A unique identifier for this customer. Must be between 5-100 characters and accepts the following: -0-9a-zA-Z in any sequence.
- `displayName`: A friendly name for this customer. Must be between 5-100 characters and accepts letters, numbers, punctuation and whitespace separators in any sequence.

### [EmailTemplateListView](docs/api/email_template_list_view.html)

SDK operations: .

### [EmailTemplateViewVerbose](docs/api/email_template_view_verbose.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `accentColor`: A Hex color value, six hexadecimal digits preceded by a pound sign, used as an accent in the email.
- `accessControl`: (Optional) Which Customers and/or Accounts should have access to this template.
- `closing`: After the reward credential, a space to close the email message to the recipient.
- `customerServiceMessage`: If left null, Tango Card&#39;s Customer Support contact information will be included.
- `defaults`: If you want this template to be used at order time for the given Platform, Customer or Account when the Email Template Identifier (etid) is not provided with the order.

### [EmbeddableResponseDto](docs/api/embeddable_response_dto.html)

Results: OK.

SDK operations: `load`.

### [ExchangeRatesWithDisclaimer](docs/api/exchange_rates_with_disclaimer.html)

Results: OK.

SDK operations: `list`.

### [LineItem](docs/api/line_item.html)

Results: Accepted; OK.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `lineItemErrors`: Errors related to the line item
- `quantity`: quantity of line items
- `reissuedFromReferenceLineItemId`: Reissued from reference line item ID
- `reissuedToReferenceLineItemId`: Reissued to reference line item ID

### [LowBalanceAlertListView](docs/api/low_balance_alert_list_view.html)

Results: OK.

SDK operations: `list`.

### [LowBalanceAlertView](docs/api/low_balance_alert_view.html)

Results: OK.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `balanceAlertDisplayName`: A friendly name for this low balance alert (will be displayed in the Tango Portal).
- `balanceAlertNotification`: Send low balance notification emails to the following address(es).
- `balanceAlertThreshold`: The threshold amount that will trigger the low balance alert.

### [MobileCountry](docs/api/mobile_country.html)

Results: OK.

SDK operations: `load`.

### [N14Webhook](docs/api/n14_webhook.html)

Results: OK; Created.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `categories`: The categories the customer wants to subscribe to.
- `createdAt`: The date and time the webhook was created.
- `eventTypes`: The event types the customer wants to subscribe to.
- `expiresAt`: The date and time the webhook expires.
- `headers`: Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.

### [N1Customer](docs/api/n1_customer.html)

Results: OK.

SDK operations: `load`.

### [N2Account](docs/api/n2_account.html)

SDK operations: .

### [N3Fund](docs/api/n3_fund.html)

SDK operations: .

### [N8LineItem](docs/api/n8_line_item.html)

Results: Accepted.

SDK operations: `update`.

Key fields to recognise:

- `campaign`: optional campaign that may be used to administratively categorize a specific order.
- `orderNotes`: Optional order notes (up to 150 characters)
- `purchaseOrderNumber`: The Purchase Order Number associated with this order.

### [N9DigitalTemplate](docs/api/n9_digital_template.html)

Results: No Content.

SDK operations: `remove`.

### [Order](docs/api/order.html)

Results: OK / Existing order found for given external ref ID; Created; OK.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `accountIdentifier`: Specify the account this order will be deducted from
- `amount`: Specify the face value of the reward.
- `campaign`: Optional.
- `customFields`: Optional.
- `customerIdentifier`: Specify the customer associated with the order.

### [OrderViewSummary](docs/api/order_view_summary.html)

Results: Created.

SDK operations: `create`.

Key fields to recognise:

- `amount`: Optional.
- `deliveryMethod`: Optional.
- `notes`: Optional order notes (up to 150 characters).
- `otherReason`: Required when reasonCode is &quot;OTHER&quot;, enter the reason why the line item is being reissued.
- `reasonCode`: Required.

### [PrepaidCardInfo](docs/api/prepaid_card_info.html)

Results: OK.

SDK operations: `load`.

### [PrepaidCardTransaction](docs/api/prepaid_card_transaction.html)

Results: OK.

SDK operations: `load`.

### [ReissueCard](docs/api/reissue_card.html)

Results: OK.

SDK operations: `create`.

Key fields to recognise:

- `commentText`: Optional comment for the card replacement.
- `reason`: Reason for the card replacement.
- `status`: Status of the reissue request.
- `updatedBy`: Identifier of the agent initiating the request.

### [ReplacementReason](docs/api/replacement_reason.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `replacementReasons`: List of valid replacement reason codes.

### [Resend](docs/api/resend.html)

Results: Created.

SDK operations: `create`.

Key fields to recognise:

- `newDeliveryMethod`: The delivery method used to re-deliver the reward.
- `newEmail`: A new email address to re-deliver this order to.
- `newEtid`: A new etid used to re-deliver an order.
- `newMobile`: A new mobile number to use for resending an order.
- `newMobileNumber`: A new phone number to re-deliver this order to.

### [RewardReasonsMap](docs/api/reward_reasons_map.html)

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `CANCEL`: Map of cancel reasons
- `CANCEL_AND_REISSUE`: Map of cancel and reissue reasons
- `FREEZE`: Map of freeze reasons
- `UNFREEZE`: Map of unfreeze reasons

### [TransferFund](docs/api/transfer_fund.html)

Results: OK.

SDK operations: `create`.

Key fields to recognise:

- `amount`: Specify the currency amount of the funds being transferred.
- `externalRefID`: specify the external reference id to associate with this funding action.
- `transferFrom`: The accountIdentifier for the Account transferring funds from.
- `transferNotes`: Optional transfer notes (up to 150 characters)
- `transferTo`: The accountIdentifier for the Account transferring funds to.

### [UpdateAccount](docs/api/update_account.html)

Results: OK.

SDK operations: `create`.

### [UpdateWebhookSubscriptionResponseView](docs/api/update_webhook_subscription_response_view.html)

Results: OK.

SDK operations: `update`.

Key fields to recognise:

- `categories`: The categories the customer is subscribed to.
- `createdAt`: The date and time the webhook was created.
- `eventTypes`: The event types the customer is subscribed to.
- `expiresAt`: The date and time the webhook expires.
- `headers`: Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.

### [Webhook](docs/api/webhook.html)

Results: OK.

SDK operations: `create`, `load`.

Key fields to recognise:

- `categories`: The categories the customer wants to subscribe to.
- `createdAt`: The date and time the webhook was created.
- `eventTypes`: The event types the customer wants to subscribe to.
- `expiresAt`: The date and time the webhook expires.
- `headers`: Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [Account](docs/api/account.html) | `load` | `GET /accounts` | Required |
| [Account](docs/api/account.html) | `load` | `GET /accounts/{accountIdentifier}` | Required |
| [Account](docs/api/account.html) | `update` | `PATCH /customers/{customerIdentifier}/accounts/{accountIdentifier}` | Required |
| [AddCommentEscalation](docs/api/add_comment_escalation.html) | `create` | `POST /prepaidCardService/addCommentEscalation/{referenceLineItemID}` | Required |
| [AllEventType](docs/api/all_event_type.html) | `list` | `GET /webhooks/eventtypes` | Required |
| [AsyncOrder](docs/api/async_order.html) | `create` | `POST /asyncOrders` | Required |
| [AsyncOrder](docs/api/async_order.html) | `list` | `GET /asyncOrders` | Required |
| [AsyncOrderDetailView](docs/api/async_order_detail_view.html) | `load` | `GET /asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}` | Required |
| [AsyncOrderDetailView](docs/api/async_order_detail_view.html) | `update` | `PATCH /asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}` | Required |
| [AsyncOrderLineItemsView](docs/api/async_order_line_items_view.html) | `list` | `GET /asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}/lineItems` | Required |
| [AsyncReasonCodesView](docs/api/async_reason_codes_view.html) | `load` | `GET /asyncOrders/reasonCodes` | Required |
| [AsyncUpdateLineItemView](docs/api/async_update_line_item_view.html) | `update` | `PATCH /asyncOrders/lineItems/{referenceLineItemId}` | Required |
| [BalanceAlertView](docs/api/balance_alert_view.html) | `remove` | `DELETE /customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}` | Required |
| [BrandCategoriesView](docs/api/brand_categories_view.html) | `list` | `GET /brandCategories` | Required |
| [Catalog](docs/api/catalog.html) | `list` | `GET /choiceProducts/{choiceProductUtid}/catalog` | Required |
| [Catalog](docs/api/catalog.html) | `list` | `GET /catalogs` | Required |
| [ChoiceProduct](docs/api/choice_product.html) | `list` | `GET /choiceProducts` | Required |
| [ChoiceProduct](docs/api/choice_product.html) | `load` | `GET /choiceProducts/{utid}` | Required |
| [CountryViewSummary](docs/api/country_view_summary.html) | `load` | `GET /rewardCountries` | Required |
| [CreateAccountCriterion](docs/api/create_account_criterion.html) | `create` | `POST /customers/{customerIdentifier}/accounts` | Required |
| [CredentialTypeView](docs/api/credential_type_view.html) | `list` | `GET /credentialtypes` | Required |
| [CreditCard](docs/api/credit_card.html) | `create` | `POST /creditCards` | Required |
| [CreditCard](docs/api/credit_card.html) | `load` | `GET /creditCards` | Required |
| [CreditCard](docs/api/credit_card.html) | `load` | `GET /creditCards/{token}` | Required |
| [CreditCardDeposit](docs/api/credit_card_deposit.html) | `create` | `POST /creditCardDeposits` | Required |
| [CreditCardDeposit](docs/api/credit_card_deposit.html) | `load` | `GET /creditCardDeposits/{referenceDepositID}` | Required |
| [CreditCardUnregister](docs/api/credit_card_unregister.html) | `create` | `POST /creditCardUnregisters` | Required |
| [Customer](docs/api/customer.html) | `create` | `POST /customers` | Required |
| [Customer](docs/api/customer.html) | `list` | `GET /customers` | Required |
| [Customer](docs/api/customer.html) | `load` | `GET /customers/{customerIdentifier}` | Required |
| [EmailTemplateViewVerbose](docs/api/email_template_view_verbose.html) | `create` | `POST /digitalTemplates` | Required |
| [EmailTemplateViewVerbose](docs/api/email_template_view_verbose.html) | `list` | `GET /digitalTemplates` | Required |
| [EmailTemplateViewVerbose](docs/api/email_template_view_verbose.html) | `load` | `GET /digitalTemplates/{etid}` | Required |
| [EmailTemplateViewVerbose](docs/api/email_template_view_verbose.html) | `update` | `PATCH /digitalTemplates/{etid}` | Required |
| [EmbeddableResponseDto](docs/api/embeddable_response_dto.html) | `load` | `GET /lineItems/{referenceLineItemID}/embeddedUrl` | Required |
| [ExchangeRatesWithDisclaimer](docs/api/exchange_rates_with_disclaimer.html) | `list` | `GET /exchangerates` | Required |
| [LineItem](docs/api/line_item.html) | `create` | `POST /lineItems/{referenceLineItemID}/cancel` | Required |
| [LineItem](docs/api/line_item.html) | `create` | `POST /lineItems/{referenceLineItemID}/freeze` | Required |
| [LineItem](docs/api/line_item.html) | `create` | `POST /lineItems/{referenceLineItemID}/unfreeze` | Required |
| [LineItem](docs/api/line_item.html) | `list` | `GET /lineItems` | Required |
| [LineItem](docs/api/line_item.html) | `load` | `GET /lineItems/{referenceLineItemID}` | Required |
| [LowBalanceAlertListView](docs/api/low_balance_alert_list_view.html) | `list` | `GET /customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance` | Required |
| [LowBalanceAlertView](docs/api/low_balance_alert_view.html) | `create` | `POST /customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance` | Required |
| [LowBalanceAlertView](docs/api/low_balance_alert_view.html) | `load` | `GET /customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}` | Required |
| [LowBalanceAlertView](docs/api/low_balance_alert_view.html) | `update` | `PATCH /customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}` | Required |
| [MobileCountry](docs/api/mobile_country.html) | `load` | `GET /mobileCountries` | Required |
| [N14Webhook](docs/api/n14_webhook.html) | `create` | `POST /webhooks/{webhookId}/tests/{testName}` | Required |
| [N14Webhook](docs/api/n14_webhook.html) | `create` | `POST /webhooks/{webhookId}/tests` | Required |
| [N14Webhook](docs/api/n14_webhook.html) | `create` | `POST /webhooks` | Required |
| [N14Webhook](docs/api/n14_webhook.html) | `list` | `GET /webhooks` | Required |
| [N14Webhook](docs/api/n14_webhook.html) | `load` | `GET /webhooks/{webhookId}/events` | Required |
| [N14Webhook](docs/api/n14_webhook.html) | `remove` | `DELETE /webhooks/{webhookId}` | Required |
| [N1Customer](docs/api/n1_customer.html) | `load` | `GET /customers/{customerIdentifier}/accounts` | Required |
| [N8LineItem](docs/api/n8_line_item.html) | `update` | `PATCH /lineItems/{referenceLineItemID}` | Required |
| [N9DigitalTemplate](docs/api/n9_digital_template.html) | `remove` | `DELETE /digitalTemplates/{etid}` | Required |
| [Order](docs/api/order.html) | `create` | `POST /orders` | Required |
| [Order](docs/api/order.html) | `list` | `GET /orders` | Required |
| [Order](docs/api/order.html) | `load` | `GET /orders/{referenceOrderID}` | Required |
| [OrderViewSummary](docs/api/order_view_summary.html) | `create` | `POST /lineItems/{referenceLineItemID}/reissue` | Required |
| [PrepaidCardInfo](docs/api/prepaid_card_info.html) | `load` | `GET /prepaidCardService/getCardInfo/{referenceLineItemID}` | Required |
| [PrepaidCardTransaction](docs/api/prepaid_card_transaction.html) | `load` | `GET /prepaidCardService/getCardTransactions/{referenceLineItemID}` | Required |
| [ReissueCard](docs/api/reissue_card.html) | `create` | `POST /prepaidCardService/reissueCard/{referenceLineItemID}` | Required |
| [ReplacementReason](docs/api/replacement_reason.html) | `list` | `GET /prepaidCardService/replacementReasons` | Required |
| [Resend](docs/api/resend.html) | `create` | `POST /lineItems/{referenceLineItemId}/resends` | Required |
| [Resend](docs/api/resend.html) | `create` | `POST /orders/{referenceOrderID}/resends` | Required |
| [RewardReasonsMap](docs/api/reward_reasons_map.html) | `load` | `GET /lineItems/reasonCodes` | Required |
| [TransferFund](docs/api/transfer_fund.html) | `create` | `POST /transferFunds` | Required |
| [UpdateAccount](docs/api/update_account.html) | `create` | `POST /prepaidCardService/updateAccount/{referenceLineItemID}` | Required |
| [UpdateWebhookSubscriptionResponseView](docs/api/update_webhook_subscription_response_view.html) | `update` | `PATCH /webhooks/{webhookId}` | Required |
| [Webhook](docs/api/webhook.html) | `create` | `POST /webhooks/{webhookId}/replay` | Required |
| [Webhook](docs/api/webhook.html) | `create` | `POST /webhooks/{webhookId}/renew` | Required |
| [Webhook](docs/api/webhook.html) | `load` | `GET /webhooks/{webhookId}` | Required |

## Connect to the API

- Generated server url: `https://integration-api.tangocard.com/raas/v2`

The default credential is sent in the `Authorization` header with the `Basic` prefix.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [JavaScript](docs/sdks/js.html) | `js/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `tangocard_list`: List records for an entity. Supported entities: `all_event_type`, `async_order`, `async_order_line_items_view`, `brand_categories_view`, `catalog`, `choice_product`, `credential_type_view`, `customer`, `email_template_view_verbose`, `exchange_rates_with_disclaimer`, `line_item`, `low_balance_alert_list_view`, `n14_webhook`, `order`, `replacement_reason`.
- `tangocard_load`: Load one record for an entity. Supported entities: `account`, `async_order_detail_view`, `async_reason_codes_view`, `choice_product`, `country_view_summary`, `credit_card`, `credit_card_deposit`, `customer`, `email_template_view_verbose`, `embeddable_response_dto`, `line_item`, `low_balance_alert_view`, `mobile_country`, `n14_webhook`, `n1_customer`, `order`, `prepaid_card_info`, `prepaid_card_transaction`, `reward_reasons_map`, `webhook`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

