import { time, loadFixture, setBalance } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { dataContract } from "../dataContract";

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

            //Revisando balance de ETH
            const balanceETH = async ()=> ethers.utils.formatEther(await ethers.provider.getBalance(dataContract.owner))
            console.log("balanceETH Before=>", await balanceETH() );

            //Revisando Balance WETH
            const BalanceWETHbefore = await cWETH.balanceOf(dataContract.owner)
            console.log("BalanceWETHbefore =>", ethers.utils.formatEther(BalanceWETHbefore));

            //convirtiendo ETH a WETH
            const receiptETH = await cWETH.deposit({value:ethers.utils.parseEther("1")})

            //Revisando balance ETH
            console.log("balanceETH After=>", await balanceETH() );
            
            //Revisando Balance WETH
            const BalanceWETHAfter = await cWETH.balanceOf(dataContract.owner)
            console.log("BalanceWETHAfter =>", ethers.utils.formatEther(BalanceWETHAfter));
            
            //Revisando allowance
            const AllowanceBefore =  await cWETH.allowance(dataContract.owner,dataContract.addressContract.Ganache)
            console.log("AllowanceBefore => ",AllowanceBefore);
            
            //Aprovando 1 ETH al contrato
            const ReceiptWETH = await cWETH.approve(dataContract.addressContract.Ganache,ethers.utils.parseEther("1"))

            //Revisando allowance
            const AllowanceAfter =  await cWETH.allowance(dataContract.owner,dataContract.addressContract.Ganache)
            console.log("AllowanceAfter => ",AllowanceAfter);

            //revisando Saldo DAI
            const BalanceDAIbefore =async()=> await ethers.utils.formatEther(await cDAI.balanceOf(dataContract.owner))
            console.log("BalanceDAIbefore =>", await BalanceDAIbefore());            

            //reazizando Swap de WETH a DAI
            const ReceiptSwap = await uniswap.swapETHtoDAI(ethers.utils.parseEther("0.5"))
            await ReceiptSwap.wait()

            
            //revisando Saldo DAI
            console.log("BalanceDAIbefore =>", await BalanceDAIbefore());  
            
    });

  })