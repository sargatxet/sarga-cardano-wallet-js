import { Seed } from '../utils'
import {
  AddressesApi,
  KeysApi,
  TransactionsApi,
  WalletsApi,
  StakePoolsApi,
  CoinSelectionsApi
} from '../api'
import { Configuration } from '../configuration'
import {
  ApiAddressData,
  ApiAddressStateEnum,
  ApiPostTransactionData,
  ApiPostTransactionDataWithdrawalEnum,
  ApiPostTransactionFeeData,
  ApiWallet,
  ApiWalletPassphrase,
  ApiWalletPutData,
  ApiWalletPutPassphraseData,
  WalletsAssets,
  WalletsAssetsAvailable,
  WalletsBalance,
  WalletsDelegation,
  WalletsPassphrase,
  WalletsState,
  WalletsTip,
  WalletswalletIdpaymentfeesAmount,
  WalletswalletIdpaymentfeesAmountUnitEnum,
  WalletswalletIdpaymentfeesPayments,
  WalletswalletIdpaymentfeesTimeToLive,
  WalletswalletIdpaymentfeesTimeToLiveUnitEnum
} from '../models'
import { AddressWallet } from './address-wallet'
import { CoinSelectionWallet } from './coin-selection-wallet'
import { FeeWallet } from './fee-wallet'
import { KeyRoleEnum, KeyWallet } from './key-wallet'
import { TransactionWallet } from './transaction-wallet'
import { UtxoStatisticsWallet } from './utxo-statistics-wallet'
import { AssetWallet } from './asset-wallet'
export class ShelleyWallet implements ApiWallet {
  id: any
  address_pool_gap: any
  balance: WalletsBalance
  assets: WalletsAssets
  delegation: WalletsDelegation
  name: any
  passphrase: WalletsPassphrase
  state: WalletsState
  tip: WalletsTip
  addressesApi: AddressesApi
  keysApi: KeysApi
  transactionsApi: TransactionsApi
  walletsApi: WalletsApi
  config: Configuration
  stakePoolApi: StakePoolsApi
  coinSelectionsApi: CoinSelectionsApi

  constructor(
    id: any,
    address_pool_gap: any,
    balance: WalletsBalance,
    assets: WalletsAssets,
    delegation: WalletsDelegation,
    name: any,
    passphrase: WalletsPassphrase,
    state: WalletsState,
    tip: WalletsTip,
    config: Configuration
  ) {
    this.id = id
    this.address_pool_gap = address_pool_gap
    this.balance = balance
    this.assets = assets
    this.delegation = delegation
    this.name = name
    this.passphrase = passphrase
    this.state = state
    this.tip = tip
    this.config = config
    this.addressesApi = new AddressesApi(config)
    this.keysApi = new KeysApi(config)
    this.transactionsApi = new TransactionsApi(config)
    this.walletsApi = new WalletsApi(config)
    this.stakePoolApi = new StakePoolsApi(config)
    this.coinSelectionsApi = new CoinSelectionsApi(config)
  }

  static from(wallet: ApiWallet, config: Configuration): ShelleyWallet {
    return new this(
      wallet.id,
      wallet.address_pool_gap,
      wallet.balance,
      wallet.assets,
      wallet.delegation,
      wallet.name,
      wallet.passphrase,
      wallet.state,
      wallet.tip,
      config
    )
  }

  async rename(name: string) {
    const payload: ApiWalletPutData = {
      name: name
    }
    const res = await this.walletsApi.putWallet(payload, this.id)
    this.updateData(res.data)
    return this
  }

  async updatePassphrase(oldPassphrase: string, newPassphrase: string) {
    const paylaod: ApiWalletPutPassphraseData = {
      old_passphrase: oldPassphrase,
      new_passphrase: newPassphrase
    }
    await this.walletsApi.putWalletPassphrase(paylaod, this.id)
    const res = await this.walletsApi.getWallet(this.id)
    this.updateData(res.data)
    return this
  }

  async getUtxoStatistics() {
    const res = await this.walletsApi.getUTxOsStatistics(this.id)
    return UtxoStatisticsWallet.from(res.data)
  }

  getTotalBalance() {
    return this.balance.total.quantity
  }

  getAvailableBalance() {
    return this.balance.available.quantity
  }

  getRewardBalance() {
    return this.balance.reward.quantity
  }

