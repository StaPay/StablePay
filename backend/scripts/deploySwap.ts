import { ethers } from 'hardhat'
import fs from 'fs'
import artifact from '../artifacts/contracts/uniswap.sol/uniswap.json'

async function deploy () {
    const UniswapFactory = await ethers.getContractFactory('uniswap');
    const uniswap = await UniswapFactory.deploy("0xE592427A0AEce92De3Edee1F18E0157C05861564");
    await uniswap.deployed()
    
    console.log('Address del contrato =>>',uniswap.address )
    
    
    const signers = await ethers.getSigners()


    const abi= JSON.parse(JSON.stringify(artifact.abi))
    
    let config = `export const dataContract = { 
       addressContract: {
       Ganache:${JSON.stringify(uniswap.address)}
      },
    
       owner:'${signers[0].address}',
    
       abi: ${JSON.stringify(abi)},
    
       bytecode: ${artifact.bytecode}
    }`
    
    const data = JSON.stringify(config)
    
    fs.writeFileSync('../frontend/utils/dataContract.ts',config)
    fs.writeFileSync('./dataContract.ts',config)
}

deploy()
    .then(() => process.exit(0))
    .catch(error => { console.error(error);  process.exit(1); });