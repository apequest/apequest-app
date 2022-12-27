import { useWeb3Modal, Web3Button } from '@web3modal/react'
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import { useEffect } from 'react';
import { useAccount } from 'wagmi'

export default function Home() {
  const { data: session, status } = useSession()
  const { isConnected } = useAccount()
  const { open } = useWeb3Modal()


  useEffect(() => {
    if (status == "authenticated") {

    }
  }, [status])


  return (

    <div>

      <Link href="/admin">Admin</Link>
      <Web3Button />

      {session ?
        (
          <div>Logout
            <button onClick={(e) => signOut()}>Signout</button>
          </div>
        ) :
        (

          <div>Login
            <br />
            <button onClick={(e) => signIn()}>Sign in</button>
          </div>

        )

      }


    </div >
  )
}
