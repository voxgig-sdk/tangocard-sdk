# Tangocard SDK feature factory

from tangocard_sdk.feature.base_feature import TangocardBaseFeature
from tangocard_sdk.feature.debug_feature import TangocardDebugFeature
from tangocard_sdk.feature.idempotency_feature import TangocardIdempotencyFeature
from tangocard_sdk.feature.metrics_feature import TangocardMetricsFeature
from tangocard_sdk.feature.paging_feature import TangocardPagingFeature
from tangocard_sdk.feature.ratelimit_feature import TangocardRatelimitFeature
from tangocard_sdk.feature.retry_feature import TangocardRetryFeature
from tangocard_sdk.feature.test_feature import TangocardTestFeature
from tangocard_sdk.feature.timeout_feature import TangocardTimeoutFeature


_FEATURES = {
    "base": lambda: TangocardBaseFeature(),
    "debug": lambda: TangocardDebugFeature(),
    "idempotency": lambda: TangocardIdempotencyFeature(),
    "metrics": lambda: TangocardMetricsFeature(),
    "paging": lambda: TangocardPagingFeature(),
    "ratelimit": lambda: TangocardRatelimitFeature(),
    "retry": lambda: TangocardRetryFeature(),
    "test": lambda: TangocardTestFeature(),
    "timeout": lambda: TangocardTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
