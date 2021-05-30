import { convertCurrency } from '../../../utils'
import { TableColumn } from '../../../model/common'

export const columns: TableColumn[] = [
  {
    header: 'No',
    accessor: 'no',
    template: ({ index }: any) => index + 1,
  },
  {
    header: 'Timestamp',
    accessor: 'timestamp',
  },
  {
    header: 'Action',
    accessor: 'action',
  },
  {
    header: 'Description',
    accessor: 'description',
  },
  {
    header: 'Amount',
    accessor: 'amount',
    template: ({ item }: any) => convertCurrency(item.amount),
  },
  {
    header: 'Currency',
    accessor: 'currency',
  },
]
