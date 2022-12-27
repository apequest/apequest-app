import { useEffect } from "react"
import { Question, Answer } from "../../../types/quizz"




interface QuestionProps {
    question: Question | undefined,
    setQuestion: any,
    qcounter: number,
    ocounter: number,
    questions: Question[] | undefined,
    answers: Answer[] | undefined,
    answer: Answer,
    setQcounter: any,
    setOcounter: any,
    setQuestions: any,
    setAnswers: any,
    setAnswer: any

}


const AddQuestion: React.FC<QuestionProps> = ({ question, questions, setQuestion, qcounter, ocounter, answers, answer, setQcounter, setOcounter, setQuestions, setAnswers, setAnswer }) => {

    useEffect(() => {
        setQuestion({ ...question, qid: qcounter })
        setAnswer({ ...answer, id: ocounter })
    }, [question?.text])

    return (
        <div>
            <input type="text" onChange={(e) => setQuestion({ ...question, text: e.target.value })} placeholder="Question content" value={question?.text} />
            <div>
                <div>
                    <input type="text" onChange={(e) => setAnswer({ ...answer, text: e.target.value })} placeholder="add options" value={answer?.text} />
                    Is Option Correct ?
                    <input type="checkbox" onChange={e => setAnswer({ ...answer, correct: !answer?.correct })} checked={answer?.correct} />
                    <button onClick={handleOptions}>Add option</button>
                </div>
                <button onClick={addNextQuestion}>Save Question {qcounter}</button>

            </div>

        </div>
    )

    function handleOptions() {
        if (answers) {
            setAnswers([...answers, { correct: answer.correct, text: answer.text }])
        } else {
            setAnswers([{ correct: answer.correct, text: answer.text }])
        }
        setOcounter((prev: number) => prev + 1)
        setAnswer({ id: ocounter, text: "", correct: false })
    }

    function addNextQuestion() {
        setQcounter((prev: number) => prev + 1)

        if (questions) {
            setQuestions([...questions, { qid: question?.qid, text: question?.text, imageHash: question?.imageHash, answers: answers }]);
        } else {
            setQuestions([{ qid: question?.qid, text: question?.text, imageHash: question?.imageHash, answers: answers }]);
        }
        setQuestion({ imageHash: "", qid: 0, answers: [], text: "" });
        setAnswers([])

    }

}

export default AddQuestion