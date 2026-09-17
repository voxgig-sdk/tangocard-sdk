import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { CreateAccountCriterion, CreateAccountCriterionCreateData } from '../TangocardTypes';
declare class CreateAccountCriterionEntity extends TangocardEntityBase<CreateAccountCriterion> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: CreateAccountCriterionEntity): CreateAccountCriterionEntity;
    create(this: any, reqdata?: CreateAccountCriterionCreateData, ctrl?: Control): Promise<CreateAccountCriterionEntity>;
}
export { CreateAccountCriterionEntity };
