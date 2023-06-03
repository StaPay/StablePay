import { useRouter } from 'next/router'
import React from 'react'


export default function Welcome() {

    const router = useRouter()

    return (

    <div  className='my-32'>
        <div className='flex justify-center mb-16'>
            <h5 class="text-xl font-bold dark:text-white">
                Felicidades! ya puedes recibir Matic en la siguiente dirección:
            </h5>
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
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Dashboard</button>  
        
        </div>
    </div>

  )
}
