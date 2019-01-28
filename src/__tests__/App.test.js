import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";

import App from "../App";

describe("<App />", () => {
  it("renders correctly", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("#app").exists()).toBe(true);
  });

  it("is not just an empty div", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("#app").children().length).toBe(1);
  });

  it("renders the right number of authors", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(".card").length).toBe(4);
  });

  it("has the correct content in each author card", () => {
    const wrapper = mount(<App />);
    wrapper.find(".card").forEach(card => {
      expect(card.find("img").exists()).toBe(true);
      expect(card.find(".card-title").exists()).toBe(true);
      expect(card.find(".card-text").text()).toContain("books");
    });
  });
});
