# Tangocard SDK utility: make_context

from projectname_sdk.core.context import TangocardContext


def make_context_util(ctxmap, basectx):
    return TangocardContext(ctxmap, basectx)
