// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.15;

import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';
import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';
// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

interface IWMATIC {
    function approve(address guy, uint wad) external returns (bool);
    function deposit() external payable;
}

contract SwapToStable {
         
    //Using Interface
    ISwapRouter public immutable router;       // Interface - Router Uniswap 
    IWMATIC public cWMATIC;                    // Interface - Wrapp Matic (Native token)
    
    //Address Contracts
    address public constant WDAI          =   0xF2907853C5eD1a4964f7522646869D40AC154Bb2; //0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F; // Polygon // Mainnet WDAI 0x6B175474E89094C44Da98b954EedeAC495271d0F; 
    address public constant WMATIC        =   0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889; // Polygon // Mainnet WETH 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    // address public constant WETH       =   0xFD2AB41e083c75085807c4A65C0A14FDD93d55A9; // polygon
    address public constant addressRouter =   0xE592427A0AEce92De3Edee1F18E0157C05861564;
    
    enum State {
            AchieveGoal,
            RisingPoolMatic
    }

    //State Variables 
    address payable public owner; //Contract's owner
    string public title;

    //****** uint256 public poolMatic; // pool token native
    uint256 public amountGoalMatic;
    uint256 public amountApprove;
    State   public state;

    //****** mapping (address => uint) poolERC20; // pools token ERC20
    mapping (address => uint) public amountGoalERC20;
    mapping (address => uint) public amountApproveERC20;
    mapping (address => State) public stateERC20;
    mapping (address => bool) public  erc20Accept;
    
    uint24 public constant feeTier= 3000; // 500, 3000, 10000 

    constructor(string memory _title, address _owner, uint256 _amountGoalMatic) {
        
        title=_title;
        owner=payable(_owner);

        amountGoalMatic=_amountGoalMatic;
        amountApprove=1000*(10**18);
        state = State.RisingPoolMatic;

        router = ISwapRouter(addressRouter);  
        cWMATIC = IWMATIC(WMATIC);

        approveWMATIC(amountApprove);
    }


    event SendDaiOwner(uint _amountOut);

    modifier onlyOwner {
        require(msg.sender==owner, "you are not the owner");
        _;
    }


    function addToken(address aERC20, uint256 _amountGoalERC20) public onlyOwner   {
        amountGoalERC20[aERC20]     =   _amountGoalERC20;
        amountApproveERC20[aERC20]  =   2000*(10**18);
        stateERC20[aERC20]          =   State.RisingPoolMatic; 
        erc20Accept[aERC20]         =   true;
        
        approveERC20(aERC20, amountApproveERC20[aERC20]);
    }



    receive() external payable {
        //poolMatic = poolMatic + msg.value;
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
        checkIfAchieveGoal_Matic();
    }


    function pay() public payable {
        require(msg.value>0, "Insufficient tokens");
        //poolMatic = poolMatic + msg.value;
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
        checkIfAchieveGoal_Matic();
    }


    function payERC20(address _aERC20, uint256 _amount) public {
        address aERC20=_aERC20;
        require(_amount>0,"Insufficient tokens");
        require(erc20Accept[aERC20]==true, "this token is not accepted");
        require(_amount<amountApproveERC20[aERC20],"amount is too much");
        // address cERC20      =   _cERC20;
        // poolERC20[cERC20]   =   poolERC20[cERC20]+_amount;
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");

        TransferHelper.safeApprove(aERC20, address(this), _amount);

        TransferHelper.safeTransferFrom(aERC20, msg.sender, address(this), _amount);

        checkIfAchieveGoal_ERC20(aERC20);
    }


    function checkIfAchieveGoal_Matic() internal {
        uint256 poolMatic = address(this).balance;

        if (poolMatic >= amountGoalMatic) {
            state = State.AchieveGoal;
            swapETHtoDAI();
        } 
    }


    function checkIfAchieveGoal_ERC20(address aERC20) internal {
        IERC20 cERC20 = IERC20(aERC20);
        uint256 poolERC20 = cERC20.balanceOf(address(this));

        if (poolERC20 >= amountGoalERC20[aERC20]) {
            stateERC20[aERC20] = State.AchieveGoal;
            swapERC20toDAI(aERC20);
        } 
    }


    function approveWMATIC(uint _amountApprove)  public {
        TransferHelper.safeApprove(WMATIC, address(router), _amountApprove);
    }


    function approveERC20(address aERC20, uint _amountApprove)  public {
        TransferHelper.safeApprove(aERC20, address(router), _amountApprove);
    }
    

    function swapETHtoDAI() internal returns (uint256) {
        uint256 poolMatic = address(this).balance;
        console.log("11111111111111111111111111111111111");

        require(poolMatic>0, "Insufficient funds");
        require(state ==State.AchieveGoal,"Not Achieve Goal");
        //debe haber una advertencia si la transaccion ha sido revertida por no aprobar la transferencia de WMATIC por el contrato

        
        cWMATIC.deposit{value:poolMatic}();
        // cWMATIC.approve(address(this),msg.value);

        // TransferHelper.safeTransferFrom(WMATIC, msg.sender, address(this), poolMatic);
        console.log("22222222222222222222222222222222222");
        uint256 minOut= 0;
        uint160 priceLimit=0;
        console.log("33333333333333333333333333333333333");
        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter.ExactInputSingleParams({
                                                        tokenIn:WMATIC,
                                                        tokenOut:WDAI,
                                                        fee:feeTier,
                                                        recipient:owner,
                                                        deadline:block.timestamp,
                                                        amountIn:poolMatic,
                                                        amountOutMinimum:minOut,
                                                        sqrtPriceLimitX96:priceLimit
                                                        });
        console.log("44444444444444444444444444444444444");
        uint256 amountOut = router.exactInputSingle(params);
        // poolMatic=0;

        emit SendDaiOwner(amountOut);
        return amountOut;
        
    }



    function swapERC20toDAI(address aERC20) internal returns (uint256) {
         IERC20 cERC20 = IERC20(aERC20);
         uint256 poolERC20 = cERC20.balanceOf(address(this));

        require(poolERC20 > 0, "insufficient funds");
        require(stateERC20[aERC20] == State.AchieveGoal,"Not Achieve Goal");
   
        // aprove transfer from this contract to uniswap router

        uint256 minOut= 0;
        uint160 priceLimit=0;

        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter.ExactInputSingleParams({
                                                        tokenIn:            aERC20,
                                                        tokenOut:           WDAI,
                                                        fee:                feeTier,
                                                        recipient:          owner,
                                                        deadline:           block.timestamp,
                                                        amountIn:           poolERC20,
                                                        amountOutMinimum:   minOut,
                                                        sqrtPriceLimitX96:  priceLimit
                                                        });

        uint256 amountOut = router.exactInputSingle(params);


        emit SendDaiOwner(amountOut);
        return amountOut;
    }


    function withdraw_Matic() public onlyOwner returns(bool){
        uint256 poolMatic = address(this).balance;
        require(poolMatic > 0 , "insufficient funds");

        (bool res,) = owner.call{value:poolMatic}("");

        return res;
    }


    function withdraw_ERC20(address aERC20) public onlyOwner{

         IERC20 cERC20 = IERC20(aERC20);
         uint256 poolERC20 = cERC20.balanceOf(address(this));

        require(poolERC20 > 0 , "insufficient funds");
        TransferHelper.safeTransferFrom(aERC20, address(this), owner, poolERC20);
    }


    // function safeTransferFromERC20(address token, address from, address to, uint256 value) internal {
    //     (bool success, bytes memory data) =
    //         token.call(abi.encodeWithSelector(IERC20.transferFrom.selector, from, to, value));

    //     require(success && (data.length == 0 || abi.decode(data, (bool))), 'STF');
    // }



    function getDataContarct() public view returns (address,
                                                uint256,
                                                uint256,
                                                uint256,
                                                string memory,
                                                State,
                                                uint256
                                                ) {

        uint256 poolMatic = address(this).balance;

        return(owner, amountGoalMatic, amountApprove, poolMatic, title, state, feeTier); 
   }


}