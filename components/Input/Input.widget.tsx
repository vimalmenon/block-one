import { InputProps } from './Input'
import clsx from 'clsx'

export const Input: React.FC<InputProps> = ({ value = '', onChange, error = false }) => {
  return (
    <input
      className={clsx(
        'py-2',
        'px-4',
        'block',
        'w-full',
        'sm:text-sm',
        'border',
        'rounded-md',
        'outline-none',
        { 'focus:border-blue-500 border-blue-100 focus:ring-blue-500': !error },
        { 'border-red-200 focus:border-red-500 focus:ring-red-500': error }
      )}
      value={value}
      onChange={onChange}
    />
  )
}
