import type { NextApiRequest, NextApiResponse } from 'next'
import { CustomerModel } from '../../../model/customer'

import { openDb } from '../../../database.setup'

export default async (req: NextApiRequest, res: NextApiResponse<CustomerModel[]>) => {
  if (req.method === 'GET') {
    const results = await (
      await openDb()
    ).all(
      'select prefix, name, customer_id as customerId, address, email_address as emailAddress, contact_no as contactNo from customers'
    )
    res.status(200).json(results)
  }
}
