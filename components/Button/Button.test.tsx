import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import {Button} from "./";

describe("Button Component", () => {
    test("Button: Snapshot testing Primary Type", () => {
        const wrapper = shallow(<Button type="primary" />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test("Button: Snapshot testing Secondary Type", () => {
        const wrapper = shallow(<Button type="secondary" />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test("Button: Snapshot testing disabled", () => {
        const wrapper = shallow(<Button disabled={true} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    test("Button: Snapshot testing disabled", () => {
        const onClick= jest.fn();
        const wrapper = shallow(<Button onClick={onClick} />);
        wrapper.find("button").simulate("click");
        expect(onClick).toHaveBeenCalled();
    });
});