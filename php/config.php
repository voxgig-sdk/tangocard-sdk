<?php
declare(strict_types=1);

// Tangocard SDK configuration

class TangocardConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Tangocard",
                "slug" => "tangocard",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://integration-api.tangocard.com/raas/v2",
                "auth" => [
                    "prefix" => "Basic",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "catalog" => [],
                    "customer" => [],
                    "order" => [],
                ],
            ],
            "entity" => [
        'catalog' => [
          'fields' => [
            [
              'name' => 'brandKey',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'brandName',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'imageUrls',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'items',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'catalog',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/catalogs',
                  'parts' => [
                    'catalogs',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.brands`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'customer' => [
          'fields' => [
            [
              'name' => 'customerIdentifier',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'displayName',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'email',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'customer',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/customers',
                  'parts' => [
                    'customers',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'order' => [
          'fields' => [
            [
              'name' => 'accountIdentifier',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'amount',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$NUMBER`',
                ],
              ],
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'campaign',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'created',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'customerIdentifier',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'recipient',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'referenceOrderID',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'rewardName',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'sendEmail',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'status',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'utid',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'order',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/orders',
                  'parts' => [
                    'orders',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/orders',
                  'parts' => [
                    'orders',
                  ],
                  'select' => [
                    'exist' => [
                      'limit',
                      'offset',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return TangocardFeatures::make_feature($name);
    }
}
