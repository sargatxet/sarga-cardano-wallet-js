import {
  WalletsApi,
  NetworkApi,
  StakePoolsApi,
  SettingsApi,
  ProxyApi
} from './api'
import { Configuration } from './configuration'
import {
  ApiMaintenanceActionPostData,
  ApiMaintenanceActionPostDataMaintenanceActionEnum,
  ApiSettingsPutData,
  ApiWalletPostData
} from './models'
import { MaintenanceActionWallet } from './wallet/maintenance-action-wallet'
import { ShelleyWallet } from './wallet/shelley-wallet'
import { StakePoolWallet } from './wallet/stakepool-wallet'
export class WalletServer {
  networkApi: NetworkApi
  walletsApi: WalletsApi
  config: Configuration
  stakePoolsApi: StakePoolsApi
  settingsApi: SettingsApi
  proxyApi: ProxyApi
  private constructor(protected url: string) {
    this.config = {
      basePath: url
    }

    this.networkApi = new NetworkApi(this.config)
    this.walletsApi = new WalletsApi(this.config)
    this.stakePoolsApi = new StakePoolsApi(this.config)
    this.settingsApi = new SettingsApi(this.config)
    this.proxyApi = new ProxyApi(this.config)
  }

  static init(url: string): WalletServer {
    return new WalletServer(url)
  }

  async getNetworkInformation() {
    const res = await this.networkApi.getNetworkInformation()
    return res.data
  }

  async getNetworkClock() {
    const res = await this.networkApi.getNetworkClock()
    return res.data
  }

  async getNetworkParameters() {
    const res = await this.networkApi.getNetworkParameters()
    return res.data
  }

  async wallets(): Promise<ShelleyWallet[]> {
    const res = await this.walletsApi.listWallets()
    return res.data.map((w) => ShelleyWallet.from(w, this.config))
  }

  async createOrRestoreShelleyWallet(
    name: string,
    mnemonic_sentence: string[],
    passphrase: string,
    mnemonic_second_factor?: string[],
    address_pool_gap?: string
  ): Promise<ShelleyWallet> {
    const payload: ApiWalletPostData = {
      name: name,
      mnemonic_sentence: mnemonic_sentence,
      passphrase: passphrase,
      mnemonic_second_factor: mnemonic_second_factor,
      address_pool_gap: address_pool_gap
    }
    const res = await this.walletsApi.postWallet(payload)
    const apiWallet = res.data
    return ShelleyWallet.from(apiWallet, this.config)
  }

  async getShelleyWallet(id: any): Promise<ShelleyWallet> {
    const res = await this.walletsApi.getWallet(id)
    return ShelleyWallet.from(res.data, this.config)
  }

  async getStakePools(stake = 0): Promise<StakePoolWallet[]> {
    const res = await this.stakePoolsApi.listStakePools(stake)
    return res.data.map((pool) => StakePoolWallet.from(pool))
  }

  async stakePoolMaintenanceActions(): Promise<MaintenanceActionWallet> {
    const res = await this.stakePoolsApi.getMaintenanceActions()
    return new MaintenanceActionWallet(res.data.gc_stake_pools)
  }

  async triggerStakePoolGarbageCollection() {
    const payload: ApiMaintenanceActionPostData = {
      maintenance_action:
        ApiMaintenanceActionPostDataMaintenanceActionEnum.Pools
    }
    await this.stakePoolsApi.postMaintenanceAction(payload)
    return
  }

  async updateMetadataSource(metadataSource: string) {
    const payload: ApiSettingsPutData = {
      settings: {
        pool_metadata_source: metadataSource
      }
    }
    await this.settingsApi.putSettings(payload)
  }

  async getMetadataSource() {
    const res = await this.settingsApi.getSettings()
    return res.data.pool_metadata_source
  }

  async submitTx(tx: string): Promise<string> {
    const buffer = Buffer.from(tx, 'hex')
    const res = await this.proxyApi.postExternalTransaction(buffer)
    return res.data.id
  }
}
