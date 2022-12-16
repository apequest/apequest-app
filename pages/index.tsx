import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { signIn, signOut, useSession, } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession()

  console.log(session)


  return (

    <div>

      <Link href="/admin">Admin</Link>

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
