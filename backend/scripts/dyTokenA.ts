import { ethers } from 'hardhat'

async function deploy () {
    const TokenAFactory = await ethers.getContractFactory('TokenA');
    const tokenA = await TokenAFactory.deploy();
    await tokenA.deployed()
    
    console.log('Address del contrato =>>',tokenA.address )
}

deploy()
    .then(() => process.exit(0))
    .catch(error => { console.error(error);  process.exit(1); });