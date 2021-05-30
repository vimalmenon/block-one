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
        'text-white',
        'focus:outline-none',
        'rounded-md',
        { 'bg-gray-600': disabled },
        { 'bg-blue-500': type === 'primary' && !disabled },
        { 'bg-yellow-500': type === 'secondary' && !disabled }
      )}
      onClick={() => onClick && onClick()}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
