import {onLinkNavigation} from "./index";

import Router from "next/router";

jest.mock("next/router", () => ({
    push:jest.fn()
}));
describe("Testing onLinkNavigation Utility Method", () => {
    test("convertCurrency Method : with value (1000)", () => {
        const url = "/test/url";
        onLinkNavigation(url);
        expect(Router.push).toHaveBeenCalled();
        expect(Router.push).toHaveBeenCalledWith(url);
    });
    
});