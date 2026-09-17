-- Typed models for the Tangocard SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Account
---@field accountIdentifier string
---@field accountNumber string
---@field contactEmail? string
---@field createdAt string
---@field currencyCode string
---@field currentBalance number
---@field displayName string
---@field fundingNotification? table
---@field id? string
---@field status string

---@class AccountLoadMatch
---@field id string

---@class AccountUpdateData
---@field customer_identifier string
---@field id string
---@field accountIdentifier? string
---@field accountNumber? string
---@field contactEmail? string
---@field createdAt? string
---@field currencyCode? string
---@field currentBalance? number
---@field displayName? string
---@field fundingNotification? table
---@field status? string

---@class AddCommentEscalation
---@field assignee? number
---@field commentText string
---@field id? string
---@field inquiryCategoryCode? number
---@field inquiryIdNumber? number
---@field inquirySource? string
---@field inquiryTypeCode? number
---@field issueDescription string
---@field status? string
---@field userId? string

---@class AddCommentEscalationCreateData
---@field id string
---@field assignee? number
---@field commentText string
---@field inquiryCategoryCode? number
---@field inquiryIdNumber? number
---@field inquirySource? string
---@field inquiryTypeCode? number
---@field issueDescription string
---@field status? string
---@field userId? string

---@class AllEventType
---@field category? string
---@field eventTypes? table

---@class AllEventTypeListMatch
---@field category? string
---@field max_result? number
---@field next_cursor? string
---@field prev_cursor? string

---@class AsyncOrder
---@field accountIdentifier string
---@field accountNumber string
---@field amountCharged? table
---@field campaign? string
---@field createdAt? string
---@field customerIdentifier string
---@field duplicateLineItemRefIds? table
---@field externalRefID? string
---@field failedLineItems? table
---@field fulfillBy? string
---@field lineItems table
---@field notes? string
---@field orderStatus? string
---@field purchaseOrderNumber? string
---@field referenceOrderID string
---@field sender? table
---@field status? string
---@field totalLineItems? number
---@field totalLineItemsRows? number

---@class AsyncOrderListMatch
---@field account_identifier? string
---@field campaign? string
---@field currency_code? string
---@field customer_identifier? string
---@field delivery_method? string
---@field elements_per_block? string
---@field end_date? string
---@field external_ref_id? string
---@field line_item_note? string
---@field line_item_status? string
---@field max_amount? string
---@field max_result? string
---@field min_amount? string
---@field next_cursor? string
---@field note? string
---@field order_status? string
---@field page? string
---@field prev_cursor? string
---@field ptid? string
---@field purchase_order_number? string
---@field recipient_email? string
---@field recipient_first_name? string
---@field recipient_last_name? string
---@field recipient_mobile_number? string
---@field reward_name? string
---@field send_email? string
---@field sender_email? string
---@field sender_first_name? string
---@field sender_last_name? string
---@field start_date? string
---@field utid? string

---@class AsyncOrderCreateData
---@field accountIdentifier string
---@field accountNumber string
---@field amountCharged? table
---@field campaign? string
---@field createdAt? string
---@field customerIdentifier string
---@field duplicateLineItemRefIds? table
---@field externalRefID? string
---@field failedLineItems? table
---@field fulfillBy? string
---@field lineItems table
---@field notes? string
---@field orderStatus? string
---@field purchaseOrderNumber? string
---@field referenceOrderID string
---@field sender? table
---@field status? string
---@field totalLineItems? number
---@field totalLineItemsRows? number

---@class AsyncOrderDetailView
---@field accountIdentifier? string
---@field amountCharged? table
---@field campaign? string
---@field completedAt? string
---@field createdAt? string
---@field customerIdentifier? string
---@field externalRefID? string
---@field id? string
---@field lineItems? table
---@field notes? string
---@field orderErrors? table
---@field orderStatus? string
---@field pagination? table
---@field purchaseOrderNumber? string
---@field referenceOrderID? string
---@field sender? table
---@field totalLineItems? number

