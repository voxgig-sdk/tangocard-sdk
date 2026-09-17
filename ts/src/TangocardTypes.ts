// Typed models for the Tangocard SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Account {
  accountIdentifier: string
  accountNumber: string
  contactEmail?: string
  createdAt: string
  currencyCode: string
  currentBalance: number
  displayName: string
  fundingNotification?: any[]
  id?: string
  status: string
}

export interface AccountLoadMatch {
  id: string
}

export interface AccountUpdateData {
  customer_identifier: string
  id: string
  accountIdentifier?: string
  accountNumber?: string
  contactEmail?: string
  createdAt?: string
  currencyCode?: string
  currentBalance?: number
  displayName?: string
  fundingNotification?: any[]
  status?: string
}

export interface AddCommentEscalation {
  assignee?: number
  commentText: string
  id?: string
  inquiryCategoryCode?: number
  inquiryIdNumber?: number
  inquirySource?: string
  inquiryTypeCode?: number
  issueDescription: string
  status?: string
  userId?: string
}

export interface AddCommentEscalationCreateData {
  id: string
  assignee?: number
  commentText: string
  inquiryCategoryCode?: number
  inquiryIdNumber?: number
  inquirySource?: string
  inquiryTypeCode?: number
  issueDescription: string
  status?: string
  userId?: string
}

export interface AllEventType {
  category?: string
  eventTypes?: any[]
}

export interface AllEventTypeListMatch {
  category?: string
  max_result?: number
  next_cursor?: string
  prev_cursor?: string
}

export interface AsyncOrder {
  accountIdentifier: string
  accountNumber: string
  amountCharged?: Record<string, any>
  campaign?: string
  createdAt?: string
  customerIdentifier: string
  duplicateLineItemRefIds?: Record<string, any>
  externalRefID?: string
  failedLineItems?: any[]
  fulfillBy?: string
  lineItems: any[]
  notes?: string
  orderStatus?: string
  purchaseOrderNumber?: string
  referenceOrderID: string
  sender?: Record<string, any>
  status?: string
  totalLineItems?: number
  totalLineItemsRows?: number
}

export interface AsyncOrderListMatch {
  account_identifier?: string
  campaign?: string
  currency_code?: string
  customer_identifier?: string
  delivery_method?: string
  elements_per_block?: string
  end_date?: string
  external_ref_id?: string
  line_item_note?: string
  line_item_status?: string
  max_amount?: string
  max_result?: string
  min_amount?: string
  next_cursor?: string
  note?: string
  order_status?: string
  page?: string
  prev_cursor?: string
  ptid?: string
  purchase_order_number?: string
  recipient_email?: string
  recipient_first_name?: string
  recipient_last_name?: string
  recipient_mobile_number?: string
  reward_name?: string
  send_email?: string
  sender_email?: string
  sender_first_name?: string
  sender_last_name?: string
  start_date?: string
  utid?: string
}

export interface AsyncOrderCreateData {
  accountIdentifier: string
  accountNumber: string
  amountCharged?: Record<string, any>
  campaign?: string
  createdAt?: string
  customerIdentifier: string
  duplicateLineItemRefIds?: Record<string, any>
  externalRefID?: string
  failedLineItems?: any[]
  fulfillBy?: string
  lineItems: any[]
  notes?: string
  orderStatus?: string
  purchaseOrderNumber?: string
  referenceOrderID: string
  sender?: Record<string, any>
  status?: string
  totalLineItems?: number
  totalLineItemsRows?: number
}

export interface AsyncOrderDetailView {
  accountIdentifier?: string
  amountCharged?: Record<string, any>
  campaign?: string
  completedAt?: string
  createdAt?: string
  customerIdentifier?: string
  externalRefID?: string
  id?: string
  lineItems?: any[]
  notes?: string
  orderErrors?: any[]
  orderStatus?: string
  pagination?: Record<string, any>
  purchaseOrderNumber?: string
  referenceOrderID?: string
  sender?: Record<string, any>
  totalLineItems?: number
}

