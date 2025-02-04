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
import { Body11 } from '../models'
import { InlineResponse2004 } from '../models'
import { InlineResponse2009 } from '../models'
import { InlineResponse4036 } from '../models'
import { NoSuchWallet } from '../models'
import { NotAcceptable } from '../models'
import { NothingToMigrate } from '../models'
import { UnsupportedMediaType } from '../models'
/**
 * MigrationsApi - axios parameter creator
 * @export
 */
export const MigrationsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * <p align=\"right\">status: <strong>disabled</strong></p> <strong>⚠️IMPORTANT⚠️</strong> This endpoint has been temporarily disabled with the introduction of multi-assets UTxO. It will be enabled again soon.  <hr/>  Calculate the exact cost of sending all funds from particular Shelley wallet to a set of addresses.
     * @summary Calculate Cost
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getShelleyWalletMigrationInfo: async (
      walletId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'walletId' is not null or undefined
      if (walletId === null || walletId === undefined) {
        throw new RequiredError(
          'walletId',
          'Required parameter walletId was null or undefined when calling getShelleyWalletMigrationInfo.'
        )
      }
      const localVarPath = `/wallets/{walletId}/migrations`.replace(
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
    },
    /**
     * <p align=\"right\">status: <strong>disabled</strong></p> <strong>⚠️IMPORTANT⚠️</strong> This endpoint has been temporarily disabled with the introduction of multi-assets UTxO. It will be enabled again soon.  <hr/>  Submit one or more transactions which transfers all funds from a Shelley wallet to a set of addresses.  This operation attempts to preserve the UTxO \"shape\" of a wallet as far as possible. That is, coins will not be agglomerated. Therefore, if the wallet has a large UTxO set, several transactions may be needed.  A typical usage would be when one wants to move all funds from an old wallet to another by providing addresses coming from the new wallet.
     * @summary Migrate
     * @param {Body11} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    migrateShelleyWallet: async (
      body: Body11,
      walletId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling migrateShelleyWallet.'
        )
      }
      // verify required parameter 'walletId' is not null or undefined
      if (walletId === null || walletId === undefined) {
        throw new RequiredError(
          'walletId',
          'Required parameter walletId was null or undefined when calling migrateShelleyWallet.'
        )
      }
      const localVarPath = `/wallets/{walletId}/migrations`.replace(
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
        method: 'POST',
        ...baseOptions,
        ...options
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

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
      const needsSerialization =
        typeof body !== 'string' ||
        localVarRequestOptions.headers['Content-Type'] === 'application/json'
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(body !== undefined ? body : {})
        : body || ''

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions
      }
    }
  }
}

/**
 * MigrationsApi - functional programming interface
 * @export
 */
export const MigrationsApiFp = function (configuration?: Configuration) {
  return {
    /**
     * <p align=\"right\">status: <strong>disabled</strong></p> <strong>⚠️IMPORTANT⚠️</strong> This endpoint has been temporarily disabled with the introduction of multi-assets UTxO. It will be enabled again soon.  <hr/>  Calculate the exact cost of sending all funds from particular Shelley wallet to a set of addresses.
     * @summary Calculate Cost
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getShelleyWalletMigrationInfo(
      walletId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<InlineResponse2009>
    > {
      const localVarAxiosArgs = await MigrationsApiAxiosParamCreator(
        configuration
      ).getShelleyWalletMigrationInfo(walletId, options)
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
     * <p align=\"right\">status: <strong>disabled</strong></p> <strong>⚠️IMPORTANT⚠️</strong> This endpoint has been temporarily disabled with the introduction of multi-assets UTxO. It will be enabled again soon.  <hr/>  Submit one or more transactions which transfers all funds from a Shelley wallet to a set of addresses.  This operation attempts to preserve the UTxO \"shape\" of a wallet as far as possible. That is, coins will not be agglomerated. Therefore, if the wallet has a large UTxO set, several transactions may be needed.  A typical usage would be when one wants to move all funds from an old wallet to another by providing addresses coming from the new wallet.
     * @summary Migrate
     * @param {Body11} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async migrateShelleyWallet(
      body: Body11,
      walletId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<InlineResponse2004>>
    > {
      const localVarAxiosArgs = await MigrationsApiAxiosParamCreator(
        configuration
      ).migrateShelleyWallet(body, walletId, options)
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
 * MigrationsApi - factory interface
 * @export
 */
export const MigrationsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     * <p align=\"right\">status: <strong>disabled</strong></p> <strong>⚠️IMPORTANT⚠️</strong> This endpoint has been temporarily disabled with the introduction of multi-assets UTxO. It will be enabled again soon.  <hr/>  Calculate the exact cost of sending all funds from particular Shelley wallet to a set of addresses.
     * @summary Calculate Cost
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getShelleyWalletMigrationInfo(
      walletId: string,
      options?: any
    ): AxiosPromise<InlineResponse2009> {
      return MigrationsApiFp(configuration)
        .getShelleyWalletMigrationInfo(walletId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * <p align=\"right\">status: <strong>disabled</strong></p> <strong>⚠️IMPORTANT⚠️</strong> This endpoint has been temporarily disabled with the introduction of multi-assets UTxO. It will be enabled again soon.  <hr/>  Submit one or more transactions which transfers all funds from a Shelley wallet to a set of addresses.  This operation attempts to preserve the UTxO \"shape\" of a wallet as far as possible. That is, coins will not be agglomerated. Therefore, if the wallet has a large UTxO set, several transactions may be needed.  A typical usage would be when one wants to move all funds from an old wallet to another by providing addresses coming from the new wallet.
     * @summary Migrate
     * @param {Body11} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    migrateShelleyWallet(
      body: Body11,
      walletId: string,
      options?: any
    ): AxiosPromise<Array<InlineResponse2004>> {
      return MigrationsApiFp(configuration)
        .migrateShelleyWallet(body, walletId, options)
        .then((request) => request(axios, basePath))
    }
  }
}

/**
 * MigrationsApi - object-oriented interface
 * @export
 * @class MigrationsApi
 * @extends {BaseAPI}
 */
export class MigrationsApi extends BaseAPI {
  /**
   * <p align=\"right\">status: <strong>disabled</strong></p> <strong>⚠️IMPORTANT⚠️</strong> This endpoint has been temporarily disabled with the introduction of multi-assets UTxO. It will be enabled again soon.  <hr/>  Calculate the exact cost of sending all funds from particular Shelley wallet to a set of addresses.
   * @summary Calculate Cost
   * @param {string} walletId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MigrationsApi
   */
  public getShelleyWalletMigrationInfo(walletId: string, options?: any) {
    return MigrationsApiFp(this.configuration)
      .getShelleyWalletMigrationInfo(walletId, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   * <p align=\"right\">status: <strong>disabled</strong></p> <strong>⚠️IMPORTANT⚠️</strong> This endpoint has been temporarily disabled with the introduction of multi-assets UTxO. It will be enabled again soon.  <hr/>  Submit one or more transactions which transfers all funds from a Shelley wallet to a set of addresses.  This operation attempts to preserve the UTxO \"shape\" of a wallet as far as possible. That is, coins will not be agglomerated. Therefore, if the wallet has a large UTxO set, several transactions may be needed.  A typical usage would be when one wants to move all funds from an old wallet to another by providing addresses coming from the new wallet.
   * @summary Migrate
   * @param {Body11} body
   * @param {string} walletId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MigrationsApi
   */
  public migrateShelleyWallet(body: Body11, walletId: string, options?: any) {
    return MigrationsApiFp(this.configuration)
      .migrateShelleyWallet(body, walletId, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
