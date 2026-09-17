import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { LowBalanceAlertView, LowBalanceAlertViewLoadMatch, LowBalanceAlertViewCreateData, LowBalanceAlertViewUpdateData } from '../TangocardTypes';
declare class LowBalanceAlertViewEntity extends TangocardEntityBase<LowBalanceAlertView> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: LowBalanceAlertViewEntity): LowBalanceAlertViewEntity;
    load(this: any, reqmatch?: LowBalanceAlertViewLoadMatch, ctrl?: Control): Promise<LowBalanceAlertViewEntity>;
    create(this: any, reqdata?: LowBalanceAlertViewCreateData, ctrl?: Control): Promise<LowBalanceAlertViewEntity>;
    update(this: any, reqdata?: LowBalanceAlertViewUpdateData, ctrl?: Control): Promise<LowBalanceAlertViewEntity>;
}
export { LowBalanceAlertViewEntity };
