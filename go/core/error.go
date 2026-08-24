package core

type TangocardError struct {
	IsTangocardError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewTangocardError(code string, msg string, ctx *Context) *TangocardError {
	return &TangocardError{
		IsTangocardError: true,
		Sdk:              "Tangocard",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *TangocardError) Error() string {
	return e.Msg
}
