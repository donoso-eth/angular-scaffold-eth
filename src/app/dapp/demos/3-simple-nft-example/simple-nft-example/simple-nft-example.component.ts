import { Component, Inject, OnInit } from '@angular/core';
import { ContractService } from 'angularonchain';
import { OnChainService } from '../on-chain.service';
import { ethers, providers } from "ethers";


// MY INFURA_ID, SWAP IN YOURS FROM https://infura.io/dashboard/ethereum
export const INFURA_ID = "460f40a260564ac4a4f4b3fffb032dad";
declare global {
  interface Window {
      Web3Modal:any;
      WalletConnectProvider:any
      Fortmatic:any;
      evmChains:any;
  }
}


const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;



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


    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          // Mikko's test key - don't copy as your mileage may vary
          infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
        }
      },
  
      fortmatic: {
        package: Fortmatic,
        options: {
          // Mikko's TESTNET api key
          key: "pk_test_391E26A3B43A3350"
        }
      }
    };
  

    const web3Modal = new Web3Modal({
      cacheProvider: false, // optional
      providerOptions, // required
      theme: {
        background: "rgb(39, 49, 56)",
        main: "rgb(199, 199, 199)",
        secondary: "rgb(136, 136, 136)",
        border: "rgba(195, 195, 195, 0.14)",
        hover: "rgb(16, 26, 32)"
      },
      disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    });
try {
  

   let  provider = await web3Modal.connect()
   console.log(provider)
   const web3Provider = new providers.Web3Provider(provider);
   const signer = await web3Provider.getSigner()
   const address = await signer.getAddress()
   console.log(address)
   provider.on("accountsChanged", (accounts: string[]) => {
    console.log(accounts);
  });
  
  // Subscribe to chainId change
  provider.on("chainChanged", (chainId: number) => {
    console.log(chainId);
  });
  
  // Subscribe to provider connection
  provider.on("connect", (info: { chainId: number }) => {
    console.log(info);
  });
  
  // Subscribe to provider disconnection
  provider.on("disconnect", (error: { code: number; message: string }) => {
    console.log(error);
  });
} catch (error) {
  console.log(error)
  
}
// //  Create WalletConnect Provider
// const provider = new WalletConnectProvider({
//   infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
// });

    // const web3Modal = new Web3Modal({
    //   network: "mainnet", // Optional. If using WalletConnect on xDai, change network to "xdai" and add RPC info below for xDai chain.
    //   cacheProvider: true, // optional
    //   theme: "light", // optional. Change to "dark" for a dark theme.
    //   providerOptions: {
    //     walletconnect: {
    //       package: WalletConnectProvider, // required
    //       options: {
    //         bridge: "https://polygon.bridge.walletconnect.org",
    //         infuraId: INFURA_ID,
    //         rpc: {
    //           1: `https://mainnet.infura.io/v3/${INFURA_ID}`, // mainnet // For more WalletConnect providers: https://docs.walletconnect.org/quick-start/dapps/web3-provider#required
    //           42: `https://kovan.infura.io/v3/${INFURA_ID}`,
    //           100: "https://dai.poa.network", // xDai
    //         },
    //       },
    
    //     },
    //     // portis: {
    //     //   display: {
    //     //     logo: "https://user-images.githubusercontent.com/9419140/128913641-d025bc0c-e059-42de-a57b-422f196867ce.png",
    //     //     name: "Portis",
    //     //     description: "Connect to Portis App",
    //     //   },
    //     //   package: Portis,
    //     //   options: {
    //     //     id: "6255fb2b-58c8-433b-a2c9-62098c05ddc9",
    //     //   },
    //     // },
    //     // fortmatic: {
    //     //   package: Fortmatic, // required
    //     //   options: {
    //     //     key: "pk_live_5A7C91B2FC585A17", // required
    //     //   },
    //     // },
    //     // torus: {
    //     //   package: Torus,
    //     //   options: {
    //     //     networkParams: {
    //     //       host: "https://localhost:8545", // optional
    //     //       chainId: 1337, // optional
    //     //       networkId: 1337 // optional
    //     //     },
    //     //     config: {
    //     //       buildEnv: "development" // optional
    //     //     },
    //     //   },
    //     // },
    //     // "custom-walletlink": {
    //     //   display: {
    //     //     logo: "https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0",
    //     //     name: "Coinbase",
    //     //     description: "Connect to Coinbase Wallet (not Coinbase App)",
    //     //   },
    //     //   package: walletLinkProvider,
    //     //   connector: async (provider, _options) => {
    //     //     await provider.enable();
    //     //     return provider;
    //     //   },
    //     // },
    //     // authereum: {
    //     //   package: Authereum, // required
    //     // },
    //   },
    // });

  
  }

  ngOnInit(): void {
    this.onChainStuff();
  }
}
