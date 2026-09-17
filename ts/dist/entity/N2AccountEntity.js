"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.N2AccountEntity = void 0;
const TangocardEntityBase_1 = require("../TangocardEntityBase");
// TODO: needs Entity superclass
class N2AccountEntity extends TangocardEntityBase_1.TangocardEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'n2_account';
        this.name_ = 'n2_account';
        this.Name = 'N2Account';
    }
    make() {
        return new N2AccountEntity(this._client, this.entopts());
    }
}
exports.N2AccountEntity = N2AccountEntity;
//# sourceMappingURL=N2AccountEntity.js.map