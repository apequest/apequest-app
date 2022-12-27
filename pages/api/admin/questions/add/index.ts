import type { NextApiRequest, NextApiResponse } from 'next'
import Question from '../../../../../models/admin/question'
import QuizModel from '../../../../../models/admin/quizz'
import { Answer, Question as IQuestion } from '../../../../../types/quizz'
import { REQ_METHODS } from '../../../../../utils'

import { Types } from "mongoose"
import Quizz from '../../../../../models/admin/quizz'
import AdminUser from '../../../../../models/admin/user'

interface IResponse {
    quizzid: string;
    error: boolean;
    errorMsg: string;
    data: [];
}



export default async function index(req: NextApiRequest, res: NextApiResponse<IResponse>) {
    switch (req.method) {
        case REQ_METHODS.POST:
            return await questions(req, res);
    }
}

async function questions(req: NextApiRequest, res: NextApiResponse<IResponse>) {

    let api_response: IResponse = { data: [], error: false, errorMsg: "", quizzid: "" };

    try {
        const quizzname: String = req.body.quizzname
        const questions: IQuestion[] = req.body.questions


        let questionIds = [];

        for (let i = 0; i < questions.length; i++) {
            let question: IQuestion = questions[i];
            let _response = await Question.create(question);
            questionIds.push(_response._id)
        }

        let _admin_ = await AdminUser.findOne({ walletAddress: req.body.address });

        let quizz_ = await Quizz.create({ title: quizzname, description: "", questions: questionIds, createdBy: _admin_?.id })
        api_response.quizzid = quizz_.id
        console.log(quizz_.id)
    } catch (error) {
        api_response.error = true;
        api_response.errorMsg = String(error)
    }
    

    res.status(200).json(api_response)
}

