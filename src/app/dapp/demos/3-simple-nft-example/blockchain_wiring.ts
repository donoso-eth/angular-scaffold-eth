
import { InjectionToken } from '@angular/core';

import { NetworkProviderService, ContractService, WalletService } from 'angularonchain';
import simpleNftContractMetadata from '../../../../assets/contracts/simple_nft_contract_metadata.json';
import { ContractService as debugService } from '../../dapp-injector/services';

////// Common Providers
export const localNodeProvider = new InjectionToken<NetworkProviderService>('localNodeProvider');
export const simpleNfTContract = new InjectionToken<ContractService>('simpleNfTContract')



export const blockchain_providers = [ {provide: 'localNodeProvider', useValue: new NetworkProviderService([])},
{provide: 'simpleNfTContract', useValue: new ContractService(simpleNftContractMetadata)},

 WalletService]

////// Common Components Wirings
import { HomeModule, ContractShowModule, AddressShowModule, BlockchainModule, DialogModule, NotifierModule } from 'angularonchain';
export const blockchain_imports = [HomeModule, ContractShowModule,AddressShowModule,BlockchainModule,DialogModule,NotifierModule]
