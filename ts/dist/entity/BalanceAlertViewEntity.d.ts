import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { BalanceAlertView, BalanceAlertViewRemoveMatch } from '../TangocardTypes';
declare class BalanceAlertViewEntity extends TangocardEntityBase<BalanceAlertView> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: BalanceAlertViewEntity): BalanceAlertViewEntity;
    remove(this: any, reqmatch?: BalanceAlertViewRemoveMatch, ctrl?: Control): Promise<BalanceAlertViewEntity>;
}
export { BalanceAlertViewEntity };
