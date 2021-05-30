import { CustomerModel } from '../../../model/customer'
import { TransactionModel } from '../../../model/transaction'

export interface AccountSummaryProps {
  customer: CustomerModel
  transactions: TransactionModel[]
}