---@class AsyncOrderDetailViewLoadMatch
---@field account_identifier string
---@field customer_identifier string
---@field external_ref_id string
---@field external_ref_line_item_i_d? table
---@field failed_only? boolean
---@field max_result? number
---@field next_cursor? string
---@field prev_cursor? string
---@field reference_line_item_i_d? table

---@class AsyncOrderDetailViewUpdateData
---@field account_identifier string
---@field customer_identifier string
---@field external_ref_id string
---@field accountIdentifier? string
---@field amountCharged? table
---@field campaign? string
---@field completedAt? string
---@field createdAt? string
---@field customerIdentifier? string
---@field externalRefID? string
---@field id? string
---@field lineItems? table
---@field notes? string
---@field orderErrors? table
---@field orderStatus? string
---@field pagination? table
---@field purchaseOrderNumber? string
---@field referenceOrderID? string
---@field sender? table
---@field totalLineItems? number

---@class AsyncOrderLineItemsView
---@field accountIdentifier string
---@field amountCharged? table
---@field campaign? string
---@field customerIdentifier string
---@field externalRefID? string
---@field lineItems? table
---@field orderErrors? table
---@field orderNotes? string
---@field orderStatus string
---@field pagination? table
---@field purchaseOrderNumber? string
---@field referenceOrderID string
---@field sender? table

---@class AsyncOrderLineItemsViewListMatch
---@field account_id string
---@field customer_id string
---@field external_ref_id string
---@field external_ref_line_item_i_d? table
---@field failed_only? boolean
---@field max_result? number
---@field next_cursor? string
---@field prev_cursor? string
---@field reference_line_item_i_d? table

---@class AsyncReasonCodesView

---@class AsyncReasonCodesViewLoadMatch

---@class AsyncUpdateLineItemView
---@field deliveryDate? string
---@field lineItemNote? string
---@field senderInfo? table

---@class AsyncUpdateLineItemViewUpdateData
---@field reference_line_item_id string
---@field deliveryDate? string
---@field lineItemNote? string
---@field senderInfo? table

---@class BalanceAlertView

---@class BalanceAlertViewRemoveMatch
---@field account_id string
---@field balance_alert_id string
---@field customer_identifier string

---@class BrandCategoriesView
---@field description? string
---@field identifier? string

---@class BrandCategoriesViewListMatch
---@field description? string
---@field identifier? string

---@class Catalog
---@field barcodeType? string
---@field brandKey string
---@field brandName string
---@field brandRequirements table
---@field categories table
---@field createdDate string
---@field description string
---@field disclaimer string
---@field imageUrls table
---@field items table
---@field lastUpdateDate string
---@field shortDescription string
---@field status string
---@field terms string

---@class CatalogListMatch
---@field brand_key? string
---@field brand_name? string
---@field category_id? table
---@field country? string
---@field currency_code? string
---@field fulfillment_type? table
---@field item_attribute? table
---@field reward_name? string
---@field reward_type? table
---@field status? string
---@field utid? string
---@field verbose? boolean

---@class ChoiceProduct
---@field countries? table
---@field currencyCode? string
---@field id? string
---@field rewardName? string
---@field utid? string

---@class ChoiceProductLoadMatch
---@field id string

---@class ChoiceProductListMatch
---@field country? table
---@field currency_code? string
---@field reward_name? string

---@class CountryViewSummary
---@field countryName string
---@field preferredCurrency string
---@field threeLetterCode string
---@field twoLetterCode string

---@class CountryViewSummaryLoadMatch
---@field country? string
---@field max_result? number
---@field next_cursor? string
---@field preferred_currency? string
---@field prev_cursor? string

---@class CreateAccountCriterion
---@field accountIdentifier string
---@field contactEmail string
---@field currencyCode? string
---@field displayName string
---@field fundingNotification? table

