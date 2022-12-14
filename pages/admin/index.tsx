import { useWeb3Modal, Web3Button } from '@web3modal/react'
import { useAccount } from 'wagmi'

export default function HomePage() {
  const { isConnected } = useAccount()
  const { open } = useWeb3Modal()

  return (
    <>
      <div className="container">

        <Web3Button />

      </div>

    </>
  )
}
