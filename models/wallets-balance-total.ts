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
/**
 * Total Ada balance (available balance plus pending change and reward balance).
 * @export
 * @interface WalletsBalanceTotal
 */
export interface WalletsBalanceTotal {
  /**
   *
   * @type {number}
   * @memberof WalletsBalanceTotal
   */
  quantity: number
  /**
   *
   * @type {string}
   * @memberof WalletsBalanceTotal
   */
  unit: WalletsBalanceTotalUnitEnum
}

/**
 * @export
 * @enum {string}
 */
export enum WalletsBalanceTotalUnitEnum {
  Lovelace = 'lovelace'
}
