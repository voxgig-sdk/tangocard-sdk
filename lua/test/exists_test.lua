-- Tangocard SDK exists test

local sdk = require("tangocard_sdk")

describe("TangocardSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
