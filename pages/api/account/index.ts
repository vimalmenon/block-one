import type { NextApiRequest, NextApiResponse } from 'next'
import { AccountModel } from '../../../model/account'

const customerAccountDetails: AccountModel[] = [
  {
    customerId: 12345,
    accountNumber: '123-456-789',
    accountType: 'Saving Account',
    balance: 20000,
  },
  {
    customerId: 12345,
    accountNumber: '123-456-788',
    accountType: 'Checking Account',
    balance: 10000,
  },
  {
    customerId: 12345,
    accountNumber: '123-456-788',
    accountType: 'Current Account',
    balance: 5000,
  },
  {
    customerId: 12345,
    accountNumber: '123-456-787',
    accountType: 'MPF Account',
    balance: 2000,
  },
  {
    customerId: 67890,
    accountNumber: '123-456-786',
    accountType: 'Saving Account',
    balance: 40000,
  },
  {
    customerId: 67890,
    accountNumber: '123-456-785',
    accountType: 'Checking Account',
    balance: 30000,
  },
  {
    customerId: 67890,
    accountNumber: '123-456-788',
    accountType: 'Current Account',
    balance: 8000,
  },
  {
    customerId: 67890,
    accountNumber: '123-456-784',
    accountType: 'MPF Account',
    balance: 3000,
  },
]

export default (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method === 'GET') {
    const { accountId } = req.query
    const selectedCustomer = customerAccountDetails.filter((customer) => {
      return customer.customerId.toString() === accountId
    })
    res.status(200).json(selectedCustomer)
  }
}
