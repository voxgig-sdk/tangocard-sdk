import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { AsyncOrder, AsyncOrderListMatch, AsyncOrderCreateData } from '../TangocardTypes';
declare class AsyncOrderEntity extends TangocardEntityBase<AsyncOrder> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: AsyncOrderEntity): AsyncOrderEntity;
    list(this: any, reqmatch?: AsyncOrderListMatch, ctrl?: Control): Promise<AsyncOrderEntity[]>;
    create(this: any, reqdata?: AsyncOrderCreateData, ctrl?: Control): Promise<AsyncOrderEntity>;
}
export { AsyncOrderEntity };
