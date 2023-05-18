import { time, loadFixture, setBalance } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { dataContract } from "../dataContract";
import { copyFileSync } from "fs";


describe("Swap SwapToStable", ()=> {

    const addressDAI = "0xF2907853C5eD1a4964f7522646869D40AC154Bb2" // "0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F"; // Mainnet 0x6B175474E89094C44Da98b954EedeAC495271d0F; 
    const addressERC20  ="0xFD2AB41e083c75085807c4A65C0A14FDD93d55A9"; // Mainnet 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2; // 
    const ethTOwei =(value:number)=>ethers.utils.parseEther(value.toString())
    const weiTOeth =(value:number)=>ethers.utils.formatEther(value.toString())    
    

    it("addToken : test funcion", async () => {
    //Instanciando Contrato SwapToStable
    const SwapToStableFactory = await ethers.getContractFactory('SwapToStable');
    const SwapToStable = await SwapToStableFactory.attach(dataContract.addressContract.Ganache);
    console.log('Address del contrato =>>',SwapToStable.address )

    //Instanciando Token WMATIC
    const FWETH = await ethers.getContractFactory("TokenWETH")
    const cWETH = FWETH.attach(addressERC20)

    //Instanciando Token DAI
    const FDAI = await ethers.getContractFactory("TokenDai")
    const cDAI = FDAI.attach(addressDAI)



    //Obteniendo el Signer
    const signers = await ethers.getSigners()
    const signer = signers[0].getAddress()
         
 
    

    const erc20AcceptBefore             = await SwapToStable.erc20Accept(addressERC20)
    console.log("erc20Accept ETH Before =>",erc20AcceptBefore);

    const receiptAddToken = await SwapToStable.addToken(addressERC20, ethTOwei(0.0000015))
    await receiptAddToken.wait()



    const amountGoalERC20               = await SwapToStable.amountGoalERC20(addressERC20)
    console.log("amountGoalERC20 ETH    =>",weiTOeth(amountGoalERC20));
        
    const amountApproveERC20            = await SwapToStable.amountApproveERC20(addressERC20)
    console.log("amountApproveERC20 ETH =>",weiTOeth(amountApproveERC20));
        
    const stateERC20                    = await SwapToStable.stateERC20(addressERC20)
    console.log("stateERC20 ETH         =>",stateERC20);

    const erc20AcceptAfter              = await SwapToStable.erc20Accept(addressERC20)
    console.log("erc20Accept ETH After  =>",erc20AcceptAfter);

    })











  it("payERC20 : test function", async () => {

        //Obteniendo el Signer
        const signers = await ethers.getSigners()
        const signer = await signers[0].getAddress()


    //Instanciando Contrato SwapToStable
    const SwapToStableFactory = await ethers.getContractFactory('SwapToStable');
    const SwapToStable = await SwapToStableFactory.attach(dataContract.addressContract.Ganache);
    console.log('Address del contrato =>>',SwapToStable.address )

    //Instanciando Token WMATIC
    const FWETH = await ethers.getContractFactory("TokenWETH")
    const cWETH = FWETH.attach(addressERC20)

    //Instanciando Token DAI
    const FDAI = await ethers.getContractFactory("TokenDai")
    const cDAI = FDAI.attach(addressDAI)


    console.log("Owner del contrato =>", await SwapToStable.owner());
    console.log("Signer  =>", await signer);
    console.log("________________")

    console.log("Contrato DAI === >",await SwapToStable.WDAI() );
    console.log("Scrip DAI === >",addressDAI);



    //Funciones para revisar el allowance de WETH 
    const receiptAllowance = async () => weiTOeth(await cWETH.allowance(signer,dataContract.addressContract.Ganache))

    console.log("Allowance del contrato ANTES => ", await receiptAllowance());
    const receipChangeAllowance = await cWETH.approve(dataContract.addressContract.Ganache,ethTOwei(0.0001))
    await receipChangeAllowance.wait()
    console.log("Allowance del contrato DESPUES => ", await receiptAllowance());




    //Funciones para revisar balances de WETH / DAI
    const balancewETH  = async(address:string)=> ethers.utils.formatEther(await cWETH.balanceOf(address))
    const BalanceDAI   = async(address:string)=> ethers.utils.formatEther(await cDAI.balanceOf(address))

    


    console.log("________________")
    //Revisando: Balance WETH / DAI  |  del OWNER 
    console.log("Owner BalanceETH BEFORE=>", await balancewETH(dataContract.owner) );
    console.log("Owner BalanceDAI BEFORE =>", await BalanceDAI(dataContract.owner));    
    
    console.log("________________")
    

    

    //Revisando: Balance  WETH / DAI  |  del CONTRATO 
    console.log("Contrato BalanceETH BEFORE=>", await balancewETH(dataContract.addressContract.Ganache));
    console.log("Contrato BalanceDAI BEFORE =>", await BalanceDAI(dataContract.addressContract.Ganache));   

    console.log("========================================")




    //Usando funcion PAYERC20 para recibir token ERC20 y convertirlos a DAI
    
    const ReceiptSwap1 = await SwapToStable.payERC20(addressERC20, ethers.utils.parseEther("0.0000008"))
    await ReceiptSwap1.wait()



    
    //Revisando: Balance WETH / DAI  |  del OWNER 
    console.log("Owner BalanceETH AFTER=>", await balancewETH(dataContract.owner) );
    console.log("Owner BalanceDAI AFTER =>", await BalanceDAI(dataContract.owner));  
    
    console.log("________________")




    //Revisando: Balance MATIC / WMATIC / Saldo por Allowance / DAI  |  del CONTRATO 
    console.log("Contrato BalanceETH AFTER =>", await balancewETH(dataContract.addressContract.Ganache));
    console.log("Contrato BalanceDAI AFTER  =>", await BalanceDAI(dataContract.addressContract.Ganache));   


 })




})