# Typed models for the Tangocard SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class AccountRequired(TypedDict):
    accountIdentifier: str
    accountNumber: str
    createdAt: str
    currencyCode: str
    currentBalance: float
    displayName: str
    status: str


class Account(AccountRequired, total=False):
    contactEmail: str
    fundingNotification: list
    id: str


class AccountLoadMatch(TypedDict):
    id: str


class AccountUpdateDataRequired(TypedDict):
    customer_identifier: str
    id: str


class AccountUpdateData(AccountUpdateDataRequired, total=False):
    accountIdentifier: str
    accountNumber: str
    contactEmail: str
    createdAt: str
    currencyCode: str
    currentBalance: float
    displayName: str
    fundingNotification: list
    status: str


class AddCommentEscalationRequired(TypedDict):
    commentText: str
    issueDescription: str


class AddCommentEscalation(AddCommentEscalationRequired, total=False):
    assignee: int
    id: str
    inquiryCategoryCode: int
    inquiryIdNumber: int
    inquirySource: str
    inquiryTypeCode: int
    status: str
    userId: str


class AddCommentEscalationCreateDataRequired(TypedDict):
    id: str
    commentText: str
    issueDescription: str


class AddCommentEscalationCreateData(AddCommentEscalationCreateDataRequired, total=False):
    assignee: int
    inquiryCategoryCode: int
    inquiryIdNumber: int
    inquirySource: str
    inquiryTypeCode: int
    status: str
    userId: str


class AllEventType(TypedDict, total=False):
    category: str
    eventTypes: list


class AllEventTypeListMatch(TypedDict, total=False):
    category: str
    max_result: int
    next_cursor: str
    prev_cursor: str


class AsyncOrderRequired(TypedDict):
    accountIdentifier: str
    accountNumber: str
    customerIdentifier: str
    lineItems: list
    referenceOrderID: str


class AsyncOrder(AsyncOrderRequired, total=False):
    amountCharged: dict
    campaign: str
    createdAt: str
    duplicateLineItemRefIds: dict
    externalRefID: str
    failedLineItems: list
    fulfillBy: str
    notes: str
    orderStatus: str
    purchaseOrderNumber: str
    sender: dict
    status: str
    totalLineItems: int
    totalLineItemsRows: int


class AsyncOrderListMatch(TypedDict, total=False):
    account_identifier: str
    campaign: str
    currency_code: str
    customer_identifier: str
    delivery_method: str
    elements_per_block: str
    end_date: str
    external_ref_id: str
    line_item_note: str
    line_item_status: str
    max_amount: str
    max_result: str
    min_amount: str
    next_cursor: str
    note: str
    order_status: str
    page: str
    prev_cursor: str
    ptid: str
    purchase_order_number: str
    recipient_email: str
    recipient_first_name: str
    recipient_last_name: str
    recipient_mobile_number: str
    reward_name: str
    send_email: str
    sender_email: str
    sender_first_name: str
    sender_last_name: str
    start_date: str
    utid: str


class AsyncOrderCreateDataRequired(TypedDict):
    accountIdentifier: str
    accountNumber: str
    customerIdentifier: str
    lineItems: list
    referenceOrderID: str


class AsyncOrderCreateData(AsyncOrderCreateDataRequired, total=False):
    amountCharged: dict
    campaign: str
    createdAt: str
    duplicateLineItemRefIds: dict
    externalRefID: str
    failedLineItems: list
    fulfillBy: str
    notes: str
    orderStatus: str
    purchaseOrderNumber: str
    sender: dict
    status: str
    totalLineItems: int
    totalLineItemsRows: int


class AsyncOrderDetailView(TypedDict, total=False):
    accountIdentifier: str
    amountCharged: dict
    campaign: str
    completedAt: str
    createdAt: str
    customerIdentifier: str
    externalRefID: str
    id: str
    lineItems: list
    notes: str
    orderErrors: list
    orderStatus: str
    pagination: dict
    purchaseOrderNumber: str
    referenceOrderID: str
    sender: dict
    totalLineItems: int


class AsyncOrderDetailViewLoadMatchRequired(TypedDict):
    account_identifier: str
    customer_identifier: str
    external_ref_id: str


