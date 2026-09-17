import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { PrepaidCardTransaction, PrepaidCardTransactionLoadMatch } from '../TangocardTypes';
declare class PrepaidCardTransactionEntity extends TangocardEntityBase<PrepaidCardTransaction> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: PrepaidCardTransactionEntity): PrepaidCardTransactionEntity;
    load(this: any, reqmatch?: PrepaidCardTransactionLoadMatch, ctrl?: Control): Promise<PrepaidCardTransactionEntity>;
}
export { PrepaidCardTransactionEntity };
