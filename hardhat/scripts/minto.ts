// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.

import { writeFileSync,readFileSync } from "fs";
import {ensureDir } from 'fs-extra'
import { ethers } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { join } from "path";


import { create } from 'ipfs-http-client'
import { Contract } from "ethers";


const client = create({host: 'ipfs.infura.io', port: 5001, protocol: 'https' })






const contract_path_relative = '../src/assets/contracts/';
const processDir = process.cwd()
const contract_path = join(processDir,contract_path_relative)
const contract_config = JSON.parse(readFileSync( join(processDir,'contract.config.json'),'utf-8')) as {[key:string]: any}
const toAddress = "0x90b0c3E583aAe16f3E81D0d2CF14ef2E3a965A8a"//0x34aA3F359A9D614239015126635CE7732c18fDF3"

ensureDir(contract_path)
const  mint = async () => {
    const toDeployContract = contract_config['simpleNftContract']

    const [deployer] = await ethers.getSigners();

    const metadata = JSON.parse(readFileSync(`${contract_path}/${toDeployContract.jsonName}_metadata.json`,'utf-8'))
 

  const simpleNftContract = await  new Contract(metadata.address,metadata.abi,deployer)
  


  const buffalo = {
    "description": "It's actually a bison?",
    "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
    "image": "https://austingriffith.com/images/paintings/buffalo.jpg",
    "name": "Buffalo",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "green"
       },
       {
         "trait_type": "Eyes",
         "value": "googly"
       },
       {
         "trait_type": "Stamina",
         "value": 42
       }
    ]
  }
  console.log("Uploading buffalo...")
  const uploaded = await client.add(JSON.stringify(buffalo))

  console.log("Minting buffalo with IPFS hash ("+uploaded.path+")")
  await simpleNftContract.mintItem(toAddress,uploaded.path,{gasLimit:400000})
  console.log('minting')


 

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.

mint().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
