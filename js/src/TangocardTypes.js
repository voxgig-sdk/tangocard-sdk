// Typed models for the Tangocard SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} Account
 * @property {string} accountIdentifier
 * @property {string} accountNumber
 * @property {string} [contactEmail]
 * @property {string} createdAt
 * @property {string} currencyCode
 * @property {number} currentBalance
 * @property {string} displayName
 * @property {Array} [fundingNotification]
 * @property {string} [id]
 * @property {string} status
 */

/**
 * @typedef {Object} AccountLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} AccountUpdateData
 * @property {string} customer_identifier
 * @property {string} id
 * @property {string} [accountIdentifier]
 * @property {string} [accountNumber]
 * @property {string} [contactEmail]
 * @property {string} [createdAt]
 * @property {string} [currencyCode]
 * @property {number} [currentBalance]
 * @property {string} [displayName]
 * @property {Array} [fundingNotification]
 * @property {string} [status]
 */

/**
 * @typedef {Object} AddCommentEscalation
 * @property {number} [assignee]
 * @property {string} commentText
 * @property {string} [id]
 * @property {number} [inquiryCategoryCode]
 * @property {number} [inquiryIdNumber]
 * @property {string} [inquirySource]
 * @property {number} [inquiryTypeCode]
 * @property {string} issueDescription
 * @property {string} [status]
 * @property {string} [userId]
 */

/**
 * @typedef {Object} AddCommentEscalationCreateData
 * @property {string} id
 * @property {number} [assignee]
 * @property {string} commentText
 * @property {number} [inquiryCategoryCode]
 * @property {number} [inquiryIdNumber]
 * @property {string} [inquirySource]
 * @property {number} [inquiryTypeCode]
 * @property {string} issueDescription
 * @property {string} [status]
 * @property {string} [userId]
 */

/**
 * @typedef {Object} AllEventType
 * @property {string} [category]
 * @property {Array} [eventTypes]
 */

/**
 * @typedef {Object} AllEventTypeListMatch
 * @property {string} [category]
 * @property {number} [max_result]
 * @property {string} [next_cursor]
 * @property {string} [prev_cursor]
 */

/**
 * @typedef {Object} AsyncOrder
 * @property {string} accountIdentifier
 * @property {string} accountNumber
 * @property {Object} [amountCharged]
 * @property {string} [campaign]
 * @property {string} [createdAt]
 * @property {string} customerIdentifier
 * @property {Object} [duplicateLineItemRefIds]
 * @property {string} [externalRefID]
 * @property {Array} [failedLineItems]
 * @property {string} [fulfillBy]
 * @property {Array} lineItems
 * @property {string} [notes]
 * @property {string} [orderStatus]
 * @property {string} [purchaseOrderNumber]
 * @property {string} referenceOrderID
 * @property {Object} [sender]
 * @property {string} [status]
 * @property {number} [totalLineItems]
 * @property {number} [totalLineItemsRows]
 */

/**
 * @typedef {Object} AsyncOrderListMatch
 * @property {string} [account_identifier]
 * @property {string} [campaign]
 * @property {string} [currency_code]
 * @property {string} [customer_identifier]
 * @property {string} [delivery_method]
 * @property {string} [elements_per_block]
 * @property {string} [end_date]
 * @property {string} [external_ref_id]
 * @property {string} [line_item_note]
 * @property {string} [line_item_status]
 * @property {string} [max_amount]
 * @property {string} [max_result]
 * @property {string} [min_amount]
 * @property {string} [next_cursor]
 * @property {string} [note]
 * @property {string} [order_status]
 * @property {string} [page]
 * @property {string} [prev_cursor]
 * @property {string} [ptid]
 * @property {string} [purchase_order_number]
 * @property {string} [recipient_email]
 * @property {string} [recipient_first_name]
 * @property {string} [recipient_last_name]
 * @property {string} [recipient_mobile_number]
 * @property {string} [reward_name]
 * @property {string} [send_email]
 * @property {string} [sender_email]
 * @property {string} [sender_first_name]
 * @property {string} [sender_last_name]
 * @property {string} [start_date]
 * @property {string} [utid]
 */

/**
 * @typedef {Object} AsyncOrderCreateData
 * @property {string} accountIdentifier
 * @property {string} accountNumber
 * @property {Object} [amountCharged]
 * @property {string} [campaign]
 * @property {string} [createdAt]
 * @property {string} customerIdentifier
 * @property {Object} [duplicateLineItemRefIds]
 * @property {string} [externalRefID]
 * @property {Array} [failedLineItems]
 * @property {string} [fulfillBy]
 * @property {Array} lineItems
 * @property {string} [notes]
 * @property {string} [orderStatus]
 * @property {string} [purchaseOrderNumber]
 * @property {string} referenceOrderID
 * @property {Object} [sender]
 * @property {string} [status]
 * @property {number} [totalLineItems]
 * @property {number} [totalLineItemsRows]
 */

