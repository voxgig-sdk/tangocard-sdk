import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { AllEventType, AllEventTypeListMatch } from '../TangocardTypes';
declare class AllEventTypeEntity extends TangocardEntityBase<AllEventType> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: AllEventTypeEntity): AllEventTypeEntity;
    list(this: any, reqmatch?: AllEventTypeListMatch, ctrl?: Control): Promise<AllEventTypeEntity[]>;
}
export { AllEventTypeEntity };
