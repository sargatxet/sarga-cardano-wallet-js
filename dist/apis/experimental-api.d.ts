/**
 * Cardano Wallet Backend API
 * <p align=\"right\"><img style=\"position: relative; top: -10em; margin-bottom: -12em;\" width=\"20%\" src=\"https://cardanodocs.com/img/cardano.png\"></img></p>
 *
 * OpenAPI spec version: 2021.3.4
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { Body } from '../models';
/**
 * ExperimentalApi - axios parameter creator
 * @export
 */
export declare const ExperimentalApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * <p align=\"right\">status: <strong>experimental</strong></p>  **⚠️ WARNING ⚠️**  This endpoint is experimental and for internal use in the Catalyst project. This functionality will be refined in the forthcoming future and the interface is likely to change in **NON-BACKWARD COMPATIBLE WAYS**.  <b>Note:</b> Only `Soft` indexes are supported by this endpoint.
     * @summary Sign Metadata
     * @param {Body} body
     * @param {string} walletId
     * @param {string} role
     * @param {string} index
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    signMetadata: (body: Body, walletId: string, role: string, index: string, options?: any) => Promise<RequestArgs>;
};
/**
 * ExperimentalApi - functional programming interface
 * @export
 */
export declare const ExperimentalApiFp: (configuration?: Configuration) => {
    /**
     * <p align=\"right\">status: <strong>experimental</strong></p>  **⚠️ WARNING ⚠️**  This endpoint is experimental and for internal use in the Catalyst project. This functionality will be refined in the forthcoming future and the interface is likely to change in **NON-BACKWARD COMPATIBLE WAYS**.  <b>Note:</b> Only `Soft` indexes are supported by this endpoint.
     * @summary Sign Metadata
     * @param {Body} body
     * @param {string} walletId
     * @param {string} role
     * @param {string} index
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    signMetadata(body: Body, walletId: string, role: string, index: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
};
/**
 * ExperimentalApi - factory interface
 * @export
 */
export declare const ExperimentalApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * <p align=\"right\">status: <strong>experimental</strong></p>  **⚠️ WARNING ⚠️**  This endpoint is experimental and for internal use in the Catalyst project. This functionality will be refined in the forthcoming future and the interface is likely to change in **NON-BACKWARD COMPATIBLE WAYS**.  <b>Note:</b> Only `Soft` indexes are supported by this endpoint.
     * @summary Sign Metadata
     * @param {Body} body
     * @param {string} walletId
     * @param {string} role
     * @param {string} index
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    signMetadata(body: Body, walletId: string, role: string, index: string, options?: any): AxiosPromise<string>;
};
/**
 * ExperimentalApi - object-oriented interface
 * @export
 * @class ExperimentalApi
 * @extends {BaseAPI}
 */
export declare class ExperimentalApi extends BaseAPI {
    /**
     * <p align=\"right\">status: <strong>experimental</strong></p>  **⚠️ WARNING ⚠️**  This endpoint is experimental and for internal use in the Catalyst project. This functionality will be refined in the forthcoming future and the interface is likely to change in **NON-BACKWARD COMPATIBLE WAYS**.  <b>Note:</b> Only `Soft` indexes are supported by this endpoint.
     * @summary Sign Metadata
     * @param {Body} body
     * @param {string} walletId
     * @param {string} role
     * @param {string} index
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExperimentalApi
     */
    signMetadata(body: Body, walletId: string, role: string, index: string, options?: any): Promise<import("axios").AxiosResponse<string>>;
}
