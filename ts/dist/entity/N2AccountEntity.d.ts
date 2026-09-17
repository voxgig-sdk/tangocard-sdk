import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { N2Account } from '../TangocardTypes';
declare class N2AccountEntity extends TangocardEntityBase<N2Account> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: N2AccountEntity): N2AccountEntity;
}
export { N2AccountEntity };
