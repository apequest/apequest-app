
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



    return (
        <div>
        </div>
    )


}

export default QuestionsList