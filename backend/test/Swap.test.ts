import { time, loadFixture, setBalance } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { dataContract } from "../dataContract";
import { copyFileSync } from "fs";


describe("Swap SwapToStable", ()=> {

    const addressDAI = "0xF2907853C5eD1a4964f7522646869D40AC154Bb2" // "0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F"; // Mainnet 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    const addressWMATIC ="0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889"; // Mainnet 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2; //
    const addressERC20  ="0xFD2AB41e083c75085807c4A65C0A14FDD93d55A9"; // Mainnet 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2; //



    it('pay', async function () {


            const signers = await ethers.getSigners()
            const signer = signers[1]

            //Instanciando Contrato SwapToStable
            const SwapToStableFactory = await ethers.getContractFactory('SwapToStable');
            const SwapToStable = await SwapToStableFactory.attach(dataContract.addressContract.Ganache).connect(signer);
            console.log('Address contract     =>',SwapToStable.address )


            //Instanciando Token DAI
            const FDAI = await ethers.getContractFactory("TokenDai")
            const cDAI = FDAI.attach(addressDAI).connect(signer)


            console.log("Owner                =>", await SwapToStable.owner());
            console.log("Signer               =>", signer.address);
            console.log("________________")

            //Funciones para revisar balances de MATIC  / DAI
            const balanceMATIC = async (address:string)=> ethers.utils.formatEther(await ethers.provider.getBalance(address))
            const BalanceDAIbefore =async(address:string)=> ethers.utils.formatEther(await cDAI.balanceOf(address))



            //Revisando: Balance MATIC / DAI  |  del SIGNER / OWNER
            console.log("Signer balance   MATIC BEFORE  =>", await balanceMATIC(signer.address) );
            console.log("Owner balance    DAI   BEFORE  =>", await BalanceDAIbefore(dataContract.owner));

            console.log("________________")

            //Revisando: Balance MATIC / DAI  |  del CONTRATO
            console.log("Contract balance MATIC BEFORE  =>", await balanceMATIC(dataContract.addressContract.Ganache));
            console.log("Contract balance DAI   BEFORE  =>", await BalanceDAIbefore(dataContract.addressContract.Ganache));

            console.log("========================================")

            //Usando funcion PAY para realizar pagos y convertir de MATIC a WMATIC y luego a DAI
            const ReceiptSwap = await SwapToStable.pay({value:ethers.utils.parseEther("0.0006"),
                                                    //gasLimit: ethers.utils.hexlify(100000)
                                                    })
            await ReceiptSwap.wait()


            //Revisando: Balance MATIC / DAI   |  del SIGNER / OWNER
            console.log("Signer balance   MATIC AFTER   =>", await balanceMATIC(signer.address) );
            console.log("Owner balance    DAI   AFTER   =>", await BalanceDAIbefore(dataContract.owner));

            console.log("________________")

            //Revisando: Balance MATIC / DAI  |  del CONTRATO
            console.log("Contract balance MATIC AFTER   =>", await balanceMATIC(dataContract.addressContract.Ganache));
            console.log("Contract balance DAI   AFTER   =>", await BalanceDAIbefore(dataContract.addressContract.Ganache));
    })


    it("receive", async ()=>{




            //Obteniendo el Signer
            const signers = await ethers.getSigners()
            const signer = signers[1]

            //Instanciando Contrato SwapToStable
            const SwapToStableFactory = await ethers.getContractFactory('SwapToStable');
            const SwapToStable = await SwapToStableFactory.attach(dataContract.addressContract.Ganache).connect(signer);
            console.log('Address contract      =>',SwapToStable.address )


            //Instanciando Token DAI
            const FDAI = await ethers.getContractFactory("TokenDai")
            const cDAI = FDAI.attach(addressDAI).connect(signer)


            console.log("Owner                 =>", await SwapToStable.owner());
            console.log("signer                =>", await signer.getAddress());
            console.log("________________")

        //     console.log("Contrato DAI === >",await SwapToStable.WDAI() );
        //     console.log("Scrip DAI === >",addressDAI);
        //     console.log("Contrato MATIC  === >",await SwapToStable.WMATIC());
        //     console.log("Scrip MATIC  === >",addressWMATIC);



            //Funciones para revisar balances de MATIC / DAI
            const balanceMATIC = async (address:string)=> ethers.utils.formatEther(await ethers.provider.getBalance(address))
            const BalanceDAIbefore =async(address:string)=> ethers.utils.formatEther(await cDAI.balanceOf(address))


            
            //Revisando: Balance MATIC  / DAI  |  del SIGNER / OWNER
            console.log("Signer balance MATIC BEFORE    =>", await balanceMATIC(signer.address) );
            console.log("Owner balance  DAI   BEFORE    =>", await BalanceDAIbefore(dataContract.owner));

            console.log("________________")

            //Revisando: Balance MATIC  / DAI  |  del CONTRATO
            console.log("Contract balance MATIC BEFORE  =>", await balanceMATIC(dataContract.addressContract.Ganache));
            console.log("Contract balance DAI   BEFORE  =>", await BalanceDAIbefore(dataContract.addressContract.Ganache));

            console.log("========================================")


            //Usando funcion RECEIVE para realizar pagos y convertir MATIC a WMATIC y luego a DAI
            const ReceiptSwap1 = await signer.sendTransaction({
                                                                to: dataContract.addressContract.Ganache,
                                                                value: ethers.utils.parseEther("0.0007"),
                                                                //gasLimit: ethers.utils.hexlify(100000)
                                                                })
            await ReceiptSwap1.wait()


            //Revisando: Balance MATIC  / DAI   |  del SIGNER / OWNER
            console.log("Signer balance MATIC AFTER     =>", await balanceMATIC(signer.address) );
            console.log("Owner balance DAI   AFTER      =>", await BalanceDAIbefore(dataContract.owner));

            console.log("________________..")

            //Revisando: Balance MATIC  / DAI  |  del CONTRATO
            console.log("Contract  balance MATIC AFTER  =>", await balanceMATIC(dataContract.addressContract.Ganache));
            console.log("Contract  balance DAI   AFTER  =>", await BalanceDAIbefore(dataContract.addressContract.Ganache));
  } )










})