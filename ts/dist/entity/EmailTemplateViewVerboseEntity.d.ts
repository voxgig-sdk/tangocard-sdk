import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { EmailTemplateViewVerbose, EmailTemplateViewVerboseLoadMatch, EmailTemplateViewVerboseListMatch, EmailTemplateViewVerboseCreateData, EmailTemplateViewVerboseUpdateData } from '../TangocardTypes';
declare class EmailTemplateViewVerboseEntity extends TangocardEntityBase<EmailTemplateViewVerbose> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: EmailTemplateViewVerboseEntity): EmailTemplateViewVerboseEntity;
    load(this: any, reqmatch?: EmailTemplateViewVerboseLoadMatch, ctrl?: Control): Promise<EmailTemplateViewVerboseEntity>;
    list(this: any, reqmatch?: EmailTemplateViewVerboseListMatch, ctrl?: Control): Promise<EmailTemplateViewVerboseEntity[]>;
    create(this: any, reqdata?: EmailTemplateViewVerboseCreateData, ctrl?: Control): Promise<EmailTemplateViewVerboseEntity>;
    update(this: any, reqdata?: EmailTemplateViewVerboseUpdateData, ctrl?: Control): Promise<EmailTemplateViewVerboseEntity>;
}
export { EmailTemplateViewVerboseEntity };
