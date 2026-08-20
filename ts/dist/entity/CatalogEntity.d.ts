import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { Catalog, CatalogListMatch } from '../TangocardTypes';
declare class CatalogEntity extends TangocardEntityBase<Catalog> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: CatalogEntity): CatalogEntity;
    list(this: any, reqmatch?: CatalogListMatch, ctrl?: Control): Promise<CatalogEntity[]>;
}
export { CatalogEntity };
