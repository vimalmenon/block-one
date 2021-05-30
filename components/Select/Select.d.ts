import { GenericMethodType } from '../../model/common'

export interface SelectProps {
  items: any[]
  nameProps?: string
  onChange: GenericMethodType<React.ChangeEvent<HTMLSelectElement>>
  value?: string
}