---@class CreateAccountCriterionCreateData
---@field customer_identifier string
---@field accountIdentifier string
---@field contactEmail string
---@field currencyCode? string
---@field displayName string
---@field fundingNotification? table

---@class CreateCustomerCriterion

---@class CredentialTypeView
---@field credentialType string
---@field description? string

---@class CredentialTypeViewListMatch
---@field credentialType? string
---@field description? string

---@class CreditCard
---@field accountIdentifier string
---@field accountNumber string
---@field activationDate string
---@field billingAddress table
---@field contactInformation table
---@field createdDate string
---@field creditCard table
---@field customerIdentifier string
---@field expirationDate string
---@field id? string
---@field ipAddress string
---@field label string
---@field lastFourDigits string
---@field status string
---@field token string

---@class CreditCardLoadMatch
---@field id string

---@class CreditCardCreateData
---@field accountIdentifier string
---@field accountNumber string
---@field activationDate string
---@field billingAddress table
---@field contactInformation table
---@field createdDate string
---@field creditCard table
---@field customerIdentifier string
---@field expirationDate string
---@field id? string
---@field ipAddress string
---@field label string
---@field lastFourDigits string
---@field status string
---@field token string

---@class CreditCardDeposit
---@field accountIdentifier string
---@field accountNumber string
---@field amount number
---@field amountCharged number
---@field createdDate string
---@field creditCardToken string
---@field customerIdentifier string
---@field externalRefID? string
---@field feePercent number
---@field id? string
---@field referenceDepositID string
---@field status string

---@class CreditCardDepositLoadMatch
---@field id string

---@class CreditCardDepositCreateData
---@field accountIdentifier string
---@field accountNumber string
---@field amount number
---@field amountCharged number
---@field createdDate string
---@field creditCardToken string
---@field customerIdentifier string
---@field externalRefID? string
---@field feePercent number
---@field id? string
---@field referenceDepositID string
---@field status string

---@class CreditCardUnregister
---@field accountIdentifier string
---@field createdDate string
---@field creditCardToken string
---@field customerIdentifier string
---@field message string
---@field token string

---@class CreditCardUnregisterCreateData
---@field accountIdentifier string
---@field createdDate string
---@field creditCardToken string
---@field customerIdentifier string
---@field message string
---@field token string

---@class Customer
---@field accounts table
---@field createdAt string
---@field customerIdentifier string
---@field displayName string
---@field id? string
---@field status string

---@class CustomerLoadMatch
---@field id string

---@class CustomerListMatch
---@field account_display_name? string
---@field account_identifier? string
---@field account_max_date_created_at? string
---@field account_min_date_created_at? string
---@field account_number? string
---@field account_status? string
---@field customer_max_date_created_at? string
---@field customer_min_date_created_at? string
---@field display_name? string
---@field max_result? number
---@field next_cursor? string
---@field paginate? boolean
---@field prev_cursor? string
---@field status? string

---@class CustomerCreateData
---@field accounts table
---@field createdAt string
---@field customerIdentifier string
---@field displayName string
---@field id? string
---@field status string

---@class EmailTemplateListView

---@class EmailTemplateViewVerbose
---@field accentColor string
---@field accessControl? table
---@field accessControls? table
---@field closing string
---@field customerServiceMessage? string
---@field defaults? table
---@field etid string
---@field fromName string
---@field headerImage string
---@field headerImageAltText string
---@field messageBody string
---@field name string
---@field smsMessageBody? string
---@field subject string

---@class EmailTemplateViewVerboseLoadMatch
---@field etid string

---@class EmailTemplateViewVerboseListMatch
---@field elements_per_block? number
---@field page? number

---@class EmailTemplateViewVerboseCreateData
---@field accentColor string
---@field accessControl? table
---@field accessControls? table
---@field closing string
---@field customerServiceMessage? string
---@field defaults? table
---@field etid string
---@field fromName string
---@field headerImage string
---@field headerImageAltText string
---@field messageBody string
---@field name string
---@field smsMessageBody? string
---@field subject string

