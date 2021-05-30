import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Select } from './'

describe('Select Testing', () => {
  test('Select: Snapshot testing', () => {
    const onChange = jest.fn()
    const items = [
      {
        name: 'one',
        value: 'one',
      },
      {
        name: 'two',
        value: 'two',
      },
    ]

    const wrapper = shallow(<Select items={items} nameProps="name" onChange={onChange} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  test('Select: Snapshot testing without nameProps', () => {
    const onChange = jest.fn()
    const items = [
      {
        name: 'one',
        value: 'one',
      },
      {
        name: 'two',
        value: 'two',
      },
    ]

    const wrapper = shallow(<Select items={items} onChange={onChange} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  test('Select: Testing Change Event', () => {
    const onChange = jest.fn()
    const items = [
      {
        name: 'one',
        value: 'one',
      },
      {
        name: 'two',
        value: 'two',
      },
    ]

    const wrapper = shallow(<Select items={items} nameProps="name" onChange={onChange} />)
    wrapper.find('select').simulate('change')
    expect(onChange).toHaveBeenCalled()
  })
})
