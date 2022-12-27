import { useWeb3ModalNetwork, Web3Button } from '@web3modal/react'
import { useRouter } from 'next/router'
import { useAccount } from 'wagmi'

export default function Stake() {
  const { isConnected, address } = useAccount()
  const { selectedChain } = useWeb3ModalNetwork()
  const router = useRouter()

  const {quizzid} = router.query

  // console.log(quizzid?.at(0))

  

  return (
    <>
      <div>
        <div>
          Stake Page
        </div>

      </div>

    </>
  )
}

