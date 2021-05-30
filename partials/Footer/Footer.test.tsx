import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Footer } from './'

describe('Footer Partials', () => {
  test('Footer : Snapshot testing', () => {
    const wrapper = shallow(<Footer />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