export interface AsyncOrderDetailViewLoadMatch {
  account_identifier: string
  customer_identifier: string
  external_ref_id: string
  external_ref_line_item_i_d?: any[]
  failed_only?: boolean
  max_result?: number
  next_cursor?: string
  prev_cursor?: string
  reference_line_item_i_d?: any[]
}

export interface AsyncOrderDetailViewUpdateData {
  account_identifier: string
  customer_identifier: string
  external_ref_id: string
  accountIdentifier?: string
  amountCharged?: Record<string, any>
  campaign?: string
  completedAt?: string
  createdAt?: string
  customerIdentifier?: string
  externalRefID?: string
  id?: string
  lineItems?: any[]
  notes?: string
  orderErrors?: any[]
  orderStatus?: string
  pagination?: Record<string, any>
  purchaseOrderNumber?: string
  referenceOrderID?: string
  sender?: Record<string, any>
  totalLineItems?: number
}

export interface AsyncOrderLineItemsView {
  accountIdentifier: string
  amountCharged?: Record<string, any>
  campaign?: string
  customerIdentifier: string
  externalRefID?: string
  lineItems?: any[]
  orderErrors?: any[]
  orderNotes?: string
  orderStatus: string
  pagination?: Record<string, any>
  purchaseOrderNumber?: string
  referenceOrderID: string
  sender?: Record<string, any>
}

export interface AsyncOrderLineItemsViewListMatch {
  account_id: string
  customer_id: string
  external_ref_id: string
  external_ref_line_item_i_d?: any[]
  failed_only?: boolean
  max_result?: number
  next_cursor?: string
  prev_cursor?: string
  reference_line_item_i_d?: any[]
}

export interface AsyncReasonCodesView {
}

export interface AsyncReasonCodesViewLoadMatch {
}

export interface AsyncUpdateLineItemView {
  deliveryDate?: string
  lineItemNote?: string
  senderInfo?: Record<string, any>
}

export interface AsyncUpdateLineItemViewUpdateData {
  reference_line_item_id: string
  deliveryDate?: string
  lineItemNote?: string
  senderInfo?: Record<string, any>
}

export interface BalanceAlertView {
}

export interface BalanceAlertViewRemoveMatch {
  account_id: string
  balance_alert_id: string
  customer_identifier: string
}

export interface BrandCategoriesView {
  description?: string
  identifier?: string
}

export interface BrandCategoriesViewListMatch {
  description?: string
  identifier?: string
}

export interface Catalog {
  barcodeType?: string
  brandKey: string
  brandName: string
  brandRequirements: Record<string, any>
  categories: any[]
  createdDate: string
  description: string
  disclaimer: string
  imageUrls: Record<string, any>
  items: any[]
  lastUpdateDate: string
  shortDescription: string
  status: string
  terms: string
}

export interface CatalogListMatch {
  brand_key?: string
  brand_name?: string
  category_id?: any[]
  country?: string
  currency_code?: string
  fulfillment_type?: any[]
  item_attribute?: any[]
  reward_name?: string
  reward_type?: any[]
  status?: string
  utid?: string
  verbose?: boolean
}

export interface ChoiceProduct {
  countries?: any[]
  currencyCode?: string
  id?: string
  rewardName?: string
  utid?: string
}

export interface ChoiceProductLoadMatch {
  id: string
}

export interface ChoiceProductListMatch {
  country?: any[]
  currency_code?: string
  reward_name?: string
}

export interface CountryViewSummary {
  countryName: string
  preferredCurrency: string
  threeLetterCode: string
  twoLetterCode: string
}

export interface CountryViewSummaryLoadMatch {
  country?: string
  max_result?: number
  next_cursor?: string
  preferred_currency?: string
  prev_cursor?: string
}

export interface CreateAccountCriterion {
  accountIdentifier: string
  contactEmail: string
  currencyCode?: string
  displayName: string
  fundingNotification?: any[]
}

