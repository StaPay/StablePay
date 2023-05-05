// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >0.8.15;

import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';
import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';

interface iWETH {
    function approve(address guy, uint wad) external returns (bool);
    function deposit() external payable;
}

contract uniswap {

    ISwapRouter public immutable router;
    address public constant WDAI=0x6B175474E89094C44Da98b954EedeAC495271d0F;
    address public constant WETH=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    uint24 public constant feeTier= 3000;
    

    constructor(address _router) {
        router = ISwapRouter(_router);  
    }

    function swapETHtoDAI(uint256 amountIn) public returns (uint256) {
        //debe haber una advertencia si la transaccion ha sido revertida por no aprobar la transferencia de WETH por el contrato
        require(amountIn>0, "deposit coul be greatter than cero");




        TransferHelper.safeTransferFrom(WETH, msg.sender, address(this), amountIn);

        TransferHelper.safeApprove(WETH, address(router), amountIn);

        uint256 minOut= 0;
        uint160 priceLimit=0;

        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter.ExactInputSingleParams({
                                                        tokenIn:WETH,
                                                        tokenOut:WDAI,
                                                        fee:feeTier,
                                                        recipient:msg.sender,
                                                        deadline:block.timestamp,
                                                        amountIn:amountIn,
                                                        amountOutMinimum:minOut,
                                                        sqrtPriceLimitX96:priceLimit
                                                        });

        uint256 amountOut = router.exactInputSingle(params);
        
        return amountOut;
        
    }


}