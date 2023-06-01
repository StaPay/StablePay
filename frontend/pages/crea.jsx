import React from 'react'
import {dataContractFactory} from "../utils/dataContractFactory.ts"

export default function crea() {









  return (
    <div>
    <form className="flex flex-col items-stretch md:w-5/12 mx-auto sm:w-full">
      <div className="mb-6">
        <label htmlFor="nombreEmpresa" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Nombre de tu empresa
        </label>
        <input 
          type="text"
          id="nombreEmpresa"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Oxxo"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="goalMatic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          ¿Cuánto Matic como máximo deseas que se almacene en el contrato inteligente?
        </label>
        <input
          type="number"
          min="0"
          step="any"
          id="goalMatic"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="0.001"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="stablecoins" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Crear Cuenta
      </button>
    </form>
  </div>
  )
}
