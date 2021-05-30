import { GetStaticProps } from 'next';
import {Container} from "../../partials";
import {Button, Table} from "../../components";
import { CustomerParams} from "../../model/customer";
import {onLinkNavigation, convertCurrency} from "../../utils";
import {useRouter} from "next/router";
import {AccountDetailProps, AccountModel} from "./AccountDetail";
import {columns} from "./AccountDetail.constants";


const AccountDetail : React.FC<AccountDetailProps> = ({customer, accounts}) => {
    const {customerId} = useRouter().query;
    const totalBalance = accounts.reduce((total, account) => {
        return total + account.balance
    }, 0);
    const footer = [
        {
            value:"Total Balance",
            colSpan:3
        },
        {
            value:convertCurrency(totalBalance),
        }
    ];
    return (
        <Container customer={customer}>
            <div className="m-4 flex w-full flex-col">
                <Table columns={columns} items={accounts} footer={footer} onRowClick={(item:AccountModel) => onLinkNavigation(`/${item.customerId}/${item.accountNumber}`)}/>
                <div className="flex my-4 justify-between">
                    <Button onClick={() => onLinkNavigation(`/${customerId}/transfer`)}>Transfer Money</Button>
                    <Button type="secondary" onClick={() => onLinkNavigation(`/`)}>Go Back</Button>
                </div>
            </div>
        </Container>
    )
}


export default AccountDetail;

export const getStaticProps: GetStaticProps<AccountDetailProps> = async (context) => {
    const {customerId} = context.params || {};
    const data = await fetch(`http://localhost:3000/api/customer/${customerId}`);
    const customer = await data.json();

    const accountData = await fetch(`http://localhost:3000/api/account/${customer.customerId}`);
    const accounts = await accountData.json();
    return {
      props: {
        customer,
        accounts
      }
    }
}

export const getStaticPaths = async () => {
    const dataValue = await fetch(`http://localhost:3000/api/meta/customer`);
    const customers = await dataValue.json() as CustomerParams[];

    const paths = customers.map((customer) => {
        return {
            params: { customerId: customer.customerId.toString() }
        }
    });
    return {
        paths,
        fallback: false
      };
}