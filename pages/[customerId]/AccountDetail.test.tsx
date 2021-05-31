import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { AccountModel } from '../../model/account'
import { CustomerModel } from '../../model/customer'
import { onLinkNavigation , convertCurrency} from '../../utils'

import AccountDetail from './index'

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      customerId: '12345',
    },
  }),
}))

jest.mock('../../utils', () => ({
  onLinkNavigation: jest.fn(),
  convertCurrency:jest.fn()
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
  test('AccountDetail: Transfer Funds Button click', () => {
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
        customerId: 12345,
        accountNumber: '12233344',
        accountType: 'Saving Account',
        balance: 20000,
      },
    ]
    const wrapper = shallow(<AccountDetail customer={customer} accounts={accounts} />)
    wrapper.find('[data-testid="transfer-funds"]').simulate("click");
    expect(onLinkNavigation).toHaveBeenCalled();
    expect(onLinkNavigation).toHaveBeenCalledWith(`/12345/transfer`)
  })
  test('AccountDetail: Transfer Back Button click', () => {
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
        customerId: 12345,
        accountNumber: '12233344',
        accountType: 'Saving Account',
        balance: 20000,
      },
    ]
    const wrapper = shallow(<AccountDetail customer={customer} accounts={accounts} />)
    wrapper.find('[data-testid="back"]').simulate("click");
    expect(onLinkNavigation).toHaveBeenCalled();
    expect(onLinkNavigation).toHaveBeenCalledWith(`/`)
  })
  test('AccountDetail: convertCurrency utility method called', () => {
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
        customerId: 12345,
        accountNumber: '12233344',
        accountType: 'Saving Account',
        balance: 20000,
      },
    ]
    const wrapper = shallow(<AccountDetail customer={customer} accounts={accounts} />)
    expect(convertCurrency).toHaveBeenCalled();
    expect(convertCurrency).toHaveBeenCalledWith(20000)
  })
})
