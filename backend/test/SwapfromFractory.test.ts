import { ethers } from "hardhat";
import { dataContractFactory } from "../dataContractFactory";
import { expect } from "chai";






describe("Creando contrato a partir de FactorySwap", ()=> {


    const addressDAI    = "0xF2907853C5eD1a4964f7522646869D40AC154Bb2" // "0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F"; // Mainnet 0x6B175474E89094C44Da98b954EedeAC495271d0F; 
    const addressERC20  = "0xFD2AB41e083c75085807c4A65C0A14FDD93d55A9" // Mainnet 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2; // 
    const ethTOwei =(value:number)=>ethers.utils.parseEther(value.toString())
    const weiTOeth =(value:number)=>ethers.utils.formatEther(value.toString())    

    before (async function () {
            
        //Obteniendo el Owner y Signer
        const [_owner, _signer] = await ethers.getSigners()

        this.owner = _owner
        this.signer= _signer

        //Instanciando Contrato FactorySwapToStable para el Owner y Signer
        this.FactorySwapToStable = await ethers.getContractFactory('FactorySwapToStable');
        this.factorySwapToStable       = await this.FactorySwapToStable.attach(dataContractFactory.addressContract.mumbai);
        this.factorySwapToStableSigner = await this.FactorySwapToStable.attach(dataContractFactory.addressContract.mumbai).connect(this.signer);

    })


    it('describeTest', async function () {

        //usando la funcion contructorContract
        const newContractReceipt = await this.factorySwapToStableSigner.contructorContract("Tambos", this.signer.address, ethers.utils.parseEther("0.0001"))
        console.log(2);
        await newContractReceipt.wait()    
        console.log(3);
        console.log("Hash de la tx newContractReceipt ==> ",await newContractReceipt.wait());
        //console.log("Hash de la tx- creacion de un nuevo contrato ==> ",newContractReceipt.hash);

        const addressContract = await ethers.provider.getTransactionReceipt(newContractReceipt.hash)
        const addrescontractBytes = addressContract.logs[1].topics[2]
        const contractAddress =  addrescontractBytes.replace("0x000000000000000000000000", "0x")

        console.log("obtencion del address =>",addressContract.logs[1].topics[2] );
        console.log("adress =>>>>", contractAddress)

        const FactorySwapToStable = await ethers.getContractFactory("SwapToStable")
        this.SwapToStable = await FactorySwapToStable.attach(contractAddress).connect(this.signer)


        // revisando si el token (WETH) es aceptado como medio de pago por el contrato
        const erc20AcceptBefore              = await this.SwapToStable.erc20Accept(addressERC20)
        console.log("is ETH accepted? Before =>",erc20AcceptBefore);

        console.log("Lista de tokens ANTES", await this.SwapToStable.getListTokensAcepted());
        
        // usando la funcion ADDTOKEN para agregar un token (WETH) como medio de pago por el OWNER
        await expect(this.SwapToStable.addToken(addressERC20, ethTOwei(0.000015))).not.to.be.revertedWith("you are not the owner")
        const receiptAddToken = await this.SwapToStable.addToken(addressERC20, ethTOwei(0.000015))
        await receiptAddToken.wait()                                               

        console.log("___________________________");
        
        
        console.log("AFTER ADD TOKEN");
        // revisando si el token (WETH) es aceptado como medio de pago por el contrato
        const erc20AcceptAfter               = await this.SwapToStable.erc20Accept(addressERC20)
        console.log("is ETH accepted? After  =>",erc20AcceptAfter);
        console.log("Lista de tokens DESPUES", await this.SwapToStable.getListTokensAcepted());
       

    });

 })