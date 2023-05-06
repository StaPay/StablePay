import { HardhatUserConfig } from "hardhat/config";
import { task} from "hardhat/config";


import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-etherscan"
import "@nomicfoundation/hardhat-chai-matchers"
import "@nomicfoundation/hardhat-network-helpers"
import "@openzeppelin/hardhat-upgrades"


// import "hardhat-gas-reporter"

import dotenv from "dotenv"
dotenv.config()



task("deploy", "Deploys the Swap contract and runs tests")
  .setAction(async (taskArgs, hre) => {
    // Ejecuta el script deploySwap.ts
    await hre.run("run", {
      script: "scripts/deploySwap.ts"
    });

    // Ejecuta los tests
    await hre.run("test");
  });





const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      { version: "0.8.17" },
      { version: "0.8.10" },
      { version: "0.8.7" },
      { version: "0.4.18" },
    ],
  },


  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },

  // mocha: {
  //   timeout: 40000
  // },

  defaultNetwork: "hardhat",

  networks: {

    hardhat: {
      chainId: 1337, // We set 1337 to make interacting with MetaMask simpler

      forking: {
        // url: process.env.API_QUIK_TEST_BSC?? "Ingresar URL correcta",
        url: process.env.API_ALCHEMY_FORK_MAINET?? "Ingresar URL correcta",
        blockNumber: 17184000,
        enabled:true
      },

      accounts: {
        mnemonic: process.env.SEED,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 10,
        accountsBalance:"15000000000000000000000",
        passphrase: "",
      },
    },

    Ganache: {
      //chainId: 1337, // We set 1337 to make interacting with MetaMask simpler 5777

      url: process.env.API_LOCAL_GANACHE,
      
      accounts: {
        mnemonic: process.env.SEED,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 10,
        passphrase: "",
      },
    },


    Goerli: {

      url: process.env.API_INFURA_GOERLI,

      accounts: {
        mnemonic: process.env.SEED,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 10,
        passphrase: "",
      },
    },


    ETH_Mainet: {

      url: process.env.API_ALCHEMY_MAINET,

      accounts: {
        mnemonic: process.env.SEED,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 10,
        passphrase: "",
      },
    },


    Mumbai: {

      url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",

      accounts: {
        mnemonic: process.env.SEED,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 10,
        passphrase: "",
      },
    },


    TestBSC: {

      url: "https://endpoints.omniatech.io/v1/bsc/testnet/public",

      chainId: 97,

      accounts: {
        mnemonic: process.env.SEED,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 10,
        passphrase: "",
      },
    },
   
  },

  etherscan : {
    apiKey: process.env.API_ETHERSCAN
  },


}
export default config;
