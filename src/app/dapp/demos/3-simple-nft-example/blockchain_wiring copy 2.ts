
import { InjectionToken } from '@angular/core';
import simpleNftContractMetadata from '../../../../assets/contracts/minimal_contract_metadata.json';
import { NetworkProviderService, ContractService, WalletService } from 'angularonchain';

export const localNodeProvider = new InjectionToken<NetworkProviderService>('localNodeProvider');
export const simpleNfTContract = new InjectionToken<ContractService>('simpleNfTContract')


export const blockchain_providers = [ {provide: 'localNodeProvider', useValue: new NetworkProviderService([])},
{provide: 'simpleNfTContract', useValue: new ContractService(simpleNftContractMetadata)}, WalletService]