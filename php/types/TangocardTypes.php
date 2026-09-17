<?php
declare(strict_types=1);

// Typed models for the Tangocard SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Account entity data model. */
class Account
{
    public string $accountIdentifier;
    public string $accountNumber;
    public ?string $contactEmail = null;
    public string $createdAt;
    public string $currencyCode;
    public float $currentBalance;
    public string $displayName;
    public ?array $fundingNotification = null;
    public ?string $id = null;
    public string $status;
}

/** Request payload for Account#load. */
class AccountLoadMatch
{
    public string $id;
}

/** Request payload for Account#update. */
class AccountUpdateData
{
    public string $customer_identifier;
    public string $id;
    public ?string $accountIdentifier = null;
    public ?string $accountNumber = null;
    public ?string $contactEmail = null;
    public ?string $createdAt = null;
    public ?string $currencyCode = null;
    public ?float $currentBalance = null;
    public ?string $displayName = null;
    public ?array $fundingNotification = null;
    public ?string $status = null;
}

/** AddCommentEscalation entity data model. */
class AddCommentEscalation
{
    public ?int $assignee = null;
    public string $commentText;
    public ?string $id = null;
    public ?int $inquiryCategoryCode = null;
    public ?int $inquiryIdNumber = null;
    public ?string $inquirySource = null;
    public ?int $inquiryTypeCode = null;
    public string $issueDescription;
    public ?string $status = null;
    public ?string $userId = null;
}

/** Request payload for AddCommentEscalation#create. */
class AddCommentEscalationCreateData
{
    public string $id;
    public ?int $assignee = null;
    public string $commentText;
    public ?int $inquiryCategoryCode = null;
    public ?int $inquiryIdNumber = null;
    public ?string $inquirySource = null;
    public ?int $inquiryTypeCode = null;
    public string $issueDescription;
    public ?string $status = null;
    public ?string $userId = null;
}

/** AllEventType entity data model. */
class AllEventType
{
    public ?string $category = null;
    public ?array $eventTypes = null;
}

/** Request payload for AllEventType#list. */
class AllEventTypeListMatch
{
    public ?string $category = null;
    public ?int $max_result = null;
    public ?string $next_cursor = null;
    public ?string $prev_cursor = null;
}

/** AsyncOrder entity data model. */
class AsyncOrder
{
    public string $accountIdentifier;
    public string $accountNumber;
    public ?array $amountCharged = null;
    public ?string $campaign = null;
    public ?string $createdAt = null;
    public string $customerIdentifier;
    public ?array $duplicateLineItemRefIds = null;
    public ?string $externalRefID = null;
    public ?array $failedLineItems = null;
    public ?string $fulfillBy = null;
    public array $lineItems;
    public ?string $notes = null;
    public ?string $orderStatus = null;
    public ?string $purchaseOrderNumber = null;
    public string $referenceOrderID;
    public ?array $sender = null;
    public ?string $status = null;
    public ?int $totalLineItems = null;
    public ?int $totalLineItemsRows = null;
}

/** Request payload for AsyncOrder#list. */
class AsyncOrderListMatch
{
    public ?string $account_identifier = null;
    public ?string $campaign = null;
    public ?string $currency_code = null;
    public ?string $customer_identifier = null;
    public ?string $delivery_method = null;
    public ?string $elements_per_block = null;
    public ?string $end_date = null;
    public ?string $external_ref_id = null;
    public ?string $line_item_note = null;
    public ?string $line_item_status = null;
    public ?string $max_amount = null;
    public ?string $max_result = null;
    public ?string $min_amount = null;
    public ?string $next_cursor = null;
    public ?string $note = null;
    public ?string $order_status = null;
    public ?string $page = null;
    public ?string $prev_cursor = null;
    public ?string $ptid = null;
    public ?string $purchase_order_number = null;
    public ?string $recipient_email = null;
    public ?string $recipient_first_name = null;
    public ?string $recipient_last_name = null;
    public ?string $recipient_mobile_number = null;
    public ?string $reward_name = null;
    public ?string $send_email = null;
    public ?string $sender_email = null;
    public ?string $sender_first_name = null;
    public ?string $sender_last_name = null;
    public ?string $start_date = null;
    public ?string $utid = null;
}

/** Request payload for AsyncOrder#create. */
class AsyncOrderCreateData
{
    public string $accountIdentifier;
    public string $accountNumber;
    public ?array $amountCharged = null;
    public ?string $campaign = null;
    public ?string $createdAt = null;
    public string $customerIdentifier;
    public ?array $duplicateLineItemRefIds = null;
    public ?string $externalRefID = null;
    public ?array $failedLineItems = null;
    public ?string $fulfillBy = null;
    public array $lineItems;
    public ?string $notes = null;
    public ?string $orderStatus = null;
    public ?string $purchaseOrderNumber = null;
    public string $referenceOrderID;
    public ?array $sender = null;
    public ?string $status = null;
    public ?int $totalLineItems = null;
    public ?int $totalLineItemsRows = null;
}

