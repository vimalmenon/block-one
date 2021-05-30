import type { NextApiRequest, NextApiResponse } from 'next';
import {AccountModel} from "../../../model/account";

import {openDb} from "../../../database.setup";

export default async (req: NextApiRequest, res: NextApiResponse<AccountModel[]>) => {
    if (req.method ==="GET") {
        const {customerId, transfer} = req.query;
        let result;
        if (transfer) {
            result = await (await openDb()).all('SELECT customer_id as customerId, account_number as accountNumber, account_type as accountType, balance FROM accounts WHERE customer_id = ? and account_type IN ("Saving Account", "Checking Account")', customerId);
        } else {
            result = await (await openDb()).all('SELECT customer_id as customerId, account_number as accountNumber, account_type as accountType, balance FROM accounts WHERE customer_id = ?', customerId);
        }

        res.status(200).json(result);
    }
}