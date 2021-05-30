import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { CustomerDetail } from './'
import { CustomerModel } from '../../model/customer'

describe('CustomerDetail Component', () => {
  test('CustomerDetail: Snapshot testing', () => {
    const customer: CustomerModel = {
      prefix: 'Mr',
      name: 'test value',
      customerId: 12345,
      address: 'test Address',
      emailAddress: 'test.value@test.com',
      contactNo: '123-456-789',
    }
    const wrapper = shallow(<CustomerDetail customer={customer} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
