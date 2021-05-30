export interface TransactionModel {
  accountNumber: string
  timestamp: string
  action: string
  description: string
  amount: number
  currency: 'HKD' | 'USD'
}
