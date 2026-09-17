// Typed models for the Tangocard SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/tangocard-sdk/go/core"
)

// Account is the typed data model for the account entity.
type Account struct {
	AccountIdentifier string `json:"accountIdentifier"`
	AccountNumber string `json:"accountNumber"`
	ContactEmail *string `json:"contactEmail,omitempty"`
	CreatedAt string `json:"createdAt"`
	CurrencyCode string `json:"currencyCode"`
	CurrentBalance float64 `json:"currentBalance"`
	DisplayName string `json:"displayName"`
	FundingNotification *[]any `json:"fundingNotification,omitempty"`
	Id *string `json:"id,omitempty"`
	Status string `json:"status"`
}

// AccountLoadMatch is the typed request payload for Account.LoadTyped.
type AccountLoadMatch struct {
	Id string `json:"id"`
}

// AccountUpdateData is the typed request payload for Account.UpdateTyped.
type AccountUpdateData struct {
	CustomerIdentifier string `json:"customer_identifier"`
	Id string `json:"id"`
	AccountIdentifier *string `json:"accountIdentifier,omitempty"`
	AccountNumber *string `json:"accountNumber,omitempty"`
	ContactEmail *string `json:"contactEmail,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CurrencyCode *string `json:"currencyCode,omitempty"`
	CurrentBalance *float64 `json:"currentBalance,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	FundingNotification *[]any `json:"fundingNotification,omitempty"`
	Status *string `json:"status,omitempty"`
}

// AddCommentEscalation is the typed data model for the add_comment_escalation entity.
type AddCommentEscalation struct {
	Assignee *int `json:"assignee,omitempty"`
	CommentText string `json:"commentText"`
	Id *string `json:"id,omitempty"`
	InquiryCategoryCode *int `json:"inquiryCategoryCode,omitempty"`
	InquiryIdNumber *int `json:"inquiryIdNumber,omitempty"`
	InquirySource *string `json:"inquirySource,omitempty"`
	InquiryTypeCode *int `json:"inquiryTypeCode,omitempty"`
	IssueDescription string `json:"issueDescription"`
	Status *string `json:"status,omitempty"`
	UserId *string `json:"userId,omitempty"`
}

// AddCommentEscalationCreateData is the typed request payload for AddCommentEscalation.CreateTyped.
type AddCommentEscalationCreateData struct {
	Id string `json:"id"`
	Assignee *int `json:"assignee,omitempty"`
	CommentText string `json:"commentText"`
	InquiryCategoryCode *int `json:"inquiryCategoryCode,omitempty"`
	InquiryIdNumber *int `json:"inquiryIdNumber,omitempty"`
	InquirySource *string `json:"inquirySource,omitempty"`
	InquiryTypeCode *int `json:"inquiryTypeCode,omitempty"`
	IssueDescription string `json:"issueDescription"`
	Status *string `json:"status,omitempty"`
	UserId *string `json:"userId,omitempty"`
}

// AllEventType is the typed data model for the all_event_type entity.
type AllEventType struct {
	Category *string `json:"category,omitempty"`
	EventTypes *[]any `json:"eventTypes,omitempty"`
}

// AllEventTypeListMatch is the typed request payload for AllEventType.ListTyped.
type AllEventTypeListMatch struct {
	Category *string `json:"category,omitempty"`
	MaxResult *int `json:"max_result,omitempty"`
	NextCursor *string `json:"next_cursor,omitempty"`
	PrevCursor *string `json:"prev_cursor,omitempty"`
}

// AsyncOrder is the typed data model for the async_order entity.
type AsyncOrder struct {
	AccountIdentifier string `json:"accountIdentifier"`
	AccountNumber string `json:"accountNumber"`
	AmountCharged *map[string]any `json:"amountCharged,omitempty"`
	Campaign *string `json:"campaign,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CustomerIdentifier string `json:"customerIdentifier"`
	DuplicateLineItemRefIds *map[string]any `json:"duplicateLineItemRefIds,omitempty"`
	ExternalRefID *string `json:"externalRefID,omitempty"`
	FailedLineItems *[]any `json:"failedLineItems,omitempty"`
	FulfillBy *string `json:"fulfillBy,omitempty"`
	LineItems []any `json:"lineItems"`
	Notes *string `json:"notes,omitempty"`
	OrderStatus *string `json:"orderStatus,omitempty"`
	PurchaseOrderNumber *string `json:"purchaseOrderNumber,omitempty"`
	ReferenceOrderID string `json:"referenceOrderID"`
	Sender *map[string]any `json:"sender,omitempty"`
	Status *string `json:"status,omitempty"`
	TotalLineItems *int `json:"totalLineItems,omitempty"`
	TotalLineItemsRows *int `json:"totalLineItemsRows,omitempty"`
}

// AsyncOrderListMatch is the typed request payload for AsyncOrder.ListTyped.
type AsyncOrderListMatch struct {
	AccountIdentifier *string `json:"account_identifier,omitempty"`
	Campaign *string `json:"campaign,omitempty"`
	CurrencyCode *string `json:"currency_code,omitempty"`
	CustomerIdentifier *string `json:"customer_identifier,omitempty"`
	DeliveryMethod *string `json:"delivery_method,omitempty"`
	ElementsPerBlock *string `json:"elements_per_block,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	ExternalRefId *string `json:"external_ref_id,omitempty"`
	LineItemNote *string `json:"line_item_note,omitempty"`
	LineItemStatus *string `json:"line_item_status,omitempty"`
	MaxAmount *string `json:"max_amount,omitempty"`
	MaxResult *string `json:"max_result,omitempty"`
	MinAmount *string `json:"min_amount,omitempty"`
	NextCursor *string `json:"next_cursor,omitempty"`
	Note *string `json:"note,omitempty"`
	OrderStatus *string `json:"order_status,omitempty"`
	Page *string `json:"page,omitempty"`
	PrevCursor *string `json:"prev_cursor,omitempty"`
	Ptid *string `json:"ptid,omitempty"`
	PurchaseOrderNumber *string `json:"purchase_order_number,omitempty"`
	RecipientEmail *string `json:"recipient_email,omitempty"`
	RecipientFirstName *string `json:"recipient_first_name,omitempty"`
	RecipientLastName *string `json:"recipient_last_name,omitempty"`
	RecipientMobileNumber *string `json:"recipient_mobile_number,omitempty"`
	RewardName *string `json:"reward_name,omitempty"`
	SendEmail *string `json:"send_email,omitempty"`
	SenderEmail *string `json:"sender_email,omitempty"`
	SenderFirstName *string `json:"sender_first_name,omitempty"`
	SenderLastName *string `json:"sender_last_name,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	Utid *string `json:"utid,omitempty"`
}

// AsyncOrderCreateData is the typed request payload for AsyncOrder.CreateTyped.
type AsyncOrderCreateData struct {
	AccountIdentifier string `json:"accountIdentifier"`
	AccountNumber string `json:"accountNumber"`
	AmountCharged *map[string]any `json:"amountCharged,omitempty"`
	Campaign *string `json:"campaign,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CustomerIdentifier string `json:"customerIdentifier"`
	DuplicateLineItemRefIds *map[string]any `json:"duplicateLineItemRefIds,omitempty"`
	ExternalRefID *string `json:"externalRefID,omitempty"`
	FailedLineItems *[]any `json:"failedLineItems,omitempty"`
	FulfillBy *string `json:"fulfillBy,omitempty"`
	LineItems []any `json:"lineItems"`
	Notes *string `json:"notes,omitempty"`
	OrderStatus *string `json:"orderStatus,omitempty"`
	PurchaseOrderNumber *string `json:"purchaseOrderNumber,omitempty"`
	ReferenceOrderID string `json:"referenceOrderID"`
	Sender *map[string]any `json:"sender,omitempty"`
	Status *string `json:"status,omitempty"`
	TotalLineItems *int `json:"totalLineItems,omitempty"`
	TotalLineItemsRows *int `json:"totalLineItemsRows,omitempty"`
}