---@class EmailTemplateViewVerboseUpdateData
---@field etid string
---@field accentColor? string
---@field accessControl? table
---@field accessControls? table
---@field closing? string
---@field customerServiceMessage? string
---@field defaults? table
---@field fromName? string
---@field headerImage? string
---@field headerImageAltText? string
---@field messageBody? string
---@field name? string
---@field smsMessageBody? string
---@field subject? string

---@class EmbeddableResponseDto
---@field url? string

---@class EmbeddableResponseDtoLoadMatch
---@field reference_line_item_id string

---@class ExchangeRatesWithDisclaimer
---@field baseCurrency string
---@field baseFx string
---@field lastModifiedDate string
---@field rewardCurrency string

---@class ExchangeRatesWithDisclaimerListMatch
---@field base_currency? table
---@field max_result? number
---@field next_cursor? string
---@field paginate? boolean
---@field prev_cursor? string
---@field reward_currency? table

---@class LineItem
---@field accountIdentifier string
---@field accountNumber string
---@field amountCharged? table
---@field amountIssued table
---@field campaign? string
---@field canCancel? boolean
---@field canFreeze? boolean
---@field customerIdentifier string
---@field dateIssued string
---@field deliveryMethod? string
---@field deliveryStatus? string
---@field emailStatus string
---@field etid string
---@field expirationDate string
---@field externalReferenceLineItemID? string
---@field id? string
---@field lineItemActionHistory? table
---@field lineItemActionReason? string
---@field lineItemErrors? table
---@field lineNumber number
---@field orderNotes? string
---@field orderSource string
---@field orderStatus string
---@field ptid? string
---@field purchaseOrderNumber? string
---@field quantity? number
---@field recipient? table
---@field redemptionHistory? table
---@field referenceLineItemID string
---@field referenceOrderID string
---@field reissuedFromReferenceLineItemId? string
---@field reissuedToReferenceLineItemId? string
---@field remainingBalance? number
---@field resendHistory? table
---@field reward table
---@field rewardName string
---@field rewardStatus? string
---@field rewardViewHistory? table
---@field sender? table
---@field status string
---@field utid string

---@class LineItemLoadMatch
---@field id string

---@class LineItemListMatch
---@field account_identifier? string
---@field campaign? string
---@field column_sort_ascending? string
---@field column_sort_name? string
---@field delivery_method? string
---@field delivery_status? string
---@field elements_per_block? number
---@field email_status? string
---@field end_date? string
---@field etid? string
---@field external_ref_id? string
---@field has_remaining_balance? boolean
---@field max_remaining_balance? number
---@field min_remaining_balance? number
---@field order_note? string
---@field order_source? string
---@field order_status? string
---@field page_key? table
---@field page_previous? boolean
---@field ptid? string
---@field purchase_order_number? string
---@field recipient_city? string
---@field recipient_country? string
---@field recipient_email? string
---@field recipient_first_name? string
---@field recipient_last_name? string
---@field recipient_mobile_number? string
---@field recipient_postal_code? string
---@field recipient_state_or_province? string
---@field recipient_street_line1? string
---@field recipient_street_line2? string
---@field reference_order_id? string
---@field start_date? string
---@field status? string
---@field utid? string

