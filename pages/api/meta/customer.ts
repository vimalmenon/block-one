import type { NextApiRequest, NextApiResponse } from 'next'
import { CustomerParams } from '../../../model/customer'

import { openDb } from '../../../database.setup'

export default async (req: NextApiRequest, res: NextApiResponse<CustomerParams[]>) => {
  if (req.method === 'GET') {
    const results = await (await openDb()).all('select customer_id as customerId FROM accounts')
    const params: CustomerParams[] = []
    results.forEach((result) => {
      params.push({
        customerId: result.customerId.toString(),
      })
    })
    res.status(200).json(params)
  }
}