// AsyncOrderDetailView is the typed data model for the async_order_detail_view entity.
type AsyncOrderDetailView struct {
	AccountIdentifier *string `json:"accountIdentifier,omitempty"`
	AmountCharged *map[string]any `json:"amountCharged,omitempty"`
	Campaign *string `json:"campaign,omitempty"`
	CompletedAt *string `json:"completedAt,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CustomerIdentifier *string `json:"customerIdentifier,omitempty"`
	ExternalRefID *string `json:"externalRefID,omitempty"`
	Id *string `json:"id,omitempty"`
	LineItems *[]any `json:"lineItems,omitempty"`
	Notes *string `json:"notes,omitempty"`
	OrderErrors *[]any `json:"orderErrors,omitempty"`
	OrderStatus *string `json:"orderStatus,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	PurchaseOrderNumber *string `json:"purchaseOrderNumber,omitempty"`
	ReferenceOrderID *string `json:"referenceOrderID,omitempty"`
	Sender *map[string]any `json:"sender,omitempty"`
	TotalLineItems *int `json:"totalLineItems,omitempty"`
}

// AsyncOrderDetailViewLoadMatch is the typed request payload for AsyncOrderDetailView.LoadTyped.
type AsyncOrderDetailViewLoadMatch struct {
	AccountIdentifier string `json:"account_identifier"`
	CustomerIdentifier string `json:"customer_identifier"`
	ExternalRefId string `json:"external_ref_id"`
	ExternalRefLineItemID *[]any `json:"external_ref_line_item_i_d,omitempty"`
	FailedOnly *bool `json:"failed_only,omitempty"`
	MaxResult *int `json:"max_result,omitempty"`
	NextCursor *string `json:"next_cursor,omitempty"`
	PrevCursor *string `json:"prev_cursor,omitempty"`
	ReferenceLineItemID *[]any `json:"reference_line_item_i_d,omitempty"`
}

// AsyncOrderDetailViewUpdateData is the typed request payload for AsyncOrderDetailView.UpdateTyped.
type AsyncOrderDetailViewUpdateData struct {
	AccountIdentifier string `json:"account_identifier"`
	CustomerIdentifier string `json:"customer_identifier"`
	ExternalRefId string `json:"external_ref_id"`
	AccountIdentifier2 *string `json:"accountIdentifier,omitempty"`
	AmountCharged *map[string]any `json:"amountCharged,omitempty"`
	Campaign *string `json:"campaign,omitempty"`
	CompletedAt *string `json:"completedAt,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CustomerIdentifier2 *string `json:"customerIdentifier,omitempty"`
	ExternalRefID *string `json:"externalRefID,omitempty"`
	Id *string `json:"id,omitempty"`
	LineItems *[]any `json:"lineItems,omitempty"`
	Notes *string `json:"notes,omitempty"`
	OrderErrors *[]any `json:"orderErrors,omitempty"`
	OrderStatus *string `json:"orderStatus,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	PurchaseOrderNumber *string `json:"purchaseOrderNumber,omitempty"`
	ReferenceOrderID *string `json:"referenceOrderID,omitempty"`
	Sender *map[string]any `json:"sender,omitempty"`
	TotalLineItems *int `json:"totalLineItems,omitempty"`
}

// AsyncOrderLineItemsView is the typed data model for the async_order_line_items_view entity.
type AsyncOrderLineItemsView struct {
	AccountIdentifier string `json:"accountIdentifier"`
	AmountCharged *map[string]any `json:"amountCharged,omitempty"`
	Campaign *string `json:"campaign,omitempty"`
	CustomerIdentifier string `json:"customerIdentifier"`
	ExternalRefID *string `json:"externalRefID,omitempty"`
	LineItems *[]any `json:"lineItems,omitempty"`
	OrderErrors *[]any `json:"orderErrors,omitempty"`
	OrderNotes *string `json:"orderNotes,omitempty"`
	OrderStatus string `json:"orderStatus"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	PurchaseOrderNumber *string `json:"purchaseOrderNumber,omitempty"`
	ReferenceOrderID string `json:"referenceOrderID"`
	Sender *map[string]any `json:"sender,omitempty"`
}

// AsyncOrderLineItemsViewListMatch is the typed request payload for AsyncOrderLineItemsView.ListTyped.
type AsyncOrderLineItemsViewListMatch struct {
	AccountId string `json:"account_id"`
	CustomerId string `json:"customer_id"`
	ExternalRefId string `json:"external_ref_id"`
	ExternalRefLineItemID *[]any `json:"external_ref_line_item_i_d,omitempty"`
	FailedOnly *bool `json:"failed_only,omitempty"`
	MaxResult *int `json:"max_result,omitempty"`
	NextCursor *string `json:"next_cursor,omitempty"`
	PrevCursor *string `json:"prev_cursor,omitempty"`
	ReferenceLineItemID *[]any `json:"reference_line_item_i_d,omitempty"`
}

// AsyncReasonCodesView is the typed data model for the async_reason_codes_view entity.
type AsyncReasonCodesView struct {
}

// AsyncReasonCodesViewLoadMatch is the typed request payload for AsyncReasonCodesView.LoadTyped.
type AsyncReasonCodesViewLoadMatch struct {
}

// AsyncUpdateLineItemView is the typed data model for the async_update_line_item_view entity.
type AsyncUpdateLineItemView struct {
	DeliveryDate *string `json:"deliveryDate,omitempty"`
	LineItemNote *string `json:"lineItemNote,omitempty"`
	SenderInfo *map[string]any `json:"senderInfo,omitempty"`
}

// AsyncUpdateLineItemViewUpdateData is the typed request payload for AsyncUpdateLineItemView.UpdateTyped.
type AsyncUpdateLineItemViewUpdateData struct {
	ReferenceLineItemId string `json:"reference_line_item_id"`
	DeliveryDate *string `json:"deliveryDate,omitempty"`
	LineItemNote *string `json:"lineItemNote,omitempty"`
	SenderInfo *map[string]any `json:"senderInfo,omitempty"`
}

// BalanceAlertView is the typed data model for the balance_alert_view entity.
type BalanceAlertView struct {
}

// BalanceAlertViewRemoveMatch is the typed request payload for BalanceAlertView.RemoveTyped.
type BalanceAlertViewRemoveMatch struct {
	AccountId string `json:"account_id"`
	BalanceAlertId string `json:"balance_alert_id"`
	CustomerIdentifier string `json:"customer_identifier"`
}

// BrandCategoriesView is the typed data model for the brand_categories_view entity.
type BrandCategoriesView struct {
	Description *string `json:"description,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
}

