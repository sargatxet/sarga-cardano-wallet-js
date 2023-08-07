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
 * Minimal stake amount that a stake pool is willing to honor.  May be omitted if the wallet hasn't found the pool's registration cerificate yet.
 * @export
 * @interface StakepoolsPledge
 */
export interface StakepoolsPledge {
  /**
   *
   * @type {number}
   * @memberof StakepoolsPledge
   */
  quantity: any
  /**
   *
   * @type {string}
   * @memberof StakepoolsPledge
   */
  unit: StakepoolsPledgeUnitEnum
}

/**
 * @export
 * @enum {string}
 */
export enum StakepoolsPledgeUnitEnum {
  Lovelace = 'lovelace'
}
