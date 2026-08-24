# Tangocard SDK exists test

import pytest
from tangocard_sdk import TangocardSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = TangocardSDK.test(None, None)
        assert testsdk is not None
