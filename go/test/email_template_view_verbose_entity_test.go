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

func TestEmailTemplateViewVerboseEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.EmailTemplateViewVerbose(nil)
		if ent == nil {
			t.Fatal("expected non-nil EmailTemplateViewVerboseEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"email_template_view_verbose": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.EmailTemplateViewVerbose(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.EmailTemplateViewVerbose(nil).Stream("list", nil, nil) {
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
		setup := email_template_view_verboseBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "email_template_view_verbose." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set TANGOCARD_TEST_EMAIL_TEMPLATE_VIEW_VERBOSE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		emailTemplateViewVerboseRef01Ent := client.EmailTemplateViewVerbose(nil)
		emailTemplateViewVerboseRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "email_template_view_verbose"}), "email_template_view_verbose_ref01"))

		emailTemplateViewVerboseRef01DataResult, err := emailTemplateViewVerboseRef01Ent.Create(emailTemplateViewVerboseRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		emailTemplateViewVerboseRef01Data = core.ToMapAny(entityData(emailTemplateViewVerboseRef01DataResult))
		if emailTemplateViewVerboseRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		emailTemplateViewVerboseRef01Match := map[string]any{}

		emailTemplateViewVerboseRef01ListResult, err := emailTemplateViewVerboseRef01Ent.List(emailTemplateViewVerboseRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, emailTemplateViewVerboseRef01ListOk := emailTemplateViewVerboseRef01ListResult.([]any)
		if !emailTemplateViewVerboseRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", emailTemplateViewVerboseRef01ListResult)
		}

		// UPDATE
		emailTemplateViewVerboseRef01DataUp0Up := map[string]any{
		}

		emailTemplateViewVerboseRef01MarkdefUp0Name := "accentColor"
		emailTemplateViewVerboseRef01MarkdefUp0Value := fmt.Sprintf("Mark01-email_template_view_verbose_ref01_%d", setup.now)
		emailTemplateViewVerboseRef01DataUp0Up[emailTemplateViewVerboseRef01MarkdefUp0Name] = emailTemplateViewVerboseRef01MarkdefUp0Value

		emailTemplateViewVerboseRef01ResdataUp0Result, err := emailTemplateViewVerboseRef01Ent.Update(emailTemplateViewVerboseRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		emailTemplateViewVerboseRef01ResdataUp0 := core.ToMapAny(entityData(emailTemplateViewVerboseRef01ResdataUp0Result))
		if emailTemplateViewVerboseRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if emailTemplateViewVerboseRef01ResdataUp0[emailTemplateViewVerboseRef01MarkdefUp0Name] != emailTemplateViewVerboseRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", emailTemplateViewVerboseRef01MarkdefUp0Name, emailTemplateViewVerboseRef01ResdataUp0[emailTemplateViewVerboseRef01MarkdefUp0Name])
		}

		// LOAD
		emailTemplateViewVerboseRef01MatchDt0 := map[string]any{}
		emailTemplateViewVerboseRef01DataDt0Loaded, err := emailTemplateViewVerboseRef01Ent.Load(emailTemplateViewVerboseRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if emailTemplateViewVerboseRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func email_template_view_verboseBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "email_template_view_verbose", "EmailTemplateViewVerboseTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read email_template_view_verbose test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse email_template_view_verbose test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"email_template_view_verbose01", "email_template_view_verbose02", "email_template_view_verbose03", "digital_template01", "digital_template02", "digital_template03"},
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
	entidEnvRaw := os.Getenv("TANGOCARD_TEST_EMAIL_TEMPLATE_VIEW_VERBOSE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TANGOCARD_TEST_EMAIL_TEMPLATE_VIEW_VERBOSE_ENTID": idmap,
		"TANGOCARD_TEST_LIVE":      "FALSE",
		"TANGOCARD_TEST_EXPLAIN":   "FALSE",
		"TANGOCARD_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["TANGOCARD_TEST_EMAIL_TEMPLATE_VIEW_VERBOSE_ENTID"])
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
