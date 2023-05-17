import { ethers } from 'hardhat'

async function deploy () {
    const TokenDAIFactory = await ethers.getContractFactory('TokenDai');
    const tokenDAI = await TokenDAIFactory.deploy("DAI","DAI");
    await tokenDAI.deployed()
    
    console.log('Address del contrato =>>',tokenDAI.address )
}

deploy()
    .then(() => process.exit(0))
    .catch(error => { console.error(error);  process.exit(1); });