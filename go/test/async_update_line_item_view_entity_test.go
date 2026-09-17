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

func TestAsyncUpdateLineItemViewEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AsyncUpdateLineItemView(nil)
		if ent == nil {
			t.Fatal("expected non-nil AsyncUpdateLineItemViewEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := async_update_line_item_viewBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "async_update_line_item_view." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set TANGOCARD_TEST_ASYNC_UPDATE_LINE_ITEM_VIEW_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		asyncUpdateLineItemViewRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.async_update_line_item_view")))
		var asyncUpdateLineItemViewRef01Data map[string]any
		if len(asyncUpdateLineItemViewRef01DataRaw) > 0 {
			asyncUpdateLineItemViewRef01Data = core.ToMapAny(asyncUpdateLineItemViewRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = asyncUpdateLineItemViewRef01Data

		// UPDATE
		asyncUpdateLineItemViewRef01Ent := client.AsyncUpdateLineItemView(nil)
		asyncUpdateLineItemViewRef01DataUp0Up := map[string]any{
		}

		asyncUpdateLineItemViewRef01MarkdefUp0Name := "deliveryDate"
		asyncUpdateLineItemViewRef01MarkdefUp0Value := fmt.Sprintf("Mark01-async_update_line_item_view_ref01_%d", setup.now)
		asyncUpdateLineItemViewRef01DataUp0Up[asyncUpdateLineItemViewRef01MarkdefUp0Name] = asyncUpdateLineItemViewRef01MarkdefUp0Value

		asyncUpdateLineItemViewRef01ResdataUp0Result, err := asyncUpdateLineItemViewRef01Ent.Update(asyncUpdateLineItemViewRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		asyncUpdateLineItemViewRef01ResdataUp0 := core.ToMapAny(entityData(asyncUpdateLineItemViewRef01ResdataUp0Result))
		if asyncUpdateLineItemViewRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if asyncUpdateLineItemViewRef01ResdataUp0[asyncUpdateLineItemViewRef01MarkdefUp0Name] != asyncUpdateLineItemViewRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", asyncUpdateLineItemViewRef01MarkdefUp0Name, asyncUpdateLineItemViewRef01ResdataUp0[asyncUpdateLineItemViewRef01MarkdefUp0Name])
		}

	})
}

func async_update_line_item_viewBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "async_update_line_item_view", "AsyncUpdateLineItemViewTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read async_update_line_item_view test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse async_update_line_item_view test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"async_update_line_item_view01", "async_update_line_item_view02", "async_update_line_item_view03", "line_item01", "line_item02", "line_item03"},
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
	entidEnvRaw := os.Getenv("TANGOCARD_TEST_ASYNC_UPDATE_LINE_ITEM_VIEW_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TANGOCARD_TEST_ASYNC_UPDATE_LINE_ITEM_VIEW_ENTID": idmap,
		"TANGOCARD_TEST_LIVE":      "FALSE",
		"TANGOCARD_TEST_EXPLAIN":   "FALSE",
		"TANGOCARD_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["TANGOCARD_TEST_ASYNC_UPDATE_LINE_ITEM_VIEW_ENTID"])
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