// BrandCategoriesViewListMatch is the typed request payload for BrandCategoriesView.ListTyped.
type BrandCategoriesViewListMatch struct {
	Description *string `json:"description,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
}

// Catalog is the typed data model for the catalog entity.
type Catalog struct {
	BarcodeType *string `json:"barcodeType,omitempty"`
	BrandKey string `json:"brandKey"`
	BrandName string `json:"brandName"`
	BrandRequirements map[string]any `json:"brandRequirements"`
	Categories []any `json:"categories"`
	CreatedDate string `json:"createdDate"`
	Description string `json:"description"`
	Disclaimer string `json:"disclaimer"`
	ImageUrls map[string]any `json:"imageUrls"`
	Items []any `json:"items"`
	LastUpdateDate string `json:"lastUpdateDate"`
	ShortDescription string `json:"shortDescription"`
	Status string `json:"status"`
	Terms string `json:"terms"`
}

// CatalogListMatch is the typed request payload for Catalog.ListTyped.
type CatalogListMatch struct {
	BrandKey *string `json:"brand_key,omitempty"`
	BrandName *string `json:"brand_name,omitempty"`
	CategoryId *[]any `json:"category_id,omitempty"`
	Country *string `json:"country,omitempty"`
	CurrencyCode *string `json:"currency_code,omitempty"`
	FulfillmentType *[]any `json:"fulfillment_type,omitempty"`
	ItemAttribute *[]any `json:"item_attribute,omitempty"`
	RewardName *string `json:"reward_name,omitempty"`
	RewardType *[]any `json:"reward_type,omitempty"`
	Status *string `json:"status,omitempty"`
	Utid *string `json:"utid,omitempty"`
	Verbose *bool `json:"verbose,omitempty"`
}

// ChoiceProduct is the typed data model for the choice_product entity.
type ChoiceProduct struct {
	Countries *[]any `json:"countries,omitempty"`
	CurrencyCode *string `json:"currencyCode,omitempty"`
	Id *string `json:"id,omitempty"`
	RewardName *string `json:"rewardName,omitempty"`
	Utid *string `json:"utid,omitempty"`
}

// ChoiceProductLoadMatch is the typed request payload for ChoiceProduct.LoadTyped.
type ChoiceProductLoadMatch struct {
	Id string `json:"id"`
}

// ChoiceProductListMatch is the typed request payload for ChoiceProduct.ListTyped.
type ChoiceProductListMatch struct {
	Country *[]any `json:"country,omitempty"`
	CurrencyCode *string `json:"currency_code,omitempty"`
	RewardName *string `json:"reward_name,omitempty"`
}

// CountryViewSummary is the typed data model for the country_view_summary entity.
type CountryViewSummary struct {
	CountryName string `json:"countryName"`
	PreferredCurrency string `json:"preferredCurrency"`
	ThreeLetterCode string `json:"threeLetterCode"`
	TwoLetterCode string `json:"twoLetterCode"`
}

// CountryViewSummaryLoadMatch is the typed request payload for CountryViewSummary.LoadTyped.
type CountryViewSummaryLoadMatch struct {
	Country *string `json:"country,omitempty"`
	MaxResult *int `json:"max_result,omitempty"`
	NextCursor *string `json:"next_cursor,omitempty"`
	PreferredCurrency *string `json:"preferred_currency,omitempty"`
	PrevCursor *string `json:"prev_cursor,omitempty"`
}

// CreateAccountCriterion is the typed data model for the create_account_criterion entity.
type CreateAccountCriterion struct {
	AccountIdentifier string `json:"accountIdentifier"`
	ContactEmail string `json:"contactEmail"`
	CurrencyCode *string `json:"currencyCode,omitempty"`
	DisplayName string `json:"displayName"`
	FundingNotification *[]any `json:"fundingNotification,omitempty"`
}

// CreateAccountCriterionCreateData is the typed request payload for CreateAccountCriterion.CreateTyped.
type CreateAccountCriterionCreateData struct {
	CustomerIdentifier string `json:"customer_identifier"`
	AccountIdentifier string `json:"accountIdentifier"`
	ContactEmail string `json:"contactEmail"`
	CurrencyCode *string `json:"currencyCode,omitempty"`
	DisplayName string `json:"displayName"`
	FundingNotification *[]any `json:"fundingNotification,omitempty"`
}

// CreateCustomerCriterion is the typed data model for the create_customer_criterion entity.
type CreateCustomerCriterion struct {
}

// CredentialTypeView is the typed data model for the credential_type_view entity.
type CredentialTypeView struct {
	CredentialType string `json:"credentialType"`
	Description *string `json:"description,omitempty"`
}

// CredentialTypeViewListMatch is the typed request payload for CredentialTypeView.ListTyped.
type CredentialTypeViewListMatch struct {
	CredentialType *string `json:"credentialType,omitempty"`
	Description *string `json:"description,omitempty"`
}

// CreditCard is the typed data model for the credit_card entity.
type CreditCard struct {
	AccountIdentifier string `json:"accountIdentifier"`
	AccountNumber string `json:"accountNumber"`
	ActivationDate string `json:"activationDate"`
	BillingAddress map[string]any `json:"billingAddress"`
	ContactInformation []any `json:"contactInformation"`
	CreatedDate string `json:"createdDate"`
	CreditCard map[string]any `json:"creditCard"`
	CustomerIdentifier string `json:"customerIdentifier"`
	ExpirationDate string `json:"expirationDate"`
	Id *string `json:"id,omitempty"`
	IpAddress string `json:"ipAddress"`
	Label string `json:"label"`
	LastFourDigits string `json:"lastFourDigits"`
	Status string `json:"status"`
	Token string `json:"token"`
}

// CreditCardLoadMatch is the typed request payload for CreditCard.LoadTyped.
type CreditCardLoadMatch struct {
	Id string `json:"id"`
}

// CreditCardCreateData is the typed request payload for CreditCard.CreateTyped.
type CreditCardCreateData struct {
	AccountIdentifier string `json:"accountIdentifier"`
	AccountNumber string `json:"accountNumber"`
	ActivationDate string `json:"activationDate"`
	BillingAddress map[string]any `json:"billingAddress"`
	ContactInformation []any `json:"contactInformation"`
	CreatedDate string `json:"createdDate"`
	CreditCard map[string]any `json:"creditCard"`
	CustomerIdentifier string `json:"customerIdentifier"`
	ExpirationDate string `json:"expirationDate"`
	Id *string `json:"id,omitempty"`
	IpAddress string `json:"ipAddress"`
	Label string `json:"label"`
	LastFourDigits string `json:"lastFourDigits"`
	Status string `json:"status"`
	Token string `json:"token"`
}

// CreditCardDeposit is the typed data model for the credit_card_deposit entity.
type CreditCardDeposit struct {
	AccountIdentifier string `json:"accountIdentifier"`
	AccountNumber string `json:"accountNumber"`
	Amount float64 `json:"amount"`
	AmountCharged float64 `json:"amountCharged"`
	CreatedDate string `json:"createdDate"`
	CreditCardToken string `json:"creditCardToken"`
	CustomerIdentifier string `json:"customerIdentifier"`
	ExternalRefID *string `json:"externalRefID,omitempty"`
	FeePercent float64 `json:"feePercent"`
	Id *string `json:"id,omitempty"`
	ReferenceDepositID string `json:"referenceDepositID"`
	Status string `json:"status"`
}

// CreditCardDepositLoadMatch is the typed request payload for CreditCardDeposit.LoadTyped.
type CreditCardDepositLoadMatch struct {
	Id string `json:"id"`
}

// CreditCardDepositCreateData is the typed request payload for CreditCardDeposit.CreateTyped.
type CreditCardDepositCreateData struct {
	AccountIdentifier string `json:"accountIdentifier"`
	AccountNumber string `json:"accountNumber"`
	Amount float64 `json:"amount"`
	AmountCharged float64 `json:"amountCharged"`
	CreatedDate string `json:"createdDate"`
	CreditCardToken string `json:"creditCardToken"`
	CustomerIdentifier string `json:"customerIdentifier"`
	ExternalRefID *string `json:"externalRefID,omitempty"`
	FeePercent float64 `json:"feePercent"`
	Id *string `json:"id,omitempty"`
	ReferenceDepositID string `json:"referenceDepositID"`
	Status string `json:"status"`
}

// CreditCardUnregister is the typed data model for the credit_card_unregister entity.
type CreditCardUnregister struct {
	AccountIdentifier string `json:"accountIdentifier"`
	CreatedDate string `json:"createdDate"`
	CreditCardToken string `json:"creditCardToken"`
	CustomerIdentifier string `json:"customerIdentifier"`
	Message string `json:"message"`
	Token string `json:"token"`
}

// CreditCardUnregisterCreateData is the typed request payload for CreditCardUnregister.CreateTyped.
type CreditCardUnregisterCreateData struct {
	AccountIdentifier string `json:"accountIdentifier"`
	CreatedDate string `json:"createdDate"`
	CreditCardToken string `json:"creditCardToken"`
	CustomerIdentifier string `json:"customerIdentifier"`
	Message string `json:"message"`
	Token string `json:"token"`
}

// Customer is the typed data model for the customer entity.
type Customer struct {
	Accounts []any `json:"accounts"`
	CreatedAt string `json:"createdAt"`
	CustomerIdentifier string `json:"customerIdentifier"`
	DisplayName string `json:"displayName"`
	Id *string `json:"id,omitempty"`
	Status string `json:"status"`
}

// CustomerLoadMatch is the typed request payload for Customer.LoadTyped.
type CustomerLoadMatch struct {
	Id string `json:"id"`
}

// CustomerListMatch is the typed request payload for Customer.ListTyped.
type CustomerListMatch struct {
	AccountDisplayName *string `json:"account_display_name,omitempty"`
	AccountIdentifier *string `json:"account_identifier,omitempty"`
	AccountMaxDateCreatedAt *string `json:"account_max_date_created_at,omitempty"`
	AccountMinDateCreatedAt *string `json:"account_min_date_created_at,omitempty"`
	AccountNumber *string `json:"account_number,omitempty"`
	AccountStatus *string `json:"account_status,omitempty"`
	CustomerMaxDateCreatedAt *string `json:"customer_max_date_created_at,omitempty"`
	CustomerMinDateCreatedAt *string `json:"customer_min_date_created_at,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	MaxResult *int `json:"max_result,omitempty"`
	NextCursor *string `json:"next_cursor,omitempty"`
	Paginate *bool `json:"paginate,omitempty"`
	PrevCursor *string `json:"prev_cursor,omitempty"`
	Status *string `json:"status,omitempty"`
}

