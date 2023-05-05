import { ethers } from 'hardhat'

async function deploy () {
    const TokenDaiFactory = await ethers.getContractFactory('TokenDai');
    console.log(TokenDaiFactory);
    //ethers.utils.parseEther("1")
    // const nombreVARIABLE = await TokenDaiFactory.deploy();
    // await nombreVARIABLE.deployed()
    
    // console.log('Address del contrato =>>',nombreVARIABLE.address )
}

deploy()
    .then(() => process.exit(0))
    .catch(error => { console.error(error);  process.exit(1); });