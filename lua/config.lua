-- Tangocard SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Tangocard",
      slug = "tangocard",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["debug"] = {
        ["options"] = {
          ["active"] = false,
          ["max"] = 100,
          ["redact"] = {
            "authorization",
            "cookie",
            "set-cookie",
            "api-key",
            "apikey",
            "x-api-key",
            "idempotency-key",
          },
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["onEntry"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["idempotency"] = {
        ["options"] = {
          ["active"] = false,
          ["header"] = "Idempotency-Key",
          ["methods"] = {
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
          },
          ["ops"] = {
            "create",
            "update",
            "remove",
          },
        },
        ["optspec"] = {
          ["keygen"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["metrics"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["paging"] = {
        ["options"] = {
          ["active"] = false,
          ["afterVar"] = "after",
          ["cursorParam"] = "cursor",
          ["firstVar"] = "first",
          ["limitParam"] = "limit",
          ["pageParam"] = "page",
          ["startPage"] = 1,
        },
        ["optspec"] = {
          ["limit"] = "`$NUMBER`",
          ["ops"] = "`$LIST`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://integration-api.tangocard.com/raas/v2",
      auth = {
        prefix = "Basic",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["account"] = {},
        ["add_comment_escalation"] = {},
        ["all_event_type"] = {},
        ["async_order"] = {},
        ["async_order_detail_view"] = {},
        ["async_order_line_items_view"] = {},
        ["async_reason_codes_view"] = {},
        ["async_update_line_item_view"] = {},
        ["balance_alert_view"] = {},
        ["brand_categories_view"] = {},
        ["catalog"] = {},
        ["choice_product"] = {},
        ["country_view_summary"] = {},
        ["create_account_criterion"] = {},
        ["create_customer_criterion"] = {},
        ["credential_type_view"] = {},
        ["credit_card"] = {},
        ["credit_card_deposit"] = {},
        ["credit_card_unregister"] = {},
        ["customer"] = {},
        ["email_template_list_view"] = {},
        ["email_template_view_verbose"] = {},
        ["embeddable_response_dto"] = {},
        ["exchange_rates_with_disclaimer"] = {},
        ["line_item"] = {},
        ["low_balance_alert_list_view"] = {},
        ["low_balance_alert_view"] = {},
        ["mobile_country"] = {},
        ["n14_webhook"] = {},
        ["n1_customer"] = {},
        ["n2_account"] = {},
        ["n3_fund"] = {},
        ["n8_line_item"] = {},
        ["n9_digital_template"] = {},
        ["order"] = {},
        ["order_view_summary"] = {},
        ["prepaid_card_info"] = {},
        ["prepaid_card_transaction"] = {},
        ["reissue_card"] = {},
        ["replacement_reason"] = {},
        ["resend"] = {},
        ["reward_reasons_map"] = {},
        ["transfer_fund"] = {},
        ["update_account"] = {},
        ["update_webhook_subscription_response_view"] = {},
        ["webhook"] = {},
      },
    },
    entity = {
      ["account"] = {
        ["fields"] = {
          {
            ["name"] = "accountIdentifier",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "accountNumber",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "contactEmail",
            ["short"] = "optional, an email address for a designated representative for this account.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "createdAt",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "currencyCode",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "currentBalance",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "displayName",
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["short"] = "optional, a friendly name for this account.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "fundingNotification",
            ["short"] = "optional, send funding notification emails to the following address(es).",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "account",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "account_number",
                      ["orig"] = "account_number",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "contact_email",
                      ["orig"] = "contact_email",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "currency_code",
                      ["orig"] = "currency_code",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "display_name",
                      ["orig"] = "display_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "funding_notification_email",
                      ["orig"] = "funding_notification_email",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "max_balance",
                      ["orig"] = "max_balance",
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "max_date_created_at",
                      ["orig"] = "max_date_created_at",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "max_result",
                      ["orig"] = "max_result",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "min_balance",
                      ["orig"] = "min_balance",
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "min_date_created_at",
                      ["orig"] = "min_date_created_at",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "next_cursor",
                      ["orig"] = "next_cursor",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "paginate",
                      ["orig"] = "paginate",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "prev_cursor",
                      ["orig"] = "prev_cursor",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "status",
                      ["orig"] = "status",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/accounts",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_number",
                    "contact_email",
                    "currency_code",
                    "display_name",
                    "funding_notification_email",
                    "max_balance",
                    "max_date_created_at",
                    "max_result",
                    "min_balance",
                    "min_date_created_at",
                    "next_cursor",
                    "paginate",
                    "prev_cursor",
                    "status",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "accounts",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "account_identifier",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/accounts/{accountIdentifier}",
                ["rename"] = {
                  ["param"] = {
                    ["accountIdentifier"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "accounts",
                  "{id}",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "customer_identifier",
                      ["orig"] = "customer_identifier",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "account_identifier",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/customers/{customerIdentifier}/accounts/{accountIdentifier}",
                ["rename"] = {
                  ["param"] = {
                    ["accountIdentifier"] = "id",
                    ["customerIdentifier"] = "customer_identifier",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "customers",
                  },
                  {
                    ["var"] = "customer_identifier",
                  },
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "customer_identifier",
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "customers",
                  "{customer_identifier}",
                  "accounts",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "customer",
            },
          },
        },
      },
      ["add_comment_escalation"] = {
        ["fields"] = {
          {
            ["format"] = "int32",
            ["name"] = "assignee",
            ["short"] = "Assignee ID.",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "commentText",
            ["req"] = true,
            ["short"] = "Free-text comment to add to the prepaid card.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "int32",
            ["name"] = "inquiryCategoryCode",
            ["short"] = "Inquiry category code.",
            ["type"] = "`$INTEGER`",
          },
          {
            ["format"] = "int32",
            ["name"] = "inquiryIdNumber",
            ["short"] = "Inquiry ID number.",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "inquirySource",
            ["short"] = "Origination source identifier (e.g.",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "int32",
            ["name"] = "inquiryTypeCode",
            ["short"] = "Inquiry type code.",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "issueDescription",
            ["req"] = true,
            ["short"] = "Short description of the issue.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["short"] = "Status of the inquiry (e.g.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "userId",
            ["short"] = "Agent or CSR user ID.",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "add_comment_escalation",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "reference_line_item_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/prepaidCardService/addCommentEscalation/{referenceLineItemID}",
                ["rename"] = {
                  ["param"] = {
                    ["referenceLineItemID"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "prepaidCardService",
                  },
                  {
                    ["lit"] = "addCommentEscalation",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "prepaidCardService",
                  "addCommentEscalation",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["all_event_type"] = {
        ["fields"] = {
          {
            ["name"] = "category",
            ["short"] = "The category of events can be subscribed to.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "eventTypes",
            ["short"] = "The event types that can be subscribed to.",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "all_event_type",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "category",
                      ["orig"] = "category",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "max_result",
                      ["orig"] = "max_result",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "next_cursor",
                      ["orig"] = "next_cursor",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "prev_cursor",
                      ["orig"] = "prev_cursor",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks/eventtypes",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks",
                  },
                  {
                    ["lit"] = "eventtypes",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "category",
                    "max_result",
                    "next_cursor",
                    "prev_cursor",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.items`",
                },
                ["parts"] = {
                  "webhooks",
                  "eventtypes",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["async_order"] = {
        ["fields"] = {
          {
            ["name"] = "accountIdentifier",
            ["req"] = true,
            ["short"] = "specify the account this order will be deducted from",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "accountNumber",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "amountCharged",
            ["short"] = "Initial value and the total charged amount on the account",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "campaign",
            ["op"] = {
              ["list"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "Optional.",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "createdAt",
            ["op"] = {
              ["list"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "customerIdentifier",
            ["req"] = true,
            ["short"] = "specify the customer associated with the order.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "duplicateLineItemRefIds",
            ["short"] = "If any duplicate duplicateLineItemRefIds exist in the request",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "externalRefID",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "Required.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "failedLineItems",
            ["short"] = "Failed line items list (business validations)",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "fulfillBy",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "lineItems",
            ["req"] = true,
            ["short"] = "Line Items of the bulk order a required field",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "notes",
            ["short"] = "Optional order notes.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "orderStatus",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "purchaseOrderNumber",
            ["short"] = "The Purchase Order Number associated with this order.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "referenceOrderID",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "sender",
            ["short"] = "Optional.",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "status",
            ["short"] = "This status reflects about cart status or validation status based on the processing",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "int32",
            ["name"] = "totalLineItems",
            ["short"] = "Total number of line items submitted in the request",
            ["type"] = "`$INTEGER`",
          },
          {
            ["format"] = "int64",
            ["name"] = "totalLineItemsRows",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "async_order",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/asyncOrders",
                ["segments"] = {
                  {
                    ["lit"] = "asyncOrders",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "asyncOrders",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "account_identifier",
                      ["orig"] = "account_identifier",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "campaign",
                      ["orig"] = "campaign",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "currency_code",
                      ["orig"] = "currency_code",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "customer_identifier",
                      ["orig"] = "customer_identifier",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "delivery_method",
                      ["orig"] = "delivery_method",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "elements_per_block",
                      ["orig"] = "elements_per_block",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "end_date",
                      ["orig"] = "end_date",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "external_ref_id",
                      ["orig"] = "external_ref_id",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "line_item_note",
                      ["orig"] = "line_item_note",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "line_item_status",
                      ["orig"] = "line_item_status",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "max_amount",
                      ["orig"] = "max_amount",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "max_result",
                      ["orig"] = "max_result",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "min_amount",
                      ["orig"] = "min_amount",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "next_cursor",
                      ["orig"] = "next_cursor",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "note",
                      ["orig"] = "note",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "order_status",
                      ["orig"] = "order_status",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "prev_cursor",
                      ["orig"] = "prev_cursor",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "ptid",
                      ["orig"] = "ptid",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "purchase_order_number",
                      ["orig"] = "purchase_order_number",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "recipient_email",
                      ["orig"] = "recipient_email",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "recipient_first_name",
                      ["orig"] = "recipient_first_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "recipient_last_name",
                      ["orig"] = "recipient_last_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "recipient_mobile_number",
                      ["orig"] = "recipient_mobile_number",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "reward_name",
                      ["orig"] = "reward_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "send_email",
                      ["orig"] = "send_email",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sender_email",
                      ["orig"] = "sender_email",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sender_first_name",
                      ["orig"] = "sender_first_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sender_last_name",
                      ["orig"] = "sender_last_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "start_date",
                      ["orig"] = "start_date",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "utid",
                      ["orig"] = "utid",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/asyncOrders",
                ["segments"] = {
                  {
                    ["lit"] = "asyncOrders",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_identifier",
                    "campaign",
                    "currency_code",
                    "customer_identifier",
                    "delivery_method",
                    "elements_per_block",
                    "end_date",
                    "external_ref_id",
                    "line_item_note",
                    "line_item_status",
                    "max_amount",
                    "max_result",
                    "min_amount",
                    "next_cursor",
                    "note",
                    "order_status",
                    "page",
                    "prev_cursor",
                    "ptid",
                    "purchase_order_number",
                    "recipient_email",
                    "recipient_first_name",
                    "recipient_last_name",
                    "recipient_mobile_number",
                    "reward_name",
                    "send_email",
                    "sender_email",
                    "sender_first_name",
                    "sender_last_name",
                    "start_date",
                    "utid",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.orders`",
                },
                ["parts"] = {
                  "asyncOrders",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["async_order_detail_view"] = {
        ["fields"] = {
          {
            ["name"] = "accountIdentifier",
            ["short"] = "Account identifier",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "amountCharged",
            ["short"] = "Initial value and the total charged amount on the account",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "campaign",
            ["short"] = "Campaign name",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "completedAt",
            ["short"] = "Order completion timestamp",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "createdAt",
            ["short"] = "Order creation timestamp",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "customerIdentifier",
            ["short"] = "Customer identifier",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "externalRefID",
            ["short"] = "External reference ID provided by client",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "lineItems",
            ["short"] = "list of line items",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "notes",
            ["short"] = "Order notes",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "orderErrors",
            ["short"] = "Order level errors",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "orderStatus",
            ["short"] = "Current status of the order",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pagination",
            ["short"] = "Pagination information",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "purchaseOrderNumber",
            ["short"] = "Purchase order number",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "referenceOrderID",
            ["short"] = "Internal reference order ID",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "sender",
            ["short"] = "Sender information",
            ["type"] = "`$OBJECT`",
          },
          {
            ["format"] = "int64",
            ["name"] = "totalLineItems",
            ["short"] = "Total number of line items",
            ["type"] = "`$INTEGER`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["from"] = {
            ["account_identifier"] = "accountIdentifier",
            ["external_ref_id"] = "externalRefID",
          },
          ["name"] = "id",
          ["parts"] = {
            "account_identifier",
            "external_ref_id",
          },
          ["sep"] = "/",
        },
        ["name"] = "async_order_detail_view",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "account_identifier",
                      ["orig"] = "account_identifier",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "customer_identifier",
                      ["orig"] = "customer_identifier",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "external_ref_id",
                      ["orig"] = "external_ref_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "external_ref_line_item_i_d",
                      ["orig"] = "external_ref_line_item_i_d",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "failed_only",
                      ["orig"] = "failed_only",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = 100,
                      ["kind"] = "query",
                      ["name"] = "max_result",
                      ["orig"] = "max_result",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = "NjI=",
                      ["kind"] = "query",
                      ["name"] = "next_cursor",
                      ["orig"] = "next_cursor",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "NjE=",
                      ["kind"] = "query",
                      ["name"] = "prev_cursor",
                      ["orig"] = "prev_cursor",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "reference_line_item_i_d",
                      ["orig"] = "reference_line_item_i_d",
                      ["type"] = "`$ARRAY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}",
                ["rename"] = {
                  ["param"] = {
                    ["accountIdentifier"] = "account_identifier",
                    ["customerIdentifier"] = "customer_identifier",
                    ["externalRefID"] = "external_ref_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "asyncOrders",
                  },
                  {
                    ["lit"] = "customers",
                  },
                  {
                    ["var"] = "customer_identifier",
                  },
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_identifier",
                  },
                  {
                    ["var"] = "external_ref_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_identifier",
                    "customer_identifier",
                    "external_ref_id",
                    "external_ref_line_item_i_d",
                    "failed_only",
                    "max_result",
                    "next_cursor",
                    "prev_cursor",
                    "reference_line_item_i_d",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "asyncOrders",
                  "customers",
                  "{customer_identifier}",
                  "accounts",
                  "{account_identifier}",
                  "{external_ref_id}",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "account_identifier",
                      ["orig"] = "account_identifier",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "customer_identifier",
                      ["orig"] = "customer_identifier",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "external_ref_id",
                      ["orig"] = "external_ref_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}",
                ["rename"] = {
                  ["param"] = {
                    ["accountIdentifier"] = "account_identifier",
                    ["customerIdentifier"] = "customer_identifier",
                    ["externalRefID"] = "external_ref_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "asyncOrders",
                  },
                  {
                    ["lit"] = "customers",
                  },
                  {
                    ["var"] = "customer_identifier",
                  },
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_identifier",
                  },
                  {
                    ["var"] = "external_ref_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_identifier",
                    "customer_identifier",
                    "external_ref_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "asyncOrders",
                  "customers",
                  "{customer_identifier}",
                  "accounts",
                  "{account_identifier}",
                  "{external_ref_id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "customer",
              "account",
            },
          },
        },
      },
      ["async_order_line_items_view"] = {
        ["fields"] = {
          {
            ["name"] = "accountIdentifier",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "amountCharged",
            ["short"] = "Initial value and the total charged amount on the account",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "campaign",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "customerIdentifier",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "externalRefID",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "lineItems",
            ["short"] = "The List of Line Items for the Async Order.",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "orderErrors",
            ["short"] = "The List of Errors for the Async Order.",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "orderNotes",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "orderStatus",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pagination",
            ["short"] = "The cursor for pagination of the async order line items.",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "purchaseOrderNumber",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "referenceOrderID",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "sender",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "async_order_line_items_view",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "account_id",
                      ["orig"] = "account_identifier",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "customer_id",
                      ["orig"] = "customer_identifier",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "external_ref_id",
                      ["orig"] = "external_ref_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "external_ref_line_item_i_d",
                      ["orig"] = "external_ref_line_item_i_d",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "failed_only",
                      ["orig"] = "failed_only",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = 50,
                      ["kind"] = "query",
                      ["name"] = "max_result",
                      ["orig"] = "max_result",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = "",
                      ["kind"] = "query",
                      ["name"] = "next_cursor",
                      ["orig"] = "next_cursor",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "",
                      ["kind"] = "query",
                      ["name"] = "prev_cursor",
                      ["orig"] = "prev_cursor",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "reference_line_item_i_d",
                      ["orig"] = "reference_line_item_i_d",
                      ["type"] = "`$ARRAY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}/lineItems",
                ["rename"] = {
                  ["param"] = {
                    ["accountIdentifier"] = "account_id",
                    ["customerIdentifier"] = "customer_id",
                    ["externalRefID"] = "external_ref_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "asyncOrders",
                  },
                  {
                    ["lit"] = "customers",
                  },
                  {
                    ["var"] = "customer_id",
                  },
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["var"] = "external_ref_id",
                  },
                  {
                    ["lit"] = "lineItems",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "customer_id",
                    "external_ref_id",
                    "external_ref_line_item_i_d",
                    "failed_only",
                    "max_result",
                    "next_cursor",
                    "prev_cursor",
                    "reference_line_item_i_d",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "asyncOrders",
                  "customers",
                  "{customer_id}",
                  "accounts",
                  "{account_id}",
                  "{external_ref_id}",
                  "lineItems",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "customer",
              "account",
            },
          },
        },
      },
      ["async_reason_codes_view"] = {
        ["fields"] = {},
        ["name"] = "async_reason_codes_view",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/asyncOrders/reasonCodes",
                ["segments"] = {
                  {
                    ["lit"] = "asyncOrders",
                  },
                  {
                    ["lit"] = "reasonCodes",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.reasonCodes`",
                },
                ["parts"] = {
                  "asyncOrders",
                  "reasonCodes",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["async_update_line_item_view"] = {
        ["fields"] = {
          {
            ["name"] = "deliveryDate",
            ["short"] = "Optional.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "lineItemNote",
            ["short"] = "Optional line item notes (up to 150 characters)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "senderInfo",
            ["short"] = "Optional.",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "async_update_line_item_view",
        ["op"] = {
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "reference_line_item_id",
                      ["orig"] = "reference_line_item_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/asyncOrders/lineItems/{referenceLineItemId}",
                ["rename"] = {
                  ["param"] = {
                    ["referenceLineItemId"] = "reference_line_item_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "asyncOrders",
                  },
                  {
                    ["lit"] = "lineItems",
                  },
                  {
                    ["var"] = "reference_line_item_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "reference_line_item_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.senderInfo`",
                },
                ["parts"] = {
                  "asyncOrders",
                  "lineItems",
                  "{reference_line_item_id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "line_item",
            },
          },
        },
      },
      ["balance_alert_view"] = {
        ["fields"] = {},
        ["name"] = "balance_alert_view",
        ["op"] = {
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "account_id",
                      ["orig"] = "account_identifier",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "balance_alert_id",
                      ["orig"] = "balance_alert_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "customer_identifier",
                      ["orig"] = "customer_identifier",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}",
                ["rename"] = {
                  ["param"] = {
                    ["accountIdentifier"] = "account_id",
                    ["balanceAlertID"] = "balance_alert_id",
                    ["customerIdentifier"] = "customer_identifier",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "customers",
                  },
                  {
                    ["var"] = "customer_identifier",
                  },
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "lowbalance",
                  },
                  {
                    ["var"] = "balance_alert_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "balance_alert_id",
                    "customer_identifier",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "customers",
                  "{customer_identifier}",
                  "accounts",
                  "{account_id}",
                  "lowbalance",
                  "{balance_alert_id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "customer",
              "account",
              "lowbalance",
            },
          },
        },
      },
      ["brand_categories_view"] = {
        ["fields"] = {
          {
            ["name"] = "description",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uuid",
            ["name"] = "identifier",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "brand_categories_view",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/brandCategories",
                ["segments"] = {
                  {
                    ["lit"] = "brandCategories",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.brandCategories`",
                },
                ["parts"] = {
                  "brandCategories",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["catalog"] = {
        ["fields"] = {
          {
            ["name"] = "barcodeType",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "brandKey",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "brandName",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "brandRequirements",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "categories",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "createdDate",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "disclaimer",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "imageUrls",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "items",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "lastUpdateDate",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "shortDescription",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "terms",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "catalog",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "choice_product_id",
                      ["orig"] = "choice_product_utid",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "brand_key",
                      ["orig"] = "brand_key",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "brand_name",
                      ["orig"] = "brand_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "category_id",
                      ["orig"] = "category_id",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "country",
                      ["orig"] = "country",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "currency_code",
                      ["orig"] = "currency_code",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "fulfillment_type",
                      ["orig"] = "fulfillment_type",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "item_attribute",
                      ["orig"] = "item_attribute",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "reward_name",
                      ["orig"] = "reward_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "reward_type",
                      ["orig"] = "reward_type",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "status",
                      ["orig"] = "status",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "utid",
                      ["orig"] = "utid",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = true,
                      ["kind"] = "query",
                      ["name"] = "verbose",
                      ["orig"] = "verbose",
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/choiceProducts/{choiceProductUtid}/catalog",
                ["rename"] = {
                  ["param"] = {
                    ["choiceProductUtid"] = "choice_product_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "choiceProducts",
                  },
                  {
                    ["var"] = "choice_product_id",
                  },
                  {
                    ["lit"] = "catalog",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "brand_key",
                    "brand_name",
                    "category_id",
                    "choice_product_id",
                    "country",
                    "currency_code",
                    "fulfillment_type",
                    "item_attribute",
                    "reward_name",
                    "reward_type",
                    "status",
                    "utid",
                    "verbose",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.brands`",
                },
                ["parts"] = {
                  "choiceProducts",
                  "{choice_product_id}",
                  "catalog",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "brand_key",
                      ["orig"] = "brand_key",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "brand_name",
                      ["orig"] = "brand_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "category_id",
                      ["orig"] = "category_id",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "country",
                      ["orig"] = "country",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "currency_code",
                      ["orig"] = "currency_code",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "fulfillment_type",
                      ["orig"] = "fulfillment_type",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "item_attribute",
                      ["orig"] = "item_attribute",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "reward_name",
                      ["orig"] = "reward_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "reward_type",
                      ["orig"] = "reward_type",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "status",
                      ["orig"] = "status",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "utid",
                      ["orig"] = "utid",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = true,
                      ["kind"] = "query",
                      ["name"] = "verbose",
                      ["orig"] = "verbose",
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/catalogs",
                ["segments"] = {
                  {
                    ["lit"] = "catalogs",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "brand_key",
                    "brand_name",
                    "category_id",
                    "country",
                    "currency_code",
                    "fulfillment_type",
                    "item_attribute",
                    "reward_name",
                    "reward_type",
                    "status",
                    "utid",
                    "verbose",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.brands`",
                },
                ["parts"] = {
                  "catalogs",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "choice_product",
            },
          },
        },
      },
      ["choice_product"] = {
        ["fields"] = {
          {
            ["name"] = "countries",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "currencyCode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "rewardName",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "utid",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "choice_product",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "country",
                      ["orig"] = "country",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "currency_code",
                      ["orig"] = "currency_code",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "reward_name",
                      ["orig"] = "reward_name",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/choiceProducts",
                ["segments"] = {
                  {
                    ["lit"] = "choiceProducts",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "country",
                    "currency_code",
                    "reward_name",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.choiceProducts`",
                },
                ["parts"] = {
                  "choiceProducts",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "utid",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/choiceProducts/{utid}",
                ["rename"] = {
                  ["param"] = {
                    ["utid"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "choiceProducts",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "choiceProducts",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["country_view_summary"] = {
        ["fields"] = {
          {
            ["name"] = "countryName",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "preferredCurrency",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "threeLetterCode",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "twoLetterCode",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "country_view_summary",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "country",
                      ["orig"] = "country",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "max_result",
                      ["orig"] = "max_result",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "next_cursor",
                      ["orig"] = "next_cursor",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "preferred_currency",
                      ["orig"] = "preferred_currency",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "prev_cursor",
                      ["orig"] = "prev_cursor",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/rewardCountries",
                ["segments"] = {
                  {
                    ["lit"] = "rewardCountries",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "country",
                    "max_result",
                    "next_cursor",
                    "preferred_currency",
                    "prev_cursor",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "rewardCountries",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["create_account_criterion"] = {
        ["fields"] = {
          {
            ["name"] = "accountIdentifier",
            ["req"] = true,
            ["short"] = "A unique identifier for this account.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "contactEmail",
            ["req"] = true,
            ["short"] = "An email address for a designated representative for this account.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "currencyCode",
            ["short"] = "The currency this account will accept for deposits/withdraws.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "displayName",
            ["req"] = true,
            ["short"] = "A friendly name for this account.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "fundingNotification",
            ["short"] = "optional, send funding notification emails to the following address(es)",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "create_account_criterion",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "customer_identifier",
                      ["orig"] = "customer_identifier",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/customers/{customerIdentifier}/accounts",
                ["rename"] = {
                  ["param"] = {
                    ["customerIdentifier"] = "customer_identifier",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "customers",
                  },
                  {
                    ["var"] = "customer_identifier",
                  },
                  {
                    ["lit"] = "accounts",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "customer_identifier",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "customers",
                  "{customer_identifier}",
                  "accounts",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "customer",
            },
          },
        },
      },
      ["create_customer_criterion"] = {
        ["fields"] = {},
        ["name"] = "create_customer_criterion",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["credential_type_view"] = {
        ["fields"] = {
          {
            ["name"] = "credentialType",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "credential_type_view",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/credentialtypes",
                ["segments"] = {
                  {
                    ["lit"] = "credentialtypes",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "credentialtypes",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["credit_card"] = {
        ["fields"] = {
          {
            ["name"] = "accountIdentifier",
            ["req"] = true,
            ["short"] = "specify the account this credit card is associated with",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "accountNumber",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "activationDate",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "billingAddress",
            ["req"] = true,
            ["short"] = "required Enter the billing address information for the credit card that is being registered",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "contactInformation",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$ARRAY`",
              },
            },
            ["req"] = true,
            ["short"] = "Optional.",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "createdDate",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "creditCard",
            ["req"] = true,
            ["short"] = "required Enter the credit card details that is being registered",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "customerIdentifier",
            ["req"] = true,
            ["short"] = "specify the customer associated with the credit card.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "expirationDate",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ipAddress",
            ["req"] = true,
            ["short"] = "specify the The IP address of the person adding the credit card",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "label",
            ["req"] = true,
            ["short"] = "specify a label for the credit card",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "lastFourDigits",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "token",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "credit_card",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/creditCards",
                ["segments"] = {
                  {
                    ["lit"] = "creditCards",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "creditCards",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "account_identifier",
                      ["orig"] = "account_identifier",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "account_number",
                      ["orig"] = "account_number",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "customer_identifier",
                      ["orig"] = "customer_identifier",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "email_address",
                      ["orig"] = "email_address",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "expiration_date",
                      ["orig"] = "expiration_date",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "full_name",
                      ["orig"] = "full_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "label",
                      ["orig"] = "label",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "last_four_digit",
                      ["orig"] = "last_four_digit",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "max_result",
                      ["orig"] = "max_result",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "next_cursor",
                      ["orig"] = "next_cursor",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "paginate",
                      ["orig"] = "paginate",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "prev_cursor",
                      ["orig"] = "prev_cursor",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "false",
                      ["kind"] = "query",
                      ["name"] = "show_inactive",
                      ["orig"] = "show_inactive",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "status",
                      ["orig"] = "status",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "token",
                      ["orig"] = "token",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/creditCards",
                ["segments"] = {
                  {
                    ["lit"] = "creditCards",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_identifier",
                    "account_number",
                    "customer_identifier",
                    "email_address",
                    "expiration_date",
                    "full_name",
                    "label",
                    "last_four_digit",
                    "max_result",
                    "next_cursor",
                    "paginate",
                    "prev_cursor",
                    "show_inactive",
                    "status",
                    "token",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "creditCards",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "token",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/creditCards/{token}",
                ["rename"] = {
                  ["param"] = {
                    ["token"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "creditCards",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "creditCards",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["credit_card_deposit"] = {
        ["fields"] = {
          {
            ["name"] = "accountIdentifier",
            ["req"] = true,
            ["short"] = "specify the account this credit card is associated with",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "accountNumber",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "amount",
            ["req"] = true,
            ["short"] = "specify the amount to fund in USD",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "amountCharged",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "createdDate",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "creditCardToken",
            ["req"] = true,
            ["short"] = "specify the credit card token to fund with",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "customerIdentifier",
            ["req"] = true,
            ["short"] = "specify the customer associated with the credit card.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "externalRefID",
            ["short"] = "specify the external reference id to associate with this funding action.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "feePercent",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "referenceDepositID",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "credit_card_deposit",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/creditCardDeposits",
                ["segments"] = {
                  {
                    ["lit"] = "creditCardDeposits",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "creditCardDeposits",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "reference_deposit_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/creditCardDeposits/{referenceDepositID}",
                ["rename"] = {
                  ["param"] = {
                    ["referenceDepositID"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "creditCardDeposits",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "creditCardDeposits",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["credit_card_unregister"] = {
        ["fields"] = {
          {
            ["name"] = "accountIdentifier",
            ["req"] = true,
            ["short"] = "Specify the account this credit card is associated with.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "createdDate",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "creditCardToken",
            ["req"] = true,
            ["short"] = "Specify the credit card token to unregister.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "customerIdentifier",
            ["req"] = true,
            ["short"] = "Specify the customer associated with the credit card.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "message",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "token",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "credit_card_unregister",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/creditCardUnregisters",
                ["segments"] = {
                  {
                    ["lit"] = "creditCardUnregisters",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "creditCardUnregisters",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["customer"] = {
        ["fields"] = {
          {
            ["name"] = "accounts",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "createdAt",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "customerIdentifier",
            ["req"] = true,
            ["short"] = "A unique identifier for this customer.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "displayName",
            ["req"] = true,
            ["short"] = "A friendly name for this customer.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "customer",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/customers",
                ["segments"] = {
                  {
                    ["lit"] = "customers",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "customers",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "account_display_name",
                      ["orig"] = "account_display_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "account_identifier",
                      ["orig"] = "account_identifier",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "account_max_date_created_at",
                      ["orig"] = "account_max_date_created_at",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "account_min_date_created_at",
                      ["orig"] = "account_min_date_created_at",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "account_number",
                      ["orig"] = "account_number",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "account_status",
                      ["orig"] = "account_status",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "customer_max_date_created_at",
                      ["orig"] = "customer_max_date_created_at",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "customer_min_date_created_at",
                      ["orig"] = "customer_min_date_created_at",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "display_name",
                      ["orig"] = "display_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "max_result",
                      ["orig"] = "max_result",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "next_cursor",
                      ["orig"] = "next_cursor",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "paginate",
                      ["orig"] = "paginate",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "prev_cursor",
                      ["orig"] = "prev_cursor",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "status",
                      ["orig"] = "status",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/customers",
                ["segments"] = {
                  {
                    ["lit"] = "customers",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_display_name",
                    "account_identifier",
                    "account_max_date_created_at",
                    "account_min_date_created_at",
                    "account_number",
                    "account_status",
                    "customer_max_date_created_at",
                    "customer_min_date_created_at",
                    "display_name",
                    "max_result",
                    "next_cursor",
                    "paginate",
                    "prev_cursor",
                    "status",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "customers",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "customer_identifier",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/customers/{customerIdentifier}",
                ["rename"] = {
                  ["param"] = {
                    ["customerIdentifier"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "customers",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "customers",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["email_template_list_view"] = {
        ["fields"] = {},
        ["name"] = "email_template_list_view",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["email_template_view_verbose"] = {
        ["fields"] = {
          {
            ["name"] = "accentColor",
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["short"] = "A Hex color value, six hexadecimal digits preceded by a pound sign, used as an accent in the email.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "accessControl",
            ["short"] = "(Optional) Which Customers and/or Accounts should have access to this template.",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "accessControls",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "closing",
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["short"] = "After the reward credential, a space to close the email message to the recipient.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "customerServiceMessage",
            ["short"] = "If left null, Tango Card's Customer Support contact information will be included.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "defaults",
            ["short"] = "If you want this template to be used at order time for the given Platform, Customer or Account when the Email Template Identifier (etid) is not provided with the order.",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "etid",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "fromName",
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["short"] = "The name that will appear in the From line of the email and the {from_name} in the text message.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "headerImage",
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["short"] = "A Base64 encoded string of an image that will show as the header of the email.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "headerImageAltText",
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["short"] = "The Alt Text for the Header Image in the email.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "messageBody",
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["short"] = "The message body for the email.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["short"] = "A unique name to give the template.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "smsMessageBody",
            ["short"] = "The message body for the SMS.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "subject",
            ["op"] = {
              ["update"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["short"] = "The Subject of the email.",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "email_template_view_verbose",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/digitalTemplates",
                ["segments"] = {
                  {
                    ["lit"] = "digitalTemplates",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "digitalTemplates",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "elements_per_block",
                      ["orig"] = "elements_per_block",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/digitalTemplates",
                ["segments"] = {
                  {
                    ["lit"] = "digitalTemplates",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "elements_per_block",
                    "page",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "digitalTemplates",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "etid",
                      ["orig"] = "etid",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/digitalTemplates/{etid}",
                ["segments"] = {
                  {
                    ["lit"] = "digitalTemplates",
                  },
                  {
                    ["var"] = "etid",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "etid",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "digitalTemplates",
                  "{etid}",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "etid",
                      ["orig"] = "etid",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/digitalTemplates/{etid}",
                ["segments"] = {
                  {
                    ["lit"] = "digitalTemplates",
                  },
                  {
                    ["var"] = "etid",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "etid",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "digitalTemplates",
                  "{etid}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "digital_template",
            },
          },
        },
      },
      ["embeddable_response_dto"] = {
        ["fields"] = {
          {
            ["name"] = "url",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "embeddable_response_dto",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "reference_line_item_id",
                      ["orig"] = "reference_line_item_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/lineItems/{referenceLineItemID}/embeddedUrl",
                ["rename"] = {
                  ["param"] = {
                    ["referenceLineItemID"] = "reference_line_item_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "lineItems",
                  },
                  {
                    ["var"] = "reference_line_item_id",
                  },
                  {
                    ["lit"] = "embeddedUrl",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "reference_line_item_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "lineItems",
                  "{reference_line_item_id}",
                  "embeddedUrl",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "line_item",
            },
          },
        },
      },
      ["exchange_rates_with_disclaimer"] = {
        ["fields"] = {
          {
            ["name"] = "baseCurrency",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "baseFx",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "lastModifiedDate",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "rewardCurrency",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "exchange_rates_with_disclaimer",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "base_currency",
                      ["orig"] = "base_currency",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "max_result",
                      ["orig"] = "max_result",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "next_cursor",
                      ["orig"] = "next_cursor",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "paginate",
                      ["orig"] = "paginate",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "prev_cursor",
                      ["orig"] = "prev_cursor",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "reward_currency",
                      ["orig"] = "reward_currency",
                      ["type"] = "`$ARRAY`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/exchangerates",
                ["segments"] = {
                  {
                    ["lit"] = "exchangerates",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "base_currency",
                    "max_result",
                    "next_cursor",
                    "paginate",
                    "prev_cursor",
                    "reward_currency",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.exchangeRates`",
                },
                ["parts"] = {
                  "exchangerates",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["line_item"] = {
        ["fields"] = {
          {
            ["name"] = "accountIdentifier",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "accountNumber",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "amountCharged",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "amountIssued",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "campaign",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "canCancel",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "canFreeze",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "customerIdentifier",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "dateIssued",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "deliveryMethod",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "deliveryStatus",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "emailStatus",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "etid",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "expirationDate",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "externalReferenceLineItemID",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "lineItemActionHistory",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "lineItemActionReason",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "lineItemErrors",
            ["short"] = "Errors related to the line item",
            ["type"] = "`$ARRAY`",
          },
          {
            ["format"] = "int32",
            ["name"] = "lineNumber",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "orderNotes",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "orderSource",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "orderStatus",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ptid",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "purchaseOrderNumber",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "int32",
            ["name"] = "quantity",
            ["short"] = "quantity of line items",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "recipient",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "redemptionHistory",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "referenceLineItemID",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "referenceOrderID",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "reissuedFromReferenceLineItemId",
            ["short"] = "Reissued from reference line item ID",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "reissuedToReferenceLineItemId",
            ["short"] = "Reissued to reference line item ID",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "remainingBalance",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "resendHistory",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "reward",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "rewardName",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "rewardStatus",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "rewardViewHistory",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "sender",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "status",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "utid",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "line_item",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "reference_line_item_id",
                      ["orig"] = "reference_line_item_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/lineItems/{referenceLineItemID}/cancel",
                ["rename"] = {
                  ["param"] = {
                    ["referenceLineItemID"] = "reference_line_item_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "lineItems",
                  },
                  {
                    ["var"] = "reference_line_item_id",
                  },
                  {
                    ["lit"] = "cancel",
                  },
                },
                ["select"] = {
                  ["$action"] = "cancel",
                  ["exist"] = {
                    "reference_line_item_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "lineItems",
                  "{reference_line_item_id}",
                  "cancel",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "reference_line_item_id",
                      ["orig"] = "reference_line_item_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/lineItems/{referenceLineItemID}/freeze",
                ["rename"] = {
                  ["param"] = {
                    ["referenceLineItemID"] = "reference_line_item_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "lineItems",
                  },
                  {
                    ["var"] = "reference_line_item_id",
                  },
                  {
                    ["lit"] = "freeze",
                  },
                },
                ["select"] = {
                  ["$action"] = "freeze",
                  ["exist"] = {
                    "reference_line_item_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "lineItems",
                  "{reference_line_item_id}",
                  "freeze",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "reference_line_item_id",
                      ["orig"] = "reference_line_item_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/lineItems/{referenceLineItemID}/unfreeze",
                ["rename"] = {
                  ["param"] = {
                    ["referenceLineItemID"] = "reference_line_item_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "lineItems",
                  },
                  {
                    ["var"] = "reference_line_item_id",
                  },
                  {
                    ["lit"] = "unfreeze",
                  },
                },
                ["select"] = {
                  ["$action"] = "unfreeze",
                  ["exist"] = {
                    "reference_line_item_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "lineItems",
                  "{reference_line_item_id}",
                  "unfreeze",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "account_identifier",
                      ["orig"] = "account_identifier",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "campaign",
                      ["orig"] = "campaign",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "false",
                      ["kind"] = "query",
                      ["name"] = "column_sort_ascending",
                      ["orig"] = "column_sort_ascending",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "dateIssued",
                      ["kind"] = "query",
                      ["name"] = "column_sort_name",
                      ["orig"] = "column_sort_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "delivery_method",
                      ["orig"] = "delivery_method",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "delivery_status",
                      ["orig"] = "delivery_status",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "elements_per_block",
                      ["orig"] = "elements_per_block",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "email_status",
                      ["orig"] = "email_status",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "end_date",
                      ["orig"] = "end_date",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "etid",
                      ["orig"] = "etid",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "external_ref_id",
                      ["orig"] = "external_ref_id",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "has_remaining_balance",
                      ["orig"] = "has_remaining_balance",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "max_remaining_balance",
                      ["orig"] = "max_remaining_balance",
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "min_remaining_balance",
                      ["orig"] = "min_remaining_balance",
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "order_note",
                      ["orig"] = "order_note",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "order_source",
                      ["orig"] = "order_source",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "order_status",
                      ["orig"] = "order_status",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page_key",
                      ["orig"] = "page_key",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "page_previous",
                      ["orig"] = "page_previous",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "ptid",
                      ["orig"] = "ptid",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "purchase_order_number",
                      ["orig"] = "purchase_order_number",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "recipient_city",
                      ["orig"] = "recipient_city",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "recipient_country",
                      ["orig"] = "recipient_country",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "recipient_email",
                      ["orig"] = "recipient_email",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "recipient_first_name",
                      ["orig"] = "recipient_first_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "recipient_last_name",
                      ["orig"] = "recipient_last_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "recipient_mobile_number",
                      ["orig"] = "recipient_mobile_number",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "recipient_postal_code",
                      ["orig"] = "recipient_postal_code",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "recipient_state_or_province",
                      ["orig"] = "recipient_state_or_province",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "recipient_street_line1",
                      ["orig"] = "recipient_street_line1",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "recipient_street_line2",
                      ["orig"] = "recipient_street_line2",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "reference_order_id",
                      ["orig"] = "reference_order_id",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "start_date",
                      ["orig"] = "start_date",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "status",
                      ["orig"] = "status",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "utid",
                      ["orig"] = "utid",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/lineItems",
                ["segments"] = {
                  {
                    ["lit"] = "lineItems",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_identifier",
                    "campaign",
                    "column_sort_ascending",
                    "column_sort_name",
                    "delivery_method",
                    "delivery_status",
                    "elements_per_block",
                    "email_status",
                    "end_date",
                    "etid",
                    "external_ref_id",
                    "has_remaining_balance",
                    "max_remaining_balance",
                    "min_remaining_balance",
                    "order_note",
                    "order_source",
                    "order_status",
                    "page_key",
                    "page_previous",
                    "ptid",
                    "purchase_order_number",
                    "recipient_city",
                    "recipient_country",
                    "recipient_email",
                    "recipient_first_name",
                    "recipient_last_name",
                    "recipient_mobile_number",
                    "recipient_postal_code",
                    "recipient_state_or_province",
                    "recipient_street_line1",
                    "recipient_street_line2",
                    "reference_order_id",
                    "start_date",
                    "status",
                    "utid",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "lineItems",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "reference_line_item_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/lineItems/{referenceLineItemID}",
                ["rename"] = {
                  ["param"] = {
                    ["referenceLineItemID"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "lineItems",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "lineItems",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "line_item",
            },
          },
        },
      },
      ["low_balance_alert_list_view"] = {
        ["fields"] = {
          {
            ["name"] = "accountIdentifier",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "balanceAlertDisplayName",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uuid",
            ["name"] = "balanceAlertID",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "balanceAlertNotification",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "balanceAlertThreshold",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "createdAt",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "customerIdentifier",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "low_balance_alert_list_view",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "account_identifier",
                      ["orig"] = "account_identifier",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "customer_identifier",
                      ["orig"] = "customer_identifier",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "balance_alert_display_name",
                      ["orig"] = "balance_alert_display_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "balance_alert_notification",
                      ["orig"] = "balance_alert_notification",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "balance_alert_threshold",
                      ["orig"] = "balance_alert_threshold",
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "elements_per_block",
                      ["orig"] = "elements_per_block",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance",
                ["rename"] = {
                  ["param"] = {
                    ["accountIdentifier"] = "account_identifier",
                    ["customerIdentifier"] = "customer_identifier",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "customers",
                  },
                  {
                    ["var"] = "customer_identifier",
                  },
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_identifier",
                  },
                  {
                    ["lit"] = "lowbalance",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_identifier",
                    "balance_alert_display_name",
                    "balance_alert_notification",
                    "balance_alert_threshold",
                    "customer_identifier",
                    "elements_per_block",
                    "page",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "customers",
                  "{customer_identifier}",
                  "accounts",
                  "{account_identifier}",
                  "lowbalance",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "customer",
              "account",
            },
          },
        },
      },
      ["low_balance_alert_view"] = {
        ["fields"] = {
          {
            ["name"] = "accountIdentifier",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "balanceAlertDisplayName",
            ["short"] = "A friendly name for this low balance alert (will be displayed in the Tango Portal).",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uuid",
            ["name"] = "balanceAlertID",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "balanceAlertNotification",
            ["short"] = "Send low balance notification emails to the following address(es).",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "balanceAlertThreshold",
            ["short"] = "The threshold amount that will trigger the low balance alert.",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "createdAt",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "customerIdentifier",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "low_balance_alert_view",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "account_identifier",
                      ["orig"] = "account_identifier",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "customer_identifier",
                      ["orig"] = "customer_identifier",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance",
                ["rename"] = {
                  ["param"] = {
                    ["accountIdentifier"] = "account_identifier",
                    ["customerIdentifier"] = "customer_identifier",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "customers",
                  },
                  {
                    ["var"] = "customer_identifier",
                  },
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_identifier",
                  },
                  {
                    ["lit"] = "lowbalance",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_identifier",
                    "customer_identifier",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "customers",
                  "{customer_identifier}",
                  "accounts",
                  "{account_identifier}",
                  "lowbalance",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "account_id",
                      ["orig"] = "account_identifier",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "balance_alert_id",
                      ["orig"] = "balance_alert_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "customer_identifier",
                      ["orig"] = "customer_identifier",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}",
                ["rename"] = {
                  ["param"] = {
                    ["accountIdentifier"] = "account_id",
                    ["balanceAlertID"] = "balance_alert_id",
                    ["customerIdentifier"] = "customer_identifier",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "customers",
                  },
                  {
                    ["var"] = "customer_identifier",
                  },
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "lowbalance",
                  },
                  {
                    ["var"] = "balance_alert_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "balance_alert_id",
                    "customer_identifier",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "customers",
                  "{customer_identifier}",
                  "accounts",
                  "{account_id}",
                  "lowbalance",
                  "{balance_alert_id}",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "account_id",
                      ["orig"] = "account_identifier",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "balance_alert_id",
                      ["orig"] = "balance_alert_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "customer_identifier",
                      ["orig"] = "customer_identifier",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}",
                ["rename"] = {
                  ["param"] = {
                    ["accountIdentifier"] = "account_id",
                    ["balanceAlertID"] = "balance_alert_id",
                    ["customerIdentifier"] = "customer_identifier",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "customers",
                  },
                  {
                    ["var"] = "customer_identifier",
                  },
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "lowbalance",
                  },
                  {
                    ["var"] = "balance_alert_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "balance_alert_id",
                    "customer_identifier",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "customers",
                  "{customer_identifier}",
                  "accounts",
                  "{account_id}",
                  "lowbalance",
                  "{balance_alert_id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "customer",
              "account",
            },
            {
              "customer",
              "account",
              "lowbalance",
            },
          },
        },
      },
      ["mobile_country"] = {
        ["fields"] = {
          {
            ["name"] = "countryCode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "countryName",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "isoCode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "languageCode",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "mobile_country",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/mobileCountries",
                ["segments"] = {
                  {
                    ["lit"] = "mobileCountries",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "mobileCountries",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["n14_webhook"] = {
        ["fields"] = {
          {
            ["name"] = "categories",
            ["short"] = "The categories the customer wants to subscribe to.",
            ["type"] = "`$ARRAY`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "createdAt",
            ["short"] = "The date and time the webhook was created.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "eventTypes",
            ["short"] = "The event types the customer wants to subscribe to.",
            ["type"] = "`$ARRAY`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "expiresAt",
            ["short"] = "The date and time the webhook expires.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "headers",
            ["short"] = "Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "hmacSharedSecretKey",
            ["short"] = "The HMAC secret key used to sign the webhook payload.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "payloadVerificationMethod",
            ["short"] = "Method to verify webhook payload authenticity",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "signingCertificate",
            ["short"] = "The public X509 certificate used to sign the webhook payload.",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "updatedAt",
            ["short"] = "The date and time when the webhook was last updated.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["op"] = {
              ["list"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["short"] = "The URL of the customer's webhook listener.",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uuid",
            ["name"] = "webhookId",
            ["short"] = "The ID of the webhook.",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "n14_webhook",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "test_name",
                      ["orig"] = "test_name",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "webhook_id",
                      ["orig"] = "webhook_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/webhooks/{webhookId}/tests/{testName}",
                ["rename"] = {
                  ["param"] = {
                    ["testName"] = "test_name",
                    ["webhookId"] = "webhook_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "webhooks",
                  },
                  {
                    ["var"] = "webhook_id",
                  },
                  {
                    ["lit"] = "tests",
                  },
                  {
                    ["var"] = "test_name",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "test_name",
                    "webhook_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "webhooks",
                  "{webhook_id}",
                  "tests",
                  "{test_name}",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "webhook_id",
                      ["orig"] = "webhook_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/webhooks/{webhookId}/tests",
                ["rename"] = {
                  ["param"] = {
                    ["webhookId"] = "webhook_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "webhooks",
                  },
                  {
                    ["var"] = "webhook_id",
                  },
                  {
                    ["lit"] = "tests",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "webhook_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "webhooks",
                  "{webhook_id}",
                  "tests",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/webhooks",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "webhooks",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "category",
                      ["orig"] = "category",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "created_at_from",
                      ["orig"] = "created_at_from",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "created_at_to",
                      ["orig"] = "created_at_to",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "event_type",
                      ["orig"] = "event_type",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "expires_at_from",
                      ["orig"] = "expires_at_from",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "expires_at_to",
                      ["orig"] = "expires_at_to",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "header_name",
                      ["orig"] = "header_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "header_value",
                      ["orig"] = "header_value",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "max_result",
                      ["orig"] = "max_result",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "next_cursor",
                      ["orig"] = "next_cursor",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "prev_cursor",
                      ["orig"] = "prev_cursor",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "category",
                    "created_at_from",
                    "created_at_to",
                    "event_type",
                    "expires_at_from",
                    "expires_at_to",
                    "header_name",
                    "header_value",
                    "max_result",
                    "next_cursor",
                    "prev_cursor",
                    "url",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.items`",
                },
                ["parts"] = {
                  "webhooks",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "webhook_id",
                      ["orig"] = "webhook_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "from_revision",
                      ["orig"] = "from_revision",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "max_result",
                      ["orig"] = "max_result",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "next_cursor",
                      ["orig"] = "next_cursor",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "prev_cursor",
                      ["orig"] = "prev_cursor",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "to_revision",
                      ["orig"] = "to_revision",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks/{webhookId}/events",
                ["rename"] = {
                  ["param"] = {
                    ["webhookId"] = "webhook_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "webhooks",
                  },
                  {
                    ["var"] = "webhook_id",
                  },
                  {
                    ["lit"] = "events",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "from_revision",
                    "max_result",
                    "next_cursor",
                    "prev_cursor",
                    "to_revision",
                    "webhook_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "webhooks",
                  "{webhook_id}",
                  "events",
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "webhook_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/webhooks/{webhookId}",
                ["rename"] = {
                  ["param"] = {
                    ["webhookId"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "webhooks",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "webhooks",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "webhook",
            },
            {
              "webhook",
              "test",
            },
          },
        },
      },
      ["n1_customer"] = {
        ["fields"] = {},
        ["name"] = "n1_customer",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "customer_identifier",
                      ["orig"] = "customer_identifier",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "account_number",
                      ["orig"] = "account_number",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "contact_email",
                      ["orig"] = "contact_email",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "currency_code",
                      ["orig"] = "currency_code",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "display_name",
                      ["orig"] = "display_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "funding_notification_email",
                      ["orig"] = "funding_notification_email",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "max_balance",
                      ["orig"] = "max_balance",
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "max_date_created_at",
                      ["orig"] = "max_date_created_at",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "max_result",
                      ["orig"] = "max_result",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "min_balance",
                      ["orig"] = "min_balance",
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "min_date_created_at",
                      ["orig"] = "min_date_created_at",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "next_cursor",
                      ["orig"] = "next_cursor",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "paginate",
                      ["orig"] = "paginate",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "prev_cursor",
                      ["orig"] = "prev_cursor",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "status",
                      ["orig"] = "status",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/customers/{customerIdentifier}/accounts",
                ["rename"] = {
                  ["param"] = {
                    ["customerIdentifier"] = "customer_identifier",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "customers",
                  },
                  {
                    ["var"] = "customer_identifier",
                  },
                  {
                    ["lit"] = "accounts",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_number",
                    "contact_email",
                    "currency_code",
                    "customer_identifier",
                    "display_name",
                    "funding_notification_email",
                    "max_balance",
                    "max_date_created_at",
                    "max_result",
                    "min_balance",
                    "min_date_created_at",
                    "next_cursor",
                    "paginate",
                    "prev_cursor",
                    "status",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "customers",
                  "{customer_identifier}",
                  "accounts",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "customer",
            },
          },
        },
      },
      ["n2_account"] = {
        ["fields"] = {},
        ["name"] = "n2_account",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["n3_fund"] = {
        ["fields"] = {},
        ["name"] = "n3_fund",
        ["op"] = {},
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["n8_line_item"] = {
        ["fields"] = {
          {
            ["name"] = "campaign",
            ["short"] = "optional campaign that may be used to administratively categorize a specific order.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "orderNotes",
            ["short"] = "Optional order notes (up to 150 characters)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "purchaseOrderNumber",
            ["short"] = "The Purchase Order Number associated with this order.",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "n8_line_item",
        ["op"] = {
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "reference_line_item_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/lineItems/{referenceLineItemID}",
                ["rename"] = {
                  ["param"] = {
                    ["referenceLineItemID"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "lineItems",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "lineItems",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["n9_digital_template"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "n9_digital_template",
        ["op"] = {
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "etid",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/digitalTemplates/{etid}",
                ["rename"] = {
                  ["param"] = {
                    ["etid"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "digitalTemplates",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "digitalTemplates",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["order"] = {
        ["fields"] = {
          {
            ["name"] = "accountIdentifier",
            ["req"] = true,
            ["short"] = "Specify the account this order will be deducted from",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "accountNumber",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "amount",
            ["req"] = true,
            ["short"] = "Specify the face value of of the reward.",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "amountCharged",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "asyncOrderEntity",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "campaign",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["short"] = "Optional.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "createdAt",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "customFields",
            ["short"] = "Optional.",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "customerIdentifier",
            ["req"] = true,
            ["short"] = "Specify the customer associated with the order.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "deliveryMethod",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "Specify delivery method for the order",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "denomination",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$OBJECT`",
              },
            },
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "emailSubject",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["short"] = "Optional.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "etid",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["short"] = "Optional.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "expirationDate",
            ["short"] = "Optional for Promo Links, the exact calendar date the Promo Link will expire.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "externalRefID",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "Optional.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "lineItemStatus",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "message",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["short"] = "Optional gift message",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "notes",
            ["short"] = "Optional order notes.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "orderClientSource",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "orderExternalRefIdDupe",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "orderStatus",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ptid",
            ["short"] = "Only required for Printed Reward Links, the unique identifier for the Printed Reward Link Template provided in the Tango Portal on the Printed Template page.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "purchaseOrderNumber",
            ["short"] = "The Purchase Order Number associated with this order.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "recipient",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$OBJECT`",
              },
            },
            ["short"] = "Required if deliveryMethod is EMAIL, PHONE, or ADDRESS.",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "redemptionInstructions",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "referenceLineItemID",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "referenceOrderID",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "reward",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "rewardName",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["deprecated"] = true,
            ["name"] = "sendEmail",
            ["short"] = "Deprecated Oct 1, 2025.",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "sender",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$OBJECT`",
              },
            },
            ["short"] = "Optional.",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "status",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "utid",
            ["req"] = true,
            ["short"] = "The unique identifier for the reward you are sending as provided in the Get Catalog call",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "order",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/orders",
                ["segments"] = {
                  {
                    ["lit"] = "orders",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "orders",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "account_identifier",
                      ["orig"] = "account_identifier",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "campaign",
                      ["orig"] = "campaign",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "currency_code",
                      ["orig"] = "currency_code",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "customer_identifier",
                      ["orig"] = "customer_identifier",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "delivery_method",
                      ["orig"] = "delivery_method",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "elements_per_block",
                      ["orig"] = "elements_per_block",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "end_date",
                      ["orig"] = "end_date",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "external_ref_id",
                      ["orig"] = "external_ref_id",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "line_item_note",
                      ["orig"] = "line_item_note",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "line_item_status",
                      ["orig"] = "line_item_status",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "max_amount",
                      ["orig"] = "max_amount",
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "min_amount",
                      ["orig"] = "min_amount",
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "note",
                      ["orig"] = "note",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "order_status",
                      ["orig"] = "order_status",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "ptid",
                      ["orig"] = "ptid",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "purchase_order_number",
                      ["orig"] = "purchase_order_number",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "recipient_email",
                      ["orig"] = "recipient_email",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "recipient_first_name",
                      ["orig"] = "recipient_first_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "recipient_last_name",
                      ["orig"] = "recipient_last_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "recipient_mobile_number",
                      ["orig"] = "recipient_mobile_number",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "reward_name",
                      ["orig"] = "reward_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "send_email",
                      ["orig"] = "send_email",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sender_email",
                      ["orig"] = "sender_email",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sender_first_name",
                      ["orig"] = "sender_first_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sender_last_name",
                      ["orig"] = "sender_last_name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "start_date",
                      ["orig"] = "start_date",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "status",
                      ["orig"] = "status",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "utid",
                      ["orig"] = "utid",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orders",
                ["segments"] = {
                  {
                    ["lit"] = "orders",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_identifier",
                    "campaign",
                    "currency_code",
                    "customer_identifier",
                    "delivery_method",
                    "elements_per_block",
                    "end_date",
                    "external_ref_id",
                    "line_item_note",
                    "line_item_status",
                    "max_amount",
                    "min_amount",
                    "note",
                    "order_status",
                    "page",
                    "ptid",
                    "purchase_order_number",
                    "recipient_email",
                    "recipient_first_name",
                    "recipient_last_name",
                    "recipient_mobile_number",
                    "reward_name",
                    "send_email",
                    "sender_email",
                    "sender_first_name",
                    "sender_last_name",
                    "start_date",
                    "status",
                    "utid",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "orders",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "reference_order_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orders/{referenceOrderID}",
                ["rename"] = {
                  ["param"] = {
                    ["referenceOrderID"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "orders",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "orders",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["order_view_summary"] = {
        ["fields"] = {
          {
            ["name"] = "amount",
            ["short"] = "Optional.",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "deliveryMethod",
            ["short"] = "Optional.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "notes",
            ["short"] = "Optional order notes (up to 150 characters).",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "otherReason",
            ["short"] = "Required when reasonCode is \"OTHER\", enter the reason why the line item is being reissued.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "reasonCode",
            ["req"] = true,
            ["short"] = "Required.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "recipient",
            ["short"] = "Optional.",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "order_view_summary",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "reference_line_item_id",
                      ["orig"] = "reference_line_item_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/lineItems/{referenceLineItemID}/reissue",
                ["rename"] = {
                  ["param"] = {
                    ["referenceLineItemID"] = "reference_line_item_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "lineItems",
                  },
                  {
                    ["var"] = "reference_line_item_id",
                  },
                  {
                    ["lit"] = "reissue",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "reference_line_item_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "lineItems",
                  "{reference_line_item_id}",
                  "reissue",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "line_item",
            },
          },
        },
      },
      ["prepaid_card_info"] = {
        ["fields"] = {
          {
            ["name"] = "balance",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "card",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "comments",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "registration",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "prepaid_card_info",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "reference_line_item_id",
                      ["orig"] = "reference_line_item_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/prepaidCardService/getCardInfo/{referenceLineItemID}",
                ["rename"] = {
                  ["param"] = {
                    ["referenceLineItemID"] = "reference_line_item_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "prepaidCardService",
                  },
                  {
                    ["lit"] = "getCardInfo",
                  },
                  {
                    ["var"] = "reference_line_item_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "reference_line_item_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "prepaidCardService",
                  "getCardInfo",
                  "{reference_line_item_id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "get_card_info",
            },
          },
        },
      },
      ["prepaid_card_transaction"] = {
        ["fields"] = {
          {
            ["name"] = "journal",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "page",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "prepaid_card_transaction",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "reference_line_item_id",
                      ["orig"] = "reference_line_item_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/prepaidCardService/getCardTransactions/{referenceLineItemID}",
                ["rename"] = {
                  ["param"] = {
                    ["referenceLineItemID"] = "reference_line_item_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "prepaidCardService",
                  },
                  {
                    ["lit"] = "getCardTransactions",
                  },
                  {
                    ["var"] = "reference_line_item_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "page",
                    "reference_line_item_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "prepaidCardService",
                  "getCardTransactions",
                  "{reference_line_item_id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "get_card_transaction",
            },
          },
        },
      },
      ["reissue_card"] = {
        ["fields"] = {
          {
            ["name"] = "commentText",
            ["short"] = "Optional comment for the card replacement.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "reason",
            ["req"] = true,
            ["short"] = "Reason for the card replacement.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["short"] = "Status of the reissue request.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updatedBy",
            ["req"] = true,
            ["short"] = "Identifier of the agent initiating the request.",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "reissue_card",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "reference_line_item_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/prepaidCardService/reissueCard/{referenceLineItemID}",
                ["rename"] = {
                  ["param"] = {
                    ["referenceLineItemID"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "prepaidCardService",
                  },
                  {
                    ["lit"] = "reissueCard",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "prepaidCardService",
                  "reissueCard",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["replacement_reason"] = {
        ["fields"] = {
          {
            ["name"] = "replacementReasons",
            ["short"] = "List of valid replacement reason codes.",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "replacement_reason",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/prepaidCardService/replacementReasons",
                ["segments"] = {
                  {
                    ["lit"] = "prepaidCardService",
                  },
                  {
                    ["lit"] = "replacementReasons",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.replacementReasons`",
                },
                ["parts"] = {
                  "prepaidCardService",
                  "replacementReasons",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["resend"] = {
        ["fields"] = {
          {
            ["name"] = "newDeliveryMethod",
            ["short"] = "The delivery method used to re-deliver the reward.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "newEmail",
            ["short"] = "A new email address to re-deliver this order to.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "newEtid",
            ["short"] = "A new etid used to re-deliver an order.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "newMobile",
            ["short"] = "A new mobile number to use for resending an order.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "newMobileNumber",
            ["short"] = "A new phone number to re-deliver this order to.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "otherReason",
            ["short"] = "Required when lineItemResendReasonCode is \"OTHER\", enter the reason why the line item is being RESENT",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "reasonCode",
            ["short"] = "Enter the reason why this line item is being RESENT (respectively)",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "resend",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "line_item_id",
                      ["orig"] = "reference_line_item_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/lineItems/{referenceLineItemId}/resends",
                ["rename"] = {
                  ["param"] = {
                    ["referenceLineItemId"] = "line_item_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "lineItems",
                  },
                  {
                    ["var"] = "line_item_id",
                  },
                  {
                    ["lit"] = "resends",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "line_item_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "lineItems",
                  "{line_item_id}",
                  "resends",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "reference_order_id",
                      ["orig"] = "reference_order_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/orders/{referenceOrderID}/resends",
                ["rename"] = {
                  ["param"] = {
                    ["referenceOrderID"] = "reference_order_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "orders",
                  },
                  {
                    ["var"] = "reference_order_id",
                  },
                  {
                    ["lit"] = "resends",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "reference_order_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "orders",
                  "{reference_order_id}",
                  "resends",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "line_item",
            },
            {
              "order",
            },
          },
        },
      },
      ["reward_reasons_map"] = {
        ["fields"] = {
          {
            ["name"] = "CANCEL",
            ["short"] = "Map of cancel reasons",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "CANCEL_AND_REISSUE",
            ["short"] = "Map of cancel and reissue reasons",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "FREEZE",
            ["short"] = "Map of freeze reasons",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "UNFREEZE",
            ["short"] = "Map of unfreeze reasons",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "reward_reasons_map",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/lineItems/reasonCodes",
                ["segments"] = {
                  {
                    ["lit"] = "lineItems",
                  },
                  {
                    ["lit"] = "reasonCodes",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "lineItems",
                  "reasonCodes",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["transfer_fund"] = {
        ["fields"] = {
          {
            ["name"] = "amount",
            ["req"] = true,
            ["short"] = "Specify the currency amount of the funds being transferred.",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "externalRefID",
            ["short"] = "specify the external reference id to associate with this funding action.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "transferDate",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "transferFrom",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "The accountIdentifier for the Account transferring funds from.",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "transferNotes",
            ["short"] = "Optional transfer notes (up to 150 characters)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "transferTo",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "The accountIdentifier for the Account transferring funds to.",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "transferredAmount",
            ["type"] = "`$NUMBER`",
          },
        },
        ["name"] = "transfer_fund",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/transferFunds",
                ["segments"] = {
                  {
                    ["lit"] = "transferFunds",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "transferFunds",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["update_account"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "registration",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "status",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updatedBy",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "update_account",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "reference_line_item_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/prepaidCardService/updateAccount/{referenceLineItemID}",
                ["rename"] = {
                  ["param"] = {
                    ["referenceLineItemID"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "prepaidCardService",
                  },
                  {
                    ["lit"] = "updateAccount",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "prepaidCardService",
                  "updateAccount",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["update_webhook_subscription_response_view"] = {
        ["fields"] = {
          {
            ["name"] = "categories",
            ["short"] = "The categories the customer is subscribed to.",
            ["type"] = "`$ARRAY`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "createdAt",
            ["short"] = "The date and time the webhook was created.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "eventTypes",
            ["short"] = "The event types the customer is subscribed to.",
            ["type"] = "`$ARRAY`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "expiresAt",
            ["short"] = "The date and time the webhook expires.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "headers",
            ["short"] = "Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "hmacSharedSecretKey",
            ["short"] = "The HMAC secret key used to sign the webhook payload.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "payloadVerificationMethod",
            ["short"] = "Method to verify webhook payload integrity",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "signingCertificate",
            ["short"] = "The public X509 certificate used to sign the webhook payload.",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "updatedAt",
            ["short"] = "The date and time when the webhook was last updated.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["short"] = "The URL of the customer's webhook listener.",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uuid",
            ["name"] = "webhookId",
            ["short"] = "The ID of the webhook.",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "update_webhook_subscription_response_view",
        ["op"] = {
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "webhook_id",
                      ["orig"] = "webhook_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/webhooks/{webhookId}",
                ["rename"] = {
                  ["param"] = {
                    ["webhookId"] = "webhook_id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "webhooks",
                  },
                  {
                    ["var"] = "webhook_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "webhook_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "webhooks",
                  "{webhook_id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "webhook",
            },
          },
        },
      },
      ["webhook"] = {
        ["fields"] = {
          {
            ["name"] = "categories",
            ["short"] = "The categories the customer wants to subscribe to.",
            ["type"] = "`$ARRAY`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "createdAt",
            ["short"] = "The date and time the webhook was created.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "eventTypes",
            ["short"] = "The event types the customer wants to subscribe to.",
            ["type"] = "`$ARRAY`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "expiresAt",
            ["short"] = "The date and time the webhook expires.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "headers",
            ["short"] = "Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "hmacSharedSecretKey",
            ["short"] = "The HMAC secret key used to sign the webhook payload.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "payloadVerificationMethod",
            ["short"] = "Method to verify webhook payload integrity.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "signingCertificate",
            ["short"] = "The public X509 certificate used to sign the webhook payload.",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "updatedAt",
            ["short"] = "The date and time when the webhook was last updated.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["short"] = "The URL of the customer's webhook listener.",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uuid",
            ["name"] = "webhookId",
            ["short"] = "The ID of the webhook.",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "webhook",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "webhook_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "from_revision",
                      ["orig"] = "from_revision",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "to_revision",
                      ["orig"] = "to_revision",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/webhooks/{webhookId}/replay",
                ["rename"] = {
                  ["param"] = {
                    ["webhookId"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "webhooks",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "replay",
                  },
                },
                ["select"] = {
                  ["$action"] = "replay",
                  ["exist"] = {
                    "from_revision",
                    "id",
                    "to_revision",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "webhooks",
                  "{id}",
                  "replay",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "webhook_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/webhooks/{webhookId}/renew",
                ["rename"] = {
                  ["param"] = {
                    ["webhookId"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "webhooks",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "renew",
                  },
                },
                ["select"] = {
                  ["$action"] = "renew",
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "webhooks",
                  "{id}",
                  "renew",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "webhook_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks/{webhookId}",
                ["rename"] = {
                  ["param"] = {
                    ["webhookId"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "webhooks",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "webhooks",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
