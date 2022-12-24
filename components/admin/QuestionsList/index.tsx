
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

interface Questions {
    questions: Question[] | undefined
}

const QuestionsList: React.FC<Questions> = ({ questions }) => {

    console.log(questions)

    return (
        <div>
            {questions?.map((question, index) => {
                return (
                    <div key={question.questionid}>
                        <div >
                            {question.questiontext}
                            {question.questionid}
                            {question.options.map((option: Option, index) => {
                                return (
                                    <div key={index}>
                                        <div key={option.id}>
                                            {option.option}
                                            {"  "}
                                            {option.istrue}
                                            {"  "}

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    )


}

export default QuestionsList