import { Web3Button, useWeb3ModalNetwork } from '@web3modal/react'
import { useAccount } from 'wagmi'
import { Dashboard } from '../../components'



export default function HomePage() {
  const { isConnected, address } = useAccount()
  const { selectedChain } = useWeb3ModalNetwork()




  // const chain_id: number | undefined = selectedChain?.id
  // const network: string | undefined = selectedChain?.network

  // if (network) {
  //   localStorage.setItem('present-network', network)
  // }


  return (
    <>
      <div>
        <div>
          {isConnected === false ?
            (
              <div>
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
