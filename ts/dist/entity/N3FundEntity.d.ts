import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { N3Fund } from '../TangocardTypes';
declare class N3FundEntity extends TangocardEntityBase<N3Fund> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: N3FundEntity): N3FundEntity;
}
export { N3FundEntity };
