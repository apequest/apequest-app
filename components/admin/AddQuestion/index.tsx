import { useEffect } from "react"

interface Option {
    id: number,
    option: string,
    istrue: boolean
}

interface Question {
    questionid: number,
    questiontext: string,
    imagehash: string | undefined
    options: Option[]
}

interface QuestionProps {
    question: Question | undefined,
    setQuestion: any,
    qcounter: number,
    ocounter: number,
    questions: Question[] | undefined,
    options: Option[] | undefined,
    option: Option,
    setQcounter: any,
    setOcounter: any,
    setQuestions: any,
    setOptions: any,
    setOption: any

}


const AddQuestion: React.FC<QuestionProps> = ({ question, questions, setQuestion, qcounter, ocounter, options, option, setQcounter, setOcounter, setQuestions, setOptions, setOption }) => {

    useEffect(() => {
        setQuestion({ ...question, questionid: qcounter })
        setOption({ ...option, id: ocounter })
    }, [question?.questiontext])

    return (
        <div>
            <input type="text" onChange={(e) => setQuestion({ ...question, questiontext: e.target.value })} placeholder="Question content" value={question?.questiontext} />
            <div>
                <div>
                    <input type="text" onChange={(e) => setOption({ ...option, option: e.target.value })} placeholder="add options" value={option?.option} />
                    Is Option Correct ?
                    <input type="checkbox" onChange={e => setOption({ ...option, istrue: !option?.istrue })} checked={option?.istrue} />
                    <button onClick={handleOptions}>Add option</button>
                </div>
                <button onClick={addNextQuestion}>Add Question {qcounter + 1}</button>

            </div>

        </div>
    )

    function handleOptions() {
        if (options) {
            setOptions([...options, { istrue: option.istrue, option: option.option }])
        } else {
            setOptions([{ istrue: option.istrue, option: option.option }])
        }
        setOcounter((prev: number) => prev + 1)
        setOption({ id: ocounter, option: "", istrue: false })
    }

    function addNextQuestion() {
        setQcounter((prev: number) => prev + 1)

        if (questions) {
            setQuestions([...questions, { questionid: question?.questionid, questiontext: question?.questiontext, imagehash: question?.imagehash, options: options }]);
        } else {
            setQuestions([{ questionid: question?.questionid, questiontext: question?.questiontext, imagehash: question?.imagehash, options: options }]);
        }
        setQuestion({ imagehash: "", questionid: 0, options: [], questiontext: "" });
        setOptions([])


    }


}

export default AddQuestion