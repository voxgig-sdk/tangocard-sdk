import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { Customer, CustomerLoadMatch, CustomerListMatch, CustomerCreateData } from '../TangocardTypes';
declare class CustomerEntity extends TangocardEntityBase<Customer> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: CustomerEntity): CustomerEntity;
    load(this: any, reqmatch?: CustomerLoadMatch, ctrl?: Control): Promise<CustomerEntity>;
    list(this: any, reqmatch?: CustomerListMatch, ctrl?: Control): Promise<CustomerEntity[]>;
    create(this: any, reqdata?: CustomerCreateData, ctrl?: Control): Promise<CustomerEntity>;
}
export { CustomerEntity };
