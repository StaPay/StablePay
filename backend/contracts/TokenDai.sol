// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >0.8.15;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract TokenDai is ERC20 {
    constructor(string memory _name, string memory _symbol ) ERC20(_name, _symbol) {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }


    modifier just500DAI {
        uint256 balanceDAI = this.balanceOf(msg.sender);
        require(balanceDAI<=500,"you have more than 500 DAI");
        _;
    }

    function mintDAI() just500DAI  public{
         _mint(msg.sender, 1000 * 10 ** decimals());
    }
    
}