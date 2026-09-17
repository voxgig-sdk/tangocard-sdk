package voxgigtangocardsdk

import (
	"github.com/voxgig-sdk/tangocard-sdk/go/core"
	"github.com/voxgig-sdk/tangocard-sdk/go/entity"
	"github.com/voxgig-sdk/tangocard-sdk/go/feature"
	_ "github.com/voxgig-sdk/tangocard-sdk/go/utility"
)

// Type aliases preserve external API.
type TangocardSDK = core.TangocardSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type TangocardEntity = core.TangocardEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type TangocardError = core.TangocardError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewAccountEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewAccountEntity(client, entopts)
	}
	core.NewAddCommentEscalationEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewAddCommentEscalationEntity(client, entopts)
	}
	core.NewAllEventTypeEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewAllEventTypeEntity(client, entopts)
	}
	core.NewAsyncOrderEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewAsyncOrderEntity(client, entopts)
	}
	core.NewAsyncOrderDetailViewEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewAsyncOrderDetailViewEntity(client, entopts)
	}
	core.NewAsyncOrderLineItemsViewEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewAsyncOrderLineItemsViewEntity(client, entopts)
	}
	core.NewAsyncReasonCodesViewEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewAsyncReasonCodesViewEntity(client, entopts)
	}
	core.NewAsyncUpdateLineItemViewEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewAsyncUpdateLineItemViewEntity(client, entopts)
	}
	core.NewBalanceAlertViewEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewBalanceAlertViewEntity(client, entopts)
	}
	core.NewBrandCategoriesViewEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewBrandCategoriesViewEntity(client, entopts)
	}
	core.NewCatalogEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewCatalogEntity(client, entopts)
	}
	core.NewChoiceProductEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewChoiceProductEntity(client, entopts)
	}
	core.NewCountryViewSummaryEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewCountryViewSummaryEntity(client, entopts)
	}
	core.NewCreateAccountCriterionEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewCreateAccountCriterionEntity(client, entopts)
	}
	core.NewCreateCustomerCriterionEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewCreateCustomerCriterionEntity(client, entopts)
	}
	core.NewCredentialTypeViewEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewCredentialTypeViewEntity(client, entopts)
	}
	core.NewCreditCardEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewCreditCardEntity(client, entopts)
	}
	core.NewCreditCardDepositEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewCreditCardDepositEntity(client, entopts)
	}
	core.NewCreditCardUnregisterEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewCreditCardUnregisterEntity(client, entopts)
	}
	core.NewCustomerEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewCustomerEntity(client, entopts)
	}
	core.NewEmailTemplateListViewEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewEmailTemplateListViewEntity(client, entopts)
	}
	core.NewEmailTemplateViewVerboseEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewEmailTemplateViewVerboseEntity(client, entopts)
	}
	core.NewEmbeddableResponseDtoEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewEmbeddableResponseDtoEntity(client, entopts)
	}
	core.NewExchangeRatesWithDisclaimerEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewExchangeRatesWithDisclaimerEntity(client, entopts)
	}
	core.NewLineItemEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewLineItemEntity(client, entopts)
	}
	core.NewLowBalanceAlertListViewEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewLowBalanceAlertListViewEntity(client, entopts)
	}
	core.NewLowBalanceAlertViewEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewLowBalanceAlertViewEntity(client, entopts)
	}
	core.NewMobileCountryEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewMobileCountryEntity(client, entopts)
	}
	core.NewN14WebhookEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewN14WebhookEntity(client, entopts)
	}
	core.NewN1CustomerEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewN1CustomerEntity(client, entopts)
	}
	core.NewN2AccountEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewN2AccountEntity(client, entopts)
	}
	core.NewN3FundEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewN3FundEntity(client, entopts)
	}
	core.NewN8LineItemEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewN8LineItemEntity(client, entopts)
	}
	core.NewN9DigitalTemplateEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewN9DigitalTemplateEntity(client, entopts)
	}
	core.NewOrderEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewOrderEntity(client, entopts)
	}
	core.NewOrderViewSummaryEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewOrderViewSummaryEntity(client, entopts)
	}
	core.NewPrepaidCardInfoEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewPrepaidCardInfoEntity(client, entopts)
	}
	core.NewPrepaidCardTransactionEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewPrepaidCardTransactionEntity(client, entopts)
	}
	core.NewReissueCardEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewReissueCardEntity(client, entopts)
	}
	core.NewReplacementReasonEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewReplacementReasonEntity(client, entopts)
	}
	core.NewResendEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewResendEntity(client, entopts)
	}
	core.NewRewardReasonsMapEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewRewardReasonsMapEntity(client, entopts)
	}
	core.NewTransferFundEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewTransferFundEntity(client, entopts)
	}
	core.NewUpdateAccountEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewUpdateAccountEntity(client, entopts)
	}
	core.NewUpdateWebhookSubscriptionResponseViewEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewUpdateWebhookSubscriptionResponseViewEntity(client, entopts)
	}
	core.NewWebhookEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewWebhookEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewTangocardSDK = core.NewTangocardSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewTangocardSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *TangocardSDK  { return NewTangocardSDK(nil) }
func Test() *TangocardSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
