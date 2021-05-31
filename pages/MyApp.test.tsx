import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Router } from 'next/router'
import MyApp from './_app'

jest.mock('../styles/globals.css', () => ({}))
jest.mock('tailwindcss/tailwind.css', () => ({}))
const Components = () => {
  return <div></div>
}
describe('MyApp Page', () => {
  test('MyApp: Snapshot testing', () => {
    const pageProps = {
      test: 'vimal',
    }
    const router = {} as Router

    const wrapper = shallow(<MyApp pageProps={pageProps} Component={Components} router={router} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
