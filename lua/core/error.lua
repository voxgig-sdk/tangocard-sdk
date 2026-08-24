-- Tangocard SDK error

local TangocardError = {}
TangocardError.__index = TangocardError


function TangocardError.new(code, msg, ctx)
  local self = setmetatable({}, TangocardError)
  self.is_sdk_error = true
  self.sdk = "Tangocard"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function TangocardError:error()
  return self.msg
end


function TangocardError:__tostring()
  return self.msg
end


return TangocardError
