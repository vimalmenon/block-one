import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { AccountModel } from '../../model/account'
import { CustomerModel } from '../../model/customer'

import AccountDetail from './index'

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      customerId: '12345',
    },
  }),
}))

describe('AccountDetail Page', () => {
  test('AccountDetail: Snapshot testing', () => {
    const customer: CustomerModel = {
      prefix: 'Mr',
      name: 'test value',
      customerId: 12345,
      address: 'test Address',
      emailAddress: 'test.value@test.com',
      contactNo: '123-456-789',
    }

    const accounts: AccountModel[] = [
      {
        customerId: 1234,
        accountNumber: '12233344',
        accountType: 'Saving Account',
        balance: 20000,
      },
    ]
    const wrapper = shallow(<AccountDetail customer={customer} accounts={accounts} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