class AsyncOrderDetailViewLoadMatch(AsyncOrderDetailViewLoadMatchRequired, total=False):
    external_ref_line_item_i_d: list
    failed_only: bool
    max_result: int
    next_cursor: str
    prev_cursor: str
    reference_line_item_i_d: list


class AsyncOrderDetailViewUpdateDataRequired(TypedDict):
    account_identifier: str
    customer_identifier: str
    external_ref_id: str


class AsyncOrderDetailViewUpdateData(AsyncOrderDetailViewUpdateDataRequired, total=False):
    accountIdentifier: str
    amountCharged: dict
    campaign: str
    completedAt: str
    createdAt: str
    customerIdentifier: str
    externalRefID: str
    id: str
    lineItems: list
    notes: str
    orderErrors: list
    orderStatus: str
    pagination: dict
    purchaseOrderNumber: str
    referenceOrderID: str
    sender: dict
    totalLineItems: int


class AsyncOrderLineItemsViewRequired(TypedDict):
    accountIdentifier: str
    customerIdentifier: str
    orderStatus: str
    referenceOrderID: str


class AsyncOrderLineItemsView(AsyncOrderLineItemsViewRequired, total=False):
    amountCharged: dict
    campaign: str
    externalRefID: str
    lineItems: list
    orderErrors: list
    orderNotes: str
    pagination: dict
    purchaseOrderNumber: str
    sender: dict


class AsyncOrderLineItemsViewListMatchRequired(TypedDict):
    account_id: str
    customer_id: str
    external_ref_id: str


class AsyncOrderLineItemsViewListMatch(AsyncOrderLineItemsViewListMatchRequired, total=False):
    external_ref_line_item_i_d: list
    failed_only: bool
    max_result: int
    next_cursor: str
    prev_cursor: str
    reference_line_item_i_d: list


class AsyncReasonCodesView(TypedDict):
    pass


class AsyncReasonCodesViewLoadMatch(TypedDict):
    pass


class AsyncUpdateLineItemView(TypedDict, total=False):
    deliveryDate: str
    lineItemNote: str
    senderInfo: dict


class AsyncUpdateLineItemViewUpdateDataRequired(TypedDict):
    reference_line_item_id: str


class AsyncUpdateLineItemViewUpdateData(AsyncUpdateLineItemViewUpdateDataRequired, total=False):
    deliveryDate: str
    lineItemNote: str
    senderInfo: dict


class BalanceAlertView(TypedDict):
    pass


class BalanceAlertViewRemoveMatch(TypedDict):
    account_id: str
    balance_alert_id: str
    customer_identifier: str


class BrandCategoriesView(TypedDict, total=False):
    description: str
    identifier: str


class BrandCategoriesViewListMatch(TypedDict, total=False):
    description: str
    identifier: str


class CatalogRequired(TypedDict):
    brandKey: str
    brandName: str
    brandRequirements: dict
    categories: list
    createdDate: str
    description: str
    disclaimer: str
    imageUrls: dict
    items: list
    lastUpdateDate: str
    shortDescription: str
    status: str
    terms: str


class Catalog(CatalogRequired, total=False):
    barcodeType: str


class CatalogListMatch(TypedDict, total=False):
    brand_key: str
    brand_name: str
    category_id: list
    country: str
    currency_code: str
    fulfillment_type: list
    item_attribute: list
    reward_name: str
    reward_type: list
    status: str
    utid: str
    verbose: bool


class ChoiceProduct(TypedDict, total=False):
    countries: list
    currencyCode: str
    id: str
    rewardName: str
    utid: str


class ChoiceProductLoadMatch(TypedDict):
    id: str


class ChoiceProductListMatch(TypedDict, total=False):
    country: list
    currency_code: str
    reward_name: str


class CountryViewSummary(TypedDict):
    countryName: str
    preferredCurrency: str
    threeLetterCode: str
    twoLetterCode: str


class CountryViewSummaryLoadMatch(TypedDict, total=False):
    country: str
    max_result: int
    next_cursor: str
    preferred_currency: str
    prev_cursor: str


class CreateAccountCriterionRequired(TypedDict):
    accountIdentifier: str
    contactEmail: str
    displayName: str


class CreateAccountCriterion(CreateAccountCriterionRequired, total=False):
    currencyCode: str
    fundingNotification: list


