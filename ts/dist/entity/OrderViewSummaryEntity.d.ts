import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { OrderViewSummary, OrderViewSummaryCreateData } from '../TangocardTypes';
declare class OrderViewSummaryEntity extends TangocardEntityBase<OrderViewSummary> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: OrderViewSummaryEntity): OrderViewSummaryEntity;
    create(this: any, reqdata?: OrderViewSummaryCreateData, ctrl?: Control): Promise<OrderViewSummaryEntity>;
}
export { OrderViewSummaryEntity };
