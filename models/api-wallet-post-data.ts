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
 * Restore from root private key
 * @export
 * @interface ApiWalletPostData
 */
export interface ApiWalletPostData {
  /**
   *
   * @type {string}
   * @memberof ApiWalletPostData
   */
  name: any
  /**
   * A list of mnemonic words
   * @type {Array&lt;string&gt;}
   * @memberof ApiWalletPostData
   */
  mnemonic_sentence: Array<string>
  /**
   * An optional passphrase used to encrypt the mnemonic sentence.
   * @type {Array&lt;string&gt;}
   * @memberof ApiWalletPostData
   */
  mnemonic_second_factor?: Array<string>
  /**
   * A master passphrase to lock and protect the wallet for sensitive operation (e.g. sending funds)
   * @type {string}
   * @memberof ApiWalletPostData
   */
  passphrase: any
  /**
   * Number of consecutive unused addresses allowed.  **IMPORTANT DISCLAIMER:** Using values other than `20` automatically makes your wallet invalid with regards to BIP-44 address discovery. It means that you **will not** be able to fully restore your wallet in a different software which is strictly following BIP-44.  Beside, using large gaps is **not recommended** as it may induce important performance degradations. Use at your own risks.
   * @type {number}
   * @memberof ApiWalletPostData
   */
  address_pool_gap?: any
}