/** AsyncOrderDetailView entity data model. */
class AsyncOrderDetailView
{
    public ?string $accountIdentifier = null;
    public ?array $amountCharged = null;
    public ?string $campaign = null;
    public ?string $completedAt = null;
    public ?string $createdAt = null;
    public ?string $customerIdentifier = null;
    public ?string $externalRefID = null;
    public ?string $id = null;
    public ?array $lineItems = null;
    public ?string $notes = null;
    public ?array $orderErrors = null;
    public ?string $orderStatus = null;
    public ?array $pagination = null;
    public ?string $purchaseOrderNumber = null;
    public ?string $referenceOrderID = null;
    public ?array $sender = null;
    public ?int $totalLineItems = null;
}

/** Request payload for AsyncOrderDetailView#load. */
class AsyncOrderDetailViewLoadMatch
{
    public string $account_identifier;
    public string $customer_identifier;
    public string $external_ref_id;
    public ?array $external_ref_line_item_i_d = null;
    public ?bool $failed_only = null;
    public ?int $max_result = null;
    public ?string $next_cursor = null;
    public ?string $prev_cursor = null;
    public ?array $reference_line_item_i_d = null;
}

/** Request payload for AsyncOrderDetailView#update. */
class AsyncOrderDetailViewUpdateData
{
    public string $account_identifier;
    public string $customer_identifier;
    public string $external_ref_id;
    public ?string $accountIdentifier = null;
    public ?array $amountCharged = null;
    public ?string $campaign = null;
    public ?string $completedAt = null;
    public ?string $createdAt = null;
    public ?string $customerIdentifier = null;
    public ?string $externalRefID = null;
    public ?string $id = null;
    public ?array $lineItems = null;
    public ?string $notes = null;
    public ?array $orderErrors = null;
    public ?string $orderStatus = null;
    public ?array $pagination = null;
    public ?string $purchaseOrderNumber = null;
    public ?string $referenceOrderID = null;
    public ?array $sender = null;
    public ?int $totalLineItems = null;
}

/** AsyncOrderLineItemsView entity data model. */
class AsyncOrderLineItemsView
{
    public string $accountIdentifier;
    public ?array $amountCharged = null;
    public ?string $campaign = null;
    public string $customerIdentifier;
    public ?string $externalRefID = null;
    public ?array $lineItems = null;
    public ?array $orderErrors = null;
    public ?string $orderNotes = null;
    public string $orderStatus;
    public ?array $pagination = null;
    public ?string $purchaseOrderNumber = null;
    public string $referenceOrderID;
    public ?array $sender = null;
}

/** Request payload for AsyncOrderLineItemsView#list. */
class AsyncOrderLineItemsViewListMatch
{
    public string $account_id;
    public string $customer_id;
    public string $external_ref_id;
    public ?array $external_ref_line_item_i_d = null;
    public ?bool $failed_only = null;
    public ?int $max_result = null;
    public ?string $next_cursor = null;
    public ?string $prev_cursor = null;
    public ?array $reference_line_item_i_d = null;
}

/** AsyncReasonCodesView entity data model. */
class AsyncReasonCodesView
{
}

/** Request payload for AsyncReasonCodesView#load. */
class AsyncReasonCodesViewLoadMatch
{
}

/** AsyncUpdateLineItemView entity data model. */
class AsyncUpdateLineItemView
{
    public ?string $deliveryDate = null;
    public ?string $lineItemNote = null;
    public ?array $senderInfo = null;
}

/** Request payload for AsyncUpdateLineItemView#update. */
class AsyncUpdateLineItemViewUpdateData
{
    public string $reference_line_item_id;
    public ?string $deliveryDate = null;
    public ?string $lineItemNote = null;
    public ?array $senderInfo = null;
}

/** BalanceAlertView entity data model. */
class BalanceAlertView
{
}

/** Request payload for BalanceAlertView#remove. */
class BalanceAlertViewRemoveMatch
{
    public string $account_id;
    public string $balance_alert_id;
    public string $customer_identifier;
}

/** BrandCategoriesView entity data model. */
class BrandCategoriesView
{
    public ?string $description = null;
    public ?string $identifier = null;
}

/** Request payload for BrandCategoriesView#list. */
class BrandCategoriesViewListMatch
{
    public ?string $description = null;
    public ?string $identifier = null;
}

/** Catalog entity data model. */
class Catalog
{
    public ?string $barcodeType = null;
    public string $brandKey;
    public string $brandName;
    public array $brandRequirements;
    public array $categories;
    public string $createdDate;
    public string $description;
    public string $disclaimer;
    public array $imageUrls;
    public array $items;
    public string $lastUpdateDate;
    public string $shortDescription;
    public string $status;
    public string $terms;
}

