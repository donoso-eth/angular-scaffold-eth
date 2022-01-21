//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9; // tells the solidity version to the complier

// get the OpenZeppelin Contracts, we will use to creat our own
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import "hardhat/console.sol"; // built in hardhat local environment 

contract NFTCollection is ERC721URIStorage {

// keep count of the tokenId
using Counters for Counters.Counter; // keep track of the token id's
Counters.Counter private _tokenIds;

uint256 public constant maxSupply = 2; // set the max supply of NFT's for your collection

constructor() ERC721 ("NFTCollection Angular On Chain", "AOC") { // construct your token, needs name and symbol
  console.log("An NFT has been minted to %s", msg.sender);
}

function createNFT() public { //function to create nfts

  uint256 newItemId = _tokenIds.current(); // get the tokenId

  require(newItemId < maxSupply); // check if the total supply has been reached 

  _safeMint(msg.sender, newItemId); // mint the nft from the sender account 

  _setTokenURI(newItemId, "https://jsonkeeper.com/b/2KQZ"); // add the contents to the nft 
  // the content of this nft is on the url above. This means that the nft is an off-chain nft
  // if the server with the content changes then the image in the url changes 

  _tokenIds.increment(); // increment the token, so when the next person calls the function it will be the next token in line 

  console.log("NFT ID %s has been minted", newItemId); 

 }
}
