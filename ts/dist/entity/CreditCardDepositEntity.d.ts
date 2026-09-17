import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { CreditCardDeposit, CreditCardDepositLoadMatch, CreditCardDepositCreateData } from '../TangocardTypes';
declare class CreditCardDepositEntity extends TangocardEntityBase<CreditCardDeposit> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: CreditCardDepositEntity): CreditCardDepositEntity;
    load(this: any, reqmatch?: CreditCardDepositLoadMatch, ctrl?: Control): Promise<CreditCardDepositEntity>;
    create(this: any, reqdata?: CreditCardDepositCreateData, ctrl?: Control): Promise<CreditCardDepositEntity>;
}
export { CreditCardDepositEntity };
