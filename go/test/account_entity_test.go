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

func TestAccountEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Account(nil)
		if ent == nil {
			t.Fatal("expected non-nil AccountEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := accountBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "account." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set TANGOCARD_TEST_ACCOUNT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		accountRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.account")))
		var accountRef01Data map[string]any
		if len(accountRef01DataRaw) > 0 {
			accountRef01Data = core.ToMapAny(accountRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = accountRef01Data

		// UPDATE
		accountRef01Ent := client.Account(nil)
		accountRef01DataUp0Up := map[string]any{
			"id": accountRef01Data["id"],
			"customer_identifier": setup.idmap["customer_identifier"],
		}

		accountRef01MarkdefUp0Name := "accountIdentifier"
		accountRef01MarkdefUp0Value := fmt.Sprintf("Mark01-account_ref01_%d", setup.now)
		accountRef01DataUp0Up[accountRef01MarkdefUp0Name] = accountRef01MarkdefUp0Value

		accountRef01ResdataUp0Result, err := accountRef01Ent.Update(accountRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		accountRef01ResdataUp0 := core.ToMapAny(entityData(accountRef01ResdataUp0Result))
		if accountRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if accountRef01ResdataUp0["id"] != accountRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if accountRef01ResdataUp0[accountRef01MarkdefUp0Name] != accountRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", accountRef01MarkdefUp0Name, accountRef01ResdataUp0[accountRef01MarkdefUp0Name])
		}

		// LOAD
		accountRef01MatchDt0 := map[string]any{
			"id": accountRef01Data["id"],
		}
		accountRef01DataDt0Loaded, err := accountRef01Ent.Load(accountRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		accountRef01DataDt0LoadResult := core.ToMapAny(entityData(accountRef01DataDt0Loaded))
		if accountRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if accountRef01DataDt0LoadResult["id"] != accountRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func accountBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "account", "AccountTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read account test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse account test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"account01", "account02", "account03", "customer01", "customer02", "customer03", "customerentifier01"},
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
	entidEnvRaw := os.Getenv("TANGOCARD_TEST_ACCOUNT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TANGOCARD_TEST_ACCOUNT_ENTID": idmap,
		"TANGOCARD_TEST_LIVE":      "FALSE",
		"TANGOCARD_TEST_EXPLAIN":   "FALSE",
		"TANGOCARD_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["TANGOCARD_TEST_ACCOUNT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
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
