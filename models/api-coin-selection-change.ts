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

import { WalletsAssetsAvailable, WalletswalletIdpaymentfeesAmount } from '.'

/**
 *
 * @export
 * @interface ApiCoinSelectionChange
 */
export interface ApiCoinSelectionChange {
  /**
   *
   * @type {string}
   * @memberof ApiCoinSelectionChange
   */
  address: any
  /**
   *
   * @type {WalletswalletIdpaymentfeesAmount}
   * @memberof ApiCoinSelectionChange
   */
  amount: WalletswalletIdpaymentfeesAmount
  /**
   * A flat list of assets.
   * @type {Array&lt;WalletsAssetsAvailable&gt;}
   * @memberof ApiCoinSelectionChange
   */
  assets?: WalletsAssetsAvailable[]
  /**
   * A path for deriving a child key from a parent key.
   * @type {Array&lt;string&gt;}
   * @memberof ApiCoinSelectionChange
   */
  derivation_path?: string[]
}
