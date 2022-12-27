import { useWeb3ModalNetwork, Web3Button } from '@web3modal/react'
import { useEffect } from 'react'
import { useAccount } from 'wagmi'

import { Dashboard } from '../../components'

export default function HomePage() {
  const { isConnected, address } = useAccount()
  const { selectedChain } = useWeb3ModalNetwork()



  useEffect(() => {

    if (isConnected && selectedChain) {
      handleApi();
    }

  }, [isConnected])

  async function handleApi() {

    const req = await fetch('/api/admin/user/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isConnected, address, selectedChain }),
    })
    const res = await req.json()
    // need to handle
    console.log(res)

  }

  

  return (
    <>
      <div>
        <div>
          {isConnected === false ?
            (
              <div >
                <Web3Button label='Connect to Wallet' />
              </div>
            ) :
            (
              <div>
                <Dashboard address={address} />
              </div>
            )
          }
        </div>

      </div>

    </>
  )
}


  // const chain_id: number | undefined = selectedChain?.id
  // const network: string | undefined = selectedChain?.network

  // if (network) {
  //   localStorage.setItem('present-network', network)
  // }
