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
 * @interface InlineResponse2003
 */
export interface InlineResponse2003 {
  /**
   *
   * @type {WalletswalletIdpaymentfeesAmount}
   * @memberof InlineResponse2003
   */
  total: any
  /**
   *
   * @type {string}
   * @memberof InlineResponse2003
   */
  scale: InlineResponse2003ScaleEnum
  /**
   *
   * @type {{ [key, string]: number;}}
   * @memberof InlineResponse2003
   */
  distribution: any
}

/**
 * @export
 * @enum {string}
 */
export enum InlineResponse2003ScaleEnum {
  Log10 = 'log10'
}
