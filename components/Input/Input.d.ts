import {GenericMethodType} from "../../model/common";

export interface InputProps {
    value?:string|number, 
    onChange?:GenericMethodType<React.ChangeEvent<HTMLInputElement>>,
    error?:boolean
}