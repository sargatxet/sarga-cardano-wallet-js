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
 * @interface Body6
 */
export interface Body6 {
  /**
   * A master passphrase to lock and protect the wallet for sensitive operation (e.g. sending funds)
   * @type {string}
   * @memberof Body6
   */
  passphrase: any
  /**
   * Determines whether extended (with chain code) or normal (without chain code) key is requested
   * @type {boolean}
   * @memberof Body6
   */
  extended: any
}
