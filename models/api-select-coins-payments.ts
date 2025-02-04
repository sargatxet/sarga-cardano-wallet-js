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
 * @interface ApiSelectCoinsPayments
 */
export interface ApiSelectCoinsPayments {
  /**
   * A list of target outputs
   * @type {Array&lt;WalletswalletIdpaymentfeesPayments&gt;}
   * @memberof ApiSelectCoinsPayments
   */
  payments: any
  /**
   * When provided, instruments the server to automatically withdraw rewards from the source wallet when they are deemed sufficient (i.e. they contribute to the balance for at least as much as they cost).  As a consequence, the resulting transaction may or may not have a withdrawal object. Summarizing:  withdrawal field | reward balance | result ---              | ---            | --- `null`           | too small      | ✓ no withdrawals generated `null`           | big enough     | ✓ no withdrawals generated `\"self\"`         | too small      | ✓ no withdrawals generated `\"self\"`         | big enough     | ✓ withdrawal generated
   * @type {string}
   * @memberof ApiSelectCoinsPayments
   */
  withdrawal?: ApiSelectCoinsPaymentsWithdrawalEnum
  /**
   * **⚠️ WARNING ⚠️**  _Please note that metadata provided in a transaction will be stored on the blockchain forever. Make sure not to include any sensitive data, in particular personally identifiable information (PII)._  Extra application data attached to the transaction.  Cardano allows users and developers to embed their own authenticated metadata when submitting transactions. Metadata can be expressed as a JSON object with some restrictions:  1. All top-level keys must be integers between `0` and `2^64 - 1`.  2. Each metadata value is tagged with its type.  3. Strings must be at most 64 bytes when UTF-8 encoded.  4. Bytestrings are hex-encoded, with a maximum length of 64 bytes.  Metadata aren't stored as JSON on the Cardano blockchain but are instead stored using a compact binary encoding (CBOR).  The binary encoding of metadata values supports three simple types:  * Integers in the range `-(2^64 - 1)` to `2^64 - 1` * Strings (UTF-8 encoded) * Bytestrings  And two compound types:  * Lists of metadata values * Mappings from metadata values to metadata values  It is possible to transform any JSON object into this schema.  However, if your application uses floating point values, they will need to be converted somehow, according to your requirements. Likewise for `null` or `bool` values. When reading metadata from chain, be aware that integers may exceed the javascript numeric range, and may need special \"bigint\" parsing.
   * @type {{ [key, string]: TransactionMetadataValue;}}
   * @memberof ApiSelectCoinsPayments
   */
  metadata?: any | null
}

/**
 * @export
 * @enum {string}
 */
export enum ApiSelectCoinsPaymentsWithdrawalEnum {
  Self = 'self'
}
