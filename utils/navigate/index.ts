import Router from "next/router";
import {GenericMethodType} from "../../model/common";

export const onLinkNavigation:GenericMethodType<string> = (url) => {
    Router.push(url);
};