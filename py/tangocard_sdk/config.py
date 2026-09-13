# Tangocard SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Tangocard",
            "slug": "tangocard",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://integration-api.tangocard.com/raas/v2",
            "auth": {
                "prefix": "Basic",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "catalog": {},
                "customer": {},
                "order": {},
            },
        },
        "entity": {
      "catalog": {
        "fields": [
          {
            "name": "brandKey",
            "type": "`$STRING`",
          },
          {
            "name": "brandName",
            "type": "`$STRING`",
          },
          {
            "name": "imageUrls",
            "type": "`$ARRAY`",
          },
          {
            "name": "items",
            "type": "`$ARRAY`",
          },
        ],
        "name": "catalog",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/catalogs",
                "segments": [
                  {
                    "lit": "catalogs",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.brands`",
                },
                "parts": [
                  "catalogs",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "customer": {
        "fields": [
          {
            "name": "customerIdentifier",
            "type": "`$STRING`",
          },
          {
            "name": "displayName",
            "type": "`$STRING`",
          },
          {
            "name": "email",
            "type": "`$STRING`",
          },
        ],
        "name": "customer",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/customers",
                "segments": [
                  {
                    "lit": "customers",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "customers",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "order": {
        "fields": [
          {
            "name": "accountIdentifier",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "amount",
            "op": {
              "create": {
                "req": True,
                "type": "`$NUMBER`",
              },
            },
            "type": "`$NUMBER`",
          },
          {
            "name": "campaign",
            "type": "`$STRING`",
          },
          {
            "name": "created",
            "type": "`$STRING`",
          },
          {
            "name": "customerIdentifier",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "recipient",
            "type": "`$OBJECT`",
          },
          {
            "name": "referenceOrderID",
            "type": "`$STRING`",
          },
          {
            "name": "rewardName",
            "type": "`$STRING`",
          },
          {
            "name": "sendEmail",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "status",
            "type": "`$STRING`",
          },
          {
            "name": "utid",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "type": "`$STRING`",
          },
        ],
        "name": "order",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/orders",
                "segments": [
                  {
                    "lit": "orders",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "orders",
                ],
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/orders",
                "segments": [
                  {
                    "lit": "orders",
                  },
                ],
                "select": {
                  "exist": [
                    "limit",
                    "offset",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "orders",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
