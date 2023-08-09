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
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * A unique identifier for the wallet
     * @type {string}
     * @memberof InlineResponse200
     */
    id: any;
    /**
     * Number of consecutive unused addresses allowed.  **IMPORTANT DISCLAIMER:** Using values other than `20` automatically makes your wallet invalid with regards to BIP-44 address discovery. It means that you **will not** be able to fully restore your wallet in a different software which is strictly following BIP-44.  Beside, using large gaps is **not recommended** as it may induce important performance degradations. Use at your own risks.
     * @type {number}
     * @memberof InlineResponse200
     */
    address_pool_gap: any;
    /**
     *
     * @type {WalletsBalance}
     * @memberof InlineResponse200
     */
    balance: any;
    /**
     *
     * @type {WalletsAssets}
     * @memberof InlineResponse200
     */
    assets: any;
    /**
     *
     * @type {WalletsDelegation}
     * @memberof InlineResponse200
     */
    delegation: any;
    /**
     *
     * @type {string}
     * @memberof InlineResponse200
     */
    name: any;
    /**
     *
     * @type {WalletsPassphrase}
     * @memberof InlineResponse200
     */
    passphrase?: any;
    /**
     *
     * @type {WalletsState}
     * @memberof InlineResponse200
     */
    state: any;
    /**
     *
     * @type {WalletsTip}
     * @memberof InlineResponse200
     */
    tip: any;
}
