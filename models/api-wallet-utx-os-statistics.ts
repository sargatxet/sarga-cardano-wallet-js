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

import { WalletswalletIdpaymentfeesAmount } from './walletswallet-idpaymentfees-amount'

/**
 *
 * @export
 * @interface ApiWalletUTxOsStatistics
 */
export interface ApiWalletUTxOsStatistics {
  /**
   *
   * @type {WalletswalletIdpaymentfeesAmount}
   * @memberof ApiWalletUTxOsStatistics
   */
  total: WalletswalletIdpaymentfeesAmount
  /**
   *
   * @type {string}
   * @memberof ApiWalletUTxOsStatistics
   */
  scale: ApiWalletUTxOsStatisticsScaleEnum
  /**
   *
   * @type {{ [key, string]: number;}}
   * @memberof ApiWalletUTxOsStatistics
   */
  distribution: any
}

/**
 * @export
 * @enum {string}
 */
export enum ApiWalletUTxOsStatisticsScaleEnum {
  Log10 = 'log10'
}
