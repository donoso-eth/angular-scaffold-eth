/* eslint no-use-before-define: "warn" */
import { ethers } from "hardhat";
import { readFileSync } from "fs";
import { create } from 'ipfs-http-client'
import { join } from "path";
import { Contract, providers } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { exit } from "process";
const delayMS = 1000 //sometimes xDAI needs a 6000ms break lol 😅
const ipfsClient = create({host: 'ipfs.infura.io', port: 5001, protocol: 'https' })
const contract_path_relative = '../src/assets/contracts/';
const processDir = process.cwd()
const contract_path = join(processDir,contract_path_relative)
const contract_config = JSON.parse(readFileSync( join(processDir,'contract.config.json'),'utf-8')) as {[key:string]: any}
const toAddress = "0x90b0c3E583aAe16f3E81D0d2CF14ef2E3a965A8a"//0x34aA3F359A9D614239015126635CE7732c18fDF3"
const hre = require("hardhat");

const mint = async () => {

  // ADDRESS TO MINT TO:
 
  console.log("\n\n 🎫 Minting to "+toAddress+"...\n");

  const toDeployContract = contract_config['simpleNftContract']
  const provider = new providers.JsonRpcProvider();
  const signer = await provider.getSigner()
  console.log(await signer.getAddress())
  const [deployer] = await hre.ethers.getSigners();
  console.log(deployer.address)
  const metadata = JSON.parse(readFileSync(`${contract_path}/${toDeployContract.jsonName}_metadata.json`,'utf-8'))


const simpleNftContract = await  new Contract(metadata.address,metadata.abi,signer)

const mytest = await simpleNftContract._tokenIds()



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
  const uploaded = await ipfsClient.add(JSON.stringify(buffalo))

  console.log("Minting buffalo with IPFS hash ("+uploaded.path+")")
  const result = await simpleNftContract.mintItem(toAddress,uploaded.path,{gasLimit:400000})
  await result.wait()
  //console.log(simpleNftContract)
  console.log(simpleNftContract.address)

  console.log('minting' + JSON.stringify(result))


 

  await sleep(delayMS)


  const zebra = {
    "description": "What is it so worried about?",
    "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
    "image": "https://austingriffith.com/images/paintings/zebra.jpg",
    "name": "Zebra",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "blue"
       },
       {
         "trait_type": "Eyes",
         "value": "googly"
       },
       {
         "trait_type": "Stamina",
         "value": 38
       }
    ]
  }
  console.log("Uploading zebra...")
  const uploadedzebra = await ipfsClient.add(JSON.stringify(zebra))

  console.log("Minting zebra with IPFS hash ("+uploadedzebra.path+")")
  await simpleNftContract.mintItem(deployer.address,uploadedzebra.path,{gasLimit:400000})



  await sleep(delayMS)



  const rhino = {
    "description": "What a horn!",
    "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
    "image": "https://austingriffith.com/images/paintings/rhino.jpg",
    "name": "Rhino",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "pink"
       },
       {
         "trait_type": "Eyes",
         "value": "googly"
       },
       {
         "trait_type": "Stamina",
         "value": 22
       }
    ]
  }
  console.log("Uploading rhino...")
  const uploadedrhino = await ipfsClient.add(JSON.stringify(rhino))

  console.log("Minting rhino with IPFS hash ("+uploadedrhino.path+")")
  await simpleNftContract.mintItem(toAddress,uploadedrhino.path,{gasLimit:400000})



  await sleep(delayMS)


  const fish = {
    "description": "Is that an underbyte?",
    "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
    "image": "https://austingriffith.com/images/paintings/fish.jpg",
    "name": "Fish",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "blue"
       },
       {
         "trait_type": "Eyes",
         "value": "googly"
       },
       {
         "trait_type": "Stamina",
         "value": 15
       }
    ]
  }
  console.log("Uploading fish...")
  const uploadedfish = await ipfsClient.add(JSON.stringify(fish))

  console.log("Minting fish with IPFS hash ("+uploadedfish.path+")")
  await simpleNftContract.mintItem(toAddress,uploadedfish.path,{gasLimit:400000})



  await sleep(delayMS)


  const flamingo = {
    "description": "So delicate.",
    "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
    "image": "https://austingriffith.com/images/paintings/flamingo.jpg",
    "name": "Flamingo",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "black"
       },
       {
         "trait_type": "Eyes",
         "value": "googly"
       },
       {
         "trait_type": "Stamina",
         "value": 6
       }
    ]
  }
  console.log("Uploading flamingo...")
  const uploadedflamingo = await ipfsClient.add(JSON.stringify(flamingo))

  console.log("Minting flamingo with IPFS hash ("+uploadedflamingo.path+")")
  await simpleNftContract.mintItem(toAddress,uploadedflamingo.path,{gasLimit:400000})





  const godzilla = {
    "description": "Raaaar!",
    "external_url": "https://austingriffith.com/portfolio/paintings/",// <-- this can link to a page for the specific file too
    "image": "https://austingriffith.com/images/paintings/godzilla.jpg",
    "name": "Godzilla",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "orange"
       },
       {
         "trait_type": "Eyes",
         "value": "googly"
       },
       {
         "trait_type": "Stamina",
         "value": 99
       }
    ]
  }
  console.log("Uploading godzilla...")
  const uploadedgodzilla = await ipfsClient.add(JSON.stringify(godzilla))

  console.log("Minting godzilla with IPFS hash ("+uploadedgodzilla.path+")")
  await simpleNftContract.mintItem(toAddress,uploadedgodzilla.path,{gasLimit:400000})




  await sleep(delayMS)

  console.log("Transferring Ownership of simpleNftContract to "+toAddress+"...")

  await simpleNftContract.transferOwnership(toAddress, { gasLimit: 400000 });

  await sleep(delayMS)

  /*


  console.log("Minting zebra...")
  await simpleNftContract.mintItem("0xD75b0609ed51307E13bae0F9394b5f63A7f8b6A1","zebra.jpg")

  */


  //const secondContract = await deploy("SecondContract")

  // const exampleToken = await deploy("ExampleToken")
  // const examplePriceOracle = await deploy("ExamplePriceOracle")
  // const smartContractWallet = await deploy("SmartContractWallet",[exampleToken.address,examplePriceOracle.address])



  /*
  //If you want to send value to an address from the deployer
  const deployerWallet = ethers.provider.getSigner()
  await deployerWallet.sendTransaction({
    to: "0x34aA3F359A9D614239015126635CE7732c18fDF3",
    value: ethers.utils.parseEther("0.001")
  })
  */


  /*
  //If you want to send some ETH to a contract on deploy (make your constructor payable!)
  const yourContract = await deploy("YourContract", [], {
  value: ethers.utils.parseEther("0.05")
  });
  */


  /*
  //If you want to link a library into your contract:
  // reference: https://github.com/austintgriffith/scaffold-eth/blob/using-libraries-example/packages/hardhat/scripts/deploy.js#L19
  const yourContract = await deploy("YourContract", [], {}, {
   LibraryName: **LibraryAddress**
  });
  */

};

const sleep = (ms:number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

mint()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
