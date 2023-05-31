import { expect } from "chai";
import { ethers } from "hardhat";
import { dataContractFactory } from "../dataContractFactory";

describe("Test FactorySwaptoStable", ()=> {

     it('Probando funsion contructorContract', async function () {

          //Obteniendo el Owner /signer
          const signers = await ethers.getSigners()
          const owner = signers[0]
          const user2 = signers[1]
                 
          //Instanciando Contrato SwapToStable
          const FactorySwapToStable = await ethers.getContractFactory('FactorySwapToStable');
          const factorySwapToStable = await FactorySwapToStable.attach(dataContractFactory.addressContract.mumbai);
          console.log('Address del contrato =>>',factorySwapToStable.address )

          //usando la funcion contructorContract
          const receipt = await factorySwapToStable.contructorContract("Tambos",owner.address, ethers.utils.parseEther("0.0001"))
          await receipt.wait()    
          console.log("Hash de la tx- creacion de un nuevo contrato",receipt.hash);

          console.log("oner address =>", owner.address);
          
          const contractsUsers1 = await factorySwapToStable.getContractsOfUsers(owner.address)
          console.log(`contrato del user1 ${owner.address} => `, contractsUsers1 );
          
          const contractsUsers2 = await factorySwapToStable.getContractsOfUsers(user2.address)
          console.log(`contrato del user2 ${user2.address} => `, contractsUsers2 );
        

     });

  })