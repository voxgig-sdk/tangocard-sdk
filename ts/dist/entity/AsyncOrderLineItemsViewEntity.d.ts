import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { AsyncOrderLineItemsView, AsyncOrderLineItemsViewListMatch } from '../TangocardTypes';
declare class AsyncOrderLineItemsViewEntity extends TangocardEntityBase<AsyncOrderLineItemsView> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: AsyncOrderLineItemsViewEntity): AsyncOrderLineItemsViewEntity;
    list(this: any, reqmatch?: AsyncOrderLineItemsViewListMatch, ctrl?: Control): Promise<AsyncOrderLineItemsViewEntity[]>;
}
export { AsyncOrderLineItemsViewEntity };
