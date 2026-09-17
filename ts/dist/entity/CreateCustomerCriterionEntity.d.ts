import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { CreateCustomerCriterion } from '../TangocardTypes';
declare class CreateCustomerCriterionEntity extends TangocardEntityBase<CreateCustomerCriterion> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: CreateCustomerCriterionEntity): CreateCustomerCriterionEntity;
}
export { CreateCustomerCriterionEntity };
