// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity  >0.8.15;

import "./SwapToStable.sol";

contract FactorySwapToStable {

    SwapToStable [] public arraySCRetail;
    mapping (address => SwapToStable[]) public users;

    event retailStart(string  title, address owner, uint256 amountGoal);

    function contructorContract(string memory _title, address _owner, uint256 _amountGoal ) public returns (SwapToStable){
            SwapToStable swapContractRetail = new SwapToStable(_title, _owner, _amountGoal);

            users[msg.sender].push(swapContractRetail);
            arraySCRetail.push(swapContractRetail);

            emit retailStart( _title,  _owner,  _amountGoal);

            return swapContractRetail;
    }

    function getAllContracts() public view returns(SwapToStable[]  memory ) {
        return arraySCRetail;
    }

    function getContractsOfUsers(address _user) public view  returns (SwapToStable[]  memory) {
        return users[_user];
    }


}