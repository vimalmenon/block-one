import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Container } from '../../../partials'
import { Button, Table, MetaData } from '../../../components'
import { AccountParams } from '../../../model/account'
import { onLinkNavigation } from '../../../utils'
import { AccountSummaryProps } from './AccountSummary'
import { columns } from './AccountSummary.constants'

const AccountSummary: React.FC<AccountSummaryProps> = ({ customer, transactions }) => {
  const router = useRouter()
  const { customerId } = router.query
  const title = `Transaction details for ${customer.name}`
  return (
    <Container customer={customer}>
      <MetaData title={title} />
      <div className="m-4 flex w-full flex-col">
        <Table columns={columns} items={transactions} />
        <div className="flex my-4 justify-between">
          <div></div>
          <Button type="secondary" onClick={() => onLinkNavigation(`/${customerId}`)}>
            Go Back
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default AccountSummary

export const getStaticProps: GetStaticProps<AccountSummaryProps> = async (context) => {
  const { customerId, accountNo } = context.params || {}
  const data = await fetch(`http://localhost:3000/api/customer/${customerId}`)
  const customer = await data.json()

  const transactionData = await fetch(
    `http://localhost:3000/api/customer/${customerId}/${accountNo}`
  )
  const transactions = await transactionData.json()

  return {
    props: {
      customer,
      transactions,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetch(`http://localhost:3000/api/meta/account`)
  const accounts = (await data.json()) as AccountParams[]
  const paths = accounts.map((account) => {
    return {
      params: { customerId: account.customerId.toString(), accountNo: account.accountNo },
    }
  })
  return {
    paths,
    fallback: false,
  }
}
