-- Typed models for the Tangocard SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Catalog
---@field brandKey? string
---@field brandName? string
---@field imageUrls? table
---@field items? table

---@class CatalogListMatch
---@field brandKey? string
---@field brandName? string
---@field imageUrls? table
---@field items? table

---@class Customer
---@field customerIdentifier? string
---@field displayName? string
---@field email? string

---@class CustomerListMatch
---@field customerIdentifier? string
---@field displayName? string
---@field email? string

---@class Order
---@field accountIdentifier string
---@field amount? number
---@field campaign? string
---@field created? string
---@field customerIdentifier string
---@field recipient? table
---@field referenceOrderID? string
---@field rewardName? string
---@field sendEmail? boolean
---@field status? string
---@field utid? string

---@class OrderListMatch
---@field accountIdentifier? string
---@field amount? number
---@field campaign? string
---@field created? string
---@field customerIdentifier? string
---@field recipient? table
---@field referenceOrderID? string
---@field rewardName? string
---@field sendEmail? boolean
---@field status? string
---@field utid? string

---@class OrderCreateData
---@field accountIdentifier string
---@field amount? number
---@field campaign? string
---@field created? string
---@field customerIdentifier string
---@field recipient? table
---@field referenceOrderID? string
---@field rewardName? string
---@field sendEmail? boolean
---@field status? string
---@field utid? string

local M = {}

return M
