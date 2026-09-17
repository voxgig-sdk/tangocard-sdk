import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { Order, OrderLoadMatch, OrderListMatch, OrderCreateData } from '../TangocardTypes';
declare class OrderEntity extends TangocardEntityBase<Order> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: OrderEntity): OrderEntity;
    load(this: any, reqmatch?: OrderLoadMatch, ctrl?: Control): Promise<OrderEntity>;
    list(this: any, reqmatch?: OrderListMatch, ctrl?: Control): Promise<OrderEntity[]>;
    create(this: any, reqdata?: OrderCreateData, ctrl?: Control): Promise<OrderEntity>;
}
export { OrderEntity };
