import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { AddCommentEscalation, AddCommentEscalationCreateData } from '../TangocardTypes';
declare class AddCommentEscalationEntity extends TangocardEntityBase<AddCommentEscalation> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: AddCommentEscalationEntity): AddCommentEscalationEntity;
    create(this: any, reqdata?: AddCommentEscalationCreateData, ctrl?: Control): Promise<AddCommentEscalationEntity>;
}
export { AddCommentEscalationEntity };
