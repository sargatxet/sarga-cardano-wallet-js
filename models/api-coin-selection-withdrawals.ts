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

import { WalletswalletIdpaymentfeesAmount } from '.'

/**
 *
 * @export
 * @interface ApiCoinSelectionWithdrawals
 */
export interface ApiCoinSelectionWithdrawals {
  /**
   *
   * @type {string}
   * @memberof ApiCoinSelectionWithdrawals
   */
  stake_address: any
  /**
   * A path for deriving a child key from a parent key.
   * @type {Array&lt;string&gt;}
   * @memberof ApiCoinSelectionWithdrawals
   */
  derivation_path: string[]
  /**
   *
   * @type {WalletswalletIdpaymentfeesAmount}
   * @memberof ApiCoinSelectionWithdrawals
   */
  amount: WalletswalletIdpaymentfeesAmount
}
