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

          console.log(1);
          
          //usando la funcion contructorContract
          const newContractReceipt = await factorySwapToStable.contructorContract("Tambos", owner.address, ethers.utils.parseEther("0.0001"))
          console.log(2);
          await newContractReceipt.wait()    
          console.log(3);
          console.log("Hash de la tx newContractReceipt ==> ",await newContractReceipt.wait());
          console.log("Hash de la tx- creacion de un nuevo contrato ==> ",newContractReceipt.hash);

          
          const contractsUsers1 = await factorySwapToStable.getContractsOfUsers(owner.address)
          console.log(`contrato del user1 ${owner.address} => `, contractsUsers1 );
          console.log(4);
          const contractsUsers2 = await factorySwapToStable.getContractsOfUsers(owner.address)
          console.log(`contrato del user2 ${user2.address} => `, contractsUsers2 );
        
          console.log(5);

          // Para usar mapping que apunta un array, aparte de la key, se requiere un indice del array como argumento
          const receipt2 = await factorySwapToStable.users(owner.address, 0)
          console.log("mapping user => ", receipt2);
          
          console.log(6);

     });

  })