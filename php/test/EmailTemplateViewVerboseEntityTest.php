<?php
declare(strict_types=1);

// EmailTemplateViewVerbose entity test

require_once __DIR__ . '/../tangocard_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class EmailTemplateViewVerboseEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = TangocardSDK::test(null, null);
        $ent = $testsdk->EmailTemplateViewVerbose(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "email_template_view_verbose" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = TangocardSDK::test($seed, null);
        $seen = iterator_to_array($base->EmailTemplateViewVerbose(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = TangocardConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = TangocardSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->EmailTemplateViewVerbose(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = email_template_view_verbose_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "email_template_view_verbose." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set TANGOCARD_TEST_EMAIL_TEMPLATE_VIEW_VERBOSE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $email_template_view_verbose_ref01_ent = $client->EmailTemplateViewVerbose(null);
        $email_template_view_verbose_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.email_template_view_verbose"), "email_template_view_verbose_ref01"));

        $email_template_view_verbose_ref01_data_result = $email_template_view_verbose_ref01_ent->create($email_template_view_verbose_ref01_data, null);
        $email_template_view_verbose_ref01_data = Helpers::to_map(is_object($email_template_view_verbose_ref01_data_result) && method_exists($email_template_view_verbose_ref01_data_result, 'data_get') ? $email_template_view_verbose_ref01_data_result->data_get() : $email_template_view_verbose_ref01_data_result);
        $this->assertNotNull($email_template_view_verbose_ref01_data);

        // LIST
        $email_template_view_verbose_ref01_match = [];

        $email_template_view_verbose_ref01_list_result = $email_template_view_verbose_ref01_ent->list($email_template_view_verbose_ref01_match, null);
        $this->assertIsArray($email_template_view_verbose_ref01_list_result);

        // UPDATE
        $email_template_view_verbose_ref01_data_up0_up = [
        ];

        $email_template_view_verbose_ref01_markdef_up0_name = "accentColor";
        $email_template_view_verbose_ref01_markdef_up0_value = "Mark01-email_template_view_verbose_ref01_" . $setup["now"];
        $email_template_view_verbose_ref01_data_up0_up[$email_template_view_verbose_ref01_markdef_up0_name] = $email_template_view_verbose_ref01_markdef_up0_value;

        $email_template_view_verbose_ref01_resdata_up0_result = $email_template_view_verbose_ref01_ent->update($email_template_view_verbose_ref01_data_up0_up, null);
        $email_template_view_verbose_ref01_resdata_up0 = Helpers::to_map(is_object($email_template_view_verbose_ref01_resdata_up0_result) && method_exists($email_template_view_verbose_ref01_resdata_up0_result, 'data_get') ? $email_template_view_verbose_ref01_resdata_up0_result->data_get() : $email_template_view_verbose_ref01_resdata_up0_result);
        $this->assertNotNull($email_template_view_verbose_ref01_resdata_up0);
        $this->assertEquals($email_template_view_verbose_ref01_resdata_up0[$email_template_view_verbose_ref01_markdef_up0_name], $email_template_view_verbose_ref01_markdef_up0_value);

        // LOAD
        $email_template_view_verbose_ref01_match_dt0 = [];
        $email_template_view_verbose_ref01_data_dt0_loaded = $email_template_view_verbose_ref01_ent->load($email_template_view_verbose_ref01_match_dt0, null);
        $this->assertNotNull($email_template_view_verbose_ref01_data_dt0_loaded);

    }
}

function email_template_view_verbose_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/email_template_view_verbose/EmailTemplateViewVerboseTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = TangocardSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["email_template_view_verbose01", "email_template_view_verbose02", "email_template_view_verbose03", "digital_template01", "digital_template02", "digital_template03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("TANGOCARD_TEST_EMAIL_TEMPLATE_VIEW_VERBOSE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "TANGOCARD_TEST_EMAIL_TEMPLATE_VIEW_VERBOSE_ENTID" => $idmap,
        "TANGOCARD_TEST_LIVE" => "FALSE",
        "TANGOCARD_TEST_EXPLAIN" => "FALSE",
        "TANGOCARD_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["TANGOCARD_TEST_EMAIL_TEMPLATE_VIEW_VERBOSE_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["TANGOCARD_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["TANGOCARD_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new TangocardSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["TANGOCARD_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["TANGOCARD_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
