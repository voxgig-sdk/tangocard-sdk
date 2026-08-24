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

// Catalog is the typed data model for the catalog entity.
type Catalog struct {
	BrandKey *string `json:"brandKey,omitempty"`
	BrandName *string `json:"brandName,omitempty"`
	ImageUrls *[]any `json:"imageUrls,omitempty"`
	Items *[]any `json:"items,omitempty"`
}

// CatalogListMatch is the typed request payload for Catalog.ListTyped.
type CatalogListMatch struct {
	BrandKey *string `json:"brandKey,omitempty"`
	BrandName *string `json:"brandName,omitempty"`
	ImageUrls *[]any `json:"imageUrls,omitempty"`
	Items *[]any `json:"items,omitempty"`
}

// Customer is the typed data model for the customer entity.
type Customer struct {
	CustomerIdentifier *string `json:"customerIdentifier,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Email *string `json:"email,omitempty"`
}

// CustomerListMatch is the typed request payload for Customer.ListTyped.
type CustomerListMatch struct {
	CustomerIdentifier *string `json:"customerIdentifier,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Email *string `json:"email,omitempty"`
}

// Order is the typed data model for the order entity.
type Order struct {
	AccountIdentifier string `json:"accountIdentifier"`
	Amount *float64 `json:"amount,omitempty"`
	Campaign *string `json:"campaign,omitempty"`
	Created *string `json:"created,omitempty"`
	CustomerIdentifier string `json:"customerIdentifier"`
	Recipient *map[string]any `json:"recipient,omitempty"`
	ReferenceOrderID *string `json:"referenceOrderID,omitempty"`
	RewardName *string `json:"rewardName,omitempty"`
	SendEmail *bool `json:"sendEmail,omitempty"`
	Status *string `json:"status,omitempty"`
	Utid *string `json:"utid,omitempty"`
}

// OrderListMatch is the typed request payload for Order.ListTyped.
type OrderListMatch struct {
	AccountIdentifier *string `json:"accountIdentifier,omitempty"`
	Amount *float64 `json:"amount,omitempty"`
	Campaign *string `json:"campaign,omitempty"`
	Created *string `json:"created,omitempty"`
	CustomerIdentifier *string `json:"customerIdentifier,omitempty"`
	Recipient *map[string]any `json:"recipient,omitempty"`
	ReferenceOrderID *string `json:"referenceOrderID,omitempty"`
	RewardName *string `json:"rewardName,omitempty"`
	SendEmail *bool `json:"sendEmail,omitempty"`
	Status *string `json:"status,omitempty"`
	Utid *string `json:"utid,omitempty"`
}

// OrderCreateData is the typed request payload for Order.CreateTyped.
type OrderCreateData struct {
	AccountIdentifier string `json:"accountIdentifier"`
	Amount *float64 `json:"amount,omitempty"`
	Campaign *string `json:"campaign,omitempty"`
	Created *string `json:"created,omitempty"`
	CustomerIdentifier string `json:"customerIdentifier"`
	Recipient *map[string]any `json:"recipient,omitempty"`
	ReferenceOrderID *string `json:"referenceOrderID,omitempty"`
	RewardName *string `json:"rewardName,omitempty"`
	SendEmail *bool `json:"sendEmail,omitempty"`
	Status *string `json:"status,omitempty"`
	Utid *string `json:"utid,omitempty"`
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
