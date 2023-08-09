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
 * @interface ApiPostRedemptionData
 */
export interface ApiPostRedemptionData {
    /**
     * The wallet's master passphrase.
     * @type {string}
     * @memberof ApiPostRedemptionData
     */
    passphrase: any;
    /**
     * A list of target outputs
     * @type {Array&lt;WalletswalletIdpaymentfeesPayments&gt;}
     * @memberof ApiPostRedemptionData
     */
    payments: any;
    /**
     * When provided, attempts to withdraw rewards from the default stake address corresponding to the given mnemonic.  Should the rewards be null or too small to be worth withdrawing (i.e. the cost of adding them into the transaction is more than their own intrinsic value), the server will reject the request with a `withdrawal_not_worth` error.  withdrawal field    | reward balance | result ---                 | ---            | --- any recovery phrase | too small      | x Error 403 `withdrawal_not_worth` any recovery phrase | big enough     | ✓ withdrawal generated
     * @type {Array&lt;string&gt;}
     * @memberof ApiPostRedemptionData
     */
    withdrawal: any;
}
