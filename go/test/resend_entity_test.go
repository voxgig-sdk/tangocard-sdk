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

func TestResendEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Resend(nil)
		if ent == nil {
			t.Fatal("expected non-nil ResendEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := resendBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "resend." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set TANGOCARD_TEST_RESEND_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		resendRef01Ent := client.Resend(nil)
		resendRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "resend"}), "resend_ref01"))
		resendRef01Data["reference_order_id"] = setup.idmap["reference_order01"]

		resendRef01DataResult, err := resendRef01Ent.Create(resendRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		resendRef01Data = core.ToMapAny(entityData(resendRef01DataResult))
		if resendRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

	})
}

func resendBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "resend", "ResendTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read resend test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse resend test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"resend01", "resend02", "resend03", "line_item01", "line_item02", "line_item03", "order01", "order02", "order03", "reference_order01"},
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
	entidEnvRaw := os.Getenv("TANGOCARD_TEST_RESEND_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TANGOCARD_TEST_RESEND_ENTID": idmap,
		"TANGOCARD_TEST_LIVE":      "FALSE",
		"TANGOCARD_TEST_EXPLAIN":   "FALSE",
		"TANGOCARD_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["TANGOCARD_TEST_RESEND_ENTID"])
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
