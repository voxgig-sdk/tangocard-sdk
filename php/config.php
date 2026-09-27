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
                "debug" => [
          'options' => [
            'active' => false,
            'max' => 100,
            'redact' => [
              'authorization',
              'cookie',
              'set-cookie',
              'api-key',
              'apikey',
              'x-api-key',
              'idempotency-key',
            ],
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'onEntry' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "idempotency" => [
          'options' => [
            'active' => false,
            'header' => 'Idempotency-Key',
            'methods' => [
              'POST',
              'PUT',
              'PATCH',
              'DELETE',
            ],
            'ops' => [
              'create',
              'update',
              'remove',
            ],
          ],
          'optspec' => [
            'keygen' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "metrics" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "paging" => [
          'options' => [
            'active' => false,
            'afterVar' => 'after',
            'cursorParam' => 'cursor',
            'firstVar' => 'first',
            'limitParam' => 'limit',
            'pageParam' => 'page',
            'startPage' => 1,
          ],
          'optspec' => [
            'limit' => '`$NUMBER`',
            'ops' => '`$LIST`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
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
                    "account" => [],
                    "add_comment_escalation" => [],
                    "all_event_type" => [],
                    "async_order" => [],
                    "async_order_detail_view" => [],
                    "async_order_line_items_view" => [],
                    "async_reason_codes_view" => [],
                    "async_update_line_item_view" => [],
                    "balance_alert_view" => [],
                    "brand_category" => [],
                    "catalog" => [],
                    "choice_product" => [],
                    "country_view_summary" => [],
                    "create_account_criterion" => [],
                    "credential_type_view" => [],
                    "credit_card" => [],
                    "credit_card_deposit" => [],
                    "credit_card_unregister" => [],
                    "customer" => [],
                    "email_template_view_verbose" => [],
                    "embeddable_response_dto" => [],
                    "exchange_rates_with_disclaimer" => [],
                    "line_item" => [],
                    "low_balance_alert_list_view" => [],
                    "low_balance_alert_view" => [],
                    "mobile_country" => [],
                    "n14_webhook" => [],
                    "n1_customer" => [],
                    "n8_line_item" => [],
                    "n9_digital_template" => [],
                    "order" => [],
                    "order_view_summary" => [],
                    "prepaid_card_info" => [],
                    "prepaid_card_transaction" => [],
                    "reissue_card" => [],
                    "replacement_reason" => [],
                    "resend" => [],
                    "reward_reasons_map" => [],
                    "transfer_fund" => [],
                    "update_account" => [],
                    "update_webhook_subscription_response_view" => [],
                    "webhook" => [],
                ],
            ],
            "entity" => [
        'account' => [
          'fields' => [
            [
              'name' => 'accountIdentifier',
              'title' => 'Account Identifier',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'accountNumber',
              'title' => 'Account Number',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'contactEmail',
              'title' => 'Contact Email',
              'type' => '`$STRING`',
              'short' => 'optional, an email address for a designated representative for this account.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'currencyCode',
              'title' => 'Currency Code',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'currentBalance',
              'title' => 'Current Balance',
              'type' => '`$NUMBER`',
              'req' => true,
            ],
            [
              'name' => 'displayName',
              'title' => 'Display Name',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'optional, a friendly name for this account.',
            ],
            [
              'name' => 'fundingNotification',
              'title' => 'Funding Notification',
              'type' => '`$ARRAY`',
              'short' => 'optional, send funding notification emails to the following address(es).',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'account',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'account_number',
                        'orig' => 'account_number',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'contact_email',
                        'orig' => 'contact_email',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'currency_code',
                        'orig' => 'currency_code',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'display_name',
                        'orig' => 'display_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'funding_notification_email',
                        'orig' => 'funding_notification_email',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'max_balance',
                        'orig' => 'max_balance',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'max_date_created_at',
                        'orig' => 'max_date_created_at',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'max_result',
                        'orig' => 'max_result',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'min_balance',
                        'orig' => 'min_balance',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'min_date_created_at',
                        'orig' => 'min_date_created_at',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'next_cursor',
                        'orig' => 'next_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'paginate',
                        'orig' => 'paginate',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'prev_cursor',
                        'orig' => 'prev_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_number',
                      'contact_email',
                      'currency_code',
                      'display_name',
                      'funding_notification_email',
                      'max_balance',
                      'max_date_created_at',
                      'max_result',
                      'min_balance',
                      'min_date_created_at',
                      'next_cursor',
                      'paginate',
                      'prev_cursor',
                      'status',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{accountIdentifier}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'accountIdentifier' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'account_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/customers/{customerIdentifier}/accounts/{accountIdentifier}',
                  'segments' => [
                    [
                      'lit' => 'customers',
                    ],
                    [
                      'var' => 'customer_identifier',
                    ],
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'customers',
                    '{customer_identifier}',
                    'accounts',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'accountIdentifier' => 'id',
                      'customerIdentifier' => 'customer_identifier',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'customer_identifier',
                        'orig' => 'customer_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'account_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'customer_identifier',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.customer',
              ],
            ],
          ],
        ],
        'add_comment_escalation' => [
          'fields' => [
            [
              'name' => 'assignee',
              'title' => 'Assignee',
              'type' => '`$INTEGER`',
              'short' => 'Assignee ID.',
              'format' => 'int32',
            ],
            [
              'name' => 'commentText',
              'title' => 'Comment Text',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Free-text comment to add to the prepaid card.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'inquiryCategoryCode',
              'title' => 'Inquiry Category Code',
              'type' => '`$INTEGER`',
              'short' => 'Inquiry category code.',
              'format' => 'int32',
            ],
            [
              'name' => 'inquiryIdNumber',
              'title' => 'Inquiry Id Number',
              'type' => '`$INTEGER`',
              'short' => 'Inquiry ID number.',
              'format' => 'int32',
            ],
            [
              'name' => 'inquirySource',
              'title' => 'Inquiry Source',
              'type' => '`$STRING`',
              'short' => 'Origination source identifier (e.g.',
            ],
            [
              'name' => 'inquiryTypeCode',
              'title' => 'Inquiry Type Code',
              'type' => '`$INTEGER`',
              'short' => 'Inquiry type code.',
              'format' => 'int32',
            ],
            [
              'name' => 'issueDescription',
              'title' => 'Issue Description',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Short description of the issue.',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'short' => 'Status of the inquiry (e.g.',
            ],
            [
              'name' => 'userId',
              'title' => 'User Id',
              'type' => '`$STRING`',
              'short' => 'Agent or CSR user ID.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'add_comment_escalation',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/prepaidCardService/addCommentEscalation/{referenceLineItemID}',
                  'segments' => [
                    [
                      'lit' => 'prepaidCardService',
                    ],
                    [
                      'lit' => 'addCommentEscalation',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'prepaidCardService',
                    'addCommentEscalation',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'referenceLineItemID' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'reference_line_item_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'all_event_type' => [
          'fields' => [
            [
              'name' => 'category',
              'title' => 'Category',
              'type' => '`$STRING`',
              'short' => 'The category of events can be subscribed to.',
            ],
            [
              'name' => 'eventTypes',
              'title' => 'Event Types',
              'type' => '`$ARRAY`',
              'short' => 'The event types that can be subscribed to.',
            ],
          ],
          'name' => 'all_event_type',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/webhooks/eventtypes',
                  'segments' => [
                    [
                      'lit' => 'webhooks',
                    ],
                    [
                      'lit' => 'eventtypes',
                    ],
                  ],
                  'parts' => [
                    'webhooks',
                    'eventtypes',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'category',
                        'orig' => 'category',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'max_result',
                        'orig' => 'max_result',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 10,
                      ],
                      [
                        'name' => 'next_cursor',
                        'orig' => 'next_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'prev_cursor',
                        'orig' => 'prev_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'category',
                      'max_result',
                      'next_cursor',
                      'prev_cursor',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'async_order' => [
          'fields' => [
            [
              'name' => 'accountIdentifier',
              'title' => 'Account Identifier',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'specify the account this order will be deducted from',
            ],
            [
              'name' => 'accountNumber',
              'title' => 'Account Number',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'amountCharged',
              'title' => 'Amount Charged',
              'type' => '`$OBJECT`',
              'short' => 'Initial value and the total charged amount on the account',
            ],
            [
              'name' => 'campaign',
              'title' => 'Campaign',
              'type' => '`$STRING`',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'Optional.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'format' => 'date-time',
            ],
            [
              'name' => 'customerIdentifier',
              'title' => 'Customer Identifier',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'specify the customer associated with the order.',
            ],
            [
              'name' => 'duplicateLineItemRefIds',
              'title' => 'Duplicate Line Item Ref Ids',
              'type' => '`$OBJECT`',
              'short' => 'If any duplicate duplicateLineItemRefIds exist in the request',
            ],
            [
              'name' => 'externalRefID',
              'title' => 'External Ref Id',
              'type' => '`$STRING`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'Required.',
            ],
            [
              'name' => 'failedLineItems',
              'title' => 'Failed Line Items',
              'type' => '`$ARRAY`',
              'short' => 'Failed line items list (business validations)',
            ],
            [
              'name' => 'fulfillBy',
              'title' => 'Fulfill By',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'lineItems',
              'title' => 'Line Items',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'Line Items of the bulk order a required field',
            ],
            [
              'name' => 'notes',
              'title' => 'Notes',
              'type' => '`$STRING`',
              'short' => 'Optional order notes.',
            ],
            [
              'name' => 'orderStatus',
              'title' => 'Order Status',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'purchaseOrderNumber',
              'title' => 'Purchase Order Number',
              'type' => '`$STRING`',
              'short' => 'The Purchase Order Number associated with this order.',
            ],
            [
              'name' => 'referenceOrderID',
              'title' => 'Reference Order Id',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'sender',
              'title' => 'Sender',
              'type' => '`$OBJECT`',
              'short' => 'Optional.',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'short' => 'This status reflects about cart status or validation status based on the processing',
            ],
            [
              'name' => 'totalLineItems',
              'title' => 'Total Line Items',
              'type' => '`$INTEGER`',
              'short' => 'Total number of line items submitted in the request',
              'format' => 'int32',
            ],
            [
              'name' => 'totalLineItemsRows',
              'title' => 'Total Line Items Rows',
              'type' => '`$INTEGER`',
              'format' => 'int64',
            ],
          ],
          'name' => 'async_order',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/asyncOrders',
                  'segments' => [
                    [
                      'lit' => 'asyncOrders',
                    ],
                  ],
                  'parts' => [
                    'asyncOrders',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/asyncOrders',
                  'segments' => [
                    [
                      'lit' => 'asyncOrders',
                    ],
                  ],
                  'parts' => [
                    'asyncOrders',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.orders`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'account_identifier',
                        'orig' => 'account_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'campaign',
                        'orig' => 'campaign',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'currency_code',
                        'orig' => 'currency_code',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'customer_identifier',
                        'orig' => 'customer_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'delivery_method',
                        'orig' => 'delivery_method',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'elements_per_block',
                        'orig' => 'elements_per_block',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'end_date',
                        'orig' => 'end_date',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'external_ref_id',
                        'orig' => 'external_ref_id',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'line_item_note',
                        'orig' => 'line_item_note',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'line_item_status',
                        'orig' => 'line_item_status',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'max_amount',
                        'orig' => 'max_amount',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'max_result',
                        'orig' => 'max_result',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'min_amount',
                        'orig' => 'min_amount',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'next_cursor',
                        'orig' => 'next_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'note',
                        'orig' => 'note',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'order_status',
                        'orig' => 'order_status',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'prev_cursor',
                        'orig' => 'prev_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'ptid',
                        'orig' => 'ptid',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'purchase_order_number',
                        'orig' => 'purchase_order_number',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'recipient_email',
                        'orig' => 'recipient_email',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'recipient_first_name',
                        'orig' => 'recipient_first_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'recipient_last_name',
                        'orig' => 'recipient_last_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'recipient_mobile_number',
                        'orig' => 'recipient_mobile_number',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'reward_name',
                        'orig' => 'reward_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'send_email',
                        'orig' => 'send_email',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'sender_email',
                        'orig' => 'sender_email',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'sender_first_name',
                        'orig' => 'sender_first_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'sender_last_name',
                        'orig' => 'sender_last_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'start_date',
                        'orig' => 'start_date',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'utid',
                        'orig' => 'utid',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_identifier',
                      'campaign',
                      'currency_code',
                      'customer_identifier',
                      'delivery_method',
                      'elements_per_block',
                      'end_date',
                      'external_ref_id',
                      'line_item_note',
                      'line_item_status',
                      'max_amount',
                      'max_result',
                      'min_amount',
                      'next_cursor',
                      'note',
                      'order_status',
                      'page',
                      'prev_cursor',
                      'ptid',
                      'purchase_order_number',
                      'recipient_email',
                      'recipient_first_name',
                      'recipient_last_name',
                      'recipient_mobile_number',
                      'reward_name',
                      'send_email',
                      'sender_email',
                      'sender_first_name',
                      'sender_last_name',
                      'start_date',
                      'utid',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'async_order_detail_view' => [
          'fields' => [
            [
              'name' => 'accountIdentifier',
              'title' => 'Account Identifier',
              'type' => '`$STRING`',
              'short' => 'Account identifier',
            ],
            [
              'name' => 'amountCharged',
              'title' => 'Amount Charged',
              'type' => '`$OBJECT`',
              'short' => 'Initial value and the total charged amount on the account',
            ],
            [
              'name' => 'campaign',
              'title' => 'Campaign',
              'type' => '`$STRING`',
              'short' => 'Campaign name',
            ],
            [
              'name' => 'completedAt',
              'title' => 'Completed At',
              'type' => '`$STRING`',
              'short' => 'Order completion timestamp',
              'format' => 'date-time',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'short' => 'Order creation timestamp',
              'format' => 'date-time',
            ],
            [
              'name' => 'customerIdentifier',
              'title' => 'Customer Identifier',
              'type' => '`$STRING`',
              'short' => 'Customer identifier',
            ],
            [
              'name' => 'externalRefID',
              'title' => 'External Ref Id',
              'type' => '`$STRING`',
              'short' => 'External reference ID provided by client',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'lineItems',
              'title' => 'Line Items',
              'type' => '`$ARRAY`',
              'short' => 'list of line items',
            ],
            [
              'name' => 'notes',
              'title' => 'Notes',
              'type' => '`$STRING`',
              'short' => 'Order notes',
            ],
            [
              'name' => 'orderErrors',
              'title' => 'Order Errors',
              'type' => '`$ARRAY`',
              'short' => 'Order level errors',
            ],
            [
              'name' => 'orderStatus',
              'title' => 'Order Status',
              'type' => '`$STRING`',
              'short' => 'Current status of the order',
            ],
            [
              'name' => 'pagination',
              'title' => 'Pagination',
              'type' => '`$OBJECT`',
              'short' => 'Pagination information',
            ],
            [
              'name' => 'purchaseOrderNumber',
              'title' => 'Purchase Order Number',
              'type' => '`$STRING`',
              'short' => 'Purchase order number',
            ],
            [
              'name' => 'referenceOrderID',
              'title' => 'Reference Order Id',
              'type' => '`$STRING`',
              'short' => 'Internal reference order ID',
            ],
            [
              'name' => 'sender',
              'title' => 'Sender',
              'type' => '`$OBJECT`',
              'short' => 'Sender information',
            ],
            [
              'name' => 'totalLineItems',
              'title' => 'Total Line Items',
              'type' => '`$INTEGER`',
              'short' => 'Total number of line items',
              'format' => 'int64',
            ],
          ],
          'id' => [
            'field' => 'id',
            'from' => [
              'account_identifier' => 'accountIdentifier',
              'external_ref_id' => 'externalRefID',
            ],
            'name' => 'id',
            'parts' => [
              'account_identifier',
              'external_ref_id',
            ],
            'sep' => '/',
          ],
          'name' => 'async_order_detail_view',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}',
                  'segments' => [
                    [
                      'lit' => 'asyncOrders',
                    ],
                    [
                      'lit' => 'customers',
                    ],
                    [
                      'var' => 'customer_identifier',
                    ],
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_identifier',
                    ],
                    [
                      'var' => 'external_ref_id',
                    ],
                  ],
                  'parts' => [
                    'asyncOrders',
                    'customers',
                    '{customer_identifier}',
                    'accounts',
                    '{account_identifier}',
                    '{external_ref_id}',
                  ],
                  'rename' => [
                    'param' => [
                      'accountIdentifier' => 'account_identifier',
                      'customerIdentifier' => 'customer_identifier',
                      'externalRefID' => 'external_ref_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_identifier',
                        'orig' => 'account_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'customer_identifier',
                        'orig' => 'customer_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'external_ref_id',
                        'orig' => 'external_ref_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'external_ref_line_item_i_d',
                        'orig' => 'external_ref_line_item_i_d',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'failed_only',
                        'orig' => 'failed_only',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => false,
                      ],
                      [
                        'name' => 'max_result',
                        'orig' => 'max_result',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 100,
                      ],
                      [
                        'name' => 'next_cursor',
                        'orig' => 'next_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'NjI=',
                      ],
                      [
                        'name' => 'prev_cursor',
                        'orig' => 'prev_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'NjE=',
                      ],
                      [
                        'name' => 'reference_line_item_i_d',
                        'orig' => 'reference_line_item_i_d',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_identifier',
                      'customer_identifier',
                      'external_ref_id',
                      'external_ref_line_item_i_d',
                      'failed_only',
                      'max_result',
                      'next_cursor',
                      'prev_cursor',
                      'reference_line_item_i_d',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}',
                  'segments' => [
                    [
                      'lit' => 'asyncOrders',
                    ],
                    [
                      'lit' => 'customers',
                    ],
                    [
                      'var' => 'customer_identifier',
                    ],
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_identifier',
                    ],
                    [
                      'var' => 'external_ref_id',
                    ],
                  ],
                  'parts' => [
                    'asyncOrders',
                    'customers',
                    '{customer_identifier}',
                    'accounts',
                    '{account_identifier}',
                    '{external_ref_id}',
                  ],
                  'rename' => [
                    'param' => [
                      'accountIdentifier' => 'account_identifier',
                      'customerIdentifier' => 'customer_identifier',
                      'externalRefID' => 'external_ref_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_identifier',
                        'orig' => 'account_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'customer_identifier',
                        'orig' => 'customer_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'external_ref_id',
                        'orig' => 'external_ref_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_identifier',
                      'customer_identifier',
                      'external_ref_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.customer',
                '$.main.kit.entity.account',
              ],
            ],
          ],
        ],
        'async_order_line_items_view' => [
          'fields' => [
            [
              'name' => 'accountIdentifier',
              'title' => 'Account Identifier',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'amountCharged',
              'title' => 'Amount Charged',
              'type' => '`$OBJECT`',
              'short' => 'Initial value and the total charged amount on the account',
            ],
            [
              'name' => 'campaign',
              'title' => 'Campaign',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'customerIdentifier',
              'title' => 'Customer Identifier',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'externalRefID',
              'title' => 'External Ref Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'lineItems',
              'title' => 'Line Items',
              'type' => '`$ARRAY`',
              'short' => 'The List of Line Items for the Async Order.',
            ],
            [
              'name' => 'orderErrors',
              'title' => 'Order Errors',
              'type' => '`$ARRAY`',
              'short' => 'The List of Errors for the Async Order.',
            ],
            [
              'name' => 'orderNotes',
              'title' => 'Order Notes',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'orderStatus',
              'title' => 'Order Status',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'pagination',
              'title' => 'Pagination',
              'type' => '`$OBJECT`',
              'short' => 'The cursor for pagination of the async order line items.',
            ],
            [
              'name' => 'purchaseOrderNumber',
              'title' => 'Purchase Order Number',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'referenceOrderID',
              'title' => 'Reference Order Id',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'sender',
              'title' => 'Sender',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'async_order_line_items_view',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}/lineItems',
                  'segments' => [
                    [
                      'lit' => 'asyncOrders',
                    ],
                    [
                      'lit' => 'customers',
                    ],
                    [
                      'var' => 'customer_id',
                    ],
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'var' => 'external_ref_id',
                    ],
                    [
                      'lit' => 'lineItems',
                    ],
                  ],
                  'parts' => [
                    'asyncOrders',
                    'customers',
                    '{customer_id}',
                    'accounts',
                    '{account_id}',
                    '{external_ref_id}',
                    'lineItems',
                  ],
                  'rename' => [
                    'param' => [
                      'accountIdentifier' => 'account_id',
                      'customerIdentifier' => 'customer_id',
                      'externalRefID' => 'external_ref_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'customer_id',
                        'orig' => 'customer_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'external_ref_id',
                        'orig' => 'external_ref_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'external_ref_line_item_i_d',
                        'orig' => 'external_ref_line_item_i_d',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'failed_only',
                        'orig' => 'failed_only',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => false,
                      ],
                      [
                        'name' => 'max_result',
                        'orig' => 'max_result',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 50,
                      ],
                      [
                        'name' => 'next_cursor',
                        'orig' => 'next_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => '',
                      ],
                      [
                        'name' => 'prev_cursor',
                        'orig' => 'prev_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => '',
                      ],
                      [
                        'name' => 'reference_line_item_i_d',
                        'orig' => 'reference_line_item_i_d',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'customer_id',
                      'external_ref_id',
                      'external_ref_line_item_i_d',
                      'failed_only',
                      'max_result',
                      'next_cursor',
                      'prev_cursor',
                      'reference_line_item_i_d',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.customer',
                '$.main.kit.entity.account',
              ],
            ],
          ],
        ],
        'async_reason_codes_view' => [
          'fields' => [],
          'name' => 'async_reason_codes_view',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/asyncOrders/reasonCodes',
                  'segments' => [
                    [
                      'lit' => 'asyncOrders',
                    ],
                    [
                      'lit' => 'reasonCodes',
                    ],
                  ],
                  'parts' => [
                    'asyncOrders',
                    'reasonCodes',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.reasonCodes`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'async_update_line_item_view' => [
          'fields' => [
            [
              'name' => 'deliveryDate',
              'title' => 'Delivery Date',
              'type' => '`$STRING`',
              'short' => 'Optional.',
            ],
            [
              'name' => 'lineItemNote',
              'title' => 'Line Item Note',
              'type' => '`$STRING`',
              'short' => 'Optional line item notes (up to 150 characters)',
            ],
            [
              'name' => 'senderInfo',
              'title' => 'Sender Info',
              'type' => '`$OBJECT`',
              'short' => 'Optional.',
            ],
          ],
          'name' => 'async_update_line_item_view',
          'op' => [
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/asyncOrders/lineItems/{referenceLineItemId}',
                  'segments' => [
                    [
                      'lit' => 'asyncOrders',
                    ],
                    [
                      'lit' => 'lineItems',
                    ],
                    [
                      'var' => 'reference_line_item_id',
                    ],
                  ],
                  'parts' => [
                    'asyncOrders',
                    'lineItems',
                    '{reference_line_item_id}',
                  ],
                  'rename' => [
                    'param' => [
                      'referenceLineItemId' => 'reference_line_item_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.senderInfo`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'reference_line_item_id',
                        'orig' => 'reference_line_item_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'reference_line_item_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.line_item',
              ],
            ],
          ],
        ],
        'balance_alert_view' => [
          'fields' => [],
          'name' => 'balance_alert_view',
          'op' => [
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}',
                  'segments' => [
                    [
                      'lit' => 'customers',
                    ],
                    [
                      'var' => 'customer_identifier',
                    ],
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'lowbalance',
                    ],
                    [
                      'var' => 'balance_alert_id',
                    ],
                  ],
                  'parts' => [
                    'customers',
                    '{customer_identifier}',
                    'accounts',
                    '{account_id}',
                    'lowbalance',
                    '{balance_alert_id}',
                  ],
                  'rename' => [
                    'param' => [
                      'accountIdentifier' => 'account_id',
                      'balanceAlertID' => 'balance_alert_id',
                      'customerIdentifier' => 'customer_identifier',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'balance_alert_id',
                        'orig' => 'balance_alert_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'customer_identifier',
                        'orig' => 'customer_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'balance_alert_id',
                      'customer_identifier',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.customer',
                '$.main.kit.entity.account',
              ],
            ],
          ],
        ],
        'brand_category' => [
          'fields' => [
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'identifier',
              'title' => 'Identifier',
              'type' => '`$STRING`',
              'format' => 'uuid',
            ],
          ],
          'name' => 'brand_category',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/brandCategories',
                  'segments' => [
                    [
                      'lit' => 'brandCategories',
                    ],
                  ],
                  'parts' => [
                    'brandCategories',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.brandCategories`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'catalog' => [
          'fields' => [
            [
              'name' => 'barcodeType',
              'title' => 'Barcode Type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'brandKey',
              'title' => 'Brand Key',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'brandName',
              'title' => 'Brand Name',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'brandRequirements',
              'title' => 'Brand Requirements',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'categories',
              'title' => 'Categories',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'createdDate',
              'title' => 'Created Date',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'disclaimer',
              'title' => 'Disclaimer',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'imageUrls',
              'title' => 'Image Urls',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'items',
              'title' => 'Items',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'lastUpdateDate',
              'title' => 'Last Update Date',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'shortDescription',
              'title' => 'Short Description',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'terms',
              'title' => 'Terms',
              'type' => '`$STRING`',
              'req' => true,
            ],
          ],
          'name' => 'catalog',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/choiceProducts/{choiceProductUtid}/catalog',
                  'segments' => [
                    [
                      'lit' => 'choiceProducts',
                    ],
                    [
                      'var' => 'choice_product_id',
                    ],
                    [
                      'lit' => 'catalog',
                    ],
                  ],
                  'parts' => [
                    'choiceProducts',
                    '{choice_product_id}',
                    'catalog',
                  ],
                  'rename' => [
                    'param' => [
                      'choiceProductUtid' => 'choice_product_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.brands`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'choice_product_id',
                        'orig' => 'choice_product_utid',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'brand_key',
                        'orig' => 'brand_key',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'brand_name',
                        'orig' => 'brand_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'category_id',
                        'orig' => 'category_id',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'country',
                        'orig' => 'country',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'currency_code',
                        'orig' => 'currency_code',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'fulfillment_type',
                        'orig' => 'fulfillment_type',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'item_attribute',
                        'orig' => 'item_attribute',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'reward_name',
                        'orig' => 'reward_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'reward_type',
                        'orig' => 'reward_type',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'utid',
                        'orig' => 'utid',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'verbose',
                        'orig' => 'verbose',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'brand_key',
                      'brand_name',
                      'category_id',
                      'choice_product_id',
                      'country',
                      'currency_code',
                      'fulfillment_type',
                      'item_attribute',
                      'reward_name',
                      'reward_type',
                      'status',
                      'utid',
                      'verbose',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/catalogs',
                  'segments' => [
                    [
                      'lit' => 'catalogs',
                    ],
                  ],
                  'parts' => [
                    'catalogs',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.brands`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'brand_key',
                        'orig' => 'brand_key',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'brand_name',
                        'orig' => 'brand_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'category_id',
                        'orig' => 'category_id',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'country',
                        'orig' => 'country',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'currency_code',
                        'orig' => 'currency_code',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'fulfillment_type',
                        'orig' => 'fulfillment_type',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'item_attribute',
                        'orig' => 'item_attribute',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'reward_name',
                        'orig' => 'reward_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'reward_type',
                        'orig' => 'reward_type',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'utid',
                        'orig' => 'utid',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'verbose',
                        'orig' => 'verbose',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'brand_key',
                      'brand_name',
                      'category_id',
                      'country',
                      'currency_code',
                      'fulfillment_type',
                      'item_attribute',
                      'reward_name',
                      'reward_type',
                      'status',
                      'utid',
                      'verbose',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.choice_product',
              ],
            ],
          ],
        ],
        'choice_product' => [
          'fields' => [
            [
              'name' => 'countries',
              'title' => 'Countries',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'currencyCode',
              'title' => 'Currency Code',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'rewardName',
              'title' => 'Reward Name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'utid',
              'title' => 'Utid',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'choice_product',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/choiceProducts',
                  'segments' => [
                    [
                      'lit' => 'choiceProducts',
                    ],
                  ],
                  'parts' => [
                    'choiceProducts',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.choiceProducts`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'country',
                        'orig' => 'country',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'currency_code',
                        'orig' => 'currency_code',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'reward_name',
                        'orig' => 'reward_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'country',
                      'currency_code',
                      'reward_name',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/choiceProducts/{utid}',
                  'segments' => [
                    [
                      'lit' => 'choiceProducts',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'choiceProducts',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'utid' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'utid',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'country_view_summary' => [
          'fields' => [
            [
              'name' => 'countryName',
              'title' => 'Country Name',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'preferredCurrency',
              'title' => 'Preferred Currency',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'threeLetterCode',
              'title' => 'Three Letter Code',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'twoLetterCode',
              'title' => 'Two Letter Code',
              'type' => '`$STRING`',
              'req' => true,
            ],
          ],
          'name' => 'country_view_summary',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/rewardCountries',
                  'segments' => [
                    [
                      'lit' => 'rewardCountries',
                    ],
                  ],
                  'parts' => [
                    'rewardCountries',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'country',
                        'orig' => 'country',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'max_result',
                        'orig' => 'max_result',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'next_cursor',
                        'orig' => 'next_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'preferred_currency',
                        'orig' => 'preferred_currency',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'prev_cursor',
                        'orig' => 'prev_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'country',
                      'max_result',
                      'next_cursor',
                      'preferred_currency',
                      'prev_cursor',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'create_account_criterion' => [
          'fields' => [
            [
              'name' => 'accountIdentifier',
              'title' => 'Account Identifier',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'A unique identifier for this account.',
            ],
            [
              'name' => 'contactEmail',
              'title' => 'Contact Email',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'An email address for a designated representative for this account.',
            ],
            [
              'name' => 'currencyCode',
              'title' => 'Currency Code',
              'type' => '`$STRING`',
              'short' => 'The currency this account will accept for deposits/withdraws.',
            ],
            [
              'name' => 'displayName',
              'title' => 'Display Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'A friendly name for this account.',
            ],
            [
              'name' => 'fundingNotification',
              'title' => 'Funding Notification',
              'type' => '`$ARRAY`',
              'short' => 'optional, send funding notification emails to the following address(es)',
            ],
          ],
          'name' => 'create_account_criterion',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/customers/{customerIdentifier}/accounts',
                  'segments' => [
                    [
                      'lit' => 'customers',
                    ],
                    [
                      'var' => 'customer_identifier',
                    ],
                    [
                      'lit' => 'accounts',
                    ],
                  ],
                  'parts' => [
                    'customers',
                    '{customer_identifier}',
                    'accounts',
                  ],
                  'rename' => [
                    'param' => [
                      'customerIdentifier' => 'customer_identifier',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'customer_identifier',
                        'orig' => 'customer_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'customer_identifier',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.customer',
              ],
            ],
          ],
        ],
        'credential_type_view' => [
          'fields' => [
            [
              'name' => 'credentialType',
              'title' => 'Credential Type',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'credential_type_view',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/credentialtypes',
                  'segments' => [
                    [
                      'lit' => 'credentialtypes',
                    ],
                  ],
                  'parts' => [
                    'credentialtypes',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'credit_card' => [
          'fields' => [
            [
              'name' => 'accountIdentifier',
              'title' => 'Account Identifier',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'specify the account this credit card is associated with',
            ],
            [
              'name' => 'accountNumber',
              'title' => 'Account Number',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'activationDate',
              'title' => 'Activation Date',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'billingAddress',
              'title' => 'Billing Address',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'required Enter the billing address information for the credit card that is being registered',
            ],
            [
              'name' => 'contactInformation',
              'title' => 'Contact Information',
              'type' => '`$ARRAY`',
              'req' => true,
              'op' => [
                'create' => [
                  'type' => '`$ARRAY`',
                ],
              ],
              'short' => 'Optional.',
            ],
            [
              'name' => 'createdDate',
              'title' => 'Created Date',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'creditCard',
              'title' => 'Credit Card',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'required Enter the credit card details that is being registered',
            ],
            [
              'name' => 'customerIdentifier',
              'title' => 'Customer Identifier',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'specify the customer associated with the credit card.',
            ],
            [
              'name' => 'expirationDate',
              'title' => 'Expiration Date',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ipAddress',
              'title' => 'Ip Address',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'specify the The IP address of the person adding the credit card',
            ],
            [
              'name' => 'label',
              'title' => 'Label',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'specify a label for the credit card',
            ],
            [
              'name' => 'lastFourDigits',
              'title' => 'Last Four Digits',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'token',
              'title' => 'Token',
              'type' => '`$STRING`',
              'req' => true,
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'credit_card',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/creditCards',
                  'segments' => [
                    [
                      'lit' => 'creditCards',
                    ],
                  ],
                  'parts' => [
                    'creditCards',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/creditCards',
                  'segments' => [
                    [
                      'lit' => 'creditCards',
                    ],
                  ],
                  'parts' => [
                    'creditCards',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'account_identifier',
                        'orig' => 'account_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'account_number',
                        'orig' => 'account_number',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'customer_identifier',
                        'orig' => 'customer_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'email_address',
                        'orig' => 'email_address',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'expiration_date',
                        'orig' => 'expiration_date',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'full_name',
                        'orig' => 'full_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'label',
                        'orig' => 'label',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'last_four_digit',
                        'orig' => 'last_four_digit',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'max_result',
                        'orig' => 'max_result',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'next_cursor',
                        'orig' => 'next_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'paginate',
                        'orig' => 'paginate',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'prev_cursor',
                        'orig' => 'prev_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'show_inactive',
                        'orig' => 'show_inactive',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'false',
                      ],
                      [
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'token',
                        'orig' => 'token',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_identifier',
                      'account_number',
                      'customer_identifier',
                      'email_address',
                      'expiration_date',
                      'full_name',
                      'label',
                      'last_four_digit',
                      'max_result',
                      'next_cursor',
                      'paginate',
                      'prev_cursor',
                      'show_inactive',
                      'status',
                      'token',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/creditCards/{token}',
                  'segments' => [
                    [
                      'lit' => 'creditCards',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'creditCards',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'token' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'token',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'credit_card_deposit' => [
          'fields' => [
            [
              'name' => 'accountIdentifier',
              'title' => 'Account Identifier',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'specify the account this credit card is associated with',
            ],
            [
              'name' => 'accountNumber',
              'title' => 'Account Number',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'amount',
              'title' => 'Amount',
              'type' => '`$NUMBER`',
              'req' => true,
              'short' => 'specify the amount to fund in USD',
            ],
            [
              'name' => 'amountCharged',
              'title' => 'Amount Charged',
              'type' => '`$NUMBER`',
              'req' => true,
            ],
            [
              'name' => 'createdDate',
              'title' => 'Created Date',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'creditCardToken',
              'title' => 'Credit Card Token',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'specify the credit card token to fund with',
            ],
            [
              'name' => 'customerIdentifier',
              'title' => 'Customer Identifier',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'specify the customer associated with the credit card.',
            ],
            [
              'name' => 'externalRefID',
              'title' => 'External Ref Id',
              'type' => '`$STRING`',
              'short' => 'specify the external reference id to associate with this funding action.',
            ],
            [
              'name' => 'feePercent',
              'title' => 'Fee Percent',
              'type' => '`$NUMBER`',
              'req' => true,
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'referenceDepositID',
              'title' => 'Reference Deposit Id',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'credit_card_deposit',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/creditCardDeposits',
                  'segments' => [
                    [
                      'lit' => 'creditCardDeposits',
                    ],
                  ],
                  'parts' => [
                    'creditCardDeposits',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/creditCardDeposits/{referenceDepositID}',
                  'segments' => [
                    [
                      'lit' => 'creditCardDeposits',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'creditCardDeposits',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'referenceDepositID' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'reference_deposit_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'credit_card_unregister' => [
          'fields' => [
            [
              'name' => 'accountIdentifier',
              'title' => 'Account Identifier',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Specify the account this credit card is associated with.',
            ],
            [
              'name' => 'createdDate',
              'title' => 'Created Date',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'creditCardToken',
              'title' => 'Credit Card Token',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Specify the credit card token to unregister.',
            ],
            [
              'name' => 'customerIdentifier',
              'title' => 'Customer Identifier',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Specify the customer associated with the credit card.',
            ],
            [
              'name' => 'message',
              'title' => 'Message',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'token',
              'title' => 'Token',
              'type' => '`$STRING`',
              'req' => true,
            ],
          ],
          'name' => 'credit_card_unregister',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/creditCardUnregisters',
                  'segments' => [
                    [
                      'lit' => 'creditCardUnregisters',
                    ],
                  ],
                  'parts' => [
                    'creditCardUnregisters',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
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
              'name' => 'accounts',
              'title' => 'Accounts',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'customerIdentifier',
              'title' => 'Customer Identifier',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'A unique identifier for this customer.',
            ],
            [
              'name' => 'displayName',
              'title' => 'Display Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'A friendly name for this customer.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'customer',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/customers',
                  'segments' => [
                    [
                      'lit' => 'customers',
                    ],
                  ],
                  'parts' => [
                    'customers',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/customers',
                  'segments' => [
                    [
                      'lit' => 'customers',
                    ],
                  ],
                  'parts' => [
                    'customers',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'account_display_name',
                        'orig' => 'account_display_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'account_identifier',
                        'orig' => 'account_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'account_max_date_created_at',
                        'orig' => 'account_max_date_created_at',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'account_min_date_created_at',
                        'orig' => 'account_min_date_created_at',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'account_number',
                        'orig' => 'account_number',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'account_status',
                        'orig' => 'account_status',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'customer_max_date_created_at',
                        'orig' => 'customer_max_date_created_at',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'customer_min_date_created_at',
                        'orig' => 'customer_min_date_created_at',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'display_name',
                        'orig' => 'display_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'max_result',
                        'orig' => 'max_result',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'next_cursor',
                        'orig' => 'next_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'paginate',
                        'orig' => 'paginate',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'prev_cursor',
                        'orig' => 'prev_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_display_name',
                      'account_identifier',
                      'account_max_date_created_at',
                      'account_min_date_created_at',
                      'account_number',
                      'account_status',
                      'customer_max_date_created_at',
                      'customer_min_date_created_at',
                      'display_name',
                      'max_result',
                      'next_cursor',
                      'paginate',
                      'prev_cursor',
                      'status',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/customers/{customerIdentifier}',
                  'segments' => [
                    [
                      'lit' => 'customers',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'customers',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'customerIdentifier' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'customer_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'email_template_view_verbose' => [
          'fields' => [
            [
              'name' => 'accentColor',
              'title' => 'Accent Color',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'A Hex color value, six hexadecimal digits preceded by a pound sign, used as an accent in the email.',
            ],
            [
              'name' => 'accessControl',
              'title' => 'Access Control',
              'type' => '`$ARRAY`',
              'short' => '(Optional) Which Customers and/or Accounts should have access to this template.',
            ],
            [
              'name' => 'accessControls',
              'title' => 'Access Controls',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'closing',
              'title' => 'Closing',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'After the reward credential, a space to close the email message to the recipient.',
            ],
            [
              'name' => 'customerServiceMessage',
              'title' => 'Customer Service Message',
              'type' => '`$STRING`',
              'short' => 'If left null, Tango Card\'s Customer Support contact information will be included.',
            ],
            [
              'name' => 'defaults',
              'title' => 'Defaults',
              'type' => '`$ARRAY`',
              'short' => 'If you want this template to be used at order time for the given Platform, Customer or Account when the Email Template Identifier (etid) is not provided with the order.',
            ],
            [
              'name' => 'etid',
              'title' => 'Etid',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'fromName',
              'title' => 'From Name',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'The name that will appear in the From line of the email and the {from_name} in the text message.',
            ],
            [
              'name' => 'headerImage',
              'title' => 'Header Image',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'A Base64 encoded string of an image that will show as the header of the email.',
            ],
            [
              'name' => 'headerImageAltText',
              'title' => 'Header Image Alt Text',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'The Alt Text for the Header Image in the email.',
            ],
            [
              'name' => 'messageBody',
              'title' => 'Message Body',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'The message body for the email.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'A unique name to give the template.',
            ],
            [
              'name' => 'smsMessageBody',
              'title' => 'Sms Message Body',
              'type' => '`$STRING`',
              'short' => 'The message body for the SMS.',
            ],
            [
              'name' => 'subject',
              'title' => 'Subject',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'The Subject of the email.',
            ],
          ],
          'name' => 'email_template_view_verbose',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/digitalTemplates',
                  'segments' => [
                    [
                      'lit' => 'digitalTemplates',
                    ],
                  ],
                  'parts' => [
                    'digitalTemplates',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/digitalTemplates',
                  'segments' => [
                    [
                      'lit' => 'digitalTemplates',
                    ],
                  ],
                  'parts' => [
                    'digitalTemplates',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'elements_per_block',
                        'orig' => 'elements_per_block',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'elements_per_block',
                      'page',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/digitalTemplates/{etid}',
                  'segments' => [
                    [
                      'lit' => 'digitalTemplates',
                    ],
                    [
                      'var' => 'etid',
                    ],
                  ],
                  'parts' => [
                    'digitalTemplates',
                    '{etid}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'etid',
                        'orig' => 'etid',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'etid',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/digitalTemplates/{etid}',
                  'segments' => [
                    [
                      'lit' => 'digitalTemplates',
                    ],
                    [
                      'var' => 'etid',
                    ],
                  ],
                  'parts' => [
                    'digitalTemplates',
                    '{etid}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'etid',
                        'orig' => 'etid',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'etid',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'embeddable_response_dto' => [
          'fields' => [
            [
              'name' => 'url',
              'title' => 'Url',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'embeddable_response_dto',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/lineItems/{referenceLineItemID}/embeddedUrl',
                  'segments' => [
                    [
                      'lit' => 'lineItems',
                    ],
                    [
                      'var' => 'reference_line_item_id',
                    ],
                    [
                      'lit' => 'embeddedUrl',
                    ],
                  ],
                  'parts' => [
                    'lineItems',
                    '{reference_line_item_id}',
                    'embeddedUrl',
                  ],
                  'rename' => [
                    'param' => [
                      'referenceLineItemID' => 'reference_line_item_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'reference_line_item_id',
                        'orig' => 'reference_line_item_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'reference_line_item_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.line_item',
              ],
            ],
          ],
        ],
        'exchange_rates_with_disclaimer' => [
          'fields' => [
            [
              'name' => 'baseCurrency',
              'title' => 'Base Currency',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'baseFx',
              'title' => 'Base Fx',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'lastModifiedDate',
              'title' => 'Last Modified Date',
              'type' => '`$STRING`',
              'req' => true,
              'format' => 'date-time',
            ],
            [
              'name' => 'rewardCurrency',
              'title' => 'Reward Currency',
              'type' => '`$STRING`',
              'req' => true,
            ],
          ],
          'name' => 'exchange_rates_with_disclaimer',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/exchangerates',
                  'segments' => [
                    [
                      'lit' => 'exchangerates',
                    ],
                  ],
                  'parts' => [
                    'exchangerates',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.exchangeRates`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'base_currency',
                        'orig' => 'base_currency',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'max_result',
                        'orig' => 'max_result',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'next_cursor',
                        'orig' => 'next_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'paginate',
                        'orig' => 'paginate',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'prev_cursor',
                        'orig' => 'prev_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'reward_currency',
                        'orig' => 'reward_currency',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'base_currency',
                      'max_result',
                      'next_cursor',
                      'paginate',
                      'prev_cursor',
                      'reward_currency',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'line_item' => [
          'fields' => [
            [
              'name' => 'accountIdentifier',
              'title' => 'Account Identifier',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'accountNumber',
              'title' => 'Account Number',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'amountCharged',
              'title' => 'Amount Charged',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'amountIssued',
              'title' => 'Amount Issued',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'campaign',
              'title' => 'Campaign',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'canCancel',
              'title' => 'Can Cancel',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'canFreeze',
              'title' => 'Can Freeze',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'customerIdentifier',
              'title' => 'Customer Identifier',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'dateIssued',
              'title' => 'Date Issued',
              'type' => '`$STRING`',
              'req' => true,
              'format' => 'date-time',
            ],
            [
              'name' => 'deliveryMethod',
              'title' => 'Delivery Method',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'deliveryStatus',
              'title' => 'Delivery Status',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'emailStatus',
              'title' => 'Email Status',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'etid',
              'title' => 'Etid',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'expirationDate',
              'title' => 'Expiration Date',
              'type' => '`$STRING`',
              'req' => true,
              'format' => 'date-time',
            ],
            [
              'name' => 'externalReferenceLineItemID',
              'title' => 'External Reference Line Item Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'lineItemActionHistory',
              'title' => 'Line Item Action History',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'lineItemActionReason',
              'title' => 'Line Item Action Reason',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'lineItemErrors',
              'title' => 'Line Item Errors',
              'type' => '`$ARRAY`',
              'short' => 'Errors related to the line item',
            ],
            [
              'name' => 'lineNumber',
              'title' => 'Line Number',
              'type' => '`$INTEGER`',
              'req' => true,
              'format' => 'int32',
            ],
            [
              'name' => 'orderNotes',
              'title' => 'Order Notes',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'orderSource',
              'title' => 'Order Source',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'orderStatus',
              'title' => 'Order Status',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'ptid',
              'title' => 'Ptid',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'purchaseOrderNumber',
              'title' => 'Purchase Order Number',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'quantity',
              'title' => 'Quantity',
              'type' => '`$INTEGER`',
              'short' => 'quantity of line items',
              'format' => 'int32',
            ],
            [
              'name' => 'recipient',
              'title' => 'Recipient',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'redemptionHistory',
              'title' => 'Redemption History',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'referenceLineItemID',
              'title' => 'Reference Line Item Id',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'referenceOrderID',
              'title' => 'Reference Order Id',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'reissuedFromReferenceLineItemId',
              'title' => 'Reissued From Reference Line Item Id',
              'type' => '`$STRING`',
              'short' => 'Reissued from reference line item ID',
            ],
            [
              'name' => 'reissuedToReferenceLineItemId',
              'title' => 'Reissued To Reference Line Item Id',
              'type' => '`$STRING`',
              'short' => 'Reissued to reference line item ID',
            ],
            [
              'name' => 'remainingBalance',
              'title' => 'Remaining Balance',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'resendHistory',
              'title' => 'Resend History',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'reward',
              'title' => 'Reward',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'rewardName',
              'title' => 'Reward Name',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'rewardStatus',
              'title' => 'Reward Status',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'rewardViewHistory',
              'title' => 'Reward View History',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'sender',
              'title' => 'Sender',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'utid',
              'title' => 'Utid',
              'type' => '`$STRING`',
              'req' => true,
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'line_item',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/lineItems/{referenceLineItemID}/cancel',
                  'segments' => [
                    [
                      'lit' => 'lineItems',
                    ],
                    [
                      'var' => 'reference_line_item_id',
                    ],
                    [
                      'lit' => 'cancel',
                    ],
                  ],
                  'parts' => [
                    'lineItems',
                    '{reference_line_item_id}',
                    'cancel',
                  ],
                  'rename' => [
                    'param' => [
                      'referenceLineItemID' => 'reference_line_item_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'reference_line_item_id',
                        'orig' => 'reference_line_item_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'cancel',
                    'exist' => [
                      'reference_line_item_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/lineItems/{referenceLineItemID}/freeze',
                  'segments' => [
                    [
                      'lit' => 'lineItems',
                    ],
                    [
                      'var' => 'reference_line_item_id',
                    ],
                    [
                      'lit' => 'freeze',
                    ],
                  ],
                  'parts' => [
                    'lineItems',
                    '{reference_line_item_id}',
                    'freeze',
                  ],
                  'rename' => [
                    'param' => [
                      'referenceLineItemID' => 'reference_line_item_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'reference_line_item_id',
                        'orig' => 'reference_line_item_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'freeze',
                    'exist' => [
                      'reference_line_item_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/lineItems/{referenceLineItemID}/unfreeze',
                  'segments' => [
                    [
                      'lit' => 'lineItems',
                    ],
                    [
                      'var' => 'reference_line_item_id',
                    ],
                    [
                      'lit' => 'unfreeze',
                    ],
                  ],
                  'parts' => [
                    'lineItems',
                    '{reference_line_item_id}',
                    'unfreeze',
                  ],
                  'rename' => [
                    'param' => [
                      'referenceLineItemID' => 'reference_line_item_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'reference_line_item_id',
                        'orig' => 'reference_line_item_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'unfreeze',
                    'exist' => [
                      'reference_line_item_id',
                    ],
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/lineItems',
                  'segments' => [
                    [
                      'lit' => 'lineItems',
                    ],
                  ],
                  'parts' => [
                    'lineItems',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'account_identifier',
                        'orig' => 'account_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'campaign',
                        'orig' => 'campaign',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'column_sort_ascending',
                        'orig' => 'column_sort_ascending',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'false',
                      ],
                      [
                        'name' => 'column_sort_name',
                        'orig' => 'column_sort_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'dateIssued',
                      ],
                      [
                        'name' => 'delivery_method',
                        'orig' => 'delivery_method',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'delivery_status',
                        'orig' => 'delivery_status',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'elements_per_block',
                        'orig' => 'elements_per_block',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'email_status',
                        'orig' => 'email_status',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'end_date',
                        'orig' => 'end_date',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'etid',
                        'orig' => 'etid',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'external_ref_id',
                        'orig' => 'external_ref_id',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'has_remaining_balance',
                        'orig' => 'has_remaining_balance',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'max_remaining_balance',
                        'orig' => 'max_remaining_balance',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'min_remaining_balance',
                        'orig' => 'min_remaining_balance',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'order_note',
                        'orig' => 'order_note',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'order_source',
                        'orig' => 'order_source',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'order_status',
                        'orig' => 'order_status',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'page_key',
                        'orig' => 'page_key',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'page_previous',
                        'orig' => 'page_previous',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => false,
                      ],
                      [
                        'name' => 'ptid',
                        'orig' => 'ptid',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'purchase_order_number',
                        'orig' => 'purchase_order_number',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'recipient_city',
                        'orig' => 'recipient_city',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'recipient_country',
                        'orig' => 'recipient_country',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'recipient_email',
                        'orig' => 'recipient_email',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'recipient_first_name',
                        'orig' => 'recipient_first_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'recipient_last_name',
                        'orig' => 'recipient_last_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'recipient_mobile_number',
                        'orig' => 'recipient_mobile_number',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'recipient_postal_code',
                        'orig' => 'recipient_postal_code',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'recipient_state_or_province',
                        'orig' => 'recipient_state_or_province',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'recipient_street_line1',
                        'orig' => 'recipient_street_line1',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'recipient_street_line2',
                        'orig' => 'recipient_street_line2',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'reference_order_id',
                        'orig' => 'reference_order_id',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'start_date',
                        'orig' => 'start_date',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'utid',
                        'orig' => 'utid',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_identifier',
                      'campaign',
                      'column_sort_ascending',
                      'column_sort_name',
                      'delivery_method',
                      'delivery_status',
                      'elements_per_block',
                      'email_status',
                      'end_date',
                      'etid',
                      'external_ref_id',
                      'has_remaining_balance',
                      'max_remaining_balance',
                      'min_remaining_balance',
                      'order_note',
                      'order_source',
                      'order_status',
                      'page_key',
                      'page_previous',
                      'ptid',
                      'purchase_order_number',
                      'recipient_city',
                      'recipient_country',
                      'recipient_email',
                      'recipient_first_name',
                      'recipient_last_name',
                      'recipient_mobile_number',
                      'recipient_postal_code',
                      'recipient_state_or_province',
                      'recipient_street_line1',
                      'recipient_street_line2',
                      'reference_order_id',
                      'start_date',
                      'status',
                      'utid',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/lineItems/{referenceLineItemID}',
                  'segments' => [
                    [
                      'lit' => 'lineItems',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'lineItems',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'referenceLineItemID' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'reference_line_item_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'low_balance_alert_list_view' => [
          'fields' => [
            [
              'name' => 'accountIdentifier',
              'title' => 'Account Identifier',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'balanceAlertDisplayName',
              'title' => 'Balance Alert Display Name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'balanceAlertID',
              'title' => 'Balance Alert Id',
              'type' => '`$STRING`',
              'format' => 'uuid',
            ],
            [
              'name' => 'balanceAlertNotification',
              'title' => 'Balance Alert Notification',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'balanceAlertThreshold',
              'title' => 'Balance Alert Threshold',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'customerIdentifier',
              'title' => 'Customer Identifier',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'low_balance_alert_list_view',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance',
                  'segments' => [
                    [
                      'lit' => 'customers',
                    ],
                    [
                      'var' => 'customer_identifier',
                    ],
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_identifier',
                    ],
                    [
                      'lit' => 'lowbalance',
                    ],
                  ],
                  'parts' => [
                    'customers',
                    '{customer_identifier}',
                    'accounts',
                    '{account_identifier}',
                    'lowbalance',
                  ],
                  'rename' => [
                    'param' => [
                      'accountIdentifier' => 'account_identifier',
                      'customerIdentifier' => 'customer_identifier',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_identifier',
                        'orig' => 'account_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'customer_identifier',
                        'orig' => 'customer_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'balance_alert_display_name',
                        'orig' => 'balance_alert_display_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'balance_alert_notification',
                        'orig' => 'balance_alert_notification',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'balance_alert_threshold',
                        'orig' => 'balance_alert_threshold',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'elements_per_block',
                        'orig' => 'elements_per_block',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_identifier',
                      'balance_alert_display_name',
                      'balance_alert_notification',
                      'balance_alert_threshold',
                      'customer_identifier',
                      'elements_per_block',
                      'page',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.customer',
                '$.main.kit.entity.account',
              ],
            ],
          ],
        ],
        'low_balance_alert_view' => [
          'fields' => [
            [
              'name' => 'accountIdentifier',
              'title' => 'Account Identifier',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'balanceAlertDisplayName',
              'title' => 'Balance Alert Display Name',
              'type' => '`$STRING`',
              'short' => 'A friendly name for this low balance alert (will be displayed in the Tango Portal).',
            ],
            [
              'name' => 'balanceAlertID',
              'title' => 'Balance Alert Id',
              'type' => '`$STRING`',
              'format' => 'uuid',
            ],
            [
              'name' => 'balanceAlertNotification',
              'title' => 'Balance Alert Notification',
              'type' => '`$ARRAY`',
              'short' => 'Send low balance notification emails to the following address(es).',
            ],
            [
              'name' => 'balanceAlertThreshold',
              'title' => 'Balance Alert Threshold',
              'type' => '`$NUMBER`',
              'short' => 'The threshold amount that will trigger the low balance alert.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'customerIdentifier',
              'title' => 'Customer Identifier',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'low_balance_alert_view',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance',
                  'segments' => [
                    [
                      'lit' => 'customers',
                    ],
                    [
                      'var' => 'customer_identifier',
                    ],
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_identifier',
                    ],
                    [
                      'lit' => 'lowbalance',
                    ],
                  ],
                  'parts' => [
                    'customers',
                    '{customer_identifier}',
                    'accounts',
                    '{account_identifier}',
                    'lowbalance',
                  ],
                  'rename' => [
                    'param' => [
                      'accountIdentifier' => 'account_identifier',
                      'customerIdentifier' => 'customer_identifier',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_identifier',
                        'orig' => 'account_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'customer_identifier',
                        'orig' => 'customer_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_identifier',
                      'customer_identifier',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}',
                  'segments' => [
                    [
                      'lit' => 'customers',
                    ],
                    [
                      'var' => 'customer_identifier',
                    ],
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'lowbalance',
                    ],
                    [
                      'var' => 'balance_alert_id',
                    ],
                  ],
                  'parts' => [
                    'customers',
                    '{customer_identifier}',
                    'accounts',
                    '{account_id}',
                    'lowbalance',
                    '{balance_alert_id}',
                  ],
                  'rename' => [
                    'param' => [
                      'accountIdentifier' => 'account_id',
                      'balanceAlertID' => 'balance_alert_id',
                      'customerIdentifier' => 'customer_identifier',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'balance_alert_id',
                        'orig' => 'balance_alert_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'customer_identifier',
                        'orig' => 'customer_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'balance_alert_id',
                      'customer_identifier',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}',
                  'segments' => [
                    [
                      'lit' => 'customers',
                    ],
                    [
                      'var' => 'customer_identifier',
                    ],
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'lowbalance',
                    ],
                    [
                      'var' => 'balance_alert_id',
                    ],
                  ],
                  'parts' => [
                    'customers',
                    '{customer_identifier}',
                    'accounts',
                    '{account_id}',
                    'lowbalance',
                    '{balance_alert_id}',
                  ],
                  'rename' => [
                    'param' => [
                      'accountIdentifier' => 'account_id',
                      'balanceAlertID' => 'balance_alert_id',
                      'customerIdentifier' => 'customer_identifier',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'balance_alert_id',
                        'orig' => 'balance_alert_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'customer_identifier',
                        'orig' => 'customer_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'balance_alert_id',
                      'customer_identifier',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.customer',
                '$.main.kit.entity.account',
              ],
              [
                '$.main.kit.entity.customer',
                '$.main.kit.entity.account',
              ],
            ],
          ],
        ],
        'mobile_country' => [
          'fields' => [
            [
              'name' => 'countryCode',
              'title' => 'Country Code',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'countryName',
              'title' => 'Country Name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'isoCode',
              'title' => 'Iso Code',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'languageCode',
              'title' => 'Language Code',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'mobile_country',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/mobileCountries',
                  'segments' => [
                    [
                      'lit' => 'mobileCountries',
                    ],
                  ],
                  'parts' => [
                    'mobileCountries',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'n14_webhook' => [
          'fields' => [
            [
              'name' => 'categories',
              'title' => 'Categories',
              'type' => '`$ARRAY`',
              'short' => 'The categories the customer wants to subscribe to.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'short' => 'The date and time the webhook was created.',
              'format' => 'date-time',
            ],
            [
              'name' => 'eventTypes',
              'title' => 'Event Types',
              'type' => '`$ARRAY`',
              'short' => 'The event types the customer wants to subscribe to.',
            ],
            [
              'name' => 'expiresAt',
              'title' => 'Expires At',
              'type' => '`$STRING`',
              'short' => 'The date and time the webhook expires.',
              'format' => 'date-time',
            ],
            [
              'name' => 'headers',
              'title' => 'Headers',
              'type' => '`$ARRAY`',
              'short' => 'Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.',
            ],
            [
              'name' => 'hmacSharedSecretKey',
              'title' => 'Hmac Shared Secret Key',
              'type' => '`$STRING`',
              'short' => 'The HMAC secret key used to sign the webhook payload.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'payloadVerificationMethod',
              'title' => 'Payload Verification Method',
              'type' => '`$STRING`',
              'short' => 'Method to verify webhook payload authenticity',
            ],
            [
              'name' => 'signingCertificate',
              'title' => 'Signing Certificate',
              'type' => '`$STRING`',
              'short' => 'The public X509 certificate used to sign the webhook payload.',
            ],
            [
              'name' => 'updatedAt',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the webhook was last updated.',
              'format' => 'date-time',
            ],
            [
              'name' => 'url',
              'title' => 'Url',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'list' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'The URL of the customer\'s webhook listener.',
            ],
            [
              'name' => 'webhookId',
              'title' => 'Webhook Id',
              'type' => '`$STRING`',
              'short' => 'The ID of the webhook.',
              'format' => 'uuid',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'n14_webhook',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/webhooks/{webhookId}/tests/{testName}',
                  'segments' => [
                    [
                      'lit' => 'webhooks',
                    ],
                    [
                      'var' => 'webhook_id',
                    ],
                    [
                      'lit' => 'tests',
                    ],
                    [
                      'var' => 'test_name',
                    ],
                  ],
                  'parts' => [
                    'webhooks',
                    '{webhook_id}',
                    'tests',
                    '{test_name}',
                  ],
                  'rename' => [
                    'param' => [
                      'testName' => 'test_name',
                      'webhookId' => 'webhook_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'test_name',
                        'orig' => 'test_name',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'webhook_id',
                        'orig' => 'webhook_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'test_name',
                      'webhook_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/webhooks/{webhookId}/tests',
                  'segments' => [
                    [
                      'lit' => 'webhooks',
                    ],
                    [
                      'var' => 'webhook_id',
                    ],
                    [
                      'lit' => 'tests',
                    ],
                  ],
                  'parts' => [
                    'webhooks',
                    '{webhook_id}',
                    'tests',
                  ],
                  'rename' => [
                    'param' => [
                      'webhookId' => 'webhook_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'webhook_id',
                        'orig' => 'webhook_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'webhook_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/webhooks',
                  'segments' => [
                    [
                      'lit' => 'webhooks',
                    ],
                  ],
                  'parts' => [
                    'webhooks',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/webhooks',
                  'segments' => [
                    [
                      'lit' => 'webhooks',
                    ],
                  ],
                  'parts' => [
                    'webhooks',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'category',
                        'orig' => 'category',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'created_at_from',
                        'orig' => 'created_at_from',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'created_at_to',
                        'orig' => 'created_at_to',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'event_type',
                        'orig' => 'event_type',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'expires_at_from',
                        'orig' => 'expires_at_from',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'expires_at_to',
                        'orig' => 'expires_at_to',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'header_name',
                        'orig' => 'header_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'header_value',
                        'orig' => 'header_value',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'max_result',
                        'orig' => 'max_result',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 10,
                      ],
                      [
                        'name' => 'next_cursor',
                        'orig' => 'next_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'prev_cursor',
                        'orig' => 'prev_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'url',
                        'orig' => 'url',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'category',
                      'created_at_from',
                      'created_at_to',
                      'event_type',
                      'expires_at_from',
                      'expires_at_to',
                      'header_name',
                      'header_value',
                      'max_result',
                      'next_cursor',
                      'prev_cursor',
                      'url',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/webhooks/{webhookId}/events',
                  'segments' => [
                    [
                      'lit' => 'webhooks',
                    ],
                    [
                      'var' => 'webhook_id',
                    ],
                    [
                      'lit' => 'events',
                    ],
                  ],
                  'parts' => [
                    'webhooks',
                    '{webhook_id}',
                    'events',
                  ],
                  'rename' => [
                    'param' => [
                      'webhookId' => 'webhook_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'webhook_id',
                        'orig' => 'webhook_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'from_revision',
                        'orig' => 'from_revision',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'max_result',
                        'orig' => 'max_result',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'next_cursor',
                        'orig' => 'next_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'prev_cursor',
                        'orig' => 'prev_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'to_revision',
                        'orig' => 'to_revision',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'from_revision',
                      'max_result',
                      'next_cursor',
                      'prev_cursor',
                      'to_revision',
                      'webhook_id',
                    ],
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/webhooks/{webhookId}',
                  'segments' => [
                    [
                      'lit' => 'webhooks',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'webhooks',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'webhookId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'webhook_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.webhook',
              ],
              [
                '$.main.kit.entity.webhook',
              ],
            ],
          ],
        ],
        'n1_customer' => [
          'fields' => [],
          'name' => 'n1_customer',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/customers/{customerIdentifier}/accounts',
                  'segments' => [
                    [
                      'lit' => 'customers',
                    ],
                    [
                      'var' => 'customer_identifier',
                    ],
                    [
                      'lit' => 'accounts',
                    ],
                  ],
                  'parts' => [
                    'customers',
                    '{customer_identifier}',
                    'accounts',
                  ],
                  'rename' => [
                    'param' => [
                      'customerIdentifier' => 'customer_identifier',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'customer_identifier',
                        'orig' => 'customer_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'account_number',
                        'orig' => 'account_number',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'contact_email',
                        'orig' => 'contact_email',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'currency_code',
                        'orig' => 'currency_code',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'display_name',
                        'orig' => 'display_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'funding_notification_email',
                        'orig' => 'funding_notification_email',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'max_balance',
                        'orig' => 'max_balance',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'max_date_created_at',
                        'orig' => 'max_date_created_at',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'max_result',
                        'orig' => 'max_result',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'min_balance',
                        'orig' => 'min_balance',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'min_date_created_at',
                        'orig' => 'min_date_created_at',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'next_cursor',
                        'orig' => 'next_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'paginate',
                        'orig' => 'paginate',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'prev_cursor',
                        'orig' => 'prev_cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_number',
                      'contact_email',
                      'currency_code',
                      'customer_identifier',
                      'display_name',
                      'funding_notification_email',
                      'max_balance',
                      'max_date_created_at',
                      'max_result',
                      'min_balance',
                      'min_date_created_at',
                      'next_cursor',
                      'paginate',
                      'prev_cursor',
                      'status',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.customer',
              ],
            ],
          ],
        ],
        'n8_line_item' => [
          'fields' => [
            [
              'name' => 'campaign',
              'title' => 'Campaign',
              'type' => '`$STRING`',
              'short' => 'optional campaign that may be used to administratively categorize a specific order.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'orderNotes',
              'title' => 'Order Notes',
              'type' => '`$STRING`',
              'short' => 'Optional order notes (up to 150 characters)',
            ],
            [
              'name' => 'purchaseOrderNumber',
              'title' => 'Purchase Order Number',
              'type' => '`$STRING`',
              'short' => 'The Purchase Order Number associated with this order.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'n8_line_item',
          'op' => [
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/lineItems/{referenceLineItemID}',
                  'segments' => [
                    [
                      'lit' => 'lineItems',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'lineItems',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'referenceLineItemID' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'reference_line_item_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'n9_digital_template' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'n9_digital_template',
          'op' => [
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/digitalTemplates/{etid}',
                  'segments' => [
                    [
                      'lit' => 'digitalTemplates',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'digitalTemplates',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'etid' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'etid',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
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
              'title' => 'Account Identifier',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Specify the account this order will be deducted from',
            ],
            [
              'name' => 'accountNumber',
              'title' => 'Account Number',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'amount',
              'title' => 'Amount',
              'type' => '`$NUMBER`',
              'req' => true,
              'short' => 'Specify the face value of of the reward.',
            ],
            [
              'name' => 'amountCharged',
              'title' => 'Amount Charged',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'asyncOrderEntity',
              'title' => 'Async Order Entity',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'campaign',
              'title' => 'Campaign',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'create' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'Optional.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'customFields',
              'title' => 'Custom Fields',
              'type' => '`$OBJECT`',
              'short' => 'Optional.',
            ],
            [
              'name' => 'customerIdentifier',
              'title' => 'Customer Identifier',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Specify the customer associated with the order.',
            ],
            [
              'name' => 'deliveryMethod',
              'title' => 'Delivery Method',
              'type' => '`$STRING`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'Specify delivery method for the order',
            ],
            [
              'name' => 'denomination',
              'title' => 'Denomination',
              'type' => '`$OBJECT`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
            ],
            [
              'name' => 'emailSubject',
              'title' => 'Email Subject',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'create' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'Optional.',
            ],
            [
              'name' => 'etid',
              'title' => 'Etid',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'create' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'Optional.',
            ],
            [
              'name' => 'expirationDate',
              'title' => 'Expiration Date',
              'type' => '`$STRING`',
              'short' => 'Optional for Promo Links, the exact calendar date the Promo Link will expire.',
            ],
            [
              'name' => 'externalRefID',
              'title' => 'External Ref Id',
              'type' => '`$STRING`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'Optional.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'lineItemStatus',
              'title' => 'Line Item Status',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'message',
              'title' => 'Message',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'create' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'Optional gift message',
            ],
            [
              'name' => 'notes',
              'title' => 'Notes',
              'type' => '`$STRING`',
              'short' => 'Optional order notes.',
            ],
            [
              'name' => 'orderClientSource',
              'title' => 'Order Client Source',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'orderExternalRefIdDupe',
              'title' => 'Order External Ref Id Dupe',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'orderStatus',
              'title' => 'Order Status',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ptid',
              'title' => 'Ptid',
              'type' => '`$STRING`',
              'short' => 'Only required for Printed Reward Links, the unique identifier for the Printed Reward Link Template provided in the Tango Portal on the Printed Template page.',
            ],
            [
              'name' => 'purchaseOrderNumber',
              'title' => 'Purchase Order Number',
              'type' => '`$STRING`',
              'short' => 'The Purchase Order Number associated with this order.',
            ],
            [
              'name' => 'recipient',
              'title' => 'Recipient',
              'type' => '`$OBJECT`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'Required if deliveryMethod is EMAIL, PHONE, or ADDRESS.',
            ],
            [
              'name' => 'redemptionInstructions',
              'title' => 'Redemption Instructions',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'referenceLineItemID',
              'title' => 'Reference Line Item Id',
              'type' => '`$STRING`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'referenceOrderID',
              'title' => 'Reference Order Id',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'reward',
              'title' => 'Reward',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'rewardName',
              'title' => 'Reward Name',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'sendEmail',
              'title' => 'Send Email',
              'type' => '`$BOOLEAN`',
              'short' => 'Deprecated Oct 1, 2025.',
              'deprecated' => true,
            ],
            [
              'name' => 'sender',
              'title' => 'Sender',
              'type' => '`$OBJECT`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'Optional.',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'utid',
              'title' => 'Utid',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The unique identifier for the reward you are sending as provided in the Get Catalog call',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'order',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/orders',
                  'segments' => [
                    [
                      'lit' => 'orders',
                    ],
                  ],
                  'parts' => [
                    'orders',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/orders',
                  'segments' => [
                    [
                      'lit' => 'orders',
                    ],
                  ],
                  'parts' => [
                    'orders',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'account_identifier',
                        'orig' => 'account_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'campaign',
                        'orig' => 'campaign',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'currency_code',
                        'orig' => 'currency_code',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'customer_identifier',
                        'orig' => 'customer_identifier',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'delivery_method',
                        'orig' => 'delivery_method',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'elements_per_block',
                        'orig' => 'elements_per_block',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'end_date',
                        'orig' => 'end_date',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'external_ref_id',
                        'orig' => 'external_ref_id',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'line_item_note',
                        'orig' => 'line_item_note',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'line_item_status',
                        'orig' => 'line_item_status',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'max_amount',
                        'orig' => 'max_amount',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'min_amount',
                        'orig' => 'min_amount',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'note',
                        'orig' => 'note',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'order_status',
                        'orig' => 'order_status',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'ptid',
                        'orig' => 'ptid',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'purchase_order_number',
                        'orig' => 'purchase_order_number',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'recipient_email',
                        'orig' => 'recipient_email',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'recipient_first_name',
                        'orig' => 'recipient_first_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'recipient_last_name',
                        'orig' => 'recipient_last_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'recipient_mobile_number',
                        'orig' => 'recipient_mobile_number',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'reward_name',
                        'orig' => 'reward_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'send_email',
                        'orig' => 'send_email',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'sender_email',
                        'orig' => 'sender_email',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'sender_first_name',
                        'orig' => 'sender_first_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'sender_last_name',
                        'orig' => 'sender_last_name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'start_date',
                        'orig' => 'start_date',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'utid',
                        'orig' => 'utid',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_identifier',
                      'campaign',
                      'currency_code',
                      'customer_identifier',
                      'delivery_method',
                      'elements_per_block',
                      'end_date',
                      'external_ref_id',
                      'line_item_note',
                      'line_item_status',
                      'max_amount',
                      'min_amount',
                      'note',
                      'order_status',
                      'page',
                      'ptid',
                      'purchase_order_number',
                      'recipient_email',
                      'recipient_first_name',
                      'recipient_last_name',
                      'recipient_mobile_number',
                      'reward_name',
                      'send_email',
                      'sender_email',
                      'sender_first_name',
                      'sender_last_name',
                      'start_date',
                      'status',
                      'utid',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/orders/{referenceOrderID}',
                  'segments' => [
                    [
                      'lit' => 'orders',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'orders',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'referenceOrderID' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'reference_order_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'order_view_summary' => [
          'fields' => [
            [
              'name' => 'amount',
              'title' => 'Amount',
              'type' => '`$NUMBER`',
              'short' => 'Optional.',
            ],
            [
              'name' => 'deliveryMethod',
              'title' => 'Delivery Method',
              'type' => '`$STRING`',
              'short' => 'Optional.',
            ],
            [
              'name' => 'notes',
              'title' => 'Notes',
              'type' => '`$STRING`',
              'short' => 'Optional order notes (up to 150 characters).',
            ],
            [
              'name' => 'otherReason',
              'title' => 'Other Reason',
              'type' => '`$STRING`',
              'short' => 'Required when reasonCode is "OTHER", enter the reason why the line item is being reissued.',
            ],
            [
              'name' => 'reasonCode',
              'title' => 'Reason Code',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Required.',
            ],
            [
              'name' => 'recipient',
              'title' => 'Recipient',
              'type' => '`$OBJECT`',
              'short' => 'Optional.',
            ],
          ],
          'name' => 'order_view_summary',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/lineItems/{referenceLineItemID}/reissue',
                  'segments' => [
                    [
                      'lit' => 'lineItems',
                    ],
                    [
                      'var' => 'reference_line_item_id',
                    ],
                    [
                      'lit' => 'reissue',
                    ],
                  ],
                  'parts' => [
                    'lineItems',
                    '{reference_line_item_id}',
                    'reissue',
                  ],
                  'rename' => [
                    'param' => [
                      'referenceLineItemID' => 'reference_line_item_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'reference_line_item_id',
                        'orig' => 'reference_line_item_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'reference_line_item_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.line_item',
              ],
            ],
          ],
        ],
        'prepaid_card_info' => [
          'fields' => [
            [
              'name' => 'balance',
              'title' => 'Balance',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'card',
              'title' => 'Card',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'comments',
              'title' => 'Comments',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'registration',
              'title' => 'Registration',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'prepaid_card_info',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/prepaidCardService/getCardInfo/{referenceLineItemID}',
                  'segments' => [
                    [
                      'lit' => 'prepaidCardService',
                    ],
                    [
                      'lit' => 'getCardInfo',
                    ],
                    [
                      'var' => 'reference_line_item_id',
                    ],
                  ],
                  'parts' => [
                    'prepaidCardService',
                    'getCardInfo',
                    '{reference_line_item_id}',
                  ],
                  'rename' => [
                    'param' => [
                      'referenceLineItemID' => 'reference_line_item_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'reference_line_item_id',
                        'orig' => 'reference_line_item_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'reference_line_item_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'prepaid_card_transaction' => [
          'fields' => [
            [
              'name' => 'journal',
              'title' => 'Journal',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'page',
              'title' => 'Page',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
          ],
          'name' => 'prepaid_card_transaction',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/prepaidCardService/getCardTransactions/{referenceLineItemID}',
                  'segments' => [
                    [
                      'lit' => 'prepaidCardService',
                    ],
                    [
                      'lit' => 'getCardTransactions',
                    ],
                    [
                      'var' => 'reference_line_item_id',
                    ],
                  ],
                  'parts' => [
                    'prepaidCardService',
                    'getCardTransactions',
                    '{reference_line_item_id}',
                  ],
                  'rename' => [
                    'param' => [
                      'referenceLineItemID' => 'reference_line_item_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'reference_line_item_id',
                        'orig' => 'reference_line_item_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 0,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'page',
                      'reference_line_item_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'reissue_card' => [
          'fields' => [
            [
              'name' => 'commentText',
              'title' => 'Comment Text',
              'type' => '`$STRING`',
              'short' => 'Optional comment for the card replacement.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'reason',
              'title' => 'Reason',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Reason for the card replacement.',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'short' => 'Status of the reissue request.',
            ],
            [
              'name' => 'updatedBy',
              'title' => 'Updated By',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Identifier of the agent initiating the request.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'reissue_card',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/prepaidCardService/reissueCard/{referenceLineItemID}',
                  'segments' => [
                    [
                      'lit' => 'prepaidCardService',
                    ],
                    [
                      'lit' => 'reissueCard',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'prepaidCardService',
                    'reissueCard',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'referenceLineItemID' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'reference_line_item_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'replacement_reason' => [
          'fields' => [
            [
              'name' => 'replacementReasons',
              'title' => 'Replacement Reasons',
              'type' => '`$ARRAY`',
              'short' => 'List of valid replacement reason codes.',
            ],
          ],
          'name' => 'replacement_reason',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/prepaidCardService/replacementReasons',
                  'segments' => [
                    [
                      'lit' => 'prepaidCardService',
                    ],
                    [
                      'lit' => 'replacementReasons',
                    ],
                  ],
                  'parts' => [
                    'prepaidCardService',
                    'replacementReasons',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.replacementReasons`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'resend' => [
          'fields' => [
            [
              'name' => 'newDeliveryMethod',
              'title' => 'New Delivery Method',
              'type' => '`$STRING`',
              'short' => 'The delivery method used to re-deliver the reward.',
            ],
            [
              'name' => 'newEmail',
              'title' => 'New Email',
              'type' => '`$STRING`',
              'short' => 'A new email address to re-deliver this order to.',
            ],
            [
              'name' => 'newEtid',
              'title' => 'New Etid',
              'type' => '`$STRING`',
              'short' => 'A new etid used to re-deliver an order.',
            ],
            [
              'name' => 'newMobile',
              'title' => 'New Mobile',
              'type' => '`$STRING`',
              'short' => 'A new mobile number to use for resending an order.',
            ],
            [
              'name' => 'newMobileNumber',
              'title' => 'New Mobile Number',
              'type' => '`$STRING`',
              'short' => 'A new phone number to re-deliver this order to.',
            ],
            [
              'name' => 'otherReason',
              'title' => 'Other Reason',
              'type' => '`$STRING`',
              'short' => 'Required when lineItemResendReasonCode is "OTHER", enter the reason why the line item is being RESENT',
            ],
            [
              'name' => 'reasonCode',
              'title' => 'Reason Code',
              'type' => '`$STRING`',
              'short' => 'Enter the reason why this line item is being RESENT (respectively)',
            ],
          ],
          'name' => 'resend',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/lineItems/{referenceLineItemId}/resends',
                  'segments' => [
                    [
                      'lit' => 'lineItems',
                    ],
                    [
                      'var' => 'line_item_id',
                    ],
                    [
                      'lit' => 'resends',
                    ],
                  ],
                  'parts' => [
                    'lineItems',
                    '{line_item_id}',
                    'resends',
                  ],
                  'rename' => [
                    'param' => [
                      'referenceLineItemId' => 'line_item_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'line_item_id',
                        'orig' => 'reference_line_item_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'line_item_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/orders/{referenceOrderID}/resends',
                  'segments' => [
                    [
                      'lit' => 'orders',
                    ],
                    [
                      'var' => 'reference_order_id',
                    ],
                    [
                      'lit' => 'resends',
                    ],
                  ],
                  'parts' => [
                    'orders',
                    '{reference_order_id}',
                    'resends',
                  ],
                  'rename' => [
                    'param' => [
                      'referenceOrderID' => 'reference_order_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'reference_order_id',
                        'orig' => 'reference_order_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'reference_order_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.line_item',
              ],
              [
                '$.main.kit.entity.order',
              ],
            ],
          ],
        ],
        'reward_reasons_map' => [
          'fields' => [
            [
              'name' => 'CANCEL',
              'title' => 'Cancel',
              'type' => '`$OBJECT`',
              'short' => 'Map of cancel reasons',
            ],
            [
              'name' => 'CANCEL_AND_REISSUE',
              'title' => 'Cancel And Reissue',
              'type' => '`$OBJECT`',
              'short' => 'Map of cancel and reissue reasons',
            ],
            [
              'name' => 'FREEZE',
              'title' => 'Freeze',
              'type' => '`$OBJECT`',
              'short' => 'Map of freeze reasons',
            ],
            [
              'name' => 'UNFREEZE',
              'title' => 'Unfreeze',
              'type' => '`$OBJECT`',
              'short' => 'Map of unfreeze reasons',
            ],
          ],
          'name' => 'reward_reasons_map',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/lineItems/reasonCodes',
                  'segments' => [
                    [
                      'lit' => 'lineItems',
                    ],
                    [
                      'lit' => 'reasonCodes',
                    ],
                  ],
                  'parts' => [
                    'lineItems',
                    'reasonCodes',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'transfer_fund' => [
          'fields' => [
            [
              'name' => 'amount',
              'title' => 'Amount',
              'type' => '`$NUMBER`',
              'req' => true,
              'short' => 'Specify the currency amount of the funds being transferred.',
            ],
            [
              'name' => 'externalRefID',
              'title' => 'External Ref Id',
              'type' => '`$STRING`',
              'short' => 'specify the external reference id to associate with this funding action.',
            ],
            [
              'name' => 'transferDate',
              'title' => 'Transfer Date',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'transferFrom',
              'title' => 'Transfer From',
              'type' => '`$OBJECT`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'The accountIdentifier for the Account transferring funds from.',
            ],
            [
              'name' => 'transferNotes',
              'title' => 'Transfer Notes',
              'type' => '`$STRING`',
              'short' => 'Optional transfer notes (up to 150 characters)',
            ],
            [
              'name' => 'transferTo',
              'title' => 'Transfer To',
              'type' => '`$OBJECT`',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'The accountIdentifier for the Account transferring funds to.',
            ],
            [
              'name' => 'transferredAmount',
              'title' => 'Transferred Amount',
              'type' => '`$NUMBER`',
            ],
          ],
          'name' => 'transfer_fund',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/transferFunds',
                  'segments' => [
                    [
                      'lit' => 'transferFunds',
                    ],
                  ],
                  'parts' => [
                    'transferFunds',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'update_account' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'registration',
              'title' => 'Registration',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'updatedBy',
              'title' => 'Updated By',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'update_account',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/prepaidCardService/updateAccount/{referenceLineItemID}',
                  'segments' => [
                    [
                      'lit' => 'prepaidCardService',
                    ],
                    [
                      'lit' => 'updateAccount',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'prepaidCardService',
                    'updateAccount',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'referenceLineItemID' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'reference_line_item_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'update_webhook_subscription_response_view' => [
          'fields' => [
            [
              'name' => 'categories',
              'title' => 'Categories',
              'type' => '`$ARRAY`',
              'short' => 'The categories the customer is subscribed to.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'short' => 'The date and time the webhook was created.',
              'format' => 'date-time',
            ],
            [
              'name' => 'eventTypes',
              'title' => 'Event Types',
              'type' => '`$ARRAY`',
              'short' => 'The event types the customer is subscribed to.',
            ],
            [
              'name' => 'expiresAt',
              'title' => 'Expires At',
              'type' => '`$STRING`',
              'short' => 'The date and time the webhook expires.',
              'format' => 'date-time',
            ],
            [
              'name' => 'headers',
              'title' => 'Headers',
              'type' => '`$ARRAY`',
              'short' => 'Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.',
            ],
            [
              'name' => 'hmacSharedSecretKey',
              'title' => 'Hmac Shared Secret Key',
              'type' => '`$STRING`',
              'short' => 'The HMAC secret key used to sign the webhook payload.',
            ],
            [
              'name' => 'payloadVerificationMethod',
              'title' => 'Payload Verification Method',
              'type' => '`$STRING`',
              'short' => 'Method to verify webhook payload integrity',
            ],
            [
              'name' => 'signingCertificate',
              'title' => 'Signing Certificate',
              'type' => '`$STRING`',
              'short' => 'The public X509 certificate used to sign the webhook payload.',
            ],
            [
              'name' => 'updatedAt',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the webhook was last updated.',
              'format' => 'date-time',
            ],
            [
              'name' => 'url',
              'title' => 'Url',
              'type' => '`$STRING`',
              'short' => 'The URL of the customer\'s webhook listener.',
            ],
            [
              'name' => 'webhookId',
              'title' => 'Webhook Id',
              'type' => '`$STRING`',
              'short' => 'The ID of the webhook.',
              'format' => 'uuid',
            ],
          ],
          'name' => 'update_webhook_subscription_response_view',
          'op' => [
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/webhooks/{webhookId}',
                  'segments' => [
                    [
                      'lit' => 'webhooks',
                    ],
                    [
                      'var' => 'webhook_id',
                    ],
                  ],
                  'parts' => [
                    'webhooks',
                    '{webhook_id}',
                  ],
                  'rename' => [
                    'param' => [
                      'webhookId' => 'webhook_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'webhook_id',
                        'orig' => 'webhook_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'webhook_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.webhook',
              ],
            ],
          ],
        ],
        'webhook' => [
          'fields' => [
            [
              'name' => 'categories',
              'title' => 'Categories',
              'type' => '`$ARRAY`',
              'short' => 'The categories the customer wants to subscribe to.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'short' => 'The date and time the webhook was created.',
              'format' => 'date-time',
            ],
            [
              'name' => 'eventTypes',
              'title' => 'Event Types',
              'type' => '`$ARRAY`',
              'short' => 'The event types the customer wants to subscribe to.',
            ],
            [
              'name' => 'expiresAt',
              'title' => 'Expires At',
              'type' => '`$STRING`',
              'short' => 'The date and time the webhook expires.',
              'format' => 'date-time',
            ],
            [
              'name' => 'headers',
              'title' => 'Headers',
              'type' => '`$ARRAY`',
              'short' => 'Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.',
            ],
            [
              'name' => 'hmacSharedSecretKey',
              'title' => 'Hmac Shared Secret Key',
              'type' => '`$STRING`',
              'short' => 'The HMAC secret key used to sign the webhook payload.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'payloadVerificationMethod',
              'title' => 'Payload Verification Method',
              'type' => '`$STRING`',
              'short' => 'Method to verify webhook payload integrity.',
            ],
            [
              'name' => 'signingCertificate',
              'title' => 'Signing Certificate',
              'type' => '`$STRING`',
              'short' => 'The public X509 certificate used to sign the webhook payload.',
            ],
            [
              'name' => 'updatedAt',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the webhook was last updated.',
              'format' => 'date-time',
            ],
            [
              'name' => 'url',
              'title' => 'Url',
              'type' => '`$STRING`',
              'short' => 'The URL of the customer\'s webhook listener.',
            ],
            [
              'name' => 'webhookId',
              'title' => 'Webhook Id',
              'type' => '`$STRING`',
              'short' => 'The ID of the webhook.',
              'format' => 'uuid',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'webhook',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/webhooks/{webhookId}/replay',
                  'segments' => [
                    [
                      'lit' => 'webhooks',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'replay',
                    ],
                  ],
                  'parts' => [
                    'webhooks',
                    '{id}',
                    'replay',
                  ],
                  'rename' => [
                    'param' => [
                      'webhookId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'webhook_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'from_revision',
                        'orig' => 'from_revision',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'to_revision',
                        'orig' => 'to_revision',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'replay',
                    'exist' => [
                      'from_revision',
                      'id',
                      'to_revision',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/webhooks/{webhookId}/renew',
                  'segments' => [
                    [
                      'lit' => 'webhooks',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'renew',
                    ],
                  ],
                  'parts' => [
                    'webhooks',
                    '{id}',
                    'renew',
                  ],
                  'rename' => [
                    'param' => [
                      'webhookId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'webhook_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'renew',
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/webhooks/{webhookId}',
                  'segments' => [
                    [
                      'lit' => 'webhooks',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'webhooks',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'webhookId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'webhook_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
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
