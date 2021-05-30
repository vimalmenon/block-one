import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Label } from './'

describe('Label Component', () => {
  test('Label: Snapshot testing', () => {
    const wrapper = shallow(<Label>Test Data</Label>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
