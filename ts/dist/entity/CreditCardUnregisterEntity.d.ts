import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { CreditCardUnregister, CreditCardUnregisterCreateData } from '../TangocardTypes';
declare class CreditCardUnregisterEntity extends TangocardEntityBase<CreditCardUnregister> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: CreditCardUnregisterEntity): CreditCardUnregisterEntity;
    create(this: any, reqdata?: CreditCardUnregisterCreateData, ctrl?: Control): Promise<CreditCardUnregisterEntity>;
}
export { CreditCardUnregisterEntity };
