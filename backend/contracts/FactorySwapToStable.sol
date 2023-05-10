// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity  >0.8.15;

import "./SwapToStable.sol";

contract FactorySwapToStable {

    SwapToStable public swapContractRetail;
    SwapToStable [] public arraySCRetail;

    event retailStart(string  title, address owner, uint256 amountGoal);

    function contructorContract(string memory _title, address _owner, uint256 _amountGoal ) public returns (SwapToStable){
            swapContractRetail = new SwapToStable(_title, _owner, _amountGoal);

            arraySCRetail.push(swapContractRetail);
            emit retailStart( _title,  _owner,  _amountGoal);

            return swapContractRetail;
    }

    function getAllContracts() public view returns(SwapToStable[]  memory ) {
        return arraySCRetail;
    }


}