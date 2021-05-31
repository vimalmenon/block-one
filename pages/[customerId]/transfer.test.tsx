import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { AccountModel } from '../../model/account'
import { CustomerModel } from '../../model/customer'
import { onLinkNavigation } from '../../utils'
import React from 'react'

import Transfer from './transfer'

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      customerId: '12345',
    },
  }),
}))

jest.mock('../../utils', () => ({
  onLinkNavigation: jest.fn(),
}))

describe('Transfer Page', () => {
  test('Transfer: Snapshot testing', () => {
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
    const wrapper = shallow(<Transfer customer={customer} accounts={accounts} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  test('Transfer: Snapshot testing with fromAccount', () => {
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
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(() => [accounts, jest.fn()])
      .mockImplementationOnce(() => [accounts[0], jest.fn()])
    const wrapper = shallow(<Transfer customer={customer} accounts={accounts} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  test('Transfer: Testing of Back button', () => {
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
    const wrapper = shallow(<Transfer customer={customer} accounts={accounts} />)
    wrapper.find('[data-testid="back"]').simulate('click')
    expect(onLinkNavigation).toHaveBeenCalled()
    expect(onLinkNavigation).toHaveBeenCalledWith(`/12345`)
  })
  test('Transfer: Testing of Transfer button', () => {
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
    const wrapper = shallow(<Transfer customer={customer} accounts={accounts} />)
    wrapper.find('[data-testid="transfer"]').simulate('click')
    expect(onLinkNavigation).toHaveBeenCalled()
    expect(onLinkNavigation).toHaveBeenCalledWith(`/12345`)
  })
})