/** Request payload for Catalog#list. */
class CatalogListMatch
{
    public ?string $brand_key = null;
    public ?string $brand_name = null;
    public ?array $category_id = null;
    public ?string $country = null;
    public ?string $currency_code = null;
    public ?array $fulfillment_type = null;
    public ?array $item_attribute = null;
    public ?string $reward_name = null;
    public ?array $reward_type = null;
    public ?string $status = null;
    public ?string $utid = null;
    public ?bool $verbose = null;
}

/** ChoiceProduct entity data model. */
class ChoiceProduct
{
    public ?array $countries = null;
    public ?string $currencyCode = null;
    public ?string $id = null;
    public ?string $rewardName = null;
    public ?string $utid = null;
}

/** Request payload for ChoiceProduct#load. */
class ChoiceProductLoadMatch
{
    public string $id;
}

/** Request payload for ChoiceProduct#list. */
class ChoiceProductListMatch
{
    public ?array $country = null;
    public ?string $currency_code = null;
    public ?string $reward_name = null;
}

/** CountryViewSummary entity data model. */
class CountryViewSummary
{
    public string $countryName;
    public string $preferredCurrency;
    public string $threeLetterCode;
    public string $twoLetterCode;
}

/** Request payload for CountryViewSummary#load. */
class CountryViewSummaryLoadMatch
{
    public ?string $country = null;
    public ?int $max_result = null;
    public ?string $next_cursor = null;
    public ?string $preferred_currency = null;
    public ?string $prev_cursor = null;
}

/** CreateAccountCriterion entity data model. */
class CreateAccountCriterion
{
    public string $accountIdentifier;
    public string $contactEmail;
    public ?string $currencyCode = null;
    public string $displayName;
    public ?array $fundingNotification = null;
}

/** Request payload for CreateAccountCriterion#create. */
class CreateAccountCriterionCreateData
{
    public string $customer_identifier;
    public string $accountIdentifier;
    public string $contactEmail;
    public ?string $currencyCode = null;
    public string $displayName;
    public ?array $fundingNotification = null;
}

/** CreateCustomerCriterion entity data model. */
class CreateCustomerCriterion
{
}

/** CredentialTypeView entity data model. */
class CredentialTypeView
{
    public string $credentialType;
    public ?string $description = null;
}

/** Request payload for CredentialTypeView#list. */
class CredentialTypeViewListMatch
{
    public ?string $credentialType = null;
    public ?string $description = null;
}

/** CreditCard entity data model. */
class CreditCard
{
    public string $accountIdentifier;
    public string $accountNumber;
    public string $activationDate;
    public array $billingAddress;
    public array $contactInformation;
    public string $createdDate;
    public array $creditCard;
    public string $customerIdentifier;
    public string $expirationDate;
    public ?string $id = null;
    public string $ipAddress;
    public string $label;
    public string $lastFourDigits;
    public string $status;
    public string $token;
}

/** Request payload for CreditCard#load. */
class CreditCardLoadMatch
{
    public string $id;
}

/** Request payload for CreditCard#create. */
class CreditCardCreateData
{
    public string $accountIdentifier;
    public string $accountNumber;
    public string $activationDate;
    public array $billingAddress;
    public array $contactInformation;
    public string $createdDate;
    public array $creditCard;
    public string $customerIdentifier;
    public string $expirationDate;
    public ?string $id = null;
    public string $ipAddress;
    public string $label;
    public string $lastFourDigits;
    public string $status;
    public string $token;
}

/** CreditCardDeposit entity data model. */
class CreditCardDeposit
{
    public string $accountIdentifier;
    public string $accountNumber;
    public float $amount;
    public float $amountCharged;
    public string $createdDate;
    public string $creditCardToken;
    public string $customerIdentifier;
    public ?string $externalRefID = null;
    public float $feePercent;
    public ?string $id = null;
    public string $referenceDepositID;
    public string $status;
}

/** Request payload for CreditCardDeposit#load. */
class CreditCardDepositLoadMatch
{
    public string $id;
}

/** Request payload for CreditCardDeposit#create. */
class CreditCardDepositCreateData
{
    public string $accountIdentifier;
    public string $accountNumber;
    public float $amount;
    public float $amountCharged;
    public string $createdDate;
    public string $creditCardToken;
    public string $customerIdentifier;
    public ?string $externalRefID = null;
    public float $feePercent;
    public ?string $id = null;
    public string $referenceDepositID;
    public string $status;
}

/** CreditCardUnregister entity data model. */
class CreditCardUnregister
{
    public string $accountIdentifier;
    public string $createdDate;
    public string $creditCardToken;
    public string $customerIdentifier;
    public string $message;
    public string $token;
}

/** Request payload for CreditCardUnregister#create. */
class CreditCardUnregisterCreateData
{
    public string $accountIdentifier;
    public string $createdDate;
    public string $creditCardToken;
    public string $customerIdentifier;
    public string $message;
    public string $token;
}

/** Customer entity data model. */
class Customer
{
    public array $accounts;
    public string $createdAt;
    public string $customerIdentifier;
    public string $displayName;
    public ?string $id = null;
    public string $status;
}

