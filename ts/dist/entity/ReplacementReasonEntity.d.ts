import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { ReplacementReason, ReplacementReasonListMatch } from '../TangocardTypes';
declare class ReplacementReasonEntity extends TangocardEntityBase<ReplacementReason> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: ReplacementReasonEntity): ReplacementReasonEntity;
    list(this: any, reqmatch?: ReplacementReasonListMatch, ctrl?: Control): Promise<ReplacementReasonEntity[]>;
}
export { ReplacementReasonEntity };
