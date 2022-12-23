import { useState } from 'react'
import { useAccount } from 'wagmi'

import { AddQuestion, PresentQuestion, QuestionsList } from '../../../components';

export default function CreateQuizz() {
  const { isConnected, address } = useAccount()
  const [qcounter, setQcounter] = useState(1);  // present question counter
  const [ocounter, setOcounter] = useState(1);  // present option counter
  const [questions, setQuestions] = useState<Question[]>()
  const [question, setQuestion] = useState<Question>({ imagehash: "", questionid: 0, options: [], questiontext: "" })
  const [options, setOptions] = useState<Option[]>()
  const [option, setOption] = useState<Option>({ id: 0, istrue: false, option: "" })
  const [quizzname, setQuizzname] = useState<string>("")


  return (
    <>
      <div>
        New Quizz
        <div>
          <input type="text" onChange={(e) => setQuizzname(e.target.value)} placeholder='QuizzName' />
        </div>

        <br />
        <AddQuestion
          question={question}
          setQuestion={setQuestion}
          qcounter={qcounter}
          ocounter={ocounter}
          options={options}
          option={option}
          questions={questions}
          setQcounter={setQcounter}
          setOcounter={setOcounter}
          setQuestions={setQuestions}
          setOptions={setOptions}
          setOption={setOption}

        />
      </div>
      <div>

      </div>
      <div>
        <PresentQuestion question={question} />
      </div>
      <div>
        <QuestionsList questions={questions} />
      </div>
      <div>
        <button onClick={handleSave}>Save Questions</button>
      </div>

    </>
  )

  async function handleSave() {
    const req = await fetch('/api/admin/questions/add/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(questions),
    })
    const res = await req.json()
    console.log(res)

  }
}

interface Option {
  id: number,
  option: string,
  istrue: boolean
}

interface Question {
  questionid: number,
  questiontext: string,
  imagehash: string
  options: Option[]
}