class CreateAccountCriterionCreateDataRequired(TypedDict):
    customer_identifier: str
    accountIdentifier: str
    contactEmail: str
    displayName: str


class CreateAccountCriterionCreateData(CreateAccountCriterionCreateDataRequired, total=False):
    currencyCode: str
    fundingNotification: list


class CreateCustomerCriterion(TypedDict):
    pass


class CredentialTypeViewRequired(TypedDict):
    credentialType: str


class CredentialTypeView(CredentialTypeViewRequired, total=False):
    description: str


class CredentialTypeViewListMatch(TypedDict, total=False):
    credentialType: str
    description: str


class CreditCardRequired(TypedDict):
    accountIdentifier: str
    accountNumber: str
    activationDate: str
    billingAddress: dict
    contactInformation: list
    createdDate: str
    creditCard: dict
    customerIdentifier: str
    expirationDate: str
    ipAddress: str
    label: str
    lastFourDigits: str
    status: str
    token: str


class CreditCard(CreditCardRequired, total=False):
    id: str


class CreditCardLoadMatch(TypedDict):
    id: str


class CreditCardCreateDataRequired(TypedDict):
    accountIdentifier: str
    accountNumber: str
    activationDate: str
    billingAddress: dict
    contactInformation: list
    createdDate: str
    creditCard: dict
    customerIdentifier: str
    expirationDate: str
    ipAddress: str
    label: str
    lastFourDigits: str
    status: str
    token: str


class CreditCardCreateData(CreditCardCreateDataRequired, total=False):
    id: str


class CreditCardDepositRequired(TypedDict):
    accountIdentifier: str
    accountNumber: str
    amount: float
    amountCharged: float
    createdDate: str
    creditCardToken: str
    customerIdentifier: str
    feePercent: float
    referenceDepositID: str
    status: str


class CreditCardDeposit(CreditCardDepositRequired, total=False):
    externalRefID: str
    id: str


class CreditCardDepositLoadMatch(TypedDict):
    id: str


class CreditCardDepositCreateDataRequired(TypedDict):
    accountIdentifier: str
    accountNumber: str
    amount: float
    amountCharged: float
    createdDate: str
    creditCardToken: str
    customerIdentifier: str
    feePercent: float
    referenceDepositID: str
    status: str


class CreditCardDepositCreateData(CreditCardDepositCreateDataRequired, total=False):
    externalRefID: str
    id: str


class CreditCardUnregister(TypedDict):
    accountIdentifier: str
    createdDate: str
    creditCardToken: str
    customerIdentifier: str
    message: str
    token: str


class CreditCardUnregisterCreateData(TypedDict):
    accountIdentifier: str
    createdDate: str
    creditCardToken: str
    customerIdentifier: str
    message: str
    token: str


class CustomerRequired(TypedDict):
    accounts: list
    createdAt: str
    customerIdentifier: str
    displayName: str
    status: str


class Customer(CustomerRequired, total=False):
    id: str


class CustomerLoadMatch(TypedDict):
    id: str


class CustomerListMatch(TypedDict, total=False):
    account_display_name: str
    account_identifier: str
    account_max_date_created_at: str
    account_min_date_created_at: str
    account_number: str
    account_status: str
    customer_max_date_created_at: str
    customer_min_date_created_at: str
    display_name: str
    max_result: int
    next_cursor: str
    paginate: bool
    prev_cursor: str
    status: str


class CustomerCreateDataRequired(TypedDict):
    accounts: list
    createdAt: str
    customerIdentifier: str
    displayName: str
    status: str


class CustomerCreateData(CustomerCreateDataRequired, total=False):
    id: str


class EmailTemplateListView(TypedDict):
    pass


class EmailTemplateViewVerboseRequired(TypedDict):
    accentColor: str
    closing: str
    etid: str
    fromName: str
    headerImage: str
    headerImageAltText: str
    messageBody: str
    name: str
    subject: str


class EmailTemplateViewVerbose(EmailTemplateViewVerboseRequired, total=False):
    accessControl: list
    accessControls: list
    customerServiceMessage: str
    defaults: list
    smsMessageBody: str


class EmailTemplateViewVerboseLoadMatch(TypedDict):
    etid: str


class EmailTemplateViewVerboseListMatch(TypedDict, total=False):
    elements_per_block: int
    page: int


