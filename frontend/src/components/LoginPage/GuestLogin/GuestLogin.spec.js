import React from "react";
import { shallow } from "enzyme";
import GuestLogin from "./GuestLogin";

describe("GuestLogin", () => {
  it("calls handleChange when the input is changed", () => {
    const wrapper = shallow(<GuestLogin />);

    expect(wrapper.state().value).toEqual("");
    wrapper
      .find(".guest-name-input")
      .simulate("change", { target: { value: "test" } });
    expect(wrapper.state().value).toEqual("test");
  });
  it("calls handleSubmit when submit is clicked", () => {
    const wrapper = shallow(<GuestLogin />);

    const preventDefault = jest.fn()
    const mockEvent = { preventDefault }

    wrapper.find(".guest-login-container").simulate("submit", mockEvent);
    expect(preventDefault).toHaveBeenCalled();
  });
});
