import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { MobileCountry, MobileCountryLoadMatch } from '../TangocardTypes';
declare class MobileCountryEntity extends TangocardEntityBase<MobileCountry> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: MobileCountryEntity): MobileCountryEntity;
    load(this: any, reqmatch?: MobileCountryLoadMatch, ctrl?: Control): Promise<MobileCountryEntity>;
}
export { MobileCountryEntity };