class EmailTemplateViewVerboseCreateDataRequired(TypedDict):
    accentColor: str
    closing: str
    etid: str
    fromName: str
    headerImage: str
    headerImageAltText: str
    messageBody: str
    name: str
    subject: str


class EmailTemplateViewVerboseCreateData(EmailTemplateViewVerboseCreateDataRequired, total=False):
    accessControl: list
    accessControls: list
    customerServiceMessage: str
    defaults: list
    smsMessageBody: str


class EmailTemplateViewVerboseUpdateDataRequired(TypedDict):
    etid: str


class EmailTemplateViewVerboseUpdateData(EmailTemplateViewVerboseUpdateDataRequired, total=False):
    accentColor: str
    accessControl: list
    accessControls: list
    closing: str
    customerServiceMessage: str
    defaults: list
    fromName: str
    headerImage: str
    headerImageAltText: str
    messageBody: str
    name: str
    smsMessageBody: str
    subject: str


class EmbeddableResponseDto(TypedDict, total=False):
    url: str


class EmbeddableResponseDtoLoadMatch(TypedDict):
    reference_line_item_id: str


class ExchangeRatesWithDisclaimer(TypedDict):
    baseCurrency: str
    baseFx: str
    lastModifiedDate: str
    rewardCurrency: str


class ExchangeRatesWithDisclaimerListMatch(TypedDict, total=False):
    base_currency: list
    max_result: int
    next_cursor: str
    paginate: bool
    prev_cursor: str
    reward_currency: list


class LineItemRequired(TypedDict):
    accountIdentifier: str
    accountNumber: str
    amountIssued: dict
    customerIdentifier: str
    dateIssued: str
    emailStatus: str
    etid: str
    expirationDate: str
    lineNumber: int
    orderSource: str
    orderStatus: str
    referenceLineItemID: str
    referenceOrderID: str
    reward: dict
    rewardName: str
    status: str
    utid: str


class LineItem(LineItemRequired, total=False):
    amountCharged: dict
    campaign: str
    canCancel: bool
    canFreeze: bool
    deliveryMethod: str
    deliveryStatus: str
    externalReferenceLineItemID: str
    id: str
    lineItemActionHistory: list
    lineItemActionReason: str
    lineItemErrors: list
    orderNotes: str
    ptid: str
    purchaseOrderNumber: str
    quantity: int
    recipient: dict
    redemptionHistory: list
    reissuedFromReferenceLineItemId: str
    reissuedToReferenceLineItemId: str
    remainingBalance: float
    resendHistory: list
    rewardStatus: str
    rewardViewHistory: list
    sender: dict


class LineItemLoadMatch(TypedDict):
    id: str


class LineItemListMatch(TypedDict, total=False):
    account_identifier: str
    campaign: str
    column_sort_ascending: str
    column_sort_name: str
    delivery_method: str
    delivery_status: str
    elements_per_block: int
    email_status: str
    end_date: str
    etid: str
    external_ref_id: str
    has_remaining_balance: bool
    max_remaining_balance: float
    min_remaining_balance: float
    order_note: str
    order_source: str
    order_status: str
    page_key: list
    page_previous: bool
    ptid: str
    purchase_order_number: str
    recipient_city: str
    recipient_country: str
    recipient_email: str
    recipient_first_name: str
    recipient_last_name: str
    recipient_mobile_number: str
    recipient_postal_code: str
    recipient_state_or_province: str
    recipient_street_line1: str
    recipient_street_line2: str
    reference_order_id: str
    start_date: str
    status: str
    utid: str


class LineItemCreateDataRequired(TypedDict):
    reference_line_item_id: str
    accountIdentifier: str
    accountNumber: str
    amountIssued: dict
    customerIdentifier: str
    dateIssued: str
    emailStatus: str
    etid: str
    expirationDate: str
    lineNumber: int
    orderSource: str
    orderStatus: str
    referenceLineItemID: str
    referenceOrderID: str
    reward: dict
    rewardName: str
    status: str
    utid: str


