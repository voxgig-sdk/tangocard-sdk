package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/tangocard-sdk/go/utility/struct"
)

type TangocardSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewTangocardSDK(options map[string]any) *TangocardSDK {
	sdk := &TangocardSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *TangocardSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *TangocardSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *TangocardSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *TangocardSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *TangocardSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *TangocardSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *TangocardSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("TangocardSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *TangocardSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

// Raw GraphQL access: the pressure valve that makes the generated surface's
// deliberate omissions (per-call selection sets, typed filter builders,
// batching, subscriptions) livable — the whole schema stays reachable.
//
// Thin wrapper over the same prepare/fetch path Direct uses, with the one
// thing raw Direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
// as a top-level `errors` array, so status alone would report a failed query
// as ok.
//
// NOTE: like Direct, this bypasses the feature pipeline — no retry,
// ratelimit or paging features apply.
func (sdk *TangocardSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("TangocardSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Account returns a Account entity bound to this client.
// Idiomatic usage: client.Account(nil).List(nil, nil) or
// client.Account(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) Account(data map[string]any) TangocardEntity {
	return NewAccountEntityFunc(sdk, data)
}


// AddCommentEscalation returns a AddCommentEscalation entity bound to this client.
// Idiomatic usage: client.AddCommentEscalation(nil).List(nil, nil) or
// client.AddCommentEscalation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) AddCommentEscalation(data map[string]any) TangocardEntity {
	return NewAddCommentEscalationEntityFunc(sdk, data)
}


// AllEventType returns a AllEventType entity bound to this client.
// Idiomatic usage: client.AllEventType(nil).List(nil, nil) or
// client.AllEventType(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) AllEventType(data map[string]any) TangocardEntity {
	return NewAllEventTypeEntityFunc(sdk, data)
}


// AsyncOrder returns a AsyncOrder entity bound to this client.
// Idiomatic usage: client.AsyncOrder(nil).List(nil, nil) or
// client.AsyncOrder(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) AsyncOrder(data map[string]any) TangocardEntity {
	return NewAsyncOrderEntityFunc(sdk, data)
}


// AsyncOrderDetailView returns a AsyncOrderDetailView entity bound to this client.
// Idiomatic usage: client.AsyncOrderDetailView(nil).List(nil, nil) or
// client.AsyncOrderDetailView(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) AsyncOrderDetailView(data map[string]any) TangocardEntity {
	return NewAsyncOrderDetailViewEntityFunc(sdk, data)
}


// AsyncOrderLineItemsView returns a AsyncOrderLineItemsView entity bound to this client.
// Idiomatic usage: client.AsyncOrderLineItemsView(nil).List(nil, nil) or
// client.AsyncOrderLineItemsView(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) AsyncOrderLineItemsView(data map[string]any) TangocardEntity {
	return NewAsyncOrderLineItemsViewEntityFunc(sdk, data)
}


// AsyncReasonCodesView returns a AsyncReasonCodesView entity bound to this client.
// Idiomatic usage: client.AsyncReasonCodesView(nil).List(nil, nil) or
// client.AsyncReasonCodesView(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) AsyncReasonCodesView(data map[string]any) TangocardEntity {
	return NewAsyncReasonCodesViewEntityFunc(sdk, data)
}


// AsyncUpdateLineItemView returns a AsyncUpdateLineItemView entity bound to this client.
// Idiomatic usage: client.AsyncUpdateLineItemView(nil).List(nil, nil) or
// client.AsyncUpdateLineItemView(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) AsyncUpdateLineItemView(data map[string]any) TangocardEntity {
	return NewAsyncUpdateLineItemViewEntityFunc(sdk, data)
}


// BalanceAlertView returns a BalanceAlertView entity bound to this client.
// Idiomatic usage: client.BalanceAlertView(nil).List(nil, nil) or
// client.BalanceAlertView(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) BalanceAlertView(data map[string]any) TangocardEntity {
	return NewBalanceAlertViewEntityFunc(sdk, data)
}


