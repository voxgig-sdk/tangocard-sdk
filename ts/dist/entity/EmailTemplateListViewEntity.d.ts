import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { EmailTemplateListView } from '../TangocardTypes';
declare class EmailTemplateListViewEntity extends TangocardEntityBase<EmailTemplateListView> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: EmailTemplateListViewEntity): EmailTemplateListViewEntity;
}
export { EmailTemplateListViewEntity };
