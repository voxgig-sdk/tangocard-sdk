import { CatalogEntity } from './entity/CatalogEntity';
import { CustomerEntity } from './entity/CustomerEntity';
import { OrderEntity } from './entity/OrderEntity';
export type * from './TangocardTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { TangocardEntityBase } from './TangocardEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class TangocardSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Catalog(entopts?: Record<string, any>): CatalogEntity;
    Customer(entopts?: Record<string, any>): CustomerEntity;
    Order(entopts?: Record<string, any>): OrderEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): TangocardSDK;
    tester(testopts?: any, sdkopts?: any): TangocardSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof TangocardSDK;
export { stdutil, config, BaseFeature, TangocardEntityBase, TangocardSDK, SDK, };
