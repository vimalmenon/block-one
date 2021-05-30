import {TableColumn} from "../model/common";

export const columns:TableColumn[] = [
    {
      header: "No",
      accessor:"no",
      template:({index}:any) => index+1
    },
    {
      header: "Prefix",
      accessor:"prefix",
    },
    {
      header: "Name",
      accessor:"name",
    },
    {
      header: "Customer Id",
      accessor:"customerId",
    },
    {
      header: "Contact No",
      accessor:"contactNo",
    },
    {
      header: "Email Address",
      accessor:"emailAddress",
    },
    {
      header: "Address",
      accessor:"address",
    }
];