// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.15;

import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';
import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';
import "hardhat/console.sol";

// Interface for interacting with wrapped Matic token
interface IWMATIC {
    function deposit() external payable;
}

contract SwapToStable {
         
    // Declare contract variables
    ISwapRouter public immutable router;       // Interface for interacting with Uniswap's router
    IWMATIC public cWMATIC;                    // Interface for interacting with wrapped Matic
    
    // Various constant addresses
    address public constant WDAI          =   0xF2907853C5eD1a4964f7522646869D40AC154Bb2;
    address public constant WMATIC        =   0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889;
    // address public constant WETH       =   0xFD2AB41e083c75085807c4A65C0A14FDD93d55A9;
    address public constant addressRouter =   0xE592427A0AEce92De3Edee1F18E0157C05861564;
    
    // Define the possible states of the contract
    enum State {
            AchieveGoal,
            RisingPoolMatic
    }

    /// Contract's owner and other state variables
    address payable public owner; //Contract's owner
    string public title;

    //****** pool token native
    uint256 public amountGoalMatic;
    uint256 public amountApprove;
    State   public state;

    //****** pools token ERC20
    mapping (address => uint) public amountGoalERC20;
    mapping (address => uint) public amountApproveERC20;
    mapping (address => State) public stateERC20;
    mapping (address => bool) public  erc20Accept;
    
    // Uniswap's fee tier
    uint24 public constant feeTier= 3000;

    // Contract's constructor
    constructor(string memory _title, address _owner, uint256 _amountGoalMatic) {
        
        title=_title;
        owner=payable(_owner);

        amountGoalMatic=_amountGoalMatic;
        amountApprove=1000*(10**18);
        state = State.RisingPoolMatic;

        router = ISwapRouter(addressRouter);  
        cWMATIC = IWMATIC(WMATIC);

        _approveWMATIC(amountApprove);
    }

    //This event is fired when DAI is sent to the contract owner.
    event SendDaiOwner(uint indexed _amountOut, address indexed tokenIn, uint amountIn);


    //This modifier restricts access to the function it is applied to, to the owner of the contract only.
    modifier onlyOwner {
        require(msg.sender==owner, "you are not the owner");
        _;
    }

    //addToken allows the contract owner to add an ERC20 token to the list of accepted tokens for the contract. It also sets a goal amount for that token.
    function addToken(address aERC20, uint256 _amountGoalERC20) public onlyOwner   {
        amountGoalERC20[aERC20]     =   _amountGoalERC20;
        amountApproveERC20[aERC20]  =   2000*(10**18);
        stateERC20[aERC20]          =   State.RisingPoolMatic; 
        erc20Accept[aERC20]         =   true;
        
        _approveERC20(aERC20, amountApproveERC20[aERC20]);
    }


    //This special function runs when MATIC (in the form of ETH) is sent to the contract without calling any other function.
    receive() external payable {

        checkIfAchieveGoal_Matic();
    }

    //pay allows anyone to send MATIC (in the form of ETH) to the contract.
    function pay() public payable {
        require(msg.value>0, "Insufficient tokens");
     
        checkIfAchieveGoal_Matic();
    }

    //payERC20 allows anyone to send a specific ERC20 token to the contract.
    function payERC20(address _aERC20, uint256 _amount) public {
        address aERC20=_aERC20;
        require(_amount>0,"Insufficient tokens");
        require(erc20Accept[aERC20]==true, "this token is not accepted");
        require(_amount<amountApproveERC20[aERC20],"amount is too much");

        TransferHelper.safeTransferFrom(aERC20, msg.sender, address(this), _amount);

        checkIfAchieveGoal_ERC20(aERC20);
    }

    //checks if the amount of MATIC in the contract meets or exceeds the goal. If it does, it performs a swap of MATIC to DAI.
    function checkIfAchieveGoal_Matic() internal {
        uint256 poolMatic = address(this).balance;

        if (poolMatic >= amountGoalMatic) {
            state = State.AchieveGoal;
            _swap_MaitcToDAI();
        } 
    }

    //checks if the amount of a specific ERC20 token in the contract meets or exceeds the goal for that token. If it does, it performs a swap of the ERC20 token to DAI.
    function checkIfAchieveGoal_ERC20(address aERC20) internal {
        IERC20 cERC20 = IERC20(aERC20);
        uint256 poolERC20 = cERC20.balanceOf(address(this));

        if (poolERC20 >= amountGoalERC20[aERC20]) {
            stateERC20[aERC20] = State.AchieveGoal;
            swapERC20toDAI(aERC20);
        } 
    }

    //approves the Uniswap router to spend a specified amount of WMATIC on behalf of the contract.
    function _approveWMATIC(uint _amountApprove)  internal {
        TransferHelper.safeApprove(WMATIC, address(router), _amountApprove);
    }

    //approves the Uniswap router to spend a specified amount of a specific ERC20 token on behalf of the contract.
    function _approveERC20(address aERC20, uint _amountApprove)  internal {
        TransferHelper.safeApprove(aERC20, address(router), _amountApprove);
    }
    
    // swaps all the MATIC in the contract for DAI, and sends the DAI to the contract owner.
    function _swap_MaitcToDAI() internal returns (uint256) {
        uint256 poolMatic = address(this).balance;
     

        require(poolMatic>0, "Insufficient funds");
        require(state ==State.AchieveGoal,"Not Achieve Goal");
     
        
        cWMATIC.deposit{value:poolMatic}();
     
        uint256 minOut= 0;
        uint160 priceLimit=0;
     
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

        uint256 amountOut = router.exactInputSingle(params);


        emit SendDaiOwner(amountOut,WMATIC, poolMatic);
        return amountOut;
        
    }


    //swaps all of a specific ERC20 token in the contract for DAI, and sends the DAI to the contract owner
    function swapERC20toDAI(address aERC20) internal returns (uint256) {
         IERC20 cERC20 = IERC20(aERC20);
         uint256 poolERC20 = cERC20.balanceOf(address(this));

        require(poolERC20 > 0, "insufficient funds");
        require(stateERC20[aERC20] == State.AchieveGoal,"Not Achieve Goal");
   
     

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


        emit SendDaiOwner(amountOut, aERC20, poolERC20);
        return amountOut;
    }

    //allows the contract owner to withdraw all the MATIC from the contract.
    function withdraw_Matic() public onlyOwner returns(bool){
        uint256 poolMatic = address(this).balance;
        require(poolMatic > 0 , "insufficient funds");

        (bool res,) = owner.call{value:poolMatic}("");

        return res;
    }

    //allows the contract owner to withdraw all of a specific ERC20 token from the contract.
    function withdraw_ERC20(address aERC20) public onlyOwner{

         IERC20 cERC20 = IERC20(aERC20);
         uint256 poolERC20 = cERC20.balanceOf(address(this));

        require(poolERC20 > 0 , "insufficient funds");
        TransferHelper.safeTransferFrom(aERC20, address(this), owner, poolERC20);
    }


    //returns various pieces of information about the contract
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