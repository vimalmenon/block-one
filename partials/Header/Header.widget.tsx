import { BusinessLogo, CustomerDetail } from '../../components'
import { HeaderProps } from './Header'

export const Header: React.FC<HeaderProps> = ({ customer }) => {
  return (
    <header className="flex h-28 items-center">
      <BusinessLogo />
      {customer ? (
        <div className="flex flex-grow self-center justify-between text-gray-700 font-semibold">
          <div></div>
          <CustomerDetail customer={customer} />
        </div>
      ) : (
        <div className="flex flex-grow self-center justify-center text-red-600"></div>
      )}
    </header>
  )
}
