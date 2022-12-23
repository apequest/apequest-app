import type { NextApiRequest, NextApiResponse } from 'next'
import AdminUser from '../../../../models/admin/user';
import { REQ_METHODS } from '../../../../utils'
import { database } from '../../../../utils/db';







export default async function handle(req: NextApiRequest, res: NextApiResponse<any>) {
    await database()

    switch (req.method) {
        case REQ_METHODS.POST:
            return await handleuser(req, res);
    }
}

async function handleuser(req: NextApiRequest, res: NextApiResponse<any>) {

    let _res = await AdminUser.findOne({ walletAddress: req.body.address });

    if (!_res) {
        const value = req.body.selectedChain.id;
        const key = req.body.selectedChain.network;
        const _network = key + "," + value
        _res = await AdminUser.create({ walletAddress: req.body.address, networks: [_network] });
    } else {

        const value = req.body.selectedChain.id;
        const key = req.body.selectedChain.network;
        const _network = key + "," + value
        const networks = _res?.get('networks')
        let isActive = false;
        for (let i = 0; i < networks.length; i++) {
            if (networks[i].network == _network) {
                isActive = true;
            }
        }

        if (!isActive) {
            await AdminUser.updateOne({ _id: _res._id }, { $push: { networks: _network } });
        }

    }
    _res = await AdminUser.findOne({ walletAddress: req.body.address });

    return res.status(200).json({ _res })

}



