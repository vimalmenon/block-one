import {convertCurrency} from "../../utils";
import {TableColumn} from "../../model/common";

export const columns:TableColumn[] = [
    {
        header: "No",
        accessor:"no",
        template:({index}:any) => index+1
    },
    {
        header: "Account Type",
        accessor:"accountType",
    },
    {
        header: "Account Number",
        accessor:"accountNumber",
    },
    {
        header: "Balance",
        accessor:"balance",
        template: ({item}:any) => convertCurrency(item.balance)
    },
];