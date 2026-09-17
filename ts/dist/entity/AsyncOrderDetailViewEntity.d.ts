import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { AsyncOrderDetailView, AsyncOrderDetailViewLoadMatch, AsyncOrderDetailViewUpdateData } from '../TangocardTypes';
declare class AsyncOrderDetailViewEntity extends TangocardEntityBase<AsyncOrderDetailView> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: AsyncOrderDetailViewEntity): AsyncOrderDetailViewEntity;
    load(this: any, reqmatch?: AsyncOrderDetailViewLoadMatch, ctrl?: Control): Promise<AsyncOrderDetailViewEntity>;
    update(this: any, reqdata?: AsyncOrderDetailViewUpdateData, ctrl?: Control): Promise<AsyncOrderDetailViewEntity>;
}
export { AsyncOrderDetailViewEntity };