class LineItemCreateData(LineItemCreateDataRequired, total=False):
    amountCharged: dict
    campaign: str
    canCancel: bool
    canFreeze: bool
    deliveryMethod: str
    deliveryStatus: str
    externalReferenceLineItemID: str
    id: str
    lineItemActionHistory: list
    lineItemActionReason: str
    lineItemErrors: list
    orderNotes: str
    ptid: str
    purchaseOrderNumber: str
    quantity: int
    recipient: dict
    redemptionHistory: list
    reissuedFromReferenceLineItemId: str
    reissuedToReferenceLineItemId: str
    remainingBalance: float
    resendHistory: list
    rewardStatus: str
    rewardViewHistory: list
    sender: dict


class LowBalanceAlertListView(TypedDict, total=False):
    accountIdentifier: str
    balanceAlertDisplayName: str
    balanceAlertID: str
    balanceAlertNotification: list
    balanceAlertThreshold: float
    createdAt: str
    customerIdentifier: str


class LowBalanceAlertListViewListMatchRequired(TypedDict):
    account_identifier: str
    customer_identifier: str


class LowBalanceAlertListViewListMatch(LowBalanceAlertListViewListMatchRequired, total=False):
    balance_alert_display_name: str
    balance_alert_notification: list
    balance_alert_threshold: float
    elements_per_block: int
    page: int


class LowBalanceAlertView(TypedDict, total=False):
    accountIdentifier: str
    balanceAlertDisplayName: str
    balanceAlertID: str
    balanceAlertNotification: list
    balanceAlertThreshold: float
    createdAt: str
    customerIdentifier: str


class LowBalanceAlertViewLoadMatch(TypedDict):
    account_id: str
    balance_alert_id: str
    customer_identifier: str


class LowBalanceAlertViewCreateDataRequired(TypedDict):
    account_identifier: str
    customer_identifier: str


class LowBalanceAlertViewCreateData(LowBalanceAlertViewCreateDataRequired, total=False):
    accountIdentifier: str
    balanceAlertDisplayName: str
    balanceAlertID: str
    balanceAlertNotification: list
    balanceAlertThreshold: float
    createdAt: str
    customerIdentifier: str


class LowBalanceAlertViewUpdateDataRequired(TypedDict):
    account_id: str
    balance_alert_id: str
    customer_identifier: str


class LowBalanceAlertViewUpdateData(LowBalanceAlertViewUpdateDataRequired, total=False):
    accountIdentifier: str
    balanceAlertDisplayName: str
    balanceAlertID: str
    balanceAlertNotification: list
    balanceAlertThreshold: float
    createdAt: str
    customerIdentifier: str


class MobileCountry(TypedDict, total=False):
    countryCode: str
    countryName: str
    isoCode: str
    languageCode: str


class MobileCountryLoadMatch(TypedDict, total=False):
    countryCode: str
    countryName: str
    isoCode: str
    languageCode: str


class N14WebhookRequired(TypedDict):
    url: str


class N14Webhook(N14WebhookRequired, total=False):
    categories: list
    createdAt: str
    eventTypes: list
    expiresAt: str
    headers: list
    hmacSharedSecretKey: str
    id: str
    payloadVerificationMethod: str
    signingCertificate: str
    updatedAt: str
    webhookId: str


class N14WebhookLoadMatchRequired(TypedDict):
    webhook_id: str


class N14WebhookLoadMatch(N14WebhookLoadMatchRequired, total=False):
    from_revision: int
    max_result: int
    next_cursor: str
    prev_cursor: str
    to_revision: int


class N14WebhookListMatch(TypedDict, total=False):
    category: list
    created_at_from: str
    created_at_to: str
    event_type: list
    expires_at_from: str
    expires_at_to: str
    header_name: str
    header_value: str
    max_result: int
    next_cursor: str
    prev_cursor: str
    url: str


class N14WebhookCreateDataRequired(TypedDict):
    test_name: str
    webhook_id: str
    url: str


class N14WebhookCreateData(N14WebhookCreateDataRequired, total=False):
    categories: list
    createdAt: str
    eventTypes: list
    expiresAt: str
    headers: list
    hmacSharedSecretKey: str
    id: str
    payloadVerificationMethod: str
    signingCertificate: str
    updatedAt: str
    webhookId: str


class N14WebhookRemoveMatch(TypedDict):
    id: str


class N1Customer(TypedDict):
    pass


class N1CustomerLoadMatchRequired(TypedDict):
    customer_identifier: str


