<?php
declare(strict_types=1);

// UpdateWebhookSubscriptionResponseView entity test

require_once __DIR__ . '/../tangocard_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class UpdateWebhookSubscriptionResponseViewEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = TangocardSDK::test(null, null);
        $ent = $testsdk->UpdateWebhookSubscriptionResponseView(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = update_webhook_subscription_response_view_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["update"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "update_webhook_subscription_response_view." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set TANGOCARD_TEST_UPDATE_WEBHOOK_SUBSCRIPTION_RESPONSE_VIEW_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $update_webhook_subscription_response_view_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.update_webhook_subscription_response_view")));
        $update_webhook_subscription_response_view_ref01_data = null;
        if (count($update_webhook_subscription_response_view_ref01_data_raw) > 0) {
            $update_webhook_subscription_response_view_ref01_data = Helpers::to_map($update_webhook_subscription_response_view_ref01_data_raw[0][1]);
        }

        // UPDATE
        $update_webhook_subscription_response_view_ref01_ent = $client->UpdateWebhookSubscriptionResponseView(null);
        $update_webhook_subscription_response_view_ref01_data_up0_up = [
        ];

        $update_webhook_subscription_response_view_ref01_markdef_up0_name = "createdAt";
        $update_webhook_subscription_response_view_ref01_markdef_up0_value = "Mark01-update_webhook_subscription_response_view_ref01_" . $setup["now"];
        $update_webhook_subscription_response_view_ref01_data_up0_up[$update_webhook_subscription_response_view_ref01_markdef_up0_name] = $update_webhook_subscription_response_view_ref01_markdef_up0_value;

        $update_webhook_subscription_response_view_ref01_resdata_up0_result = $update_webhook_subscription_response_view_ref01_ent->update($update_webhook_subscription_response_view_ref01_data_up0_up, null);
        $update_webhook_subscription_response_view_ref01_resdata_up0 = Helpers::to_map(is_object($update_webhook_subscription_response_view_ref01_resdata_up0_result) && method_exists($update_webhook_subscription_response_view_ref01_resdata_up0_result, 'data_get') ? $update_webhook_subscription_response_view_ref01_resdata_up0_result->data_get() : $update_webhook_subscription_response_view_ref01_resdata_up0_result);
        $this->assertNotNull($update_webhook_subscription_response_view_ref01_resdata_up0);
        $this->assertEquals($update_webhook_subscription_response_view_ref01_resdata_up0[$update_webhook_subscription_response_view_ref01_markdef_up0_name], $update_webhook_subscription_response_view_ref01_markdef_up0_value);

    }
}

function update_webhook_subscription_response_view_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/update_webhook_subscription_response_view/UpdateWebhookSubscriptionResponseViewTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = TangocardSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["update_webhook_subscription_response_view01", "update_webhook_subscription_response_view02", "update_webhook_subscription_response_view03", "webhook01", "webhook02", "webhook03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("TANGOCARD_TEST_UPDATE_WEBHOOK_SUBSCRIPTION_RESPONSE_VIEW_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "TANGOCARD_TEST_UPDATE_WEBHOOK_SUBSCRIPTION_RESPONSE_VIEW_ENTID" => $idmap,
        "TANGOCARD_TEST_LIVE" => "FALSE",
        "TANGOCARD_TEST_EXPLAIN" => "FALSE",
        "TANGOCARD_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["TANGOCARD_TEST_UPDATE_WEBHOOK_SUBSCRIPTION_RESPONSE_VIEW_ENTID"]);
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
