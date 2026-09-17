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

func TestN14WebhookEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.N14Webhook(nil)
		if ent == nil {
			t.Fatal("expected non-nil N14WebhookEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"n14_webhook": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.N14Webhook(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.N14Webhook(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := n14_webhookBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "n14_webhook." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set TANGOCARD_TEST_N14_WEBHOOK_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		n14WebhookRef01Ent := client.N14Webhook(nil)
		n14WebhookRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "n14_webhook"}), "n14_webhook_ref01"))

		n14WebhookRef01DataResult, err := n14WebhookRef01Ent.Create(n14WebhookRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		n14WebhookRef01Data = core.ToMapAny(entityData(n14WebhookRef01DataResult))
		if n14WebhookRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if n14WebhookRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		n14WebhookRef01Match := map[string]any{}

		n14WebhookRef01ListResult, err := n14WebhookRef01Ent.List(n14WebhookRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		n14WebhookRef01List, n14WebhookRef01ListOk := n14WebhookRef01ListResult.([]any)
		if !n14WebhookRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", n14WebhookRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(n14WebhookRef01List), map[string]any{"id": n14WebhookRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// LOAD
		n14WebhookRef01MatchDt0 := map[string]any{
			"id": n14WebhookRef01Data["id"],
		}
		n14WebhookRef01DataDt0Loaded, err := n14WebhookRef01Ent.Load(n14WebhookRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		n14WebhookRef01DataDt0LoadResult := core.ToMapAny(entityData(n14WebhookRef01DataDt0Loaded))
		if n14WebhookRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if n14WebhookRef01DataDt0LoadResult["id"] != n14WebhookRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		n14WebhookRef01MatchRm0 := map[string]any{
			"id": n14WebhookRef01Data["id"],
		}
		_, err = n14WebhookRef01Ent.Remove(n14WebhookRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		n14WebhookRef01MatchRt0 := map[string]any{}

		n14WebhookRef01ListRt0Result, err := n14WebhookRef01Ent.List(n14WebhookRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		n14WebhookRef01ListRt0, n14WebhookRef01ListRt0Ok := n14WebhookRef01ListRt0Result.([]any)
		if !n14WebhookRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", n14WebhookRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(n14WebhookRef01ListRt0), map[string]any{"id": n14WebhookRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func n14_webhookBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "n14_webhook", "N14WebhookTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read n14_webhook test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse n14_webhook test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"n14_webhook01", "n14_webhook02", "n14_webhook03", "webhook01", "webhook02", "webhook03", "test01", "test02", "test03"},
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
	entidEnvRaw := os.Getenv("TANGOCARD_TEST_N14_WEBHOOK_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TANGOCARD_TEST_N14_WEBHOOK_ENTID": idmap,
		"TANGOCARD_TEST_LIVE":      "FALSE",
		"TANGOCARD_TEST_EXPLAIN":   "FALSE",
		"TANGOCARD_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["TANGOCARD_TEST_N14_WEBHOOK_ENTID"])
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
