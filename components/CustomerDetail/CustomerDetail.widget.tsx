import { CustomerDetailProps } from './CustomerDetail'

export const CustomerDetail: React.FC<CustomerDetailProps> = ({ customer }) => {
  return (
    <div className="p-2 text-sm w-2/5">
      <div>
        {customer.prefix} {customer.name}
      </div>
      <div>Contact No : {customer.contactNo}</div>
      <div>Email Address: {customer.emailAddress}</div>
      <div>Address: {customer.address}</div>
    </div>
  )
}
