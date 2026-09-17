import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { N1Customer, N1CustomerLoadMatch } from '../TangocardTypes';
declare class N1CustomerEntity extends TangocardEntityBase<N1Customer> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: N1CustomerEntity): N1CustomerEntity;
    load(this: any, reqmatch?: N1CustomerLoadMatch, ctrl?: Control): Promise<N1CustomerEntity>;
}
export { N1CustomerEntity };
