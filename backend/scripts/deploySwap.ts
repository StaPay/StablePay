import { ethers } from 'hardhat'
import fs from 'fs'
import artifact from '../artifacts/contracts/uniswap.sol/uniswap.json'
import { stringify } from 'querystring'

async function deploy () {
    
    const signers = await ethers.getSigners()
    const ETH_to_Wei =(eth:number)=> ethers.utils.parseEther(eth.toString())

    const UniswapFactory = await ethers.getContractFactory('uniswap');
    const uniswap = await UniswapFactory.deploy("Titulo Prueba", signers[0].address, ETH_to_Wei(10), ETH_to_Wei(50));

    
    await uniswap.deployed()
    
    console.log('Address del contrato =>>',uniswap.address )
    
    
    


    const abi= JSON.parse(JSON.stringify(artifact.abi))
    
    let config = `export const dataContract = { 
       addressContract: {
       Ganache:${JSON.stringify(uniswap.address)}
       },
       HashContract: {
        Ganache:${JSON.stringify(uniswap.deployTransaction.hash)}
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