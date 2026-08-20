import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { Order, OrderListMatch, OrderCreateData } from '../TangocardTypes';
declare class OrderEntity extends TangocardEntityBase<Order> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: OrderEntity): OrderEntity;
    list(this: any, reqmatch?: OrderListMatch, ctrl?: Control): Promise<OrderEntity[]>;
    create(this: any, reqdata?: OrderCreateData, ctrl?: Control): Promise<OrderEntity>;
}
export { OrderEntity };