// CustomerCreateData is the typed request payload for Customer.CreateTyped.
type CustomerCreateData struct {
	Accounts []any `json:"accounts"`
	CreatedAt string `json:"createdAt"`
	CustomerIdentifier string `json:"customerIdentifier"`
	DisplayName string `json:"displayName"`
	Id *string `json:"id,omitempty"`
	Status string `json:"status"`
}

// EmailTemplateListView is the typed data model for the email_template_list_view entity.
type EmailTemplateListView struct {
}

// EmailTemplateViewVerbose is the typed data model for the email_template_view_verbose entity.
type EmailTemplateViewVerbose struct {
	AccentColor string `json:"accentColor"`
	AccessControl *[]any `json:"accessControl,omitempty"`
	AccessControls *[]any `json:"accessControls,omitempty"`
	Closing string `json:"closing"`
	CustomerServiceMessage *string `json:"customerServiceMessage,omitempty"`
	Defaults *[]any `json:"defaults,omitempty"`
	Etid string `json:"etid"`
	FromName string `json:"fromName"`
	HeaderImage string `json:"headerImage"`
	HeaderImageAltText string `json:"headerImageAltText"`
	MessageBody string `json:"messageBody"`
	Name string `json:"name"`
	SmsMessageBody *string `json:"smsMessageBody,omitempty"`
	Subject string `json:"subject"`
}

// EmailTemplateViewVerboseLoadMatch is the typed request payload for EmailTemplateViewVerbose.LoadTyped.
type EmailTemplateViewVerboseLoadMatch struct {
	Etid string `json:"etid"`
}

// EmailTemplateViewVerboseListMatch is the typed request payload for EmailTemplateViewVerbose.ListTyped.
type EmailTemplateViewVerboseListMatch struct {
	ElementsPerBlock *int `json:"elements_per_block,omitempty"`
	Page *int `json:"page,omitempty"`
}

// EmailTemplateViewVerboseCreateData is the typed request payload for EmailTemplateViewVerbose.CreateTyped.
type EmailTemplateViewVerboseCreateData struct {
	AccentColor string `json:"accentColor"`
	AccessControl *[]any `json:"accessControl,omitempty"`
	AccessControls *[]any `json:"accessControls,omitempty"`
	Closing string `json:"closing"`
	CustomerServiceMessage *string `json:"customerServiceMessage,omitempty"`
	Defaults *[]any `json:"defaults,omitempty"`
	Etid string `json:"etid"`
	FromName string `json:"fromName"`
	HeaderImage string `json:"headerImage"`
	HeaderImageAltText string `json:"headerImageAltText"`
	MessageBody string `json:"messageBody"`
	Name string `json:"name"`
	SmsMessageBody *string `json:"smsMessageBody,omitempty"`
	Subject string `json:"subject"`
}

// EmailTemplateViewVerboseUpdateData is the typed request payload for EmailTemplateViewVerbose.UpdateTyped.
type EmailTemplateViewVerboseUpdateData struct {
	Etid string `json:"etid"`
	AccentColor *string `json:"accentColor,omitempty"`
	AccessControl *[]any `json:"accessControl,omitempty"`
	AccessControls *[]any `json:"accessControls,omitempty"`
	Closing *string `json:"closing,omitempty"`
	CustomerServiceMessage *string `json:"customerServiceMessage,omitempty"`
	Defaults *[]any `json:"defaults,omitempty"`
	FromName *string `json:"fromName,omitempty"`
	HeaderImage *string `json:"headerImage,omitempty"`
	HeaderImageAltText *string `json:"headerImageAltText,omitempty"`
	MessageBody *string `json:"messageBody,omitempty"`
	Name *string `json:"name,omitempty"`
	SmsMessageBody *string `json:"smsMessageBody,omitempty"`
	Subject *string `json:"subject,omitempty"`
}

// EmbeddableResponseDto is the typed data model for the embeddable_response_dto entity.
type EmbeddableResponseDto struct {
	Url *string `json:"url,omitempty"`
}

// EmbeddableResponseDtoLoadMatch is the typed request payload for EmbeddableResponseDto.LoadTyped.
type EmbeddableResponseDtoLoadMatch struct {
	ReferenceLineItemId string `json:"reference_line_item_id"`
}

// ExchangeRatesWithDisclaimer is the typed data model for the exchange_rates_with_disclaimer entity.
type ExchangeRatesWithDisclaimer struct {
	BaseCurrency string `json:"baseCurrency"`
	BaseFx string `json:"baseFx"`
	LastModifiedDate string `json:"lastModifiedDate"`
	RewardCurrency string `json:"rewardCurrency"`
}

// ExchangeRatesWithDisclaimerListMatch is the typed request payload for ExchangeRatesWithDisclaimer.ListTyped.
type ExchangeRatesWithDisclaimerListMatch struct {
	BaseCurrency *[]any `json:"base_currency,omitempty"`
	MaxResult *int `json:"max_result,omitempty"`
	NextCursor *string `json:"next_cursor,omitempty"`
	Paginate *bool `json:"paginate,omitempty"`
	PrevCursor *string `json:"prev_cursor,omitempty"`
	RewardCurrency *[]any `json:"reward_currency,omitempty"`
}

// LineItem is the typed data model for the line_item entity.
type LineItem struct {
	AccountIdentifier string `json:"accountIdentifier"`
	AccountNumber string `json:"accountNumber"`
	AmountCharged *map[string]any `json:"amountCharged,omitempty"`
	AmountIssued map[string]any `json:"amountIssued"`
	Campaign *string `json:"campaign,omitempty"`
	CanCancel *bool `json:"canCancel,omitempty"`
	CanFreeze *bool `json:"canFreeze,omitempty"`
	CustomerIdentifier string `json:"customerIdentifier"`
	DateIssued string `json:"dateIssued"`
	DeliveryMethod *string `json:"deliveryMethod,omitempty"`
	DeliveryStatus *string `json:"deliveryStatus,omitempty"`
	EmailStatus string `json:"emailStatus"`
	Etid string `json:"etid"`
	ExpirationDate string `json:"expirationDate"`
	ExternalReferenceLineItemID *string `json:"externalReferenceLineItemID,omitempty"`
	Id *string `json:"id,omitempty"`
	LineItemActionHistory *[]any `json:"lineItemActionHistory,omitempty"`
	LineItemActionReason *string `json:"lineItemActionReason,omitempty"`
	LineItemErrors *[]any `json:"lineItemErrors,omitempty"`
	LineNumber int `json:"lineNumber"`
	OrderNotes *string `json:"orderNotes,omitempty"`
	OrderSource string `json:"orderSource"`
	OrderStatus string `json:"orderStatus"`
	Ptid *string `json:"ptid,omitempty"`
	PurchaseOrderNumber *string `json:"purchaseOrderNumber,omitempty"`
	Quantity *int `json:"quantity,omitempty"`
	Recipient *map[string]any `json:"recipient,omitempty"`
	RedemptionHistory *[]any `json:"redemptionHistory,omitempty"`
	ReferenceLineItemID string `json:"referenceLineItemID"`
	ReferenceOrderID string `json:"referenceOrderID"`
	ReissuedFromReferenceLineItemId *string `json:"reissuedFromReferenceLineItemId,omitempty"`
	ReissuedToReferenceLineItemId *string `json:"reissuedToReferenceLineItemId,omitempty"`
	RemainingBalance *float64 `json:"remainingBalance,omitempty"`
	ResendHistory *[]any `json:"resendHistory,omitempty"`
	Reward map[string]any `json:"reward"`
	RewardName string `json:"rewardName"`
	RewardStatus *string `json:"rewardStatus,omitempty"`
	RewardViewHistory *[]any `json:"rewardViewHistory,omitempty"`
	Sender *map[string]any `json:"sender,omitempty"`
	Status string `json:"status"`
	Utid string `json:"utid"`
}

