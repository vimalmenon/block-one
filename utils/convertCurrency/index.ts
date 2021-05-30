import { GenericReturnMethodType } from '../../model/common'

export const convertCurrency: GenericReturnMethodType<number, string> = (value: number) => {
  return Number(value.toFixed(2)).toLocaleString('en')
}
