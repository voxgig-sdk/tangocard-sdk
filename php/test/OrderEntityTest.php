<?php
declare(strict_types=1);

// Order entity test

require_once __DIR__ . '/../tangocard_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class OrderEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = TangocardSDK::test(null, null);
        $ent = $testsdk->Order(null);
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
                "order" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = TangocardSDK::test($seed, null);
        $seen = iterator_to_array($base->Order(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = TangocardConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = TangocardSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->Order(null)->stream("list", null, null) as $item) {
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
        $setup = order_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "order." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set TANGOCARD_TEST_ORDER_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $order_ref01_ent = $client->Order(null);
        $order_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.order"), "order_ref01"));

        $order_ref01_data_result = $order_ref01_ent->create($order_ref01_data, null);
        $order_ref01_data = Helpers::to_map(is_object($order_ref01_data_result) && method_exists($order_ref01_data_result, 'data_get') ? $order_ref01_data_result->data_get() : $order_ref01_data_result);
        $this->assertNotNull($order_ref01_data);

        // LIST
        $order_ref01_match = [];

        $order_ref01_list_result = $order_ref01_ent->list($order_ref01_match, null);
        $this->assertIsArray($order_ref01_list_result);

    }
}

function order_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/order/OrderTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = TangocardSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["order01", "order02", "order03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("TANGOCARD_TEST_ORDER_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "TANGOCARD_TEST_ORDER_ENTID" => $idmap,
        "TANGOCARD_TEST_LIVE" => "FALSE",
        "TANGOCARD_TEST_EXPLAIN" => "FALSE",
        "TANGOCARD_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["TANGOCARD_TEST_ORDER_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["TANGOCARD_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["TANGOCARD_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new TangocardSDK(Helpers::to_map($merged_opts));
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