/** Request payload for Customer#load. */
class CustomerLoadMatch
{
    public string $id;
}

/** Request payload for Customer#list. */
class CustomerListMatch
{
    public ?string $account_display_name = null;
    public ?string $account_identifier = null;
    public ?string $account_max_date_created_at = null;
    public ?string $account_min_date_created_at = null;
    public ?string $account_number = null;
    public ?string $account_status = null;
    public ?string $customer_max_date_created_at = null;
    public ?string $customer_min_date_created_at = null;
    public ?string $display_name = null;
    public ?int $max_result = null;
    public ?string $next_cursor = null;
    public ?bool $paginate = null;
    public ?string $prev_cursor = null;
    public ?string $status = null;
}

/** Request payload for Customer#create. */
class CustomerCreateData
{
    public array $accounts;
    public string $createdAt;
    public string $customerIdentifier;
    public string $displayName;
    public ?string $id = null;
    public string $status;
}

/** EmailTemplateListView entity data model. */
class EmailTemplateListView
{
}

/** EmailTemplateViewVerbose entity data model. */
class EmailTemplateViewVerbose
{
    public string $accentColor;
    public ?array $accessControl = null;
    public ?array $accessControls = null;
    public string $closing;
    public ?string $customerServiceMessage = null;
    public ?array $defaults = null;
    public string $etid;
    public string $fromName;
    public string $headerImage;
    public string $headerImageAltText;
    public string $messageBody;
    public string $name;
    public ?string $smsMessageBody = null;
    public string $subject;
}

/** Request payload for EmailTemplateViewVerbose#load. */
class EmailTemplateViewVerboseLoadMatch
{
    public string $etid;
}

/** Request payload for EmailTemplateViewVerbose#list. */
class EmailTemplateViewVerboseListMatch
{
    public ?int $elements_per_block = null;
    public ?int $page = null;
}

/** Request payload for EmailTemplateViewVerbose#create. */
class EmailTemplateViewVerboseCreateData
{
    public string $accentColor;
    public ?array $accessControl = null;
    public ?array $accessControls = null;
    public string $closing;
    public ?string $customerServiceMessage = null;
    public ?array $defaults = null;
    public string $etid;
    public string $fromName;
    public string $headerImage;
    public string $headerImageAltText;
    public string $messageBody;
    public string $name;
    public ?string $smsMessageBody = null;
    public string $subject;
}

/** Request payload for EmailTemplateViewVerbose#update. */
class EmailTemplateViewVerboseUpdateData
{
    public string $etid;
    public ?string $accentColor = null;
    public ?array $accessControl = null;
    public ?array $accessControls = null;
    public ?string $closing = null;
    public ?string $customerServiceMessage = null;
    public ?array $defaults = null;
    public ?string $fromName = null;
    public ?string $headerImage = null;
    public ?string $headerImageAltText = null;
    public ?string $messageBody = null;
    public ?string $name = null;
    public ?string $smsMessageBody = null;
    public ?string $subject = null;
}

/** EmbeddableResponseDto entity data model. */
class EmbeddableResponseDto
{
    public ?string $url = null;
}

/** Request payload for EmbeddableResponseDto#load. */
class EmbeddableResponseDtoLoadMatch
{
    public string $reference_line_item_id;
}

/** ExchangeRatesWithDisclaimer entity data model. */
class ExchangeRatesWithDisclaimer
{
    public string $baseCurrency;
    public string $baseFx;
    public string $lastModifiedDate;
    public string $rewardCurrency;
}

/** Request payload for ExchangeRatesWithDisclaimer#list. */
class ExchangeRatesWithDisclaimerListMatch
{
    public ?array $base_currency = null;
    public ?int $max_result = null;
    public ?string $next_cursor = null;
    public ?bool $paginate = null;
    public ?string $prev_cursor = null;
    public ?array $reward_currency = null;
}

/** LineItem entity data model. */
class LineItem
{
    public string $accountIdentifier;
    public string $accountNumber;
    public ?array $amountCharged = null;
    public array $amountIssued;
    public ?string $campaign = null;
    public ?bool $canCancel = null;
    public ?bool $canFreeze = null;
    public string $customerIdentifier;
    public string $dateIssued;
    public ?string $deliveryMethod = null;
    public ?string $deliveryStatus = null;
    public string $emailStatus;
    public string $etid;
    public string $expirationDate;
    public ?string $externalReferenceLineItemID = null;
    public ?string $id = null;
    public ?array $lineItemActionHistory = null;
    public ?string $lineItemActionReason = null;
    public ?array $lineItemErrors = null;
    public int $lineNumber;
    public ?string $orderNotes = null;
    public string $orderSource;
    public string $orderStatus;
    public ?string $ptid = null;
    public ?string $purchaseOrderNumber = null;
    public ?int $quantity = null;
    public ?array $recipient = null;
    public ?array $redemptionHistory = null;
    public string $referenceLineItemID;
    public string $referenceOrderID;
    public ?string $reissuedFromReferenceLineItemId = null;
    public ?string $reissuedToReferenceLineItemId = null;
    public ?float $remainingBalance = null;
    public ?array $resendHistory = null;
    public array $reward;
    public string $rewardName;
    public ?string $rewardStatus = null;
    public ?array $rewardViewHistory = null;
    public ?array $sender = null;
    public string $status;
    public string $utid;
}

