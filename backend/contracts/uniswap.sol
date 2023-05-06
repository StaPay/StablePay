// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >0.8.15;

import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';
import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';

interface iWETH {
    function approve(address guy, uint wad) external returns (bool);
    function deposit() external payable;
}

contract uniswap {

    //Using Interface
    ISwapRouter public immutable router;
    iWETH public cWETH;
    
    //Address Contracts
    address public constant WDAI=0x6B175474E89094C44Da98b954EedeAC495271d0F;
    address public constant WETH=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    address public constant addressRouter=0xE592427A0AEce92De3Edee1F18E0157C05861564;

    //State Variables 
    address payable public owner; //Contract's owner
    uint256 public amountGoal;
    uint256 public amountApprove;
    uint256 public pool;
    string public title;
    State public state;
    uint24 public constant feeTier= 3000;
    //uint256 public currentBalancePool;

    //mapping
    mapping (address => uint) public client;

    enum State {
             RisingPool,
             AchieveGoal
    }

    constructor(string memory _title, address _owner, uint256 _amountGoal, uint256 _amountApprove) {
        

        title=_title;
        owner=payable(_owner);
        amountGoal=_amountGoal;
        amountApprove=_amountApprove;

        router = ISwapRouter(addressRouter);  
        cWETH = iWETH(WETH);
        state = State.RisingPool;
        approveWETH(amountApprove);

    }

    function pay() public payable {
        require(msg.value>0, "Insufficient tokens");
        pool = pool + msg.value;
        checkIfAchieveGoal();
    }

    receive() external payable {
        pool = pool + msg.value;
        checkIfAchieveGoal();
    }


    function checkIfAchieveGoal() internal {
        if (pool>amountGoal) {
            state = State.AchieveGoal;
            swapETHtoDAI();
        } 
    }


    function approveWETH(uint _amountApprove)  public {
        TransferHelper.safeApprove(WETH, address(router), _amountApprove);
    }



    function swapETHtoDAI() public payable returns (uint256) {
        
        require(pool>=address(this).balance && pool>0, "Insufficient funds prr");
        require(state ==State.AchieveGoal,"Not Achieve Goal prr");
        //debe haber una advertencia si la transaccion ha sido revertida por no aprobar la transferencia de WETH por el contrato

        
        cWETH.deposit{value:pool}();
        // cWETH.approve(address(this),msg.value);

        // TransferHelper.safeTransferFrom(WETH, msg.sender, address(this), pool);

        uint256 minOut= 0;
        uint160 priceLimit=0;

        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter.ExactInputSingleParams({
                                                        tokenIn:WETH,
                                                        tokenOut:WDAI,
                                                        fee:feeTier,
                                                        recipient:owner,
                                                        deadline:block.timestamp,
                                                        amountIn:pool,
                                                        amountOutMinimum:minOut,
                                                        sqrtPriceLimitX96:priceLimit
                                                        });

        uint256 amountOut = router.exactInputSingle(params);
        pool=0;
        return amountOut;
        
    }


}