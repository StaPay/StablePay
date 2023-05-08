import { expect } from "chai";
import { ethers } from "hardhat";
import { dataContractFactory } from "../dataContractFactory";

describe("Test FactorySwaptoStable", ()=> {

     it('Probando funsion contructorContract', async function () {

          //Obteniendo el Signer
          const signers = await ethers.getSigners()
                 
          //Instanciando Contrato SwapToStable
          const SwapToStableFactory = await ethers.getContractFactory('SwapToStable');
          const SwapToStable = await SwapToStableFactory.attach(dataContractFactory.addressContract.mumbai);
          console.log('Address del contrato =>>',SwapToStable.address )

        

     });

  })