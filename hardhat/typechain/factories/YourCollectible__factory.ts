/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  YourCollectible,
  YourCollectibleInterface,
} from "../YourCollectible";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "mintItem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600f81526020017f596f7572436f6c6c65637469626c6500000000000000000000000000000000008152506040518060400160405280600381526020017f59434200000000000000000000000000000000000000000000000000000000008152506200009e62000092620000d860201b60201c565b620000e060201b60201c565b8160019080519060200190620000b6929190620001a4565b508060029080519060200190620000cf929190620001a4565b505050620002b9565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001b29062000254565b90600052602060002090601f016020900481019282620001d6576000855562000222565b82601f10620001f157805160ff191683800117855562000222565b8280016001018555821562000222579182015b828111156200022157825182559160200191906001019062000204565b5b50905062000231919062000235565b5090565b5b808211156200025057600081600090555060010162000236565b5090565b600060028204905060018216806200026d57607f821691505b602082108114156200028457620002836200028a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b612fba80620002c96000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a2578063a22cb46511610071578063a22cb465146102b8578063b88d4fde146102d4578063c87b56dd146102f0578063e985e9c514610320578063f2fde38b146103505761010b565b806370a0823114610242578063715018a6146102725780638da5cb5b1461027c57806395d89b411461029a5761010b565b8063110bcd45116100de578063110bcd45146101aa57806323b872dd146101da57806342842e0e146101f65780636352211e146102125761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a60048036038101906101259190611f69565b61036c565b60405161013791906123b5565b60405180910390f35b61014861044e565b60405161015591906123d0565b60405180910390f35b61017860048036038101906101739190611fbb565b6104e0565b604051610185919061234e565b60405180910390f35b6101a860048036038101906101a39190611f2d565b610565565b005b6101c460048036038101906101bf9190611ed9565b61067d565b6040516101d19190612632565b60405180910390f35b6101f460048036038101906101ef9190611dd3565b610731565b005b610210600480360381019061020b9190611dd3565b610791565b005b61022c60048036038101906102279190611fbb565b6107b1565b604051610239919061234e565b60405180910390f35b61025c60048036038101906102579190611d6e565b610863565b6040516102699190612632565b60405180910390f35b61027a61091b565b005b6102846109a3565b604051610291919061234e565b60405180910390f35b6102a26109cc565b6040516102af91906123d0565b60405180910390f35b6102d260048036038101906102cd9190611e9d565b610a5e565b005b6102ee60048036038101906102e99190611e22565b610a74565b005b61030a60048036038101906103059190611fbb565b610ad6565b60405161031791906123d0565b60405180910390f35b61033a60048036038101906103359190611d97565b610c28565b60405161034791906123b5565b60405180910390f35b61036a60048036038101906103659190611d6e565b610cbc565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061043757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610447575061044682610db4565b5b9050919050565b60606001805461045d90612888565b80601f016020809104026020016040519081016040528092919081815260200182805461048990612888565b80156104d65780601f106104ab576101008083540402835291602001916104d6565b820191906000526020600020905b8154815290600101906020018083116104b957829003601f168201915b5050505050905090565b60006104eb82610e1e565b61052a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052190612572565b60405180910390fd5b6005600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610570826107b1565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d8906125f2565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610600610e8a565b73ffffffffffffffffffffffffffffffffffffffff16148061062f575061062e81610629610e8a565b610c28565b5b61066e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610665906124b2565b60405180910390fd5b6106788383610e92565b505050565b6000610687610e8a565b73ffffffffffffffffffffffffffffffffffffffff166106a56109a3565b73ffffffffffffffffffffffffffffffffffffffff16146106fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f290612592565b60405180910390fd5b6107056008610f4b565b60006107116008610f61565b905061071d8482610f6f565b610727818461113d565b8091505092915050565b61074261073c610e8a565b826111b1565b610781576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077890612612565b60405180910390fd5b61078c83838361128f565b505050565b6107ac83838360405180602001604052806000815250610a74565b505050565b6000806003600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561085a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610851906124f2565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108cb906124d2565b60405180910390fd5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610923610e8a565b73ffffffffffffffffffffffffffffffffffffffff166109416109a3565b73ffffffffffffffffffffffffffffffffffffffff1614610997576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098e90612592565b60405180910390fd5b6109a160006114eb565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600280546109db90612888565b80601f0160208091040260200160405190810160405280929190818152602001828054610a0790612888565b8015610a545780601f10610a2957610100808354040283529160200191610a54565b820191906000526020600020905b815481529060010190602001808311610a3757829003601f168201915b5050505050905090565b610a70610a69610e8a565b83836115af565b5050565b610a85610a7f610e8a565b836111b1565b610ac4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610abb90612612565b60405180910390fd5b610ad08484848461171c565b50505050565b6060610ae182610e1e565b610b20576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1790612552565b60405180910390fd5b6000600760008481526020019081526020016000208054610b4090612888565b80601f0160208091040260200160405190810160405280929190818152602001828054610b6c90612888565b8015610bb95780601f10610b8e57610100808354040283529160200191610bb9565b820191906000526020600020905b815481529060010190602001808311610b9c57829003601f168201915b505050505090506000610bca611778565b9050600081511415610be0578192505050610c23565b600082511115610c15578082604051602001610bfd92919061232a565b60405160208183030381529060405292505050610c23565b610c1e8461178f565b925050505b919050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610cc4610e8a565b73ffffffffffffffffffffffffffffffffffffffff16610ce26109a3565b73ffffffffffffffffffffffffffffffffffffffff1614610d38576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2f90612592565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610da8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9f90612412565b60405180910390fd5b610db1816114eb565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166003600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610f05836107b1565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fdf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd690612532565b60405180910390fd5b610fe881610e1e565b15611028576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161101f90612432565b60405180910390fd5b61103460008383611836565b6001600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110849190612717565b92505081905550816003600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b61114682610e1e565b611185576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117c90612512565b60405180910390fd5b806007600084815260200190815260200160002090805190602001906111ac929190611b92565b505050565b60006111bc82610e1e565b6111fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f290612492565b60405180910390fd5b6000611206836107b1565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061127557508373ffffffffffffffffffffffffffffffffffffffff1661125d846104e0565b73ffffffffffffffffffffffffffffffffffffffff16145b8061128657506112858185610c28565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166112af826107b1565b73ffffffffffffffffffffffffffffffffffffffff1614611305576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112fc906125b2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611375576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161136c90612452565b60405180910390fd5b611380838383611836565b61138b600082610e92565b6001600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113db919061279e565b925050819055506001600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114329190612717565b92505081905550816003600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561161e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161161590612472565b60405180910390fd5b80600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161170f91906123b5565b60405180910390a3505050565b61172784848461128f565b6117338484848461183b565b611772576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611769906123f2565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061179a82610e1e565b6117d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117d0906125d2565b60405180910390fd5b60006117e3611778565b90506000815111611803576040518060200160405280600081525061182e565b8061180d846119d2565b60405160200161181e92919061232a565b6040516020818303038152906040525b915050919050565b505050565b600061185c8473ffffffffffffffffffffffffffffffffffffffff16611b7f565b156119c5578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611885610e8a565b8786866040518563ffffffff1660e01b81526004016118a79493929190612369565b602060405180830381600087803b1580156118c157600080fd5b505af19250505080156118f257506040513d601f19601f820116820180604052508101906118ef9190611f92565b60015b611975573d8060008114611922576040519150601f19603f3d011682016040523d82523d6000602084013e611927565b606091505b5060008151141561196d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611964906123f2565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506119ca565b600190505b949350505050565b60606000821415611a1a576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611b7a565b600082905060005b60008214611a4c578080611a35906128eb565b915050600a82611a45919061276d565b9150611a22565b60008167ffffffffffffffff811115611a8e577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611ac05781602001600182028036833780820191505090505b5090505b60008514611b7357600182611ad9919061279e565b9150600a85611ae89190612934565b6030611af49190612717565b60f81b818381518110611b30577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611b6c919061276d565b9450611ac4565b8093505050505b919050565b600080823b905060008111915050919050565b828054611b9e90612888565b90600052602060002090601f016020900481019282611bc05760008555611c07565b82601f10611bd957805160ff1916838001178555611c07565b82800160010185558215611c07579182015b82811115611c06578251825591602001919060010190611beb565b5b509050611c149190611c18565b5090565b5b80821115611c31576000816000905550600101611c19565b5090565b6000611c48611c4384612672565b61264d565b905082815260208101848484011115611c6057600080fd5b611c6b848285612846565b509392505050565b6000611c86611c81846126a3565b61264d565b905082815260208101848484011115611c9e57600080fd5b611ca9848285612846565b509392505050565b600081359050611cc081612f28565b92915050565b600081359050611cd581612f3f565b92915050565b600081359050611cea81612f56565b92915050565b600081519050611cff81612f56565b92915050565b600082601f830112611d1657600080fd5b8135611d26848260208601611c35565b91505092915050565b600082601f830112611d4057600080fd5b8135611d50848260208601611c73565b91505092915050565b600081359050611d6881612f6d565b92915050565b600060208284031215611d8057600080fd5b6000611d8e84828501611cb1565b91505092915050565b60008060408385031215611daa57600080fd5b6000611db885828601611cb1565b9250506020611dc985828601611cb1565b9150509250929050565b600080600060608486031215611de857600080fd5b6000611df686828701611cb1565b9350506020611e0786828701611cb1565b9250506040611e1886828701611d59565b9150509250925092565b60008060008060808587031215611e3857600080fd5b6000611e4687828801611cb1565b9450506020611e5787828801611cb1565b9350506040611e6887828801611d59565b925050606085013567ffffffffffffffff811115611e8557600080fd5b611e9187828801611d05565b91505092959194509250565b60008060408385031215611eb057600080fd5b6000611ebe85828601611cb1565b9250506020611ecf85828601611cc6565b9150509250929050565b60008060408385031215611eec57600080fd5b6000611efa85828601611cb1565b925050602083013567ffffffffffffffff811115611f1757600080fd5b611f2385828601611d2f565b9150509250929050565b60008060408385031215611f4057600080fd5b6000611f4e85828601611cb1565b9250506020611f5f85828601611d59565b9150509250929050565b600060208284031215611f7b57600080fd5b6000611f8984828501611cdb565b91505092915050565b600060208284031215611fa457600080fd5b6000611fb284828501611cf0565b91505092915050565b600060208284031215611fcd57600080fd5b6000611fdb84828501611d59565b91505092915050565b611fed816127d2565b82525050565b611ffc816127e4565b82525050565b600061200d826126d4565b61201781856126ea565b9350612027818560208601612855565b61203081612a21565b840191505092915050565b6000612046826126df565b61205081856126fb565b9350612060818560208601612855565b61206981612a21565b840191505092915050565b600061207f826126df565b612089818561270c565b9350612099818560208601612855565b80840191505092915050565b60006120b26032836126fb565b91506120bd82612a32565b604082019050919050565b60006120d56026836126fb565b91506120e082612a81565b604082019050919050565b60006120f8601c836126fb565b915061210382612ad0565b602082019050919050565b600061211b6024836126fb565b915061212682612af9565b604082019050919050565b600061213e6019836126fb565b915061214982612b48565b602082019050919050565b6000612161602c836126fb565b915061216c82612b71565b604082019050919050565b60006121846038836126fb565b915061218f82612bc0565b604082019050919050565b60006121a7602a836126fb565b91506121b282612c0f565b604082019050919050565b60006121ca6029836126fb565b91506121d582612c5e565b604082019050919050565b60006121ed602e836126fb565b91506121f882612cad565b604082019050919050565b60006122106020836126fb565b915061221b82612cfc565b602082019050919050565b60006122336031836126fb565b915061223e82612d25565b604082019050919050565b6000612256602c836126fb565b915061226182612d74565b604082019050919050565b60006122796020836126fb565b915061228482612dc3565b602082019050919050565b600061229c6029836126fb565b91506122a782612dec565b604082019050919050565b60006122bf602f836126fb565b91506122ca82612e3b565b604082019050919050565b60006122e26021836126fb565b91506122ed82612e8a565b604082019050919050565b60006123056031836126fb565b915061231082612ed9565b604082019050919050565b6123248161283c565b82525050565b60006123368285612074565b91506123428284612074565b91508190509392505050565b60006020820190506123636000830184611fe4565b92915050565b600060808201905061237e6000830187611fe4565b61238b6020830186611fe4565b612398604083018561231b565b81810360608301526123aa8184612002565b905095945050505050565b60006020820190506123ca6000830184611ff3565b92915050565b600060208201905081810360008301526123ea818461203b565b905092915050565b6000602082019050818103600083015261240b816120a5565b9050919050565b6000602082019050818103600083015261242b816120c8565b9050919050565b6000602082019050818103600083015261244b816120eb565b9050919050565b6000602082019050818103600083015261246b8161210e565b9050919050565b6000602082019050818103600083015261248b81612131565b9050919050565b600060208201905081810360008301526124ab81612154565b9050919050565b600060208201905081810360008301526124cb81612177565b9050919050565b600060208201905081810360008301526124eb8161219a565b9050919050565b6000602082019050818103600083015261250b816121bd565b9050919050565b6000602082019050818103600083015261252b816121e0565b9050919050565b6000602082019050818103600083015261254b81612203565b9050919050565b6000602082019050818103600083015261256b81612226565b9050919050565b6000602082019050818103600083015261258b81612249565b9050919050565b600060208201905081810360008301526125ab8161226c565b9050919050565b600060208201905081810360008301526125cb8161228f565b9050919050565b600060208201905081810360008301526125eb816122b2565b9050919050565b6000602082019050818103600083015261260b816122d5565b9050919050565b6000602082019050818103600083015261262b816122f8565b9050919050565b6000602082019050612647600083018461231b565b92915050565b6000612657612668565b905061266382826128ba565b919050565b6000604051905090565b600067ffffffffffffffff82111561268d5761268c6129f2565b5b61269682612a21565b9050602081019050919050565b600067ffffffffffffffff8211156126be576126bd6129f2565b5b6126c782612a21565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006127228261283c565b915061272d8361283c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561276257612761612965565b5b828201905092915050565b60006127788261283c565b91506127838361283c565b92508261279357612792612994565b5b828204905092915050565b60006127a98261283c565b91506127b48361283c565b9250828210156127c7576127c6612965565b5b828203905092915050565b60006127dd8261281c565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612873578082015181840152602081019050612858565b83811115612882576000848401525b50505050565b600060028204905060018216806128a057607f821691505b602082108114156128b4576128b36129c3565b5b50919050565b6128c382612a21565b810181811067ffffffffffffffff821117156128e2576128e16129f2565b5b80604052505050565b60006128f68261283c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561292957612928612965565b5b600182019050919050565b600061293f8261283c565b915061294a8361283c565b92508261295a57612959612994565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b612f31816127d2565b8114612f3c57600080fd5b50565b612f48816127e4565b8114612f5357600080fd5b50565b612f5f816127f0565b8114612f6a57600080fd5b50565b612f768161283c565b8114612f8157600080fd5b5056fea2646970667358221220caf2adcbf757d3f7ea94a29d93dc1d64bb6fa5750108c9bff4638840c615934d64736f6c63430008040033";

export class YourCollectible__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<YourCollectible> {
    return super.deploy(overrides || {}) as Promise<YourCollectible>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): YourCollectible {
    return super.attach(address) as YourCollectible;
  }
  connect(signer: Signer): YourCollectible__factory {
    return super.connect(signer) as YourCollectible__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YourCollectibleInterface {
    return new utils.Interface(_abi) as YourCollectibleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YourCollectible {
    return new Contract(address, _abi, signerOrProvider) as YourCollectible;
  }
}