import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { CustomerModel } from '../../../model/customer'
import { TransactionModel } from '../../../model/transaction'
import { onLinkNavigation } from '../../../utils'

import AccountSummary from './'

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      customerId: '12345',
    },
  }),
}))

jest.mock('../../../utils', () => ({
  onLinkNavigation: jest.fn(),
}))

describe('AccountSummary Page', () => {
  test('AccountSummary: Snapshot testing', () => {
    const customer: CustomerModel = {
      prefix: 'Mr',
      name: 'test value',
      customerId: 12345,
      address: 'test Address',
      emailAddress: 'test.value@test.com',
      contactNo: '123-456-789',
    }

    const transactions: TransactionModel[] = [
      {
        accountNumber: '122-333-445',
        timestamp: '12 Dec 2020',
        action: 'Debit',
        description: 'Test data 1',
        amount: 20000,
        currency: 'HKD',
      },
      {
        accountNumber: '122-333-445',
        timestamp: '12 Dec 2020',
        action: 'Debit',
        description: 'Test data 2',
        amount: 25000,
        currency: 'HKD',
      },
    ]
    const wrapper = shallow(<AccountSummary customer={customer} transactions={transactions} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  test('AccountSummary: Back button testing', () => {
    const customer: CustomerModel = {
      prefix: 'Mr',
      name: 'test value',
      customerId: 12345,
      address: 'test Address',
      emailAddress: 'test.value@test.com',
      contactNo: '123-456-789',
    }

    const transactions: TransactionModel[] = [
      {
        accountNumber: '122-333-445',
        timestamp: '12 Dec 2020',
        action: 'Debit',
        description: 'Test data 1',
        amount: 20000,
        currency: 'HKD',
      },
      {
        accountNumber: '122-333-445',
        timestamp: '12 Dec 2020',
        action: 'Debit',
        description: 'Test data 2',
        amount: 25000,
        currency: 'HKD',
      },
    ]
    const wrapper = shallow(<AccountSummary customer={customer} transactions={transactions} />)
    wrapper.find('Button').simulate('click')
    expect(onLinkNavigation).toHaveBeenCalled()
    expect(onLinkNavigation).toHaveBeenCalledWith(`/12345`)
  })
})