  getDelegation() {
    return this.delegation
  }

  async refresh() {
    const res = await this.walletsApi.getWallet(this.id)
    this.updateData(res.data)
    return this
  }

  async delete() {
    return await this.walletsApi.deleteWallet(this.id)
  }

  async getAddresses(): Promise<AddressWallet[]> {
    const res = await this.addressesApi.listAddresses(this.id)
    return res.data.map((addr) => new AddressWallet(addr.id, addr.state))
  }

  async getUnusedAddresses(): Promise<AddressWallet[]> {
    const res = await this.addressesApi.listAddresses(
      this.id,
      ApiAddressStateEnum.Unused
    )
    return res.data.map((addr) => new AddressWallet(addr.id, addr.state))
  }

  async getUsedAddresses(): Promise<AddressWallet[]> {
    const res = await this.addressesApi.listAddresses(
      this.id,
      ApiAddressStateEnum.Used
    )
    return res.data.map((addr) => new AddressWallet(addr.id, addr.state))
  }

  async getAddressAt(index: number): Promise<AddressWallet> {
    const addressVk = await this.getAddressExternalVerificationKey(index)
    const stakeVk = await this.getStakeVerificationKey(0)
    const payload: ApiAddressData = {
      payment: addressVk.key,
      stake: stakeVk.key
    }
    const next = await this.addressesApi.postAnyAddress(payload)
    return new AddressWallet(next.data.address)
  }

  async getNextAddress(): Promise<AddressWallet> {
    const index = (await this.getAddresses()).length
    return this.getAddressAt(index)
  }

  async getAddressExternalVerificationKey(index: number): Promise<KeyWallet> {
    const account = await this.keysApi.getWalletKey(
      this.id,
      KeyRoleEnum.AddressExternal,
      index.toString()
    )
    return new KeyWallet(account.data, KeyRoleEnum.AddressExternal)
  }

  async getStakeVerificationKey(index: number): Promise<KeyWallet> {
    const account = await this.keysApi.getWalletKey(
      this.id,
      KeyRoleEnum.Stake,
      index.toString()
    )
    return new KeyWallet(account.data, KeyRoleEnum.Stake)
  }

  async getTransactions(
    start?: Date,
    end?: Date
  ): Promise<TransactionWallet[]> {
    const startdate = start ? start.toISOString() : undefined
    const enddate = end ? end.toISOString() : undefined
    const res = await this.transactionsApi.listTransactions(
      this.id,
      startdate,
      enddate
    )
    return res.data.map((data) => TransactionWallet.from(data))
  }

  async getTransaction(txId: string): Promise<TransactionWallet> {
    const res = await this.transactionsApi.getTransaction(this.id, txId)
    return TransactionWallet.from(res.data)
  }

  async forgetTransaction(txId: string) {
    const res = await this.transactionsApi.deleteTransaction(this.id, txId)
    return res.status == 204
  }

  async estimateFee(
    addresses: AddressWallet[],
    amounts: number[],
    data?: any,
    assets: { [key: string]: AssetWallet[] } = {}
  ): Promise<FeeWallet> {
    const metadata = data ? Seed.constructMetadata(data) : undefined
    const payload: ApiPostTransactionFeeData = {
      payments: addresses.map((addr, i) => {
        const amount: WalletswalletIdpaymentfeesAmount = {
          unit: WalletswalletIdpaymentfeesAmountUnitEnum.Lovelace,
          quantity: amounts[i]
        }
        const payment: WalletswalletIdpaymentfeesPayments = {
          address: addr.address,
          amount: amount,
          assets: assets[addr.id]?.map((a) => {
            const asset: WalletsAssetsAvailable = {
              policy_id: a.policy_id,
              asset_name: Buffer.from(a.asset_name).toString('hex'),
              quantity: a.quantity
            }
            return asset
          })
        }
        return payment
      }),
      metadata: metadata
    }
    const res = await this.transactionsApi.postTransactionFee(payload, this.id)
    return FeeWallet.from(res.data)
  }

