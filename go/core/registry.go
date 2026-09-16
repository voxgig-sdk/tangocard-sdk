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

var NewCatalogEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewCustomerEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewOrderEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

