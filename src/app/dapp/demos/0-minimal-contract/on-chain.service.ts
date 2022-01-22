import { Inject, Injectable } from '@angular/core';
import { ContractService, NetworkProviderService,WalletService } from 'angularonchain';
import { Contract} from 'ethers'



@Injectable({
  providedIn: 'root'
})
export class OnChainService {


  constructor(@Inject('localNodeProvider') public localProvider: NetworkProviderService,
  @Inject('simpleNfTContract') public simpleNfTContract:ContractService, public myWallet: WalletService
  ) { }



  async init(){
    const myProvider = await this.localProvider.init()
    await this.localProvider.initBlockSubscription()
    const mywallet =  await this.myWallet.init(myProvider)
    await this.simpleNfTContract.init(myProvider,mywallet)

  }
}