// LineItemLoadMatch is the typed request payload for LineItem.LoadTyped.
type LineItemLoadMatch struct {
	Id string `json:"id"`
}

// LineItemListMatch is the typed request payload for LineItem.ListTyped.
type LineItemListMatch struct {
	AccountIdentifier *string `json:"account_identifier,omitempty"`
	Campaign *string `json:"campaign,omitempty"`
	ColumnSortAscending *string `json:"column_sort_ascending,omitempty"`
	ColumnSortName *string `json:"column_sort_name,omitempty"`
	DeliveryMethod *string `json:"delivery_method,omitempty"`
	DeliveryStatus *string `json:"delivery_status,omitempty"`
	ElementsPerBlock *int `json:"elements_per_block,omitempty"`
	EmailStatus *string `json:"email_status,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	Etid *string `json:"etid,omitempty"`
	ExternalRefId *string `json:"external_ref_id,omitempty"`
	HasRemainingBalance *bool `json:"has_remaining_balance,omitempty"`
	MaxRemainingBalance *float64 `json:"max_remaining_balance,omitempty"`
	MinRemainingBalance *float64 `json:"min_remaining_balance,omitempty"`
	OrderNote *string `json:"order_note,omitempty"`
	OrderSource *string `json:"order_source,omitempty"`
	OrderStatus *string `json:"order_status,omitempty"`
	PageKey *[]any `json:"page_key,omitempty"`
	PagePrevious *bool `json:"page_previous,omitempty"`
	Ptid *string `json:"ptid,omitempty"`
	PurchaseOrderNumber *string `json:"purchase_order_number,omitempty"`
	RecipientCity *string `json:"recipient_city,omitempty"`
	RecipientCountry *string `json:"recipient_country,omitempty"`
	RecipientEmail *string `json:"recipient_email,omitempty"`
	RecipientFirstName *string `json:"recipient_first_name,omitempty"`
	RecipientLastName *string `json:"recipient_last_name,omitempty"`
	RecipientMobileNumber *string `json:"recipient_mobile_number,omitempty"`
	RecipientPostalCode *string `json:"recipient_postal_code,omitempty"`
	RecipientStateOrProvince *string `json:"recipient_state_or_province,omitempty"`
	RecipientStreetLine1 *string `json:"recipient_street_line1,omitempty"`
	RecipientStreetLine2 *string `json:"recipient_street_line2,omitempty"`
	ReferenceOrderId *string `json:"reference_order_id,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	Status *string `json:"status,omitempty"`
	Utid *string `json:"utid,omitempty"`
}

// LineItemCreateData is the typed request payload for LineItem.CreateTyped.
type LineItemCreateData struct {
	ReferenceLineItemId string `json:"reference_line_item_id"`
	AccountIdentifier string `json:"accountIdentifier"`
	AccountNumber string `json:"accountNumber"`
	AmountCharged *map[string]any `json:"amountCharged,omitempty"`
	AmountIssued map[string]any `json:"amountIssued"`
	Campaign *string `json:"campaign,omitempty"`
	CanCancel *bool `json:"canCancel,omitempty"`
	CanFreeze *bool `json:"canFreeze,omitempty"`
	CustomerIdentifier string `json:"customerIdentifier"`
	DateIssued string `json:"dateIssued"`
	DeliveryMethod *string `json:"deliveryMethod,omitempty"`
	DeliveryStatus *string `json:"deliveryStatus,omitempty"`
	EmailStatus string `json:"emailStatus"`
	Etid string `json:"etid"`
	ExpirationDate string `json:"expirationDate"`
	ExternalReferenceLineItemID *string `json:"externalReferenceLineItemID,omitempty"`
	Id *string `json:"id,omitempty"`
	LineItemActionHistory *[]any `json:"lineItemActionHistory,omitempty"`
	LineItemActionReason *string `json:"lineItemActionReason,omitempty"`
	LineItemErrors *[]any `json:"lineItemErrors,omitempty"`
	LineNumber int `json:"lineNumber"`
	OrderNotes *string `json:"orderNotes,omitempty"`
	OrderSource string `json:"orderSource"`
	OrderStatus string `json:"orderStatus"`
	Ptid *string `json:"ptid,omitempty"`
	PurchaseOrderNumber *string `json:"purchaseOrderNumber,omitempty"`
	Quantity *int `json:"quantity,omitempty"`
	Recipient *map[string]any `json:"recipient,omitempty"`
	RedemptionHistory *[]any `json:"redemptionHistory,omitempty"`
	ReferenceLineItemID string `json:"referenceLineItemID"`
	ReferenceOrderID string `json:"referenceOrderID"`
	ReissuedFromReferenceLineItemId *string `json:"reissuedFromReferenceLineItemId,omitempty"`
	ReissuedToReferenceLineItemId *string `json:"reissuedToReferenceLineItemId,omitempty"`
	RemainingBalance *float64 `json:"remainingBalance,omitempty"`
	ResendHistory *[]any `json:"resendHistory,omitempty"`
	Reward map[string]any `json:"reward"`
	RewardName string `json:"rewardName"`
	RewardStatus *string `json:"rewardStatus,omitempty"`
	RewardViewHistory *[]any `json:"rewardViewHistory,omitempty"`
	Sender *map[string]any `json:"sender,omitempty"`
	Status string `json:"status"`
	Utid string `json:"utid"`
}

// LowBalanceAlertListView is the typed data model for the low_balance_alert_list_view entity.
type LowBalanceAlertListView struct {
	AccountIdentifier *string `json:"accountIdentifier,omitempty"`
	BalanceAlertDisplayName *string `json:"balanceAlertDisplayName,omitempty"`
	BalanceAlertID *string `json:"balanceAlertID,omitempty"`
	BalanceAlertNotification *[]any `json:"balanceAlertNotification,omitempty"`
	BalanceAlertThreshold *float64 `json:"balanceAlertThreshold,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CustomerIdentifier *string `json:"customerIdentifier,omitempty"`
}

// LowBalanceAlertListViewListMatch is the typed request payload for LowBalanceAlertListView.ListTyped.
type LowBalanceAlertListViewListMatch struct {
	AccountIdentifier string `json:"account_identifier"`
	CustomerIdentifier string `json:"customer_identifier"`
	BalanceAlertDisplayName *string `json:"balance_alert_display_name,omitempty"`
	BalanceAlertNotification *[]any `json:"balance_alert_notification,omitempty"`
	BalanceAlertThreshold *float64 `json:"balance_alert_threshold,omitempty"`
	ElementsPerBlock *int `json:"elements_per_block,omitempty"`
	Page *int `json:"page,omitempty"`
}

// LowBalanceAlertView is the typed data model for the low_balance_alert_view entity.
type LowBalanceAlertView struct {
	AccountIdentifier *string `json:"accountIdentifier,omitempty"`
	BalanceAlertDisplayName *string `json:"balanceAlertDisplayName,omitempty"`
	BalanceAlertID *string `json:"balanceAlertID,omitempty"`
	BalanceAlertNotification *[]any `json:"balanceAlertNotification,omitempty"`
	BalanceAlertThreshold *float64 `json:"balanceAlertThreshold,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CustomerIdentifier *string `json:"customerIdentifier,omitempty"`
}

