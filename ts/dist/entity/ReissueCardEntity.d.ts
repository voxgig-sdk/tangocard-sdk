import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { ReissueCard, ReissueCardCreateData } from '../TangocardTypes';
declare class ReissueCardEntity extends TangocardEntityBase<ReissueCard> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: ReissueCardEntity): ReissueCardEntity;
    create(this: any, reqdata?: ReissueCardCreateData, ctrl?: Control): Promise<ReissueCardEntity>;
}
export { ReissueCardEntity };
