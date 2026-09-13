export interface Catalog {
    brandKey?: string;
    brandName?: string;
    imageUrls?: any[];
    items?: any[];
}
export interface CatalogListMatch {
    brandKey?: string;
    brandName?: string;
    imageUrls?: any[];
    items?: any[];
}
export interface Customer {
    customerIdentifier?: string;
    displayName?: string;
    email?: string;
}
export interface CustomerListMatch {
    customerIdentifier?: string;
    displayName?: string;
    email?: string;
}
export interface Order {
    accountIdentifier: string;
    amount?: number;
    campaign?: string;
    created?: string;
    customerIdentifier: string;
    recipient?: Record<string, any>;
    referenceOrderID?: string;
    rewardName?: string;
    sendEmail?: boolean;
    status?: string;
    utid?: string;
}
export interface OrderListMatch {
    limit?: number;
    offset?: number;
}
export interface OrderCreateData {
    accountIdentifier: string;
    amount?: number;
    campaign?: string;
    created?: string;
    customerIdentifier: string;
    recipient?: Record<string, any>;
    referenceOrderID?: string;
    rewardName?: string;
    sendEmail?: boolean;
    status?: string;
    utid?: string;
}