// LowBalanceAlertViewLoadMatch is the typed request payload for LowBalanceAlertView.LoadTyped.
type LowBalanceAlertViewLoadMatch struct {
	AccountId string `json:"account_id"`
	BalanceAlertId string `json:"balance_alert_id"`
	CustomerIdentifier string `json:"customer_identifier"`
}

// LowBalanceAlertViewCreateData is the typed request payload for LowBalanceAlertView.CreateTyped.
type LowBalanceAlertViewCreateData struct {
	AccountIdentifier string `json:"account_identifier"`
	CustomerIdentifier string `json:"customer_identifier"`
	AccountIdentifier2 *string `json:"accountIdentifier,omitempty"`
	BalanceAlertDisplayName *string `json:"balanceAlertDisplayName,omitempty"`
	BalanceAlertID *string `json:"balanceAlertID,omitempty"`
	BalanceAlertNotification *[]any `json:"balanceAlertNotification,omitempty"`
	BalanceAlertThreshold *float64 `json:"balanceAlertThreshold,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CustomerIdentifier2 *string `json:"customerIdentifier,omitempty"`
}

// LowBalanceAlertViewUpdateData is the typed request payload for LowBalanceAlertView.UpdateTyped.
type LowBalanceAlertViewUpdateData struct {
	AccountId string `json:"account_id"`
	BalanceAlertId string `json:"balance_alert_id"`
	CustomerIdentifier string `json:"customer_identifier"`
	AccountIdentifier *string `json:"accountIdentifier,omitempty"`
	BalanceAlertDisplayName *string `json:"balanceAlertDisplayName,omitempty"`
	BalanceAlertID *string `json:"balanceAlertID,omitempty"`
	BalanceAlertNotification *[]any `json:"balanceAlertNotification,omitempty"`
	BalanceAlertThreshold *float64 `json:"balanceAlertThreshold,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CustomerIdentifier2 *string `json:"customerIdentifier,omitempty"`
}

// MobileCountry is the typed data model for the mobile_country entity.
type MobileCountry struct {
	CountryCode *string `json:"countryCode,omitempty"`
	CountryName *string `json:"countryName,omitempty"`
	IsoCode *string `json:"isoCode,omitempty"`
	LanguageCode *string `json:"languageCode,omitempty"`
}

// MobileCountryLoadMatch is the typed request payload for MobileCountry.LoadTyped.
type MobileCountryLoadMatch struct {
	CountryCode *string `json:"countryCode,omitempty"`
	CountryName *string `json:"countryName,omitempty"`
	IsoCode *string `json:"isoCode,omitempty"`
	LanguageCode *string `json:"languageCode,omitempty"`
}

// N14Webhook is the typed data model for the n14_webhook entity.
type N14Webhook struct {
	Categories *[]any `json:"categories,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	EventTypes *[]any `json:"eventTypes,omitempty"`
	ExpiresAt *string `json:"expiresAt,omitempty"`
	Headers *[]any `json:"headers,omitempty"`
	HmacSharedSecretKey *string `json:"hmacSharedSecretKey,omitempty"`
	Id *string `json:"id,omitempty"`
	PayloadVerificationMethod *string `json:"payloadVerificationMethod,omitempty"`
	SigningCertificate *string `json:"signingCertificate,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Url string `json:"url"`
	WebhookId *string `json:"webhookId,omitempty"`
}

// N14WebhookLoadMatch is the typed request payload for N14Webhook.LoadTyped.
type N14WebhookLoadMatch struct {
	WebhookId string `json:"webhook_id"`
	FromRevision *int `json:"from_revision,omitempty"`
	MaxResult *int `json:"max_result,omitempty"`
	NextCursor *string `json:"next_cursor,omitempty"`
	PrevCursor *string `json:"prev_cursor,omitempty"`
	ToRevision *int `json:"to_revision,omitempty"`
}

// N14WebhookListMatch is the typed request payload for N14Webhook.ListTyped.
type N14WebhookListMatch struct {
	Category *[]any `json:"category,omitempty"`
	CreatedAtFrom *string `json:"created_at_from,omitempty"`
	CreatedAtTo *string `json:"created_at_to,omitempty"`
	EventType *[]any `json:"event_type,omitempty"`
	ExpiresAtFrom *string `json:"expires_at_from,omitempty"`
	ExpiresAtTo *string `json:"expires_at_to,omitempty"`
	HeaderName *string `json:"header_name,omitempty"`
	HeaderValue *string `json:"header_value,omitempty"`
	MaxResult *int `json:"max_result,omitempty"`
	NextCursor *string `json:"next_cursor,omitempty"`
	PrevCursor *string `json:"prev_cursor,omitempty"`
	Url *string `json:"url,omitempty"`
}

// N14WebhookCreateData is the typed request payload for N14Webhook.CreateTyped.
type N14WebhookCreateData struct {
	TestName string `json:"test_name"`
	WebhookId string `json:"webhook_id"`
	Categories *[]any `json:"categories,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	EventTypes *[]any `json:"eventTypes,omitempty"`
	ExpiresAt *string `json:"expiresAt,omitempty"`
	Headers *[]any `json:"headers,omitempty"`
	HmacSharedSecretKey *string `json:"hmacSharedSecretKey,omitempty"`
	Id *string `json:"id,omitempty"`
	PayloadVerificationMethod *string `json:"payloadVerificationMethod,omitempty"`
	SigningCertificate *string `json:"signingCertificate,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Url string `json:"url"`
	WebhookId2 *string `json:"webhookId,omitempty"`
}

// N14WebhookRemoveMatch is the typed request payload for N14Webhook.RemoveTyped.
type N14WebhookRemoveMatch struct {
	Id string `json:"id"`
}

// N1Customer is the typed data model for the n1_customer entity.
type N1Customer struct {
}