/** Request payload for LineItem#load. */
class LineItemLoadMatch
{
    public string $id;
}

/** Request payload for LineItem#list. */
class LineItemListMatch
{
    public ?string $account_identifier = null;
    public ?string $campaign = null;
    public ?string $column_sort_ascending = null;
    public ?string $column_sort_name = null;
    public ?string $delivery_method = null;
    public ?string $delivery_status = null;
    public ?int $elements_per_block = null;
    public ?string $email_status = null;
    public ?string $end_date = null;
    public ?string $etid = null;
    public ?string $external_ref_id = null;
    public ?bool $has_remaining_balance = null;
    public ?float $max_remaining_balance = null;
    public ?float $min_remaining_balance = null;
    public ?string $order_note = null;
    public ?string $order_source = null;
    public ?string $order_status = null;
    public ?array $page_key = null;
    public ?bool $page_previous = null;
    public ?string $ptid = null;
    public ?string $purchase_order_number = null;
    public ?string $recipient_city = null;
    public ?string $recipient_country = null;
    public ?string $recipient_email = null;
    public ?string $recipient_first_name = null;
    public ?string $recipient_last_name = null;
    public ?string $recipient_mobile_number = null;
    public ?string $recipient_postal_code = null;
    public ?string $recipient_state_or_province = null;
    public ?string $recipient_street_line1 = null;
    public ?string $recipient_street_line2 = null;
    public ?string $reference_order_id = null;
    public ?string $start_date = null;
    public ?string $status = null;
    public ?string $utid = null;
}

/** Request payload for LineItem#create. */
class LineItemCreateData
{
    public string $reference_line_item_id;
    public string $accountIdentifier;
    public string $accountNumber;
    public ?array $amountCharged = null;
    public array $amountIssued;
    public ?string $campaign = null;
    public ?bool $canCancel = null;
    public ?bool $canFreeze = null;
    public string $customerIdentifier;
    public string $dateIssued;
    public ?string $deliveryMethod = null;
    public ?string $deliveryStatus = null;
    public string $emailStatus;
    public string $etid;
    public string $expirationDate;
    public ?string $externalReferenceLineItemID = null;
    public ?string $id = null;
    public ?array $lineItemActionHistory = null;
    public ?string $lineItemActionReason = null;
    public ?array $lineItemErrors = null;
    public int $lineNumber;
    public ?string $orderNotes = null;
    public string $orderSource;
    public string $orderStatus;
    public ?string $ptid = null;
    public ?string $purchaseOrderNumber = null;
    public ?int $quantity = null;
    public ?array $recipient = null;
    public ?array $redemptionHistory = null;
    public string $referenceLineItemID;
    public string $referenceOrderID;
    public ?string $reissuedFromReferenceLineItemId = null;
    public ?string $reissuedToReferenceLineItemId = null;
    public ?float $remainingBalance = null;
    public ?array $resendHistory = null;
    public array $reward;
    public string $rewardName;
    public ?string $rewardStatus = null;
    public ?array $rewardViewHistory = null;
    public ?array $sender = null;
    public string $status;
    public string $utid;
}

/** LowBalanceAlertListView entity data model. */
class LowBalanceAlertListView
{
    public ?string $accountIdentifier = null;
    public ?string $balanceAlertDisplayName = null;
    public ?string $balanceAlertID = null;
    public ?array $balanceAlertNotification = null;
    public ?float $balanceAlertThreshold = null;
    public ?string $createdAt = null;
    public ?string $customerIdentifier = null;
}

/** Request payload for LowBalanceAlertListView#list. */
class LowBalanceAlertListViewListMatch
{
    public string $account_identifier;
    public string $customer_identifier;
    public ?string $balance_alert_display_name = null;
    public ?array $balance_alert_notification = null;
    public ?float $balance_alert_threshold = null;
    public ?int $elements_per_block = null;
    public ?int $page = null;
}

/** LowBalanceAlertView entity data model. */
class LowBalanceAlertView
{
    public ?string $accountIdentifier = null;
    public ?string $balanceAlertDisplayName = null;
    public ?string $balanceAlertID = null;
    public ?array $balanceAlertNotification = null;
    public ?float $balanceAlertThreshold = null;
    public ?string $createdAt = null;
    public ?string $customerIdentifier = null;
}

/** Request payload for LowBalanceAlertView#load. */
class LowBalanceAlertViewLoadMatch
{
    public string $account_id;
    public string $balance_alert_id;
    public string $customer_identifier;
}

