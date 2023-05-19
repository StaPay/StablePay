
# FactorySwapToStable

This contract serves as a **factory** for creating **SwapToStable** contracts. Its main purpose is to create SwapToStable instances and maintain a record of all generated contracts.

The contract is deployed on the Polygon testnet, **Mumbai**, and can be interacted with from **[etherscan](https://mumbai.polygonscan.com/address/0x37581384Ec8AFeF804cE83E0e39B2024746DF20E#writeContract)**

## Functions:

-   **contructorContract**(string memory _title, address _owner, uint256 _amountGoal): This function creates a new **SwapToStable** contract, stores it in an array, and emits a retailStart event. The parameters are the contract's title, the owner's address, and the goal amount. It returns an instance of the created SwapToStable contract.
    
-   **getAllContracts**(): This function returns a list of all SwapToStable contracts created by this factory.
    

# SwapToStable

This contract allows users to swap ERC20 tokens and Matic for DAI. It defines a series of contract variables, including the addresses of the tokens to be used, the fundraising goal for each token, and a set of possible states for the contract. It also includes several functions to interact with these tokens and carry out swaps.

**Example**: see the contract deployed on **[etherscan](https://mumbai.polygonscan.com/address/0x5911B88d8895AE844dF8F5B6Dd46B86B6D2B36Ea#writeContract)**

## Functions:

-   **constructor**(string memory _title, address _owner, uint256 _amountGoalMatic): Initializes the contract, setting the title, the owner, and the Matic fundraising goal. It also approves an amount of WMATIC for the Uniswap router.
    
-   **addToken**(address aERC20, uint256 _amountGoalERC20): Allows the contract owner to add an ERC20 token to the list of tokens accepted for the contract. It also sets a fundraising goal for that token.
    
-   **receive**() external payable and **pay**() public payable: These functions allow anyone to send Matic (in the form of ETH) to the contract.
    
-   **payERC20**(address _aERC20, uint256 _amount): Allows anyone to send a specific ERC20 token to the contract.
    
-   **checkIfAchieveGoal_Matic**() and **checkIfAchieveGoal_ERC20**(address aERC20): These functions check if the amount of Matic or a specific ERC20 token in the contract reaches or exceeds the goal. If so, they carry out a swap of that token to DAI.
    
-   **approveWMATIC**(uint _amountApprove) and **approveERC20**(address aERC20, uint _amountApprove): Approve the Uniswap router to spend a specified amount of WMATIC or a specific ERC20 token on behalf of the contract.
    
-   **_swap_MaitcToDAI**() and **swapERC20toDAI**(address aERC20): These functions swap all the Matic or a specific ERC20 token in the contract for DAI, and send the DAI to the contract owner.
    
-   **withdraw_Matic**() and **withdraw_ERC20**(address aERC20): Allow the contract owner to withdraw all the Matic or a specific ERC20 token from the contract.
    
-   **getDataContarct**(): Returns various pieces of information about the contract, including the owner's address, the collection goal in Matic, the amount approved, the balance of Matic.
    
# Testing

In the case of the FactorySwapToStable and SwapToStable contracts, you may wish to run tests to add new tokens as a means of payment with the **addToken** function.

An example of this can be found in the **SwapERC20.test.ts** test file, where a **WETH** token is added. If you wish to add another ERC20 token, it's crucial that a **liquidity pool** exists between the new **ERC20 and DAI** token on **Uniswap**. Without a liquidity pool, there will be errors when attempting to carry out the swap. As an alternative, you can create a liquidity pool after adding the token.

Configure Mumbai network in hardhat.config.ts and try running some of the following tasks:

```shell
npx hardhat run scripts/SwapToStable.ts --network (Mumbai)
npx hardhat test --network (Mumbai)
```


