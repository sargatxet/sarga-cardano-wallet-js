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

import { ApiNetworkClockOffset } from '.'

/**
 * [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) information of the server.  **Important:** This piece of information only makes sense when the server runs on the same host machine as the node.
 * @export
 * @interface ApiNetworkClock
 */
export interface ApiNetworkClock {
  /**
   *
   * @type {string}
   * @memberof ApiNetworkClock
   */
  status: ApiNetworkClockStatusEnum
  /**
   *
   * @type {ApiNetworkClockOffset}
   * @memberof ApiNetworkClock
   */
  offset?: ApiNetworkClockOffset
}

/**
 * @export
 * @enum {string}
 */
export enum ApiNetworkClockStatusEnum {
  Available = 'available',
  Unavailable = 'unavailable',
  Pending = 'pending'
}
