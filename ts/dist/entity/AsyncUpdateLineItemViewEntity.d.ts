import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { AsyncUpdateLineItemView, AsyncUpdateLineItemViewUpdateData } from '../TangocardTypes';
declare class AsyncUpdateLineItemViewEntity extends TangocardEntityBase<AsyncUpdateLineItemView> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: AsyncUpdateLineItemViewEntity): AsyncUpdateLineItemViewEntity;
    update(this: any, reqdata?: AsyncUpdateLineItemViewUpdateData, ctrl?: Control): Promise<AsyncUpdateLineItemViewEntity>;
}
export { AsyncUpdateLineItemViewEntity };
