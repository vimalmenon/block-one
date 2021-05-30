import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Container } from './'

describe('Container Testing', () => {
  test('Container : Snapshot testing', () => {
    const wrapper = shallow(
      <Container>
        <div>content</div>
      </Container>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
