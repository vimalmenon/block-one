import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Container } from '../../partials'
import { Button, Table, MetaData } from '../../components'
import { CustomerParams } from '../../model/customer'
import { onLinkNavigation, convertCurrency } from '../../utils'
import { useRouter } from 'next/router'
import { AccountDetailProps, AccountModel } from './AccountDetail'
import { columns } from './AccountDetail.constants'

const AccountDetail: NextPage<AccountDetailProps> = ({ customer, accounts }) => {
  const { customerId } = useRouter().query
  const totalBalance = accounts.reduce((total, account) => {
    return total + account.balance
  }, 0)
  const footer = [
    {
      value: 'Total Balance',
      colSpan: 3,
    },
    {
      value: convertCurrency(totalBalance),
    },
  ]
  const title = `Account Detail for ${customer.name} - ${customer.customerId}`
  return (
    <Container customer={customer}>
      <MetaData title={title} />
      <div className="m-4 flex w-full flex-col py-10">
        <Table
          columns={columns}
          items={accounts}
          footer={footer}
          onRowClick={(item: AccountModel) =>
            onLinkNavigation(`/${item.customerId}/${item.accountNumber}`)
          }
        />
        <div className="flex my-4 justify-between">
          <Button
            data-testid="transfer-funds"
            onClick={() => onLinkNavigation(`/${customerId}/transfer`)}
          >
            Transfer Funds
          </Button>
          <Button data-testid="back" type="secondary" onClick={() => onLinkNavigation(`/`)}>
            Back
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default AccountDetail

export const getStaticProps: GetStaticProps<AccountDetailProps> = async (context) => {
  const { customerId } = context.params || {}
  const data = await fetch(`http://localhost:3000/api/customer/${customerId}`)
  const customer = await data.json()

  const accountData = await fetch(`http://localhost:3000/api/account/${customer.customerId}`)
  const accounts = await accountData.json()
  return {
    props: {
      customer,
      accounts,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const dataValue = await fetch(`http://localhost:3000/api/meta/customer`)
  const customers = (await dataValue.json()) as CustomerParams[]

  const paths = customers.map((customer) => {
    return {
      params: { customerId: customer.customerId.toString() },
    }
  })
  return {
    paths,
    fallback: false,
  }
}