/** Request payload for LowBalanceAlertView#create. */
class LowBalanceAlertViewCreateData
{
    public string $account_identifier;
    public string $customer_identifier;
    public ?string $accountIdentifier = null;
    public ?string $balanceAlertDisplayName = null;
    public ?string $balanceAlertID = null;
    public ?array $balanceAlertNotification = null;
    public ?float $balanceAlertThreshold = null;
    public ?string $createdAt = null;
    public ?string $customerIdentifier = null;
}

/** Request payload for LowBalanceAlertView#update. */
class LowBalanceAlertViewUpdateData
{
    public string $account_id;
    public string $balance_alert_id;
    public string $customer_identifier;
    public ?string $accountIdentifier = null;
    public ?string $balanceAlertDisplayName = null;
    public ?string $balanceAlertID = null;
    public ?array $balanceAlertNotification = null;
    public ?float $balanceAlertThreshold = null;
    public ?string $createdAt = null;
    public ?string $customerIdentifier = null;
}

/** MobileCountry entity data model. */
class MobileCountry
{
    public ?string $countryCode = null;
    public ?string $countryName = null;
    public ?string $isoCode = null;
    public ?string $languageCode = null;
}

/** Request payload for MobileCountry#load. */
class MobileCountryLoadMatch
{
    public ?string $countryCode = null;
    public ?string $countryName = null;
    public ?string $isoCode = null;
    public ?string $languageCode = null;
}

/** N14Webhook entity data model. */
class N14Webhook
{
    public ?array $categories = null;
    public ?string $createdAt = null;
    public ?array $eventTypes = null;
    public ?string $expiresAt = null;
    public ?array $headers = null;
    public ?string $hmacSharedSecretKey = null;
    public ?string $id = null;
    public ?string $payloadVerificationMethod = null;
    public ?string $signingCertificate = null;
    public ?string $updatedAt = null;
    public string $url;
    public ?string $webhookId = null;
}

/** Request payload for N14Webhook#load. */
class N14WebhookLoadMatch
{
    public string $webhook_id;
    public ?int $from_revision = null;
    public ?int $max_result = null;
    public ?string $next_cursor = null;
    public ?string $prev_cursor = null;
    public ?int $to_revision = null;
}

/** Request payload for N14Webhook#list. */
class N14WebhookListMatch
{
    public ?array $category = null;
    public ?string $created_at_from = null;
    public ?string $created_at_to = null;
    public ?array $event_type = null;
    public ?string $expires_at_from = null;
    public ?string $expires_at_to = null;
    public ?string $header_name = null;
    public ?string $header_value = null;
    public ?int $max_result = null;
    public ?string $next_cursor = null;
    public ?string $prev_cursor = null;
    public ?string $url = null;
}

/** Request payload for N14Webhook#create. */
class N14WebhookCreateData
{
    public string $test_name;
    public string $webhook_id;
    public ?array $categories = null;
    public ?string $createdAt = null;
    public ?array $eventTypes = null;
    public ?string $expiresAt = null;
    public ?array $headers = null;
    public ?string $hmacSharedSecretKey = null;
    public ?string $id = null;
    public ?string $payloadVerificationMethod = null;
    public ?string $signingCertificate = null;
    public ?string $updatedAt = null;
    public string $url;
    public ?string $webhookId = null;
}

/** Request payload for N14Webhook#remove. */
class N14WebhookRemoveMatch
{
    public string $id;
}

/** N1Customer entity data model. */
class N1Customer
{
}

/** Request payload for N1Customer#load. */
class N1CustomerLoadMatch
{
    public string $customer_identifier;
    public ?string $account_number = null;
    public ?string $contact_email = null;
    public ?array $currency_code = null;
    public ?string $display_name = null;
    public ?array $funding_notification_email = null;
    public ?float $max_balance = null;
    public ?string $max_date_created_at = null;
    public ?int $max_result = null;
    public ?float $min_balance = null;
    public ?string $min_date_created_at = null;
    public ?string $next_cursor = null;
    public ?bool $paginate = null;
    public ?string $prev_cursor = null;
    public ?string $status = null;
}

/** N2Account entity data model. */
class N2Account
{
}

/** N3Fund entity data model. */
class N3Fund
{
}

/** N8LineItem entity data model. */
class N8LineItem
{
    public ?string $campaign = null;
    public ?string $id = null;
    public ?string $orderNotes = null;
    public ?string $purchaseOrderNumber = null;
}

/** Request payload for N8LineItem#update. */
class N8LineItemUpdateData
{
    public string $id;
    public ?string $campaign = null;
    public ?string $orderNotes = null;
    public ?string $purchaseOrderNumber = null;
}

/** N9DigitalTemplate entity data model. */
class N9DigitalTemplate
{
    public ?string $id = null;
}

/** Request payload for N9DigitalTemplate#remove. */
class N9DigitalTemplateRemoveMatch
{
    public string $id;
}

