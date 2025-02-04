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
 * @interface BadRequest
 */
export interface BadRequest {
  /**
   * May occur when a request is not well-formed; that is, it fails to parse successfully. This could be the case when some required parameters are missing or, when malformed values are provided.
   * @type {string}
   * @memberof BadRequest
   */
  message: any
  /**
   *
   * @type {string}
   * @memberof BadRequest
   */
  code: BadRequestCodeEnum
}

/**
 * @export
 * @enum {string}
 */
export enum BadRequestCodeEnum {
  Request = 'bad_request'
}
