import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { N8LineItem, N8LineItemUpdateData } from '../TangocardTypes';
declare class N8LineItemEntity extends TangocardEntityBase<N8LineItem> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: N8LineItemEntity): N8LineItemEntity;
    update(this: any, reqdata?: N8LineItemUpdateData, ctrl?: Control): Promise<N8LineItemEntity>;
}
export { N8LineItemEntity };
