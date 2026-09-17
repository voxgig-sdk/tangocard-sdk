"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerCriterionEntity = void 0;
const TangocardEntityBase_1 = require("../TangocardEntityBase");
// TODO: needs Entity superclass
class CreateCustomerCriterionEntity extends TangocardEntityBase_1.TangocardEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'create_customer_criterion';
        this.name_ = 'create_customer_criterion';
        this.Name = 'CreateCustomerCriterion';
    }
    make() {
        return new CreateCustomerCriterionEntity(this._client, this.entopts());
    }
}
exports.CreateCustomerCriterionEntity = CreateCustomerCriterionEntity;
//# sourceMappingURL=CreateCustomerCriterionEntity.js.map