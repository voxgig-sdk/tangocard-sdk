import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { AsyncReasonCodesView, AsyncReasonCodesViewLoadMatch } from '../TangocardTypes';
declare class AsyncReasonCodesViewEntity extends TangocardEntityBase<AsyncReasonCodesView> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: AsyncReasonCodesViewEntity): AsyncReasonCodesViewEntity;
    load(this: any, reqmatch?: AsyncReasonCodesViewLoadMatch, ctrl?: Control): Promise<AsyncReasonCodesViewEntity>;
}
export { AsyncReasonCodesViewEntity };
