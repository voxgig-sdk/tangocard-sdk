import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { CreditCard, CreditCardLoadMatch, CreditCardCreateData } from '../TangocardTypes';
declare class CreditCardEntity extends TangocardEntityBase<CreditCard> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: CreditCardEntity): CreditCardEntity;
    load(this: any, reqmatch?: CreditCardLoadMatch, ctrl?: Control): Promise<CreditCardEntity>;
    create(this: any, reqdata?: CreditCardCreateData, ctrl?: Control): Promise<CreditCardEntity>;
}
export { CreditCardEntity };