/** Order entity data model. */
class Order
{
    public string $accountIdentifier;
    public string $accountNumber;
    public float $amount;
    public array $amountCharged;
    public ?array $asyncOrderEntity = null;
    public string $campaign;
    public string $createdAt;
    public ?array $customFields = null;
    public string $customerIdentifier;
    public ?string $deliveryMethod = null;
    public ?array $denomination = null;
    public string $emailSubject;
    public string $etid;
    public ?string $expirationDate = null;
    public ?string $externalRefID = null;
    public ?string $id = null;
    public ?string $lineItemStatus = null;
    public string $message;
    public ?string $notes = null;
    public ?string $orderClientSource = null;
    public ?bool $orderExternalRefIdDupe = null;
    public ?string $orderStatus = null;
    public ?string $ptid = null;
    public ?string $purchaseOrderNumber = null;
    public ?array $recipient = null;
    public ?string $redemptionInstructions = null;
    public ?string $referenceLineItemID = null;
    public string $referenceOrderID;
    public array $reward;
    public string $rewardName;
    public ?bool $sendEmail = null;
    public ?array $sender = null;
    public string $status;
    public string $utid;
}

/** Request payload for Order#load. */
class OrderLoadMatch
{
    public string $id;
}

/** Request payload for Order#list. */
class OrderListMatch
{
    public ?string $account_identifier = null;
    public ?string $campaign = null;
    public ?string $currency_code = null;
    public ?string $customer_identifier = null;
    public ?string $delivery_method = null;
    public ?int $elements_per_block = null;
    public ?string $end_date = null;
    public ?string $external_ref_id = null;
    public ?string $line_item_note = null;
    public ?string $line_item_status = null;
    public ?float $max_amount = null;
    public ?float $min_amount = null;
    public ?string $note = null;
    public ?string $order_status = null;
    public ?int $page = null;
    public ?string $ptid = null;
    public ?string $purchase_order_number = null;
    public ?string $recipient_email = null;
    public ?string $recipient_first_name = null;
    public ?string $recipient_last_name = null;
    public ?string $recipient_mobile_number = null;
    public ?string $reward_name = null;
    public ?bool $send_email = null;
    public ?string $sender_email = null;
    public ?string $sender_first_name = null;
    public ?string $sender_last_name = null;
    public ?string $start_date = null;
    public ?string $status = null;
    public ?string $utid = null;
}

/** Request payload for Order#create. */
class OrderCreateData
{
    public string $accountIdentifier;
    public string $accountNumber;
    public float $amount;
    public array $amountCharged;
    public ?array $asyncOrderEntity = null;
    public string $campaign;
    public string $createdAt;
    public ?array $customFields = null;
    public string $customerIdentifier;
    public ?string $deliveryMethod = null;
    public ?array $denomination = null;
    public string $emailSubject;
    public string $etid;
    public ?string $expirationDate = null;
    public ?string $externalRefID = null;
    public ?string $id = null;
    public ?string $lineItemStatus = null;
    public string $message;
    public ?string $notes = null;
    public ?string $orderClientSource = null;
    public ?bool $orderExternalRefIdDupe = null;
    public ?string $orderStatus = null;
    public ?string $ptid = null;
    public ?string $purchaseOrderNumber = null;
    public ?array $recipient = null;
    public ?string $redemptionInstructions = null;
    public ?string $referenceLineItemID = null;
    public string $referenceOrderID;
    public array $reward;
    public string $rewardName;
    public ?bool $sendEmail = null;
    public ?array $sender = null;
    public string $status;
    public string $utid;
}

/** OrderViewSummary entity data model. */
class OrderViewSummary
{
    public ?float $amount = null;
    public ?string $deliveryMethod = null;
    public ?string $notes = null;
    public ?string $otherReason = null;
    public string $reasonCode;
    public ?array $recipient = null;
}

/** Request payload for OrderViewSummary#create. */
class OrderViewSummaryCreateData
{
    public string $reference_line_item_id;
    public ?float $amount = null;
    public ?string $deliveryMethod = null;
    public ?string $notes = null;
    public ?string $otherReason = null;
    public string $reasonCode;
    public ?array $recipient = null;
}

/** PrepaidCardInfo entity data model. */
class PrepaidCardInfo
{
    public ?array $balance = null;
    public ?array $card = null;
    public ?array $comments = null;
    public ?array $registration = null;
}

/** Request payload for PrepaidCardInfo#load. */
class PrepaidCardInfoLoadMatch
{
    public string $reference_line_item_id;
}

/** PrepaidCardTransaction entity data model. */
class PrepaidCardTransaction
{
    public ?array $journal = null;
    public array $page;
}

/** Request payload for PrepaidCardTransaction#load. */
class PrepaidCardTransactionLoadMatch
{
    public string $reference_line_item_id;
    public ?int $page = null;
}

/** ReissueCard entity data model. */
class ReissueCard
{
    public ?string $commentText = null;
    public ?string $id = null;
    public string $reason;
    public ?string $status = null;
    public string $updatedBy;
}

