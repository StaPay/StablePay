import { ethers } from 'hardhat'

async function deploy () {
    const TokenBFactory = await ethers.getContractFactory('TokenB');
    const tokenB = await TokenBFactory.deploy();
    await tokenB.deployed()
    
    console.log('Address del contrato =>>',tokenB.address )
}

deploy()
    .then(() => process.exit(0))
    .catch(error => { console.error(error);  process.exit(1); });