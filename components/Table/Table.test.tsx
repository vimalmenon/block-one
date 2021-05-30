import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Table, TableFooter, TableRow } from './'

describe('Table Component', () => {
  test('Table: Snapshot testing with Footer', () => {
    const columns = [
      {
        header: 'Column 1',
        accessor: 'one',
        templete: ({ index }: any) => index + 1,
      },
      {
        header: 'Column 2',
        accessor: 'two',
      },
    ]
    const items = [
      {
        one: 1,
        two: 'First Row',
      },
      {
        one: 2,
        two: 'Second Row',
      },
    ]
    const footer = [
      {
        value: 'This is footer 1',
        colSpan: 2,
      },
      {
        value: 'This is footer 2',
      },
    ]
    const wrapper = shallow(<Table columns={columns} items={items} footer={footer} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  test('Table: Snapshot testing without Footer', () => {
    const columns = [
      {
        header: 'Column 1',
        accessor: 'one',
        templete: ({ index }: any) => index + 1,
      },
      {
        header: 'Column 2',
        accessor: 'two',
      },
    ]
    const items = [
      {
        one: 1,
        two: 'First Row',
      },
      {
        one: 2,
        two: 'Second Row',
      },
    ]
    const wrapper = shallow(<Table columns={columns} items={items} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  test('Table: Table Row click event Testing', () => {
    const columns = [
      {
        header: 'Column 1',
        accessor: 'one',
        templete: ({ index }: any) => index + 1,
      },
      {
        header: 'Column 2',
        accessor: 'two',
      },
    ]
    const items = [
      {
        one: 1,
        two: 'First Row',
      },
      {
        one: 2,
        two: 'Second Row',
      },
    ]
    const onRowClick = jest.fn()
    const wrapper = shallow(<Table columns={columns} items={items} onRowClick={onRowClick} />)
    wrapper.find('tr').at(1).simulate('click')
    expect(onRowClick).toHaveBeenCalled()
  })
  test('TableFooter: Snapshot Testing', () => {
    const footer = [
      {
        value: 'This is footer 1',
        colSpan: 2,
      },
      {
        value: 'This is footer 2',
      },
    ]
    const wrapper = shallow(<TableFooter footers={footer} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  test('TableRow: Snapshot Testing with template', () => {
    const column = {
      header: 'Column 1',
      accessor: 'one',
      templete: ({ index }: any) => index + 1,
    }
    const item = {
      one: 1,
      two: 'First Row',
    }
    const wrapper = shallow(<TableRow column={column} item={item} index={1} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  test('TableRow: Snapshot Testing without template', () => {
    const column = {
      header: 'Column 1',
      accessor: 'one',
    }
    const item = {
      one: 1,
      two: 'First Row',
    }
    const wrapper = shallow(<TableRow column={column} item={item} index={1} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
