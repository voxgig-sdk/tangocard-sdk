import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { BrandCategoriesView, BrandCategoriesViewListMatch } from '../TangocardTypes';
declare class BrandCategoriesViewEntity extends TangocardEntityBase<BrandCategoriesView> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: BrandCategoriesViewEntity): BrandCategoriesViewEntity;
    list(this: any, reqmatch?: BrandCategoriesViewListMatch, ctrl?: Control): Promise<BrandCategoriesViewEntity[]>;
}
export { BrandCategoriesViewEntity };
