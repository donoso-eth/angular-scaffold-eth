import { Component, OnInit } from '@angular/core';
import { OnChainService } from '../on-chain.service';

@Component({
  selector: 'simple-nft-contract',
  templateUrl: './simple-nft-example.component.html',
  styleUrls: ['./simple-nft-example.component.css'],
})
export class SimpleNftExampleComponent implements OnInit {
  deployer_address: string;
  myWallet: any;
  myContract: any;
  contractHeader: { name: string; address: string };
  blockchain_is_busy = false;
  constructor(private onChainService: OnChainService) {}

  async onChainStuff() {
    await this.onChainService.init();

    this.deployer_address =
      await this.onChainService.localProvider.Signer.getAddress();

    this.myWallet = await this.onChainService.myWallet.wallet;
    this.myContract = this.onChainService.simpleNfTContract.Contract;

    this.contractHeader = {
      name: this.onChainService.simpleNfTContract.metadata.name,
      address: this.onChainService.simpleNfTContract.metadata.address,
    };
    //this.myContract.
  }

  ngOnInit(): void {
    this.onChainStuff();
  }
}
