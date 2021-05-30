import type { NextApiRequest, NextApiResponse } from 'next';
import {TransactionModel} from "../../../../model/transaction";

import {openDb} from "../../../../database.setup";


export default async (req: NextApiRequest, res: NextApiResponse<TransactionModel[]>) => {
    if (req.method ==="GET") {
        const {accountNo} = req.query;
        const result = await (await openDb()).all('SELECT account_number as accountNumber,timestamp,action, description, amount, currency FROM transactions WHERE account_number = ?', accountNo);
        res.status(200).json(result);
    } 
}