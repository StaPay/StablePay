
import { ethers } from "hardhat";
import fs from 'fs'
import artifact from '../artifacts/contracts/Lock.sol/Lock.json'
async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = ethers.utils.parseEther("0.001");

  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  await lock.deployed();

  console.log(
    `Lock with ${ethers.utils.formatEther(lockedAmount)}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  );



const abi= JSON.parse(JSON.stringify(artifact.abi))

let config = `export const abiContract = { 
  addressContract: {
  sepolia1:${JSON.stringify(lock.address)}
  },

  abi: ${JSON.stringify(abi)},

  bytecode: ${artifact.bytecode}
}`

const data = JSON.stringify(config)

fs.writeFileSync('../frontend/utils/ContratoAbi.js',config)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