/**
 * @typedef {Object} AsyncOrderDetailView
 * @property {string} [accountIdentifier]
 * @property {Object} [amountCharged]
 * @property {string} [campaign]
 * @property {string} [completedAt]
 * @property {string} [createdAt]
 * @property {string} [customerIdentifier]
 * @property {string} [externalRefID]
 * @property {string} [id]
 * @property {Array} [lineItems]
 * @property {string} [notes]
 * @property {Array} [orderErrors]
 * @property {string} [orderStatus]
 * @property {Object} [pagination]
 * @property {string} [purchaseOrderNumber]
 * @property {string} [referenceOrderID]
 * @property {Object} [sender]
 * @property {number} [totalLineItems]
 */

/**
 * @typedef {Object} AsyncOrderDetailViewLoadMatch
 * @property {string} account_identifier
 * @property {string} customer_identifier
 * @property {string} external_ref_id
 * @property {Array} [external_ref_line_item_i_d]
 * @property {boolean} [failed_only]
 * @property {number} [max_result]
 * @property {string} [next_cursor]
 * @property {string} [prev_cursor]
 * @property {Array} [reference_line_item_i_d]
 */

/**
 * @typedef {Object} AsyncOrderDetailViewUpdateData
 * @property {string} account_identifier
 * @property {string} customer_identifier
 * @property {string} external_ref_id
 * @property {string} [accountIdentifier]
 * @property {Object} [amountCharged]
 * @property {string} [campaign]
 * @property {string} [completedAt]
 * @property {string} [createdAt]
 * @property {string} [customerIdentifier]
 * @property {string} [externalRefID]
 * @property {string} [id]
 * @property {Array} [lineItems]
 * @property {string} [notes]
 * @property {Array} [orderErrors]
 * @property {string} [orderStatus]
 * @property {Object} [pagination]
 * @property {string} [purchaseOrderNumber]
 * @property {string} [referenceOrderID]
 * @property {Object} [sender]
 * @property {number} [totalLineItems]
 */

/**
 * @typedef {Object} AsyncOrderLineItemsView
 * @property {string} accountIdentifier
 * @property {Object} [amountCharged]
 * @property {string} [campaign]
 * @property {string} customerIdentifier
 * @property {string} [externalRefID]
 * @property {Array} [lineItems]
 * @property {Array} [orderErrors]
 * @property {string} [orderNotes]
 * @property {string} orderStatus
 * @property {Object} [pagination]
 * @property {string} [purchaseOrderNumber]
 * @property {string} referenceOrderID
 * @property {Object} [sender]
 */

/**
 * @typedef {Object} AsyncOrderLineItemsViewListMatch
 * @property {string} account_id
 * @property {string} customer_id
 * @property {string} external_ref_id
 * @property {Array} [external_ref_line_item_i_d]
 * @property {boolean} [failed_only]
 * @property {number} [max_result]
 * @property {string} [next_cursor]
 * @property {string} [prev_cursor]
 * @property {Array} [reference_line_item_i_d]
 */

/**
 * @typedef {Object} AsyncReasonCodesView
 */

/**
 * @typedef {Object} AsyncReasonCodesViewLoadMatch
 */

/**
 * @typedef {Object} AsyncUpdateLineItemView
 * @property {string} [deliveryDate]
 * @property {string} [lineItemNote]
 * @property {Object} [senderInfo]
 */

/**
 * @typedef {Object} AsyncUpdateLineItemViewUpdateData
 * @property {string} reference_line_item_id
 * @property {string} [deliveryDate]
 * @property {string} [lineItemNote]
 * @property {Object} [senderInfo]
 */

/**
 * @typedef {Object} BalanceAlertView
 */

/**
 * @typedef {Object} BalanceAlertViewRemoveMatch
 * @property {string} account_id
 * @property {string} balance_alert_id
 * @property {string} customer_identifier
 */

/**
 * @typedef {Object} BrandCategoriesView
 * @property {string} [description]
 * @property {string} [identifier]
 */

/**
 * @typedef {Object} BrandCategoriesViewListMatch
 * @property {string} [description]
 * @property {string} [identifier]
 */

/**
 * @typedef {Object} Catalog
 * @property {string} [barcodeType]
 * @property {string} brandKey
 * @property {string} brandName
 * @property {Object} brandRequirements
 * @property {Array} categories
 * @property {string} createdDate
 * @property {string} description
 * @property {string} disclaimer
 * @property {Object} imageUrls
 * @property {Array} items
 * @property {string} lastUpdateDate
 * @property {string} shortDescription
 * @property {string} status
 * @property {string} terms
 */