export interface CreateAccountCriterionCreateData {
  customer_identifier: string
  accountIdentifier: string
  contactEmail: string
  currencyCode?: string
  displayName: string
  fundingNotification?: any[]
}

export interface CreateCustomerCriterion {
}

export interface CredentialTypeView {
  credentialType: string
  description?: string
}

export interface CredentialTypeViewListMatch {
  credentialType?: string
  description?: string
}

export interface CreditCard {
  accountIdentifier: string
  accountNumber: string
  activationDate: string
  billingAddress: Record<string, any>
  contactInformation: any[]
  createdDate: string
  creditCard: Record<string, any>
  customerIdentifier: string
  expirationDate: string
  id?: string
  ipAddress: string
  label: string
  lastFourDigits: string
  status: string
  token: string
}

export interface CreditCardLoadMatch {
  id: string
}

export interface CreditCardCreateData {
  accountIdentifier: string
  accountNumber: string
  activationDate: string
  billingAddress: Record<string, any>
  contactInformation: any[]
  createdDate: string
  creditCard: Record<string, any>
  customerIdentifier: string
  expirationDate: string
  id?: string
  ipAddress: string
  label: string
  lastFourDigits: string
  status: string
  token: string
}

export interface CreditCardDeposit {
  accountIdentifier: string
  accountNumber: string
  amount: number
  amountCharged: number
  createdDate: string
  creditCardToken: string
  customerIdentifier: string
  externalRefID?: string
  feePercent: number
  id?: string
  referenceDepositID: string
  status: string
}

export interface CreditCardDepositLoadMatch {
  id: string
}

export interface CreditCardDepositCreateData {
  accountIdentifier: string
  accountNumber: string
  amount: number
  amountCharged: number
  createdDate: string
  creditCardToken: string
  customerIdentifier: string
  externalRefID?: string
  feePercent: number
  id?: string
  referenceDepositID: string
  status: string
}

export interface CreditCardUnregister {
  accountIdentifier: string
  createdDate: string
  creditCardToken: string
  customerIdentifier: string
  message: string
  token: string
}

export interface CreditCardUnregisterCreateData {
  accountIdentifier: string
  createdDate: string
  creditCardToken: string
  customerIdentifier: string
  message: string
  token: string
}

export interface Customer {
  accounts: any[]
  createdAt: string
  customerIdentifier: string
  displayName: string
  id?: string
  status: string
}

export interface CustomerLoadMatch {
  id: string
}

export interface CustomerListMatch {
  account_display_name?: string
  account_identifier?: string
  account_max_date_created_at?: string
  account_min_date_created_at?: string
  account_number?: string
  account_status?: string
  customer_max_date_created_at?: string
  customer_min_date_created_at?: string
  display_name?: string
  max_result?: number
  next_cursor?: string
  paginate?: boolean
  prev_cursor?: string
  status?: string
}

export interface CustomerCreateData {
  accounts: any[]
  createdAt: string
  customerIdentifier: string
  displayName: string
  id?: string
  status: string
}

export interface EmailTemplateListView {
}

export interface EmailTemplateViewVerbose {
  accentColor: string
  accessControl?: any[]
  accessControls?: any[]
  closing: string
  customerServiceMessage?: string
  defaults?: any[]
  etid: string
  fromName: string
  headerImage: string
  headerImageAltText: string
  messageBody: string
  name: string
  smsMessageBody?: string
  subject: string
}

export interface EmailTemplateViewVerboseLoadMatch {
  etid: string
}

export interface EmailTemplateViewVerboseListMatch {
  elements_per_block?: number
  page?: number
}

export interface EmailTemplateViewVerboseCreateData {
  accentColor: string
  accessControl?: any[]
  accessControls?: any[]
  closing: string
  customerServiceMessage?: string
  defaults?: any[]
  etid: string
  fromName: string
  headerImage: string
  headerImageAltText: string
  messageBody: string
  name: string
  smsMessageBody?: string
  subject: string
}

