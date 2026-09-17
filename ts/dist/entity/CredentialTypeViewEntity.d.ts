import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { CredentialTypeView, CredentialTypeViewListMatch } from '../TangocardTypes';
declare class CredentialTypeViewEntity extends TangocardEntityBase<CredentialTypeView> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: CredentialTypeViewEntity): CredentialTypeViewEntity;
    list(this: any, reqmatch?: CredentialTypeViewListMatch, ctrl?: Control): Promise<CredentialTypeViewEntity[]>;
}
export { CredentialTypeViewEntity };
