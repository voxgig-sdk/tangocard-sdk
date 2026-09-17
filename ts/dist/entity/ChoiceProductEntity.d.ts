import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { ChoiceProduct, ChoiceProductLoadMatch, ChoiceProductListMatch } from '../TangocardTypes';
declare class ChoiceProductEntity extends TangocardEntityBase<ChoiceProduct> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: ChoiceProductEntity): ChoiceProductEntity;
    load(this: any, reqmatch?: ChoiceProductLoadMatch, ctrl?: Control): Promise<ChoiceProductEntity>;
    list(this: any, reqmatch?: ChoiceProductListMatch, ctrl?: Control): Promise<ChoiceProductEntity[]>;
}
export { ChoiceProductEntity };
