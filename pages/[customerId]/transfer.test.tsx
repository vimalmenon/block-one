import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { AccountModel } from '../../model/account';
import { CustomerModel } from '../../model/customer';

import Transfer from "./transfer";

jest.mock("next/router", () => ({
    useRouter: () => ({
        query: {
            customerId: "12345"
        }
    })
}));

describe('Transfer Page', () => {
    test('Table: Snapshot testing with Footer', () => {
        const customer: CustomerModel = {
            prefix: 'Mr',
            name: 'test value',
            customerId: 12345,
            address: 'test Address',
            emailAddress: 'test.value@test.com',
            contactNo: '123-456-789',
        };

       
        const accounts:AccountModel[] = [
            {
                customerId: 1234,
                accountNumber: "12233344",
                accountType: "Saving Account",
                balance: 20000
            }
        ];
        const wrapper = shallow(<Transfer customer={customer} accounts={accounts}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
});