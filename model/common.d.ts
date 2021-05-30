export type GenericMethodType<K> = (value: K) => void
export type GenericReturnMethodType<K, V> = (value: K) => V

export interface TableColumn {
  header: string
  accessor: string
  template?: any
}
