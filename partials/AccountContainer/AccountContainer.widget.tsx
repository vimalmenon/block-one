import { Select, Label, Input } from '../../components'
import { AccountContainerProps } from './AccountContainer'
import { convertCurrency } from '../../utils'
import React from 'react'
import { GenericMethodType, GenericOnlyReturnMethodType } from '../../model/common'

export const AccountContainer: React.FC<AccountContainerProps> = ({
  title,
  accounts,
  onAccountSelect,
  selectedAccount,
  transferAmount,
  isFromAccount,
  setTransferAmount,
}) => {
  const onAmountUpdate: GenericMethodType<React.ChangeEvent<HTMLInputElement>> = (e) => {
    setTransferAmount && setTransferAmount(parseInt(e.target.value))
  }
  const onError: GenericOnlyReturnMethodType<boolean> = () => {
    return (selectedAccount?.balance || 0) < (transferAmount || 0) ? true : false
  }
  return (
    <div className="flex w-5/12 flex-col border shadow">
      <div className="flex h-20 text-3xl items-center justify-center">{title}</div>
      <div className="flex flex-col">
        <div className="w-full flex p-4">
          <div className="flex w-1/3">
            <Label>Select an account</Label>
          </div>
          <div className="flex w-2/3">
            <Select
              value={JSON.stringify(selectedAccount)}
              items={accounts}
              nameProps="accountNumber"
              onChange={(e) => onAccountSelect(e.target.value)}
            />
          </div>
        </div>
        {selectedAccount?.customerId ? (
          <>
            <div className="w-full flex p-4">
              <div className="flex w-1/3">
                <Label>Account details</Label>
              </div>
              <div className="flex w-2/3">{selectedAccount?.accountType}</div>
            </div>
            <div className="w-full flex p-4">
              <div className="flex w-1/3">
                <Label>Account balance</Label>
              </div>
              <div className="flex w-2/3">{convertCurrency(selectedAccount?.balance)}</div>
            </div>
          </>
        ) : null}
        {selectedAccount?.balance && isFromAccount ? (
          <div className="w-full flex p-4">
            <div className="flex w-1/3">
              <Label>Amount</Label>
            </div>
            <div className="flex w-2/3">
              <Input value={transferAmount} onChange={onAmountUpdate} error={onError()} />
            </div>
          </div>
        ) : null}
        {selectedAccount?.balance && !isFromAccount && transferAmount ? (
          <div className="w-full flex p-4">
            <div className="flex w-1/3">
              <Label>Updated balance</Label>
            </div>
            <div className="flex w-2/3">{selectedAccount?.balance + transferAmount}</div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
