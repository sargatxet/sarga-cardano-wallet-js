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
 * A delegation action.  Pool id is only required for \"join\".
 * @export
 * @interface WalletswalletIdcoinselectionsrandomDelegationAction
 */
export interface WalletswalletIdcoinselectionsrandomDelegationAction {
  /**
   *
   * @type {string}
   * @memberof WalletswalletIdcoinselectionsrandomDelegationAction
   */
  action: WalletswalletIdcoinselectionsrandomDelegationActionActionEnum
  /**
   * A unique identifier for the pool.
   * @type {string}
   * @memberof WalletswalletIdcoinselectionsrandomDelegationAction
   */
  pool?: any
}

/**
 * @export
 * @enum {string}
 */
export enum WalletswalletIdcoinselectionsrandomDelegationActionActionEnum {
  Quit = 'quit',
  Join = 'join'
}
