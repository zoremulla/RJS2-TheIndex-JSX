import React from 'react'
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";

import App from "../App";

describe("<App />", () => {
  it("renders correctly", () => {
    const wrapper = mount(<App />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
