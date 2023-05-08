export const dataContract = { 
       addressContract: {
       Ganache:"0x4f848Be0Dae14D2698B894eD58C499975d9331Ef"
       },
       HashContract: {
        Ganache:"0xe83b7a0cfcd7b55eec20f86a22c2554fdd468244deeae3f804f499da30da3abf"
       },
       owner:'0x7cD315d4E6086B99b81533152cd577e8802779B7',
    
       abi: [{"inputs":[{"internalType":"string","name":"_title","type":"string"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_amountGoal","type":"uint256"},{"internalType":"uint256","name":"_amountApprove","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WDAI","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WMATIC","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"addressRouter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"amountApprove","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"amountGoal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountApprove","type":"uint256"}],"name":"approveWMATIC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cWMATIC","outputs":[{"internalType":"contract iWMATIC","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"client","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeTier","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDataContarct","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"enum SwapToStable.State","name":"","type":"uint8"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pay","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"pool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract ISwapRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"state","outputs":[{"internalType":"enum SwapToStable.State","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapETHtoDAI","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"title","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}],
    
       bytecode: 0x60a06040523480156200001157600080fd5b5060405162001f8a38038062001f8a833981810160405281019062000037919062000545565b836005908162000048919062000817565b5082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816002819055508060038190555073e592427a0aece92de3edee1f18e0157c0586156473ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050739c3c9283d3e44854697cd22d3faa240cfb0328896000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600660006101000a81548160ff021916908360018111156200015d576200015c620008fe565b5b0217905550620001756003546200017f60201b60201c565b5050505062000ad4565b620001ad739c3c9283d3e44854697cd22d3faa240cfb03288960805183620001b060201b62000a3a1760201c565b50565b6000808473ffffffffffffffffffffffffffffffffffffffff1663095ea7b360e01b8585604051602401620001e79291906200094f565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051620002539190620009c9565b6000604051808303816000865af19150503d806000811462000292576040519150601f19603f3d011682016040523d82523d6000602084013e62000297565b606091505b5091509150818015620002c95750600081511480620002c8575080806020019051810190620002c7919062000a1f565b5b5b6200030b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003029062000ab2565b60405180910390fd5b5050505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200037b8262000330565b810181811067ffffffffffffffff821117156200039d576200039c62000341565b5b80604052505050565b6000620003b262000312565b9050620003c0828262000370565b919050565b600067ffffffffffffffff821115620003e357620003e262000341565b5b620003ee8262000330565b9050602081019050919050565b60005b838110156200041b578082015181840152602081019050620003fe565b60008484015250505050565b60006200043e6200043884620003c5565b620003a6565b9050828152602081018484840111156200045d576200045c6200032b565b5b6200046a848285620003fb565b509392505050565b600082601f8301126200048a576200048962000326565b5b81516200049c84826020860162000427565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620004d282620004a5565b9050919050565b620004e481620004c5565b8114620004f057600080fd5b50565b6000815190506200050481620004d9565b92915050565b6000819050919050565b6200051f816200050a565b81146200052b57600080fd5b50565b6000815190506200053f8162000514565b92915050565b600080600080608085870312156200056257620005616200031c565b5b600085015167ffffffffffffffff81111562000583576200058262000321565b5b620005918782880162000472565b9450506020620005a487828801620004f3565b9350506040620005b7878288016200052e565b9250506060620005ca878288016200052e565b91505092959194509250565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200062957607f821691505b6020821081036200063f576200063e620005e1565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620006a97fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200066a565b620006b586836200066a565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620006f8620006f2620006ec846200050a565b620006cd565b6200050a565b9050919050565b6000819050919050565b6200071483620006d7565b6200072c6200072382620006ff565b84845462000677565b825550505050565b600090565b6200074362000734565b6200075081848462000709565b505050565b5b8181101562000778576200076c60008262000739565b60018101905062000756565b5050565b601f821115620007c757620007918162000645565b6200079c846200065a565b81016020851015620007ac578190505b620007c4620007bb856200065a565b83018262000755565b50505b505050565b600082821c905092915050565b6000620007ec60001984600802620007cc565b1980831691505092915050565b6000620008078383620007d9565b9150826002028217905092915050565b6200082282620005d6565b67ffffffffffffffff8111156200083e576200083d62000341565b5b6200084a825462000610565b620008578282856200077c565b600060209050601f8311600181146200088f57600084156200087a578287015190505b620008868582620007f9565b865550620008f6565b601f1984166200089f8662000645565b60005b82811015620008c957848901518255600182019150602085019450602081019050620008a2565b86831015620008e95784890151620008e5601f891682620007d9565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6200093881620004c5565b82525050565b62000949816200050a565b82525050565b60006040820190506200096660008301856200092d565b6200097560208301846200093e565b9392505050565b600081519050919050565b600081905092915050565b60006200099f826200097c565b620009ab818562000987565b9350620009bd818560208601620003fb565b80840191505092915050565b6000620009d7828462000992565b915081905092915050565b60008115159050919050565b620009f981620009e2565b811462000a0557600080fd5b50565b60008151905062000a1981620009ee565b92915050565b60006020828403121562000a385762000a376200031c565b5b600062000a488482850162000a08565b91505092915050565b600082825260208201905092915050565b7f5341000000000000000000000000000000000000000000000000000000000000600082015250565b600062000a9a60028362000a51565b915062000aa78262000a62565b602082019050919050565b6000602082019050818103600083015262000acd8162000a8b565b9050919050565b60805161148c62000afe60003960008181610797015281816109d60152610a18015261148c6000f3fe6080604052600436106101025760003560e01c806372f5d98a11610095578063d9c8d19411610064578063d9c8d19414610318578063eac1285b14610343578063f532513d1461036e578063f8289b4214610397578063f887ea40146103c257610125565b806372f5d98a1461026c5780638da5cb5b14610297578063a2f97bf5146102c2578063c19d93fb146102ed57610125565b80634a79d50c116100d15780634a79d50c146101c75780634d95cad9146101f25780634fee176f1461021d5780636af349e91461023b57610125565b80630785001c1461012a5780630c3321191461015557806316f0115b146101925780631b9265b8146101bd57610125565b3661012557346004546101159190610bc8565b6004819055506101236103ed565b005b600080fd5b34801561013657600080fd5b5061013f610430565b60405161014c9190610c0b565b60405180910390f35b34801561016157600080fd5b5061017c60048036038101906101779190610c89565b610436565b6040516101899190610c0b565b60405180910390f35b34801561019e57600080fd5b506101a761044e565b6040516101b49190610c0b565b60405180910390f35b6101c5610454565b005b3480156101d357600080fd5b506101dc6104b5565b6040516101e99190610d46565b60405180910390f35b3480156101fe57600080fd5b50610207610543565b6040516102149190610d77565b60405180910390f35b61022561055b565b6040516102329190610c0b565b60405180910390f35b34801561024757600080fd5b50610250610845565b6040516102639796959493929190610e09565b60405180910390f35b34801561027857600080fd5b5061028161093c565b60405161028e9190610e9d565b60405180910390f35b3480156102a357600080fd5b506102ac610942565b6040516102b99190610ed9565b60405180910390f35b3480156102ce57600080fd5b506102d7610968565b6040516102e49190610d77565b60405180910390f35b3480156102f957600080fd5b5061030261097f565b60405161030f9190610ef4565b60405180910390f35b34801561032457600080fd5b5061032d610992565b60405161033a9190610f6e565b60405180910390f35b34801561034f57600080fd5b506103586109b6565b6040516103659190610c0b565b60405180910390f35b34801561037a57600080fd5b5061039560048036038101906103909190610fb5565b6109bc565b005b3480156103a357600080fd5b506103ac6109fe565b6040516103b99190610d77565b60405180910390f35b3480156103ce57600080fd5b506103d7610a16565b6040516103e49190611003565b60405180910390f35b600254600454111561042e576001600660006101000a81548160ff0219169083600181111561041f5761041e610d92565b5b021790555061042c61055b565b505b565b60025481565b60076020528060005260406000206000915090505481565b60045481565b60003411610497576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048e9061106a565b60405180910390fd5b346004546104a59190610bc8565b6004819055506104b36103ed565b565b600580546104c2906110b9565b80601f01602080910402602001604051908101604052809291908181526020018280546104ee906110b9565b801561053b5780601f106105105761010080835404028352916020019161053b565b820191906000526020600020905b81548152906001019060200180831161051e57829003601f168201915b505050505081565b739c3c9283d3e44854697cd22d3faa240cfb03288981565b6000476004541015801561057157506000600454115b6105b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a790611136565b60405180910390fd5b6001808111156105c3576105c2610d92565b5b600660009054906101000a900460ff1660018111156105e5576105e4610d92565b5b14610625576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061c906111a2565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db06004546040518263ffffffff1660e01b81526004016000604051808303818588803b15801561068f57600080fd5b505af11580156106a3573d6000803e3d6000fd5b50505050506000806000604051806101000160405280739c3c9283d3e44854697cd22d3faa240cfb03288973ffffffffffffffffffffffffffffffffffffffff168152602001721b3b4d0f3714ca98ba10f6042daebf0b1b7b6f73ffffffffffffffffffffffffffffffffffffffff168152602001610bb862ffffff168152602001600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200142815260200160045481526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815250905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663414bf389836040518263ffffffff1660e01b81526004016107ee91906112a0565b6020604051808303816000875af115801561080d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083191906112d1565b905060006004819055508094505050505090565b6000806000806060600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166002546003546004546005600660009054906101000a900460ff16610bb882805461089d906110b9565b80601f01602080910402602001604051908101604052809291908181526020018280546108c9906110b9565b80156109165780601f106108eb57610100808354040283529160200191610916565b820191906000526020600020905b8154815290600101906020018083116108f957829003601f168201915b505050505092508062ffffff169050965096509650965096509650965090919293949596565b610bb881565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b721b3b4d0f3714ca98ba10f6042daebf0b1b7b6f81565b600660009054906101000a900460ff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60035481565b6109fb739c3c9283d3e44854697cd22d3faa240cfb0328897f000000000000000000000000000000000000000000000000000000000000000083610a3a565b50565b73e592427a0aece92de3edee1f18e0157c0586156481565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000808473ffffffffffffffffffffffffffffffffffffffff1663095ea7b360e01b8585604051602401610a6f9291906112fe565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051610ad9919061136e565b6000604051808303816000865af19150503d8060008114610b16576040519150601f19603f3d011682016040523d82523d6000602084013e610b1b565b606091505b5091509150818015610b495750600081511480610b48575080806020019051810190610b4791906113bd565b5b5b610b88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7f90611436565b60405180910390fd5b5050505050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610bd382610b8f565b9150610bde83610b8f565b9250828201905080821115610bf657610bf5610b99565b5b92915050565b610c0581610b8f565b82525050565b6000602082019050610c206000830184610bfc565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c5682610c2b565b9050919050565b610c6681610c4b565b8114610c7157600080fd5b50565b600081359050610c8381610c5d565b92915050565b600060208284031215610c9f57610c9e610c26565b5b6000610cad84828501610c74565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610cf0578082015181840152602081019050610cd5565b60008484015250505050565b6000601f19601f8301169050919050565b6000610d1882610cb6565b610d228185610cc1565b9350610d32818560208601610cd2565b610d3b81610cfc565b840191505092915050565b60006020820190508181036000830152610d608184610d0d565b905092915050565b610d7181610c4b565b82525050565b6000602082019050610d8c6000830184610d68565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028110610dd257610dd1610d92565b5b50565b6000819050610de382610dc1565b919050565b6000610df382610dd5565b9050919050565b610e0381610de8565b82525050565b600060e082019050610e1e600083018a610d68565b610e2b6020830189610bfc565b610e386040830188610bfc565b610e456060830187610bfc565b8181036080830152610e578186610d0d565b9050610e6660a0830185610dfa565b610e7360c0830184610bfc565b98975050505050505050565b600062ffffff82169050919050565b610e9781610e7f565b82525050565b6000602082019050610eb26000830184610e8e565b92915050565b6000610ec382610c2b565b9050919050565b610ed381610eb8565b82525050565b6000602082019050610eee6000830184610eca565b92915050565b6000602082019050610f096000830184610dfa565b92915050565b6000819050919050565b6000610f34610f2f610f2a84610c2b565b610f0f565b610c2b565b9050919050565b6000610f4682610f19565b9050919050565b6000610f5882610f3b565b9050919050565b610f6881610f4d565b82525050565b6000602082019050610f836000830184610f5f565b92915050565b610f9281610b8f565b8114610f9d57600080fd5b50565b600081359050610faf81610f89565b92915050565b600060208284031215610fcb57610fca610c26565b5b6000610fd984828501610fa0565b91505092915050565b6000610fed82610f3b565b9050919050565b610ffd81610fe2565b82525050565b60006020820190506110186000830184610ff4565b92915050565b7f496e73756666696369656e7420746f6b656e7300000000000000000000000000600082015250565b6000611054601383610cc1565b915061105f8261101e565b602082019050919050565b6000602082019050818103600083015261108381611047565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806110d157607f821691505b6020821081036110e4576110e361108a565b5b50919050565b7f496e73756666696369656e742066756e64732070727200000000000000000000600082015250565b6000611120601683610cc1565b915061112b826110ea565b602082019050919050565b6000602082019050818103600083015261114f81611113565b9050919050565b7f4e6f74204163686965766520476f616c20707272000000000000000000000000600082015250565b600061118c601483610cc1565b915061119782611156565b602082019050919050565b600060208201905081810360008301526111bb8161117f565b9050919050565b6111cb81610c4b565b82525050565b6111da81610e7f565b82525050565b6111e981610b8f565b82525050565b6111f881610c2b565b82525050565b6101008201600082015161121560008501826111c2565b50602082015161122860208501826111c2565b50604082015161123b60408501826111d1565b50606082015161124e60608501826111c2565b50608082015161126160808501826111e0565b5060a082015161127460a08501826111e0565b5060c082015161128760c08501826111e0565b5060e082015161129a60e08501826111ef565b50505050565b6000610100820190506112b660008301846111fe565b92915050565b6000815190506112cb81610f89565b92915050565b6000602082840312156112e7576112e6610c26565b5b60006112f5848285016112bc565b91505092915050565b60006040820190506113136000830185610d68565b6113206020830184610bfc565b9392505050565b600081519050919050565b600081905092915050565b600061134882611327565b6113528185611332565b9350611362818560208601610cd2565b80840191505092915050565b600061137a828461133d565b915081905092915050565b60008115159050919050565b61139a81611385565b81146113a557600080fd5b50565b6000815190506113b781611391565b92915050565b6000602082840312156113d3576113d2610c26565b5b60006113e1848285016113a8565b91505092915050565b7f5341000000000000000000000000000000000000000000000000000000000000600082015250565b6000611420600283610cc1565b915061142b826113ea565b602082019050919050565b6000602082019050818103600083015261144f81611413565b905091905056fea26469706673582212206c5ae9b205b40509458eae8119a4f07484e0c1957ba4a3b1e389accfed5bfae064736f6c63430008110033
    }