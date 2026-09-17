import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { UpdateAccount, UpdateAccountCreateData } from '../TangocardTypes';
declare class UpdateAccountEntity extends TangocardEntityBase<UpdateAccount> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: UpdateAccountEntity): UpdateAccountEntity;
    create(this: any, reqdata?: UpdateAccountCreateData, ctrl?: Control): Promise<UpdateAccountEntity>;
}
export { UpdateAccountEntity };