export interface EmailTemplateViewVerboseUpdateData {
  etid: string
  accentColor?: string
  accessControl?: any[]
  accessControls?: any[]
  closing?: string
  customerServiceMessage?: string
  defaults?: any[]
  fromName?: string
  headerImage?: string
  headerImageAltText?: string
  messageBody?: string
  name?: string
  smsMessageBody?: string
  subject?: string
}

export interface EmbeddableResponseDto {
  url?: string
}

export interface EmbeddableResponseDtoLoadMatch {
  reference_line_item_id: string
}

export interface ExchangeRatesWithDisclaimer {
  baseCurrency: string
  baseFx: string
  lastModifiedDate: string
  rewardCurrency: string
}

export interface ExchangeRatesWithDisclaimerListMatch {
  base_currency?: any[]
  max_result?: number
  next_cursor?: string
  paginate?: boolean
  prev_cursor?: string
  reward_currency?: any[]
}

export interface LineItem {
  accountIdentifier: string
  accountNumber: string
  amountCharged?: Record<string, any>
  amountIssued: Record<string, any>
  campaign?: string
  canCancel?: boolean
  canFreeze?: boolean
  customerIdentifier: string
  dateIssued: string
  deliveryMethod?: string
  deliveryStatus?: string
  emailStatus: string
  etid: string
  expirationDate: string
  externalReferenceLineItemID?: string
  id?: string
  lineItemActionHistory?: any[]
  lineItemActionReason?: string
  lineItemErrors?: any[]
  lineNumber: number
  orderNotes?: string
  orderSource: string
  orderStatus: string
  ptid?: string
  purchaseOrderNumber?: string
  quantity?: number
  recipient?: Record<string, any>
  redemptionHistory?: any[]
  referenceLineItemID: string
  referenceOrderID: string
  reissuedFromReferenceLineItemId?: string
  reissuedToReferenceLineItemId?: string
  remainingBalance?: number
  resendHistory?: any[]
  reward: Record<string, any>
  rewardName: string
  rewardStatus?: string
  rewardViewHistory?: any[]
  sender?: Record<string, any>
  status: string
  utid: string
}

export interface LineItemLoadMatch {
  id: string
}

export interface LineItemListMatch {
  account_identifier?: string
  campaign?: string
  column_sort_ascending?: string
  column_sort_name?: string
  delivery_method?: string
  delivery_status?: string
  elements_per_block?: number
  email_status?: string
  end_date?: string
  etid?: string
  external_ref_id?: string
  has_remaining_balance?: boolean
  max_remaining_balance?: number
  min_remaining_balance?: number
  order_note?: string
  order_source?: string
  order_status?: string
  page_key?: any[]
  page_previous?: boolean
  ptid?: string
  purchase_order_number?: string
  recipient_city?: string
  recipient_country?: string
  recipient_email?: string
  recipient_first_name?: string
  recipient_last_name?: string
  recipient_mobile_number?: string
  recipient_postal_code?: string
  recipient_state_or_province?: string
  recipient_street_line1?: string
  recipient_street_line2?: string
  reference_order_id?: string
  start_date?: string
  status?: string
  utid?: string
}

export interface LineItemCreateData {
  reference_line_item_id: string
  accountIdentifier: string
  accountNumber: string
  amountCharged?: Record<string, any>
  amountIssued: Record<string, any>
  campaign?: string
  canCancel?: boolean
  canFreeze?: boolean
  customerIdentifier: string
  dateIssued: string
  deliveryMethod?: string
  deliveryStatus?: string
  emailStatus: string
  etid: string
  expirationDate: string
  externalReferenceLineItemID?: string
  id?: string
  lineItemActionHistory?: any[]
  lineItemActionReason?: string
  lineItemErrors?: any[]
  lineNumber: number
  orderNotes?: string
  orderSource: string
  orderStatus: string
  ptid?: string
  purchaseOrderNumber?: string
  quantity?: number
  recipient?: Record<string, any>
  redemptionHistory?: any[]
  referenceLineItemID: string
  referenceOrderID: string
  reissuedFromReferenceLineItemId?: string
  reissuedToReferenceLineItemId?: string
  remainingBalance?: number
  resendHistory?: any[]
  reward: Record<string, any>
  rewardName: string
  rewardStatus?: string
  rewardViewHistory?: any[]
  sender?: Record<string, any>
  status: string
  utid: string

