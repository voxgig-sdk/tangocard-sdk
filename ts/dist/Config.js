"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
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
            }
        },
    };
    options = {
        base: "https://integration-api.tangocard.com/raas/v2",
        auth: {
            prefix: 'Basic',
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
                            "parts": [
                                "catalogs"
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.brands`"
                            }
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
                            "parts": [
                                "customers"
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
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
                            "parts": [
                                "orders"
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
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
                            "parts": [
                                "orders"
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
                            }
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