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
 * @interface InlineResponse202
 */
export interface InlineResponse202 {
  /**
   *
   * @type {WalletswalletIdpaymentfeesAmount}
   * @memberof InlineResponse202
   */
  estimated_min: any
  /**
   *
   * @type {WalletswalletIdpaymentfeesAmount}
   * @memberof InlineResponse202
   */
  estimated_max: any
  /**
   * A list of minimum coin values that each output in a payment must satisfy. The values themselves depends on two things:    - (a) Some updatable protocol parameters fixed by the network.   - (b) The nature of the outputs (i.e. the kind of assets it includes).  The list is a direct 1:1 mapping of the requested outputs. Said differently, it has the **same number of items** and **items are ordered in the same way** as **requested outputs** are ordered. In the case where there's no explicitly requested outputs (e.g. when calculating fee for delegation), this list is empty.  For example, an output containing only `Ada` may require to be of at least `1 Ada`. An output containing only an hypothetical `AppleCoin` may require to also carry a minimum of `1.2 Ada`. Note that no matter what, a minimum coin value is always given in Lovelace / Ada.  > ℹ️ This mechanism is used by the protocol to protect against flooding of the network with worthless assets. By requiring a minimum coin value to every UTxO, they are given an intrinsic value indexed itself on the value of Ada.
   * @type {Array&lt;WalletswalletIdpaymentfeesAmount&gt;}
   * @memberof InlineResponse202
   */
  minimum_coins: any
  /**
   *
   * @type {WalletswalletIdpaymentfeesAmount}
   * @memberof InlineResponse202
   */
  deposit: any
}
