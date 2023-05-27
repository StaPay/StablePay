import { ethers } from 'hardhat'
import fs from 'fs'
import artifact from '../artifacts/contracts/FactorySwapToStable.sol/FactorySwapToStable.json'

async function deploy () {
    
    const signers = await ethers.getSigners()

    const FactorySwapToSatbleFactory = await ethers.getContractFactory('FactorySwapToStable');
    const FactorySwapToStable = await FactorySwapToSatbleFactory.deploy();
    await FactorySwapToStable.deployed()
    
    console.log('Address del contrato =>>',FactorySwapToStable.address )
    
  
    const abi= JSON.parse(JSON.stringify(artifact.abi))
    
    let config = `export const dataContractFactory = { 
         addressContract: {
         mumbai:${JSON.stringify(FactorySwapToStable.address)}
      },
    
         hashContract: {
         mumbai:${JSON.stringify(FactorySwapToStable.deployTransaction.hash)}
      },
    
         owner:'${signers[0].address}',
    
         abi: ${JSON.stringify(abi)},
    
         bytecode: ${artifact.bytecode}
    }`
    
    const data = JSON.stringify(config)
    
    fs.writeFileSync('../frontend/utils/dataContractFactory.ts',config)
    fs.writeFileSync('./dataContractFactory.ts',config)

}

deploy()
    .then(() => process.exit(0))
    .catch(error => { console.error(error);  process.exit(1); });