import { dataContractFactory } from "../../utils/dataContractFactory";
import { dataContract } from "../../utils/dataContract";
import {
  getPublicClient,
  getAccount,
  readContract,
  writeContract,
  prepareWriteContract,
} from "@wagmi/core";
import getNameToken from "./getNameToken";

export async function getListTokensAccepted() {
  const { address } = getAccount();
  console.log("address=====> ", address);

  console.log(
    "dataContractFactory.addressContract.mumbai ==> ",
    dataContractFactory.addressContract.mumbai
  );

  const addressStapayList = await readContract({
    address: dataContractFactory.addressContract.mumbai,
    abi: dataContractFactory.abi,
    functionName: "getContractsOfUsers",
    args: [address],
  });
  console.log("ADDRESS: " + addressStapayList[0]);
  const tokenAcceptedList = await readContract({
    address: addressStapayList[0],
    abi: dataContract.abi,
    functionName: "getListTokensAcepted",
  });

  console.log("tokenAcceptedList=====> ", tokenAcceptedList);

  return tokenAcceptedList;
}



export async function listTokens() {
  const listAddressToken = await getListTokensAccepted();
  const tableToken = await Promise.all(
    listAddressToken.map(async (element, index) => {
      const token = await getNameToken(element);
      return [token.name, token.symbol, element];
    })
  );
  console.log("listAddressToken FROM FUCTION ====>", listAddressToken);
  console.log("tableToken FROM FUCTION ====>", tableToken);
  return { listAddressToken, tableToken };
}
