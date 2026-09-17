<?php
declare(strict_types=1);

// LowBalanceAlertView entity test

require_once __DIR__ . '/../tangocard_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class LowBalanceAlertViewEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = TangocardSDK::test(null, null);
        $ent = $testsdk->LowBalanceAlertView(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = low_balance_alert_view_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "low_balance_alert_view." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set TANGOCARD_TEST_LOW_BALANCE_ALERT_VIEW_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $low_balance_alert_view_ref01_ent = $client->LowBalanceAlertView(null);
        $low_balance_alert_view_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.low_balance_alert_view"), "low_balance_alert_view_ref01"));
        $low_balance_alert_view_ref01_data["account_id"] = $setup["idmap"]["account01"];
        $low_balance_alert_view_ref01_data["account_identifier"] = $setup["idmap"]["accountentifier01"];
        $low_balance_alert_view_ref01_data["customer_identifier"] = $setup["idmap"]["customerentifier01"];

        $low_balance_alert_view_ref01_data_result = $low_balance_alert_view_ref01_ent->create($low_balance_alert_view_ref01_data, null);
        $low_balance_alert_view_ref01_data = Helpers::to_map(is_object($low_balance_alert_view_ref01_data_result) && method_exists($low_balance_alert_view_ref01_data_result, 'data_get') ? $low_balance_alert_view_ref01_data_result->data_get() : $low_balance_alert_view_ref01_data_result);
        $this->assertNotNull($low_balance_alert_view_ref01_data);

        // UPDATE
        $low_balance_alert_view_ref01_data_up0_up = [
            "account_id" => $setup["idmap"]["account_id"],
            "customer_identifier" => $setup["idmap"]["customer_identifier"],
        ];

        $low_balance_alert_view_ref01_markdef_up0_name = "accountIdentifier";
        $low_balance_alert_view_ref01_markdef_up0_value = "Mark01-low_balance_alert_view_ref01_" . $setup["now"];
        $low_balance_alert_view_ref01_data_up0_up[$low_balance_alert_view_ref01_markdef_up0_name] = $low_balance_alert_view_ref01_markdef_up0_value;

        $low_balance_alert_view_ref01_resdata_up0_result = $low_balance_alert_view_ref01_ent->update($low_balance_alert_view_ref01_data_up0_up, null);
        $low_balance_alert_view_ref01_resdata_up0 = Helpers::to_map(is_object($low_balance_alert_view_ref01_resdata_up0_result) && method_exists($low_balance_alert_view_ref01_resdata_up0_result, 'data_get') ? $low_balance_alert_view_ref01_resdata_up0_result->data_get() : $low_balance_alert_view_ref01_resdata_up0_result);
        $this->assertNotNull($low_balance_alert_view_ref01_resdata_up0);
        $this->assertEquals($low_balance_alert_view_ref01_resdata_up0[$low_balance_alert_view_ref01_markdef_up0_name], $low_balance_alert_view_ref01_markdef_up0_value);

        // LOAD
        $low_balance_alert_view_ref01_match_dt0 = [];
        $low_balance_alert_view_ref01_data_dt0_loaded = $low_balance_alert_view_ref01_ent->load($low_balance_alert_view_ref01_match_dt0, null);
        $this->assertNotNull($low_balance_alert_view_ref01_data_dt0_loaded);

    }
}

function low_balance_alert_view_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/low_balance_alert_view/LowBalanceAlertViewTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = TangocardSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["low_balance_alert_view01", "low_balance_alert_view02", "low_balance_alert_view03", "customer01", "customer02", "customer03", "account01", "account02", "account03", "lowbalance01", "lowbalance02", "lowbalance03", "accountentifier01", "customerentifier01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("TANGOCARD_TEST_LOW_BALANCE_ALERT_VIEW_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "TANGOCARD_TEST_LOW_BALANCE_ALERT_VIEW_ENTID" => $idmap,
        "TANGOCARD_TEST_LIVE" => "FALSE",
        "TANGOCARD_TEST_EXPLAIN" => "FALSE",
        "TANGOCARD_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["TANGOCARD_TEST_LOW_BALANCE_ALERT_VIEW_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["account_id"])) {
        $idmap_resolved["account_id"] = $idmap_resolved["account01"];
    }
    if (!isset($idmap_resolved["customer_identifier"])) {
        $idmap_resolved["customer_identifier"] = $idmap_resolved["customerentifier01"];
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
