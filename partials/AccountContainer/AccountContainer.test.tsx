import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { AccountModel } from '../../model/account'

import { AccountContainer } from './'

describe('AccountContainer Testing', () => {
  test('AccountContainer : Snapshot testing', () => {
    const onAccountSelect = jest.fn()
    const accounts: AccountModel[] = [
      {
        customerId: 1234,
        accountNumber: '12233344',
        accountType: 'Saving Account',
        balance: 20000,
      },
    ]
    const wrapper = shallow(
      <AccountContainer
        title="From Account"
        onAccountSelect={onAccountSelect}
        accounts={accounts}
      />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  test('AccountContainer : Snapshot testing with selectedAccount', () => {
    const onAccountSelect = jest.fn()
    const accounts: AccountModel[] = [
      {
        customerId: 1234,
        accountNumber: '12233344',
        accountType: 'Saving Account',
        balance: 20000,
      },
    ]
    const selectedAccount: AccountModel = {
      customerId: 1234,
      accountNumber: '12233344',
      accountType: 'Saving Account',
      balance: 20000,
    }
    const wrapper = shallow(
      <AccountContainer
        title="From Account"
        onAccountSelect={onAccountSelect}
        accounts={accounts}
        selectedAccount={selectedAccount}
        isFromAccount={true}
      />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  test('AccountContainer : Snapshot testing with selectedAccount and transferAmount', () => {
    const onAccountSelect = jest.fn()
    const accounts: AccountModel[] = [
      {
        customerId: 1234,
        accountNumber: '12233344',
        accountType: 'Saving Account',
        balance: 20000,
      },
    ]
    const selectedAccount: AccountModel = {
      customerId: 1234,
      accountNumber: '12233344',
      accountType: 'Saving Account',
      balance: 20000,
    }
    const wrapper = shallow(
      <AccountContainer
        title="From Account"
        onAccountSelect={onAccountSelect}
        accounts={accounts}
        selectedAccount={selectedAccount}
        isFromAccount={false}
        transferAmount={2000}
      />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  test('AccountContainer : Snapshot testing Select change event', () => {
    const onAccountSelect = jest.fn()
    const accounts: AccountModel[] = [
      {
        customerId: 1234,
        accountNumber: '12233344',
        accountType: 'Saving Account',
        balance: 20000,
      },
    ]
    const selectedAccount: AccountModel = {
      customerId: 1234,
      accountNumber: '12233344',
      accountType: 'Saving Account',
      balance: 20000,
    }
    const wrapper = shallow(
      <AccountContainer
        title="From Account"
        onAccountSelect={onAccountSelect}
        accounts={accounts}
        selectedAccount={selectedAccount}
        isFromAccount={false}
        transferAmount={2000}
      />
    )
    wrapper.find('Select').simulate('change', { key: 'Change', target: { value: 'mock' } })
    expect(onAccountSelect).toHaveBeenCalled()
    expect(onAccountSelect).toHaveBeenCalledWith('mock')
  })
})
