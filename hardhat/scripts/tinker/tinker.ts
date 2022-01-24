import { Contract, providers, Signer, utils } from "ethers";
import { readFileSync } from "fs-extra";
import { join } from "path";

const contract_path_relative = '../src/assets/contracts/';
const processDir = process.cwd()
const contract_path = join(processDir,contract_path_relative)
const contract_config = JSON.parse(readFileSync( join(processDir,'contract.config.json'),'utf-8')) as {[key:string]: any}


const tinker = async () => {

    // ADDRESS TO MINT TO:
    
    const toDeployContract = contract_config['simpleNftContract']
    const provider = new providers.JsonRpcProvider();
    const signer:Signer = await provider.getSigner()

    const metadata = JSON.parse(readFileSync(`${contract_path}/${toDeployContract.jsonName}_metadata.json`,'utf-8'))
  
  
   const simpleNftContract = await  new Contract(metadata.address,metadata.abi,signer)
const signerAdress = await signer.getAddress()


    // const result = await simpleNftContract.mintItem(signerAdress,'uploaded.path 1',{gasLimit:400000})
    // await result.wait()
    const p = await simpleNftContract.totalSupply()
  
    console.log('minting' + JSON.stringify(p))
    console.log(p)
    console.log(+utils.formatEther(p) * 10 ** 18 );
  

const mytokens = await simpleNftContract.balanceOf(signerAdress)
   const myTokensN =  +utils.formatUnits(mytokens,'wei')

    const myTokenUri  = await simpleNftContract.tokenURI(36)


    for (let i=0;i<myTokensN;i++){
        console.log(i)
    }


  
  };
  
  const sleep = (ms:number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  tinker()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });