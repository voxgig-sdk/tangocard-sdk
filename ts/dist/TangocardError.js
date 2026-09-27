"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TangocardError = void 0;
class TangocardError extends Error {
    isTangocardError = true;
    sdk = 'Tangocard';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.TangocardError = TangocardError;
//# sourceMappingURL=TangocardError.js.map