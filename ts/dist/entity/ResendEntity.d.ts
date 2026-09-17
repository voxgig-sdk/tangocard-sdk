import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { Resend, ResendCreateData } from '../TangocardTypes';
declare class ResendEntity extends TangocardEntityBase<Resend> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: ResendEntity): ResendEntity;
    create(this: any, reqdata?: ResendCreateData, ctrl?: Control): Promise<ResendEntity>;
}
export { ResendEntity };
