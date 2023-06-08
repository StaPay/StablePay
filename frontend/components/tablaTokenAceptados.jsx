import React, { useState, useEffect, useContext } from 'react'
import {listTokens} from "../pages/api/getListTokensAccepted";
import getNameToken from "../pages/api/getNameToken";
import { useAccount } from 'wagmi';
import { TokenAcceptedContext } from "../context/ContractContext";
import { TableTokenContext } from "../context/ContractContext";

export default function TablaTokenAceptados() {

    const {listTokensAccepted, setListTokensAccepted} = useContext(TokenAcceptedContext)

    const {tableTokenAccepted, setTableTokenAccepted} = useContext(TableTokenContext)

    // console.log("listTokensAccepted AQUIIIII", listTokensAccepted);

    // async function name() {
    //     console.log("XXXXXXXXXXXXXXXXXX==> ", await getListTokensAccepted(address));    
    // }
   
    // async function listTokens() {
    //     const list = await getListTokensAccepted()
    //     setListTokensAccepted(list)
    //     console.log("TABLA  1 list ==>", listTokensAccepted);

    //     const tableToken = await Promise.all(list.map(async (element, index) => {
    //         const token = await getNameToken(element);
    //         return [token.name, token.symbol, element];
    //       }));
    //       console.log("TABLETOKEN 2 tableToken ====>",tableToken);
    //       setTableTokenAccepted(tableToken)
    // }
    console.log("listAddressToken  ==>>>", listTokensAccepted);   
    console.log("tableTokenAccepted  ==>>>", tableTokenAccepted);

    useEffect(() => {
        if(listTokensAccepted.length==0){
            async function list() {
                const {listAddressToken, tableToken} = await listTokens()
                setListTokensAccepted(listAddressToken)
                setTableTokenAccepted(tableToken)
    
            }
            list()
        }
    }, [listTokensAccepted,])




    console.log("TABLETOKEN 3 tableTokenAccepted====>",tableTokenAccepted);

    console.log("TABLA 3 listTokensAccepted  ==>", listTokensAccepted);
    

    let nameCripto
    let simbolCripto
    let urlLogo=(nameCripto, simbolCripto) => "https://cryptologos.cc/logos/" + nameCripto + "-" + simbolCripto + "-logo.png?v=025"


  return (
    <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Our products
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Token
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Simbolo
                        </th>

                        <th scope="col" className="px-6 py-3">
                            
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Eliminar</span>
                        </th>
                    </tr>
                </thead>
                <tbody>


                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Matic
                        </th>
                        <td className="px-6 py-4">
                            Matic
                        </td>
                        <td className="px-6 py-4">
                           <img className='h-6' src='https://cryptologos.cc/logos/polygon-matic-logo.svg?v=025'></img>
                        </td>
                        <td className="px-6 py-4">
                            token nativo
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
                        </td>
                    </tr>

        
                    {tableTokenAccepted.map((token, index)=>(
                        
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {token[0]}
                        </th>
                        <td className="px-6 py-4">
                        {token[1]}
                        </td>
                        <td className="px-6 py-4">
                           <img className='h-6' src={urlLogo(token[0],token[1])}></img>
                        </td>
                        <td className="px-6 py-4">
                        {token[2]}
                        {urlLogo(token[0],token[1])}
                        </td>
                        
                        <td className="px-6 py-4 text-right">
                            <a  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                        </td>
                    </tr>
                    ))}

                </tbody>
            </table>
        </div>

    </div>
  )
}
