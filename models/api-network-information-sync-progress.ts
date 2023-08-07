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

import { WalletsStateProgress } from '.'

/**
 * Estimated synchronization progress of the node with the underlying network. Note that this may change quite arbitrarily as the node may switch to shorter or longer chain forks.
 * @export
 * @interface ApiNetworkInformationSyncProgress
 */
export interface ApiNetworkInformationSyncProgress {
  /**
   *
   * @type {string}
   * @memberof ApiNetworkInformationSyncProgress
   */
  status: ApiNetworkInformationSyncProgressStatusEnum
  /**
   *
   * @type {WalletsStateProgress}
   * @memberof ApiNetworkInformationSyncProgress
   */
  progress?: WalletsStateProgress
}

/**
 * @export
 * @enum {string}
 */
export enum ApiNetworkInformationSyncProgressStatusEnum {
  Ready = 'ready',
  Syncing = 'syncing',
  NotResponding = 'not_responding'
}
