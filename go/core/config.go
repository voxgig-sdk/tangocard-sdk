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
				"brand_category": map[string]any{},
				"catalog": map[string]any{},
				"choice_product": map[string]any{},
				"country_view_summary": map[string]any{},
				"create_account_criterion": map[string]any{},
				"credential_type_view": map[string]any{},
				"credit_card": map[string]any{},
				"credit_card_deposit": map[string]any{},
				"credit_card_unregister": map[string]any{},
				"customer": map[string]any{},
				"email_template_view_verbose": map[string]any{},
				"embeddable_response_dto": map[string]any{},
				"exchange_rates_with_disclaimer": map[string]any{},
				"line_item": map[string]any{},
				"low_balance_alert_list_view": map[string]any{},
				"low_balance_alert_view": map[string]any{},
				"mobile_country": map[string]any{},
				"n14_webhook": map[string]any{},
				"n1_customer": map[string]any{},
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
						"title": "Account Identifier",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "accountNumber",
						"title": "Account Number",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "contactEmail",
						"title": "Contact Email",
						"type": "`$STRING`",
						"short": "optional, an email address for a designated representative for this account.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "currencyCode",
						"title": "Currency Code",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "currentBalance",
						"title": "Current Balance",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "displayName",
						"title": "Display Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "optional, a friendly name for this account.",
					},
					map[string]any{
						"name": "fundingNotification",
						"title": "Funding Notification",
						"type": "`$ARRAY`",
						"short": "optional, send funding notification emails to the following address(es).",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
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
								"kind": "http",
								"method": "GET",
								"orig": "/accounts",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
								},
								"parts": []any{
									"accounts",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "account_number",
											"orig": "account_number",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "contact_email",
											"orig": "contact_email",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "currency_code",
											"orig": "currency_code",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "display_name",
											"orig": "display_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "funding_notification_email",
											"orig": "funding_notification_email",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_balance",
											"orig": "max_balance",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_date_created_at",
											"orig": "max_date_created_at",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "min_balance",
											"orig": "min_balance",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "min_date_created_at",
											"orig": "min_date_created_at",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "paginate",
											"orig": "paginate",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{accountIdentifier}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"accountIdentifier": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "account_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/customers/{customerIdentifier}/accounts/{accountIdentifier}",
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
								"parts": []any{
									"customers",
									"{customer_identifier}",
									"accounts",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"accountIdentifier": "id",
										"customerIdentifier": "customer_identifier",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "account_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"customer_identifier",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.customer",
						},
					},
				},
			},
			"add_comment_escalation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "assignee",
						"title": "Assignee",
						"type": "`$INTEGER`",
						"short": "Assignee ID.",
						"format": "int32",
					},
					map[string]any{
						"name": "commentText",
						"title": "Comment Text",
						"type": "`$STRING`",
						"req": true,
						"short": "Free-text comment to add to the prepaid card.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inquiryCategoryCode",
						"title": "Inquiry Category Code",
						"type": "`$INTEGER`",
						"short": "Inquiry category code.",
						"format": "int32",
					},
					map[string]any{
						"name": "inquiryIdNumber",
						"title": "Inquiry Id Number",
						"type": "`$INTEGER`",
						"short": "Inquiry ID number.",
						"format": "int32",
					},
					map[string]any{
						"name": "inquirySource",
						"title": "Inquiry Source",
						"type": "`$STRING`",
						"short": "Origination source identifier (e.g.",
					},
					map[string]any{
						"name": "inquiryTypeCode",
						"title": "Inquiry Type Code",
						"type": "`$INTEGER`",
						"short": "Inquiry type code.",
						"format": "int32",
					},
					map[string]any{
						"name": "issueDescription",
						"title": "Issue Description",
						"type": "`$STRING`",
						"req": true,
						"short": "Short description of the issue.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"short": "Status of the inquiry (e.g.",
					},
					map[string]any{
						"name": "userId",
						"title": "User Id",
						"type": "`$STRING`",
						"short": "Agent or CSR user ID.",
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
								"kind": "http",
								"method": "POST",
								"orig": "/prepaidCardService/addCommentEscalation/{referenceLineItemID}",
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
								"parts": []any{
									"prepaidCardService",
									"addCommentEscalation",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "reference_line_item_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Category",
						"type": "`$STRING`",
						"short": "The category of events can be subscribed to.",
					},
					map[string]any{
						"name": "eventTypes",
						"title": "Event Types",
						"type": "`$ARRAY`",
						"short": "The event types that can be subscribed to.",
					},
				},
				"name": "all_event_type",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"webhooks",
									"eventtypes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
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
						"title": "Account Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "specify the account this order will be deducted from",
					},
					map[string]any{
						"name": "accountNumber",
						"title": "Account Number",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "amountCharged",
						"title": "Amount Charged",
						"type": "`$OBJECT`",
						"short": "Initial value and the total charged amount on the account",
					},
					map[string]any{
						"name": "campaign",
						"title": "Campaign",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Optional.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"format": "date-time",
					},
					map[string]any{
						"name": "customerIdentifier",
						"title": "Customer Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "specify the customer associated with the order.",
					},
					map[string]any{
						"name": "duplicateLineItemRefIds",
						"title": "Duplicate Line Item Ref Ids",
						"type": "`$OBJECT`",
						"short": "If any duplicate duplicateLineItemRefIds exist in the request",
					},
					map[string]any{
						"name": "externalRefID",
						"title": "External Ref Id",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Required.",
					},
					map[string]any{
						"name": "failedLineItems",
						"title": "Failed Line Items",
						"type": "`$ARRAY`",
						"short": "Failed line items list (business validations)",
					},
					map[string]any{
						"name": "fulfillBy",
						"title": "Fulfill By",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lineItems",
						"title": "Line Items",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Line Items of the bulk order a required field",
					},
					map[string]any{
						"name": "notes",
						"title": "Notes",
						"type": "`$STRING`",
						"short": "Optional order notes.",
					},
					map[string]any{
						"name": "orderStatus",
						"title": "Order Status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "purchaseOrderNumber",
						"title": "Purchase Order Number",
						"type": "`$STRING`",
						"short": "The Purchase Order Number associated with this order.",
					},
					map[string]any{
						"name": "referenceOrderID",
						"title": "Reference Order Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "sender",
						"title": "Sender",
						"type": "`$OBJECT`",
						"short": "Optional.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"short": "This status reflects about cart status or validation status based on the processing",
					},
					map[string]any{
						"name": "totalLineItems",
						"title": "Total Line Items",
						"type": "`$INTEGER`",
						"short": "Total number of line items submitted in the request",
						"format": "int32",
					},
					map[string]any{
						"name": "totalLineItemsRows",
						"title": "Total Line Items Rows",
						"type": "`$INTEGER`",
						"format": "int64",
					},
				},
				"name": "async_order",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/asyncOrders",
								"segments": []any{
									map[string]any{
										"lit": "asyncOrders",
									},
								},
								"parts": []any{
									"asyncOrders",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/asyncOrders",
								"segments": []any{
									map[string]any{
										"lit": "asyncOrders",
									},
								},
								"parts": []any{
									"asyncOrders",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.orders`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "account_identifier",
											"orig": "account_identifier",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "campaign",
											"orig": "campaign",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "currency_code",
											"orig": "currency_code",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "delivery_method",
											"orig": "delivery_method",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "elements_per_block",
											"orig": "elements_per_block",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "external_ref_id",
											"orig": "external_ref_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "line_item_note",
											"orig": "line_item_note",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "line_item_status",
											"orig": "line_item_status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_amount",
											"orig": "max_amount",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_result",
											"orig": "max_result",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "min_amount",
											"orig": "min_amount",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "note",
											"orig": "note",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_status",
											"orig": "order_status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "ptid",
											"orig": "ptid",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "purchase_order_number",
											"orig": "purchase_order_number",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "recipient_email",
											"orig": "recipient_email",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "recipient_first_name",
											"orig": "recipient_first_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "recipient_last_name",
											"orig": "recipient_last_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "recipient_mobile_number",
											"orig": "recipient_mobile_number",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "reward_name",
											"orig": "reward_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "send_email",
											"orig": "send_email",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sender_email",
											"orig": "sender_email",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sender_first_name",
											"orig": "sender_first_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sender_last_name",
											"orig": "sender_last_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "utid",
											"orig": "utid",
											"type": "`$STRING`",
											"kind": "query",
										},
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
						"title": "Account Identifier",
						"type": "`$STRING`",
						"short": "Account identifier",
					},
					map[string]any{
						"name": "amountCharged",
						"title": "Amount Charged",
						"type": "`$OBJECT`",
						"short": "Initial value and the total charged amount on the account",
					},
					map[string]any{
						"name": "campaign",
						"title": "Campaign",
						"type": "`$STRING`",
						"short": "Campaign name",
					},
					map[string]any{
						"name": "completedAt",
						"title": "Completed At",
						"type": "`$STRING`",
						"short": "Order completion timestamp",
						"format": "date-time",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"short": "Order creation timestamp",
						"format": "date-time",
					},
					map[string]any{
						"name": "customerIdentifier",
						"title": "Customer Identifier",
						"type": "`$STRING`",
						"short": "Customer identifier",
					},
					map[string]any{
						"name": "externalRefID",
						"title": "External Ref Id",
						"type": "`$STRING`",
						"short": "External reference ID provided by client",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lineItems",
						"title": "Line Items",
						"type": "`$ARRAY`",
						"short": "list of line items",
					},
					map[string]any{
						"name": "notes",
						"title": "Notes",
						"type": "`$STRING`",
						"short": "Order notes",
					},
					map[string]any{
						"name": "orderErrors",
						"title": "Order Errors",
						"type": "`$ARRAY`",
						"short": "Order level errors",
					},
					map[string]any{
						"name": "orderStatus",
						"title": "Order Status",
						"type": "`$STRING`",
						"short": "Current status of the order",
					},
					map[string]any{
						"name": "pagination",
						"title": "Pagination",
						"type": "`$OBJECT`",
						"short": "Pagination information",
					},
					map[string]any{
						"name": "purchaseOrderNumber",
						"title": "Purchase Order Number",
						"type": "`$STRING`",
						"short": "Purchase order number",
					},
					map[string]any{
						"name": "referenceOrderID",
						"title": "Reference Order Id",
						"type": "`$STRING`",
						"short": "Internal reference order ID",
					},
					map[string]any{
						"name": "sender",
						"title": "Sender",
						"type": "`$OBJECT`",
						"short": "Sender information",
					},
					map[string]any{
						"name": "totalLineItems",
						"title": "Total Line Items",
						"type": "`$INTEGER`",
						"short": "Total number of line items",
						"format": "int64",
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
								"kind": "http",
								"method": "GET",
								"orig": "/asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}",
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
								"parts": []any{
									"asyncOrders",
									"customers",
									"{customer_identifier}",
									"accounts",
									"{account_identifier}",
									"{external_ref_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"accountIdentifier": "account_identifier",
										"customerIdentifier": "customer_identifier",
										"externalRefID": "external_ref_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_identifier",
											"orig": "account_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "external_ref_id",
											"orig": "external_ref_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "external_ref_line_item_i_d",
											"orig": "external_ref_line_item_i_d",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "failed_only",
											"orig": "failed_only",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
											"kind": "query",
											"example": "NjI=",
										},
										map[string]any{
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
											"kind": "query",
											"example": "NjE=",
										},
										map[string]any{
											"name": "reference_line_item_i_d",
											"orig": "reference_line_item_i_d",
											"type": "`$ARRAY`",
											"kind": "query",
										},
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
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}",
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
								"parts": []any{
									"asyncOrders",
									"customers",
									"{customer_identifier}",
									"accounts",
									"{account_identifier}",
									"{external_ref_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"accountIdentifier": "account_identifier",
										"customerIdentifier": "customer_identifier",
										"externalRefID": "external_ref_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_identifier",
											"orig": "account_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "external_ref_id",
											"orig": "external_ref_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_identifier",
										"customer_identifier",
										"external_ref_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.customer",
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"async_order_line_items_view": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accountIdentifier",
						"title": "Account Identifier",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "amountCharged",
						"title": "Amount Charged",
						"type": "`$OBJECT`",
						"short": "Initial value and the total charged amount on the account",
					},
					map[string]any{
						"name": "campaign",
						"title": "Campaign",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "customerIdentifier",
						"title": "Customer Identifier",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "externalRefID",
						"title": "External Ref Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lineItems",
						"title": "Line Items",
						"type": "`$ARRAY`",
						"short": "The List of Line Items for the Async Order.",
					},
					map[string]any{
						"name": "orderErrors",
						"title": "Order Errors",
						"type": "`$ARRAY`",
						"short": "The List of Errors for the Async Order.",
					},
					map[string]any{
						"name": "orderNotes",
						"title": "Order Notes",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "orderStatus",
						"title": "Order Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "pagination",
						"title": "Pagination",
						"type": "`$OBJECT`",
						"short": "The cursor for pagination of the async order line items.",
					},
					map[string]any{
						"name": "purchaseOrderNumber",
						"title": "Purchase Order Number",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "referenceOrderID",
						"title": "Reference Order Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "sender",
						"title": "Sender",
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
								"kind": "http",
								"method": "GET",
								"orig": "/asyncOrders/customers/{customerIdentifier}/accounts/{accountIdentifier}/{externalRefID}/lineItems",
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
								"parts": []any{
									"asyncOrders",
									"customers",
									"{customer_id}",
									"accounts",
									"{account_id}",
									"{external_ref_id}",
									"lineItems",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"accountIdentifier": "account_id",
										"customerIdentifier": "customer_id",
										"externalRefID": "external_ref_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "customer_id",
											"orig": "customer_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "external_ref_id",
											"orig": "external_ref_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "external_ref_line_item_i_d",
											"orig": "external_ref_line_item_i_d",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "failed_only",
											"orig": "failed_only",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
											"kind": "query",
											"example": "",
										},
										map[string]any{
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
											"kind": "query",
											"example": "",
										},
										map[string]any{
											"name": "reference_line_item_i_d",
											"orig": "reference_line_item_i_d",
											"type": "`$ARRAY`",
											"kind": "query",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.customer",
							"$.main.kit.entity.account",
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
								"parts": []any{
									"asyncOrders",
									"reasonCodes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.reasonCodes`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Delivery Date",
						"type": "`$STRING`",
						"short": "Optional.",
					},
					map[string]any{
						"name": "lineItemNote",
						"title": "Line Item Note",
						"type": "`$STRING`",
						"short": "Optional line item notes (up to 150 characters)",
					},
					map[string]any{
						"name": "senderInfo",
						"title": "Sender Info",
						"type": "`$OBJECT`",
						"short": "Optional.",
					},
				},
				"name": "async_update_line_item_view",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/asyncOrders/lineItems/{referenceLineItemId}",
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
								"parts": []any{
									"asyncOrders",
									"lineItems",
									"{reference_line_item_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemId": "reference_line_item_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.senderInfo`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "reference_line_item_id",
											"orig": "reference_line_item_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"reference_line_item_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.line_item",
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
								"kind": "http",
								"method": "DELETE",
								"orig": "/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}",
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
								"parts": []any{
									"customers",
									"{customer_identifier}",
									"accounts",
									"{account_id}",
									"lowbalance",
									"{balance_alert_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"accountIdentifier": "account_id",
										"balanceAlertID": "balance_alert_id",
										"customerIdentifier": "customer_identifier",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "balance_alert_id",
											"orig": "balance_alert_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"balance_alert_id",
										"customer_identifier",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.customer",
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"brand_category": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "identifier",
						"title": "Identifier",
						"type": "`$STRING`",
						"format": "uuid",
					},
				},
				"name": "brand_category",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/brandCategories",
								"segments": []any{
									map[string]any{
										"lit": "brandCategories",
									},
								},
								"parts": []any{
									"brandCategories",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.brandCategories`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Barcode Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "brandKey",
						"title": "Brand Key",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "brandName",
						"title": "Brand Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "brandRequirements",
						"title": "Brand Requirements",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "categories",
						"title": "Categories",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "createdDate",
						"title": "Created Date",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "disclaimer",
						"title": "Disclaimer",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "imageUrls",
						"title": "Image Urls",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "items",
						"title": "Items",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "lastUpdateDate",
						"title": "Last Update Date",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "shortDescription",
						"title": "Short Description",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "terms",
						"title": "Terms",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "catalog",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/choiceProducts/{choiceProductUtid}/catalog",
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
								"parts": []any{
									"choiceProducts",
									"{choice_product_id}",
									"catalog",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"choiceProductUtid": "choice_product_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.brands`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "choice_product_id",
											"orig": "choice_product_utid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "brand_key",
											"orig": "brand_key",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "brand_name",
											"orig": "brand_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "category_id",
											"orig": "category_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "country",
											"orig": "country",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "currency_code",
											"orig": "currency_code",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "fulfillment_type",
											"orig": "fulfillment_type",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "item_attribute",
											"orig": "item_attribute",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "reward_name",
											"orig": "reward_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "reward_type",
											"orig": "reward_type",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "utid",
											"orig": "utid",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "verbose",
											"orig": "verbose",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/catalogs",
								"segments": []any{
									map[string]any{
										"lit": "catalogs",
									},
								},
								"parts": []any{
									"catalogs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.brands`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "brand_key",
											"orig": "brand_key",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "brand_name",
											"orig": "brand_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "category_id",
											"orig": "category_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "country",
											"orig": "country",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "currency_code",
											"orig": "currency_code",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "fulfillment_type",
											"orig": "fulfillment_type",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "item_attribute",
											"orig": "item_attribute",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "reward_name",
											"orig": "reward_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "reward_type",
											"orig": "reward_type",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "utid",
											"orig": "utid",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "verbose",
											"orig": "verbose",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.choice_product",
						},
					},
				},
			},
			"choice_product": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "countries",
						"title": "Countries",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "currencyCode",
						"title": "Currency Code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rewardName",
						"title": "Reward Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "utid",
						"title": "Utid",
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
								"kind": "http",
								"method": "GET",
								"orig": "/choiceProducts",
								"segments": []any{
									map[string]any{
										"lit": "choiceProducts",
									},
								},
								"parts": []any{
									"choiceProducts",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.choiceProducts`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "country",
											"orig": "country",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "currency_code",
											"orig": "currency_code",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "reward_name",
											"orig": "reward_name",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"country",
										"currency_code",
										"reward_name",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/choiceProducts/{utid}",
								"segments": []any{
									map[string]any{
										"lit": "choiceProducts",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"choiceProducts",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"utid": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "utid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Country Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "preferredCurrency",
						"title": "Preferred Currency",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "threeLetterCode",
						"title": "Three Letter Code",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "twoLetterCode",
						"title": "Two Letter Code",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "country_view_summary",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/rewardCountries",
								"segments": []any{
									map[string]any{
										"lit": "rewardCountries",
									},
								},
								"parts": []any{
									"rewardCountries",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "country",
											"orig": "country",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "preferred_currency",
											"orig": "preferred_currency",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
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
						"title": "Account Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "A unique identifier for this account.",
					},
					map[string]any{
						"name": "contactEmail",
						"title": "Contact Email",
						"type": "`$STRING`",
						"req": true,
						"short": "An email address for a designated representative for this account.",
					},
					map[string]any{
						"name": "currencyCode",
						"title": "Currency Code",
						"type": "`$STRING`",
						"short": "The currency this account will accept for deposits/withdraws.",
					},
					map[string]any{
						"name": "displayName",
						"title": "Display Name",
						"type": "`$STRING`",
						"req": true,
						"short": "A friendly name for this account.",
					},
					map[string]any{
						"name": "fundingNotification",
						"title": "Funding Notification",
						"type": "`$ARRAY`",
						"short": "optional, send funding notification emails to the following address(es)",
					},
				},
				"name": "create_account_criterion",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/customers/{customerIdentifier}/accounts",
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
								"parts": []any{
									"customers",
									"{customer_identifier}",
									"accounts",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"customerIdentifier": "customer_identifier",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"customer_identifier",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.customer",
						},
					},
				},
			},
			"credential_type_view": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "credentialType",
						"title": "Credential Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "description",
						"title": "Description",
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
								"kind": "http",
								"method": "GET",
								"orig": "/credentialtypes",
								"segments": []any{
									map[string]any{
										"lit": "credentialtypes",
									},
								},
								"parts": []any{
									"credentialtypes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Account Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "specify the account this credit card is associated with",
					},
					map[string]any{
						"name": "accountNumber",
						"title": "Account Number",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "activationDate",
						"title": "Activation Date",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "billingAddress",
						"title": "Billing Address",
						"type": "`$OBJECT`",
						"req": true,
						"short": "required Enter the billing address information for the credit card that is being registered",
					},
					map[string]any{
						"name": "contactInformation",
						"title": "Contact Information",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "Optional.",
					},
					map[string]any{
						"name": "createdDate",
						"title": "Created Date",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "creditCard",
						"title": "Credit Card",
						"type": "`$OBJECT`",
						"req": true,
						"short": "required Enter the credit card details that is being registered",
					},
					map[string]any{
						"name": "customerIdentifier",
						"title": "Customer Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "specify the customer associated with the credit card.",
					},
					map[string]any{
						"name": "expirationDate",
						"title": "Expiration Date",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ipAddress",
						"title": "Ip Address",
						"type": "`$STRING`",
						"req": true,
						"short": "specify the The IP address of the person adding the credit card",
					},
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": "`$STRING`",
						"req": true,
						"short": "specify a label for the credit card",
					},
					map[string]any{
						"name": "lastFourDigits",
						"title": "Last Four Digits",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "token",
						"title": "Token",
						"type": "`$STRING`",
						"req": true,
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
								"kind": "http",
								"method": "POST",
								"orig": "/creditCards",
								"segments": []any{
									map[string]any{
										"lit": "creditCards",
									},
								},
								"parts": []any{
									"creditCards",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/creditCards",
								"segments": []any{
									map[string]any{
										"lit": "creditCards",
									},
								},
								"parts": []any{
									"creditCards",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "account_identifier",
											"orig": "account_identifier",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "account_number",
											"orig": "account_number",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "email_address",
											"orig": "email_address",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "expiration_date",
											"orig": "expiration_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "full_name",
											"orig": "full_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "label",
											"orig": "label",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "last_four_digit",
											"orig": "last_four_digit",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "paginate",
											"orig": "paginate",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "show_inactive",
											"orig": "show_inactive",
											"type": "`$STRING`",
											"kind": "query",
											"example": "false",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/creditCards/{token}",
								"segments": []any{
									map[string]any{
										"lit": "creditCards",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"creditCards",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"token": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "token",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Account Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "specify the account this credit card is associated with",
					},
					map[string]any{
						"name": "accountNumber",
						"title": "Account Number",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "amount",
						"title": "Amount",
						"type": "`$NUMBER`",
						"req": true,
						"short": "specify the amount to fund in USD",
					},
					map[string]any{
						"name": "amountCharged",
						"title": "Amount Charged",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "createdDate",
						"title": "Created Date",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "creditCardToken",
						"title": "Credit Card Token",
						"type": "`$STRING`",
						"req": true,
						"short": "specify the credit card token to fund with",
					},
					map[string]any{
						"name": "customerIdentifier",
						"title": "Customer Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "specify the customer associated with the credit card.",
					},
					map[string]any{
						"name": "externalRefID",
						"title": "External Ref Id",
						"type": "`$STRING`",
						"short": "specify the external reference id to associate with this funding action.",
					},
					map[string]any{
						"name": "feePercent",
						"title": "Fee Percent",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "referenceDepositID",
						"title": "Reference Deposit Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
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
								"kind": "http",
								"method": "POST",
								"orig": "/creditCardDeposits",
								"segments": []any{
									map[string]any{
										"lit": "creditCardDeposits",
									},
								},
								"parts": []any{
									"creditCardDeposits",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/creditCardDeposits/{referenceDepositID}",
								"segments": []any{
									map[string]any{
										"lit": "creditCardDeposits",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"creditCardDeposits",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"referenceDepositID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "reference_deposit_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Account Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "Specify the account this credit card is associated with.",
					},
					map[string]any{
						"name": "createdDate",
						"title": "Created Date",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "creditCardToken",
						"title": "Credit Card Token",
						"type": "`$STRING`",
						"req": true,
						"short": "Specify the credit card token to unregister.",
					},
					map[string]any{
						"name": "customerIdentifier",
						"title": "Customer Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "Specify the customer associated with the credit card.",
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "token",
						"title": "Token",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "credit_card_unregister",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/creditCardUnregisters",
								"segments": []any{
									map[string]any{
										"lit": "creditCardUnregisters",
									},
								},
								"parts": []any{
									"creditCardUnregisters",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Accounts",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "customerIdentifier",
						"title": "Customer Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "A unique identifier for this customer.",
					},
					map[string]any{
						"name": "displayName",
						"title": "Display Name",
						"type": "`$STRING`",
						"req": true,
						"short": "A friendly name for this customer.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
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
								"kind": "http",
								"method": "POST",
								"orig": "/customers",
								"segments": []any{
									map[string]any{
										"lit": "customers",
									},
								},
								"parts": []any{
									"customers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/customers",
								"segments": []any{
									map[string]any{
										"lit": "customers",
									},
								},
								"parts": []any{
									"customers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "account_display_name",
											"orig": "account_display_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "account_identifier",
											"orig": "account_identifier",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "account_max_date_created_at",
											"orig": "account_max_date_created_at",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "account_min_date_created_at",
											"orig": "account_min_date_created_at",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "account_number",
											"orig": "account_number",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "account_status",
											"orig": "account_status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "customer_max_date_created_at",
											"orig": "customer_max_date_created_at",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "customer_min_date_created_at",
											"orig": "customer_min_date_created_at",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "display_name",
											"orig": "display_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "paginate",
											"orig": "paginate",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/customers/{customerIdentifier}",
								"segments": []any{
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"customers",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"customerIdentifier": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "customer_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"email_template_view_verbose": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accentColor",
						"title": "Accent Color",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "A Hex color value, six hexadecimal digits preceded by a pound sign, used as an accent in the email.",
					},
					map[string]any{
						"name": "accessControl",
						"title": "Access Control",
						"type": "`$ARRAY`",
						"short": "(Optional) Which Customers and/or Accounts should have access to this template.",
					},
					map[string]any{
						"name": "accessControls",
						"title": "Access Controls",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "closing",
						"title": "Closing",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "After the reward credential, a space to close the email message to the recipient.",
					},
					map[string]any{
						"name": "customerServiceMessage",
						"title": "Customer Service Message",
						"type": "`$STRING`",
						"short": "If left null, Tango Card's Customer Support contact information will be included.",
					},
					map[string]any{
						"name": "defaults",
						"title": "Defaults",
						"type": "`$ARRAY`",
						"short": "If you want this template to be used at order time for the given Platform, Customer or Account when the Email Template Identifier (etid) is not provided with the order.",
					},
					map[string]any{
						"name": "etid",
						"title": "Etid",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "fromName",
						"title": "From Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The name that will appear in the From line of the email and the {from_name} in the text message.",
					},
					map[string]any{
						"name": "headerImage",
						"title": "Header Image",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "A Base64 encoded string of an image that will show as the header of the email.",
					},
					map[string]any{
						"name": "headerImageAltText",
						"title": "Header Image Alt Text",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The Alt Text for the Header Image in the email.",
					},
					map[string]any{
						"name": "messageBody",
						"title": "Message Body",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The message body for the email.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "A unique name to give the template.",
					},
					map[string]any{
						"name": "smsMessageBody",
						"title": "Sms Message Body",
						"type": "`$STRING`",
						"short": "The message body for the SMS.",
					},
					map[string]any{
						"name": "subject",
						"title": "Subject",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The Subject of the email.",
					},
				},
				"name": "email_template_view_verbose",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/digitalTemplates",
								"segments": []any{
									map[string]any{
										"lit": "digitalTemplates",
									},
								},
								"parts": []any{
									"digitalTemplates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/digitalTemplates",
								"segments": []any{
									map[string]any{
										"lit": "digitalTemplates",
									},
								},
								"parts": []any{
									"digitalTemplates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "elements_per_block",
											"orig": "elements_per_block",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"elements_per_block",
										"page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"digitalTemplates",
									"{etid}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "etid",
											"orig": "etid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"etid",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"digitalTemplates",
									"{etid}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "etid",
											"orig": "etid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"etid",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"embeddable_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "url",
						"title": "Url",
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
								"kind": "http",
								"method": "GET",
								"orig": "/lineItems/{referenceLineItemID}/embeddedUrl",
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
								"parts": []any{
									"lineItems",
									"{reference_line_item_id}",
									"embeddedUrl",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "reference_line_item_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "reference_line_item_id",
											"orig": "reference_line_item_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"reference_line_item_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.line_item",
						},
					},
				},
			},
			"exchange_rates_with_disclaimer": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "baseCurrency",
						"title": "Base Currency",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "baseFx",
						"title": "Base Fx",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "lastModifiedDate",
						"title": "Last Modified Date",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "rewardCurrency",
						"title": "Reward Currency",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "exchange_rates_with_disclaimer",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/exchangerates",
								"segments": []any{
									map[string]any{
										"lit": "exchangerates",
									},
								},
								"parts": []any{
									"exchangerates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.exchangeRates`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "base_currency",
											"orig": "base_currency",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "paginate",
											"orig": "paginate",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "reward_currency",
											"orig": "reward_currency",
											"type": "`$ARRAY`",
											"kind": "query",
										},
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
						"title": "Account Identifier",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "accountNumber",
						"title": "Account Number",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "amountCharged",
						"title": "Amount Charged",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "amountIssued",
						"title": "Amount Issued",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "campaign",
						"title": "Campaign",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "canCancel",
						"title": "Can Cancel",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "canFreeze",
						"title": "Can Freeze",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "customerIdentifier",
						"title": "Customer Identifier",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "dateIssued",
						"title": "Date Issued",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "deliveryMethod",
						"title": "Delivery Method",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "deliveryStatus",
						"title": "Delivery Status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "emailStatus",
						"title": "Email Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "etid",
						"title": "Etid",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "expirationDate",
						"title": "Expiration Date",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "externalReferenceLineItemID",
						"title": "External Reference Line Item Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lineItemActionHistory",
						"title": "Line Item Action History",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "lineItemActionReason",
						"title": "Line Item Action Reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lineItemErrors",
						"title": "Line Item Errors",
						"type": "`$ARRAY`",
						"short": "Errors related to the line item",
					},
					map[string]any{
						"name": "lineNumber",
						"title": "Line Number",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int32",
					},
					map[string]any{
						"name": "orderNotes",
						"title": "Order Notes",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "orderSource",
						"title": "Order Source",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "orderStatus",
						"title": "Order Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "ptid",
						"title": "Ptid",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "purchaseOrderNumber",
						"title": "Purchase Order Number",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "quantity",
						"title": "Quantity",
						"type": "`$INTEGER`",
						"short": "quantity of line items",
						"format": "int32",
					},
					map[string]any{
						"name": "recipient",
						"title": "Recipient",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "redemptionHistory",
						"title": "Redemption History",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "referenceLineItemID",
						"title": "Reference Line Item Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "referenceOrderID",
						"title": "Reference Order Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "reissuedFromReferenceLineItemId",
						"title": "Reissued From Reference Line Item Id",
						"type": "`$STRING`",
						"short": "Reissued from reference line item ID",
					},
					map[string]any{
						"name": "reissuedToReferenceLineItemId",
						"title": "Reissued To Reference Line Item Id",
						"type": "`$STRING`",
						"short": "Reissued to reference line item ID",
					},
					map[string]any{
						"name": "remainingBalance",
						"title": "Remaining Balance",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "resendHistory",
						"title": "Resend History",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "reward",
						"title": "Reward",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "rewardName",
						"title": "Reward Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "rewardStatus",
						"title": "Reward Status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rewardViewHistory",
						"title": "Reward View History",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "sender",
						"title": "Sender",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "utid",
						"title": "Utid",
						"type": "`$STRING`",
						"req": true,
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
								"kind": "http",
								"method": "POST",
								"orig": "/lineItems/{referenceLineItemID}/cancel",
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
								"parts": []any{
									"lineItems",
									"{reference_line_item_id}",
									"cancel",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "reference_line_item_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "reference_line_item_id",
											"orig": "reference_line_item_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "cancel",
									"exist": []any{
										"reference_line_item_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/lineItems/{referenceLineItemID}/freeze",
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
								"parts": []any{
									"lineItems",
									"{reference_line_item_id}",
									"freeze",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "reference_line_item_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "reference_line_item_id",
											"orig": "reference_line_item_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "freeze",
									"exist": []any{
										"reference_line_item_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/lineItems/{referenceLineItemID}/unfreeze",
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
								"parts": []any{
									"lineItems",
									"{reference_line_item_id}",
									"unfreeze",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "reference_line_item_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "reference_line_item_id",
											"orig": "reference_line_item_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "unfreeze",
									"exist": []any{
										"reference_line_item_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/lineItems",
								"segments": []any{
									map[string]any{
										"lit": "lineItems",
									},
								},
								"parts": []any{
									"lineItems",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "account_identifier",
											"orig": "account_identifier",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "campaign",
											"orig": "campaign",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "column_sort_ascending",
											"orig": "column_sort_ascending",
											"type": "`$STRING`",
											"kind": "query",
											"example": "false",
										},
										map[string]any{
											"name": "column_sort_name",
											"orig": "column_sort_name",
											"type": "`$STRING`",
											"kind": "query",
											"example": "dateIssued",
										},
										map[string]any{
											"name": "delivery_method",
											"orig": "delivery_method",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "delivery_status",
											"orig": "delivery_status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "elements_per_block",
											"orig": "elements_per_block",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "email_status",
											"orig": "email_status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "etid",
											"orig": "etid",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "external_ref_id",
											"orig": "external_ref_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "has_remaining_balance",
											"orig": "has_remaining_balance",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_remaining_balance",
											"orig": "max_remaining_balance",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "min_remaining_balance",
											"orig": "min_remaining_balance",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_note",
											"orig": "order_note",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_source",
											"orig": "order_source",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_status",
											"orig": "order_status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_key",
											"orig": "page_key",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_previous",
											"orig": "page_previous",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "ptid",
											"orig": "ptid",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "purchase_order_number",
											"orig": "purchase_order_number",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "recipient_city",
											"orig": "recipient_city",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "recipient_country",
											"orig": "recipient_country",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "recipient_email",
											"orig": "recipient_email",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "recipient_first_name",
											"orig": "recipient_first_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "recipient_last_name",
											"orig": "recipient_last_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "recipient_mobile_number",
											"orig": "recipient_mobile_number",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "recipient_postal_code",
											"orig": "recipient_postal_code",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "recipient_state_or_province",
											"orig": "recipient_state_or_province",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "recipient_street_line1",
											"orig": "recipient_street_line1",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "recipient_street_line2",
											"orig": "recipient_street_line2",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "reference_order_id",
											"orig": "reference_order_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "utid",
											"orig": "utid",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/lineItems/{referenceLineItemID}",
								"segments": []any{
									map[string]any{
										"lit": "lineItems",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"lineItems",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "reference_line_item_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"low_balance_alert_list_view": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accountIdentifier",
						"title": "Account Identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "balanceAlertDisplayName",
						"title": "Balance Alert Display Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "balanceAlertID",
						"title": "Balance Alert Id",
						"type": "`$STRING`",
						"format": "uuid",
					},
					map[string]any{
						"name": "balanceAlertNotification",
						"title": "Balance Alert Notification",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "balanceAlertThreshold",
						"title": "Balance Alert Threshold",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "customerIdentifier",
						"title": "Customer Identifier",
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
								"kind": "http",
								"method": "GET",
								"orig": "/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance",
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
								"parts": []any{
									"customers",
									"{customer_identifier}",
									"accounts",
									"{account_identifier}",
									"lowbalance",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"accountIdentifier": "account_identifier",
										"customerIdentifier": "customer_identifier",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_identifier",
											"orig": "account_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "balance_alert_display_name",
											"orig": "balance_alert_display_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "balance_alert_notification",
											"orig": "balance_alert_notification",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "balance_alert_threshold",
											"orig": "balance_alert_threshold",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "elements_per_block",
											"orig": "elements_per_block",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.customer",
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"low_balance_alert_view": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accountIdentifier",
						"title": "Account Identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "balanceAlertDisplayName",
						"title": "Balance Alert Display Name",
						"type": "`$STRING`",
						"short": "A friendly name for this low balance alert (will be displayed in the Tango Portal).",
					},
					map[string]any{
						"name": "balanceAlertID",
						"title": "Balance Alert Id",
						"type": "`$STRING`",
						"format": "uuid",
					},
					map[string]any{
						"name": "balanceAlertNotification",
						"title": "Balance Alert Notification",
						"type": "`$ARRAY`",
						"short": "Send low balance notification emails to the following address(es).",
					},
					map[string]any{
						"name": "balanceAlertThreshold",
						"title": "Balance Alert Threshold",
						"type": "`$NUMBER`",
						"short": "The threshold amount that will trigger the low balance alert.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "customerIdentifier",
						"title": "Customer Identifier",
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
								"kind": "http",
								"method": "POST",
								"orig": "/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance",
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
								"parts": []any{
									"customers",
									"{customer_identifier}",
									"accounts",
									"{account_identifier}",
									"lowbalance",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"accountIdentifier": "account_identifier",
										"customerIdentifier": "customer_identifier",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_identifier",
											"orig": "account_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_identifier",
										"customer_identifier",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}",
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
								"parts": []any{
									"customers",
									"{customer_identifier}",
									"accounts",
									"{account_id}",
									"lowbalance",
									"{balance_alert_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"accountIdentifier": "account_id",
										"balanceAlertID": "balance_alert_id",
										"customerIdentifier": "customer_identifier",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "balance_alert_id",
											"orig": "balance_alert_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"balance_alert_id",
										"customer_identifier",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/customers/{customerIdentifier}/accounts/{accountIdentifier}/lowbalance/{balanceAlertID}",
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
								"parts": []any{
									"customers",
									"{customer_identifier}",
									"accounts",
									"{account_id}",
									"lowbalance",
									"{balance_alert_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"accountIdentifier": "account_id",
										"balanceAlertID": "balance_alert_id",
										"customerIdentifier": "customer_identifier",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "balance_alert_id",
											"orig": "balance_alert_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"balance_alert_id",
										"customer_identifier",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.customer",
							"$.main.kit.entity.account",
						},
						[]any{
							"$.main.kit.entity.customer",
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"mobile_country": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "countryCode",
						"title": "Country Code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "countryName",
						"title": "Country Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isoCode",
						"title": "Iso Code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "languageCode",
						"title": "Language Code",
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
								"kind": "http",
								"method": "GET",
								"orig": "/mobileCountries",
								"segments": []any{
									map[string]any{
										"lit": "mobileCountries",
									},
								},
								"parts": []any{
									"mobileCountries",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Categories",
						"type": "`$ARRAY`",
						"short": "The categories the customer wants to subscribe to.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"short": "The date and time the webhook was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "eventTypes",
						"title": "Event Types",
						"type": "`$ARRAY`",
						"short": "The event types the customer wants to subscribe to.",
					},
					map[string]any{
						"name": "expiresAt",
						"title": "Expires At",
						"type": "`$STRING`",
						"short": "The date and time the webhook expires.",
						"format": "date-time",
					},
					map[string]any{
						"name": "headers",
						"title": "Headers",
						"type": "`$ARRAY`",
						"short": "Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.",
					},
					map[string]any{
						"name": "hmacSharedSecretKey",
						"title": "Hmac Shared Secret Key",
						"type": "`$STRING`",
						"short": "The HMAC secret key used to sign the webhook payload.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "payloadVerificationMethod",
						"title": "Payload Verification Method",
						"type": "`$STRING`",
						"short": "Method to verify webhook payload authenticity",
					},
					map[string]any{
						"name": "signingCertificate",
						"title": "Signing Certificate",
						"type": "`$STRING`",
						"short": "The public X509 certificate used to sign the webhook payload.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"short": "The date and time when the webhook was last updated.",
						"format": "date-time",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The URL of the customer's webhook listener.",
					},
					map[string]any{
						"name": "webhookId",
						"title": "Webhook Id",
						"type": "`$STRING`",
						"short": "The ID of the webhook.",
						"format": "uuid",
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
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks/{webhookId}/tests/{testName}",
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
								"parts": []any{
									"webhooks",
									"{webhook_id}",
									"tests",
									"{test_name}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"testName": "test_name",
										"webhookId": "webhook_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "test_name",
											"orig": "test_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "webhook_id",
											"orig": "webhook_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"test_name",
										"webhook_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks/{webhookId}/tests",
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
								"parts": []any{
									"webhooks",
									"{webhook_id}",
									"tests",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"webhookId": "webhook_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "webhook_id",
											"orig": "webhook_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"webhook_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
								},
								"parts": []any{
									"webhooks",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
								},
								"parts": []any{
									"webhooks",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "category",
											"orig": "category",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_from",
											"orig": "created_at_from",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "created_at_to",
											"orig": "created_at_to",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "event_type",
											"orig": "event_type",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "expires_at_from",
											"orig": "expires_at_from",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "expires_at_to",
											"orig": "expires_at_to",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "header_name",
											"orig": "header_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "header_value",
											"orig": "header_value",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "url",
											"orig": "url",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks/{webhookId}/events",
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
								"parts": []any{
									"webhooks",
									"{webhook_id}",
									"events",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"webhookId": "webhook_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "webhook_id",
											"orig": "webhook_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "from_revision",
											"orig": "from_revision",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "to_revision",
											"orig": "to_revision",
											"type": "`$INTEGER`",
											"kind": "query",
										},
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
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/webhooks/{webhookId}",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"webhooks",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"webhookId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "webhook_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.webhook",
						},
						[]any{
							"$.main.kit.entity.webhook",
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
								"kind": "http",
								"method": "GET",
								"orig": "/customers/{customerIdentifier}/accounts",
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
								"parts": []any{
									"customers",
									"{customer_identifier}",
									"accounts",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"customerIdentifier": "customer_identifier",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "account_number",
											"orig": "account_number",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "contact_email",
											"orig": "contact_email",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "currency_code",
											"orig": "currency_code",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "display_name",
											"orig": "display_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "funding_notification_email",
											"orig": "funding_notification_email",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_balance",
											"orig": "max_balance",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_date_created_at",
											"orig": "max_date_created_at",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_result",
											"orig": "max_result",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "min_balance",
											"orig": "min_balance",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "min_date_created_at",
											"orig": "min_date_created_at",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "next_cursor",
											"orig": "next_cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "paginate",
											"orig": "paginate",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "prev_cursor",
											"orig": "prev_cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.customer",
						},
					},
				},
			},
			"n8_line_item": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "campaign",
						"title": "Campaign",
						"type": "`$STRING`",
						"short": "optional campaign that may be used to administratively categorize a specific order.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "orderNotes",
						"title": "Order Notes",
						"type": "`$STRING`",
						"short": "Optional order notes (up to 150 characters)",
					},
					map[string]any{
						"name": "purchaseOrderNumber",
						"title": "Purchase Order Number",
						"type": "`$STRING`",
						"short": "The Purchase Order Number associated with this order.",
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
								"kind": "http",
								"method": "PATCH",
								"orig": "/lineItems/{referenceLineItemID}",
								"segments": []any{
									map[string]any{
										"lit": "lineItems",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"lineItems",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "reference_line_item_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Id",
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
								"kind": "http",
								"method": "DELETE",
								"orig": "/digitalTemplates/{etid}",
								"segments": []any{
									map[string]any{
										"lit": "digitalTemplates",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"digitalTemplates",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"etid": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "etid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Account Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "Specify the account this order will be deducted from",
					},
					map[string]any{
						"name": "accountNumber",
						"title": "Account Number",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "amount",
						"title": "Amount",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Specify the face value of of the reward.",
					},
					map[string]any{
						"name": "amountCharged",
						"title": "Amount Charged",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "asyncOrderEntity",
						"title": "Async Order Entity",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "campaign",
						"title": "Campaign",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Optional.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "customFields",
						"title": "Custom Fields",
						"type": "`$OBJECT`",
						"short": "Optional.",
					},
					map[string]any{
						"name": "customerIdentifier",
						"title": "Customer Identifier",
						"type": "`$STRING`",
						"req": true,
						"short": "Specify the customer associated with the order.",
					},
					map[string]any{
						"name": "deliveryMethod",
						"title": "Delivery Method",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Specify delivery method for the order",
					},
					map[string]any{
						"name": "denomination",
						"title": "Denomination",
						"type": "`$OBJECT`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
					},
					map[string]any{
						"name": "emailSubject",
						"title": "Email Subject",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Optional.",
					},
					map[string]any{
						"name": "etid",
						"title": "Etid",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Optional.",
					},
					map[string]any{
						"name": "expirationDate",
						"title": "Expiration Date",
						"type": "`$STRING`",
						"short": "Optional for Promo Links, the exact calendar date the Promo Link will expire.",
					},
					map[string]any{
						"name": "externalRefID",
						"title": "External Ref Id",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Optional.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lineItemStatus",
						"title": "Line Item Status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Optional gift message",
					},
					map[string]any{
						"name": "notes",
						"title": "Notes",
						"type": "`$STRING`",
						"short": "Optional order notes.",
					},
					map[string]any{
						"name": "orderClientSource",
						"title": "Order Client Source",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "orderExternalRefIdDupe",
						"title": "Order External Ref Id Dupe",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "orderStatus",
						"title": "Order Status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ptid",
						"title": "Ptid",
						"type": "`$STRING`",
						"short": "Only required for Printed Reward Links, the unique identifier for the Printed Reward Link Template provided in the Tango Portal on the Printed Template page.",
					},
					map[string]any{
						"name": "purchaseOrderNumber",
						"title": "Purchase Order Number",
						"type": "`$STRING`",
						"short": "The Purchase Order Number associated with this order.",
					},
					map[string]any{
						"name": "recipient",
						"title": "Recipient",
						"type": "`$OBJECT`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "Required if deliveryMethod is EMAIL, PHONE, or ADDRESS.",
					},
					map[string]any{
						"name": "redemptionInstructions",
						"title": "Redemption Instructions",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "referenceLineItemID",
						"title": "Reference Line Item Id",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "referenceOrderID",
						"title": "Reference Order Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "reward",
						"title": "Reward",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "rewardName",
						"title": "Reward Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "sendEmail",
						"title": "Send Email",
						"type": "`$BOOLEAN`",
						"short": "Deprecated Oct 1, 2025.",
						"deprecated": true,
					},
					map[string]any{
						"name": "sender",
						"title": "Sender",
						"type": "`$OBJECT`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "Optional.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "utid",
						"title": "Utid",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier for the reward you are sending as provided in the Get Catalog call",
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
								"kind": "http",
								"method": "POST",
								"orig": "/orders",
								"segments": []any{
									map[string]any{
										"lit": "orders",
									},
								},
								"parts": []any{
									"orders",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/orders",
								"segments": []any{
									map[string]any{
										"lit": "orders",
									},
								},
								"parts": []any{
									"orders",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "account_identifier",
											"orig": "account_identifier",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "campaign",
											"orig": "campaign",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "currency_code",
											"orig": "currency_code",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "customer_identifier",
											"orig": "customer_identifier",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "delivery_method",
											"orig": "delivery_method",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "elements_per_block",
											"orig": "elements_per_block",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "external_ref_id",
											"orig": "external_ref_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "line_item_note",
											"orig": "line_item_note",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "line_item_status",
											"orig": "line_item_status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_amount",
											"orig": "max_amount",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "min_amount",
											"orig": "min_amount",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "note",
											"orig": "note",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_status",
											"orig": "order_status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "ptid",
											"orig": "ptid",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "purchase_order_number",
											"orig": "purchase_order_number",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "recipient_email",
											"orig": "recipient_email",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "recipient_first_name",
											"orig": "recipient_first_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "recipient_last_name",
											"orig": "recipient_last_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "recipient_mobile_number",
											"orig": "recipient_mobile_number",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "reward_name",
											"orig": "reward_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "send_email",
											"orig": "send_email",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "sender_email",
											"orig": "sender_email",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sender_first_name",
											"orig": "sender_first_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sender_last_name",
											"orig": "sender_last_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "utid",
											"orig": "utid",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/orders/{referenceOrderID}",
								"segments": []any{
									map[string]any{
										"lit": "orders",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"orders",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"referenceOrderID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "reference_order_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Amount",
						"type": "`$NUMBER`",
						"short": "Optional.",
					},
					map[string]any{
						"name": "deliveryMethod",
						"title": "Delivery Method",
						"type": "`$STRING`",
						"short": "Optional.",
					},
					map[string]any{
						"name": "notes",
						"title": "Notes",
						"type": "`$STRING`",
						"short": "Optional order notes (up to 150 characters).",
					},
					map[string]any{
						"name": "otherReason",
						"title": "Other Reason",
						"type": "`$STRING`",
						"short": "Required when reasonCode is \"OTHER\", enter the reason why the line item is being reissued.",
					},
					map[string]any{
						"name": "reasonCode",
						"title": "Reason Code",
						"type": "`$STRING`",
						"req": true,
						"short": "Required.",
					},
					map[string]any{
						"name": "recipient",
						"title": "Recipient",
						"type": "`$OBJECT`",
						"short": "Optional.",
					},
				},
				"name": "order_view_summary",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/lineItems/{referenceLineItemID}/reissue",
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
								"parts": []any{
									"lineItems",
									"{reference_line_item_id}",
									"reissue",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "reference_line_item_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "reference_line_item_id",
											"orig": "reference_line_item_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"reference_line_item_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.line_item",
						},
					},
				},
			},
			"prepaid_card_info": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "balance",
						"title": "Balance",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "card",
						"title": "Card",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "comments",
						"title": "Comments",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "registration",
						"title": "Registration",
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
								"kind": "http",
								"method": "GET",
								"orig": "/prepaidCardService/getCardInfo/{referenceLineItemID}",
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
								"parts": []any{
									"prepaidCardService",
									"getCardInfo",
									"{reference_line_item_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "reference_line_item_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "reference_line_item_id",
											"orig": "reference_line_item_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"reference_line_item_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"prepaid_card_transaction": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "journal",
						"title": "Journal",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "page",
						"title": "Page",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"name": "prepaid_card_transaction",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/prepaidCardService/getCardTransactions/{referenceLineItemID}",
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
								"parts": []any{
									"prepaidCardService",
									"getCardTransactions",
									"{reference_line_item_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "reference_line_item_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "reference_line_item_id",
											"orig": "reference_line_item_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"reference_line_item_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"reissue_card": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "commentText",
						"title": "Comment Text",
						"type": "`$STRING`",
						"short": "Optional comment for the card replacement.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reason",
						"title": "Reason",
						"type": "`$STRING`",
						"req": true,
						"short": "Reason for the card replacement.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"short": "Status of the reissue request.",
					},
					map[string]any{
						"name": "updatedBy",
						"title": "Updated By",
						"type": "`$STRING`",
						"req": true,
						"short": "Identifier of the agent initiating the request.",
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
								"kind": "http",
								"method": "POST",
								"orig": "/prepaidCardService/reissueCard/{referenceLineItemID}",
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
								"parts": []any{
									"prepaidCardService",
									"reissueCard",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "reference_line_item_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Replacement Reasons",
						"type": "`$ARRAY`",
						"short": "List of valid replacement reason codes.",
					},
				},
				"name": "replacement_reason",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"prepaidCardService",
									"replacementReasons",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.replacementReasons`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "New Delivery Method",
						"type": "`$STRING`",
						"short": "The delivery method used to re-deliver the reward.",
					},
					map[string]any{
						"name": "newEmail",
						"title": "New Email",
						"type": "`$STRING`",
						"short": "A new email address to re-deliver this order to.",
					},
					map[string]any{
						"name": "newEtid",
						"title": "New Etid",
						"type": "`$STRING`",
						"short": "A new etid used to re-deliver an order.",
					},
					map[string]any{
						"name": "newMobile",
						"title": "New Mobile",
						"type": "`$STRING`",
						"short": "A new mobile number to use for resending an order.",
					},
					map[string]any{
						"name": "newMobileNumber",
						"title": "New Mobile Number",
						"type": "`$STRING`",
						"short": "A new phone number to re-deliver this order to.",
					},
					map[string]any{
						"name": "otherReason",
						"title": "Other Reason",
						"type": "`$STRING`",
						"short": "Required when lineItemResendReasonCode is \"OTHER\", enter the reason why the line item is being RESENT",
					},
					map[string]any{
						"name": "reasonCode",
						"title": "Reason Code",
						"type": "`$STRING`",
						"short": "Enter the reason why this line item is being RESENT (respectively)",
					},
				},
				"name": "resend",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/lineItems/{referenceLineItemId}/resends",
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
								"parts": []any{
									"lineItems",
									"{line_item_id}",
									"resends",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemId": "line_item_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "line_item_id",
											"orig": "reference_line_item_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"line_item_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/orders/{referenceOrderID}/resends",
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
								"parts": []any{
									"orders",
									"{reference_order_id}",
									"resends",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"referenceOrderID": "reference_order_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "reference_order_id",
											"orig": "reference_order_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"reference_order_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.line_item",
						},
						[]any{
							"$.main.kit.entity.order",
						},
					},
				},
			},
			"reward_reasons_map": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "CANCEL",
						"title": "Cancel",
						"type": "`$OBJECT`",
						"short": "Map of cancel reasons",
					},
					map[string]any{
						"name": "CANCEL_AND_REISSUE",
						"title": "Cancel And Reissue",
						"type": "`$OBJECT`",
						"short": "Map of cancel and reissue reasons",
					},
					map[string]any{
						"name": "FREEZE",
						"title": "Freeze",
						"type": "`$OBJECT`",
						"short": "Map of freeze reasons",
					},
					map[string]any{
						"name": "UNFREEZE",
						"title": "Unfreeze",
						"type": "`$OBJECT`",
						"short": "Map of unfreeze reasons",
					},
				},
				"name": "reward_reasons_map",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"lineItems",
									"reasonCodes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Amount",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Specify the currency amount of the funds being transferred.",
					},
					map[string]any{
						"name": "externalRefID",
						"title": "External Ref Id",
						"type": "`$STRING`",
						"short": "specify the external reference id to associate with this funding action.",
					},
					map[string]any{
						"name": "transferDate",
						"title": "Transfer Date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "transferFrom",
						"title": "Transfer From",
						"type": "`$OBJECT`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The accountIdentifier for the Account transferring funds from.",
					},
					map[string]any{
						"name": "transferNotes",
						"title": "Transfer Notes",
						"type": "`$STRING`",
						"short": "Optional transfer notes (up to 150 characters)",
					},
					map[string]any{
						"name": "transferTo",
						"title": "Transfer To",
						"type": "`$OBJECT`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The accountIdentifier for the Account transferring funds to.",
					},
					map[string]any{
						"name": "transferredAmount",
						"title": "Transferred Amount",
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
								"kind": "http",
								"method": "POST",
								"orig": "/transferFunds",
								"segments": []any{
									map[string]any{
										"lit": "transferFunds",
									},
								},
								"parts": []any{
									"transferFunds",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "registration",
						"title": "Registration",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updatedBy",
						"title": "Updated By",
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
								"kind": "http",
								"method": "POST",
								"orig": "/prepaidCardService/updateAccount/{referenceLineItemID}",
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
								"parts": []any{
									"prepaidCardService",
									"updateAccount",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"referenceLineItemID": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "reference_line_item_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Categories",
						"type": "`$ARRAY`",
						"short": "The categories the customer is subscribed to.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"short": "The date and time the webhook was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "eventTypes",
						"title": "Event Types",
						"type": "`$ARRAY`",
						"short": "The event types the customer is subscribed to.",
					},
					map[string]any{
						"name": "expiresAt",
						"title": "Expires At",
						"type": "`$STRING`",
						"short": "The date and time the webhook expires.",
						"format": "date-time",
					},
					map[string]any{
						"name": "headers",
						"title": "Headers",
						"type": "`$ARRAY`",
						"short": "Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.",
					},
					map[string]any{
						"name": "hmacSharedSecretKey",
						"title": "Hmac Shared Secret Key",
						"type": "`$STRING`",
						"short": "The HMAC secret key used to sign the webhook payload.",
					},
					map[string]any{
						"name": "payloadVerificationMethod",
						"title": "Payload Verification Method",
						"type": "`$STRING`",
						"short": "Method to verify webhook payload integrity",
					},
					map[string]any{
						"name": "signingCertificate",
						"title": "Signing Certificate",
						"type": "`$STRING`",
						"short": "The public X509 certificate used to sign the webhook payload.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"short": "The date and time when the webhook was last updated.",
						"format": "date-time",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "The URL of the customer's webhook listener.",
					},
					map[string]any{
						"name": "webhookId",
						"title": "Webhook Id",
						"type": "`$STRING`",
						"short": "The ID of the webhook.",
						"format": "uuid",
					},
				},
				"name": "update_webhook_subscription_response_view",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/webhooks/{webhookId}",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "webhook_id",
									},
								},
								"parts": []any{
									"webhooks",
									"{webhook_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"webhookId": "webhook_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "webhook_id",
											"orig": "webhook_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"webhook_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.webhook",
						},
					},
				},
			},
			"webhook": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "categories",
						"title": "Categories",
						"type": "`$ARRAY`",
						"short": "The categories the customer wants to subscribe to.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"short": "The date and time the webhook was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "eventTypes",
						"title": "Event Types",
						"type": "`$ARRAY`",
						"short": "The event types the customer wants to subscribe to.",
					},
					map[string]any{
						"name": "expiresAt",
						"title": "Expires At",
						"type": "`$STRING`",
						"short": "The date and time the webhook expires.",
						"format": "date-time",
					},
					map[string]any{
						"name": "headers",
						"title": "Headers",
						"type": "`$ARRAY`",
						"short": "Appropriate for the authentication method the customer wants Tango to use when calling their webhook listener.",
					},
					map[string]any{
						"name": "hmacSharedSecretKey",
						"title": "Hmac Shared Secret Key",
						"type": "`$STRING`",
						"short": "The HMAC secret key used to sign the webhook payload.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "payloadVerificationMethod",
						"title": "Payload Verification Method",
						"type": "`$STRING`",
						"short": "Method to verify webhook payload integrity.",
					},
					map[string]any{
						"name": "signingCertificate",
						"title": "Signing Certificate",
						"type": "`$STRING`",
						"short": "The public X509 certificate used to sign the webhook payload.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"short": "The date and time when the webhook was last updated.",
						"format": "date-time",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "The URL of the customer's webhook listener.",
					},
					map[string]any{
						"name": "webhookId",
						"title": "Webhook Id",
						"type": "`$STRING`",
						"short": "The ID of the webhook.",
						"format": "uuid",
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
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks/{webhookId}/replay",
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
								"parts": []any{
									"webhooks",
									"{id}",
									"replay",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"webhookId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "webhook_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "from_revision",
											"orig": "from_revision",
											"type": "`$INTEGER`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "to_revision",
											"orig": "to_revision",
											"type": "`$INTEGER`",
											"kind": "query",
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks/{webhookId}/renew",
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
								"parts": []any{
									"webhooks",
									"{id}",
									"renew",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"webhookId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "webhook_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "renew",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks/{webhookId}",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"webhooks",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"webhookId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "webhook_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
