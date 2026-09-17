import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { PrepaidCardInfo, PrepaidCardInfoLoadMatch } from '../TangocardTypes';
declare class PrepaidCardInfoEntity extends TangocardEntityBase<PrepaidCardInfo> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: PrepaidCardInfoEntity): PrepaidCardInfoEntity;
    load(this: any, reqmatch?: PrepaidCardInfoLoadMatch, ctrl?: Control): Promise<PrepaidCardInfoEntity>;
}
export { PrepaidCardInfoEntity };
