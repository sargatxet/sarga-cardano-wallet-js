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
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 {
  /**
   * A unique identifier of the asset's monetary policy. The policy controls how assets of this kind are created and destroyed.  The contents are the blake2b-224 hash of the monetary policy script, encoded in hexadecimal.
   * @type {string}
   * @memberof InlineResponse2002
   */
  policy_id: any
  /**
   * The asset on-chain type which acts as a sub-identifier within a policy. Although we call it \"asset name\", the value needn't be text, and it could even be empty.  For policies with a single fungible asset item, asset name is typically an empty string.  This value can be up to 32 bytes of arbitrary data (which is 64 hexadecimal digits).
   * @type {string}
   * @memberof InlineResponse2002
   */
  asset_name: any
  /**
   * A user-facing short fingerprint which combines the `policy_id` and `asset_name` to allow for an easier human comparison of assets. Note that it is generally **not okay** to use this fingerprint as a unique identifier for it is not collision resistant. Yet within the context of a single wallet, it makes for a (rather) short user-facing comparison mean.
   * @type {string}
   * @memberof InlineResponse2002
   */
  fingerprint: any
  /**
   *
   * @type {NativeAssetsMetadata}
   * @memberof InlineResponse2002
   */
  metadata?: any
}
