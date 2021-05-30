import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import {Container, AccountContainer} from "../../partials";
import {CustomerModel} from "../../model/customer";
import {AccountModel} from "../../model/account";
import {Button} from "../../components";
import {onLinkNavigation} from "../../utils";
import React from 'react';
import {AccountDetailProps} from "./AccountDetail";

const Transfer:React.FC<AccountDetailProps> = ({customer, accounts}) => {
  const router = useRouter();
  const { customerId } = router.query;
  const [accountList, setAccountList] = React.useState<AccountModel[]>(accounts)
  const [fromAccount, setFromAccount] = React.useState<AccountModel>();
  const [toAccount, setToAccount] = React.useState<AccountModel>(accountList[0]);
  const [transferAmount, setTransferAmount] = React.useState<number>();
  React.useEffect(() => {
    const updateAccount = [{
        customerId:0,
        accountNumber:"Please select an account",
        accountType:"",
        balance:0
    }, ...accounts];
    setAccountList(updateAccount);
    setFromAccount(updateAccount[0]);
    setToAccount(updateAccount[0]);
  }, []);
  const isDisabled = () => {
    return !(fromAccount?.balance && toAccount.balance && transferAmount && fromAccount?.balance > transferAmount) ? true:false;
  };
  
  return (
    <Container customer={customer}>
         <div className="my-6 mx-4 flex w-full flex-col">
            <div className="flex justify-center">
                <AccountContainer 
                    title="From Account" 
                    accounts={accountList} 
                    onAccountSelect={(value) => setFromAccount(JSON.parse(value))} 
                    selectedAccount={fromAccount} 
                    transferAmount={transferAmount}
                    isFromAccount={true}
                    setTransferAmount={setTransferAmount}/>
                {fromAccount?.customerId ? 
                    <>
                        <div className="flex w-1/12 flex-col items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                        </div>
                        <AccountContainer 
                            title="To Account" 
                            accounts={accountList} 
                            onAccountSelect={(value) => setToAccount(JSON.parse(value))} 
                            selectedAccount={toAccount}
                            transferAmount={transferAmount}/>
                    </>
                    :
                    <div className="flex w-6/12 flex-col"></div>
                }
            </div>
            <div className="flex my-4 justify-between">
                <Button onClick={() => console.log("Transfer Money")} disabled={isDisabled()}>Transfer Money</Button>
                <Button type="secondary" onClick={() => onLinkNavigation(`/${customerId}`)}>Go Back</Button>
            </div>
         </div>
    </Container>
  );
}

export default Transfer

export const getStaticProps: GetStaticProps<AccountDetailProps> = async (context) => {
    const {customerId} = context.params || {};
    const data = await fetch(`http://localhost:3000/api/customer/${customerId}`);
    const customer = await data.json();
    const accountData = await fetch(`http://localhost:3000/api/account/${customer.customerId}?transfer=true`);
    const accounts = await accountData.json();
    return {
      props: {
        customer,
        accounts
      }
    }
}

export const getStaticPaths:GetStaticPaths = async () => {
    const data = await fetch(`http://localhost:3000/api/customer`);
    const customers = await data.json() as CustomerModel[];
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