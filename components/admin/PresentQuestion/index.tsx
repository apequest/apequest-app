interface Option {
    id:number,
    option: string,
    istrue: boolean
}

interface Question {
    questionid: number,
    questiontext: string,
    imagehash: string | undefined
    options: Option[]
}



const PresentQuestion: React.FC<Question | any> = ({ question }) => {


    return (
        <div>
            Present Question
            {question &&
                (
                    <div>
                        {question.questionid}
                        <br />
                        {question.questiontext}
                        <br />
                        {question.imagehash}
                        <br />
                        {question.options}
                    </div>
                )
            }
        </div>
    )


}

export default PresentQuestion