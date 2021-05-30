export interface TransactionModel {
  accountNumber: string
  timestamp: Date
  action: string
  description: string
  amount: number
  currency: 'HKD' | 'USD'
}
