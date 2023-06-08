
import { dataContractFactory } from "../../utils/dataContractFactory";
import {dataContract} from "../../utils/dataContract"

import { getPublicClient, getAccount, readContract, writeContract, prepareWriteContract } from '@wagmi/core'


export default async function addToken(tokenAddress, amountGoalToken) {

  const publicClient = getPublicClient()
  const { address, isConnecting, isDisconnected } = getAccount();

  const addressStapay  = await readContract({
    address: dataContractFactory.addressContract.mumbai,
    abi: dataContractFactory.abi,
    functionName: "getContractsOfUsers",
    args: [address],
  });

  console.log("addressStapay=====> ",addressStapay);

  const {request } = await prepareWriteContract({
    address: addressStapay[0],
    abi: dataContract.abi,
    functionName: 'addToken',  
    args: [tokenAddress, amountGoalToken],
  })

  const writeResult = await writeContract(request)


  return writeResult

}

