export const dataContract = { 
       addressContract: {
       Ganache:"0x41C54e3C515338D5a6fB0c27a23EAB02bA34466d"
       },
       HashContract: {
        Ganache:"0x30141c73a5c515a3acc9a85cd0e8ad6841d26aff2159c4e099931accc51d75ca"
       },
       owner:'0x7cD315d4E6086B99b81533152cd577e8802779B7',
    
       abi: [{"inputs":[{"internalType":"string","name":"_title","type":"string"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_amountGoalMatic","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_amountOut","type":"uint256"},{"indexed":true,"internalType":"address","name":"tokenIn","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountIn","type":"uint256"}],"name":"SendDaiOwner","type":"event"},{"inputs":[],"name":"WDAI","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WMATIC","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"aERC20","type":"address"},{"internalType":"uint256","name":"_amountGoalERC20","type":"uint256"}],"name":"addToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"addressRouter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"amountApprove","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"amountApproveERC20","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"amountGoalERC20","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"amountGoalMatic","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cWMATIC","outputs":[{"internalType":"contract IWMATIC","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"erc20Accept","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeTier","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDataContarct","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"enum SwapToStable.State","name":"","type":"uint8"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pay","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_aERC20","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"payERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract ISwapRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"state","outputs":[{"internalType":"enum SwapToStable.State","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stateERC20","outputs":[{"internalType":"enum SwapToStable.State","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"title","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"aERC20","type":"address"}],"name":"withdraw_ERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw_Matic","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}],
    
       bytecode: 0x60a06040523480156200001157600080fd5b5060405162002ff238038062002ff283398181016040528101906200003791906200054d565b826002908162000048919062000809565b5081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600381905550683635c9adc5dea000006004819055506001600560006101000a81548160ff02191690836001811115620000ca57620000c9620008f0565b5b021790555073e592427a0aece92de3edee1f18e0157c0586156473ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050739c3c9283d3e44854697cd22d3faa240cfb0328896000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200017e6004546200018760201b60201c565b50505062000ac6565b620001b5739c3c9283d3e44854697cd22d3faa240cfb03288960805183620001b860201b62000ef41760201c565b50565b6000808473ffffffffffffffffffffffffffffffffffffffff1663095ea7b360e01b8585604051602401620001ef92919062000941565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516200025b9190620009bb565b6000604051808303816000865af19150503d80600081146200029a576040519150601f19603f3d011682016040523d82523d6000602084013e6200029f565b606091505b5091509150818015620002d15750600081511480620002d0575080806020019051810190620002cf919062000a11565b5b5b62000313576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200030a9062000aa4565b60405180910390fd5b5050505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620003838262000338565b810181811067ffffffffffffffff82111715620003a557620003a462000349565b5b80604052505050565b6000620003ba6200031a565b9050620003c8828262000378565b919050565b600067ffffffffffffffff821115620003eb57620003ea62000349565b5b620003f68262000338565b9050602081019050919050565b60005b838110156200042357808201518184015260208101905062000406565b60008484015250505050565b6000620004466200044084620003cd565b620003ae565b90508281526020810184848401111562000465576200046462000333565b5b6200047284828562000403565b509392505050565b600082601f8301126200049257620004916200032e565b5b8151620004a48482602086016200042f565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620004da82620004ad565b9050919050565b620004ec81620004cd565b8114620004f857600080fd5b50565b6000815190506200050c81620004e1565b92915050565b6000819050919050565b620005278162000512565b81146200053357600080fd5b50565b60008151905062000547816200051c565b92915050565b60008060006060848603121562000569576200056862000324565b5b600084015167ffffffffffffffff8111156200058a576200058962000329565b5b62000598868287016200047a565b9350506020620005ab86828701620004fb565b9250506040620005be8682870162000536565b9150509250925092565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200061b57607f821691505b602082108103620006315762000630620005d3565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200069b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200065c565b620006a786836200065c565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620006ea620006e4620006de8462000512565b620006bf565b62000512565b9050919050565b6000819050919050565b6200070683620006c9565b6200071e6200071582620006f1565b84845462000669565b825550505050565b600090565b6200073562000726565b62000742818484620006fb565b505050565b5b818110156200076a576200075e6000826200072b565b60018101905062000748565b5050565b601f821115620007b957620007838162000637565b6200078e846200064c565b810160208510156200079e578190505b620007b6620007ad856200064c565b83018262000747565b50505b505050565b600082821c905092915050565b6000620007de60001984600802620007be565b1980831691505092915050565b6000620007f98383620007cb565b9150826002028217905092915050565b6200081482620005c8565b67ffffffffffffffff81111562000830576200082f62000349565b5b6200083c825462000602565b620008498282856200076e565b600060209050601f8311600181146200088157600084156200086c578287015190505b620008788582620007eb565b865550620008e8565b601f198416620008918662000637565b60005b82811015620008bb5784890151825560018201915060208501945060208101905062000894565b86831015620008db5784890151620008d7601f891682620007cb565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6200092a81620004cd565b82525050565b6200093b8162000512565b82525050565b60006040820190506200095860008301856200091f565b62000967602083018462000930565b9392505050565b600081519050919050565b600081905092915050565b600062000991826200096e565b6200099d818562000979565b9350620009af81856020860162000403565b80840191505092915050565b6000620009c9828462000984565b915081905092915050565b60008115159050919050565b620009eb81620009d4565b8114620009f757600080fd5b50565b60008151905062000a0b81620009e0565b92915050565b60006020828403121562000a2a5762000a2962000324565b5b600062000a3a84828501620009fa565b91505092915050565b600082825260208201905092915050565b7f5341000000000000000000000000000000000000000000000000000000000000600082015250565b600062000a8c60028362000a43565b915062000a998262000a54565b602082019050919050565b6000602082019050818103600083015262000abf8162000a7d565b9050919050565b6080516124fb62000af760003960008181610ed20152818161127701528181611620015261189d01526124fb6000f3fe60806040526004361061012e5760003560e01c80638da5cb5b116100ab578063d47b07ab1161006f578063d47b07ab146103dc578063d9c8d19414610407578063da665ddf14610432578063eac1285b1461046f578063f8289b421461049a578063f887ea40146104c55761013d565b80638da5cb5b146102f55780639ef8473714610320578063a2f97bf51461035d578063af81c5b914610388578063c19d93fb146103b15761013d565b80634ef163e2116100f25780634ef163e2146102085780636af349e91461024557806371b712871461027657806372f5d98a146102a15780638d3a4efd146102cc5761013d565b80631b9265b81461014257806326962a471461014c5780633c2c91ce146101755780634a79d50c146101b25780634d95cad9146101dd5761013d565b3661013d5761013b6104f0565b005b600080fd5b61014a610536565b005b34801561015857600080fd5b50610173600480360381019061016e9190611a2f565b610583565b005b34801561018157600080fd5b5061019c60048036038101906101979190611a6f565b6106f9565b6040516101a99190611aab565b60405180910390f35b3480156101be57600080fd5b506101c7610711565b6040516101d49190611b56565b60405180910390f35b3480156101e957600080fd5b506101f261079f565b6040516101ff9190611b87565b60405180910390f35b34801561021457600080fd5b5061022f600480360381019061022a9190611a6f565b6107b7565b60405161023c9190611c19565b60405180910390f35b34801561025157600080fd5b5061025a6107d7565b60405161026d9796959493929190611c34565b60405180910390f35b34801561028257600080fd5b5061028b6108d2565b6040516102989190611aab565b60405180910390f35b3480156102ad57600080fd5b506102b66108d8565b6040516102c39190611cc8565b60405180910390f35b3480156102d857600080fd5b506102f360048036038101906102ee9190611a6f565b6108de565b005b34801561030157600080fd5b5061030a610a67565b6040516103179190611d04565b60405180910390f35b34801561032c57600080fd5b5061034760048036038101906103429190611a6f565b610a8d565b6040516103549190611d3a565b60405180910390f35b34801561036957600080fd5b50610372610aad565b60405161037f9190611b87565b60405180910390f35b34801561039457600080fd5b506103af60048036038101906103aa9190611a2f565b610ac5565b005b3480156103bd57600080fd5b506103c6610cf3565b6040516103d39190611c19565b60405180910390f35b3480156103e857600080fd5b506103f1610d06565b6040516103fe9190611d3a565b60405180910390f35b34801561041357600080fd5b5061041c610e76565b6040516104299190611db4565b60405180910390f35b34801561043e57600080fd5b5061045960048036038101906104549190611a6f565b610e9a565b6040516104669190611aab565b60405180910390f35b34801561047b57600080fd5b50610484610eb2565b6040516104919190611aab565b60405180910390f35b3480156104a657600080fd5b506104af610eb8565b6040516104bc9190611b87565b60405180910390f35b3480156104d157600080fd5b506104da610ed0565b6040516104e79190611df0565b60405180910390f35b60004790506003548110610533576000600560006101000a81548160ff0219169083600181111561052457610523611ba2565b5b0217905550610531611049565b505b50565b60003411610579576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057090611e57565b60405180910390fd5b6105816104f0565b565b6000829050600082116105cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c290611e57565b60405180910390fd5b60011515600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151461065e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065590611ec3565b60405180910390fd5b600760008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482106106df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d690611f2f565b60405180910390fd5b6106eb81333085611381565b6106f4816114d9565b505050565b60076020528060005260406000206000915090505481565b6002805461071e90611f7e565b80601f016020809104026020016040519081016040528092919081815260200182805461074a90611f7e565b80156107975780601f1061076c57610100808354040283529160200191610797565b820191906000526020600020905b81548152906001019060200180831161077a57829003601f168201915b505050505081565b739c3c9283d3e44854697cd22d3faa240cfb03288981565b60086020528060005260406000206000915054906101000a900460ff1681565b60008060008060606000806000479050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600354600454836002600560009054906101000a900460ff16610bb882805461083290611f7e565b80601f016020809104026020016040519081016040528092919081815260200182805461085e90611f7e565b80156108ab5780601f10610880576101008083540402835291602001916108ab565b820191906000526020600020905b81548152906001019060200180831161088e57829003601f168201915b505050505092508062ffffff16905097509750975097509750975097505090919293949596565b60035481565b610bb881565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461096e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096590611ffb565b60405180910390fd5b600081905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016109ae9190611b87565b602060405180830381865afa1580156109cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ef9190612030565b905060008111610a34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2b906120a9565b60405180910390fd5b610a628330600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684611381565b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60096020528060005260406000206000915054906101000a900460ff1681565b73f2907853c5ed1a4964f7522646869d40ac154bb281565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b55576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4c90611ffb565b60405180910390fd5b80600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550686c6b935b8bbd400000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690836001811115610c4957610c48611ba2565b5b02179055506001600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610cef82600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461161a565b5050565b600560009054906101000a900460ff1681565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d98576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8f90611ffb565b60405180910390fd5b600047905060008111610de0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd7906120a9565b60405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1682604051610e28906120fa565b60006040518083038185875af1925050503d8060008114610e65576040519150601f19603f3d011682016040523d82523d6000602084013e610e6a565b606091505b50509050809250505090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60066020528060005260406000206000915090505481565b60045481565b73e592427a0aece92de3edee1f18e0157c0586156481565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000808473ffffffffffffffffffffffffffffffffffffffff1663095ea7b360e01b8585604051602401610f2992919061210f565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051610f939190612174565b6000604051808303816000865af19150503d8060008114610fd0576040519150601f19603f3d011682016040523d82523d6000602084013e610fd5565b606091505b5091509150818015611003575060008151148061100257508080602001905181019061100191906121b7565b5b5b611042576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161103990612230565b60405180910390fd5b5050505050565b60008047905060008111611092576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110899061229c565b60405180910390fd5b600060018111156110a6576110a5611ba2565b5b600560009054906101000a900460ff1660018111156110c8576110c7611ba2565b5b14611108576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ff90612308565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b15801561117057600080fd5b505af1158015611184573d6000803e3d6000fd5b50505050506000806000604051806101000160405280739c3c9283d3e44854697cd22d3faa240cfb03288973ffffffffffffffffffffffffffffffffffffffff16815260200173f2907853c5ed1a4964f7522646869d40ac154bb273ffffffffffffffffffffffffffffffffffffffff168152602001610bb862ffffff168152602001600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020014281526020018581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815250905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663414bf389836040518263ffffffff1660e01b81526004016112ce9190612406565b6020604051808303816000875af11580156112ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113119190612030565b9050739c3c9283d3e44854697cd22d3faa240cfb03288973ffffffffffffffffffffffffffffffffffffffff16817fd6f7043ce9bca28e8fbc1f59b32b0f3132c6c0796cfc25dbd3b3f1ce1799b7578760405161136e9190611aab565b60405180910390a3809550505050505090565b6000808573ffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b8686866040516024016113b893929190612422565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516114229190612174565b6000604051808303816000865af19150503d806000811461145f576040519150601f19603f3d011682016040523d82523d6000602084013e611464565b606091505b5091509150818015611492575060008151148061149157508080602001905181019061149091906121b7565b5b5b6114d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114c8906124a5565b60405180910390fd5b505050505050565b600081905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016115199190611b87565b602060405180830381865afa158015611536573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061155a9190612030565b9050600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548110611615576000600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083600181111561160557611604611ba2565b5b021790555061161383611649565b505b505050565b611645827f000000000000000000000000000000000000000000000000000000000000000083610ef4565b5050565b60008082905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161168a9190611b87565b602060405180830381865afa1580156116a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116cb9190612030565b905060008111611710576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611707906120a9565b60405180910390fd5b6000600181111561172457611723611ba2565b5b600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16600181111561178357611782611ba2565b5b146117c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117ba90612308565b60405180910390fd5b60008060006040518061010001604052808873ffffffffffffffffffffffffffffffffffffffff16815260200173f2907853c5ed1a4964f7522646869d40ac154bb273ffffffffffffffffffffffffffffffffffffffff168152602001610bb862ffffff168152602001600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020014281526020018581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815250905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663414bf389836040518263ffffffff1660e01b81526004016118f49190612406565b6020604051808303816000875af1158015611913573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119379190612030565b90508773ffffffffffffffffffffffffffffffffffffffff16817fd6f7043ce9bca28e8fbc1f59b32b0f3132c6c0796cfc25dbd3b3f1ce1799b757876040516119809190611aab565b60405180910390a3809650505050505050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006119c68261199b565b9050919050565b6119d6816119bb565b81146119e157600080fd5b50565b6000813590506119f3816119cd565b92915050565b6000819050919050565b611a0c816119f9565b8114611a1757600080fd5b50565b600081359050611a2981611a03565b92915050565b60008060408385031215611a4657611a45611996565b5b6000611a54858286016119e4565b9250506020611a6585828601611a1a565b9150509250929050565b600060208284031215611a8557611a84611996565b5b6000611a93848285016119e4565b91505092915050565b611aa5816119f9565b82525050565b6000602082019050611ac06000830184611a9c565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611b00578082015181840152602081019050611ae5565b60008484015250505050565b6000601f19601f8301169050919050565b6000611b2882611ac6565b611b328185611ad1565b9350611b42818560208601611ae2565b611b4b81611b0c565b840191505092915050565b60006020820190508181036000830152611b708184611b1d565b905092915050565b611b81816119bb565b82525050565b6000602082019050611b9c6000830184611b78565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028110611be257611be1611ba2565b5b50565b6000819050611bf382611bd1565b919050565b6000611c0382611be5565b9050919050565b611c1381611bf8565b82525050565b6000602082019050611c2e6000830184611c0a565b92915050565b600060e082019050611c49600083018a611b78565b611c566020830189611a9c565b611c636040830188611a9c565b611c706060830187611a9c565b8181036080830152611c828186611b1d565b9050611c9160a0830185611c0a565b611c9e60c0830184611a9c565b98975050505050505050565b600062ffffff82169050919050565b611cc281611caa565b82525050565b6000602082019050611cdd6000830184611cb9565b92915050565b6000611cee8261199b565b9050919050565b611cfe81611ce3565b82525050565b6000602082019050611d196000830184611cf5565b92915050565b60008115159050919050565b611d3481611d1f565b82525050565b6000602082019050611d4f6000830184611d2b565b92915050565b6000819050919050565b6000611d7a611d75611d708461199b565b611d55565b61199b565b9050919050565b6000611d8c82611d5f565b9050919050565b6000611d9e82611d81565b9050919050565b611dae81611d93565b82525050565b6000602082019050611dc96000830184611da5565b92915050565b6000611dda82611d81565b9050919050565b611dea81611dcf565b82525050565b6000602082019050611e056000830184611de1565b92915050565b7f496e73756666696369656e7420746f6b656e7300000000000000000000000000600082015250565b6000611e41601383611ad1565b9150611e4c82611e0b565b602082019050919050565b60006020820190508181036000830152611e7081611e34565b9050919050565b7f7468697320746f6b656e206973206e6f74206163636570746564000000000000600082015250565b6000611ead601a83611ad1565b9150611eb882611e77565b602082019050919050565b60006020820190508181036000830152611edc81611ea0565b9050919050565b7f616d6f756e7420697320746f6f206d7563680000000000000000000000000000600082015250565b6000611f19601283611ad1565b9150611f2482611ee3565b602082019050919050565b60006020820190508181036000830152611f4881611f0c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611f9657607f821691505b602082108103611fa957611fa8611f4f565b5b50919050565b7f796f7520617265206e6f7420746865206f776e65720000000000000000000000600082015250565b6000611fe5601583611ad1565b9150611ff082611faf565b602082019050919050565b6000602082019050818103600083015261201481611fd8565b9050919050565b60008151905061202a81611a03565b92915050565b60006020828403121561204657612045611996565b5b60006120548482850161201b565b91505092915050565b7f696e73756666696369656e742066756e64730000000000000000000000000000600082015250565b6000612093601283611ad1565b915061209e8261205d565b602082019050919050565b600060208201905081810360008301526120c281612086565b9050919050565b600081905092915050565b50565b60006120e46000836120c9565b91506120ef826120d4565b600082019050919050565b6000612105826120d7565b9150819050919050565b60006040820190506121246000830185611b78565b6121316020830184611a9c565b9392505050565b600081519050919050565b600061214e82612138565b61215881856120c9565b9350612168818560208601611ae2565b80840191505092915050565b60006121808284612143565b915081905092915050565b61219481611d1f565b811461219f57600080fd5b50565b6000815190506121b18161218b565b92915050565b6000602082840312156121cd576121cc611996565b5b60006121db848285016121a2565b91505092915050565b7f5341000000000000000000000000000000000000000000000000000000000000600082015250565b600061221a600283611ad1565b9150612225826121e4565b602082019050919050565b600060208201905081810360008301526122498161220d565b9050919050565b7f496e73756666696369656e742066756e64730000000000000000000000000000600082015250565b6000612286601283611ad1565b915061229182612250565b602082019050919050565b600060208201905081810360008301526122b581612279565b9050919050565b7f4e6f74204163686965766520476f616c00000000000000000000000000000000600082015250565b60006122f2601083611ad1565b91506122fd826122bc565b602082019050919050565b60006020820190508181036000830152612321816122e5565b9050919050565b612331816119bb565b82525050565b61234081611caa565b82525050565b61234f816119f9565b82525050565b61235e8161199b565b82525050565b6101008201600082015161237b6000850182612328565b50602082015161238e6020850182612328565b5060408201516123a16040850182612337565b5060608201516123b46060850182612328565b5060808201516123c76080850182612346565b5060a08201516123da60a0850182612346565b5060c08201516123ed60c0850182612346565b5060e082015161240060e0850182612355565b50505050565b60006101008201905061241c6000830184612364565b92915050565b60006060820190506124376000830186611b78565b6124446020830185611b78565b6124516040830184611a9c565b949350505050565b7f5354460000000000000000000000000000000000000000000000000000000000600082015250565b600061248f600383611ad1565b915061249a82612459565b602082019050919050565b600060208201905081810360008301526124be81612482565b905091905056fea2646970667358221220063e2c5238f5c23f820531eb01e062e8e9dfaa37a2c073e8556e5fe7689fc5f264736f6c63430008110033
    }