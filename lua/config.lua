-- Tangocard SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Tangocard",
      slug = "tangocard",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://integration-api.tangocard.com/raas/v2",
      auth = {
        prefix = "Basic",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["catalog"] = {},
        ["customer"] = {},
        ["order"] = {},
      },
    },
    entity = {
      ["catalog"] = {
        ["fields"] = {
          {
            ["name"] = "brandKey",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "brandName",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "imageUrls",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "items",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "catalog",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/catalogs",
                ["parts"] = {
                  "catalogs",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.brands`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["customer"] = {
        ["fields"] = {
          {
            ["name"] = "customerIdentifier",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "displayName",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "email",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "customer",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/customers",
                ["parts"] = {
                  "customers",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["order"] = {
        ["fields"] = {
          {
            ["name"] = "accountIdentifier",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "amount",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$NUMBER`",
              },
            },
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "campaign",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "customerIdentifier",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "recipient",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "referenceOrderID",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "rewardName",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "sendEmail",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "status",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "utid",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "order",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/orders",
                ["parts"] = {
                  "orders",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/orders",
                ["parts"] = {
                  "orders",
                },
                ["select"] = {
                  ["exist"] = {
                    "limit",
                    "offset",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
