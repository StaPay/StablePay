import { time, loadFixture, setBalance } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { dataContract } from "../dataContract";



describe("Swap SwapToStable", ()=> {

    const addressDAI = "0xF2907853C5eD1a4964f7522646869D40AC154Bb2" // "0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F"; // Mainnet 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    const addressWMATIC ="0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889"; // Mainnet 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2; //
    const addressERC20  ="0xFD2AB41e083c75085807c4A65C0A14FDD93d55A9"; // Mainnet 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2; //

    before(async function () {

        const [_owner, _signer] = await ethers.getSigners()
        this.owner  = _owner
        this.signer = _signer
            
        //Instanciando Contrato SwapToStable
        const SwapToStableFactory = await ethers.getContractFactory('SwapToStable');
        this.SwapToStable = await SwapToStableFactory.attach(dataContract.addressContract.Ganache).connect(this.owner);
        this.SwapToStableSigner = await SwapToStableFactory.attach(dataContract.addressContract.Ganache).connect(this.signer);
        console.log('Address contract     =>', this.SwapToStable.address )


        //Instanciando Token DAI
        const FDAI = await ethers.getContractFactory("TokenDai")
        this.cDAI = FDAI.attach(addressDAI).connect(this.signer)


    })




    it('pay', async function () {


            console.log('Address contract     =>',this.SwapToStable.address )
            console.log("Owner                =>", await this.SwapToStable.owner());
            console.log("Signer               =>", this.signer.address);
            console.log("________________")

            //Funciones para revisar balances de MATIC  / DAI
            const balanceMATIC = async (address:string)=> ethers.utils.formatEther(await ethers.provider.getBalance(address))
            const BalanceDAIbefore =async(address:string)=> ethers.utils.formatEther(await this.cDAI.balanceOf(address))



            //Revisando: Balance MATIC / DAI  |  del SIGNER / OWNER
            console.log("Signer balance   MATIC BEFORE  =>", await balanceMATIC(this.signer.address) );
            console.log("Owner balance    DAI   BEFORE  =>", await BalanceDAIbefore(dataContract.owner));

            console.log("________________")

            //Revisando: Balance MATIC        |  del CONTRATO
            console.log("Contract balance MATIC BEFORE  =>", await balanceMATIC(dataContract.addressContract.Ganache));

            console.log("========================================")

            //Usando funcion PAY para realizar pagos por el signer y convertir de MATIC a WMATIC y luego a DAI
            const ReceiptSwap = await this.SwapToStableSigner.pay({value:ethers.utils.parseEther("0.0006"),
                                                    //gasLimit: ethers.utils.hexlify(100000)
                                                    })
            await ReceiptSwap.wait()



            //Revisando: Balance MATIC / DAI   |  del SIGNER / OWNER
            console.log("Signer balance   MATIC AFTER   =>", await balanceMATIC(this.signer.address) );
            console.log("Owner balance    DAI   AFTER   =>", await BalanceDAIbefore(dataContract.owner));

            console.log("________________")

            //Revisando: Balance MATIC         |  del CONTRATO
            console.log("Contract balance MATIC AFTER   =>", await balanceMATIC(dataContract.addressContract.Ganache));
            
    })


    it("receive", async function () {

           

            console.log('Address contract     =>',  this.SwapToStable.address )
            console.log("Owner                 =>", await this.SwapToStable.owner());
            console.log("signer                =>", await this.signer.getAddress());
            console.log("________________")


            //Funciones para revisar balances de MATIC / DAI
            const balanceMATIC = async (address:string)=> ethers.utils.formatEther(await ethers.provider.getBalance(address))
            const BalanceDAIbefore =async(address:string)=> ethers.utils.formatEther(await this.cDAI.balanceOf(address))


            
            //Revisando: Balance MATIC  / DAI  |  del SIGNER / OWNER
            console.log("Signer balance MATIC BEFORE    =>", await balanceMATIC(this.signer.address) );
            console.log("Owner balance  DAI   BEFORE    =>", await BalanceDAIbefore(dataContract.owner));

            console.log("________________")

            //Revisando: Balance MATIC         |  del CONTRATO
            console.log("Contract balance MATIC BEFORE  =>", await balanceMATIC(dataContract.addressContract.Ganache));

            console.log("========================================")


            //Usando funcion RECEIVE para realizar pagos por el Signer y convertir MATIC a WMATIC y luego a DAI
            const ReceiptSwap1 = await this.signer.sendTransaction({
                                                                to: dataContract.addressContract.Ganache,
                                                                value: ethers.utils.parseEther("0.0007"),
                                                                //gasLimit: ethers.utils.hexlify(100000)
                                                                })
            await ReceiptSwap1.wait()


            //Revisando: Balance MATIC  / DAI   |  del SIGNER / OWNER
            console.log("Signer balance MATIC AFTER     =>", await balanceMATIC(this.signer.address) );
            console.log("Owner balance DAI   AFTER      =>", await BalanceDAIbefore(dataContract.owner));

            console.log("________________..")

            //Revisando: Balance MATIC           |  del CONTRATO
            console.log("Contract  balance MATIC AFTER  =>", await balanceMATIC(dataContract.addressContract.Ganache));
  } )






})