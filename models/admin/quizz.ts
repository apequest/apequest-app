import { IQuiz, Question } from '../../types/quizz';

import { IAdminUser } from "../../types/user/admin"
import mongoose, { models, Schema, Types } from "mongoose";

import type { Model } from "mongoose";



const quizSchema = new mongoose.Schema<IQuiz>({
    title: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'IAdminUser',
        required: true
    },
    description: {
        type: String,
        required: false
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }],
    participantsIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'IAdminUser',
        required: false
    }],
    scores: [{
        userid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'IAdminUser'
        },
        score: {
            type: Number,
            default: 0
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Quizz: Model<IQuiz> = models.Quizz || mongoose.model("Quizz", quizSchema);
export default Quizz;
