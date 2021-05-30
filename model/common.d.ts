export type GenericMethodType<K> = (value: K) => void
export type GenericReturnMethodType<K, V> = (value: K) => V
export type GenericOnlyReturnMethodType<K> = () => K

export interface TableColumn {
  header: string
  accessor: string
  template?: any
}