  // Selects a custom action instead of the plain create:
  //   'cancel' | 'freeze' | 'unfreeze'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface LowBalanceAlertListView {
  accountIdentifier?: string
  balanceAlertDisplayName?: string
  balanceAlertID?: string
  balanceAlertNotification?: any[]
  balanceAlertThreshold?: number
  createdAt?: string
  customerIdentifier?: string
}

export interface LowBalanceAlertListViewListMatch {
  account_identifier: string
  customer_identifier: string
  balance_alert_display_name?: string
  balance_alert_notification?: any[]
  balance_alert_threshold?: number
  elements_per_block?: number
  page?: number
}

export interface LowBalanceAlertView {
  accountIdentifier?: string
  balanceAlertDisplayName?: string
  balanceAlertID?: string
  balanceAlertNotification?: any[]
  balanceAlertThreshold?: number
  createdAt?: string
  customerIdentifier?: string
}

export interface LowBalanceAlertViewLoadMatch {
  account_id: string
  balance_alert_id: string
  customer_identifier: string
}

export interface LowBalanceAlertViewCreateData {
  account_identifier: string
  customer_identifier: string
  accountIdentifier?: string
  balanceAlertDisplayName?: string
  balanceAlertID?: string
  balanceAlertNotification?: any[]
  balanceAlertThreshold?: number
  createdAt?: string
  customerIdentifier?: string
}

export interface LowBalanceAlertViewUpdateData {
  account_id: string
  balance_alert_id: string
  customer_identifier: string
  accountIdentifier?: string
  balanceAlertDisplayName?: string
  balanceAlertID?: string
  balanceAlertNotification?: any[]
  balanceAlertThreshold?: number
  createdAt?: string
  customerIdentifier?: string
}

export interface MobileCountry {
  countryCode?: string
  countryName?: string
  isoCode?: string
  languageCode?: string
}

export interface MobileCountryLoadMatch {
  countryCode?: string
  countryName?: string
  isoCode?: string
  languageCode?: string
}

export interface N14Webhook {
  categories?: any[]
  createdAt?: string
  eventTypes?: any[]
  expiresAt?: string
  headers?: any[]
  hmacSharedSecretKey?: string
  id?: string
  payloadVerificationMethod?: string
  signingCertificate?: string
  updatedAt?: string
  url: string
  webhookId?: string
}

export interface N14WebhookLoadMatch {
  webhook_id: string
  from_revision?: number
  max_result?: number
  next_cursor?: string
  prev_cursor?: string
  to_revision?: number
}

export interface N14WebhookListMatch {
  category?: any[]
  created_at_from?: string
  created_at_to?: string
  event_type?: any[]
  expires_at_from?: string
  expires_at_to?: string
  header_name?: string
  header_value?: string
  max_result?: number
  next_cursor?: string
  prev_cursor?: string
  url?: string
}

export interface N14WebhookCreateData {
  test_name: string
  webhook_id: string
  categories?: any[]
  createdAt?: string
  eventTypes?: any[]
  expiresAt?: string
  headers?: any[]
  hmacSharedSecretKey?: string
  id?: string
  payloadVerificationMethod?: string
  signingCertificate?: string
  updatedAt?: string
  url: string
  webhookId?: string
}

export interface N14WebhookRemoveMatch {
  id: string
}

export interface N1Customer {
}