class N1CustomerLoadMatch(N1CustomerLoadMatchRequired, total=False):
    account_number: str
    contact_email: str
    currency_code: list
    display_name: str
    funding_notification_email: list
    max_balance: float
    max_date_created_at: str
    max_result: int
    min_balance: float
    min_date_created_at: str
    next_cursor: str
    paginate: bool
    prev_cursor: str
    status: str


class N2Account(TypedDict):
    pass


class N3Fund(TypedDict):
    pass


class N8LineItem(TypedDict, total=False):
    campaign: str
    id: str
    orderNotes: str
    purchaseOrderNumber: str


class N8LineItemUpdateDataRequired(TypedDict):
    id: str


class N8LineItemUpdateData(N8LineItemUpdateDataRequired, total=False):
    campaign: str
    orderNotes: str
    purchaseOrderNumber: str


class N9DigitalTemplate(TypedDict, total=False):
    id: str


class N9DigitalTemplateRemoveMatch(TypedDict):
    id: str


class OrderRequired(TypedDict):
    accountIdentifier: str
    accountNumber: str
    amount: float
    amountCharged: dict
    campaign: str
    createdAt: str
    customerIdentifier: str
    emailSubject: str
    etid: str
    message: str
    referenceOrderID: str
    reward: dict
    rewardName: str
    status: str
    utid: str


class Order(OrderRequired, total=False):
    asyncOrderEntity: dict
    customFields: dict
    deliveryMethod: str
    denomination: dict
    expirationDate: str
    externalRefID: str
    id: str
    lineItemStatus: str
    notes: str
    orderClientSource: str
    orderExternalRefIdDupe: bool
    orderStatus: str
    ptid: str
    purchaseOrderNumber: str
    recipient: dict
    redemptionInstructions: str
    referenceLineItemID: str
    sendEmail: bool
    sender: dict


class OrderLoadMatch(TypedDict):
    id: str


class OrderListMatch(TypedDict, total=False):
    account_identifier: str
    campaign: str
    currency_code: str
    customer_identifier: str
    delivery_method: str
    elements_per_block: int
    end_date: str
    external_ref_id: str
    line_item_note: str
    line_item_status: str
    max_amount: float
    min_amount: float
    note: str
    order_status: str
    page: int
    ptid: str
    purchase_order_number: str
    recipient_email: str
    recipient_first_name: str
    recipient_last_name: str
    recipient_mobile_number: str
    reward_name: str
    send_email: bool
    sender_email: str
    sender_first_name: str
    sender_last_name: str
    start_date: str
    status: str
    utid: str


class OrderCreateDataRequired(TypedDict):
    accountIdentifier: str
    accountNumber: str
    amount: float
    amountCharged: dict
    campaign: str
    createdAt: str
    customerIdentifier: str
    emailSubject: str
    etid: str
    message: str
    referenceOrderID: str
    reward: dict
    rewardName: str
    status: str
    utid: str


class OrderCreateData(OrderCreateDataRequired, total=False):
    asyncOrderEntity: dict
    customFields: dict
    deliveryMethod: str
    denomination: dict
    expirationDate: str
    externalRefID: str
    id: str
    lineItemStatus: str
    notes: str
    orderClientSource: str
    orderExternalRefIdDupe: bool
    orderStatus: str
    ptid: str
    purchaseOrderNumber: str
    recipient: dict
    redemptionInstructions: str
    referenceLineItemID: str
    sendEmail: bool
    sender: dict


class OrderViewSummaryRequired(TypedDict):
    reasonCode: str


class OrderViewSummary(OrderViewSummaryRequired, total=False):
    amount: float
    deliveryMethod: str
    notes: str
    otherReason: str
    recipient: dict


class OrderViewSummaryCreateDataRequired(TypedDict):
    reference_line_item_id: str
    reasonCode: str


class OrderViewSummaryCreateData(OrderViewSummaryCreateDataRequired, total=False):
    amount: float
    deliveryMethod: str
    notes: str
    otherReason: str
    recipient: dict


class PrepaidCardInfo(TypedDict, total=False):
    balance: dict
    card: dict
    comments: list
    registration: dict


class PrepaidCardInfoLoadMatch(TypedDict):
    reference_line_item_id: str


class PrepaidCardTransactionRequired(TypedDict):
    page: dict


class PrepaidCardTransaction(PrepaidCardTransactionRequired, total=False):
    journal: list


