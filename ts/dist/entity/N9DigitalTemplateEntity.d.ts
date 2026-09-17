import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { N9DigitalTemplate, N9DigitalTemplateRemoveMatch } from '../TangocardTypes';
declare class N9DigitalTemplateEntity extends TangocardEntityBase<N9DigitalTemplate> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: N9DigitalTemplateEntity): N9DigitalTemplateEntity;
    remove(this: any, reqmatch?: N9DigitalTemplateRemoveMatch, ctrl?: Control): Promise<N9DigitalTemplateEntity>;
}
export { N9DigitalTemplateEntity };
