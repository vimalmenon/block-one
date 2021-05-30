import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import {Input} from "./";

describe("Input Component", () => {
    test("Input: Snapshot testing", () => {
        const wrapper = shallow(<Input value="testing"/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test("Input: Snapshot testing with error", () => {
        const wrapper = shallow(<Input value="testing" error={true}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test("Input: Snapshot testing with No input value", () => {
        const wrapper = shallow(<Input error={true}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test("Input: Change Event Testing", () => {
        const onChange= jest.fn();
        const wrapper = shallow(<Input value="testing" onChange={onChange}/>);
        wrapper.find("input").simulate("change")
        expect(onChange).toHaveBeenCalled()
    });
});