/**
 * @typedef {Object} CatalogListMatch
 * @property {string} [brand_key]
 * @property {string} [brand_name]
 * @property {Array} [category_id]
 * @property {string} [country]
 * @property {string} [currency_code]
 * @property {Array} [fulfillment_type]
 * @property {Array} [item_attribute]
 * @property {string} [reward_name]
 * @property {Array} [reward_type]
 * @property {string} [status]
 * @property {string} [utid]
 * @property {boolean} [verbose]
 */

/**
 * @typedef {Object} ChoiceProduct
 * @property {Array} [countries]
 * @property {string} [currencyCode]
 * @property {string} [id]
 * @property {string} [rewardName]
 * @property {string} [utid]
 */

/**
 * @typedef {Object} ChoiceProductLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ChoiceProductListMatch
 * @property {Array} [country]
 * @property {string} [currency_code]
 * @property {string} [reward_name]
 */

/**
 * @typedef {Object} CountryViewSummary
 * @property {string} countryName
 * @property {string} preferredCurrency
 * @property {string} threeLetterCode
 * @property {string} twoLetterCode
 */

/**
 * @typedef {Object} CountryViewSummaryLoadMatch
 * @property {string} [country]
 * @property {number} [max_result]
 * @property {string} [next_cursor]
 * @property {string} [preferred_currency]
 * @property {string} [prev_cursor]
 */

/**
 * @typedef {Object} CreateAccountCriterion
 * @property {string} accountIdentifier
 * @property {string} contactEmail
 * @property {string} [currencyCode]
 * @property {string} displayName
 * @property {Array} [fundingNotification]
 */

/**
 * @typedef {Object} CreateAccountCriterionCreateData
 * @property {string} customer_identifier
 * @property {string} accountIdentifier
 * @property {string} contactEmail
 * @property {string} [currencyCode]
 * @property {string} displayName
 * @property {Array} [fundingNotification]
 */

/**
 * @typedef {Object} CreateCustomerCriterion
 */

/**
 * @typedef {Object} CredentialTypeView
 * @property {string} credentialType
 * @property {string} [description]
 */

/**
 * @typedef {Object} CredentialTypeViewListMatch
 * @property {string} [credentialType]
 * @property {string} [description]
 */

/**
 * @typedef {Object} CreditCard
 * @property {string} accountIdentifier
 * @property {string} accountNumber
 * @property {string} activationDate
 * @property {Object} billingAddress
 * @property {Array} contactInformation
 * @property {string} createdDate
 * @property {Object} creditCard
 * @property {string} customerIdentifier
 * @property {string} expirationDate
 * @property {string} [id]
 * @property {string} ipAddress
 * @property {string} label
 * @property {string} lastFourDigits
 * @property {string} status
 * @property {string} token
 */

/**
 * @typedef {Object} CreditCardLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CreditCardCreateData
 * @property {string} accountIdentifier
 * @property {string} accountNumber
 * @property {string} activationDate
 * @property {Object} billingAddress
 * @property {Array} contactInformation
 * @property {string} createdDate
 * @property {Object} creditCard
 * @property {string} customerIdentifier
 * @property {string} expirationDate
 * @property {string} [id]
 * @property {string} ipAddress
 * @property {string} label
 * @property {string} lastFourDigits
 * @property {string} status
 * @property {string} token
 */

/**
 * @typedef {Object} CreditCardDeposit
 * @property {string} accountIdentifier
 * @property {string} accountNumber
 * @property {number} amount
 * @property {number} amountCharged
 * @property {string} createdDate
 * @property {string} creditCardToken
 * @property {string} customerIdentifier
 * @property {string} [externalRefID]
 * @property {number} feePercent
 * @property {string} [id]
 * @property {string} referenceDepositID
 * @property {string} status
 */

/**
 * @typedef {Object} CreditCardDepositLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CreditCardDepositCreateData
 * @property {string} accountIdentifier
 * @property {string} accountNumber
 * @property {number} amount
 * @property {number} amountCharged
 * @property {string} createdDate
 * @property {string} creditCardToken
 * @property {string} customerIdentifier
 * @property {string} [externalRefID]
 * @property {number} feePercent
 * @property {string} [id]
 * @property {string} referenceDepositID
 * @property {string} status
 */

/**
 * @typedef {Object} CreditCardUnregister
 * @property {string} accountIdentifier
 * @property {string} createdDate
 * @property {string} creditCardToken
 * @property {string} customerIdentifier
 * @property {string} message
 * @property {string} token
 */

/**
 * @typedef {Object} CreditCardUnregisterCreateData
 * @property {string} accountIdentifier
 * @property {string} createdDate
 * @property {string} creditCardToken
 * @property {string} customerIdentifier
 * @property {string} message
 * @property {string} token
 */

/**
 * @typedef {Object} Customer
 * @property {Array} accounts
 * @property {string} createdAt
 * @property {string} customerIdentifier
 * @property {string} displayName
 * @property {string} [id]
 * @property {string} status
 */

