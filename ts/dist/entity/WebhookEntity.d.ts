import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { Webhook, WebhookLoadMatch, WebhookCreateData } from '../TangocardTypes';
declare class WebhookEntity extends TangocardEntityBase<Webhook> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: WebhookEntity): WebhookEntity;
    load(this: any, reqmatch?: WebhookLoadMatch, ctrl?: Control): Promise<WebhookEntity>;
    create(this: any, reqdata?: WebhookCreateData, ctrl?: Control): Promise<WebhookEntity>;
}
export { WebhookEntity };
