import { Component, OnInit } from '@angular/core';
import { OnChainService } from '../on-chain.service';

@Component({
  selector: 'simple-nft-example',
  templateUrl: './simple-nft-example.component.html',
  styleUrls: ['./simple-nft-example.component.css']
})
export class SimpleNftExampleComponent implements OnInit {
  deployer_address: string;
  myWallet: any;
  myContract: any;
  contractHeader: { name: string; address: string; };

  constructor(private onChainService:OnChainService) { }

  async onChainStuff(){
    await   this.onChainService.init()

    this.deployer_address =
      await this.onChainService.localProvider.Signer.getAddress();

      this.myWallet = await this.onChainService.myWallet.wallet;
      this.myContract = this.onChainService.minimalContract.Contract;

      this.contractHeader = {
        name: this.onChainService.minimalContract.metadata.name,
        address: this.onChainService.minimalContract.metadata.address,
      };
      this.myContract.

  }

  ngOnInit(): void {
    this.onChainStuff()
  }

}