export interface N1CustomerLoadMatch {
  customer_identifier: string
  account_number?: string
  contact_email?: string
  currency_code?: any[]
  display_name?: string
  funding_notification_email?: any[]
  max_balance?: number
  max_date_created_at?: string
  max_result?: number
  min_balance?: number
  min_date_created_at?: string
  next_cursor?: string
  paginate?: boolean
  prev_cursor?: string
  status?: string
}

export interface N2Account {
}

export interface N3Fund {
}

export interface N8LineItem {
  campaign?: string
  id?: string
  orderNotes?: string
  purchaseOrderNumber?: string
}

export interface N8LineItemUpdateData {
  id: string
  campaign?: string
  orderNotes?: string
  purchaseOrderNumber?: string
}

export interface N9DigitalTemplate {
  id?: string
}

export interface N9DigitalTemplateRemoveMatch {
  id: string
}

export interface Order {
  accountIdentifier: string
  accountNumber: string
  amount: number
  amountCharged: Record<string, any>
  asyncOrderEntity?: Record<string, any>
  campaign: string
  createdAt: string
  customFields?: Record<string, any>
  customerIdentifier: string
  deliveryMethod?: string
  denomination?: Record<string, any>
  emailSubject: string
  etid: string
  expirationDate?: string
  externalRefID?: string
  id?: string
  lineItemStatus?: string
  message: string
  notes?: string
  orderClientSource?: string
  orderExternalRefIdDupe?: boolean
  orderStatus?: string
  ptid?: string
  purchaseOrderNumber?: string
  recipient?: Record<string, any>
  redemptionInstructions?: string
  referenceLineItemID?: string
  referenceOrderID: string
  reward: Record<string, any>
  rewardName: string
  sendEmail?: boolean
  sender?: Record<string, any>
  status: string
  utid: string
}

export interface OrderLoadMatch {
  id: string
}

export interface OrderListMatch {
  account_identifier?: string
  campaign?: string
  currency_code?: string
  customer_identifier?: string
  delivery_method?: string
  elements_per_block?: number
  end_date?: string
  external_ref_id?: string
  line_item_note?: string
  line_item_status?: string
  max_amount?: number
  min_amount?: number
  note?: string
  order_status?: string
  page?: number
  ptid?: string
  purchase_order_number?: string
  recipient_email?: string
  recipient_first_name?: string
  recipient_last_name?: string
  recipient_mobile_number?: string
  reward_name?: string
  send_email?: boolean
  sender_email?: string
  sender_first_name?: string
  sender_last_name?: string
  start_date?: string
  status?: string
  utid?: string
}

export interface OrderCreateData {
  accountIdentifier: string
  accountNumber: string
  amount: number
  amountCharged: Record<string, any>
  asyncOrderEntity?: Record<string, any>
  campaign: string
  createdAt: string
  customFields?: Record<string, any>
  customerIdentifier: string
  deliveryMethod?: string
  denomination?: Record<string, any>
  emailSubject: string
  etid: string
  expirationDate?: string
  externalRefID?: string
  id?: string
  lineItemStatus?: string
  message: string
  notes?: string
  orderClientSource?: string
  orderExternalRefIdDupe?: boolean
  orderStatus?: string
  ptid?: string
  purchaseOrderNumber?: string
  recipient?: Record<string, any>
  redemptionInstructions?: string
  referenceLineItemID?: string
  referenceOrderID: string
  reward: Record<string, any>
  rewardName: string
  sendEmail?: boolean
  sender?: Record<string, any>
  status: string
  utid: string
}

export interface OrderViewSummary {
  amount?: number
  deliveryMethod?: string
  notes?: string
  otherReason?: string
  reasonCode: string
  recipient?: Record<string, any>
}

export interface OrderViewSummaryCreateData {
  reference_line_item_id: string
  amount?: number
  deliveryMethod?: string
  notes?: string
  otherReason?: string
  reasonCode: string
  recipient?: Record<string, any>
}

export interface PrepaidCardInfo {
  balance?: Record<string, any>
  card?: Record<string, any>
  comments?: any[]
  registration?: Record<string, any>
}

