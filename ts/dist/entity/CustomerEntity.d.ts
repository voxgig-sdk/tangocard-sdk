import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { Customer, CustomerListMatch } from '../TangocardTypes';
declare class CustomerEntity extends TangocardEntityBase<Customer> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: CustomerEntity): CustomerEntity;
    list(this: any, reqmatch?: CustomerListMatch, ctrl?: Control): Promise<CustomerEntity[]>;
}
export { CustomerEntity };
