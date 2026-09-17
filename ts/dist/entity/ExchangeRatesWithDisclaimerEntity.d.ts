import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { ExchangeRatesWithDisclaimer, ExchangeRatesWithDisclaimerListMatch } from '../TangocardTypes';
declare class ExchangeRatesWithDisclaimerEntity extends TangocardEntityBase<ExchangeRatesWithDisclaimer> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: ExchangeRatesWithDisclaimerEntity): ExchangeRatesWithDisclaimerEntity;
    list(this: any, reqmatch?: ExchangeRatesWithDisclaimerListMatch, ctrl?: Control): Promise<ExchangeRatesWithDisclaimerEntity[]>;
}
export { ExchangeRatesWithDisclaimerEntity };
