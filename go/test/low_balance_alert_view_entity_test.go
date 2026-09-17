package sdktest

import (
	"encoding/json"
	"fmt"
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

func TestLowBalanceAlertViewEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.LowBalanceAlertView(nil)
		if ent == nil {
			t.Fatal("expected non-nil LowBalanceAlertViewEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := low_balance_alert_viewBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "low_balance_alert_view." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set TANGOCARD_TEST_LOW_BALANCE_ALERT_VIEW_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		lowBalanceAlertViewRef01Ent := client.LowBalanceAlertView(nil)
		lowBalanceAlertViewRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "low_balance_alert_view"}), "low_balance_alert_view_ref01"))
		lowBalanceAlertViewRef01Data["account_id"] = setup.idmap["account01"]
		lowBalanceAlertViewRef01Data["account_identifier"] = setup.idmap["accountentifier01"]
		lowBalanceAlertViewRef01Data["customer_identifier"] = setup.idmap["customerentifier01"]

		lowBalanceAlertViewRef01DataResult, err := lowBalanceAlertViewRef01Ent.Create(lowBalanceAlertViewRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		lowBalanceAlertViewRef01Data = core.ToMapAny(entityData(lowBalanceAlertViewRef01DataResult))
		if lowBalanceAlertViewRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		lowBalanceAlertViewRef01DataUp0Up := map[string]any{
			"account_id": setup.idmap["account_id"],
			"customer_identifier": setup.idmap["customer_identifier"],
		}

		lowBalanceAlertViewRef01MarkdefUp0Name := "accountIdentifier"
		lowBalanceAlertViewRef01MarkdefUp0Value := fmt.Sprintf("Mark01-low_balance_alert_view_ref01_%d", setup.now)
		lowBalanceAlertViewRef01DataUp0Up[lowBalanceAlertViewRef01MarkdefUp0Name] = lowBalanceAlertViewRef01MarkdefUp0Value

		lowBalanceAlertViewRef01ResdataUp0Result, err := lowBalanceAlertViewRef01Ent.Update(lowBalanceAlertViewRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		lowBalanceAlertViewRef01ResdataUp0 := core.ToMapAny(entityData(lowBalanceAlertViewRef01ResdataUp0Result))
		if lowBalanceAlertViewRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if lowBalanceAlertViewRef01ResdataUp0[lowBalanceAlertViewRef01MarkdefUp0Name] != lowBalanceAlertViewRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", lowBalanceAlertViewRef01MarkdefUp0Name, lowBalanceAlertViewRef01ResdataUp0[lowBalanceAlertViewRef01MarkdefUp0Name])
		}

		// LOAD
		lowBalanceAlertViewRef01MatchDt0 := map[string]any{}
		lowBalanceAlertViewRef01DataDt0Loaded, err := lowBalanceAlertViewRef01Ent.Load(lowBalanceAlertViewRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if lowBalanceAlertViewRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func low_balance_alert_viewBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "low_balance_alert_view", "LowBalanceAlertViewTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read low_balance_alert_view test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse low_balance_alert_view test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"low_balance_alert_view01", "low_balance_alert_view02", "low_balance_alert_view03", "customer01", "customer02", "customer03", "account01", "account02", "account03", "lowbalance01", "lowbalance02", "lowbalance03", "accountentifier01", "customerentifier01"},
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
	entidEnvRaw := os.Getenv("TANGOCARD_TEST_LOW_BALANCE_ALERT_VIEW_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TANGOCARD_TEST_LOW_BALANCE_ALERT_VIEW_ENTID": idmap,
		"TANGOCARD_TEST_LIVE":      "FALSE",
		"TANGOCARD_TEST_EXPLAIN":   "FALSE",
		"TANGOCARD_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["TANGOCARD_TEST_LOW_BALANCE_ALERT_VIEW_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add account_id alias for update test.
	if idmapResolved["account_id"] == nil {
		idmapResolved["account_id"] = idmapResolved["account01"]
	}
	// Add customer_identifier alias for update test.
	if idmapResolved["customer_identifier"] == nil {
		idmapResolved["customer_identifier"] = idmapResolved["customerentifier01"]
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
