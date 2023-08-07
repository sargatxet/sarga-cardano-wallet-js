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
 *
 * @export
 * @interface NoSuchWallet
 */
export interface NoSuchWallet {
  /**
   * May occur when a given walletId does not match with any known wallets (because it has been deleted, or has never existed).
   * @type {string}
   * @memberof NoSuchWallet
   */
  message: any
  /**
   *
   * @type {string}
   * @memberof NoSuchWallet
   */
  code: NoSuchWalletCodeEnum
}

/**
 * @export
 * @enum {string}
 */
export enum NoSuchWalletCodeEnum {
  Wallet = 'no_such_wallet'
}
