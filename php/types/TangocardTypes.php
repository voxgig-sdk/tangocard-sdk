<?php
declare(strict_types=1);

// Typed models for the Tangocard SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Catalog entity data model. */
class Catalog
{
    public ?string $brandKey = null;
    public ?string $brandName = null;
    public ?array $imageUrls = null;
    public ?array $items = null;
}

/** Request payload for Catalog#list. */
class CatalogListMatch
{
    public ?string $brandKey = null;
    public ?string $brandName = null;
    public ?array $imageUrls = null;
    public ?array $items = null;
}

/** Customer entity data model. */
class Customer
{
    public ?string $customerIdentifier = null;
    public ?string $displayName = null;
    public ?string $email = null;
}

/** Request payload for Customer#list. */
class CustomerListMatch
{
    public ?string $customerIdentifier = null;
    public ?string $displayName = null;
    public ?string $email = null;
}

/** Order entity data model. */
class Order
{
    public string $accountIdentifier;
    public ?float $amount = null;
    public ?string $campaign = null;
    public ?string $created = null;
    public string $customerIdentifier;
    public ?array $recipient = null;
    public ?string $referenceOrderID = null;
    public ?string $rewardName = null;
    public ?bool $sendEmail = null;
    public ?string $status = null;
    public ?string $utid = null;
}

/** Request payload for Order#list. */
class OrderListMatch
{
    public ?string $accountIdentifier = null;
    public ?float $amount = null;
    public ?string $campaign = null;
    public ?string $created = null;
    public ?string $customerIdentifier = null;
    public ?array $recipient = null;
    public ?string $referenceOrderID = null;
    public ?string $rewardName = null;
    public ?bool $sendEmail = null;
    public ?string $status = null;
    public ?string $utid = null;
}

/** Request payload for Order#create. */
class OrderCreateData
{
    public string $accountIdentifier;
    public ?float $amount = null;
    public ?string $campaign = null;
    public ?string $created = null;
    public string $customerIdentifier;
    public ?array $recipient = null;
    public ?string $referenceOrderID = null;
    public ?string $rewardName = null;
    public ?bool $sendEmail = null;
    public ?string $status = null;
    public ?string $utid = null;
}