// BrandCategoriesView returns a BrandCategoriesView entity bound to this client.
// Idiomatic usage: client.BrandCategoriesView(nil).List(nil, nil) or
// client.BrandCategoriesView(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) BrandCategoriesView(data map[string]any) TangocardEntity {
	return NewBrandCategoriesViewEntityFunc(sdk, data)
}


// Catalog returns a Catalog entity bound to this client.
// Idiomatic usage: client.Catalog(nil).List(nil, nil) or
// client.Catalog(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) Catalog(data map[string]any) TangocardEntity {
	return NewCatalogEntityFunc(sdk, data)
}


// ChoiceProduct returns a ChoiceProduct entity bound to this client.
// Idiomatic usage: client.ChoiceProduct(nil).List(nil, nil) or
// client.ChoiceProduct(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) ChoiceProduct(data map[string]any) TangocardEntity {
	return NewChoiceProductEntityFunc(sdk, data)
}


// CountryViewSummary returns a CountryViewSummary entity bound to this client.
// Idiomatic usage: client.CountryViewSummary(nil).List(nil, nil) or
// client.CountryViewSummary(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) CountryViewSummary(data map[string]any) TangocardEntity {
	return NewCountryViewSummaryEntityFunc(sdk, data)
}


// CreateAccountCriterion returns a CreateAccountCriterion entity bound to this client.
// Idiomatic usage: client.CreateAccountCriterion(nil).List(nil, nil) or
// client.CreateAccountCriterion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) CreateAccountCriterion(data map[string]any) TangocardEntity {
	return NewCreateAccountCriterionEntityFunc(sdk, data)
}


// CreateCustomerCriterion returns a CreateCustomerCriterion entity bound to this client.
// Idiomatic usage: client.CreateCustomerCriterion(nil).List(nil, nil) or
// client.CreateCustomerCriterion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) CreateCustomerCriterion(data map[string]any) TangocardEntity {
	return NewCreateCustomerCriterionEntityFunc(sdk, data)
}


// CredentialTypeView returns a CredentialTypeView entity bound to this client.
// Idiomatic usage: client.CredentialTypeView(nil).List(nil, nil) or
// client.CredentialTypeView(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) CredentialTypeView(data map[string]any) TangocardEntity {
	return NewCredentialTypeViewEntityFunc(sdk, data)
}


// CreditCard returns a CreditCard entity bound to this client.
// Idiomatic usage: client.CreditCard(nil).List(nil, nil) or
// client.CreditCard(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) CreditCard(data map[string]any) TangocardEntity {
	return NewCreditCardEntityFunc(sdk, data)
}


// CreditCardDeposit returns a CreditCardDeposit entity bound to this client.
// Idiomatic usage: client.CreditCardDeposit(nil).List(nil, nil) or
// client.CreditCardDeposit(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) CreditCardDeposit(data map[string]any) TangocardEntity {
	return NewCreditCardDepositEntityFunc(sdk, data)
}


// CreditCardUnregister returns a CreditCardUnregister entity bound to this client.
// Idiomatic usage: client.CreditCardUnregister(nil).List(nil, nil) or
// client.CreditCardUnregister(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) CreditCardUnregister(data map[string]any) TangocardEntity {
	return NewCreditCardUnregisterEntityFunc(sdk, data)
}


// Customer returns a Customer entity bound to this client.
// Idiomatic usage: client.Customer(nil).List(nil, nil) or
// client.Customer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) Customer(data map[string]any) TangocardEntity {
	return NewCustomerEntityFunc(sdk, data)
}


// EmailTemplateListView returns a EmailTemplateListView entity bound to this client.
// Idiomatic usage: client.EmailTemplateListView(nil).List(nil, nil) or
// client.EmailTemplateListView(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) EmailTemplateListView(data map[string]any) TangocardEntity {
	return NewEmailTemplateListViewEntityFunc(sdk, data)
}


