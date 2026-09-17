import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { LowBalanceAlertListView, LowBalanceAlertListViewListMatch } from '../TangocardTypes';
declare class LowBalanceAlertListViewEntity extends TangocardEntityBase<LowBalanceAlertListView> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: LowBalanceAlertListViewEntity): LowBalanceAlertListViewEntity;
    list(this: any, reqmatch?: LowBalanceAlertListViewListMatch, ctrl?: Control): Promise<LowBalanceAlertListViewEntity[]>;
}
export { LowBalanceAlertListViewEntity };