  async sendPayment(
    passphrase: any,
    addresses: AddressWallet[],
    amounts: number[],
    data?: any,
    assets: { [key: string]: AssetWallet[] } = {},
    ttl?: number
  ): Promise<TransactionWallet> {
    const metadata = data ? Seed.constructMetadata(data) : undefined
    const time_to_leave: WalletswalletIdpaymentfeesTimeToLive = ttl
      ? {
          quantity: ttl,
          unit: WalletswalletIdpaymentfeesTimeToLiveUnitEnum.Second
        }
      : undefined
    const payload: ApiPostTransactionData = {
      passphrase: passphrase,
      payments: addresses.map((addr, i) => {
        const amount: WalletswalletIdpaymentfeesAmount = {
          unit: WalletswalletIdpaymentfeesAmountUnitEnum.Lovelace,
          quantity: amounts[i]
        }
        const payment: WalletswalletIdpaymentfeesPayments = {
          address: addr.address,
          amount: amount,
          assets: assets[addr.id]?.map((a) => {
            const asset: WalletsAssetsAvailable = {
              policy_id: a.policy_id,
              asset_name: a.asset_name,
              quantity: a.quantity
            }
            return asset
          })
        }
        return payment
      }),
      metadata: metadata,
      time_to_live: time_to_leave
    }
    const res = await this.transactionsApi.postTransaction(payload, this.id)
    return TransactionWallet.from(res.data)
  }

  async estimateDelegationFee(): Promise<FeeWallet> {
    const res = await this.stakePoolApi.getDelegationFee(this.id)
    return FeeWallet.from(res.data)
  }

  async delegate(
    poolId: string,
    passphrase: string
  ): Promise<TransactionWallet> {
    const payload: ApiWalletPassphrase = {
      passphrase: passphrase
    }
    const res = await this.stakePoolApi.joinStakePool(payload, poolId, this.id)
    return TransactionWallet.from(res.data)
  }

  async withdraw(
    passphrase: any,
    addresses: AddressWallet[],
    amounts: number[]
  ): Promise<TransactionWallet> {
    const payload: ApiPostTransactionData = {
      passphrase: passphrase,
      payments: addresses.map((addr, i) => {
        const amount: WalletswalletIdpaymentfeesAmount = {
          unit: WalletswalletIdpaymentfeesAmountUnitEnum.Lovelace,
          quantity: amounts[i]
        }
        const payment: WalletswalletIdpaymentfeesPayments = {
          address: addr.address,
          amount: amount
        }
        return payment
      }),
      withdrawal: ApiPostTransactionDataWithdrawalEnum.Self
    }
    const res = await this.transactionsApi.postTransaction(payload, this.id)
    return TransactionWallet.from(res.data)
  }

  async stopDelegation(passphrase: string): Promise<TransactionWallet> {
    const payload: ApiWalletPassphrase = {
      passphrase: passphrase
    }
    const res = await this.stakePoolApi.quitStakePool(payload, this.id)
    return TransactionWallet.from(res.data)
  }

  async getCoinSelection(
    addresses: AddressWallet[],
    amounts: number[],
    data?: any,
    assets: { [key: string]: AssetWallet[] } = {}
  ): Promise<CoinSelectionWallet> {
    try {
      const metadata = data ? Seed.constructMetadata(data) : undefined
      const payload: ApiPostTransactionFeeData = {
        payments: addresses.map((addr, i) => {
          const amount: WalletswalletIdpaymentfeesAmount = amounts[i]
            ? {
                unit: WalletswalletIdpaymentfeesAmountUnitEnum.Lovelace,
                quantity: amounts[i]
              }
            : undefined
          const payment: WalletswalletIdpaymentfeesPayments = {
            address: addr.address,
            amount: amount,
            assets: assets[addr.id]?.map((a) => {
              const asset: WalletsAssetsAvailable = {
                policy_id: a.policy_id,
                //  asset_name: Buffer.from(a.asset_name).toString('hex'),
                asset_name: a.asset_name,
                quantity: a.quantity
              }
              return asset
            })
          }
          return payment
        }),
        metadata: metadata
      }
      const res = await this.coinSelectionsApi.selectCoins(payload, this.id)
      return CoinSelectionWallet.from(res.data)
    } catch (err) {
      const error = err
      return null
    }
  }

  private updateData(data: ApiWallet) {
    this.address_pool_gap = data.address_pool_gap
    this.balance = data.balance
    this.assets = data.assets
    this.delegation = data.delegation
    this.name = data.name
    this.passphrase = data.passphrase
    this.state = data.state
    this.tip = data.tip
  }
}