// EmailTemplateViewVerbose returns a EmailTemplateViewVerbose entity bound to this client.
// Idiomatic usage: client.EmailTemplateViewVerbose(nil).List(nil, nil) or
// client.EmailTemplateViewVerbose(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) EmailTemplateViewVerbose(data map[string]any) TangocardEntity {
	return NewEmailTemplateViewVerboseEntityFunc(sdk, data)
}


// EmbeddableResponseDto returns a EmbeddableResponseDto entity bound to this client.
// Idiomatic usage: client.EmbeddableResponseDto(nil).List(nil, nil) or
// client.EmbeddableResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) EmbeddableResponseDto(data map[string]any) TangocardEntity {
	return NewEmbeddableResponseDtoEntityFunc(sdk, data)
}


// ExchangeRatesWithDisclaimer returns a ExchangeRatesWithDisclaimer entity bound to this client.
// Idiomatic usage: client.ExchangeRatesWithDisclaimer(nil).List(nil, nil) or
// client.ExchangeRatesWithDisclaimer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) ExchangeRatesWithDisclaimer(data map[string]any) TangocardEntity {
	return NewExchangeRatesWithDisclaimerEntityFunc(sdk, data)
}


// LineItem returns a LineItem entity bound to this client.
// Idiomatic usage: client.LineItem(nil).List(nil, nil) or
// client.LineItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) LineItem(data map[string]any) TangocardEntity {
	return NewLineItemEntityFunc(sdk, data)
}


// LowBalanceAlertListView returns a LowBalanceAlertListView entity bound to this client.
// Idiomatic usage: client.LowBalanceAlertListView(nil).List(nil, nil) or
// client.LowBalanceAlertListView(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) LowBalanceAlertListView(data map[string]any) TangocardEntity {
	return NewLowBalanceAlertListViewEntityFunc(sdk, data)
}


// LowBalanceAlertView returns a LowBalanceAlertView entity bound to this client.
// Idiomatic usage: client.LowBalanceAlertView(nil).List(nil, nil) or
// client.LowBalanceAlertView(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) LowBalanceAlertView(data map[string]any) TangocardEntity {
	return NewLowBalanceAlertViewEntityFunc(sdk, data)
}


// MobileCountry returns a MobileCountry entity bound to this client.
// Idiomatic usage: client.MobileCountry(nil).List(nil, nil) or
// client.MobileCountry(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) MobileCountry(data map[string]any) TangocardEntity {
	return NewMobileCountryEntityFunc(sdk, data)
}


// N14Webhook returns a N14Webhook entity bound to this client.
// Idiomatic usage: client.N14Webhook(nil).List(nil, nil) or
// client.N14Webhook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) N14Webhook(data map[string]any) TangocardEntity {
	return NewN14WebhookEntityFunc(sdk, data)
}


// N1Customer returns a N1Customer entity bound to this client.
// Idiomatic usage: client.N1Customer(nil).List(nil, nil) or
// client.N1Customer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) N1Customer(data map[string]any) TangocardEntity {
	return NewN1CustomerEntityFunc(sdk, data)
}


// N2Account returns a N2Account entity bound to this client.
// Idiomatic usage: client.N2Account(nil).List(nil, nil) or
// client.N2Account(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) N2Account(data map[string]any) TangocardEntity {
	return NewN2AccountEntityFunc(sdk, data)
}


// N3Fund returns a N3Fund entity bound to this client.
// Idiomatic usage: client.N3Fund(nil).List(nil, nil) or
// client.N3Fund(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) N3Fund(data map[string]any) TangocardEntity {
	return NewN3FundEntityFunc(sdk, data)
}


// N8LineItem returns a N8LineItem entity bound to this client.
// Idiomatic usage: client.N8LineItem(nil).List(nil, nil) or
// client.N8LineItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) N8LineItem(data map[string]any) TangocardEntity {
	return NewN8LineItemEntityFunc(sdk, data)
}


// N9DigitalTemplate returns a N9DigitalTemplate entity bound to this client.
// Idiomatic usage: client.N9DigitalTemplate(nil).List(nil, nil) or
// client.N9DigitalTemplate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) N9DigitalTemplate(data map[string]any) TangocardEntity {
	return NewN9DigitalTemplateEntityFunc(sdk, data)
}


