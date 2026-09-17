import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { LineItem, LineItemLoadMatch, LineItemListMatch, LineItemCreateData } from '../TangocardTypes';
declare class LineItemEntity extends TangocardEntityBase<LineItem> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: LineItemEntity): LineItemEntity;
    load(this: any, reqmatch?: LineItemLoadMatch, ctrl?: Control): Promise<LineItemEntity>;
    list(this: any, reqmatch?: LineItemListMatch, ctrl?: Control): Promise<LineItemEntity[]>;
    create(this: any, reqdata?: LineItemCreateData, ctrl?: Control): Promise<LineItemEntity>;
}
export { LineItemEntity };
