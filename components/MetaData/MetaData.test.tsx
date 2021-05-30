import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { MetaData } from '.'

describe('MetaData Component', () => {
  test('MetaData: Snapshot testing with title and Description', () => {
    const wrapper = shallow(<MetaData title="title" description="description" />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  test('MetaData: Snapshot testing with title', () => {
    const wrapper = shallow(<MetaData title="title" />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