/** Request payload for ReissueCard#create. */
class ReissueCardCreateData
{
    public string $id;
    public ?string $commentText = null;
    public string $reason;
    public ?string $status = null;
    public string $updatedBy;
}

/** ReplacementReason entity data model. */
class ReplacementReason
{
    public ?array $replacementReasons = null;
}

/** Request payload for ReplacementReason#list. */
class ReplacementReasonListMatch
{
    public ?array $replacementReasons = null;
}

/** Resend entity data model. */
class Resend
{
    public ?string $newDeliveryMethod = null;
    public ?string $newEmail = null;
    public ?string $newEtid = null;
    public ?string $newMobile = null;
    public ?string $newMobileNumber = null;
    public ?string $otherReason = null;
    public ?string $reasonCode = null;
}

/** Request payload for Resend#create. */
class ResendCreateData
{
    public string $line_item_id;
    public ?string $newDeliveryMethod = null;
    public ?string $newEmail = null;
    public ?string $newEtid = null;
    public ?string $newMobile = null;
    public ?string $newMobileNumber = null;
    public ?string $otherReason = null;
    public ?string $reasonCode = null;
}

/** RewardReasonsMap entity data model. */
class RewardReasonsMap
{
    public ?array $CANCEL = null;
    public ?array $CANCEL_AND_REISSUE = null;
    public ?array $FREEZE = null;
    public ?array $UNFREEZE = null;
}

/** Request payload for RewardReasonsMap#load. */
class RewardReasonsMapLoadMatch
{
    public ?array $CANCEL = null;
    public ?array $CANCEL_AND_REISSUE = null;
    public ?array $FREEZE = null;
    public ?array $UNFREEZE = null;
}

/** TransferFund entity data model. */
class TransferFund
{
    public float $amount;
    public ?string $externalRefID = null;
    public ?string $transferDate = null;
    public ?array $transferFrom = null;
    public ?string $transferNotes = null;
    public ?array $transferTo = null;
    public ?float $transferredAmount = null;
}

/** Request payload for TransferFund#create. */
class TransferFundCreateData
{
    public float $amount;
    public ?string $externalRefID = null;
    public ?string $transferDate = null;
    public ?array $transferFrom = null;
    public ?string $transferNotes = null;
    public ?array $transferTo = null;
    public ?float $transferredAmount = null;
}

/** UpdateAccount entity data model. */
class UpdateAccount
{
    public ?string $id = null;
    public array $registration;
    public ?string $status = null;
    public ?string $updatedBy = null;
}

/** Request payload for UpdateAccount#create. */
class UpdateAccountCreateData
{
    public string $id;
    public array $registration;
    public ?string $status = null;
    public ?string $updatedBy = null;
}

/** UpdateWebhookSubscriptionResponseView entity data model. */
class UpdateWebhookSubscriptionResponseView
{
    public ?array $categories = null;
    public ?string $createdAt = null;
    public ?array $eventTypes = null;
    public ?string $expiresAt = null;
    public ?array $headers = null;
    public ?string $hmacSharedSecretKey = null;
    public ?string $payloadVerificationMethod = null;
    public ?string $signingCertificate = null;
    public ?string $updatedAt = null;
    public ?string $url = null;
    public ?string $webhookId = null;
}

/** Request payload for UpdateWebhookSubscriptionResponseView#update. */
class UpdateWebhookSubscriptionResponseViewUpdateData
{
    public string $webhook_id;
    public ?array $categories = null;
    public ?string $createdAt = null;
    public ?array $eventTypes = null;
    public ?string $expiresAt = null;
    public ?array $headers = null;
    public ?string $hmacSharedSecretKey = null;
    public ?string $payloadVerificationMethod = null;
    public ?string $signingCertificate = null;
    public ?string $updatedAt = null;
    public ?string $url = null;
    public ?string $webhookId = null;
}

/** Webhook entity data model. */
class Webhook
{
    public ?array $categories = null;
    public ?string $createdAt = null;
    public ?array $eventTypes = null;
    public ?string $expiresAt = null;
    public ?array $headers = null;
    public ?string $hmacSharedSecretKey = null;
    public ?string $id = null;
    public ?string $payloadVerificationMethod = null;
    public ?string $signingCertificate = null;
    public ?string $updatedAt = null;
    public ?string $url = null;
    public ?string $webhookId = null;
}

/** Request payload for Webhook#load. */
class WebhookLoadMatch
{
    public string $id;
}

/** Request payload for Webhook#create. */
class WebhookCreateData
{
    public string $id;
    public ?int $from_revision = null;
    public ?int $to_revision = null;
    public ?array $categories = null;
    public ?string $createdAt = null;
    public ?array $eventTypes = null;
    public ?string $expiresAt = null;
    public ?array $headers = null;
    public ?string $hmacSharedSecretKey = null;
    public ?string $payloadVerificationMethod = null;
    public ?string $signingCertificate = null;
    public ?string $updatedAt = null;
    public ?string $url = null;
    public ?string $webhookId = null;
}

