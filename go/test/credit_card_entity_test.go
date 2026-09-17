package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/tangocard-sdk/go"
	"github.com/voxgig-sdk/tangocard-sdk/go/core"

	vs "github.com/voxgig-sdk/tangocard-sdk/go/utility/struct"
)

func TestCreditCardEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CreditCard(nil)
		if ent == nil {
			t.Fatal("expected non-nil CreditCardEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := credit_cardBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "credit_card." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set TANGOCARD_TEST_CREDIT_CARD_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		creditCardRef01Ent := client.CreditCard(nil)
		creditCardRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "credit_card"}), "credit_card_ref01"))

		creditCardRef01DataResult, err := creditCardRef01Ent.Create(creditCardRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		creditCardRef01Data = core.ToMapAny(entityData(creditCardRef01DataResult))
		if creditCardRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if creditCardRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LOAD
		creditCardRef01MatchDt0 := map[string]any{
			"id": creditCardRef01Data["id"],
		}
		creditCardRef01DataDt0Loaded, err := creditCardRef01Ent.Load(creditCardRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		creditCardRef01DataDt0LoadResult := core.ToMapAny(entityData(creditCardRef01DataDt0Loaded))
		if creditCardRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if creditCardRef01DataDt0LoadResult["id"] != creditCardRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func credit_cardBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "credit_card", "CreditCardTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read credit_card test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse credit_card test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"credit_card01", "credit_card02", "credit_card03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("TANGOCARD_TEST_CREDIT_CARD_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TANGOCARD_TEST_CREDIT_CARD_ENTID": idmap,
		"TANGOCARD_TEST_LIVE":      "FALSE",
		"TANGOCARD_TEST_EXPLAIN":   "FALSE",
		"TANGOCARD_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["TANGOCARD_TEST_CREDIT_CARD_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["TANGOCARD_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["TANGOCARD_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewTangocardSDK(core.ToMapAny(mergedOpts))
	}

	live := env["TANGOCARD_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["TANGOCARD_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