// N1CustomerLoadMatch is the typed request payload for N1Customer.LoadTyped.
type N1CustomerLoadMatch struct {
	CustomerIdentifier string `json:"customer_identifier"`
	AccountNumber *string `json:"account_number,omitempty"`
	ContactEmail *string `json:"contact_email,omitempty"`
	CurrencyCode *[]any `json:"currency_code,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	FundingNotificationEmail *[]any `json:"funding_notification_email,omitempty"`
	MaxBalance *float64 `json:"max_balance,omitempty"`
	MaxDateCreatedAt *string `json:"max_date_created_at,omitempty"`
	MaxResult *int `json:"max_result,omitempty"`
	MinBalance *float64 `json:"min_balance,omitempty"`
	MinDateCreatedAt *string `json:"min_date_created_at,omitempty"`
	NextCursor *string `json:"next_cursor,omitempty"`
	Paginate *bool `json:"paginate,omitempty"`
	PrevCursor *string `json:"prev_cursor,omitempty"`
	Status *string `json:"status,omitempty"`
}

// N2Account is the typed data model for the n2_account entity.
type N2Account struct {
}

// N3Fund is the typed data model for the n3_fund entity.
type N3Fund struct {
}

// N8LineItem is the typed data model for the n8_line_item entity.
type N8LineItem struct {
	Campaign *string `json:"campaign,omitempty"`
	Id *string `json:"id,omitempty"`
	OrderNotes *string `json:"orderNotes,omitempty"`
	PurchaseOrderNumber *string `json:"purchaseOrderNumber,omitempty"`
}

// N8LineItemUpdateData is the typed request payload for N8LineItem.UpdateTyped.
type N8LineItemUpdateData struct {
	Id string `json:"id"`
	Campaign *string `json:"campaign,omitempty"`
	OrderNotes *string `json:"orderNotes,omitempty"`
	PurchaseOrderNumber *string `json:"purchaseOrderNumber,omitempty"`
}

// N9DigitalTemplate is the typed data model for the n9_digital_template entity.
type N9DigitalTemplate struct {
	Id *string `json:"id,omitempty"`
}

// N9DigitalTemplateRemoveMatch is the typed request payload for N9DigitalTemplate.RemoveTyped.
type N9DigitalTemplateRemoveMatch struct {
	Id string `json:"id"`
}

// Order is the typed data model for the order entity.
type Order struct {
	AccountIdentifier string `json:"accountIdentifier"`
	AccountNumber string `json:"accountNumber"`
	Amount float64 `json:"amount"`
	AmountCharged map[string]any `json:"amountCharged"`
	AsyncOrderEntity *map[string]any `json:"asyncOrderEntity,omitempty"`
	Campaign string `json:"campaign"`
	CreatedAt string `json:"createdAt"`
	CustomFields *map[string]any `json:"customFields,omitempty"`
	CustomerIdentifier string `json:"customerIdentifier"`
	DeliveryMethod *string `json:"deliveryMethod,omitempty"`
	Denomination *map[string]any `json:"denomination,omitempty"`
	EmailSubject string `json:"emailSubject"`
	Etid string `json:"etid"`
	ExpirationDate *string `json:"expirationDate,omitempty"`
	ExternalRefID *string `json:"externalRefID,omitempty"`
	Id *string `json:"id,omitempty"`
	LineItemStatus *string `json:"lineItemStatus,omitempty"`
	Message string `json:"message"`
	Notes *string `json:"notes,omitempty"`
	OrderClientSource *string `json:"orderClientSource,omitempty"`
	OrderExternalRefIdDupe *bool `json:"orderExternalRefIdDupe,omitempty"`
	OrderStatus *string `json:"orderStatus,omitempty"`
	Ptid *string `json:"ptid,omitempty"`
	PurchaseOrderNumber *string `json:"purchaseOrderNumber,omitempty"`
	Recipient *map[string]any `json:"recipient,omitempty"`
	RedemptionInstructions *string `json:"redemptionInstructions,omitempty"`
	ReferenceLineItemID *string `json:"referenceLineItemID,omitempty"`
	ReferenceOrderID string `json:"referenceOrderID"`
	Reward map[string]any `json:"reward"`
	RewardName string `json:"rewardName"`
	SendEmail *bool `json:"sendEmail,omitempty"`
	Sender *map[string]any `json:"sender,omitempty"`
	Status string `json:"status"`
	Utid string `json:"utid"`
}

// OrderLoadMatch is the typed request payload for Order.LoadTyped.
type OrderLoadMatch struct {
	Id string `json:"id"`
}

// OrderListMatch is the typed request payload for Order.ListTyped.
type OrderListMatch struct {
	AccountIdentifier *string `json:"account_identifier,omitempty"`
	Campaign *string `json:"campaign,omitempty"`
	CurrencyCode *string `json:"currency_code,omitempty"`
	CustomerIdentifier *string `json:"customer_identifier,omitempty"`
	DeliveryMethod *string `json:"delivery_method,omitempty"`
	ElementsPerBlock *int `json:"elements_per_block,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	ExternalRefId *string `json:"external_ref_id,omitempty"`
	LineItemNote *string `json:"line_item_note,omitempty"`
	LineItemStatus *string `json:"line_item_status,omitempty"`
	MaxAmount *float64 `json:"max_amount,omitempty"`
	MinAmount *float64 `json:"min_amount,omitempty"`
	Note *string `json:"note,omitempty"`
	OrderStatus *string `json:"order_status,omitempty"`
	Page *int `json:"page,omitempty"`
	Ptid *string `json:"ptid,omitempty"`
	PurchaseOrderNumber *string `json:"purchase_order_number,omitempty"`
	RecipientEmail *string `json:"recipient_email,omitempty"`
	RecipientFirstName *string `json:"recipient_first_name,omitempty"`
	RecipientLastName *string `json:"recipient_last_name,omitempty"`
	RecipientMobileNumber *string `json:"recipient_mobile_number,omitempty"`
	RewardName *string `json:"reward_name,omitempty"`
	SendEmail *bool `json:"send_email,omitempty"`
	SenderEmail *string `json:"sender_email,omitempty"`
	SenderFirstName *string `json:"sender_first_name,omitempty"`
	SenderLastName *string `json:"sender_last_name,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	Status *string `json:"status,omitempty"`
	Utid *string `json:"utid,omitempty"`
}

// OrderCreateData is the typed request payload for Order.CreateTyped.
type OrderCreateData struct {
	AccountIdentifier string `json:"accountIdentifier"`
	AccountNumber string `json:"accountNumber"`
	Amount float64 `json:"amount"`
	AmountCharged map[string]any `json:"amountCharged"`
	AsyncOrderEntity *map[string]any `json:"asyncOrderEntity,omitempty"`
	Campaign string `json:"campaign"`
	CreatedAt string `json:"createdAt"`
	CustomFields *map[string]any `json:"customFields,omitempty"`
	CustomerIdentifier string `json:"customerIdentifier"`
	DeliveryMethod *string `json:"deliveryMethod,omitempty"`
	Denomination *map[string]any `json:"denomination,omitempty"`
	EmailSubject string `json:"emailSubject"`
	Etid string `json:"etid"`
	ExpirationDate *string `json:"expirationDate,omitempty"`
	ExternalRefID *string `json:"externalRefID,omitempty"`
	Id *string `json:"id,omitempty"`
	LineItemStatus *string `json:"lineItemStatus,omitempty"`
	Message string `json:"message"`
	Notes *string `json:"notes,omitempty"`
	OrderClientSource *string `json:"orderClientSource,omitempty"`
	OrderExternalRefIdDupe *bool `json:"orderExternalRefIdDupe,omitempty"`
	OrderStatus *string `json:"orderStatus,omitempty"`
	Ptid *string `json:"ptid,omitempty"`
	PurchaseOrderNumber *string `json:"purchaseOrderNumber,omitempty"`
	Recipient *map[string]any `json:"recipient,omitempty"`
	RedemptionInstructions *string `json:"redemptionInstructions,omitempty"`
	ReferenceLineItemID *string `json:"referenceLineItemID,omitempty"`
	ReferenceOrderID string `json:"referenceOrderID"`
	Reward map[string]any `json:"reward"`
	RewardName string `json:"rewardName"`
	SendEmail *bool `json:"sendEmail,omitempty"`
	Sender *map[string]any `json:"sender,omitempty"`
	Status string `json:"status"`
	Utid string `json:"utid"`
}

// OrderViewSummary is the typed data model for the order_view_summary entity.
type OrderViewSummary struct {
	Amount *float64 `json:"amount,omitempty"`
	DeliveryMethod *string `json:"deliveryMethod,omitempty"`
	Notes *string `json:"notes,omitempty"`
	OtherReason *string `json:"otherReason,omitempty"`
	ReasonCode string `json:"reasonCode"`
	Recipient *map[string]any `json:"recipient,omitempty"`
}

// OrderViewSummaryCreateData is the typed request payload for OrderViewSummary.CreateTyped.
type OrderViewSummaryCreateData struct {
	ReferenceLineItemId string `json:"reference_line_item_id"`
	Amount *float64 `json:"amount,omitempty"`
	DeliveryMethod *string `json:"deliveryMethod,omitempty"`
	Notes *string `json:"notes,omitempty"`
	OtherReason *string `json:"otherReason,omitempty"`
	ReasonCode string `json:"reasonCode"`
	Recipient *map[string]any `json:"recipient,omitempty"`
}

// PrepaidCardInfo is the typed data model for the prepaid_card_info entity.
type PrepaidCardInfo struct {
	Balance *map[string]any `json:"balance,omitempty"`
	Card *map[string]any `json:"card,omitempty"`
	Comments *[]any `json:"comments,omitempty"`
	Registration *map[string]any `json:"registration,omitempty"`
}

// PrepaidCardInfoLoadMatch is the typed request payload for PrepaidCardInfo.LoadTyped.
type PrepaidCardInfoLoadMatch struct {
	ReferenceLineItemId string `json:"reference_line_item_id"`
}

// PrepaidCardTransaction is the typed data model for the prepaid_card_transaction entity.
type PrepaidCardTransaction struct {
	Journal *[]any `json:"journal,omitempty"`
	Page map[string]any `json:"page"`
}

// PrepaidCardTransactionLoadMatch is the typed request payload for PrepaidCardTransaction.LoadTyped.
type PrepaidCardTransactionLoadMatch struct {
	ReferenceLineItemId string `json:"reference_line_item_id"`
	Page *int `json:"page,omitempty"`
}

// ReissueCard is the typed data model for the reissue_card entity.
type ReissueCard struct {
	CommentText *string `json:"commentText,omitempty"`
	Id *string `json:"id,omitempty"`
	Reason string `json:"reason"`
	Status *string `json:"status,omitempty"`
	UpdatedBy string `json:"updatedBy"`
}

// ReissueCardCreateData is the typed request payload for ReissueCard.CreateTyped.
type ReissueCardCreateData struct {
	Id string `json:"id"`
	CommentText *string `json:"commentText,omitempty"`
	Reason string `json:"reason"`
	Status *string `json:"status,omitempty"`
	UpdatedBy string `json:"updatedBy"`
}

// ReplacementReason is the typed data model for the replacement_reason entity.
type ReplacementReason struct {
	ReplacementReasons *[]any `json:"replacementReasons,omitempty"`
}

// ReplacementReasonListMatch is the typed request payload for ReplacementReason.ListTyped.
type ReplacementReasonListMatch struct {
	ReplacementReasons *[]any `json:"replacementReasons,omitempty"`
}

// Resend is the typed data model for the resend entity.
type Resend struct {
	NewDeliveryMethod *string `json:"newDeliveryMethod,omitempty"`
	NewEmail *string `json:"newEmail,omitempty"`
	NewEtid *string `json:"newEtid,omitempty"`
	NewMobile *string `json:"newMobile,omitempty"`
	NewMobileNumber *string `json:"newMobileNumber,omitempty"`
	OtherReason *string `json:"otherReason,omitempty"`
	ReasonCode *string `json:"reasonCode,omitempty"`
}

// ResendCreateData is the typed request payload for Resend.CreateTyped.
type ResendCreateData struct {
	LineItemId string `json:"line_item_id"`
	NewDeliveryMethod *string `json:"newDeliveryMethod,omitempty"`
	NewEmail *string `json:"newEmail,omitempty"`
	NewEtid *string `json:"newEtid,omitempty"`
	NewMobile *string `json:"newMobile,omitempty"`
	NewMobileNumber *string `json:"newMobileNumber,omitempty"`
	OtherReason *string `json:"otherReason,omitempty"`
	ReasonCode *string `json:"reasonCode,omitempty"`
}

// RewardReasonsMap is the typed data model for the reward_reasons_map entity.
type RewardReasonsMap struct {
	CANCEL *map[string]any `json:"CANCEL,omitempty"`
	CANCELANDREISSUE *map[string]any `json:"CANCEL_AND_REISSUE,omitempty"`
	FREEZE *map[string]any `json:"FREEZE,omitempty"`
	UNFREEZE *map[string]any `json:"UNFREEZE,omitempty"`
}

// RewardReasonsMapLoadMatch is the typed request payload for RewardReasonsMap.LoadTyped.
type RewardReasonsMapLoadMatch struct {
	CANCEL *map[string]any `json:"CANCEL,omitempty"`
	CANCELANDREISSUE *map[string]any `json:"CANCEL_AND_REISSUE,omitempty"`
	FREEZE *map[string]any `json:"FREEZE,omitempty"`
	UNFREEZE *map[string]any `json:"UNFREEZE,omitempty"`
}

// TransferFund is the typed data model for the transfer_fund entity.
type TransferFund struct {
	Amount float64 `json:"amount"`
	ExternalRefID *string `json:"externalRefID,omitempty"`
	TransferDate *string `json:"transferDate,omitempty"`
	TransferFrom *map[string]any `json:"transferFrom,omitempty"`
	TransferNotes *string `json:"transferNotes,omitempty"`
	TransferTo *map[string]any `json:"transferTo,omitempty"`
	TransferredAmount *float64 `json:"transferredAmount,omitempty"`
}

// TransferFundCreateData is the typed request payload for TransferFund.CreateTyped.
type TransferFundCreateData struct {
	Amount float64 `json:"amount"`
	ExternalRefID *string `json:"externalRefID,omitempty"`
	TransferDate *string `json:"transferDate,omitempty"`
	TransferFrom *map[string]any `json:"transferFrom,omitempty"`
	TransferNotes *string `json:"transferNotes,omitempty"`
	TransferTo *map[string]any `json:"transferTo,omitempty"`
	TransferredAmount *float64 `json:"transferredAmount,omitempty"`
}

// UpdateAccount is the typed data model for the update_account entity.
type UpdateAccount struct {
	Id *string `json:"id,omitempty"`
	Registration map[string]any `json:"registration"`
	Status *string `json:"status,omitempty"`
	UpdatedBy *string `json:"updatedBy,omitempty"`
}

// UpdateAccountCreateData is the typed request payload for UpdateAccount.CreateTyped.
type UpdateAccountCreateData struct {
	Id string `json:"id"`
	Registration map[string]any `json:"registration"`
	Status *string `json:"status,omitempty"`
	UpdatedBy *string `json:"updatedBy,omitempty"`
}

// UpdateWebhookSubscriptionResponseView is the typed data model for the update_webhook_subscription_response_view entity.
type UpdateWebhookSubscriptionResponseView struct {
	Categories *[]any `json:"categories,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	EventTypes *[]any `json:"eventTypes,omitempty"`
	ExpiresAt *string `json:"expiresAt,omitempty"`
	Headers *[]any `json:"headers,omitempty"`
	HmacSharedSecretKey *string `json:"hmacSharedSecretKey,omitempty"`
	PayloadVerificationMethod *string `json:"payloadVerificationMethod,omitempty"`
	SigningCertificate *string `json:"signingCertificate,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
	WebhookId *string `json:"webhookId,omitempty"`
}

// UpdateWebhookSubscriptionResponseViewUpdateData is the typed request payload for UpdateWebhookSubscriptionResponseView.UpdateTyped.
type UpdateWebhookSubscriptionResponseViewUpdateData struct {
	WebhookId string `json:"webhook_id"`
	Categories *[]any `json:"categories,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	EventTypes *[]any `json:"eventTypes,omitempty"`
	ExpiresAt *string `json:"expiresAt,omitempty"`
	Headers *[]any `json:"headers,omitempty"`
	HmacSharedSecretKey *string `json:"hmacSharedSecretKey,omitempty"`
	PayloadVerificationMethod *string `json:"payloadVerificationMethod,omitempty"`
	SigningCertificate *string `json:"signingCertificate,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
	WebhookId2 *string `json:"webhookId,omitempty"`
}

// Webhook is the typed data model for the webhook entity.
type Webhook struct {
	Categories *[]any `json:"categories,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	EventTypes *[]any `json:"eventTypes,omitempty"`
	ExpiresAt *string `json:"expiresAt,omitempty"`
	Headers *[]any `json:"headers,omitempty"`
	HmacSharedSecretKey *string `json:"hmacSharedSecretKey,omitempty"`
	Id *string `json:"id,omitempty"`
	PayloadVerificationMethod *string `json:"payloadVerificationMethod,omitempty"`
	SigningCertificate *string `json:"signingCertificate,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
	WebhookId *string `json:"webhookId,omitempty"`
}

// WebhookLoadMatch is the typed request payload for Webhook.LoadTyped.
type WebhookLoadMatch struct {
	Id string `json:"id"`
}

// WebhookCreateData is the typed request payload for Webhook.CreateTyped.
type WebhookCreateData struct {
	Id string `json:"id"`
	FromRevision *int `json:"from_revision,omitempty"`
	ToRevision *int `json:"to_revision,omitempty"`
	Categories *[]any `json:"categories,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	EventTypes *[]any `json:"eventTypes,omitempty"`
	ExpiresAt *string `json:"expiresAt,omitempty"`
	Headers *[]any `json:"headers,omitempty"`
	HmacSharedSecretKey *string `json:"hmacSharedSecretKey,omitempty"`
	PayloadVerificationMethod *string `json:"payloadVerificationMethod,omitempty"`
	SigningCertificate *string `json:"signingCertificate,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	Url *string `json:"url,omitempty"`
	WebhookId *string `json:"webhookId,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