---@class LineItemCreateData
---@field reference_line_item_id string
---@field accountIdentifier string
---@field accountNumber string
---@field amountCharged? table
---@field amountIssued table
---@field campaign? string
---@field canCancel? boolean
---@field canFreeze? boolean
---@field customerIdentifier string
---@field dateIssued string
---@field deliveryMethod? string
---@field deliveryStatus? string
---@field emailStatus string
---@field etid string
---@field expirationDate string
---@field externalReferenceLineItemID? string
---@field id? string
---@field lineItemActionHistory? table
---@field lineItemActionReason? string
---@field lineItemErrors? table
---@field lineNumber number
---@field orderNotes? string
---@field orderSource string
---@field orderStatus string
---@field ptid? string
---@field purchaseOrderNumber? string
---@field quantity? number
---@field recipient? table
---@field redemptionHistory? table
---@field referenceLineItemID string
---@field referenceOrderID string
---@field reissuedFromReferenceLineItemId? string
---@field reissuedToReferenceLineItemId? string
---@field remainingBalance? number
---@field resendHistory? table
---@field reward table
---@field rewardName string
---@field rewardStatus? string
---@field rewardViewHistory? table
---@field sender? table
---@field status string
---@field utid string

---@class LowBalanceAlertListView
---@field accountIdentifier? string
---@field balanceAlertDisplayName? string
---@field balanceAlertID? string
---@field balanceAlertNotification? table
---@field balanceAlertThreshold? number
---@field createdAt? string
---@field customerIdentifier? string

---@class LowBalanceAlertListViewListMatch
---@field account_identifier string
---@field customer_identifier string
---@field balance_alert_display_name? string
---@field balance_alert_notification? table
---@field balance_alert_threshold? number
---@field elements_per_block? number
---@field page? number

---@class LowBalanceAlertView
---@field accountIdentifier? string
---@field balanceAlertDisplayName? string
---@field balanceAlertID? string
---@field balanceAlertNotification? table
---@field balanceAlertThreshold? number
---@field createdAt? string
---@field customerIdentifier? string

---@class LowBalanceAlertViewLoadMatch
---@field account_id string
---@field balance_alert_id string
---@field customer_identifier string

---@class LowBalanceAlertViewCreateData
---@field account_identifier string
---@field customer_identifier string
---@field accountIdentifier? string
---@field balanceAlertDisplayName? string
---@field balanceAlertID? string
---@field balanceAlertNotification? table
---@field balanceAlertThreshold? number
---@field createdAt? string
---@field customerIdentifier? string

---@class LowBalanceAlertViewUpdateData
---@field account_id string
---@field balance_alert_id string
---@field customer_identifier string
---@field accountIdentifier? string
---@field balanceAlertDisplayName? string
---@field balanceAlertID? string
---@field balanceAlertNotification? table
---@field balanceAlertThreshold? number
---@field createdAt? string
---@field customerIdentifier? string

---@class MobileCountry
---@field countryCode? string
---@field countryName? string
---@field isoCode? string
---@field languageCode? string

---@class MobileCountryLoadMatch
---@field countryCode? string
---@field countryName? string
---@field isoCode? string
---@field languageCode? string

---@class N14Webhook
---@field categories? table
---@field createdAt? string
---@field eventTypes? table
---@field expiresAt? string
---@field headers? table
---@field hmacSharedSecretKey? string
---@field id? string
---@field payloadVerificationMethod? string
---@field signingCertificate? string
---@field updatedAt? string
---@field url string
---@field webhookId? string

---@class N14WebhookLoadMatch
---@field webhook_id string
---@field from_revision? number
---@field max_result? number
---@field next_cursor? string
---@field prev_cursor? string
---@field to_revision? number

---@class N14WebhookListMatch
---@field category? table
---@field created_at_from? string
---@field created_at_to? string
---@field event_type? table
---@field expires_at_from? string
---@field expires_at_to? string
---@field header_name? string
---@field header_value? string
---@field max_result? number
---@field next_cursor? string
---@field prev_cursor? string
---@field url? string

---@class N14WebhookCreateData
---@field test_name string
---@field webhook_id string
---@field categories? table
---@field createdAt? string
---@field eventTypes? table
---@field expiresAt? string
---@field headers? table
---@field hmacSharedSecretKey? string
---@field id? string
---@field payloadVerificationMethod? string
---@field signingCertificate? string
---@field updatedAt? string
---@field url string
---@field webhookId? string

