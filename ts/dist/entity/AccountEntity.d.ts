import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { Account, AccountLoadMatch, AccountUpdateData } from '../TangocardTypes';
declare class AccountEntity extends TangocardEntityBase<Account> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: AccountEntity): AccountEntity;
    load(this: any, reqmatch?: AccountLoadMatch, ctrl?: Control): Promise<AccountEntity>;
    update(this: any, reqdata?: AccountUpdateData, ctrl?: Control): Promise<AccountEntity>;
}
export { AccountEntity };
