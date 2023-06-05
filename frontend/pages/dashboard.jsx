import { useRouter } from 'next/router'
import React from 'react'



export default function Dashboard() {

  const router =useRouter()


  return (
    <div>

    <div className='flex justify-center '>

            


        <div className="inline-flex rounded-md shadow-sm" role="group">
              <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-700 
                   bg-transparent border border-blue-700 rounded-l-lg hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-2
                 focus:ring-blue-700 focus:bg-blue-700 focus:text-white dark:border-white dark:text-white dark:hover:text-white
                 dark:hover:bg-blue-700 dark:focus:bg-blue-700 shadow-md shadow-blue-500/50 dark:shadow-md dark:shadow-blue-800/80" >
                <svg aria-hidden="true" className="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12,22 L5,15 H11 V4 H13 V15 H19 L12,22 Z M3,2  V0 H3 V2 Z" clipRule="evenodd">

                    </path>
                </svg>
                Depositos
              </button>


              <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-700 
                   bg-transparent border border-blue-700 rounded-r-md hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-2
                 focus:ring-blue-700 focus:bg-blue-700 focus:text-white dark:border-white dark:text-white dark:hover:text-white
                 dark:hover:bg-blue-700 dark:focus:bg-blue-700 shadow-md shadow-blue-500/50 dark:shadow-md dark:shadow-blue-800/80" >
                <svg aria-hidden="true" className="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path ffillRule="evenodd" d="M19,13 H13V19H11V13H5L12,6L19,13Z M3,20H21V22H3V20Z" clipRule="evenodd">

                    </path>
                </svg>
                Swapss
              </button>

        </div>



    </div>


    <div className='flex justify-center mt-1'>
    <button 
            type="button"
            id="addtokens"
            onClick={()=>router.push("/crearOrden")}
            className="text-white bg-gradient-to-br
             from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300
             dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  
             font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
             Orden de Pago</button>


    </div>

    




    </div>
  )
}