/**
 * @typedef {Object} CustomerLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CustomerListMatch
 * @property {string} [account_display_name]
 * @property {string} [account_identifier]
 * @property {string} [account_max_date_created_at]
 * @property {string} [account_min_date_created_at]
 * @property {string} [account_number]
 * @property {string} [account_status]
 * @property {string} [customer_max_date_created_at]
 * @property {string} [customer_min_date_created_at]
 * @property {string} [display_name]
 * @property {number} [max_result]
 * @property {string} [next_cursor]
 * @property {boolean} [paginate]
 * @property {string} [prev_cursor]
 * @property {string} [status]
 */

/**
 * @typedef {Object} CustomerCreateData
 * @property {Array} accounts
 * @property {string} createdAt
 * @property {string} customerIdentifier
 * @property {string} displayName
 * @property {string} [id]
 * @property {string} status
 */

/**
 * @typedef {Object} EmailTemplateListView
 */

/**
 * @typedef {Object} EmailTemplateViewVerbose
 * @property {string} accentColor
 * @property {Array} [accessControl]
 * @property {Array} [accessControls]
 * @property {string} closing
 * @property {string} [customerServiceMessage]
 * @property {Array} [defaults]
 * @property {string} etid
 * @property {string} fromName
 * @property {string} headerImage
 * @property {string} headerImageAltText
 * @property {string} messageBody
 * @property {string} name
 * @property {string} [smsMessageBody]
 * @property {string} subject
 */

/**
 * @typedef {Object} EmailTemplateViewVerboseLoadMatch
 * @property {string} etid
 */

/**
 * @typedef {Object} EmailTemplateViewVerboseListMatch
 * @property {number} [elements_per_block]
 * @property {number} [page]
 */

/**
 * @typedef {Object} EmailTemplateViewVerboseCreateData
 * @property {string} accentColor
 * @property {Array} [accessControl]
 * @property {Array} [accessControls]
 * @property {string} closing
 * @property {string} [customerServiceMessage]
 * @property {Array} [defaults]
 * @property {string} etid
 * @property {string} fromName
 * @property {string} headerImage
 * @property {string} headerImageAltText
 * @property {string} messageBody
 * @property {string} name
 * @property {string} [smsMessageBody]
 * @property {string} subject
 */

/**
 * @typedef {Object} EmailTemplateViewVerboseUpdateData
 * @property {string} etid
 * @property {string} [accentColor]
 * @property {Array} [accessControl]
 * @property {Array} [accessControls]
 * @property {string} [closing]
 * @property {string} [customerServiceMessage]
 * @property {Array} [defaults]
 * @property {string} [fromName]
 * @property {string} [headerImage]
 * @property {string} [headerImageAltText]
 * @property {string} [messageBody]
 * @property {string} [name]
 * @property {string} [smsMessageBody]
 * @property {string} [subject]
 */

/**
 * @typedef {Object} EmbeddableResponseDto
 * @property {string} [url]
 */

/**
 * @typedef {Object} EmbeddableResponseDtoLoadMatch
 * @property {string} reference_line_item_id
 */

/**
 * @typedef {Object} ExchangeRatesWithDisclaimer
 * @property {string} baseCurrency
 * @property {string} baseFx
 * @property {string} lastModifiedDate
 * @property {string} rewardCurrency
 */

/**
 * @typedef {Object} ExchangeRatesWithDisclaimerListMatch
 * @property {Array} [base_currency]
 * @property {number} [max_result]
 * @property {string} [next_cursor]
 * @property {boolean} [paginate]
 * @property {string} [prev_cursor]
 * @property {Array} [reward_currency]
 */

/**
 * @typedef {Object} LineItem
 * @property {string} accountIdentifier
 * @property {string} accountNumber
 * @property {Object} [amountCharged]
 * @property {Object} amountIssued
 * @property {string} [campaign]
 * @property {boolean} [canCancel]
 * @property {boolean} [canFreeze]
 * @property {string} customerIdentifier
 * @property {string} dateIssued
 * @property {string} [deliveryMethod]
 * @property {string} [deliveryStatus]
 * @property {string} emailStatus
 * @property {string} etid
 * @property {string} expirationDate
 * @property {string} [externalReferenceLineItemID]
 * @property {string} [id]
 * @property {Array} [lineItemActionHistory]
 * @property {string} [lineItemActionReason]
 * @property {Array} [lineItemErrors]
 * @property {number} lineNumber
 * @property {string} [orderNotes]
 * @property {string} orderSource
 * @property {string} orderStatus
 * @property {string} [ptid]
 * @property {string} [purchaseOrderNumber]
 * @property {number} [quantity]
 * @property {Object} [recipient]
 * @property {Array} [redemptionHistory]
 * @property {string} referenceLineItemID
 * @property {string} referenceOrderID
 * @property {string} [reissuedFromReferenceLineItemId]
 * @property {string} [reissuedToReferenceLineItemId]
 * @property {number} [remainingBalance]
 * @property {Array} [resendHistory]
 * @property {Object} reward
 * @property {string} rewardName
 * @property {string} [rewardStatus]
 * @property {Array} [rewardViewHistory]
 * @property {Object} [sender]
 * @property {string} status
 * @property {string} utid
 */

