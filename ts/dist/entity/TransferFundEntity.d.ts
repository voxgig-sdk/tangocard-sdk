import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { TransferFund, TransferFundCreateData } from '../TangocardTypes';
declare class TransferFundEntity extends TangocardEntityBase<TransferFund> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: TransferFundEntity): TransferFundEntity;
    create(this: any, reqdata?: TransferFundCreateData, ctrl?: Control): Promise<TransferFundEntity>;
}
export { TransferFundEntity };
