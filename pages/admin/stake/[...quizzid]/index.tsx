import { useWeb3ModalNetwork, Web3Button } from '@web3modal/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useAccount } from 'wagmi'
import Select from "react-dropdown-select";
import { ChangeEvent } from 'react';
import TokenData from '../../../../utils/data';

interface Option {
  address: String;
  name: String;
}


export default function Stake() {
  const options: Option[] = TokenData.tokens;
  const { isConnected, address } = useAccount()
  const { selectedChain } = useWeb3ModalNetwork()

  const [token, setToken] = useState(options)

  const router = useRouter()

  const { quizzid } = router.query

  // console.log(quizzid?.at(0))
  const [amount, setAmount] = useState<Number>(0);

  console.log(token)





  return (
    <>
      <div>
        <div>
          Stake Page

          Stake Amount<br />
          <input type="number" onChange={(e) => setAmount(Number(e.target.value))} />

          <div>

            <Select labelField='name' valueField='address' options={options} onChange={(values) => setToken(values)} values={token} />

          </div>
          <div>

          </div>

        </div>

      </div>

    </>
  )
}

