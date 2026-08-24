package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCatalogEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewCustomerEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

var NewOrderEntityFunc func(client *TangocardSDK, entopts map[string]any) TangocardEntity

