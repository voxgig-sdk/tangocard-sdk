# ReissueCard entity test

import json
import os
import time

import pytest

from tangocard_sdk.utility.voxgig_struct import voxgig_struct as vs
from tangocard_sdk import TangocardSDK
from tangocard_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestReissueCardEntity:

    def test_should_create_instance(self):
        testsdk = TangocardSDK.test(None, None)
        ent = testsdk.ReissueCard(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _reissue_card_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "reissue_card." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set TANGOCARD_TEST_REISSUE_CARD_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        reissue_card_ref01_ent = client.ReissueCard(None)
        reissue_card_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.reissue_card"), "reissue_card_ref01"))
        reissue_card_ref01_data["reference_line_item_i_d"] = setup["idmap"]["reference_line_item_i_d01"]

        reissue_card_ref01_data = helpers.to_map(runner.entity_data(reissue_card_ref01_ent.create(reissue_card_ref01_data, None)))
        assert reissue_card_ref01_data is not None
        assert reissue_card_ref01_data["id"] is not None



def _reissue_card_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/reissue_card/ReissueCardTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = TangocardSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["reissue_card01", "reissue_card02", "reissue_card03", "reference_line_item_i_d01"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "TANGOCARD_TEST_REISSUE_CARD_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "TANGOCARD_TEST_REISSUE_CARD_ENTID": idmap,
        "TANGOCARD_TEST_LIVE": "FALSE",
        "TANGOCARD_TEST_EXPLAIN": "FALSE",
        "TANGOCARD_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("TANGOCARD_TEST_REISSUE_CARD_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("TANGOCARD_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("TANGOCARD_APIKEY"),
            },
            extra or {},
        ])
        client = TangocardSDK(helpers.to_map(merged_opts))

    _live = env.get("TANGOCARD_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("TANGOCARD_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
