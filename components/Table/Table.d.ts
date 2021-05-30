import { GenericMethodType, TableColumn } from '../../model/common'

export interface FooterProps {
  value: string
  colSpan?: number
}

export interface TableProps {
  items: any[]
  columns: TableColumn[]
  footer?: FooterProps[]
  onRowClick?: GenericMethodType<any>
}

export interface TableRowProps {
  column: TableColumn
  item: any
  index: number
}

export { TableColumn }
