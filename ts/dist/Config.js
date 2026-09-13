"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Tangocard',
        slug: "tangocard",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://integration-api.tangocard.com/raas/v2",
        auth: {
            prefix: 'Basic',
            basic: true,
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            catalog: {},
            customer: {},
            order: {},
        }
    };
    entity = {
        "catalog": {
            "fields": [
                {
                    "name": "brandKey",
                    "type": "`$STRING`"
                },
                {
                    "name": "brandName",
                    "type": "`$STRING`"
                },
                {
                    "name": "imageUrls",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "items",
                    "type": "`$ARRAY`"
                }
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
                                    "lit": "catalogs"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.brands`"
                            },
                            "parts": [
                                "catalogs"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "customer": {
            "fields": [
                {
                    "name": "customerIdentifier",
                    "type": "`$STRING`"
                },
                {
                    "name": "displayName",
                    "type": "`$STRING`"
                },
                {
                    "name": "email",
                    "type": "`$STRING`"
                }
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
                                    "lit": "customers"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "customers"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "order": {
            "fields": [
                {
                    "name": "accountIdentifier",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "amount",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$NUMBER`"
                        }
                    },
                    "type": "`$NUMBER`"
                },
                {
                    "name": "campaign",
                    "type": "`$STRING`"
                },
                {
                    "name": "created",
                    "type": "`$STRING`"
                },
                {
                    "name": "customerIdentifier",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "recipient",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "referenceOrderID",
                    "type": "`$STRING`"
                },
                {
                    "name": "rewardName",
                    "type": "`$STRING`"
                },
                {
                    "name": "sendEmail",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "status",
                    "type": "`$STRING`"
                },
                {
                    "name": "utid",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "type": "`$STRING`"
                }
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
                                    "lit": "orders"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "orders"
                            ]
                        }
                    ]
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
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "offset",
                                        "orig": "offset",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/orders",
                            "segments": [
                                {
                                    "lit": "orders"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "limit",
                                    "offset"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "orders"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map