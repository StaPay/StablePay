import { time, loadFixture, setBalance } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { dataContract } from "../dataContract";
import { copyFileSync } from "fs";


describe("Swap SwapToStable", ()=> {

    const addressDAI    = "0xF2907853C5eD1a4964f7522646869D40AC154Bb2" // "0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F"; // Mainnet 0x6B175474E89094C44Da98b954EedeAC495271d0F; 
    const addressERC20  = "0xFD2AB41e083c75085807c4A65C0A14FDD93d55A9" // Mainnet 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2; // 
    const ethTOwei =(value:number)=>ethers.utils.parseEther(value.toString())
    const weiTOeth =(value:number)=>ethers.utils.formatEther(value.toString())    
    

    it("addToken : test funcion", async () => {


    //Obteniendo el Signer
    const signers = await ethers.getSigners()
    const signer = signers[0]
    console.log("signer                  =>",signer.address);

    //Instanciando Contrato SwapToStable
    const SwapToStableFactory = await ethers.getContractFactory('SwapToStable');
    const SwapToStable = await SwapToStableFactory.attach(dataContract.addressContract.Ganache).connect(signer);
    
    
    console.log("Owner                   =>", await SwapToStable.owner());
    console.log("___________________________");
    console.log('Address contract        =>',SwapToStable.address)
    console.log('Address token to ADD    =>',addressERC20)  
         
 
    console.log("___________________________");
    console.log("BEFORE ADD TOKEN");
 
    const erc20AcceptBefore              = await SwapToStable.erc20Accept(addressERC20)
    console.log("is ETH accepted? Before =>",erc20AcceptBefore);

    // usando la funcion ADDTOKEN para aceptar un token como medio de pago
    const receiptAddToken = await SwapToStable.addToken(addressERC20, ethTOwei(0.000015))
    await receiptAddToken.wait()                                               

    console.log("___________________________");
    console.log("AFTER ADD TOKEN");



    const erc20AcceptAfter               = await SwapToStable.erc20Accept(addressERC20)
    console.log("is ETH accepted? After  =>",erc20AcceptAfter);

    const amountGoalERC20                = await SwapToStable.amountGoalERC20(addressERC20)
    console.log("amountGoalERC20 ETH     =>",weiTOeth(amountGoalERC20));
        
    const amountApproveERC20             = await SwapToStable.amountApproveERC20(addressERC20)
    console.log("amountApproveERC20 ETH  =>",weiTOeth(amountApproveERC20));
        
    const stateERC20                     = await SwapToStable.stateERC20(addressERC20)
    console.log("stateERC20 ETH          =>",stateERC20);


    })




  it("payERC20", async () => {

    //Obteniendo el Signer
    const signers = await ethers.getSigners()
    const signer = await signers[6]
    console.log("signer                  =>",signer.address);

    //Instanciando Contrato SwapToStable
    const SwapToStableFactory = await ethers.getContractFactory('SwapToStable');
    const SwapToStable = await SwapToStableFactory.attach(dataContract.addressContract.Ganache).connect(signer);
      

    //Instanciando Token WETH
    const FWETH = await ethers.getContractFactory("TokenWETH")
    const cWETH = FWETH.attach(addressERC20).connect(signer)

    //Instanciando Token DAI
    const FDAI = await ethers.getContractFactory("TokenDai")
    const cDAI = FDAI.attach(addressDAI).connect(signer)


    console.log("Owner                   =>", await SwapToStable.owner());
    console.log('Address contract        =>',SwapToStable.address)

    console.log("___________________________");


    //Obteniendo token WETH, se deposita MATIC al contrato del token WETH y retona un valor equivalente en WETH
    const receiptWETH = await cWETH.deposit({value: ethers.utils.parseEther("0.000008"),
                                             gasLimit: ethers.utils.hexlify(100000)})
    await receiptWETH.wait()


    //Funciones para revisar el allowance de WETH por el spender (contract)
    const receiptAllowance = async () => weiTOeth(await cWETH.allowance(signer.address, dataContract.addressContract.Ganache))
    console.log("Token wETH Allowance spender (contract) BEFORE      => ", await receiptAllowance());

    //Asignando un monto al Spender (contracto)
    const receipChangeAllowance = await cWETH.approve(dataContract.addressContract.Ganache, ethers.utils.parseEther("0.000008")) //ethTOwei(0.0000008) ethTOwei(0.0000015)
    await receipChangeAllowance.wait()                                                                                              

    console.log("Token wETH Allowance spender (contract) AFTER       => ", await receiptAllowance());



    //Funciones para revisar balances de WETH / DAI
    const balancewETH  = async(address:string)=> ethers.utils.formatEther(await cWETH.balanceOf(address))
    const BalanceDAI   = async(address:string)=> ethers.utils.formatEther(await cDAI.balanceOf(address))

    


    console.log("___________________________");
    //Revisando: Balance WETH / DAI  |  del SIGNER / OWNER 
    console.log("BEFORE");
    console.log("Signer Balance wETH BEFORE     =>", await balancewETH(signer.address));
    console.log("Owner  Balance DAI BEFORE      =>", await BalanceDAI(dataContract.owner));    
    
    console.log("___________________________");
    //Revisando: Balance  WETH / DAI  |  del CONTRATO 
    console.log("Contract Balance wETH BEFORE   =>", await balancewETH(dataContract.addressContract.Ganache));
    console.log("Contract Balance DAI BEFORE    =>", await BalanceDAI(dataContract.addressContract.Ganache));   

    console.log("========================================")



    //Usando funcion PAYERC20 para recibir token ERC20 y convertirlos a DAI
    
    const ReceiptSwap1 = await SwapToStable.payERC20(addressERC20, ethers.utils.parseEther("0.000008")) //ethTOwei(0.0000008)
    await ReceiptSwap1.wait()



    console.log("AFTER");

    //Revisando: Balance WETH / DAI  |  del SIGNER / OWNER 
    console.log("Signer Balance wETH AFTER      =>", await balancewETH(signer.address));
    console.log("Owner  Balance DAI AFTER       =>", await BalanceDAI(dataContract.owner));  
    
    console.log("___________________________");

    //Revisando: Balance WETH / DAI  |  del CONTRATO 
    console.log("Contract Balance ETH AFTER     =>", await balancewETH(dataContract.addressContract.Ganache));
    console.log("Contract Balance DAI AFTER     =>", await BalanceDAI(dataContract.addressContract.Ganache));   


 })




})