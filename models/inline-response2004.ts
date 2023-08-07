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
 * @interface InlineResponse2004
 */
export interface InlineResponse2004 {
  /**
   * A unique identifier for this transaction
   * @type {string}
   * @memberof InlineResponse2004
   */
  id: any
  /**
   *
   * @type {WalletswalletIdtransactionsAmount}
   * @memberof InlineResponse2004
   */
  amount: any
  /**
   *
   * @type {WalletswalletIdpaymentfeesAmount}
   * @memberof InlineResponse2004
   */
  fee: any
  /**
   *
   * @type {WalletswalletIdpaymentfeesAmount}
   * @memberof InlineResponse2004
   */
  deposit: any
  /**
   *
   * @type {WalletswalletIdtransactionsInsertedAt}
   * @memberof InlineResponse2004
   */
  inserted_at?: any
  /**
   *
   * @type {WalletswalletIdtransactionsExpiresAt}
   * @memberof InlineResponse2004
   */
  expires_at?: any
  /**
   *
   * @type {WalletswalletIdtransactionsPendingSince}
   * @memberof InlineResponse2004
   */
  pending_since?: any
  /**
   *
   * @type {WalletswalletIdtransactionsDepth}
   * @memberof InlineResponse2004
   */
  depth?: any
  /**
   *
   * @type {string}
   * @memberof InlineResponse2004
   */
  direction: InlineResponse2004DirectionEnum
  /**
   * A list of transaction inputs.  `assets` and `address` are always present for `outgoing` transactions but generally absent for `incoming` transactions. This information is present on the Cardano explorer, but is not tracked by the wallet.
   * @type {Array&lt;WalletswalletIdtransactionsInputs&gt;}
   * @memberof InlineResponse2004
   */
  inputs: any
  /**
   * A list of target outputs
   * @type {Array&lt;WalletswalletIdpaymentfeesPayments&gt;}
   * @memberof InlineResponse2004
   */
  outputs: any
  /**
   * A list of withdrawals from stake addresses.
   * @type {Array&lt;WalletswalletIdtransactionsWithdrawals&gt;}
   * @memberof InlineResponse2004
   */
  withdrawals: any
  /**
   * <p>status: <strong>⚠ under development</strong></p>  _This field is not implemented yet, and will always be empty._  Assets minted (created) or unminted (destroyed)  This amount contributes to the total transaction value.  Positive values denote creation of assets and negative values denote the reverse.
   * @type {Array&lt;WalletswalletIdtransactionsMint&gt;}
   * @memberof InlineResponse2004
   */
  mint: any
  /**
   * Current transaction status.    ```          *---------*          *-----------*          |         |---------->  EXPIRED  |          |         |  (ttl)   *-----------*   -------> PENDING |          |         <----------------*          |         |                |          *---------*            (rollback)               |                     |          (in ledger)          *-----------*               |               |           |               *---------------> IN_LEDGER |                               |           |                               *-----------*   ```
   * @type {string}
   * @memberof InlineResponse2004
   */
  status: InlineResponse2004StatusEnum
  /**
   * **⚠️ WARNING ⚠️**  _Please note that metadata provided in a transaction will be stored on the blockchain forever. Make sure not to include any sensitive data, in particular personally identifiable information (PII)._  Extra application data attached to the transaction.  Cardano allows users and developers to embed their own authenticated metadata when submitting transactions. Metadata can be expressed as a JSON object with some restrictions:  1. All top-level keys must be integers between `0` and `2^64 - 1`.  2. Each metadata value is tagged with its type.  3. Strings must be at most 64 bytes when UTF-8 encoded.  4. Bytestrings are hex-encoded, with a maximum length of 64 bytes.  Metadata aren't stored as JSON on the Cardano blockchain but are instead stored using a compact binary encoding (CBOR).  The binary encoding of metadata values supports three simple types:  * Integers in the range `-(2^64 - 1)` to `2^64 - 1` * Strings (UTF-8 encoded) * Bytestrings  And two compound types:  * Lists of metadata values * Mappings from metadata values to metadata values  It is possible to transform any JSON object into this schema.  However, if your application uses floating point values, they will need to be converted somehow, according to your requirements. Likewise for `null` or `bool` values. When reading metadata from chain, be aware that integers may exceed the javascript numeric range, and may need special \"bigint\" parsing.
   * @type {{ [key, string]: TransactionMetadataValue;}}
   * @memberof InlineResponse2004
   */
  metadata?: any | null
}

/**
 * @export
 * @enum {string}
 */
export enum InlineResponse2004DirectionEnum {
  Outgoing = 'outgoing',
  Incoming = 'incoming'
}
/**
 * @export
 * @enum {string}
 */
export enum InlineResponse2004StatusEnum {
  Pending = 'pending',
  InLedger = 'in_ledger',
  Expired = 'expired'
}
