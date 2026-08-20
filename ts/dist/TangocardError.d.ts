import { Context } from './Context';
declare class TangocardError extends Error {
    isTangocardError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { TangocardError };
