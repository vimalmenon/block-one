import { ButtonProps } from './Button'
import clsx from 'clsx'

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'primary',
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={clsx(
        'px-4',
        'py-2',
        '',
        'focus:outline-none',
        'rounded-md',
        { 'bg-gray-600 text-gray-200 ': disabled },
        { 'bg-blue-500 text-white': type === 'primary' && !disabled },
        { 'bg-yellow-300 text-black': type === 'secondary' && !disabled }
      )}
      onClick={() => onClick && onClick()}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
