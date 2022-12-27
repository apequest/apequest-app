import { Question as IQuestion } from '../../types/quizz'
import mongoose, { models, Schema, Types } from "mongoose";

import type { Model } from "mongoose";

const questionSchema = new mongoose.Schema<IQuestion>({
    qid: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    answers: [{
        id: {
            type: String,
            require: true
        },
        text: {
            type: String,
            required: true
        },
        correct: {
            type: Boolean,
            default: false
        }
    }],
    timeLimit: {
        type: Number,
        required: false
    },
    imageHash: {
        type: String,
        required: false
    }
});

// const Question = mongoose.model<Question>('Question', questionSchema);

// export default Question;
const Question: Model<IQuestion> = models.Question || mongoose.model("Question", questionSchema);
export default Question;