/**
 * @typedef {Object} LineItemLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} LineItemListMatch
 * @property {string} [account_identifier]
 * @property {string} [campaign]
 * @property {string} [column_sort_ascending]
 * @property {string} [column_sort_name]
 * @property {string} [delivery_method]
 * @property {string} [delivery_status]
 * @property {number} [elements_per_block]
 * @property {string} [email_status]
 * @property {string} [end_date]
 * @property {string} [etid]
 * @property {string} [external_ref_id]
 * @property {boolean} [has_remaining_balance]
 * @property {number} [max_remaining_balance]
 * @property {number} [min_remaining_balance]
 * @property {string} [order_note]
 * @property {string} [order_source]
 * @property {string} [order_status]
 * @property {Array} [page_key]
 * @property {boolean} [page_previous]
 * @property {string} [ptid]
 * @property {string} [purchase_order_number]
 * @property {string} [recipient_city]
 * @property {string} [recipient_country]
 * @property {string} [recipient_email]
 * @property {string} [recipient_first_name]
 * @property {string} [recipient_last_name]
 * @property {string} [recipient_mobile_number]
 * @property {string} [recipient_postal_code]
 * @property {string} [recipient_state_or_province]
 * @property {string} [recipient_street_line1]
 * @property {string} [recipient_street_line2]
 * @property {string} [reference_order_id]
 * @property {string} [start_date]
 * @property {string} [status]
 * @property {string} [utid]
 */

/**
 * @typedef {Object} LineItemCreateData
 * @property {string} reference_line_item_id
 * @property {string} accountIdentifier
 * @property {string} accountNumber
 * @property {Object} [amountCharged]
 * @property {Object} amountIssued
 * @property {string} [campaign]
 * @property {boolean} [canCancel]
 * @property {boolean} [canFreeze]
 * @property {string} customerIdentifier
 * @property {string} dateIssued
 * @property {string} [deliveryMethod]
 * @property {string} [deliveryStatus]
 * @property {string} emailStatus
 * @property {string} etid
 * @property {string} expirationDate
 * @property {string} [externalReferenceLineItemID]
 * @property {string} [id]
 * @property {Array} [lineItemActionHistory]
 * @property {string} [lineItemActionReason]
 * @property {Array} [lineItemErrors]
 * @property {number} lineNumber
 * @property {string} [orderNotes]
 * @property {string} orderSource
 * @property {string} orderStatus
 * @property {string} [ptid]
 * @property {string} [purchaseOrderNumber]
 * @property {number} [quantity]
 * @property {Object} [recipient]
 * @property {Array} [redemptionHistory]
 * @property {string} referenceLineItemID
 * @property {string} referenceOrderID
 * @property {string} [reissuedFromReferenceLineItemId]
 * @property {string} [reissuedToReferenceLineItemId]
 * @property {number} [remainingBalance]
 * @property {Array} [resendHistory]
 * @property {Object} reward
 * @property {string} rewardName
 * @property {string} [rewardStatus]
 * @property {Array} [rewardViewHistory]
 * @property {Object} [sender]
 * @property {string} status
 * @property {string} utid
 */

/**
 * @typedef {Object} LowBalanceAlertListView
 * @property {string} [accountIdentifier]
 * @property {string} [balanceAlertDisplayName]
 * @property {string} [balanceAlertID]
 * @property {Array} [balanceAlertNotification]
 * @property {number} [balanceAlertThreshold]
 * @property {string} [createdAt]
 * @property {string} [customerIdentifier]
 */

/**
 * @typedef {Object} LowBalanceAlertListViewListMatch
 * @property {string} account_identifier
 * @property {string} customer_identifier
 * @property {string} [balance_alert_display_name]
 * @property {Array} [balance_alert_notification]
 * @property {number} [balance_alert_threshold]
 * @property {number} [elements_per_block]
 * @property {number} [page]
 */

/**
 * @typedef {Object} LowBalanceAlertView
 * @property {string} [accountIdentifier]
 * @property {string} [balanceAlertDisplayName]
 * @property {string} [balanceAlertID]
 * @property {Array} [balanceAlertNotification]
 * @property {number} [balanceAlertThreshold]
 * @property {string} [createdAt]
 * @property {string} [customerIdentifier]
 */

/**
 * @typedef {Object} LowBalanceAlertViewLoadMatch
 * @property {string} account_id
 * @property {string} balance_alert_id
 * @property {string} customer_identifier
 */