// Order returns a Order entity bound to this client.
// Idiomatic usage: client.Order(nil).List(nil, nil) or
// client.Order(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) Order(data map[string]any) TangocardEntity {
	return NewOrderEntityFunc(sdk, data)
}


// OrderViewSummary returns a OrderViewSummary entity bound to this client.
// Idiomatic usage: client.OrderViewSummary(nil).List(nil, nil) or
// client.OrderViewSummary(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) OrderViewSummary(data map[string]any) TangocardEntity {
	return NewOrderViewSummaryEntityFunc(sdk, data)
}


// PrepaidCardInfo returns a PrepaidCardInfo entity bound to this client.
// Idiomatic usage: client.PrepaidCardInfo(nil).List(nil, nil) or
// client.PrepaidCardInfo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) PrepaidCardInfo(data map[string]any) TangocardEntity {
	return NewPrepaidCardInfoEntityFunc(sdk, data)
}


// PrepaidCardTransaction returns a PrepaidCardTransaction entity bound to this client.
// Idiomatic usage: client.PrepaidCardTransaction(nil).List(nil, nil) or
// client.PrepaidCardTransaction(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) PrepaidCardTransaction(data map[string]any) TangocardEntity {
	return NewPrepaidCardTransactionEntityFunc(sdk, data)
}


// ReissueCard returns a ReissueCard entity bound to this client.
// Idiomatic usage: client.ReissueCard(nil).List(nil, nil) or
// client.ReissueCard(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) ReissueCard(data map[string]any) TangocardEntity {
	return NewReissueCardEntityFunc(sdk, data)
}


// ReplacementReason returns a ReplacementReason entity bound to this client.
// Idiomatic usage: client.ReplacementReason(nil).List(nil, nil) or
// client.ReplacementReason(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) ReplacementReason(data map[string]any) TangocardEntity {
	return NewReplacementReasonEntityFunc(sdk, data)
}


// Resend returns a Resend entity bound to this client.
// Idiomatic usage: client.Resend(nil).List(nil, nil) or
// client.Resend(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) Resend(data map[string]any) TangocardEntity {
	return NewResendEntityFunc(sdk, data)
}


// RewardReasonsMap returns a RewardReasonsMap entity bound to this client.
// Idiomatic usage: client.RewardReasonsMap(nil).List(nil, nil) or
// client.RewardReasonsMap(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) RewardReasonsMap(data map[string]any) TangocardEntity {
	return NewRewardReasonsMapEntityFunc(sdk, data)
}


// TransferFund returns a TransferFund entity bound to this client.
// Idiomatic usage: client.TransferFund(nil).List(nil, nil) or
// client.TransferFund(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) TransferFund(data map[string]any) TangocardEntity {
	return NewTransferFundEntityFunc(sdk, data)
}


// UpdateAccount returns a UpdateAccount entity bound to this client.
// Idiomatic usage: client.UpdateAccount(nil).List(nil, nil) or
// client.UpdateAccount(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) UpdateAccount(data map[string]any) TangocardEntity {
	return NewUpdateAccountEntityFunc(sdk, data)
}


// UpdateWebhookSubscriptionResponseView returns a UpdateWebhookSubscriptionResponseView entity bound to this client.
// Idiomatic usage: client.UpdateWebhookSubscriptionResponseView(nil).List(nil, nil) or
// client.UpdateWebhookSubscriptionResponseView(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) UpdateWebhookSubscriptionResponseView(data map[string]any) TangocardEntity {
	return NewUpdateWebhookSubscriptionResponseViewEntityFunc(sdk, data)
}


// Webhook returns a Webhook entity bound to this client.
// Idiomatic usage: client.Webhook(nil).List(nil, nil) or
// client.Webhook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TangocardSDK) Webhook(data map[string]any) TangocardEntity {
	return NewWebhookEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *TangocardSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewTangocardSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
