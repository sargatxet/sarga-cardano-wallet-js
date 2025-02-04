import { NativeScript } from '@emurgo/cardano-serialization-lib-nodejs'
import { Bip32KeyPair } from '../utils'
import { AssetWallet } from './asset-wallet'

export class TokenWallet {
  asset: AssetWallet
  script?: NativeScript
  scriptKeyPairs?: Bip32KeyPair[]

  constructor(
    asset: AssetWallet,
    script?: NativeScript,
    scriptKeyPairs?: Bip32KeyPair[]
  ) {
    this.asset = asset
    this.script = script
    this.scriptKeyPairs = scriptKeyPairs
  }
}
