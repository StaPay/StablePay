import React, { useContext } from "react";
import { dataContractFactory } from "../utils/dataContractFactory";
import { useAccount } from "wagmi";
import { useState, useEffect } from "react";
import { useContractWrite, usePrepareContractWrite,  } from "wagmi";
import { useToast } from "@chakra-ui/react";
import { parseEther} from 'viem'
import { useRouter } from "next/router";
import { usePublicClient } from 'wagmi'
import { contractContext } from "../context/ContractContext";

export default function crea() {
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [goalMatic, setGoalMatic] = useState(0);
  const { address } = useAccount();
  const router = useRouter()
  const toast = useToast();
  const publicClient = usePublicClient()
  const {addresscontract, setAddresscontract} =useContext(contractContext)


  
  const { config } = usePrepareContractWrite({
    address: dataContractFactory.addressContract.mumbai,
    abi: dataContractFactory.abi,
    functionName: "contructorContract",
    args: [nombreEmpresa, address, goalMatic],
  });



  const { data, isIdle, error, isSuccess, isLoading, writeAsync, write } = useContractWrite(config);



  console.log("data ===>", data);
  console.log("nombreEmpresa===>",nombreEmpresa)
  console.log("goalMatic===>",goalMatic)


  useEffect(() => {
    if (data) {
      toast({
        title: "",
        description: `Transacción en proceso \n  ${data.hash} \n espera a la confirmación de tu tx, suele tardar 30 segundos`,
        status: "info",
        duration: 15000,
        isClosable: true,
      });
      console.log("data ===>", data);
    }
  }, [data]);

  useEffect(() => {
    if (error) {

      // Buscar el índice de inicio del mensaje específico
      const startIndex = error.message.indexOf("Details:");
      console.log("startIndex   ===",startIndex+9)
      // Obtener el mensaje completo a partir del índice de inicio
      const specificMessage = error.message.substring(startIndex+9);

      toast({
        title: "Error",
        description: `${specificMessage}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.log("error ===>", specificMessage);
      console.log("ERROR COMPLETO ====>", error)
      console.log("ERROR STATUS ====>", error.status)
    }
  }, [error]);



  useEffect(() => {
    
      if((isSuccess && !error)&& data){

          async function getContract(_hash) {
    
            const transaction = await publicClient.waitForTransactionReceipt({ 
              hash:  _hash
            })
            
            const addrescontractBytes = transaction.logs[1].topics[2]

            console.log("addrescontractBytes.replace(0x000000000000000000000000, 0x====>", addrescontractBytes.replace("0x000000000000000000000000", "0x"))
            await setAddresscontract(addrescontractBytes.replace("0x000000000000000000000000", "0x"));

          }

          getContract(data.hash)
                 
     }
  
  }, [isSuccess])
  

  useEffect(() => {
    console.log("addrescontract ha cambiado a PUSHHHHH ====>", addresscontract);
    if (addresscontract) {
      router.push("/welcome")
    }
  }, [addresscontract]);



  return (
    <div>
      
      <form 
        className="flex flex-col items-stretch md:w-5/12 mx-auto sm:w-full"
        onSubmit={(e) => {{
            e.preventDefault();
            write()
                          }}    
            }>

        <div className="mb-6">
          <label
            htmlFor="nombreEmpresa"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nombre de tu empresa
          </label>
          <input
            type="text"
            id="nombreEmpresa"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Oxxo"
            onChange={(e) => setNombreEmpresa(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="goalMatic"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            ¿Cuánto Matic como máximo deseas que se almacene en el contrato
            inteligente?
          </label>
          <input
            type="number"
            min="0"
            step="any"
            id="goalMatic"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="0.001"
            onChange={(e) => setGoalMatic(parseEther((e.target.value).toString()))}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="stablecoins"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Seleciona una criptomoneda estable
          </label>

          <select
            name="stablecoins"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="DAI"
          >
            <option value="manzana">DAI</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={!nombreEmpresa || !goalMatic}
          className={`text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80
                          ${
                            !nombreEmpresa || !goalMatic
                              ? 'bg-blue-400 cursor-not-allowed'
                              : 'bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                          }`}
     //   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        
        >
          Crear Cuenta
        </button>
      </form>
    </div>
  );
}
