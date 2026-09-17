package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Tangocard",
			"slug": "tangocard",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://integration-api.tangocard.com/raas/v2",
			"auth": map[string]any{
				"prefix": "Basic",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"account": map[string]any{},
				"add_comment_escalation": map[string]any{},
				"all_event_type": map[string]any{},
				"async_order": map[string]any{},
				"async_order_detail_view": map[string]any{},
				"async_order_line_items_view": map[string]any{},
				"async_reason_codes_view": map[string]any{},
				"async_update_line_item_view": map[string]any{},
				"balance_alert_view": map[string]any{},
				"brand_categories_view": map[string]any{},
				"catalog": map[string]any{},
				"choice_product": map[string]any{},
				"country_view_summary": map[string]any{},
				"create_account_criterion": map[string]any{},
				"create_customer_criterion": map[string]any{},
				"credential_type_view": map[string]any{},
				"credit_card": map[string]any{},
				"credit_card_deposit": map[string]any{},
				"credit_card_unregister": map[string]any{},
				"customer": map[string]any{},
				"email_template_list_view": map[string]any{},
				"email_template_view_verbose": map[string]any{},
				"embeddable_response_dto": map[string]any{},
				"exchange_rates_with_disclaimer": map[string]any{},
				"line_item": map[string]any{},
				"low_balance_alert_list_view": map[string]any{},
				"low_balance_alert_view": map[string]any{},
				"mobile_country": map[string]any{},
				"n14_webhook": map[string]any{},
				"n1_customer": map[string]any{},
				"n2_account": map[string]any{},
				"n3_fund": map[string]any{},
				"n8_line_item": map[string]any{},
				"n9_digital_template": map[string]any{},
				"order": map[string]any{},
				"order_view_summary": map[string]any{},
				"prepaid_card_info": map[string]any{},
				"prepaid_card_transaction": map[string]any{},
				"reissue_card": map[string]any{},
				"replacement_reason": map[string]any{},
				"resend": map[string]any{},
				"reward_reasons_map": map[string]any{},
				"transfer_fund": map[string]any{},
				"update_account": map[string]any{},
				"update_webhook_subscription_response_view": map[string]any{},
				"webhook": map[string]any{},
			},
		},
		"entity": map[string]any{
			"account": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accountIdentifier",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "accountNumber",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "contactEmail",
						"short": "optional, an email address for a designated representative for this account.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "createdAt",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currencyCode",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currentBalance",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "displayName",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "optional, a friendly name for this account.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fundingNotification",
						"short": "optional, send funding notification emails to the following address(es).",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "account",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "account_number",
											"orig": "account_number",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "contact_email",
											"orig": "contact_email",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "currency_code",
											"orig": "currency_code",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "display_name",
											"orig": "display_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "funding_notification_email",
											"orig": "funding_notification_email",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "max_balance",
											"orig": "max_balance",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "max_date_created_at",
											"orig": "max_date_created_at",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "min_balance",
											"orig": "min_balance",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "min_date_created_at",
											"orig": "min_date_created_at",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "paginate",
											"orig": "paginate",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/accounts",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"accounts",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "account_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{accountIdentifier}",
								"rename": map[string]any{
									"param": map[string]any{
										"accountIdentifier": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"accounts",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "account_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/customers/{customerIdentifier}/accounts/{accountIdentifier}",
								"rename": map[string]any{
									"param": map[string]any{
										"accountIdentifier": "id",
										"customerIdentifier": "customer_identifier",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "customer_identifier",
									},
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"customer_identifier",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"customers",
									"{customer_identifier}",
									"accounts",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"customer",
						},
					},
				},
			},
			"add_comment_escalation": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "int32",
						"name": "assignee",
						"short": "Assignee ID.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "commentText",
						"req": true,
						"short": "Free-text comment to add to the prepaid card.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int32",
						"name": "inquiryCategoryCode",
						"short": "Inquiry category code.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "int32",
						"name": "inquiryIdNumber",
						"short": "Inquiry ID number.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "inquirySource",
						"short": "Origination source identifier (e.g.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int32",
						"name": "inquiryTypeCode",
						"short": "Inquiry type code.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "issueDescription",
						"req": true,
						"short": "Short description of the issue.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"short": "Status of the inquiry (e.g.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "userId",
						"short": "Agent or CSR user ID.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "add_comment_escalation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "reference_line_item_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/prepaidCardService/addCommentEscalation/{referenceLineItemID}",
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "prepaidCardService",
									},
									map[string]any{
										"lit": "addCommentEscalation",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"prepaidCardService",
									"addCommentEscalation",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"all_event_type": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "category",
						"short": "The category of events can be subscribed to.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "eventTypes",
						"short": "The event types that can be subscribed to.",
						"type": "`$ARRAY`",
					},
				},
				"name": "all_event_type",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks/eventtypes",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"lit": "eventtypes",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"category",
										"max_result",
										"next_cursor",
										"prev_cursor",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"parts": []any{
									"webhooks",
									"eventtypes",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"async_order": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accountIdentifier",
						"req": true,
						"short": "specify the account this order will be deducted from",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "accountNumber",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "amountCharged",
						"short": "Initial value and the total charged amount on the account",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "campaign",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Optional.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "customerIdentifier",
						"req": true,
						"short": "specify the customer associated with the order.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "duplicateLineItemRefIds",
						"short": "If any duplicate duplicateLineItemRefIds exist in the request",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "externalRefID",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Required.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "failedLineItems",
						"short": "Failed line items list (business validations)",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "fulfillBy",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lineItems",
						"req": true,
						"short": "Line Items of the bulk order a required field",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "notes",
						"short": "Optional order notes.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "orderStatus",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "purchaseOrderNumber",
						"short": "The Purchase Order Number associated with this order.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "referenceOrderID",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sender",
						"short": "Optional.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "status",
						"short": "This status reflects about cart status or validation status based on the processing",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int32",
						"name": "totalLineItems",
						"short": "Total number of line items submitted in the request",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "int64",
						"name": "totalLineItemsRows",
						"type": "`$INTEGER`",
					},
				},
				"name": "async_order",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/asyncOrders",
								"segments": []any{
									map[string]any{
										"lit": "asyncOrders",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"asyncOrders",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "account_identifier",
											"orig": "account_identifier",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "campaign",
											"orig": "campaign",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "currency_code",
											"orig": "currency_code",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "delivery_method",
											"orig": "delivery_method",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "elements_per_block",
											"orig": "elements_per_block",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "external_ref_id",
											"orig": "external_ref_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "line_item_note",
											"orig": "line_item_note",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "line_item_status",
											"orig": "line_item_status",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "max_amount",
											"orig": "max_amount",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "max_result",
											"orig": "max_result",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "min_amount",
											"orig": "min_amount",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "note",
											"orig": "note",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "order_status",
											"orig": "order_status",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "ptid",
											"orig": "ptid",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "purchase_order_number",
											"orig": "purchase_order_number",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "recipient_email",
											"orig": "recipient_email",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "recipient_first_name",
											"orig": "recipient_first_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "recipient_last_name",
											"orig": "recipient_last_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "recipient_mobile_number",
											"orig": "recipient_mobile_number",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "reward_name",
											"orig": "reward_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "send_email",
											"orig": "send_email",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sender_email",
											"orig": "sender_email",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sender_first_name",
											"orig": "sender_first_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sender_last_name",
											"orig": "sender_last_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "utid",
											"orig": "utid",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/asyncOrders",
								"segments": []any{
									map[string]any{
										"lit": "asyncOrders",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.orders`",
								},
								"parts": []any{
									"asyncOrders",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"async_order_detail_view": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accountIdentifier",
						"short": "Account identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "amountCharged",
						"short": "Initial value and the total charged amount on the account",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "campaign",
						"short": "Campaign name",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "completedAt",
						"short": "Order completion timestamp",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"short": "Order creation timestamp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "customerIdentifier",
						"short": "Customer identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "externalRefID",
						"short": "External reference ID provided by client",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lineItems",
						"short": "list of line items",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "notes",
						"short": "Order notes",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "orderErrors",
						"short": "Order level errors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "orderStatus",
						"short": "Current status of the order",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pagination",
						"short": "Pagination information",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "purchaseOrderNumber",
						"short": "Purchase order number",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "referenceOrderID",
						"short": "Internal reference order ID",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sender",
						"short": "Sender information",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "int64",
						"name": "totalLineItems",
						"short": "Total number of line items",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"from": map[string]any{
						"account_identifier": "accountIdentifier",
						"external_ref_id": "externalRefID",
					},
					"name": "id",
					"parts": []any{
						"account_identifier",
						"external_ref_id",
					},
					"sep": "/",
				},
				"name": "async_order_detail_view",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "account_identifier",
											"orig": "account_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "external_ref_id",
											"orig": "external_ref_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "external_ref_line_item_i_d",
											"orig": "external_ref_line_item_i_d",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "failed_only",
											"orig": "failed_only",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "NjI=",
											"kind": "query",
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "NjE=",
											"kind": "query",
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "reference_line_item_i_d",
											"orig": "reference_line_item_i_d",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}",
								"rename": map[string]any{
									"param": map[string]any{
										"accountIdentifier": "account_identifier",
										"customerIdentifier": "customer_identifier",
										"externalRefID": "external_ref_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "asyncOrders",
									},
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "customer_identifier",
									},
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_identifier",
									},
									map[string]any{
										"var": "external_ref_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
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
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "account_identifier",
											"orig": "account_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "external_ref_id",
											"orig": "external_ref_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}",
								"rename": map[string]any{
									"param": map[string]any{
										"accountIdentifier": "account_identifier",
										"customerIdentifier": "customer_identifier",
										"externalRefID": "external_ref_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "asyncOrders",
									},
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "customer_identifier",
									},
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_identifier",
									},
									map[string]any{
										"var": "external_ref_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_identifier",
										"customer_identifier",
										"external_ref_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
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
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"customer",
							"account",
						},
					},
				},
			},
			"async_order_line_items_view": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accountIdentifier",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "amountCharged",
						"short": "Initial value and the total charged amount on the account",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "campaign",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "customerIdentifier",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "externalRefID",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lineItems",
						"short": "The List of Line Items for the Async Order.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "orderErrors",
						"short": "The List of Errors for the Async Order.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "orderNotes",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "orderStatus",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pagination",
						"short": "The cursor for pagination of the async order line items.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "purchaseOrderNumber",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "referenceOrderID",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sender",
						"type": "`$OBJECT`",
					},
				},
				"name": "async_order_line_items_view",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "account_id",
											"orig": "account_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "customer_id",
											"orig": "customer_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "external_ref_id",
											"orig": "external_ref_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "external_ref_line_item_i_d",
											"orig": "external_ref_line_item_i_d",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "failed_only",
											"orig": "failed_only",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "",
											"kind": "query",
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "",
											"kind": "query",
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "reference_line_item_i_d",
											"orig": "reference_line_item_i_d",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}/lineItems",
								"rename": map[string]any{
									"param": map[string]any{
										"accountIdentifier": "account_id",
										"customerIdentifier": "customer_id",
										"externalRefID": "external_ref_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "asyncOrders",
									},
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "customer_id",
									},
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"var": "external_ref_id",
									},
									map[string]any{
										"lit": "lineItems",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
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
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"customer",
							"account",
						},
					},
				},
			},
			"async_reason_codes_view": map[string]any{
				"fields": []any{},
				"name": "async_reason_codes_view",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/asyncOrders/reasonCodes",
								"segments": []any{
									map[string]any{
										"lit": "asyncOrders",
									},
									map[string]any{
										"lit": "reasonCodes",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.reasonCodes`",
								},
								"parts": []any{
									"asyncOrders",
									"reasonCodes",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"async_update_line_item_view": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "deliveryDate",
						"short": "Optional.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lineItemNote",
						"short": "Optional line item notes (up to 150 characters)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "senderInfo",
						"short": "Optional.",
						"type": "`$OBJECT`",
					},
				},
				"name": "async_update_line_item_view",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "reference_line_item_id",
											"orig": "reference_line_item_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/asyncOrders/lineItems/{referenceLineItemId}",
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemId": "reference_line_item_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "asyncOrders",
									},
									map[string]any{
										"lit": "lineItems",
									},
									map[string]any{
										"var": "reference_line_item_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"reference_line_item_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.senderInfo`",
								},
								"parts": []any{
									"asyncOrders",
									"lineItems",
									"{reference_line_item_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"line_item",
						},
					},
				},
			},
			"balance_alert_view": map[string]any{
				"fields": []any{},
				"name": "balance_alert_view",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "account_id",
											"orig": "account_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "balance_alert_id",
											"orig": "balance_alert_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}",
								"rename": map[string]any{
									"param": map[string]any{
										"accountIdentifier": "account_id",
										"balanceAlertID": "balance_alert_id",
										"customerIdentifier": "customer_identifier",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "customer_identifier",
									},
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "lowbalance",
									},
									map[string]any{
										"var": "balance_alert_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"balance_alert_id",
										"customer_identifier",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
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
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"customer",
							"account",
							"lowbalance",
						},
					},
				},
			},
			"brand_categories_view": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "identifier",
						"type": "`$STRING`",
					},
				},
				"name": "brand_categories_view",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/brandCategories",
								"segments": []any{
									map[string]any{
										"lit": "brandCategories",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.brandCategories`",
								},
								"parts": []any{
									"brandCategories",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"catalog": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "barcodeType",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "brandKey",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "brandName",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "brandRequirements",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "categories",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "createdDate",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disclaimer",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "imageUrls",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "items",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "lastUpdateDate",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "shortDescription",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "terms",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "catalog",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "choice_product_id",
											"orig": "choice_product_utid",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "brand_key",
											"orig": "brand_key",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "brand_name",
											"orig": "brand_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "category_id",
											"orig": "category_id",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "country",
											"orig": "country",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "currency_code",
											"orig": "currency_code",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "fulfillment_type",
											"orig": "fulfillment_type",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "item_attribute",
											"orig": "item_attribute",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "reward_name",
											"orig": "reward_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "reward_type",
											"orig": "reward_type",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "utid",
											"orig": "utid",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "verbose",
											"orig": "verbose",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/choiceProducts/{choiceProductUtid}/catalog",
								"rename": map[string]any{
									"param": map[string]any{
										"choiceProductUtid": "choice_product_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "choiceProducts",
									},
									map[string]any{
										"var": "choice_product_id",
									},
									map[string]any{
										"lit": "catalog",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.brands`",
								},
								"parts": []any{
									"choiceProducts",
									"{choice_product_id}",
									"catalog",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "brand_key",
											"orig": "brand_key",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "brand_name",
											"orig": "brand_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "category_id",
											"orig": "category_id",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "country",
											"orig": "country",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "currency_code",
											"orig": "currency_code",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "fulfillment_type",
											"orig": "fulfillment_type",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "item_attribute",
											"orig": "item_attribute",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "reward_name",
											"orig": "reward_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "reward_type",
											"orig": "reward_type",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "utid",
											"orig": "utid",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "verbose",
											"orig": "verbose",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/catalogs",
								"segments": []any{
									map[string]any{
										"lit": "catalogs",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.brands`",
								},
								"parts": []any{
									"catalogs",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"choice_product",
						},
					},
				},
			},
			"choice_product": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "countries",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "currencyCode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rewardName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "utid",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "choice_product",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "country",
											"orig": "country",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "currency_code",
											"orig": "currency_code",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "reward_name",
											"orig": "reward_name",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/choiceProducts",
								"segments": []any{
									map[string]any{
										"lit": "choiceProducts",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"country",
										"currency_code",
										"reward_name",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.choiceProducts`",
								},
								"parts": []any{
									"choiceProducts",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "utid",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/choiceProducts/{utid}",
								"rename": map[string]any{
									"param": map[string]any{
										"utid": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "choiceProducts",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"choiceProducts",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"country_view_summary": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "countryName",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "preferredCurrency",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "threeLetterCode",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "twoLetterCode",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "country_view_summary",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "country",
											"orig": "country",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "preferred_currency",
											"orig": "preferred_currency",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/rewardCountries",
								"segments": []any{
									map[string]any{
										"lit": "rewardCountries",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"country",
										"max_result",
										"next_cursor",
										"preferred_currency",
										"prev_cursor",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"rewardCountries",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"create_account_criterion": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accountIdentifier",
						"req": true,
						"short": "A unique identifier for this account.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "contactEmail",
						"req": true,
						"short": "An email address for a designated representative for this account.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currencyCode",
						"short": "The currency this account will accept for deposits/withdraws.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayName",
						"req": true,
						"short": "A friendly name for this account.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fundingNotification",
						"short": "optional, send funding notification emails to the following address(es)",
						"type": "`$ARRAY`",
					},
				},
				"name": "create_account_criterion",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/customers/{customerIdentifier}/accounts",
								"rename": map[string]any{
									"param": map[string]any{
										"customerIdentifier": "customer_identifier",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "customer_identifier",
									},
									map[string]any{
										"lit": "accounts",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"customer_identifier",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"customers",
									"{customer_identifier}",
									"accounts",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"customer",
						},
					},
				},
			},
			"create_customer_criterion": map[string]any{
				"fields": []any{},
				"name": "create_customer_criterion",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"credential_type_view": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "credentialType",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
				},
				"name": "credential_type_view",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/credentialtypes",
								"segments": []any{
									map[string]any{
										"lit": "credentialtypes",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"credentialtypes",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"credit_card": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accountIdentifier",
						"req": true,
						"short": "specify the account this credit card is associated with",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "accountNumber",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "activationDate",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "billingAddress",
						"req": true,
						"short": "required Enter the billing address information for the credit card that is being registered",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "contactInformation",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "Optional.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "createdDate",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "creditCard",
						"req": true,
						"short": "required Enter the credit card details that is being registered",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "customerIdentifier",
						"req": true,
						"short": "specify the customer associated with the credit card.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "expirationDate",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ipAddress",
						"req": true,
						"short": "specify the The IP address of the person adding the credit card",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "label",
						"req": true,
						"short": "specify a label for the credit card",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lastFourDigits",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "token",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "credit_card",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/creditCards",
								"segments": []any{
									map[string]any{
										"lit": "creditCards",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"creditCards",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "account_identifier",
											"orig": "account_identifier",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "account_number",
											"orig": "account_number",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "email_address",
											"orig": "email_address",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "expiration_date",
											"orig": "expiration_date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "full_name",
											"orig": "full_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "label",
											"orig": "label",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "last_four_digit",
											"orig": "last_four_digit",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "paginate",
											"orig": "paginate",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "false",
											"kind": "query",
											"name": "show_inactive",
											"orig": "show_inactive",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/creditCards",
								"segments": []any{
									map[string]any{
										"lit": "creditCards",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"creditCards",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/creditCards/{token}",
								"rename": map[string]any{
									"param": map[string]any{
										"token": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "creditCards",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"creditCards",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"credit_card_deposit": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accountIdentifier",
						"req": true,
						"short": "specify the account this credit card is associated with",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "accountNumber",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "amount",
						"req": true,
						"short": "specify the amount to fund in USD",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "amountCharged",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "createdDate",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "creditCardToken",
						"req": true,
						"short": "specify the credit card token to fund with",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "customerIdentifier",
						"req": true,
						"short": "specify the customer associated with the credit card.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "externalRefID",
						"short": "specify the external reference id to associate with this funding action.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "feePercent",
						"req": true,
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "referenceDepositID",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "credit_card_deposit",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/creditCardDeposits",
								"segments": []any{
									map[string]any{
										"lit": "creditCardDeposits",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"creditCardDeposits",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "reference_deposit_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/creditCardDeposits/{referenceDepositID}",
								"rename": map[string]any{
									"param": map[string]any{
										"referenceDepositID": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "creditCardDeposits",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"creditCardDeposits",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"credit_card_unregister": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accountIdentifier",
						"req": true,
						"short": "Specify the account this credit card is associated with.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "createdDate",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "creditCardToken",
						"req": true,
						"short": "Specify the credit card token to unregister.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "customerIdentifier",
						"req": true,
						"short": "Specify the customer associated with the credit card.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "message",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "token",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "credit_card_unregister",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/creditCardUnregisters",
								"segments": []any{
									map[string]any{
										"lit": "creditCardUnregisters",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"creditCardUnregisters",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"customer": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accounts",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "createdAt",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "customerIdentifier",
						"req": true,
						"short": "A unique identifier for this customer.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayName",
						"req": true,
						"short": "A friendly name for this customer.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "customer",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/customers",
								"segments": []any{
									map[string]any{
										"lit": "customers",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"customers",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "account_display_name",
											"orig": "account_display_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "account_identifier",
											"orig": "account_identifier",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "account_max_date_created_at",
											"orig": "account_max_date_created_at",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "account_min_date_created_at",
											"orig": "account_min_date_created_at",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "account_number",
											"orig": "account_number",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "account_status",
											"orig": "account_status",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "customer_max_date_created_at",
											"orig": "customer_max_date_created_at",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "customer_min_date_created_at",
											"orig": "customer_min_date_created_at",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "display_name",
											"orig": "display_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "paginate",
											"orig": "paginate",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/customers",
								"segments": []any{
									map[string]any{
										"lit": "customers",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"customers",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "customer_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/customers/{customerIdentifier}",
								"rename": map[string]any{
									"param": map[string]any{
										"customerIdentifier": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"customers",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"email_template_list_view": map[string]any{
				"fields": []any{},
				"name": "email_template_list_view",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"email_template_view_verbose": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accentColor",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "A Hex color value, six hexadecimal digits preceded by a pound sign, used as an accent in the email.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "accessControl",
						"short": "(Optional) Which Customers and/or Accounts should have access to this template.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "accessControls",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "closing",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "After the reward credential, a space to close the email message to the recipient.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "customerServiceMessage",
						"short": "If left null, Tango Card's Customer Support contact information will be included.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "defaults",
						"short": "If you want this template to be used at order time for the given Platform, Customer or Account when the Email Template Identifier (etid) is not provided with the order.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "etid",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fromName",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name that will appear in the From line of the email and the {from_name} in the text message.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "headerImage",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "A Base64 encoded string of an image that will show as the header of the email.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "headerImageAltText",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The Alt Text for the Header Image in the email.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "messageBody",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The message body for the email.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "A unique name to give the template.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "smsMessageBody",
						"short": "The message body for the SMS.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subject",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The Subject of the email.",
						"type": "`$STRING`",
					},
				},
				"name": "email_template_view_verbose",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/digitalTemplates",
								"segments": []any{
									map[string]any{
										"lit": "digitalTemplates",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"digitalTemplates",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "elements_per_block",
											"orig": "elements_per_block",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/digitalTemplates",
								"segments": []any{
									map[string]any{
										"lit": "digitalTemplates",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"elements_per_block",
										"page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"digitalTemplates",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "etid",
											"orig": "etid",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/digitalTemplates/{etid}",
								"segments": []any{
									map[string]any{
										"lit": "digitalTemplates",
									},
									map[string]any{
										"var": "etid",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"etid",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"digitalTemplates",
									"{etid}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "etid",
											"orig": "etid",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/digitalTemplates/{etid}",
								"segments": []any{
									map[string]any{
										"lit": "digitalTemplates",
									},
									map[string]any{
										"var": "etid",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"etid",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"digitalTemplates",
									"{etid}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"digital_template",
						},
					},
				},
			},
			"embeddable_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "url",
						"type": "`$STRING`",
					},
				},
				"name": "embeddable_response_dto",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "reference_line_item_id",
											"orig": "reference_line_item_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/lineItems/{referenceLineItemID}/embeddedUrl",
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "reference_line_item_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "lineItems",
									},
									map[string]any{
										"var": "reference_line_item_id",
									},
									map[string]any{
										"lit": "embeddedUrl",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"reference_line_item_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"lineItems",
									"{reference_line_item_id}",
									"embeddedUrl",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"line_item",
						},
					},
				},
			},
			"exchange_rates_with_disclaimer": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "baseCurrency",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "baseFx",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "lastModifiedDate",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rewardCurrency",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "exchange_rates_with_disclaimer",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "base_currency",
											"orig": "base_currency",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "paginate",
											"orig": "paginate",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "reward_currency",
											"orig": "reward_currency",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/exchangerates",
								"segments": []any{
									map[string]any{
										"lit": "exchangerates",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"base_currency",
										"max_result",
										"next_cursor",
										"paginate",
										"prev_cursor",
										"reward_currency",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.exchangeRates`",
								},
								"parts": []any{
									"exchangerates",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"line_item": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accountIdentifier",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "accountNumber",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "amountCharged",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "amountIssued",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "campaign",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "canCancel",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "canFreeze",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "customerIdentifier",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "dateIssued",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "deliveryMethod",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "deliveryStatus",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "emailStatus",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "etid",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "expirationDate",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "externalReferenceLineItemID",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lineItemActionHistory",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "lineItemActionReason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lineItemErrors",
						"short": "Errors related to the line item",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "int32",
						"name": "lineNumber",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "orderNotes",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "orderSource",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "orderStatus",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ptid",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "purchaseOrderNumber",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int32",
						"name": "quantity",
						"short": "quantity of line items",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "recipient",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "redemptionHistory",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "referenceLineItemID",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "referenceOrderID",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reissuedFromReferenceLineItemId",
						"short": "Reissued from reference line item ID",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reissuedToReferenceLineItemId",
						"short": "Reissued to reference line item ID",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "remainingBalance",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "resendHistory",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "reward",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "rewardName",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rewardStatus",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rewardViewHistory",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "sender",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "utid",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "line_item",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "reference_line_item_id",
											"orig": "reference_line_item_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/lineItems/{referenceLineItemID}/cancel",
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "reference_line_item_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "lineItems",
									},
									map[string]any{
										"var": "reference_line_item_id",
									},
									map[string]any{
										"lit": "cancel",
									},
								},
								"select": map[string]any{
									"$action": "cancel",
									"exist": []any{
										"reference_line_item_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"lineItems",
									"{reference_line_item_id}",
									"cancel",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "reference_line_item_id",
											"orig": "reference_line_item_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/lineItems/{referenceLineItemID}/freeze",
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "reference_line_item_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "lineItems",
									},
									map[string]any{
										"var": "reference_line_item_id",
									},
									map[string]any{
										"lit": "freeze",
									},
								},
								"select": map[string]any{
									"$action": "freeze",
									"exist": []any{
										"reference_line_item_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"lineItems",
									"{reference_line_item_id}",
									"freeze",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "reference_line_item_id",
											"orig": "reference_line_item_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/lineItems/{referenceLineItemID}/unfreeze",
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "reference_line_item_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "lineItems",
									},
									map[string]any{
										"var": "reference_line_item_id",
									},
									map[string]any{
										"lit": "unfreeze",
									},
								},
								"select": map[string]any{
									"$action": "unfreeze",
									"exist": []any{
										"reference_line_item_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"lineItems",
									"{reference_line_item_id}",
									"unfreeze",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "account_identifier",
											"orig": "account_identifier",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "campaign",
											"orig": "campaign",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "false",
											"kind": "query",
											"name": "column_sort_ascending",
											"orig": "column_sort_ascending",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "dateIssued",
											"kind": "query",
											"name": "column_sort_name",
											"orig": "column_sort_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "delivery_method",
											"orig": "delivery_method",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "delivery_status",
											"orig": "delivery_status",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "elements_per_block",
											"orig": "elements_per_block",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "email_status",
											"orig": "email_status",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "etid",
											"orig": "etid",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "external_ref_id",
											"orig": "external_ref_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "has_remaining_balance",
											"orig": "has_remaining_balance",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "max_remaining_balance",
											"orig": "max_remaining_balance",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "min_remaining_balance",
											"orig": "min_remaining_balance",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "order_note",
											"orig": "order_note",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "order_source",
											"orig": "order_source",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "order_status",
											"orig": "order_status",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_key",
											"orig": "page_key",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "page_previous",
											"orig": "page_previous",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "ptid",
											"orig": "ptid",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "purchase_order_number",
											"orig": "purchase_order_number",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "recipient_city",
											"orig": "recipient_city",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "recipient_country",
											"orig": "recipient_country",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "recipient_email",
											"orig": "recipient_email",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "recipient_first_name",
											"orig": "recipient_first_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "recipient_last_name",
											"orig": "recipient_last_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "recipient_mobile_number",
											"orig": "recipient_mobile_number",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "recipient_postal_code",
											"orig": "recipient_postal_code",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "recipient_state_or_province",
											"orig": "recipient_state_or_province",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "recipient_street_line1",
											"orig": "recipient_street_line1",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "recipient_street_line2",
											"orig": "recipient_street_line2",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "reference_order_id",
											"orig": "reference_order_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "utid",
											"orig": "utid",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/lineItems",
								"segments": []any{
									map[string]any{
										"lit": "lineItems",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"lineItems",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "reference_line_item_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/lineItems/{referenceLineItemID}",
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "lineItems",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"lineItems",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"line_item",
						},
					},
				},
			},
			"low_balance_alert_list_view": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accountIdentifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "balanceAlertDisplayName",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "balanceAlertID",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "balanceAlertNotification",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "balanceAlertThreshold",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "createdAt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "customerIdentifier",
						"type": "`$STRING`",
					},
				},
				"name": "low_balance_alert_list_view",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "account_identifier",
											"orig": "account_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "balance_alert_display_name",
											"orig": "balance_alert_display_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "balance_alert_notification",
											"orig": "balance_alert_notification",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "balance_alert_threshold",
											"orig": "balance_alert_threshold",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "elements_per_block",
											"orig": "elements_per_block",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance",
								"rename": map[string]any{
									"param": map[string]any{
										"accountIdentifier": "account_identifier",
										"customerIdentifier": "customer_identifier",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "customer_identifier",
									},
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_identifier",
									},
									map[string]any{
										"lit": "lowbalance",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_identifier",
										"balance_alert_display_name",
										"balance_alert_notification",
										"balance_alert_threshold",
										"customer_identifier",
										"elements_per_block",
										"page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
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
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"customer",
							"account",
						},
					},
				},
			},
			"low_balance_alert_view": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accountIdentifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "balanceAlertDisplayName",
						"short": "A friendly name for this low balance alert (will be displayed in the Tango Portal).",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "balanceAlertID",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "balanceAlertNotification",
						"short": "Send low balance notification emails to the following address(es).",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "balanceAlertThreshold",
						"short": "The threshold amount that will trigger the low balance alert.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "createdAt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "customerIdentifier",
						"type": "`$STRING`",
					},
				},
				"name": "low_balance_alert_view",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "account_identifier",
											"orig": "account_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance",
								"rename": map[string]any{
									"param": map[string]any{
										"accountIdentifier": "account_identifier",
										"customerIdentifier": "customer_identifier",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "customer_identifier",
									},
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_identifier",
									},
									map[string]any{
										"lit": "lowbalance",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_identifier",
										"customer_identifier",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"customers",
									"{customer_identifier}",
									"accounts",
									"{account_identifier}",
									"lowbalance",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "account_id",
											"orig": "account_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "balance_alert_id",
											"orig": "balance_alert_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}",
								"rename": map[string]any{
									"param": map[string]any{
										"accountIdentifier": "account_id",
										"balanceAlertID": "balance_alert_id",
										"customerIdentifier": "customer_identifier",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "customer_identifier",
									},
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "lowbalance",
									},
									map[string]any{
										"var": "balance_alert_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"balance_alert_id",
										"customer_identifier",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
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
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "account_id",
											"orig": "account_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "balance_alert_id",
											"orig": "balance_alert_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}",
								"rename": map[string]any{
									"param": map[string]any{
										"accountIdentifier": "account_id",
										"balanceAlertID": "balance_alert_id",
										"customerIdentifier": "customer_identifier",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "customer_identifier",
									},
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "lowbalance",
									},
									map[string]any{
										"var": "balance_alert_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"balance_alert_id",
										"customer_identifier",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
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
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"customer",
							"account",
						},
						[]any{
							"customer",
							"account",
							"lowbalance",
						},
					},
				},
			},
			"mobile_country": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "countryCode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "countryName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isoCode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "languageCode",
						"type": "`$STRING`",
					},
				},
				"name": "mobile_country",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/mobileCountries",
								"segments": []any{
									map[string]any{
										"lit": "mobileCountries",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"mobileCountries",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"n14_webhook": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "categories",
						"short": "The categories the customer wants to subscribe to.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"short": "The date and time the webhook was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "eventTypes",
						"short": "The event types the customer wants to subscribe to.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "expiresAt",
						"short": "The date and time the webhook expires.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "headers",
						"short": "Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "hmacSharedSecretKey",
						"short": "The HMAC secret key used to sign the webhook payload.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "payloadVerificationMethod",
						"short": "Method to verify webhook payload authenticity",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "signingCertificate",
						"short": "The public X509 certificate used to sign the webhook payload.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"short": "The date and time when the webhook was last updated.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The URL of the customer's webhook listener.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "webhookId",
						"short": "The ID of the webhook.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "n14_webhook",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "test_name",
											"orig": "test_name",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "webhook_id",
											"orig": "webhook_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks/{webhookId}/tests/{testName}",
								"rename": map[string]any{
									"param": map[string]any{
										"testName": "test_name",
										"webhookId": "webhook_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "webhook_id",
									},
									map[string]any{
										"lit": "tests",
									},
									map[string]any{
										"var": "test_name",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"test_name",
										"webhook_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks",
									"{webhook_id}",
									"tests",
									"{test_name}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "webhook_id",
											"orig": "webhook_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks/{webhookId}/tests",
								"rename": map[string]any{
									"param": map[string]any{
										"webhookId": "webhook_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "webhook_id",
									},
									map[string]any{
										"lit": "tests",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"webhook_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks",
									"{webhook_id}",
									"tests",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "category",
											"orig": "category",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "created_at_from",
											"orig": "created_at_from",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "created_at_to",
											"orig": "created_at_to",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "event_type",
											"orig": "event_type",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "expires_at_from",
											"orig": "expires_at_from",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "expires_at_to",
											"orig": "expires_at_to",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "header_name",
											"orig": "header_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "header_value",
											"orig": "header_value",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "url",
											"orig": "url",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"parts": []any{
									"webhooks",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "webhook_id",
											"orig": "webhook_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "from_revision",
											"orig": "from_revision",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "to_revision",
											"orig": "to_revision",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks/{webhookId}/events",
								"rename": map[string]any{
									"param": map[string]any{
										"webhookId": "webhook_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "webhook_id",
									},
									map[string]any{
										"lit": "events",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"from_revision",
										"max_result",
										"next_cursor",
										"prev_cursor",
										"to_revision",
										"webhook_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks",
									"{webhook_id}",
									"events",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "webhook_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/webhooks/{webhookId}",
								"rename": map[string]any{
									"param": map[string]any{
										"webhookId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"webhook",
						},
						[]any{
							"webhook",
							"test",
						},
					},
				},
			},
			"n1_customer": map[string]any{
				"fields": []any{},
				"name": "n1_customer",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "account_number",
											"orig": "account_number",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "contact_email",
											"orig": "contact_email",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "currency_code",
											"orig": "currency_code",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "display_name",
											"orig": "display_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "funding_notification_email",
											"orig": "funding_notification_email",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "max_balance",
											"orig": "max_balance",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "max_date_created_at",
											"orig": "max_date_created_at",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "min_balance",
											"orig": "min_balance",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "min_date_created_at",
											"orig": "min_date_created_at",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "paginate",
											"orig": "paginate",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/customers/{customerIdentifier}/accounts",
								"rename": map[string]any{
									"param": map[string]any{
										"customerIdentifier": "customer_identifier",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "customer_identifier",
									},
									map[string]any{
										"lit": "accounts",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"customers",
									"{customer_identifier}",
									"accounts",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"customer",
						},
					},
				},
			},
			"n2_account": map[string]any{
				"fields": []any{},
				"name": "n2_account",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"n3_fund": map[string]any{
				"fields": []any{},
				"name": "n3_fund",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"n8_line_item": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "campaign",
						"short": "optional campaign that may be used to administratively categorize a specific order.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "orderNotes",
						"short": "Optional order notes (up to 150 characters)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "purchaseOrderNumber",
						"short": "The Purchase Order Number associated with this order.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "n8_line_item",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "reference_line_item_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/lineItems/{referenceLineItemID}",
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "lineItems",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"lineItems",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"n9_digital_template": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "n9_digital_template",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "etid",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/digitalTemplates/{etid}",
								"rename": map[string]any{
									"param": map[string]any{
										"etid": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "digitalTemplates",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"digitalTemplates",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"order": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accountIdentifier",
						"req": true,
						"short": "Specify the account this order will be deducted from",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "accountNumber",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "amount",
						"req": true,
						"short": "Specify the face value of of the reward.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "amountCharged",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "asyncOrderEntity",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "campaign",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "Optional.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "createdAt",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "customFields",
						"short": "Optional.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "customerIdentifier",
						"req": true,
						"short": "Specify the customer associated with the order.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "deliveryMethod",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Specify delivery method for the order",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "denomination",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "emailSubject",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "Optional.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "etid",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "Optional.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "expirationDate",
						"short": "Optional for Promo Links, the exact calendar date the Promo Link will expire.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "externalRefID",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Optional.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lineItemStatus",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "message",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "Optional gift message",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "notes",
						"short": "Optional order notes.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "orderClientSource",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "orderExternalRefIdDupe",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "orderStatus",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ptid",
						"short": "Only required for Printed Reward Links, the unique identifier for the Printed Reward Link Template provided in the Tango Portal on the Printed Template page.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "purchaseOrderNumber",
						"short": "The Purchase Order Number associated with this order.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "recipient",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "Required if deliveryMethod is EMAIL, PHONE, or ADDRESS.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "redemptionInstructions",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "referenceLineItemID",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "referenceOrderID",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reward",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "rewardName",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"deprecated": true,
						"name": "sendEmail",
						"short": "Deprecated Oct 1, 2025.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "sender",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "Optional.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "utid",
						"req": true,
						"short": "The unique identifier for the reward you are sending as provided in the Get Catalog call",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "order",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/orders",
								"segments": []any{
									map[string]any{
										"lit": "orders",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"orders",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "account_identifier",
											"orig": "account_identifier",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "campaign",
											"orig": "campaign",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "currency_code",
											"orig": "currency_code",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "delivery_method",
											"orig": "delivery_method",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "elements_per_block",
											"orig": "elements_per_block",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "external_ref_id",
											"orig": "external_ref_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "line_item_note",
											"orig": "line_item_note",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "line_item_status",
											"orig": "line_item_status",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "max_amount",
											"orig": "max_amount",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "min_amount",
											"orig": "min_amount",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "note",
											"orig": "note",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "order_status",
											"orig": "order_status",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "ptid",
											"orig": "ptid",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "purchase_order_number",
											"orig": "purchase_order_number",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "recipient_email",
											"orig": "recipient_email",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "recipient_first_name",
											"orig": "recipient_first_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "recipient_last_name",
											"orig": "recipient_last_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "recipient_mobile_number",
											"orig": "recipient_mobile_number",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "reward_name",
											"orig": "reward_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "send_email",
											"orig": "send_email",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "sender_email",
											"orig": "sender_email",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sender_first_name",
											"orig": "sender_first_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sender_last_name",
											"orig": "sender_last_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "utid",
											"orig": "utid",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orders",
								"segments": []any{
									map[string]any{
										"lit": "orders",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"orders",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "reference_order_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/orders/{referenceOrderID}",
								"rename": map[string]any{
									"param": map[string]any{
										"referenceOrderID": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "orders",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"orders",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"order_view_summary": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "amount",
						"short": "Optional.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "deliveryMethod",
						"short": "Optional.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "notes",
						"short": "Optional order notes (up to 150 characters).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "otherReason",
						"short": "Required when reasonCode is \"OTHER\", enter the reason why the line item is being reissued.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reasonCode",
						"req": true,
						"short": "Required.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "recipient",
						"short": "Optional.",
						"type": "`$OBJECT`",
					},
				},
				"name": "order_view_summary",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "reference_line_item_id",
											"orig": "reference_line_item_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/lineItems/{referenceLineItemID}/reissue",
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "reference_line_item_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "lineItems",
									},
									map[string]any{
										"var": "reference_line_item_id",
									},
									map[string]any{
										"lit": "reissue",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"reference_line_item_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"lineItems",
									"{reference_line_item_id}",
									"reissue",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"line_item",
						},
					},
				},
			},
			"prepaid_card_info": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "balance",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "card",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "comments",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "registration",
						"type": "`$OBJECT`",
					},
				},
				"name": "prepaid_card_info",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "reference_line_item_id",
											"orig": "reference_line_item_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/prepaidCardService/getCardInfo/{referenceLineItemID}",
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "reference_line_item_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "prepaidCardService",
									},
									map[string]any{
										"lit": "getCardInfo",
									},
									map[string]any{
										"var": "reference_line_item_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"reference_line_item_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"prepaidCardService",
									"getCardInfo",
									"{reference_line_item_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"get_card_info",
						},
					},
				},
			},
			"prepaid_card_transaction": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "journal",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "page",
						"req": true,
						"type": "`$OBJECT`",
					},
				},
				"name": "prepaid_card_transaction",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "reference_line_item_id",
											"orig": "reference_line_item_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/prepaidCardService/getCardTransactions/{referenceLineItemID}",
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "reference_line_item_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "prepaidCardService",
									},
									map[string]any{
										"lit": "getCardTransactions",
									},
									map[string]any{
										"var": "reference_line_item_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"reference_line_item_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"prepaidCardService",
									"getCardTransactions",
									"{reference_line_item_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"get_card_transaction",
						},
					},
				},
			},
			"reissue_card": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "commentText",
						"short": "Optional comment for the card replacement.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reason",
						"req": true,
						"short": "Reason for the card replacement.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"short": "Status of the reissue request.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updatedBy",
						"req": true,
						"short": "Identifier of the agent initiating the request.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "reissue_card",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "reference_line_item_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/prepaidCardService/reissueCard/{referenceLineItemID}",
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "prepaidCardService",
									},
									map[string]any{
										"lit": "reissueCard",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"prepaidCardService",
									"reissueCard",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"replacement_reason": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "replacementReasons",
						"short": "List of valid replacement reason codes.",
						"type": "`$ARRAY`",
					},
				},
				"name": "replacement_reason",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/prepaidCardService/replacementReasons",
								"segments": []any{
									map[string]any{
										"lit": "prepaidCardService",
									},
									map[string]any{
										"lit": "replacementReasons",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.replacementReasons`",
								},
								"parts": []any{
									"prepaidCardService",
									"replacementReasons",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"resend": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "newDeliveryMethod",
						"short": "The delivery method used to re-deliver the reward.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "newEmail",
						"short": "A new email address to re-deliver this order to.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "newEtid",
						"short": "A new etid used to re-deliver an order.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "newMobile",
						"short": "A new mobile number to use for resending an order.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "newMobileNumber",
						"short": "A new phone number to re-deliver this order to.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "otherReason",
						"short": "Required when lineItemResendReasonCode is \"OTHER\", enter the reason why the line item is being RESENT",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reasonCode",
						"short": "Enter the reason why this line item is being RESENT (respectively)",
						"type": "`$STRING`",
					},
				},
				"name": "resend",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "line_item_id",
											"orig": "reference_line_item_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/lineItems/{referenceLineItemId}/resends",
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemId": "line_item_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "lineItems",
									},
									map[string]any{
										"var": "line_item_id",
									},
									map[string]any{
										"lit": "resends",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"line_item_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"lineItems",
									"{line_item_id}",
									"resends",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "reference_order_id",
											"orig": "reference_order_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/orders/{referenceOrderID}/resends",
								"rename": map[string]any{
									"param": map[string]any{
										"referenceOrderID": "reference_order_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "orders",
									},
									map[string]any{
										"var": "reference_order_id",
									},
									map[string]any{
										"lit": "resends",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"reference_order_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"orders",
									"{reference_order_id}",
									"resends",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"line_item",
						},
						[]any{
							"order",
						},
					},
				},
			},
			"reward_reasons_map": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "CANCEL",
						"short": "Map of cancel reasons",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "CANCEL_AND_REISSUE",
						"short": "Map of cancel and reissue reasons",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "FREEZE",
						"short": "Map of freeze reasons",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "UNFREEZE",
						"short": "Map of unfreeze reasons",
						"type": "`$OBJECT`",
					},
				},
				"name": "reward_reasons_map",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/lineItems/reasonCodes",
								"segments": []any{
									map[string]any{
										"lit": "lineItems",
									},
									map[string]any{
										"lit": "reasonCodes",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"lineItems",
									"reasonCodes",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"transfer_fund": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "amount",
						"req": true,
						"short": "Specify the currency amount of the funds being transferred.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "externalRefID",
						"short": "specify the external reference id to associate with this funding action.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "transferDate",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "transferFrom",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The accountIdentifier for the Account transferring funds from.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "transferNotes",
						"short": "Optional transfer notes (up to 150 characters)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "transferTo",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The accountIdentifier for the Account transferring funds to.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "transferredAmount",
						"type": "`$NUMBER`",
					},
				},
				"name": "transfer_fund",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/transferFunds",
								"segments": []any{
									map[string]any{
										"lit": "transferFunds",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"transferFunds",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"update_account": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "registration",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updatedBy",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "update_account",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "reference_line_item_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/prepaidCardService/updateAccount/{referenceLineItemID}",
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "prepaidCardService",
									},
									map[string]any{
										"lit": "updateAccount",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"prepaidCardService",
									"updateAccount",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"update_webhook_subscription_response_view": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "categories",
						"short": "The categories the customer is subscribed to.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"short": "The date and time the webhook was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "eventTypes",
						"short": "The event types the customer is subscribed to.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "expiresAt",
						"short": "The date and time the webhook expires.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "headers",
						"short": "Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "hmacSharedSecretKey",
						"short": "The HMAC secret key used to sign the webhook payload.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "payloadVerificationMethod",
						"short": "Method to verify webhook payload integrity",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "signingCertificate",
						"short": "The public X509 certificate used to sign the webhook payload.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"short": "The date and time when the webhook was last updated.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "The URL of the customer's webhook listener.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "webhookId",
						"short": "The ID of the webhook.",
						"type": "`$STRING`",
					},
				},
				"name": "update_webhook_subscription_response_view",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "webhook_id",
											"orig": "webhook_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/webhooks/{webhookId}",
								"rename": map[string]any{
									"param": map[string]any{
										"webhookId": "webhook_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "webhook_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"webhook_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks",
									"{webhook_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"webhook",
						},
					},
				},
			},
			"webhook": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "categories",
						"short": "The categories the customer wants to subscribe to.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"short": "The date and time the webhook was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "eventTypes",
						"short": "The event types the customer wants to subscribe to.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "expiresAt",
						"short": "The date and time the webhook expires.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "headers",
						"short": "Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "hmacSharedSecretKey",
						"short": "The HMAC secret key used to sign the webhook payload.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "payloadVerificationMethod",
						"short": "Method to verify webhook payload integrity.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "signingCertificate",
						"short": "The public X509 certificate used to sign the webhook payload.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"short": "The date and time when the webhook was last updated.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "The URL of the customer's webhook listener.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "webhookId",
						"short": "The ID of the webhook.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "webhook",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "webhook_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "from_revision",
											"orig": "from_revision",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "to_revision",
											"orig": "to_revision",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks/{webhookId}/replay",
								"rename": map[string]any{
									"param": map[string]any{
										"webhookId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "replay",
									},
								},
								"select": map[string]any{
									"$action": "replay",
									"exist": []any{
										"from_revision",
										"id",
										"to_revision",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks",
									"{id}",
									"replay",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "webhook_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks/{webhookId}/renew",
								"rename": map[string]any{
									"param": map[string]any{
										"webhookId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "renew",
									},
								},
								"select": map[string]any{
									"$action": "renew",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks",
									"{id}",
									"renew",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "webhook_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks/{webhookId}",
								"rename": map[string]any{
									"param": map[string]any{
										"webhookId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