class PrepaidCardTransactionLoadMatchRequired(TypedDict):
    reference_line_item_id: str


class PrepaidCardTransactionLoadMatch(PrepaidCardTransactionLoadMatchRequired, total=False):
    page: int


class ReissueCardRequired(TypedDict):
    reason: str
    updatedBy: str


class ReissueCard(ReissueCardRequired, total=False):
    commentText: str
    id: str
    status: str


class ReissueCardCreateDataRequired(TypedDict):
    id: str
    reason: str
    updatedBy: str


class ReissueCardCreateData(ReissueCardCreateDataRequired, total=False):
    commentText: str
    status: str


class ReplacementReason(TypedDict, total=False):
    replacementReasons: list


class ReplacementReasonListMatch(TypedDict, total=False):
    replacementReasons: list


class Resend(TypedDict, total=False):
    newDeliveryMethod: str
    newEmail: str
    newEtid: str
    newMobile: str
    newMobileNumber: str
    otherReason: str
    reasonCode: str


class ResendCreateDataRequired(TypedDict):
    line_item_id: str


class ResendCreateData(ResendCreateDataRequired, total=False):
    newDeliveryMethod: str
    newEmail: str
    newEtid: str
    newMobile: str
    newMobileNumber: str
    otherReason: str
    reasonCode: str


class RewardReasonsMap(TypedDict, total=False):
    CANCEL: dict
    CANCEL_AND_REISSUE: dict
    FREEZE: dict
    UNFREEZE: dict


class RewardReasonsMapLoadMatch(TypedDict, total=False):
    CANCEL: dict
    CANCEL_AND_REISSUE: dict
    FREEZE: dict
    UNFREEZE: dict


class TransferFundRequired(TypedDict):
    amount: float


class TransferFund(TransferFundRequired, total=False):
    externalRefID: str
    transferDate: str
    transferFrom: dict
    transferNotes: str
    transferTo: dict
    transferredAmount: float


class TransferFundCreateDataRequired(TypedDict):
    amount: float


class TransferFundCreateData(TransferFundCreateDataRequired, total=False):
    externalRefID: str
    transferDate: str
    transferFrom: dict
    transferNotes: str
    transferTo: dict
    transferredAmount: float


class UpdateAccountRequired(TypedDict):
    registration: dict


class UpdateAccount(UpdateAccountRequired, total=False):
    id: str
    status: str
    updatedBy: str


class UpdateAccountCreateDataRequired(TypedDict):
    id: str
    registration: dict


class UpdateAccountCreateData(UpdateAccountCreateDataRequired, total=False):
    status: str
    updatedBy: str


class UpdateWebhookSubscriptionResponseView(TypedDict, total=False):
    categories: list
    createdAt: str
    eventTypes: list
    expiresAt: str
    headers: list
    hmacSharedSecretKey: str
    payloadVerificationMethod: str
    signingCertificate: str
    updatedAt: str
    url: str
    webhookId: str


class UpdateWebhookSubscriptionResponseViewUpdateDataRequired(TypedDict):
    webhook_id: str


class UpdateWebhookSubscriptionResponseViewUpdateData(UpdateWebhookSubscriptionResponseViewUpdateDataRequired, total=False):
    categories: list
    createdAt: str
    eventTypes: list
    expiresAt: str
    headers: list
    hmacSharedSecretKey: str
    payloadVerificationMethod: str
    signingCertificate: str
    updatedAt: str
    url: str
    webhookId: str


class Webhook(TypedDict, total=False):
    categories: list
    createdAt: str
    eventTypes: list
    expiresAt: str
    headers: list
    hmacSharedSecretKey: str
    id: str
    payloadVerificationMethod: str
    signingCertificate: str
    updatedAt: str
    url: str
    webhookId: str


class WebhookLoadMatch(TypedDict):
    id: str


class WebhookCreateDataRequired(TypedDict):
    id: str


class WebhookCreateData(WebhookCreateDataRequired, total=False):
    from_revision: int
    to_revision: int
    categories: list
    createdAt: str
    eventTypes: list
    expiresAt: str
    headers: list
    hmacSharedSecretKey: str
    payloadVerificationMethod: str
    signingCertificate: str
    updatedAt: str
    url: str
    webhookId: str
