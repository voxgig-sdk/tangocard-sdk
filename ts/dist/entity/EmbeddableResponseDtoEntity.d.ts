import { TangocardEntityBase } from '../TangocardEntityBase';
import type { TangocardSDK } from '../TangocardSDK';
import type { Control } from '../types';
import type { EmbeddableResponseDto, EmbeddableResponseDtoLoadMatch } from '../TangocardTypes';
declare class EmbeddableResponseDtoEntity extends TangocardEntityBase<EmbeddableResponseDto> {
    constructor(client: TangocardSDK, entopts: any);
    make(this: EmbeddableResponseDtoEntity): EmbeddableResponseDtoEntity;
    load(this: any, reqmatch?: EmbeddableResponseDtoLoadMatch, ctrl?: Control): Promise<EmbeddableResponseDtoEntity>;
}
export { EmbeddableResponseDtoEntity };
