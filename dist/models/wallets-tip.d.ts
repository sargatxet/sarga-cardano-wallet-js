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
import { WalletsTipHeight } from '.';
/**
 * A reference to a particular time slot, and the block height at that point.
 * @export
 * @interface WalletsTip
 */
export interface WalletsTip {
    /**
     * The 0-based slot index starting from genesis of the blockchain.
     * @type {number}
     * @memberof WalletsTip
     */
    absolute_slot_number: any;
    /**
     * The zero-based slot index within an epoch.
     * @type {number}
     * @memberof WalletsTip
     */
    slot_number: any;
    /**
     * An epoch is a time period which is divided into slots.
     * @type {number}
     * @memberof WalletsTip
     */
    epoch_number: any;
    /**
     *
     * @type {string}
     * @memberof WalletsTip
     */
    time: any;
    /**
     *
     * @type {WalletsTipHeight}
     * @memberof WalletsTip
     */
    height: WalletsTipHeight;
}
