import { useRouter } from 'next/router'
import React, { useContext } from "react";
import { contractContext } from "../context/ContractContext";


export default function Welcome() {

    const router = useRouter()
    const {addresscontract, setAddresscontract} = useContext(contractContext)
    console.log("addresscontract===WELCOME ", addresscontract);
    const url = 'https://mumbai.polygonscan.com/address/'+addresscontract

    return (

    <div  className='my-32'>
            <div className='flex flex-col flex-wrap justify-center items-center mb-16 p-4'>
                <h5 className="text-xl font-bold text-center  dark:text-white">
                    Felicidades! ya puedes recibir Matic en la siguiente dirección:
                </h5>
                <div className="break-all">
                    <a href={url}  target="_blank">
                        <h5 className="text-xl font-bold text-center underline text-blue-500 dark:text-white">
                         {addresscontract}
                        </h5>
                    </a>
                </div>
            </div>

        <div className='flex justify-center '>

            
        <button 
            type="button"
            id="addtokens"
            onClick={()=>router.push("/addtokens")}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Agrega otro Token</button>
        <button 
            type="button"
            id="dasboard"
            onClick={()=>router.push("/dashboard")}
            className="text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Dashboard</button>  
        
        </div>



    </div>

  )
}
