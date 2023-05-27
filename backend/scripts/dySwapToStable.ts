import { ethers } from 'hardhat'
import fs from 'fs'
import artifact from '../artifacts/contracts/SwapToStable.sol/SwapToStable.json'


async function deploy () {
    
    const signers = await ethers.getSigners()
    const MATIC_to_Wei =(eth:number)=> ethers.utils.parseEther(eth.toString())
    console.log(1);
    
    const SwapToStableFactory = await ethers.getContractFactory('SwapToStable');
    const SwapToStable = await SwapToStableFactory.deploy("Titulo Prueba", signers[0].address, MATIC_to_Wei(0.001));
    console.log(2);
    
    await SwapToStable.deployed()
    
    console.log('Address del contrato =>>',SwapToStable.address )
    
    
    


    const abi= JSON.parse(JSON.stringify(artifact.abi))
    
    let config = `export const dataContract = { 
       addressContract: {
       Ganache:${JSON.stringify(SwapToStable.address)}
       },
       HashContract: {
        Ganache:${JSON.stringify(SwapToStable.deployTransaction.hash)}
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