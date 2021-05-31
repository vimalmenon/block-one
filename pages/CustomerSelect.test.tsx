import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { CustomerModel } from '../model/customer'

import CustomerSelect from './index'

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      customerId: '12345',
    },
  }),
}))

jest.mock('../utils', () => ({
  onLinkNavigation: jest.fn(),
}))

describe('CustomerSelect Page', () => {
  test('CustomerSelect: Snapshot testing', () => {
    const customers: CustomerModel[] = [
      {
        prefix: 'Mr',
        name: 'test value',
        customerId: 12345,
        address: 'test Address',
        emailAddress: 'test.value@test.com',
        contactNo: '123-456-789',
      },
      {
        prefix: 'Mrs',
        name: 'test value 1',
        customerId: 12346,
        address: 'test Address1',
        emailAddress: 'test.value1@test.com',
        contactNo: '123-456-906',
      },
    ]

    const wrapper = shallow(<CustomerSelect customers={customers} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
