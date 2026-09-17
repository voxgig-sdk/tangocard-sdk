import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { RewardReasonsMap, RewardReasonsMapLoadMatch } from '../TangocardTypes';
declare class RewardReasonsMapEntity extends TangocardEntityBase<RewardReasonsMap> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: RewardReasonsMapEntity): RewardReasonsMapEntity;
    load(this: any, reqmatch?: RewardReasonsMapLoadMatch, ctrl?: Control): Promise<RewardReasonsMapEntity>;
}
export { RewardReasonsMapEntity };