---@class N14WebhookRemoveMatch
---@field id string

---@class N1Customer

---@class N1CustomerLoadMatch
---@field customer_identifier string
---@field account_number? string
---@field contact_email? string
---@field currency_code? table
---@field display_name? string
---@field funding_notification_email? table
---@field max_balance? number
---@field max_date_created_at? string
---@field max_result? number
---@field min_balance? number
---@field min_date_created_at? string
---@field next_cursor? string
---@field paginate? boolean
---@field prev_cursor? string
---@field status? string

---@class N2Account

---@class N3Fund

---@class N8LineItem
---@field campaign? string
---@field id? string
---@field orderNotes? string
---@field purchaseOrderNumber? string

---@class N8LineItemUpdateData
---@field id string
---@field campaign? string
---@field orderNotes? string
---@field purchaseOrderNumber? string

---@class N9DigitalTemplate
---@field id? string

---@class N9DigitalTemplateRemoveMatch
---@field id string

---@class Order
---@field accountIdentifier string
---@field accountNumber string
---@field amount number
---@field amountCharged table
---@field asyncOrderEntity? table
---@field campaign string
---@field createdAt string
---@field customFields? table
---@field customerIdentifier string
---@field deliveryMethod? string
---@field denomination? table
---@field emailSubject string
---@field etid string
---@field expirationDate? string
---@field externalRefID? string
---@field id? string
---@field lineItemStatus? string
---@field message string
---@field notes? string
---@field orderClientSource? string
---@field orderExternalRefIdDupe? boolean
---@field orderStatus? string
---@field ptid? string
---@field purchaseOrderNumber? string
---@field recipient? table
---@field redemptionInstructions? string
---@field referenceLineItemID? string
---@field referenceOrderID string
---@field reward table
---@field rewardName string
---@field sendEmail? boolean
---@field sender? table
---@field status string
---@field utid string

---@class OrderLoadMatch
---@field id string

---@class OrderListMatch
---@field account_identifier? string
---@field campaign? string
---@field currency_code? string
---@field customer_identifier? string
---@field delivery_method? string
---@field elements_per_block? number
---@field end_date? string
---@field external_ref_id? string
---@field line_item_note? string
---@field line_item_status? string
---@field max_amount? number
---@field min_amount? number
---@field note? string
---@field order_status? string
---@field page? number
---@field ptid? string
---@field purchase_order_number? string
---@field recipient_email? string
---@field recipient_first_name? string
---@field recipient_last_name? string
---@field recipient_mobile_number? string
---@field reward_name? string
---@field send_email? boolean
---@field sender_email? string
---@field sender_first_name? string
---@field sender_last_name? string
---@field start_date? string
---@field status? string
---@field utid? string

---@class OrderCreateData
---@field accountIdentifier string
---@field accountNumber string
---@field amount number
---@field amountCharged table
---@field asyncOrderEntity? table
---@field campaign string
---@field createdAt string
---@field customFields? table
---@field customerIdentifier string
---@field deliveryMethod? string
---@field denomination? table
---@field emailSubject string
---@field etid string
---@field expirationDate? string
---@field externalRefID? string
---@field id? string
---@field lineItemStatus? string
---@field message string
---@field notes? string
---@field orderClientSource? string
---@field orderExternalRefIdDupe? boolean
---@field orderStatus? string
---@field ptid? string
---@field purchaseOrderNumber? string
---@field recipient? table
---@field redemptionInstructions? string
---@field referenceLineItemID? string
---@field referenceOrderID string
---@field reward table
---@field rewardName string
---@field sendEmail? boolean
---@field sender? table
---@field status string
---@field utid string

---@class OrderViewSummary
---@field amount? number
---@field deliveryMethod? string
---@field notes? string
---@field otherReason? string
---@field reasonCode string
---@field recipient? table

---@class OrderViewSummaryCreateData
---@field reference_line_item_id string
---@field amount? number
---@field deliveryMethod? string
---@field notes? string
---@field otherReason? string
---@field reasonCode string
---@field recipient? table

