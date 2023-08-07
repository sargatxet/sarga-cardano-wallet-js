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
import { BadRequest } from '../models'
import { ApiWalletPostData } from '../models'
import { ApiWalletPutData } from '../models'
import { ApiWalletPutPassphraseData } from '../models'
import { ApiWallet } from '../models'
import { ApiWalletUTxOsStatistics } from '../models'
import { InlineResponse403 } from '../models'
import { NoSuchWallet } from '../models'
import { NotAcceptable } from '../models'
import { UnsupportedMediaType } from '../models'
import { WalletAlreadyExists } from '../models'
/**
 * WalletsApi - axios parameter creator
 * @export
 */
export const WalletsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>
     * @summary Delete
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteWallet: async (
      walletId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'walletId' is not null or undefined
      if (walletId === null || walletId === undefined) {
        throw new RequiredError(
          'walletId',
          'Required parameter walletId was null or undefined when calling deleteWallet.'
        )
      }
      const localVarPath = `/wallets/{walletId}`.replace(
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
        method: 'DELETE',
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
     * <p align=\"right\">status: <strong>stable</strong></p>  Return the UTxOs distribution across the whole wallet, in the form of a histogram.  ```      │  100 ─      │      │                                 ┌───┐   10 ─                         ┌───┐   │   │                   ┌───┐      │                 ┌───┐   │   │   │   │                   │   │      │                 │   │   │   │   │   │   ┌───┐           │   │    1 ─ ┌───┐           │   │   │   │   │   │   │   │           │   │      │ │   │           │   │   │   │   │   │   │   │           │   │      │ │   │ │       │ │   │ │ │   │ ╷ │   │ ╷ │   │ ╷       ╷ │   │      └─┘   └─│───────│─┘   └─│─┘   └─│─┘   └─│─┘   └─│───────│─┘   └────            10μ₳    100μ₳   1000μ₳   0.1₳    1₳      10₳     100₳ ```
     * @summary UTxO Statistics
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUTxOsStatistics: async (
      walletId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'walletId' is not null or undefined
      if (walletId === null || walletId === undefined) {
        throw new RequiredError(
          'walletId',
          'Required parameter walletId was null or undefined when calling getUTxOsStatistics.'
        )
      }
      const localVarPath = `/wallets/{walletId}/statistics/utxos`.replace(
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
     * <p align=\"right\">status: <strong>stable</strong></p>
     * @summary Get
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWallet: async (
      walletId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'walletId' is not null or undefined
      if (walletId === null || walletId === undefined) {
        throw new RequiredError(
          'walletId',
          'Required parameter walletId was null or undefined when calling getWallet.'
        )
      }
      const localVarPath = `/wallets/{walletId}`.replace(
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
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known wallets, ordered from oldest to newest.
     * @summary List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listWallets: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/wallets`
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
     * <p align=\"right\">status: <strong>stable</strong></p>  Create and restore a wallet from a mnemonic sentence or account public key.
     * @summary Create / Restore
     * @param {ApiWalletPostData} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postWallet: async (
      body: ApiWalletPostData,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling postWallet.'
        )
      }
      const localVarPath = `/wallets`
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
    },
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>
     * @summary Update Metadata
     * @param {ApiWalletPutData} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putWallet: async (
      body: ApiWalletPutData,
      walletId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling putWallet.'
        )
      }
      // verify required parameter 'walletId' is not null or undefined
      if (walletId === null || walletId === undefined) {
        throw new RequiredError(
          'walletId',
          'Required parameter walletId was null or undefined when calling putWallet.'
        )
      }
      const localVarPath = `/wallets/{walletId}`.replace(
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
        method: 'PUT',
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
    },
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>
     * @summary Update Passphrase
     * @param {ApiWalletPutPassphraseData} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putWalletPassphrase: async (
      body: ApiWalletPutPassphraseData,
      walletId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          'body',
          'Required parameter body was null or undefined when calling putWalletPassphrase.'
        )
      }
      // verify required parameter 'walletId' is not null or undefined
      if (walletId === null || walletId === undefined) {
        throw new RequiredError(
          'walletId',
          'Required parameter walletId was null or undefined when calling putWalletPassphrase.'
        )
      }
      const localVarPath = `/wallets/{walletId}/passphrase`.replace(
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
        method: 'PUT',
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
 * WalletsApi - functional programming interface
 * @export
 */
export const WalletsApiFp = function (configuration?: Configuration) {
  return {
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>
     * @summary Delete
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteWallet(
      walletId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await WalletsApiAxiosParamCreator(
        configuration
      ).deleteWallet(walletId, options)
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
     * <p align=\"right\">status: <strong>stable</strong></p>  Return the UTxOs distribution across the whole wallet, in the form of a histogram.  ```      │  100 ─      │      │                                 ┌───┐   10 ─                         ┌───┐   │   │                   ┌───┐      │                 ┌───┐   │   │   │   │                   │   │      │                 │   │   │   │   │   │   ┌───┐           │   │    1 ─ ┌───┐           │   │   │   │   │   │   │   │           │   │      │ │   │           │   │   │   │   │   │   │   │           │   │      │ │   │ │       │ │   │ │ │   │ ╷ │   │ ╷ │   │ ╷       ╷ │   │      └─┘   └─│───────│─┘   └─│─┘   └─│─┘   └─│─┘   └─│───────│─┘   └────            10μ₳    100μ₳   1000μ₳   0.1₳    1₳      10₳     100₳ ```
     * @summary UTxO Statistics
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUTxOsStatistics(
      walletId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ApiWalletUTxOsStatistics>
    > {
      const localVarAxiosArgs = await WalletsApiAxiosParamCreator(
        configuration
      ).getUTxOsStatistics(walletId, options)
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
     * <p align=\"right\">status: <strong>stable</strong></p>
     * @summary Get
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getWallet(
      walletId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiWallet>
    > {
      const localVarAxiosArgs = await WalletsApiAxiosParamCreator(
        configuration
      ).getWallet(walletId, options)
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
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known wallets, ordered from oldest to newest.
     * @summary List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listWallets(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<ApiWallet>>
    > {
      const localVarAxiosArgs = await WalletsApiAxiosParamCreator(
        configuration
      ).listWallets(options)
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
     * <p align=\"right\">status: <strong>stable</strong></p>  Create and restore a wallet from a mnemonic sentence or account public key.
     * @summary Create / Restore
     * @param {ApiWalletPostData} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async postWallet(
      body: ApiWalletPostData,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiWallet>
    > {
      const localVarAxiosArgs = await WalletsApiAxiosParamCreator(
        configuration
      ).postWallet(body, options)
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
     * <p align=\"right\">status: <strong>stable</strong></p>
     * @summary Update Metadata
     * @param {ApiWalletPutData} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async putWallet(
      body: ApiWalletPutData,
      walletId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiWallet>
    > {
      const localVarAxiosArgs = await WalletsApiAxiosParamCreator(
        configuration
      ).putWallet(body, walletId, options)
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
     * <p align=\"right\">status: <strong>stable</strong></p>
     * @summary Update Passphrase
     * @param {ApiWalletPutPassphraseData} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async putWalletPassphrase(
      body: ApiWalletPutPassphraseData,
      walletId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await WalletsApiAxiosParamCreator(
        configuration
      ).putWalletPassphrase(body, walletId, options)
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
 * WalletsApi - factory interface
 * @export
 */
export const WalletsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>
     * @summary Delete
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteWallet(walletId: string, options?: any): AxiosPromise<void> {
      return WalletsApiFp(configuration)
        .deleteWallet(walletId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return the UTxOs distribution across the whole wallet, in the form of a histogram.  ```      │  100 ─      │      │                                 ┌───┐   10 ─                         ┌───┐   │   │                   ┌───┐      │                 ┌───┐   │   │   │   │                   │   │      │                 │   │   │   │   │   │   ┌───┐           │   │    1 ─ ┌───┐           │   │   │   │   │   │   │   │           │   │      │ │   │           │   │   │   │   │   │   │   │           │   │      │ │   │ │       │ │   │ │ │   │ ╷ │   │ ╷ │   │ ╷       ╷ │   │      └─┘   └─│───────│─┘   └─│─┘   └─│─┘   └─│─┘   └─│───────│─┘   └────            10μ₳    100μ₳   1000μ₳   0.1₳    1₳      10₳     100₳ ```
     * @summary UTxO Statistics
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUTxOsStatistics(
      walletId: string,
      options?: any
    ): AxiosPromise<ApiWalletUTxOsStatistics> {
      return WalletsApiFp(configuration)
        .getUTxOsStatistics(walletId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>
     * @summary Get
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWallet(walletId: string, options?: any): AxiosPromise<ApiWallet> {
      return WalletsApiFp(configuration)
        .getWallet(walletId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known wallets, ordered from oldest to newest.
     * @summary List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listWallets(options?: any): AxiosPromise<Array<ApiWallet>> {
      return WalletsApiFp(configuration)
        .listWallets(options)
        .then((request) => request(axios, basePath))
    },
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Create and restore a wallet from a mnemonic sentence or account public key.
     * @summary Create / Restore
     * @param {ApiWalletPostData} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postWallet(
      body: ApiWalletPostData,
      options?: any
    ): AxiosPromise<ApiWallet> {
      return WalletsApiFp(configuration)
        .postWallet(body, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>
     * @summary Update Metadata
     * @param {ApiWalletPutData} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putWallet(
      body: ApiWalletPutData,
      walletId: string,
      options?: any
    ): AxiosPromise<ApiWallet> {
      return WalletsApiFp(configuration)
        .putWallet(body, walletId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>
     * @summary Update Passphrase
     * @param {ApiWalletPutPassphraseData} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putWalletPassphrase(
      body: ApiWalletPutPassphraseData,
      walletId: string,
      options?: any
    ): AxiosPromise<void> {
      return WalletsApiFp(configuration)
        .putWalletPassphrase(body, walletId, options)
        .then((request) => request(axios, basePath))
    }
  }
}

/**
 * WalletsApi - object-oriented interface
 * @export
 * @class WalletsApi
 * @extends {BaseAPI}
 */
export class WalletsApi extends BaseAPI {
  /**
   * <p align=\"right\">status: <strong>stable</strong></p>
   * @summary Delete
   * @param {string} walletId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WalletsApi
   */
  public deleteWallet(walletId: string, options?: any) {
    return WalletsApiFp(this.configuration)
      .deleteWallet(walletId, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   * <p align=\"right\">status: <strong>stable</strong></p>  Return the UTxOs distribution across the whole wallet, in the form of a histogram.  ```      │  100 ─      │      │                                 ┌───┐   10 ─                         ┌───┐   │   │                   ┌───┐      │                 ┌───┐   │   │   │   │                   │   │      │                 │   │   │   │   │   │   ┌───┐           │   │    1 ─ ┌───┐           │   │   │   │   │   │   │   │           │   │      │ │   │           │   │   │   │   │   │   │   │           │   │      │ │   │ │       │ │   │ │ │   │ ╷ │   │ ╷ │   │ ╷       ╷ │   │      └─┘   └─│───────│─┘   └─│─┘   └─│─┘   └─│─┘   └─│───────│─┘   └────            10μ₳    100μ₳   1000μ₳   0.1₳    1₳      10₳     100₳ ```
   * @summary UTxO Statistics
   * @param {string} walletId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WalletsApi
   */
  public getUTxOsStatistics(walletId: string, options?: any) {
    return WalletsApiFp(this.configuration)
      .getUTxOsStatistics(walletId, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   * <p align=\"right\">status: <strong>stable</strong></p>
   * @summary Get
   * @param {string} walletId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WalletsApi
   */
  public getWallet(walletId: string, options?: any) {
    return WalletsApiFp(this.configuration)
      .getWallet(walletId, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   * <p align=\"right\">status: <strong>stable</strong></p>  Return a list of known wallets, ordered from oldest to newest.
   * @summary List
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WalletsApi
   */
  public listWallets(options?: any) {
    return WalletsApiFp(this.configuration)
      .listWallets(options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   * <p align=\"right\">status: <strong>stable</strong></p>  Create and restore a wallet from a mnemonic sentence or account public key.
   * @summary Create / Restore
   * @param {ApiWalletPostData} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WalletsApi
   */
  public postWallet(body: ApiWalletPostData, options?: any) {
    return WalletsApiFp(this.configuration)
      .postWallet(body, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   * <p align=\"right\">status: <strong>stable</strong></p>
   * @summary Update Metadata
   * @param {ApiWalletPutData} body
   * @param {string} walletId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WalletsApi
   */
  public putWallet(body: ApiWalletPutData, walletId: string, options?: any) {
    return WalletsApiFp(this.configuration)
      .putWallet(body, walletId, options)
      .then((request) => request(this.axios, this.basePath))
  }
  /**
   * <p align=\"right\">status: <strong>stable</strong></p>
   * @summary Update Passphrase
   * @param {ApiWalletPutPassphraseData} body
   * @param {string} walletId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WalletsApi
   */
  public putWalletPassphrase(
    body: ApiWalletPutPassphraseData,
    walletId: string,
    options?: any
  ) {
    return WalletsApiFp(this.configuration)
      .putWalletPassphrase(body, walletId, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
