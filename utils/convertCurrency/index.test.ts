import {convertCurrency} from "./index";

describe("Testing convertCurrency Utility Method", () => {
    test("convertCurrency Method : with value (1000)", () => {
        const value = convertCurrency(1000);
        expect(value).toBe("1,000");

    });
    test("convertCurrency Method : with value (100)", () => {

        const testValue = convertCurrency(100);
        expect(testValue).toBe("100");
    });
});