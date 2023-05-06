import { time, loadFixture, setBalance } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { dataContract } from "../dataContract";
import { copyFileSync } from "fs";


describe("Swap Uniswap", ()=> {

    const addressDAI ="0x6B175474E89094C44Da98b954EedeAC495271d0F"
    const addressWETH ="0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"


    it('describeTest', async function () {

            //Instanciando Contrato uniswap
            const UniswapFactory = await ethers.getContractFactory('uniswap');
            const uniswap = await UniswapFactory.attach(dataContract.addressContract.Ganache);
            console.log('Address del contrato =>>',uniswap.address )
     
            //Instanciando Token WETH
            const FWETH = await ethers.getContractFactory("TokenWETH")
            const cWETH= FWETH.attach(addressWETH)

            //Instanciando Token DAI
            const FDAI = await ethers.getContractFactory("TokenDai")
            const cDAI = FDAI.attach(addressDAI)


            console.log("Owner del contrato =>", await uniswap.owner());
            console.log("________________")

            //Funciones para revisar balances de ETH / WETH / Saldo por Allowance / DAI
            const balanceETH = async (address:string)=> ethers.utils.formatEther(await ethers.provider.getBalance(address))
            const BalanceDAIbefore =async(address:string)=> ethers.utils.formatEther(await cDAI.balanceOf(address))

            

            //Revisando: Balance ETH / WETH / Saldo por Allowance / DAI  |  del OWNER 
            console.log("Owner balanceETH BEFORE=>", await balanceETH(dataContract.owner) );
            console.log("Owner BalanceDAI BEFORE =>", await BalanceDAIbefore(dataContract.owner));    
            
            console.log("________________")
            
            //Revisando: Balance ETH / WETH / Saldo por Allowance / DAI  |  del CONTRATO 
            console.log("Contrato balanceETH BEFORE=>", await balanceETH(dataContract.addressContract.Ganache));
            console.log("Contrato BalanceDAI BEFORE =>", await BalanceDAIbefore(dataContract.addressContract.Ganache));   

            console.log("========================================")

            //reazizando Swap de WETH a DAI
            const ReceiptSwap = await uniswap.pay({value:ethers.utils.parseEther("1")})
            await ReceiptSwap.wait()

            
            //Revisando: Balance ETH / WETH / Saldo por Allowance / DAI   |  del OWNER 
            console.log("Owner balanceETH  AFTER=>", await balanceETH(dataContract.owner) );
            console.log("Owner BalanceDAI AFTER =>", await BalanceDAIbefore(dataContract.owner));  
            
            console.log("________________")

            //Revisando: Balance ETH / WETH / Saldo por Allowance / DAI  |  del CONTRATO 
            console.log("Contrato balanceETH AFTER =>", await balanceETH(dataContract.addressContract.Ganache));
            console.log("Contrato BalanceDAI AFTER  =>", await BalanceDAIbefore(dataContract.addressContract.Ganache));   




    });

    // it("Desposit", async ()=>{
    //      //Instanciando Contrato uniswap
    //      const UniswapFactory = await ethers.getContractFactory('uniswap');
    //      const uniswap = await UniswapFactory.attach(dataContract.addressContract.Ganache);
    //      console.log('Address del contrato =>>',uniswap.address )
  
    //      //Instanciando Token WETH
    //      const FWETH = await ethers.getContractFactory("TokenWETH")
    //      const cWETH= FWETH.attach(addressWETH)

    //      //Instanciando Token DAI
    //      const FDAI = await ethers.getContractFactory("TokenDai")
    //      const cDAI = FDAI.attach(addressDAI)

    //      console.log(1);
         
    //      const balancePool = async() => ethers.utils.formatEther(await uniswap.pool())
    //      console.log(2);
    //     console.log("balance Pool Before => ", await balancePool());
    //     console.log(3);
    //     const receiptRecibir = await uniswap.recibir({value: ethers.utils.parseEther("1")})
    //     console.log(4);
    //     await receiptRecibir.wait()
    //     console.log(5);
    //     console.log("balance Pool After => ",await balancePool());


    // })

  })