import type { NextApiRequest, NextApiResponse } from 'next'

import { openDb } from '../../../../database.setup'

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method === 'GET') {
    const { customerId } = req.query
    const result = await (
      await openDb()
    ).all(
      'SELECT prefix, name, customer_id as customerId, address as address, email_address as emailAddress,  contact_no as contactNo FROM customers WHERE customer_id = ? LIMIT 1',
      customerId
    )
    res.status(200).json(result[0])
  }
}
