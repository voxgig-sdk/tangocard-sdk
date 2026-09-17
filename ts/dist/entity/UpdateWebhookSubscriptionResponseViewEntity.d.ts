import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { UpdateWebhookSubscriptionResponseView, UpdateWebhookSubscriptionResponseViewUpdateData } from '../TangocardTypes';
declare class UpdateWebhookSubscriptionResponseViewEntity extends TangocardEntityBase<UpdateWebhookSubscriptionResponseView> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: UpdateWebhookSubscriptionResponseViewEntity): UpdateWebhookSubscriptionResponseViewEntity;
    update(this: any, reqdata?: UpdateWebhookSubscriptionResponseViewUpdateData, ctrl?: Control): Promise<UpdateWebhookSubscriptionResponseViewEntity>;
}
export { UpdateWebhookSubscriptionResponseViewEntity };
