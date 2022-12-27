import { useRouter } from 'next/router';
import { useState } from 'react'
import { useAccount } from 'wagmi'

import { AddQuestion, PresentQuestion, QuestionsList } from '../../../components';
import { Answer, Question } from '../../../types/quizz';

export default function CreateQuizz() {
  const { isConnected, address } = useAccount()
  const [qcounter, setQcounter] = useState(1);  // present question counter
  const [ocounter, setOcounter] = useState(1);  // present option counter
  const router = useRouter()
  const [questions, setQuestions] = useState<Question[]>()
  const [question, setQuestion] = useState<Question>({ imageHash: "", qid: 0, answers: [], text: "" })
  const [answers, setAnswers] = useState<Answer[]>()
  const [answer, setAnswer] = useState<Answer>({ id: 0, correct: false, text: "" })
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
          answers={answers}
          answer={answer}
          questions={questions}
          setQcounter={setQcounter}
          setOcounter={setOcounter}
          setQuestions={setQuestions}
          setAnswers={setAnswers}
          setAnswer={setAnswer}
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
      body: JSON.stringify({ questions, quizzname, address })
    })
    const res = await req.json()
    console.log(res)
    if (res.error) {
      alert('technical Error')
    } else {
      router.push(`/admin/stake/${res.quizzid}`)
    }
  }
}
