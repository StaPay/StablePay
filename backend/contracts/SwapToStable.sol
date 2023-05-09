// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >0.8.15;

import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';
import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';

interface iWMATIC {
    function approve(address guy, uint wad) external returns (bool);
    function deposit() external payable;
}

contract SwapToStable {

    //Using Interface
    ISwapRouter public immutable router;
    iWMATIC public cWMATIC;
    
    //Address Contracts
    address public constant WDAI=0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F; // Polygon // Mainnet WDAI 0x6B175474E89094C44Da98b954EedeAC495271d0F; 
    address public constant WMATIC= 0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889; // Polygon // Mainnet WETH 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    address public constant WETH=0xFD2AB41e083c75085807c4A65C0A14FDD93d55A9; // polygon
    address public constant addressRouter=0xE592427A0AEce92De3Edee1F18E0157C05861564;

    //State Variables 
    address payable public owner; //Contract's owner
    uint256 public amountGoal;
    uint256 public amountApprove;
    uint256 public poolMatic;
    uint256 public poolEth;
    string public title;
    State public state;
    uint24 public constant feeTier= 3000; // 500, 3000, 10000 
    //uint256 public currentBalancePoolMatic;

    //mapping
    mapping (address => uint) public client;

    enum State {
             RisingPoolMatic,
             AchieveGoal
    }

    constructor(string memory _title, address _owner, uint256 _amountGoal, uint256 _amountApprove) {
        
        title=_title;
        owner=payable(_owner);
        amountGoal=_amountGoal;
        amountApprove=_amountApprove;

        router = ISwapRouter(addressRouter);  
        cWMATIC = iWMATIC(WMATIC);
        state = State.RisingPoolMatic;
        approveWMATIC(amountApprove);

    }

    function pay() public payable {
        require(msg.value>0, "Insufficient tokens");
        poolMatic = poolMatic + msg.value;
        checkIfAchieveGoal();
    }

    receive() external payable {
        poolMatic = poolMatic + msg.value;
        checkIfAchieveGoal();
    }


    function checkIfAchieveGoal() internal {
        if (poolMatic>amountGoal) {
            state = State.AchieveGoal;
            swapETHtoDAI();
        } 
    }


    function approveWMATIC(uint _amountApprove)  public {
        TransferHelper.safeApprove(WMATIC, address(router), _amountApprove);
    }



    function swapETHtoDAI() public payable returns (uint256) {
        
        require(poolMatic>=address(this).balance && poolMatic>0, "Insufficient funds prr");
        require(state ==State.AchieveGoal,"Not Achieve Goal prr");
        //debe haber una advertencia si la transaccion ha sido revertida por no aprobar la transferencia de WMATIC por el contrato

        
        cWMATIC.deposit{value:poolMatic}();
        // cWMATIC.approve(address(this),msg.value);

        // TransferHelper.safeTransferFrom(WMATIC, msg.sender, address(this), poolMatic);

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
        poolMatic=0;
        return amountOut;
        
    }

    function getDataContarct() public view returns (address,
                                                uint256,
                                                uint256,
                                                uint256,
                                                string memory,
                                                State,
                                                uint256
                                                ) {

        return(owner, amountGoal, amountApprove, poolMatic, title, state, feeTier); 
   }


}