import React, { createContext, useState } from 'react'


export const contractContext = createContext()
export const TokenAcceptedContext =createContext()
export const TableTokenContext = createContext()

export function ContractProvider({children}) {
  
    const [addresscontract, setAddresscontract] = useState("")
    const [listTokensAccepted, setListTokensAccepted] = useState([])
    const [tableTokenAccepted, setTableTokenAccepted] = useState([])

    return (
    <contractContext.Provider value={{addresscontract, setAddresscontract}}>
        <TokenAcceptedContext.Provider value={{listTokensAccepted, setListTokensAccepted}}>
        <TableTokenContext.Provider value={{tableTokenAccepted, setTableTokenAccepted}}>
            {children}
        </TableTokenContext.Provider>
        </TokenAcceptedContext.Provider>
    </contractContext.Provider>
  )
}
