import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { BusinessLogo } from './'

describe('BusinessLogo Component', () => {
  test('BusinessLogo: Snapshot testing', () => {
    const wrapper = shallow(<BusinessLogo />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
