import React from 'react'

export default function Addtokens() {
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
          htmlFor="montoDai"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Orden de pago en DAI
        </label>
        <input
          type="number"
          min="0"
          step="any"
          id="montoDai"
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
          Seleciona el token que depositarán
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
      //   disabled={!nombreEmpresa || !goalMatic}
        className={`text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80
                        ${
                          !false || !false
                            ? 'bg-blue-400 cursor-not-allowed'
                            : 'bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        }
                        `}
   
      
      >
        Crear Cuenta
      </button>
    </form>
  </div>


  )
}
