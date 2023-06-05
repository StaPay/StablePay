import React, { createContext, useState } from 'react'


export const contractContext = createContext()

export function ContractProvider({children}) {
  
    const [addresscontract, setAddresscontract] = useState("")
  
    return (
    <contractContext.Provider value={{addresscontract, setAddresscontract}}>
        {children}
    </contractContext.Provider>
  )
}
