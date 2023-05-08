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
    address public constant WDAI=0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F;// Polygon 0xaFfc274413Ec9b972BE1E63c3aA2d8189E90eeCB; //0x19D66Abd20Fb2a0Fc046C139d5af1e97F09A695e; USDC Mumbai // Mainnet 0x6B175474E89094C44Da98b954EedeAC495271d0F; 
    address public constant WMATIC= 0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889;// Polygon 0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270; //0x2a655231e814e71015ff991d90c5790B5dE82B94; WMATIC Mumbai // Mainnet 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2; // 
    address public constant addressRouter=0xE592427A0AEce92De3Edee1F18E0157C05861564;

    //State Variables 
    address payable public owner; //Contract's owner
    uint256 public amountGoal;
    uint256 public amountApprove;
    uint256 public pool;
    string public title;
    State public state;
    uint24 public constant feeTier= 3000; // 500, 3000, 10000 
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
        cWMATIC = iWMATIC(WMATIC);
        state = State.RisingPool;
        approveWMATIC(amountApprove);

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


    function approveWMATIC(uint _amountApprove)  public {
        TransferHelper.safeApprove(WMATIC, address(router), _amountApprove);
    }



    function swapETHtoDAI() public payable returns (uint256) {
        
        require(pool>=address(this).balance && pool>0, "Insufficient funds prr");
        require(state ==State.AchieveGoal,"Not Achieve Goal prr");
        //debe haber una advertencia si la transaccion ha sido revertida por no aprobar la transferencia de WMATIC por el contrato

        
        cWMATIC.deposit{value:pool}();
        // cWMATIC.approve(address(this),msg.value);

        // TransferHelper.safeTransferFrom(WMATIC, msg.sender, address(this), pool);

        uint256 minOut= 0;
        uint160 priceLimit=0;

        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter.ExactInputSingleParams({
                                                        tokenIn:WMATIC,
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

    function getDataContarct() public view returns (address,
                                                uint256,
                                                uint256,
                                                uint256,
                                                string memory,
                                                State,
                                                uint256
                                                ) {

        return(owner, amountGoal, amountApprove, pool, title, state, feeTier); 
   }


}