import React from "react";
import { shallow } from "enzyme";
import Gift from "./Gift";

describe("Gift component", () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: { id }, removeGift: mockRemove };
  const wrapper = shallow(<Gift {...props} />);

  test("should render without error", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should initialize a person and present in 'state'", () => {
    expect(wrapper.state()).toEqual({ person: "", present: "" });
  });

  describe("when typing into input fields", () => {
    const person = "Uncle";
    const present = "Car";
    beforeEach(() => {
      wrapper
        .find(".input-person")
        .simulate("change", { target: { value: person } });
      wrapper
        .find(".input-present")
        .simulate("change", { target: { value: present } });
    });
    test("should update 'person' in 'state'", () => {
      expect(wrapper.state().person).toEqual(person);
    });

    test("should update 'present' in 'state'", () => {
      expect(wrapper.state().present).toEqual(present);
    });
  });
  describe("when clicking 'Remove Gift' button", () => {
    beforeEach(() => {
      wrapper.find(".btn-remove").simulate("click");
    });

    test("calls remove gift callback", () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});