/**
 * @typedef {Object} LowBalanceAlertViewCreateData
 * @property {string} account_identifier
 * @property {string} customer_identifier
 * @property {string} [accountIdentifier]
 * @property {string} [balanceAlertDisplayName]
 * @property {string} [balanceAlertID]
 * @property {Array} [balanceAlertNotification]
 * @property {number} [balanceAlertThreshold]
 * @property {string} [createdAt]
 * @property {string} [customerIdentifier]
 */

/**
 * @typedef {Object} LowBalanceAlertViewUpdateData
 * @property {string} account_id
 * @property {string} balance_alert_id
 * @property {string} customer_identifier
 * @property {string} [accountIdentifier]
 * @property {string} [balanceAlertDisplayName]
 * @property {string} [balanceAlertID]
 * @property {Array} [balanceAlertNotification]
 * @property {number} [balanceAlertThreshold]
 * @property {string} [createdAt]
 * @property {string} [customerIdentifier]
 */

/**
 * @typedef {Object} MobileCountry
 * @property {string} [countryCode]
 * @property {string} [countryName]
 * @property {string} [isoCode]
 * @property {string} [languageCode]
 */

/**
 * @typedef {Object} MobileCountryLoadMatch
 * @property {string} [countryCode]
 * @property {string} [countryName]
 * @property {string} [isoCode]
 * @property {string} [languageCode]
 */

/**
 * @typedef {Object} N14Webhook
 * @property {Array} [categories]
 * @property {string} [createdAt]
 * @property {Array} [eventTypes]
 * @property {string} [expiresAt]
 * @property {Array} [headers]
 * @property {string} [hmacSharedSecretKey]
 * @property {string} [id]
 * @property {string} [payloadVerificationMethod]
 * @property {string} [signingCertificate]
 * @property {string} [updatedAt]
 * @property {string} url
 * @property {string} [webhookId]
 */

/**
 * @typedef {Object} N14WebhookLoadMatch
 * @property {string} webhook_id
 * @property {number} [from_revision]
 * @property {number} [max_result]
 * @property {string} [next_cursor]
 * @property {string} [prev_cursor]
 * @property {number} [to_revision]
 */

/**
 * @typedef {Object} N14WebhookListMatch
 * @property {Array} [category]
 * @property {string} [created_at_from]
 * @property {string} [created_at_to]
 * @property {Array} [event_type]
 * @property {string} [expires_at_from]
 * @property {string} [expires_at_to]
 * @property {string} [header_name]
 * @property {string} [header_value]
 * @property {number} [max_result]
 * @property {string} [next_cursor]
 * @property {string} [prev_cursor]
 * @property {string} [url]
 */

/**
 * @typedef {Object} N14WebhookCreateData
 * @property {string} test_name
 * @property {string} webhook_id
 * @property {Array} [categories]
 * @property {string} [createdAt]
 * @property {Array} [eventTypes]
 * @property {string} [expiresAt]
 * @property {Array} [headers]
 * @property {string} [hmacSharedSecretKey]
 * @property {string} [id]
 * @property {string} [payloadVerificationMethod]
 * @property {string} [signingCertificate]
 * @property {string} [updatedAt]
 * @property {string} url
 * @property {string} [webhookId]
 */

/**
 * @typedef {Object} N14WebhookRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} N1Customer
 */

/**
 * @typedef {Object} N1CustomerLoadMatch
 * @property {string} customer_identifier
 * @property {string} [account_number]
 * @property {string} [contact_email]
 * @property {Array} [currency_code]
 * @property {string} [display_name]
 * @property {Array} [funding_notification_email]
 * @property {number} [max_balance]
 * @property {string} [max_date_created_at]
 * @property {number} [max_result]
 * @property {number} [min_balance]
 * @property {string} [min_date_created_at]
 * @property {string} [next_cursor]
 * @property {boolean} [paginate]
 * @property {string} [prev_cursor]
 * @property {string} [status]
 */

/**
 * @typedef {Object} N2Account
 */

/**
 * @typedef {Object} N3Fund
 */

/**
 * @typedef {Object} N8LineItem
 * @property {string} [campaign]
 * @property {string} [id]
 * @property {string} [orderNotes]
 * @property {string} [purchaseOrderNumber]
 */

/**
 * @typedef {Object} N8LineItemUpdateData
 * @property {string} id
 * @property {string} [campaign]
 * @property {string} [orderNotes]
 * @property {string} [purchaseOrderNumber]
 */

/**
 * @typedef {Object} N9DigitalTemplate
 * @property {string} [id]
 */

