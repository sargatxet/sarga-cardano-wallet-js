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
 * @interface InlineResponse2008
 */
export interface InlineResponse2008 {
  /**
   * A list of transaction inputs
   * @type {Array&lt;ApiCoinSelectionInputs&gt;}
   * @memberof InlineResponse2008
   */
  inputs: any
  /**
   * A list of target outputs
   * @type {Array&lt;WalletswalletIdpaymentfeesPayments&gt;}
   * @memberof InlineResponse2008
   */
  outputs: any
  /**
   * A list of transaction change outputs.
   * @type {Array&lt;ApiCoinSelectionChange&gt;}
   * @memberof InlineResponse2008
   */
  change: any
  /**
   * A list of withdrawals from stake addresses.
   * @type {Array&lt;ApiCoinSelectionWithdrawals&gt;}
   * @memberof InlineResponse2008
   */
  withdrawals?: any
  /**
   *
   * @type {Array&lt;ApiCoinSelectionCertificates&gt;}
   * @memberof InlineResponse2008
   */
  certificates?: any
  /**
   * A list of deposits associated with a transaction.
   * @type {Array&lt;WalletswalletIdpaymentfeesAmount&gt;}
   * @memberof InlineResponse2008
   */
  deposits?: any
  /**
   * Transaction metadata, serialized according to the expected on-chain binary format, base64-encoded.
   * @type {string}
   * @memberof InlineResponse2008
   */
  metadata?: any
}
