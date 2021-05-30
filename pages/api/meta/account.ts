import type { NextApiRequest, NextApiResponse } from 'next';
import {AccountParams} from "../../../model/account";

import {openDb} from "../../../database.setup";

export default async (req: NextApiRequest, res: NextApiResponse<AccountParams[]>) => {
  if (req.method==="GET") {
    const results = await (await openDb()).all("select customer_id as customerId,account_number as accountNo  from accounts");
    const params:AccountParams[] = []
    results.forEach((result) => {
      params.push({
        customerId: result.customerId.toString(),
        accountNo: result.accountNo
      });
    });
    res.status(200).json(params)
  }
}