/**
 * @typedef {Object} N9DigitalTemplateRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Order
 * @property {string} accountIdentifier
 * @property {string} accountNumber
 * @property {number} amount
 * @property {Object} amountCharged
 * @property {Object} [asyncOrderEntity]
 * @property {string} campaign
 * @property {string} createdAt
 * @property {Object} [customFields]
 * @property {string} customerIdentifier
 * @property {string} [deliveryMethod]
 * @property {Object} [denomination]
 * @property {string} emailSubject
 * @property {string} etid
 * @property {string} [expirationDate]
 * @property {string} [externalRefID]
 * @property {string} [id]
 * @property {string} [lineItemStatus]
 * @property {string} message
 * @property {string} [notes]
 * @property {string} [orderClientSource]
 * @property {boolean} [orderExternalRefIdDupe]
 * @property {string} [orderStatus]
 * @property {string} [ptid]
 * @property {string} [purchaseOrderNumber]
 * @property {Object} [recipient]
 * @property {string} [redemptionInstructions]
 * @property {string} [referenceLineItemID]
 * @property {string} referenceOrderID
 * @property {Object} reward
 * @property {string} rewardName
 * @property {boolean} [sendEmail]
 * @property {Object} [sender]
 * @property {string} status
 * @property {string} utid
 */

/**
 * @typedef {Object} OrderLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} OrderListMatch
 * @property {string} [account_identifier]
 * @property {string} [campaign]
 * @property {string} [currency_code]
 * @property {string} [customer_identifier]
 * @property {string} [delivery_method]
 * @property {number} [elements_per_block]
 * @property {string} [end_date]
 * @property {string} [external_ref_id]
 * @property {string} [line_item_note]
 * @property {string} [line_item_status]
 * @property {number} [max_amount]
 * @property {number} [min_amount]
 * @property {string} [note]
 * @property {string} [order_status]
 * @property {number} [page]
 * @property {string} [ptid]
 * @property {string} [purchase_order_number]
 * @property {string} [recipient_email]
 * @property {string} [recipient_first_name]
 * @property {string} [recipient_last_name]
 * @property {string} [recipient_mobile_number]
 * @property {string} [reward_name]
 * @property {boolean} [send_email]
 * @property {string} [sender_email]
 * @property {string} [sender_first_name]
 * @property {string} [sender_last_name]
 * @property {string} [start_date]
 * @property {string} [status]
 * @property {string} [utid]
 */

/**
 * @typedef {Object} OrderCreateData
 * @property {string} accountIdentifier
 * @property {string} accountNumber
 * @property {number} amount
 * @property {Object} amountCharged
 * @property {Object} [asyncOrderEntity]
 * @property {string} campaign
 * @property {string} createdAt
 * @property {Object} [customFields]
 * @property {string} customerIdentifier
 * @property {string} [deliveryMethod]
 * @property {Object} [denomination]
 * @property {string} emailSubject
 * @property {string} etid
 * @property {string} [expirationDate]
 * @property {string} [externalRefID]
 * @property {string} [id]
 * @property {string} [lineItemStatus]
 * @property {string} message
 * @property {string} [notes]
 * @property {string} [orderClientSource]
 * @property {boolean} [orderExternalRefIdDupe]
 * @property {string} [orderStatus]
 * @property {string} [ptid]
 * @property {string} [purchaseOrderNumber]
 * @property {Object} [recipient]
 * @property {string} [redemptionInstructions]
 * @property {string} [referenceLineItemID]
 * @property {string} referenceOrderID
 * @property {Object} reward
 * @property {string} rewardName
 * @property {boolean} [sendEmail]
 * @property {Object} [sender]
 * @property {string} status
 * @property {string} utid
 */

/**
 * @typedef {Object} OrderViewSummary
 * @property {number} [amount]
 * @property {string} [deliveryMethod]
 * @property {string} [notes]
 * @property {string} [otherReason]
 * @property {string} reasonCode
 * @property {Object} [recipient]
 */

/**
 * @typedef {Object} OrderViewSummaryCreateData
 * @property {string} reference_line_item_id
 * @property {number} [amount]
 * @property {string} [deliveryMethod]
 * @property {string} [notes]
 * @property {string} [otherReason]
 * @property {string} reasonCode
 * @property {Object} [recipient]
 */

/**
 * @typedef {Object} PrepaidCardInfo
 * @property {Object} [balance]
 * @property {Object} [card]
 * @property {Array} [comments]
 * @property {Object} [registration]
 */

/**
 * @typedef {Object} PrepaidCardInfoLoadMatch
 * @property {string} reference_line_item_id
 */

/**
 * @typedef {Object} PrepaidCardTransaction
 * @property {Array} [journal]
 * @property {Object} page
 */

/**
 * @typedef {Object} PrepaidCardTransactionLoadMatch
 * @property {string} reference_line_item_id
 * @property {number} [page]
 */

/**
 * @typedef {Object} ReissueCard
 * @property {string} [commentText]
 * @property {string} [id]
 * @property {string} reason
 * @property {string} [status]
 * @property {string} updatedBy
 */

