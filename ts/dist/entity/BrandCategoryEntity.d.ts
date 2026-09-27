import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { BrandCategory, BrandCategoryListMatch } from '../TangocardTypes';
declare class BrandCategoryEntity extends TangocardEntityBase<BrandCategory> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: BrandCategoryEntity): BrandCategoryEntity;
    list(this: any, reqmatch?: BrandCategoryListMatch, ctrl?: Control): Promise<BrandCategoryEntity[]>;
}
export { BrandCategoryEntity };
