import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { polygonMumbai, mainnet, polygon } from 'wagmi/chains'
import { SessionProvider } from "next-auth/react"


const projectId: string = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!

const chains = [mainnet, polygon, polygonMumbai]
const { provider } = configureChains(chains, [walletConnectProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: 'web3Modal', chains }),
  provider
})

export const ethereumClient = new EthereumClient(wagmiClient, chains)

export default function App({ Component, pageProps }: AppProps) {



  const { pathname } = useRouter()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Head>
          <link rel="manifest" href="/manifest.json" />
        </Head>

        {ready ? (
          <WagmiConfig client={wagmiClient}>
            <Component {...pageProps} />
          </WagmiConfig>
        ) : null}

        {pathname === '/custom' ? null : (
          <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        )}
      </SessionProvider>
    </>
  )
}