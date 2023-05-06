export const dataContract = { 
       addressContract: {
       Ganache:"0x0cD94412C1E39d2CC8D212b5701e013977367B51"
       },
       HashContract: {
        Ganache:"0x17889ef90bf470f807f4330cd16979379428234923cd19ba88465e1873937491"
       },
       owner:'0x7cD315d4E6086B99b81533152cd577e8802779B7',
    
       abi: [{"inputs":[{"internalType":"string","name":"_title","type":"string"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_amountGoal","type":"uint256"},{"internalType":"uint256","name":"_amountApprove","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WDAI","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"addressRouter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"amountApprove","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"amountGoal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountApprove","type":"uint256"}],"name":"approveWETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cWETH","outputs":[{"internalType":"contract iWETH","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"client","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeTier","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pay","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"pool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract ISwapRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"state","outputs":[{"internalType":"enum uniswap.State","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapETHtoDAI","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"title","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}],
    
       bytecode: 0x60a06040523480156200001157600080fd5b5060405162001de338038062001de3833981810160405281019062000037919062000545565b836005908162000048919062000817565b5082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816002819055508060038190555073e592427a0aece92de3edee1f18e0157c0586156473ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc26000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600660006101000a81548160ff021916908360018111156200015d576200015c620008fe565b5b0217905550620001756003546200017f60201b60201c565b5050505062000ad4565b620001ad73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc260805183620001b060201b620009091760201c565b50565b6000808473ffffffffffffffffffffffffffffffffffffffff1663095ea7b360e01b8585604051602401620001e79291906200094f565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051620002539190620009c9565b6000604051808303816000865af19150503d806000811462000292576040519150601f19603f3d011682016040523d82523d6000602084013e62000297565b606091505b5091509150818015620002c95750600081511480620002c8575080806020019051810190620002c7919062000a1f565b5b5b6200030b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003029062000ab2565b60405180910390fd5b5050505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200037b8262000330565b810181811067ffffffffffffffff821117156200039d576200039c62000341565b5b80604052505050565b6000620003b262000312565b9050620003c0828262000370565b919050565b600067ffffffffffffffff821115620003e357620003e262000341565b5b620003ee8262000330565b9050602081019050919050565b60005b838110156200041b578082015181840152602081019050620003fe565b60008484015250505050565b60006200043e6200043884620003c5565b620003a6565b9050828152602081018484840111156200045d576200045c6200032b565b5b6200046a848285620003fb565b509392505050565b600082601f8301126200048a576200048962000326565b5b81516200049c84826020860162000427565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620004d282620004a5565b9050919050565b620004e481620004c5565b8114620004f057600080fd5b50565b6000815190506200050481620004d9565b92915050565b6000819050919050565b6200051f816200050a565b81146200052b57600080fd5b50565b6000815190506200053f8162000514565b92915050565b600080600080608085870312156200056257620005616200031c565b5b600085015167ffffffffffffffff81111562000583576200058262000321565b5b620005918782880162000472565b9450506020620005a487828801620004f3565b9350506040620005b7878288016200052e565b9250506060620005ca878288016200052e565b91505092959194509250565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200062957607f821691505b6020821081036200063f576200063e620005e1565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620006a97fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200066a565b620006b586836200066a565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620006f8620006f2620006ec846200050a565b620006cd565b6200050a565b9050919050565b6000819050919050565b6200071483620006d7565b6200072c6200072382620006ff565b84845462000677565b825550505050565b600090565b6200074362000734565b6200075081848462000709565b505050565b5b8181101562000778576200076c60008262000739565b60018101905062000756565b5050565b601f821115620007c757620007918162000645565b6200079c846200065a565b81016020851015620007ac578190505b620007c4620007bb856200065a565b83018262000755565b50505b505050565b600082821c905092915050565b6000620007ec60001984600802620007cc565b1980831691505092915050565b6000620008078383620007d9565b9150826002028217905092915050565b6200082282620005d6565b67ffffffffffffffff8111156200083e576200083d62000341565b5b6200084a825462000610565b620008578282856200077c565b600060209050601f8311600181146200088f57600084156200087a578287015190505b620008868582620007f9565b865550620008f6565b601f1984166200089f8662000645565b60005b82811015620008c957848901518255600182019150602085019450602081019050620008a2565b86831015620008e95784890151620008e5601f891682620007d9565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6200093881620004c5565b82525050565b62000949816200050a565b82525050565b60006040820190506200096660008301856200092d565b6200097560208301846200093e565b9392505050565b600081519050919050565b600081905092915050565b60006200099f826200097c565b620009ab818562000987565b9350620009bd818560208601620003fb565b80840191505092915050565b6000620009d7828462000992565b915081905092915050565b60008115159050919050565b620009f981620009e2565b811462000a0557600080fd5b50565b60008151905062000a1981620009ee565b92915050565b60006020828403121562000a385762000a376200031c565b5b600062000a488482850162000a08565b91505092915050565b600082825260208201905092915050565b7f5341000000000000000000000000000000000000000000000000000000000000600082015250565b600062000a9a60028362000a51565b915062000aa78262000a62565b602082019050919050565b6000602082019050818103600083015262000acd8162000a8b565b9050919050565b6080516112e562000afe600039600081816107680152818161089f01526108e701526112e56000f3fe6080604052600436106100f75760003560e01c80638da5cb5b1161008a578063e600372c11610059578063e600372c14610307578063eac1285b14610330578063f8289b421461035b578063f887ea40146103865761011a565b80638da5cb5b1461025b578063a2f97bf514610286578063ad5c4648146102b1578063c19d93fb146102dc5761011a565b80631ee8aa1f116100c65780631ee8aa1f146101bc5780634a79d50c146101e75780634fee176f1461021257806372f5d98a146102305761011a565b80630785001c1461011f5780630c3321191461014a57806316f0115b146101875780631b9265b8146101b25761011a565b3661011a573460045461010a9190610a97565b6004819055506101186103b1565b005b600080fd5b34801561012b57600080fd5b506101346103f4565b6040516101419190610ada565b60405180910390f35b34801561015657600080fd5b50610171600480360381019061016c9190610b58565b6103fa565b60405161017e9190610ada565b60405180910390f35b34801561019357600080fd5b5061019c610412565b6040516101a99190610ada565b60405180910390f35b6101ba610418565b005b3480156101c857600080fd5b506101d1610479565b6040516101de9190610be4565b60405180910390f35b3480156101f357600080fd5b506101fc61049d565b6040516102099190610c8f565b60405180910390f35b61021a61052b565b6040516102279190610ada565b60405180910390f35b34801561023c57600080fd5b50610245610816565b6040516102529190610ccf565b60405180910390f35b34801561026757600080fd5b5061027061081c565b60405161027d9190610d0b565b60405180910390f35b34801561029257600080fd5b5061029b610842565b6040516102a89190610d35565b60405180910390f35b3480156102bd57600080fd5b506102c661085a565b6040516102d39190610d35565b60405180910390f35b3480156102e857600080fd5b506102f1610872565b6040516102fe9190610dc7565b60405180910390f35b34801561031357600080fd5b5061032e60048036038101906103299190610e0e565b610885565b005b34801561033c57600080fd5b506103456108c7565b6040516103529190610ada565b60405180910390f35b34801561036757600080fd5b506103706108cd565b60405161037d9190610d35565b60405180910390f35b34801561039257600080fd5b5061039b6108e5565b6040516103a89190610e5c565b60405180910390f35b60025460045411156103f2576001600660006101000a81548160ff021916908360018111156103e3576103e2610d50565b5b02179055506103f061052b565b505b565b60025481565b60076020528060005260406000206000915090505481565b60045481565b6000341161045b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045290610ec3565b60405180910390fd5b346004546104699190610a97565b6004819055506104776103b1565b565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600580546104aa90610f12565b80601f01602080910402602001604051908101604052809291908181526020018280546104d690610f12565b80156105235780601f106104f857610100808354040283529160200191610523565b820191906000526020600020905b81548152906001019060200180831161050657829003601f168201915b505050505081565b6000476004541015801561054157506000600454115b610580576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057790610f8f565b60405180910390fd5b60018081111561059357610592610d50565b5b600660009054906101000a900460ff1660018111156105b5576105b4610d50565b5b146105f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ec90610ffb565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db06004546040518263ffffffff1660e01b81526004016000604051808303818588803b15801561065f57600080fd5b505af1158015610673573d6000803e3d6000fd5b5050505050600080600060405180610100016040528073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc273ffffffffffffffffffffffffffffffffffffffff168152602001736b175474e89094c44da98b954eedeac495271d0f73ffffffffffffffffffffffffffffffffffffffff168152602001610bb862ffffff168152602001600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200142815260200160045481526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815250905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663414bf389836040518263ffffffff1660e01b81526004016107bf91906110f9565b6020604051808303816000875af11580156107de573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610802919061112a565b905060006004819055508094505050505090565b610bb881565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b736b175474e89094c44da98b954eedeac495271d0f81565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc281565b600660009054906101000a900460ff1681565b6108c473c02aaa39b223fe8d0a0e5c4f27ead9083c756cc27f000000000000000000000000000000000000000000000000000000000000000083610909565b50565b60035481565b73e592427a0aece92de3edee1f18e0157c0586156481565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000808473ffffffffffffffffffffffffffffffffffffffff1663095ea7b360e01b858560405160240161093e929190611157565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516109a891906111c7565b6000604051808303816000865af19150503d80600081146109e5576040519150601f19603f3d011682016040523d82523d6000602084013e6109ea565b606091505b5091509150818015610a185750600081511480610a17575080806020019051810190610a169190611216565b5b5b610a57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4e9061128f565b60405180910390fd5b5050505050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610aa282610a5e565b9150610aad83610a5e565b9250828201905080821115610ac557610ac4610a68565b5b92915050565b610ad481610a5e565b82525050565b6000602082019050610aef6000830184610acb565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b2582610afa565b9050919050565b610b3581610b1a565b8114610b4057600080fd5b50565b600081359050610b5281610b2c565b92915050565b600060208284031215610b6e57610b6d610af5565b5b6000610b7c84828501610b43565b91505092915050565b6000819050919050565b6000610baa610ba5610ba084610afa565b610b85565b610afa565b9050919050565b6000610bbc82610b8f565b9050919050565b6000610bce82610bb1565b9050919050565b610bde81610bc3565b82525050565b6000602082019050610bf96000830184610bd5565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c39578082015181840152602081019050610c1e565b60008484015250505050565b6000601f19601f8301169050919050565b6000610c6182610bff565b610c6b8185610c0a565b9350610c7b818560208601610c1b565b610c8481610c45565b840191505092915050565b60006020820190508181036000830152610ca98184610c56565b905092915050565b600062ffffff82169050919050565b610cc981610cb1565b82525050565b6000602082019050610ce46000830184610cc0565b92915050565b6000610cf582610afa565b9050919050565b610d0581610cea565b82525050565b6000602082019050610d206000830184610cfc565b92915050565b610d2f81610b1a565b82525050565b6000602082019050610d4a6000830184610d26565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028110610d9057610d8f610d50565b5b50565b6000819050610da182610d7f565b919050565b6000610db182610d93565b9050919050565b610dc181610da6565b82525050565b6000602082019050610ddc6000830184610db8565b92915050565b610deb81610a5e565b8114610df657600080fd5b50565b600081359050610e0881610de2565b92915050565b600060208284031215610e2457610e23610af5565b5b6000610e3284828501610df9565b91505092915050565b6000610e4682610bb1565b9050919050565b610e5681610e3b565b82525050565b6000602082019050610e716000830184610e4d565b92915050565b7f496e73756666696369656e7420746f6b656e7300000000000000000000000000600082015250565b6000610ead601383610c0a565b9150610eb882610e77565b602082019050919050565b60006020820190508181036000830152610edc81610ea0565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610f2a57607f821691505b602082108103610f3d57610f3c610ee3565b5b50919050565b7f496e73756666696369656e742066756e64732070727200000000000000000000600082015250565b6000610f79601683610c0a565b9150610f8482610f43565b602082019050919050565b60006020820190508181036000830152610fa881610f6c565b9050919050565b7f4e6f74204163686965766520476f616c20707272000000000000000000000000600082015250565b6000610fe5601483610c0a565b9150610ff082610faf565b602082019050919050565b6000602082019050818103600083015261101481610fd8565b9050919050565b61102481610b1a565b82525050565b61103381610cb1565b82525050565b61104281610a5e565b82525050565b61105181610afa565b82525050565b6101008201600082015161106e600085018261101b565b506020820151611081602085018261101b565b506040820151611094604085018261102a565b5060608201516110a7606085018261101b565b5060808201516110ba6080850182611039565b5060a08201516110cd60a0850182611039565b5060c08201516110e060c0850182611039565b5060e08201516110f360e0850182611048565b50505050565b60006101008201905061110f6000830184611057565b92915050565b60008151905061112481610de2565b92915050565b6000602082840312156111405761113f610af5565b5b600061114e84828501611115565b91505092915050565b600060408201905061116c6000830185610d26565b6111796020830184610acb565b9392505050565b600081519050919050565b600081905092915050565b60006111a182611180565b6111ab818561118b565b93506111bb818560208601610c1b565b80840191505092915050565b60006111d38284611196565b915081905092915050565b60008115159050919050565b6111f3816111de565b81146111fe57600080fd5b50565b600081519050611210816111ea565b92915050565b60006020828403121561122c5761122b610af5565b5b600061123a84828501611201565b91505092915050565b7f5341000000000000000000000000000000000000000000000000000000000000600082015250565b6000611279600283610c0a565b915061128482611243565b602082019050919050565b600060208201905081810360008301526112a88161126c565b905091905056fea26469706673582212204c10d5c6331fd808d76465cc560331650f04fd0a2036e77a205d23affd601e1e64736f6c63430008110033
    }