import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CustomerModel } from '../../model/customer';

import {Header} from "./";

describe("Header Partials", () => {
    test("Header : Snapshot testing without customer", () => {
        const wrapper = shallow(<Header/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test("Header : Snapshot testing with customer", () => {
        const customer:CustomerModel = {
            prefix: "Mr",
            name: "test value",
            customerId:12345,
            address:"test Address",
            emailAddress:"test.value@test.com",
            contactNo:"123-456-789"
        };
        const wrapper = shallow(<Header customer={customer}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});