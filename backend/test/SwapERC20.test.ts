import { expect } from "chai";
import { ethers } from "hardhat";
import { dataContract } from "../dataContract";



describe("Swap SwapToStable", ()=> {

    const addressDAI    = "0xF2907853C5eD1a4964f7522646869D40AC154Bb2" // "0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F"; // Mainnet 0x6B175474E89094C44Da98b954EedeAC495271d0F; 
    const addressERC20  = "0xFD2AB41e083c75085807c4A65C0A14FDD93d55A9" // Mainnet 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2; // 
    const ethTOwei =(value:number)=>ethers.utils.parseEther(value.toString())
    const weiTOeth =(value:number)=>ethers.utils.formatEther(value.toString())    
    

    before (async function () {
            
        //Obteniendo el Owner y Signer
        const [_owner, _signer] = await ethers.getSigners()

        this.owner = _owner
        this.signer= _signer

        //Instanciando Contrato SwapToStable para el Owner y Signer
        this.SwapToStableFactory = await ethers.getContractFactory('SwapToStable');
        this.SwapToStable       = await this.SwapToStableFactory.attach(dataContract.addressContract.Ganache);
        this.SwapToStableSigner = await this.SwapToStableFactory.attach(dataContract.addressContract.Ganache).connect(this.signer);


        //Instanciando Contrato Token WETH para el Signer
        this.FWETH = await ethers.getContractFactory("TokenWETH")
        this.cWETH = this.FWETH.attach(addressERC20).connect(this.signer)


        //Instanciando Contrato Token DAI para el Signer
        this.FDAI = await ethers.getContractFactory("TokenDai")
        this.cDAI = this.FDAI.attach(addressDAI).connect(this.signer)


    })



    it("addToken : test funcion", async function ()  {

    
    console.log("signer                  =>",this.signer.address);
    console.log("Owner                   =>", await this.SwapToStable.owner());
    console.log("___________________________");
    console.log('Address contract        =>',this.SwapToStable.address)
    console.log('Address token to ADD    =>',addressERC20)  
    console.log("___________________________");
    console.log("BEFORE ADD TOKEN");
 

    // revisando si el token (WETH) es aceptado como medio de pago por el contrato
    const erc20AcceptBefore              = await this.SwapToStable.erc20Accept(addressERC20)
    console.log("is ETH accepted? Before =>",erc20AcceptBefore);

    
    // usando la funcion ADDTOKEN para agregar un token (WETH) como medio de pago por el SIGNER        
    await expect(this.SwapToStableSigner.addToken(addressERC20, ethTOwei(0.000015))).to.be.revertedWith("you are not the owner");


    // usando la funcion ADDTOKEN para agregar un token (WETH) como medio de pago por el OWNER
    await expect(this.SwapToStable.addToken(addressERC20, ethTOwei(0.000015))).not.to.be.revertedWith("you are not the owner")
    const receiptAddToken = await this.SwapToStable.addToken(addressERC20, ethTOwei(0.000015))
    await receiptAddToken.wait()                                               

    console.log("___________________________");
    
    
    console.log("AFTER ADD TOKEN");
    // revisando si el token (WETH) es aceptado como medio de pago por el contrato
    const erc20AcceptAfter               = await this.SwapToStable.erc20Accept(addressERC20)
    console.log("is ETH accepted? After  =>",erc20AcceptAfter);

    const amountGoalERC20                = await this.SwapToStable.amountGoalERC20(addressERC20)
    console.log("amountGoalERC20 ETH     =>",weiTOeth(amountGoalERC20));
        
    const amountApproveERC20             = await this.SwapToStable.amountApproveERC20(addressERC20)
    console.log("amountApproveERC20 ETH  =>",weiTOeth(amountApproveERC20));
        
    const stateERC20                     = await this.SwapToStable.stateERC20(addressERC20)
    console.log("stateERC20 ETH          =>",stateERC20);

    expect(erc20AcceptAfter).to.be.true

    })



  it("payERC20", async function () {


    //const  {owner, signer, SwapToStable, SwapToStableSigner, cWETH, cDAI} = await loadFixture(deployAndSigner)
    
    console.log("signer                  =>",this.signer.address);
    console.log("Owner                   =>", await this.SwapToStable.owner());
    console.log('Address contract        =>',this.SwapToStable.address)
    console.log("___________________________");


    //Obteniendo token WETH, para ello se deposita MATIC al contrato del token WETH y retona un valor equivalente en WETH
    const receiptWETH = await this.cWETH.deposit({value: ethers.utils.parseEther("0.000008"),
                                             gasLimit: ethers.utils.hexlify(100000)})
    await receiptWETH.wait()


    //Funcion para revisar el saldo allowance (WETH) por el spender (contract)
    const receiptAllowance = async () => weiTOeth(await this.cWETH.allowance(this.signer.address, dataContract.addressContract.Ganache))
    console.log("Token wETH Allowance spender (contract) BEFORE      => ", await receiptAllowance());

    //Asignando un monto al Spender (contracto)
    const receipChangeAllowance = await this.cWETH.approve(dataContract.addressContract.Ganache, ethers.utils.parseEther("0.000008")) //ethTOwei(0.0000008) ethTOwei(0.0000015)
    await receipChangeAllowance.wait()                                                                                              

    console.log("Token wETH Allowance spender (contract) AFTER       => ", await receiptAllowance());

    //Funciones para revisar balances de WETH / DAI
    const balancewETH  = async(address:string)=> ethers.utils.formatEther(await this.cWETH.balanceOf(address))
    const BalanceDAI   = async(address:string)=> ethers.utils.formatEther(await this.cDAI.balanceOf(address))  
    console.log("___________________________");


    //Revisando: Balance WETH / DAI  |  del SIGNER / OWNER 
    console.log("BEFORE");
    console.log("Signer Balance wETH BEFORE     =>", await balancewETH(this.signer.address));
    console.log("Owner  Balance DAI BEFORE      =>", await BalanceDAI(dataContract.owner));    
    console.log("___________________________");


    //Revisando: Balance  WETH / DAI  |  del CONTRATO 
    console.log("Contract Balance wETH BEFORE   =>", await balancewETH(dataContract.addressContract.Ganache));
    console.log("========================================")



    //Usando funcion PAYERC20 para recibir token ERC20 y convertirlos a DAI
    
    const ReceiptSwap1 = await this.SwapToStableSigner.payERC20(addressERC20, ethers.utils.parseEther("0.000008")) //ethTOwei(0.0000008)
    await ReceiptSwap1.wait()

    console.log("AFTER");


    //Revisando: Balance WETH / DAI  |  del SIGNER / OWNER 
    console.log("Signer Balance wETH AFTER      =>", await balancewETH(this.signer.address));
    console.log("Owner  Balance DAI AFTER       =>", await BalanceDAI(dataContract.owner));  
    console.log("___________________________");


    //Revisando: Balance WETH       |  del CONTRATO 
    console.log("Contract Balance ETH AFTER     =>", await balancewETH(dataContract.addressContract.Ganache));


 })




})