export interface IQuiz {
    _id?: string;
    title: string;
    description?: string;
    questions: Question[];
    participantsIds: string[];
    scores: Score[];
    createdAt?: Date;
    createdBy?: string;
}

export interface Question {
    _id?: string;
    qid: number;
    text: string;
    answers: Answer[];
    timeLimit?: number;
    imageHash: string;
}


export interface Score {
    userid: string;
    score: number;
}

export interface Answer {
    id: number,
    text: string,
    correct: boolean
}
