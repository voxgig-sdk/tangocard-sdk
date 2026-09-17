"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.N3FundEntity = void 0;
const TangocardEntityBase_1 = require("../TangocardEntityBase");
// TODO: needs Entity superclass
class N3FundEntity extends TangocardEntityBase_1.TangocardEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'n3_fund';
        this.name_ = 'n3_fund';
        this.Name = 'N3Fund';
    }
    make() {
        return new N3FundEntity(this._client, this.entopts());
    }
}
exports.N3FundEntity = N3FundEntity;
//# sourceMappingURL=N3FundEntity.js.map