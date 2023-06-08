
import { fetchToken } from '@wagmi/core'

export default async function getNameToken(_address) {

 
  const token = await fetchToken({
    address: _address,
  })

  return token
}

