package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewDebugFeatureFunc func() Feature

var NewIdempotencyFeatureFunc func() Feature

var NewMetricsFeatureFunc func() Feature

var NewPagingFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewAccountEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewAddCommentEscalationEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewAllEventTypeEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewAsyncOrderEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewAsyncOrderDetailViewEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewAsyncOrderLineItemsViewEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewAsyncReasonCodesViewEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewAsyncUpdateLineItemViewEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewBalanceAlertViewEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewBrandCategoriesViewEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewCatalogEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewChoiceProductEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewCountryViewSummaryEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewCreateAccountCriterionEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewCreateCustomerCriterionEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewCredentialTypeViewEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewCreditCardEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewCreditCardDepositEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewCreditCardUnregisterEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewCustomerEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewEmailTemplateListViewEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewEmailTemplateViewVerboseEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewEmbeddableResponseDtoEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewExchangeRatesWithDisclaimerEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewLineItemEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewLowBalanceAlertListViewEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewLowBalanceAlertViewEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewMobileCountryEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewN14WebhookEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewN1CustomerEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewN2AccountEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewN3FundEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewN8LineItemEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewN9DigitalTemplateEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewOrderEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewOrderViewSummaryEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewPrepaidCardInfoEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewPrepaidCardTransactionEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewReissueCardEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewReplacementReasonEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewResendEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewRewardReasonsMapEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewTransferFundEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewUpdateAccountEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewUpdateWebhookSubscriptionResponseViewEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewWebhookEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

