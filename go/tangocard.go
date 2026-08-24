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
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCatalogEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewCatalogEntity(client, entopts)
	}
	core.NewCustomerEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewCustomerEntity(client, entopts)
	}
	core.NewOrderEntityFunc = func(client *core.TangocardSDK, entopts map[string]any) core.TangocardEntity {
		return entity.NewOrderEntity(client, entopts)
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
var NewTestFeature = feature.NewTestFeature
