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
 * @interface CannotCoverFee
 */
export interface CannotCoverFee {
  /**
   * May occur when a transaction can't be balanced for fees.
   * @type {string}
   * @memberof CannotCoverFee
   */
  message: any
  /**
   *
   * @type {string}
   * @memberof CannotCoverFee
   */
  code: CannotCoverFeeCodeEnum
}

/**
 * @export
 * @enum {string}
 */
export enum CannotCoverFeeCodeEnum {
  Fee = 'cannot_cover_fee'
}
