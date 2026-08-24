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


class Catalog(TypedDict, total=False):
    brandKey: str
    brandName: str
    imageUrls: list
    items: list


class CatalogListMatch(TypedDict, total=False):
    brandKey: str
    brandName: str
    imageUrls: list
    items: list


class Customer(TypedDict, total=False):
    customerIdentifier: str
    displayName: str
    email: str


class CustomerListMatch(TypedDict, total=False):
    customerIdentifier: str
    displayName: str
    email: str


class OrderRequired(TypedDict):
    accountIdentifier: str
    customerIdentifier: str


class Order(OrderRequired, total=False):
    amount: float
    campaign: str
    created: str
    recipient: dict
    referenceOrderID: str
    rewardName: str
    sendEmail: bool
    status: str
    utid: str


class OrderListMatch(TypedDict, total=False):
    accountIdentifier: str
    amount: float
    campaign: str
    created: str
    customerIdentifier: str
    recipient: dict
    referenceOrderID: str
    rewardName: str
    sendEmail: bool
    status: str
    utid: str


class OrderCreateDataRequired(TypedDict):
    accountIdentifier: str
    customerIdentifier: str


class OrderCreateData(OrderCreateDataRequired, total=False):
    amount: float
    campaign: str
    created: str
    recipient: dict
    referenceOrderID: str
    rewardName: str
    sendEmail: bool
    status: str
    utid: str
