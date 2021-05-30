import { SelectProps } from './Select'

export const Select: React.FC<SelectProps> = ({
  items,
  nameProps = 'name',
  onChange,
  value = '',
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="py-2 px-4 focus:ring-blue-600 focus:border-blue-500 outline-none block w-full sm:text-sm border border-indigo-100 rounded-md"
    >
      {items.map((item, key) => {
        return (
          <option key={key} value={JSON.stringify(item)}>
            {item[nameProps]}
          </option>
        )
      })}
    </select>
  )
}
