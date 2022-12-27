
// interface Option {
//     id: number,
//     option: string,
//     correct: boolean
// }

// interface Question {
//     questionid: number,
//     questiontext: string,
//     imagehash: string | undefined
//     options: Option[]
// }

import { Answer, Question } from "../../../types/quizz"

interface Questions {
    questions: Question[] | undefined
}

const QuestionsList: React.FC<Questions> = ({ questions }) => {

    console.log(questions)

    return (
        <div>
            {questions?.map((question, index) => {
                return (
                    <div key={index}>
                        <div >
                            {question.text}
                            {question.qid}
                            {question.answers.map((answer: Answer, _index) => {
                                return (
                                    <div key={_index}>
                                        <div key={answer.id}>
                                            {answer.text}
                                            {"  "}
                                            {answer.correct}
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