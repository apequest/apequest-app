import type { NextApiRequest, NextApiResponse } from 'next'
import { REQ_METHODS } from '../../../../../utils'


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





export default async function index(req: NextApiRequest, res: NextApiResponse<Question[]>) {
    switch (req.method) {
        case REQ_METHODS.POST:
            return await questions(req, res);
    }
}

async function questions(req: NextApiRequest, res: NextApiResponse<Question[]>) {

    // IPFS + DB
    const data: Question[] = req.body

    

    res.status(200).json(data)

}