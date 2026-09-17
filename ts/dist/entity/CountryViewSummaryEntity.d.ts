import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { CountryViewSummary, CountryViewSummaryLoadMatch } from '../TangocardTypes';
declare class CountryViewSummaryEntity extends TangocardEntityBase<CountryViewSummary> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: CountryViewSummaryEntity): CountryViewSummaryEntity;
    load(this: any, reqmatch?: CountryViewSummaryLoadMatch, ctrl?: Control): Promise<CountryViewSummaryEntity>;
}
export { CountryViewSummaryEntity };