export interface PrepaidCardInfoLoadMatch {
  reference_line_item_id: string
}

export interface PrepaidCardTransaction {
  journal?: any[]
  page: Record<string, any>
}

export interface PrepaidCardTransactionLoadMatch {
  reference_line_item_id: string
  page?: number
}

export interface ReissueCard {
  commentText?: string
  id?: string
  reason: string
  status?: string
  updatedBy: string
}

export interface ReissueCardCreateData {
  id: string
  commentText?: string
  reason: string
  status?: string
  updatedBy: string
}

export interface ReplacementReason {
  replacementReasons?: any[]
}

export interface ReplacementReasonListMatch {
  replacementReasons?: any[]
}

export interface Resend {
  newDeliveryMethod?: string
  newEmail?: string
  newEtid?: string
  newMobile?: string
  newMobileNumber?: string
  otherReason?: string
  reasonCode?: string
}

export interface ResendCreateData {
  line_item_id: string
  newDeliveryMethod?: string
  newEmail?: string
  newEtid?: string
  newMobile?: string
  newMobileNumber?: string
  otherReason?: string
  reasonCode?: string
}

export interface RewardReasonsMap {
  CANCEL?: Record<string, any>
  CANCEL_AND_REISSUE?: Record<string, any>
  FREEZE?: Record<string, any>
  UNFREEZE?: Record<string, any>
}

export interface RewardReasonsMapLoadMatch {
  CANCEL?: Record<string, any>
  CANCEL_AND_REISSUE?: Record<string, any>
  FREEZE?: Record<string, any>
  UNFREEZE?: Record<string, any>
}

export interface TransferFund {
  amount: number
  externalRefID?: string
  transferDate?: string
  transferFrom?: Record<string, any>
  transferNotes?: string
  transferTo?: Record<string, any>
  transferredAmount?: number
}

export interface TransferFundCreateData {
  amount: number
  externalRefID?: string
  transferDate?: string
  transferFrom?: Record<string, any>
  transferNotes?: string
  transferTo?: Record<string, any>
  transferredAmount?: number
}

export interface UpdateAccount {
  id?: string
  registration: Record<string, any>
  status?: string
  updatedBy?: string
}

export interface UpdateAccountCreateData {
  id: string
  registration: Record<string, any>
  status?: string
  updatedBy?: string
}

export interface UpdateWebhookSubscriptionResponseView {
  categories?: any[]
  createdAt?: string
  eventTypes?: any[]
  expiresAt?: string
  headers?: any[]
  hmacSharedSecretKey?: string
  payloadVerificationMethod?: string
  signingCertificate?: string
  updatedAt?: string
  url?: string
  webhookId?: string
}

export interface UpdateWebhookSubscriptionResponseViewUpdateData {
  webhook_id: string
  categories?: any[]
  createdAt?: string
  eventTypes?: any[]
  expiresAt?: string
  headers?: any[]
  hmacSharedSecretKey?: string
  payloadVerificationMethod?: string
  signingCertificate?: string
  updatedAt?: string
  url?: string
  webhookId?: string
}

export interface Webhook {
  categories?: any[]
  createdAt?: string
  eventTypes?: any[]
  expiresAt?: string
  headers?: any[]
  hmacSharedSecretKey?: string
  id?: string
  payloadVerificationMethod?: string
  signingCertificate?: string
  updatedAt?: string
  url?: string
  webhookId?: string
}

export interface WebhookLoadMatch {
  id: string
}

export interface WebhookCreateData {
  id: string
  from_revision?: number
  to_revision?: number
  categories?: any[]
  createdAt?: string
  eventTypes?: any[]
  expiresAt?: string
  headers?: any[]
  hmacSharedSecretKey?: string
  payloadVerificationMethod?: string
  signingCertificate?: string
  updatedAt?: string
  url?: string
  webhookId?: string

  // Selects a custom action instead of the plain create:
  //   'renew' | 'replay'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