/**
 * @typedef {Object} ReissueCardCreateData
 * @property {string} id
 * @property {string} [commentText]
 * @property {string} reason
 * @property {string} [status]
 * @property {string} updatedBy
 */

/**
 * @typedef {Object} ReplacementReason
 * @property {Array} [replacementReasons]
 */

/**
 * @typedef {Object} ReplacementReasonListMatch
 * @property {Array} [replacementReasons]
 */

/**
 * @typedef {Object} Resend
 * @property {string} [newDeliveryMethod]
 * @property {string} [newEmail]
 * @property {string} [newEtid]
 * @property {string} [newMobile]
 * @property {string} [newMobileNumber]
 * @property {string} [otherReason]
 * @property {string} [reasonCode]
 */

/**
 * @typedef {Object} ResendCreateData
 * @property {string} line_item_id
 * @property {string} [newDeliveryMethod]
 * @property {string} [newEmail]
 * @property {string} [newEtid]
 * @property {string} [newMobile]
 * @property {string} [newMobileNumber]
 * @property {string} [otherReason]
 * @property {string} [reasonCode]
 */

/**
 * @typedef {Object} RewardReasonsMap
 * @property {Object} [CANCEL]
 * @property {Object} [CANCEL_AND_REISSUE]
 * @property {Object} [FREEZE]
 * @property {Object} [UNFREEZE]
 */

/**
 * @typedef {Object} RewardReasonsMapLoadMatch
 * @property {Object} [CANCEL]
 * @property {Object} [CANCEL_AND_REISSUE]
 * @property {Object} [FREEZE]
 * @property {Object} [UNFREEZE]
 */

/**
 * @typedef {Object} TransferFund
 * @property {number} amount
 * @property {string} [externalRefID]
 * @property {string} [transferDate]
 * @property {Object} [transferFrom]
 * @property {string} [transferNotes]
 * @property {Object} [transferTo]
 * @property {number} [transferredAmount]
 */

/**
 * @typedef {Object} TransferFundCreateData
 * @property {number} amount
 * @property {string} [externalRefID]
 * @property {string} [transferDate]
 * @property {Object} [transferFrom]
 * @property {string} [transferNotes]
 * @property {Object} [transferTo]
 * @property {number} [transferredAmount]
 */

/**
 * @typedef {Object} UpdateAccount
 * @property {string} [id]
 * @property {Object} registration
 * @property {string} [status]
 * @property {string} [updatedBy]
 */

/**
 * @typedef {Object} UpdateAccountCreateData
 * @property {string} id
 * @property {Object} registration
 * @property {string} [status]
 * @property {string} [updatedBy]
 */

/**
 * @typedef {Object} UpdateWebhookSubscriptionResponseView
 * @property {Array} [categories]
 * @property {string} [createdAt]
 * @property {Array} [eventTypes]
 * @property {string} [expiresAt]
 * @property {Array} [headers]
 * @property {string} [hmacSharedSecretKey]
 * @property {string} [payloadVerificationMethod]
 * @property {string} [signingCertificate]
 * @property {string} [updatedAt]
 * @property {string} [url]
 * @property {string} [webhookId]
 */

/**
 * @typedef {Object} UpdateWebhookSubscriptionResponseViewUpdateData
 * @property {string} webhook_id
 * @property {Array} [categories]
 * @property {string} [createdAt]
 * @property {Array} [eventTypes]
 * @property {string} [expiresAt]
 * @property {Array} [headers]
 * @property {string} [hmacSharedSecretKey]
 * @property {string} [payloadVerificationMethod]
 * @property {string} [signingCertificate]
 * @property {string} [updatedAt]
 * @property {string} [url]
 * @property {string} [webhookId]
 */

/**
 * @typedef {Object} Webhook
 * @property {Array} [categories]
 * @property {string} [createdAt]
 * @property {Array} [eventTypes]
 * @property {string} [expiresAt]
 * @property {Array} [headers]
 * @property {string} [hmacSharedSecretKey]
 * @property {string} [id]
 * @property {string} [payloadVerificationMethod]
 * @property {string} [signingCertificate]
 * @property {string} [updatedAt]
 * @property {string} [url]
 * @property {string} [webhookId]
 */

/**
 * @typedef {Object} WebhookLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} WebhookCreateData
 * @property {string} id
 * @property {number} [from_revision]
 * @property {number} [to_revision]
 * @property {Array} [categories]
 * @property {string} [createdAt]
 * @property {Array} [eventTypes]
 * @property {string} [expiresAt]
 * @property {Array} [headers]
 * @property {string} [hmacSharedSecretKey]
 * @property {string} [payloadVerificationMethod]
 * @property {string} [signingCertificate]
 * @property {string} [updatedAt]
 * @property {string} [url]
 * @property {string} [webhookId]
 */

