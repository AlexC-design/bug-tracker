import React from "react";
import { shallow } from "enzyme";
import { Logo } from "./Logo";

describe("Logo", () => {
  it("has class name logo", () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.find(".logo").length).toEqual(1);
  });
});
