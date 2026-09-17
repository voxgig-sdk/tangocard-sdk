import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { N14Webhook, N14WebhookLoadMatch, N14WebhookListMatch, N14WebhookCreateData, N14WebhookRemoveMatch } from '../TangocardTypes';
declare class N14WebhookEntity extends TangocardEntityBase<N14Webhook> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: N14WebhookEntity): N14WebhookEntity;
    load(this: any, reqmatch?: N14WebhookLoadMatch, ctrl?: Control): Promise<N14WebhookEntity>;
    list(this: any, reqmatch?: N14WebhookListMatch, ctrl?: Control): Promise<N14WebhookEntity[]>;
    create(this: any, reqdata?: N14WebhookCreateData, ctrl?: Control): Promise<N14WebhookEntity>;
    remove(this: any, reqmatch?: N14WebhookRemoveMatch, ctrl?: Control): Promise<N14WebhookEntity>;
}
export { N14WebhookEntity };
