import { Container } from '../partials'
import { Table, MetaData } from '../components'
import { onLinkNavigation } from '../utils'
import { CustomerSelectProps, CustomerModel } from './CustomerSelect'
import { GetStaticProps, NextPage } from 'next'
import { columns } from './CustomerSelect.constants'

const CustomerSelect: NextPage<CustomerSelectProps> = ({ customers }) => {
  return (
    <Container>
      <MetaData title="Fictitious Bank Application" />
      <div className="flex flex-col flex-auto my-5">
        <div className="m-4 flex w-full py-10">
          <Table
            columns={columns}
            items={customers}
            onRowClick={(item: CustomerModel) => onLinkNavigation(`/${item.customerId}`)}
          />
        </div>
      </div>
    </Container>
  )
}

export default CustomerSelect

export const getStaticProps: GetStaticProps<CustomerSelectProps> = async function () {
  const data = await fetch('http://localhost:3000/api/customer')
  const customers = await data.json()
  return {
    props: {
      customers,
    },
  }
}
