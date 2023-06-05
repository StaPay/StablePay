export const dataContractFactory = { 
         addressContract: {
         mumbai:"0x97db4fE99af760322964Abe3174edA42Ad367e0b"
      },
    
         hashContract: {
         mumbai:"0x6f5e2264fd8b69e61778df2d0599f91d26b0e25e022020228d61a1109d14e4d3"
      },
    
         owner:'0x7cD315d4E6086B99b81533152cd577e8802779B7',
    
         abi: [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"addressContract","type":"address"},{"indexed":false,"internalType":"string","name":"title","type":"string"},{"indexed":false,"internalType":"uint256","name":"amountGoal","type":"uint256"}],"name":"retailStart","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"arraySCRetail","outputs":[{"internalType":"contract SwapToStable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_title","type":"string"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_amountGoal","type":"uint256"}],"name":"contructorContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllContracts","outputs":[{"internalType":"contract SwapToStable[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getContractsOfUsers","outputs":[{"internalType":"contract SwapToStable[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"users","outputs":[{"internalType":"contract SwapToStable","name":"","type":"address"}],"stateMutability":"view","type":"function"}],
    
         bytecode: 0x608060405234801561001057600080fd5b50613dfc806100206000396000f3fe60806040523480156200001157600080fd5b50600436106200005e5760003560e01c806318d3ce96146200006357806319ce827214620000855780634402bfbb14620000a557806354a02f9e14620000db578063ef4dc1c61462000111575b600080fd5b6200006d62000147565b6040516200007c91906200063e565b60405180910390f35b620000a360048036038101906200009d919062000858565b620001d7565b005b620000c36004803603810190620000bd9190620008d3565b6200038a565b604051620000d291906200063e565b60405180910390f35b620000f96004803603810190620000f3919062000905565b62000459565b6040516200010891906200095d565b60405180910390f35b6200012f60048036038101906200012991906200097a565b620004a8565b6040516200013e91906200095d565b60405180910390f35b60606000805480602002602001604051908101604052809291908181526020018280548015620001cd57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831162000182575b5050505050905090565b6000838383604051620001ea90620004e8565b620001f89392919062000a57565b604051809103906000f08015801562000215573d6000803e3d6000fd5b509050600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f0f465fc6162dbe551187afbf4b940d26bf8a4606974dfc41329fcea8430dae1586856040516200037c92919062000a9b565b60405180910390a350505050565b6060600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156200044d57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831162000402575b50505050509050919050565b600160205281600052604060002081815481106200047657600080fd5b906000526020600020016000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008181548110620004b957600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6132f78062000ad083390190565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006200056d62000567620005618462000522565b62000542565b62000522565b9050919050565b600062000581826200054c565b9050919050565b6000620005958262000574565b9050919050565b620005a78162000588565b82525050565b6000620005bb83836200059c565b60208301905092915050565b6000602082019050919050565b6000620005e182620004f6565b620005ed818562000501565b9350620005fa8362000512565b8060005b8381101562000631578151620006158882620005ad565b97506200062283620005c7565b925050600181019050620005fe565b5085935050505092915050565b600060208201905081810360008301526200065a8184620005d4565b905092915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620006cb8262000680565b810181811067ffffffffffffffff82111715620006ed57620006ec62000691565b5b80604052505050565b60006200070262000662565b9050620007108282620006c0565b919050565b600067ffffffffffffffff82111562000733576200073262000691565b5b6200073e8262000680565b9050602081019050919050565b82818337600083830152505050565b6000620007716200076b8462000715565b620006f6565b90508281526020810184848401111562000790576200078f6200067b565b5b6200079d8482856200074b565b509392505050565b600082601f830112620007bd57620007bc62000676565b5b8135620007cf8482602086016200075a565b91505092915050565b6000620007e58262000522565b9050919050565b620007f781620007d8565b81146200080357600080fd5b50565b6000813590506200081781620007ec565b92915050565b6000819050919050565b62000832816200081d565b81146200083e57600080fd5b50565b600081359050620008528162000827565b92915050565b6000806000606084860312156200087457620008736200066c565b5b600084013567ffffffffffffffff81111562000895576200089462000671565b5b620008a386828701620007a5565b9350506020620008b68682870162000806565b9250506040620008c98682870162000841565b9150509250925092565b600060208284031215620008ec57620008eb6200066c565b5b6000620008fc8482850162000806565b91505092915050565b600080604083850312156200091f576200091e6200066c565b5b60006200092f8582860162000806565b9250506020620009428582860162000841565b9150509250929050565b620009578162000588565b82525050565b60006020820190506200097460008301846200094c565b92915050565b6000602082840312156200099357620009926200066c565b5b6000620009a38482850162000841565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015620009e8578082015181840152602081019050620009cb565b60008484015250505050565b600062000a0182620009ac565b62000a0d8185620009b7565b935062000a1f818560208601620009c8565b62000a2a8162000680565b840191505092915050565b62000a4081620007d8565b82525050565b62000a51816200081d565b82525050565b6000606082019050818103600083015262000a738186620009f4565b905062000a84602083018562000a35565b62000a93604083018462000a46565b949350505050565b6000604082019050818103600083015262000ab78185620009f4565b905062000ac8602083018462000a46565b939250505056fe60a06040523480156200001157600080fd5b50604051620032f7380380620032f783398181016040528101906200003791906200054d565b826002908162000048919062000809565b5081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600381905550683635c9adc5dea000006004819055506001600560006101000a81548160ff02191690836001811115620000ca57620000c9620008f0565b5b021790555073e592427a0aece92de3edee1f18e0157c0586156473ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050739c3c9283d3e44854697cd22d3faa240cfb0328896000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200017e6004546200018760201b60201c565b50505062000ac6565b620001b5739c3c9283d3e44854697cd22d3faa240cfb03288960805183620001b860201b620010fb1760201c565b50565b6000808473ffffffffffffffffffffffffffffffffffffffff1663095ea7b360e01b8585604051602401620001ef92919062000941565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516200025b9190620009bb565b6000604051808303816000865af19150503d80600081146200029a576040519150601f19603f3d011682016040523d82523d6000602084013e6200029f565b606091505b5091509150818015620002d15750600081511480620002d0575080806020019051810190620002cf919062000a11565b5b5b62000313576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200030a9062000aa4565b60405180910390fd5b5050505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620003838262000338565b810181811067ffffffffffffffff82111715620003a557620003a462000349565b5b80604052505050565b6000620003ba6200031a565b9050620003c8828262000378565b919050565b600067ffffffffffffffff821115620003eb57620003ea62000349565b5b620003f68262000338565b9050602081019050919050565b60005b838110156200042357808201518184015260208101905062000406565b60008484015250505050565b6000620004466200044084620003cd565b620003ae565b90508281526020810184848401111562000465576200046462000333565b5b6200047284828562000403565b509392505050565b600082601f8301126200049257620004916200032e565b5b8151620004a48482602086016200042f565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620004da82620004ad565b9050919050565b620004ec81620004cd565b8114620004f857600080fd5b50565b6000815190506200050c81620004e1565b92915050565b6000819050919050565b620005278162000512565b81146200053357600080fd5b50565b60008151905062000547816200051c565b92915050565b60008060006060848603121562000569576200056862000324565b5b600084015167ffffffffffffffff8111156200058a576200058962000329565b5b62000598868287016200047a565b9350506020620005ab86828701620004fb565b9250506040620005be8682870162000536565b9150509250925092565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200061b57607f821691505b602082108103620006315762000630620005d3565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200069b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200065c565b620006a786836200065c565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620006ea620006e4620006de8462000512565b620006bf565b62000512565b9050919050565b6000819050919050565b6200070683620006c9565b6200071e6200071582620006f1565b84845462000669565b825550505050565b600090565b6200073562000726565b62000742818484620006fb565b505050565b5b818110156200076a576200075e6000826200072b565b60018101905062000748565b5050565b601f821115620007b957620007838162000637565b6200078e846200064c565b810160208510156200079e578190505b620007b6620007ad856200064c565b83018262000747565b50505b505050565b600082821c905092915050565b6000620007de60001984600802620007be565b1980831691505092915050565b6000620007f98383620007cb565b9150826002028217905092915050565b6200081482620005c8565b67ffffffffffffffff81111562000830576200082f62000349565b5b6200083c825462000602565b620008498282856200076e565b600060209050601f8311600181146200088157600084156200086c578287015190505b620008788582620007eb565b865550620008e8565b601f198416620008918662000637565b60005b82811015620008bb5784890151825560018201915060208501945060208101905062000894565b86831015620008db5784890151620008d7601f891682620007cb565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6200092a81620004cd565b82525050565b6200093b8162000512565b82525050565b60006040820190506200095860008301856200091f565b62000967602083018462000930565b9392505050565b600081519050919050565b600081905092915050565b600062000991826200096e565b6200099d818562000979565b9350620009af81856020860162000403565b80840191505092915050565b6000620009c9828462000984565b915081905092915050565b60008115159050919050565b620009eb81620009d4565b8114620009f757600080fd5b50565b60008151905062000a0b81620009e0565b92915050565b60006020828403121562000a2a5762000a2962000324565b5b600062000a3a84828501620009fa565b91505092915050565b600082825260208201905092915050565b7f5341000000000000000000000000000000000000000000000000000000000000600082015250565b600062000a8c60028362000a43565b915062000a998262000a54565b602082019050919050565b6000602082019050818103600083015262000abf8162000a7d565b9050919050565b60805161280062000af7600039600081816110d90152818161147e015281816118270152611aa401526128006000f3fe6080604052600436106101445760003560e01c80638d3a4efd116100b6578063d47b07ab1161006f578063d47b07ab1461045a578063d9c8d19414610485578063da665ddf146104b0578063eac1285b146104ed578063f8289b4214610518578063f887ea401461054357610153565b80638d3a4efd1461034a5780638da5cb5b146103735780639ef847371461039e578063a2f97bf5146103db578063af81c5b914610406578063c19d93fb1461042f57610153565b80634ef163e2116101085780634ef163e21461021e57806366991fe01461025b5780636af349e91461029857806371b71287146102c957806372f5d98a146102f457806381fff8a11461031f57610153565b80631b9265b81461015857806326962a47146101625780633c2c91ce1461018b5780634a79d50c146101c85780634d95cad9146101f357610153565b366101535761015161056e565b005b600080fd5b6101606105b4565b005b34801561016e57600080fd5b5061018960048036038101906101849190611c36565b610601565b005b34801561019757600080fd5b506101b260048036038101906101ad9190611c76565b610777565b6040516101bf9190611cb2565b60405180910390f35b3480156101d457600080fd5b506101dd61078f565b6040516101ea9190611d5d565b60405180910390f35b3480156101ff57600080fd5b5061020861081d565b6040516102159190611d8e565b60405180910390f35b34801561022a57600080fd5b5061024560048036038101906102409190611c76565b610835565b6040516102529190611e20565b60405180910390f35b34801561026757600080fd5b50610282600480360381019061027d9190611e3b565b610855565b60405161028f9190611d8e565b60405180910390f35b3480156102a457600080fd5b506102ad610894565b6040516102c09796959493929190611e68565b60405180910390f35b3480156102d557600080fd5b506102de61098f565b6040516102eb9190611cb2565b60405180910390f35b34801561030057600080fd5b50610309610995565b6040516103169190611efc565b60405180910390f35b34801561032b57600080fd5b5061033461099b565b6040516103419190611fd5565b60405180910390f35b34801561035657600080fd5b50610371600480360381019061036c9190611c76565b610a29565b005b34801561037f57600080fd5b50610388610bb2565b6040516103959190612018565b60405180910390f35b3480156103aa57600080fd5b506103c560048036038101906103c09190611c76565b610bd8565b6040516103d2919061204e565b60405180910390f35b3480156103e757600080fd5b506103f0610bf8565b6040516103fd9190611d8e565b60405180910390f35b34801561041257600080fd5b5061042d60048036038101906104289190611c36565b610c10565b005b34801561043b57600080fd5b50610444610efa565b6040516104519190611e20565b60405180910390f35b34801561046657600080fd5b5061046f610f0d565b60405161047c919061204e565b60405180910390f35b34801561049157600080fd5b5061049a61107d565b6040516104a791906120c8565b60405180910390f35b3480156104bc57600080fd5b506104d760048036038101906104d29190611c76565b6110a1565b6040516104e49190611cb2565b60405180910390f35b3480156104f957600080fd5b506105026110b9565b60405161050f9190611cb2565b60405180910390f35b34801561052457600080fd5b5061052d6110bf565b60405161053a9190611d8e565b60405180910390f35b34801561054f57600080fd5b506105586110d7565b6040516105659190612104565b60405180910390f35b600047905060035481106105b1576000600560006101000a81548160ff021916908360018111156105a2576105a1611da9565b5b02179055506105af611250565b505b50565b600034116105f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ee9061216b565b60405180910390fd5b6105ff61056e565b565b600082905060008211610649576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106409061216b565b60405180910390fd5b60011515600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146106dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d3906121d7565b60405180910390fd5b600760008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821061075d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075490612243565b60405180910390fd5b61076981333085611588565b610772816116e0565b505050565b60076020528060005260406000206000915090505481565b6002805461079c90612292565b80601f01602080910402602001604051908101604052809291908181526020018280546107c890612292565b80156108155780601f106107ea57610100808354040283529160200191610815565b820191906000526020600020905b8154815290600101906020018083116107f857829003601f168201915b505050505081565b739c3c9283d3e44854697cd22d3faa240cfb03288981565b60086020528060005260406000206000915054906101000a900460ff1681565b600a818154811061086557600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008060606000806000479050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600354600454836002600560009054906101000a900460ff16610bb88280546108ef90612292565b80601f016020809104026020016040519081016040528092919081815260200182805461091b90612292565b80156109685780601f1061093d57610100808354040283529160200191610968565b820191906000526020600020905b81548152906001019060200180831161094b57829003601f168201915b505050505092508062ffffff16905097509750975097509750975097505090919293949596565b60035481565b610bb881565b6060600a805480602002602001604051908101604052809291908181526020018280548015610a1f57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116109d5575b5050505050905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ab9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab09061230f565b60405180910390fd5b600081905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610af99190611d8e565b602060405180830381865afa158015610b16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3a9190612344565b905060008111610b7f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b76906123bd565b60405180910390fd5b610bad8330600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684611588565b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60096020528060005260406000206000915054906101000a900460ff1681565b73f2907853c5ed1a4964f7522646869d40ac154bb281565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ca0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c979061230f565b60405180910390fd5b80600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550686c6b935b8bbd400000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690836001811115610d9457610d93611da9565b5b021790555060001515600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151503610ead576001600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600a829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b610ef682600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611821565b5050565b600560009054906101000a900460ff1681565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610f9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f969061230f565b60405180910390fd5b600047905060008111610fe7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fde906123bd565b60405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168260405161102f9061240e565b60006040518083038185875af1925050503d806000811461106c576040519150601f19603f3d011682016040523d82523d6000602084013e611071565b606091505b50509050809250505090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60066020528060005260406000206000915090505481565b60045481565b73e592427a0aece92de3edee1f18e0157c0586156481565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000808473ffffffffffffffffffffffffffffffffffffffff1663095ea7b360e01b8585604051602401611130929190612423565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405161119a9190612488565b6000604051808303816000865af19150503d80600081146111d7576040519150601f19603f3d011682016040523d82523d6000602084013e6111dc565b606091505b509150915081801561120a575060008151148061120957508080602001905181019061120891906124cb565b5b5b611249576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124090612544565b60405180910390fd5b5050505050565b60008047905060008111611299576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611290906125b0565b60405180910390fd5b600060018111156112ad576112ac611da9565b5b600560009054906101000a900460ff1660018111156112cf576112ce611da9565b5b1461130f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113069061261c565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b15801561137757600080fd5b505af115801561138b573d6000803e3d6000fd5b50505050506000806000604051806101000160405280739c3c9283d3e44854697cd22d3faa240cfb03288973ffffffffffffffffffffffffffffffffffffffff16815260200173f2907853c5ed1a4964f7522646869d40ac154bb273ffffffffffffffffffffffffffffffffffffffff168152602001610bb862ffffff168152602001600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020014281526020018581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815250905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663414bf389836040518263ffffffff1660e01b81526004016114d5919061270b565b6020604051808303816000875af11580156114f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115189190612344565b9050739c3c9283d3e44854697cd22d3faa240cfb03288973ffffffffffffffffffffffffffffffffffffffff16817fd6f7043ce9bca28e8fbc1f59b32b0f3132c6c0796cfc25dbd3b3f1ce1799b757876040516115759190611cb2565b60405180910390a3809550505050505090565b6000808573ffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b8686866040516024016115bf93929190612727565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516116299190612488565b6000604051808303816000865af19150503d8060008114611666576040519150601f19603f3d011682016040523d82523d6000602084013e61166b565b606091505b5091509150818015611699575060008151148061169857508080602001905181019061169791906124cb565b5b5b6116d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116cf906127aa565b60405180910390fd5b505050505050565b600081905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016117209190611d8e565b602060405180830381865afa15801561173d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117619190612344565b9050600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054811061181c576000600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083600181111561180c5761180b611da9565b5b021790555061181a83611850565b505b505050565b61184c827f0000000000000000000000000000000000000000000000000000000000000000836110fb565b5050565b60008082905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016118919190611d8e565b602060405180830381865afa1580156118ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118d29190612344565b905060008111611917576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161190e906123bd565b60405180910390fd5b6000600181111561192b5761192a611da9565b5b600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16600181111561198a57611989611da9565b5b146119ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119c19061261c565b60405180910390fd5b60008060006040518061010001604052808873ffffffffffffffffffffffffffffffffffffffff16815260200173f2907853c5ed1a4964f7522646869d40ac154bb273ffffffffffffffffffffffffffffffffffffffff168152602001610bb862ffffff168152602001600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020014281526020018581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815250905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663414bf389836040518263ffffffff1660e01b8152600401611afb919061270b565b6020604051808303816000875af1158015611b1a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b3e9190612344565b90508773ffffffffffffffffffffffffffffffffffffffff16817fd6f7043ce9bca28e8fbc1f59b32b0f3132c6c0796cfc25dbd3b3f1ce1799b75787604051611b879190611cb2565b60405180910390a3809650505050505050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611bcd82611ba2565b9050919050565b611bdd81611bc2565b8114611be857600080fd5b50565b600081359050611bfa81611bd4565b92915050565b6000819050919050565b611c1381611c00565b8114611c1e57600080fd5b50565b600081359050611c3081611c0a565b92915050565b60008060408385031215611c4d57611c4c611b9d565b5b6000611c5b85828601611beb565b9250506020611c6c85828601611c21565b9150509250929050565b600060208284031215611c8c57611c8b611b9d565b5b6000611c9a84828501611beb565b91505092915050565b611cac81611c00565b82525050565b6000602082019050611cc76000830184611ca3565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611d07578082015181840152602081019050611cec565b60008484015250505050565b6000601f19601f8301169050919050565b6000611d2f82611ccd565b611d398185611cd8565b9350611d49818560208601611ce9565b611d5281611d13565b840191505092915050565b60006020820190508181036000830152611d778184611d24565b905092915050565b611d8881611bc2565b82525050565b6000602082019050611da36000830184611d7f565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028110611de957611de8611da9565b5b50565b6000819050611dfa82611dd8565b919050565b6000611e0a82611dec565b9050919050565b611e1a81611dff565b82525050565b6000602082019050611e356000830184611e11565b92915050565b600060208284031215611e5157611e50611b9d565b5b6000611e5f84828501611c21565b91505092915050565b600060e082019050611e7d600083018a611d7f565b611e8a6020830189611ca3565b611e976040830188611ca3565b611ea46060830187611ca3565b8181036080830152611eb68186611d24565b9050611ec560a0830185611e11565b611ed260c0830184611ca3565b98975050505050505050565b600062ffffff82169050919050565b611ef681611ede565b82525050565b6000602082019050611f116000830184611eed565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611f4c81611bc2565b82525050565b6000611f5e8383611f43565b60208301905092915050565b6000602082019050919050565b6000611f8282611f17565b611f8c8185611f22565b9350611f9783611f33565b8060005b83811015611fc8578151611faf8882611f52565b9750611fba83611f6a565b925050600181019050611f9b565b5085935050505092915050565b60006020820190508181036000830152611fef8184611f77565b905092915050565b600061200282611ba2565b9050919050565b61201281611ff7565b82525050565b600060208201905061202d6000830184612009565b92915050565b60008115159050919050565b61204881612033565b82525050565b6000602082019050612063600083018461203f565b92915050565b6000819050919050565b600061208e61208961208484611ba2565b612069565b611ba2565b9050919050565b60006120a082612073565b9050919050565b60006120b282612095565b9050919050565b6120c2816120a7565b82525050565b60006020820190506120dd60008301846120b9565b92915050565b60006120ee82612095565b9050919050565b6120fe816120e3565b82525050565b600060208201905061211960008301846120f5565b92915050565b7f496e73756666696369656e7420746f6b656e7300000000000000000000000000600082015250565b6000612155601383611cd8565b91506121608261211f565b602082019050919050565b6000602082019050818103600083015261218481612148565b9050919050565b7f7468697320746f6b656e206973206e6f74206163636570746564000000000000600082015250565b60006121c1601a83611cd8565b91506121cc8261218b565b602082019050919050565b600060208201905081810360008301526121f0816121b4565b9050919050565b7f616d6f756e7420697320746f6f206d7563680000000000000000000000000000600082015250565b600061222d601283611cd8565b9150612238826121f7565b602082019050919050565b6000602082019050818103600083015261225c81612220565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806122aa57607f821691505b6020821081036122bd576122bc612263565b5b50919050565b7f796f7520617265206e6f7420746865206f776e65720000000000000000000000600082015250565b60006122f9601583611cd8565b9150612304826122c3565b602082019050919050565b60006020820190508181036000830152612328816122ec565b9050919050565b60008151905061233e81611c0a565b92915050565b60006020828403121561235a57612359611b9d565b5b60006123688482850161232f565b91505092915050565b7f696e73756666696369656e742066756e64730000000000000000000000000000600082015250565b60006123a7601283611cd8565b91506123b282612371565b602082019050919050565b600060208201905081810360008301526123d68161239a565b9050919050565b600081905092915050565b50565b60006123f86000836123dd565b9150612403826123e8565b600082019050919050565b6000612419826123eb565b9150819050919050565b60006040820190506124386000830185611d7f565b6124456020830184611ca3565b9392505050565b600081519050919050565b60006124628261244c565b61246c81856123dd565b935061247c818560208601611ce9565b80840191505092915050565b60006124948284612457565b915081905092915050565b6124a881612033565b81146124b357600080fd5b50565b6000815190506124c58161249f565b92915050565b6000602082840312156124e1576124e0611b9d565b5b60006124ef848285016124b6565b91505092915050565b7f5341000000000000000000000000000000000000000000000000000000000000600082015250565b600061252e600283611cd8565b9150612539826124f8565b602082019050919050565b6000602082019050818103600083015261255d81612521565b9050919050565b7f496e73756666696369656e742066756e64730000000000000000000000000000600082015250565b600061259a601283611cd8565b91506125a582612564565b602082019050919050565b600060208201905081810360008301526125c98161258d565b9050919050565b7f4e6f74204163686965766520476f616c00000000000000000000000000000000600082015250565b6000612606601083611cd8565b9150612611826125d0565b602082019050919050565b60006020820190508181036000830152612635816125f9565b9050919050565b61264581611ede565b82525050565b61265481611c00565b82525050565b61266381611ba2565b82525050565b610100820160008201516126806000850182611f43565b5060208201516126936020850182611f43565b5060408201516126a6604085018261263c565b5060608201516126b96060850182611f43565b5060808201516126cc608085018261264b565b5060a08201516126df60a085018261264b565b5060c08201516126f260c085018261264b565b5060e082015161270560e085018261265a565b50505050565b6000610100820190506127216000830184612669565b92915050565b600060608201905061273c6000830186611d7f565b6127496020830185611d7f565b6127566040830184611ca3565b949350505050565b7f5354460000000000000000000000000000000000000000000000000000000000600082015250565b6000612794600383611cd8565b915061279f8261275e565b602082019050919050565b600060208201905081810360008301526127c381612787565b905091905056fea2646970667358221220ba9905e5ac374e33e3218faad824abca7c2c980e5d1ccafa5d590db86b8d702564736f6c63430008110033a2646970667358221220ab8c4e8c958befd9b8368d303b1a0bb8cd7092b42386d16624741a11a5ffc1a364736f6c63430008110033
    }