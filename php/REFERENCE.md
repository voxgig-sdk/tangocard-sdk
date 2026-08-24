# Tangocard PHP SDK Reference

Complete API reference for the Tangocard PHP SDK.


## TangocardSDK

### Constructor

```php
require_once __DIR__ . '/tangocard_sdk.php';

$client = new TangocardSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TangocardSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = TangocardSDK::test();
```


### Instance Methods

#### `Catalog($data = null)`

Create a new `CatalogEntity` instance. Pass `null` for no initial data.

#### `Customer($data = null)`

Create a new `CustomerEntity` instance. Pass `null` for no initial data.

#### `Order($data = null)`

Create a new `OrderEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): TangocardUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## CatalogEntity

```php
$catalog = $client->Catalog();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `brandKey` | `string` | No |  |
| `brandName` | `string` | No |  |
| `imageUrls` | `array` | No |  |
| `items` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Catalog()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CatalogEntity`

Create a new `CatalogEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomerEntity

```php
$customer = $client->Customer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customerIdentifier` | `string` | No |  |
| `displayName` | `string` | No |  |
| `email` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Customer()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomerEntity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrderEntity

```php
$order = $client->Order();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accountIdentifier` | `string` | Yes |  |
| `amount` | `float` | No |  |
| `campaign` | `string` | No |  |
| `created` | `string` | No |  |
| `customerIdentifier` | `string` | Yes |  |
| `recipient` | `array` | No |  |
| `referenceOrderID` | `string` | No |  |
| `rewardName` | `string` | No |  |
| `sendEmail` | `bool` | No |  |
| `status` | `string` | No |  |
| `utid` | `string` | No |  |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `accountIdentifier` | - | - |
| `amount` | - | Yes |
| `campaign` | - | - |
| `created` | - | - |
| `customerIdentifier` | - | - |
| `recipient` | - | - |
| `referenceOrderID` | - | - |
| `rewardName` | - | - |
| `sendEmail` | - | - |
| `status` | - | - |
| `utid` | - | Yes |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Order()->create([
  "accountIdentifier" => null, // string
  "customerIdentifier" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Order()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrderEntity`

Create a new `OrderEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new TangocardSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

