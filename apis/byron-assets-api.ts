/* tslint:disable */
/* eslint-disable */
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
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios'
import { Configuration } from '../configuration'
// Some imports not used depending on template conditions
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError
} from '../base'
import { AssetNotPresent } from '../models'
import { InlineResponse2001 } from '../models'
import { InlineResponse2002 } from '../models'
import { NotAcceptable } from '../models'
/**
 * ByronAssetsApi - axios parameter creator
 * @export
 */
export const ByronAssetsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Fetch a single asset from its `policy_id` and `asset_name`, with its metadata if any.  The asset must be associated with the wallet.
     * @summary Get Asset
     * @param {string} walletId
     * @param {string} policyId
     * @param {string} assetName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getByronAsset: async (
      walletId: string,
      policyId: string,
      assetName: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'walletId' is not null or undefined
      if (walletId === null || walletId === undefined) {
        throw new RequiredError(
          'walletId',
          'Required parameter walletId was null or undefined when calling getByronAsset.'
        )
      }
      // verify required parameter 'policyId' is not null or undefined
      if (policyId === null || policyId === undefined) {
        throw new RequiredError(
          'policyId',
          'Required parameter policyId was null or undefined when calling getByronAsset.'
        )
      }
      // verify required parameter 'assetName' is not null or undefined
      if (assetName === null || assetName === undefined) {
        throw new RequiredError(
          'assetName',
          'Required parameter assetName was null or undefined when calling getByronAsset.'
        )
      }
      const localVarPath =
        `/byron-wallets/{walletId}/assets/{policyId}/{assetName}`
          .replace(`{${'walletId'}}`, encodeURIComponent(String(walletId)))
          .replace(`{${'policyId'}}`, encodeURIComponent(String(policyId)))
          .replace(`{${'assetName'}}`, encodeURIComponent(String(assetName)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.query) {
        query.set(key, options.query[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions
      }
    },
    /**
     * Fetch the the asset from `policy_id` with an empty name.  The asset must be associated with the wallet.
     * @summary Get Asset (empty name)
     * @param {string} walletId
     * @param {string} policyId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getByronAssetDefault: async (
      walletId: string,
      policyId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'walletId' is not null or undefined
      if (walletId === null || walletId === undefined) {
        throw new RequiredError(
          'walletId',
          'Required parameter walletId was null or undefined when calling getByronAssetDefault.'
        )
      }
      // verify required parameter 'policyId' is not null or undefined
      if (policyId === null || policyId === undefined) {
        throw new RequiredError(
          'policyId',
          'Required parameter policyId was null or undefined when calling getByronAssetDefault.'
        )
      }
      const localVarPath = `/byron-wallets/{walletId}/assets/{policyId}`
        .replace(`{${'walletId'}}`, encodeURIComponent(String(walletId)))
        .replace(`{${'policyId'}}`, encodeURIComponent(String(policyId)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.query) {
        query.set(key, options.query[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions
      }
    },
    /**
     * List all assets associated with the wallet, and their metadata if known.  An asset is _associated_ with a wallet if it is involved in a transaction of the wallet.
     * @summary List Assets
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listByronAssets: async (
      walletId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'walletId' is not null or undefined
      if (walletId === null || walletId === undefined) {
        throw new RequiredError(
          'walletId',
          'Required parameter walletId was null or undefined when calling listByronAssets.'
        )
      }
      const localVarPath = `/byron-wallets/{walletId}/assets`.replace(
        `{${'walletId'}}`,
        encodeURIComponent(String(walletId))
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, 'https://example.com')
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }
      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      const query = new URLSearchParams(localVarUrlObj.search)
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key])
      }
      for (const key in options.query) {
        query.set(key, options.query[key])
      }
      localVarUrlObj.search = new URLSearchParams(query).toString()
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      }

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions
      }
    }
  }
}

/**
 * ByronAssetsApi - functional programming interface
 * @export
 */
export const ByronAssetsApiFp = function (configuration?: Configuration) {
  return {
    /**
     * Fetch a single asset from its `policy_id` and `asset_name`, with its metadata if any.  The asset must be associated with the wallet.
     * @summary Get Asset
     * @param {string} walletId
     * @param {string} policyId
     * @param {string} assetName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getByronAsset(
      walletId: string,
      policyId: string,
      assetName: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<InlineResponse2002>
    > {
      const localVarAxiosArgs = await ByronAssetsApiAxiosParamCreator(
        configuration
      ).getByronAsset(walletId, policyId, assetName, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url
        }
        return axios.request(axiosRequestArgs)
      }
    },
    /**
     * Fetch the the asset from `policy_id` with an empty name.  The asset must be associated with the wallet.
     * @summary Get Asset (empty name)
     * @param {string} walletId
     * @param {string} policyId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getByronAssetDefault(
      walletId: string,
      policyId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<InlineResponse2002>
    > {
      const localVarAxiosArgs = await ByronAssetsApiAxiosParamCreator(
        configuration
      ).getByronAssetDefault(walletId, policyId, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url
        }
        return axios.request(axiosRequestArgs)
      }
    },
    /**
     * List all assets associated with the wallet, and their metadata if known.  An asset is _associated_ with a wallet if it is involved in a transaction of the wallet.
     * @summary List Assets
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listByronAssets(
      walletId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<InlineResponse2001>>
    > {
      const localVarAxiosArgs = await ByronAssetsApiAxiosParamCreator(
        configuration
      ).listByronAssets(walletId, options)
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url
        }
        return axios.request(axiosRequestArgs)
      }
    }
  }
}

/**
 * ByronAssetsApi - factory interface
 * @export
 */
export const ByronAssetsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     * Fetch a single asset from its `policy_id` and `asset_name`, with its metadata if any.  The asset must be associated with the wallet.
     * @summary Get Asset
     * @param {string} walletId
     * @param {string} policyId
     * @param {string} assetName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getByronAsset(
      walletId: string,
      policyId: string,
      assetName: string,
      options?: any
    ): AxiosPromise<InlineResponse2002> {
      return ByronAssetsApiFp(configuration)
        .getByronAsset(walletId, policyId, assetName, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Fetch the the asset from `policy_id` with an empty name.  The asset must be associated with the wallet.
     * @summary Get Asset (empty name)
     * @param {string} walletId
     * @param {string} policyId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getByronAssetDefault(
      walletId: string,
      policyId: string,
      options?: any
    ): AxiosPromise<InlineResponse2002> {
      return ByronAssetsApiFp(configuration)
        .getByronAssetDefault(walletId, policyId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * List all assets associated with the wallet, and their metadata if known.  An asset is _associated_ with a wallet if it is involved in a transaction of the wallet.
     * @summary List Assets
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listByronAssets(
      walletId: string,
      options?: any
    ): AxiosPromise<Array<InlineResponse2001>> {
      return ByronAssetsApiFp(configuration)
        .listByronAssets(walletId, options)
        .then((request) => request(axios, basePath))
    }
  }
}

/**
 * ByronAssetsApi - object-oriented interface
 * @export
 * @class ByronAssetsApi
 * @extends {BaseAPI}
 */
export class ByronAssetsApi extends BaseAPI {
  /**
   * Fetch a single asset from its `policy_id` and `asset_name`, with its metadata if any.  The asset must be associated with the wallet.
   * @summary Get Asset
   * @param {string} walletId
   * @param {string} policyId
   * @param {string} assetName
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ByronAssetsApi
   */
  public getByronAsset(
    walletId: string,
    policyId: string,
    assetName: string,
    options?: any
  ) {
    return ByronAssetsApiFp(this.configuration)
      .getByronAsset(walletId, policyId, assetName, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   * Fetch the the asset from `policy_id` with an empty name.  The asset must be associated with the wallet.
   * @summary Get Asset (empty name)
   * @param {string} walletId
   * @param {string} policyId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ByronAssetsApi
   */
  public getByronAssetDefault(
    walletId: string,
    policyId: string,
    options?: any
  ) {
    return ByronAssetsApiFp(this.configuration)
      .getByronAssetDefault(walletId, policyId, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   * List all assets associated with the wallet, and their metadata if known.  An asset is _associated_ with a wallet if it is involved in a transaction of the wallet.
   * @summary List Assets
   * @param {string} walletId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ByronAssetsApi
   */
  public listByronAssets(walletId: string, options?: any) {
    return ByronAssetsApiFp(this.configuration)
      .listByronAssets(walletId, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
