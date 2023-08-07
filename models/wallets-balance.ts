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

import {
  WalletsBalanceAvailable,
  WalletsBalanceReward,
  WalletsBalanceTotal
} from '.'

/**
 * Wallet current Ada balance(s).
 * @export
 * @interface WalletsBalance
 */
export interface WalletsBalance {
  /**
   *
   * @type {WalletsBalanceAvailable}
   * @memberof WalletsBalance
   */
  available: WalletsBalanceAvailable
  /**
   *
   * @type {WalletsBalanceReward}
   * @memberof WalletsBalance
   */
  reward: WalletsBalanceReward
  /**
   *
   * @type {WalletsBalanceTotal}
   * @memberof WalletsBalance
   */
  total: WalletsBalanceTotal
}
