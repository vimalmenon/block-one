import {AccountModel} from "../../model/account";

export interface AccountContainerProps {
    title:string;
    accounts: AccountModel[];
    onAccountSelect: (value:string) => void;
    selectedAccount?:AccountModel;
    transferAmount?:number;
    isFromAccount?:boolean;
    setTransferAmount?:(value:number) =>void;
}