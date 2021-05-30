import { AccountModel } from '../../model/account'
import { CustomerModel } from '../../model/customer'

export interface AccountDetailProps {
  customer: CustomerModel
  accounts: AccountModel[]
}

export { AccountModel }
