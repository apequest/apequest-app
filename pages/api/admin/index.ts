import type { NextApiRequest, NextApiResponse } from 'next'
import { REQ_METHODS } from '../../../utils'

type Data = {
    name: string
}


async function dummy(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    res.status(200).json({ name: 'test Doe' })
}


export default async function index(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case REQ_METHODS.DELETE:
            return await dummy(req, res);
        case REQ_METHODS.POST:
            return await dummy(req, res);
        case REQ_METHODS.DELETE:
            return await dummy(req, res);
        default:
            return await dummy(req, res);
    }



    res.status(200).json({ name: 'John Doe' })
}