---@class PrepaidCardInfo
---@field balance? table
---@field card? table
---@field comments? table
---@field registration? table

---@class PrepaidCardInfoLoadMatch
---@field reference_line_item_id string

---@class PrepaidCardTransaction
---@field journal? table
---@field page table

---@class PrepaidCardTransactionLoadMatch
---@field reference_line_item_id string
---@field page? number

---@class ReissueCard
---@field commentText? string
---@field id? string
---@field reason string
---@field status? string
---@field updatedBy string

---@class ReissueCardCreateData
---@field id string
---@field commentText? string
---@field reason string
---@field status? string
---@field updatedBy string

---@class ReplacementReason
---@field replacementReasons? table

---@class ReplacementReasonListMatch
---@field replacementReasons? table

---@class Resend
---@field newDeliveryMethod? string
---@field newEmail? string
---@field newEtid? string
---@field newMobile? string
---@field newMobileNumber? string
---@field otherReason? string
---@field reasonCode? string

---@class ResendCreateData
---@field line_item_id string
---@field newDeliveryMethod? string
---@field newEmail? string
---@field newEtid? string
---@field newMobile? string
---@field newMobileNumber? string
---@field otherReason? string
---@field reasonCode? string

---@class RewardReasonsMap
---@field CANCEL? table
---@field CANCEL_AND_REISSUE? table
---@field FREEZE? table
---@field UNFREEZE? table

---@class RewardReasonsMapLoadMatch
---@field CANCEL? table
---@field CANCEL_AND_REISSUE? table
---@field FREEZE? table
---@field UNFREEZE? table

---@class TransferFund
---@field amount number
---@field externalRefID? string
---@field transferDate? string
---@field transferFrom? table
---@field transferNotes? string
---@field transferTo? table
---@field transferredAmount? number

---@class TransferFundCreateData
---@field amount number
---@field externalRefID? string
---@field transferDate? string
---@field transferFrom? table
---@field transferNotes? string
---@field transferTo? table
---@field transferredAmount? number

---@class UpdateAccount
---@field id? string
---@field registration table
---@field status? string
---@field updatedBy? string

---@class UpdateAccountCreateData
---@field id string
---@field registration table
---@field status? string
---@field updatedBy? string

---@class UpdateWebhookSubscriptionResponseView
---@field categories? table
---@field createdAt? string
---@field eventTypes? table
---@field expiresAt? string
---@field headers? table
---@field hmacSharedSecretKey? string
---@field payloadVerificationMethod? string
---@field signingCertificate? string
---@field updatedAt? string
---@field url? string
---@field webhookId? string

---@class UpdateWebhookSubscriptionResponseViewUpdateData
---@field webhook_id string
---@field categories? table
---@field createdAt? string
---@field eventTypes? table
---@field expiresAt? string
---@field headers? table
---@field hmacSharedSecretKey? string
---@field payloadVerificationMethod? string
---@field signingCertificate? string
---@field updatedAt? string
---@field url? string
---@field webhookId? string

---@class Webhook
---@field categories? table
---@field createdAt? string
---@field eventTypes? table
---@field expiresAt? string
---@field headers? table
---@field hmacSharedSecretKey? string
---@field id? string
---@field payloadVerificationMethod? string
---@field signingCertificate? string
---@field updatedAt? string
---@field url? string
---@field webhookId? string

---@class WebhookLoadMatch
---@field id string

---@class WebhookCreateData
---@field id string
---@field from_revision? number
---@field to_revision? number
---@field categories? table
---@field createdAt? string
---@field eventTypes? table
---@field expiresAt? string
---@field headers? table
---@field hmacSharedSecretKey? string
---@field payloadVerificationMethod? string
---@field signingCertificate? string
---@field updatedAt? string
---@field url? string
---@field webhookId? string

local M = {}

return M
