import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import toJson from "enzyme-to-json";

describe("renders App component", () => {
  const wrapper = shallow(<App />);

  test("renders without error", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("initializes App with empty 'gifts' state", () => {
    expect(wrapper.state().gifts).toEqual([]);
  });

  describe("when clicking 'add-gift' button", () => {
    const id = 1;

    beforeEach(() => {
      wrapper.find(".btn-add").simulate("click");
    });

    afterEach(() => {
      wrapper.setState({ gifts: [] });
    });

    test("adds new 'gift' to 'gifts' state", () => {
      expect(wrapper.state().gifts).toEqual([{ id }]);
    });

    test("adds new div 'gift-item'", () => {
      expect(wrapper.find(".gift-list").children().length).toEqual(1);
    });

    test("adds new div 'gift-item'", () => {
      expect(wrapper.find("Gift").exists()).toBe(true);
    });

    describe("when user clicks 'delete' button", () => {
      beforeEach(() => {
        wrapper.instance().removeGift(id);
      });

      test("removes the gift from state 'state' by id", () => {
        expect(wrapper.state().gifts).toEqual([]);
      });
    });
  });
});
