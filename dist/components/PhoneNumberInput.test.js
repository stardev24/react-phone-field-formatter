import React from "react";
import PhoneTextInput from "./PhoneNumberInput";
import renderer from "react-test-renderer";
describe("PhoneTextInput", function () {
  it("renders properly", function () {
    var tree = renderer.create(React.createElement(PhoneTextInput, {
      label: "Phone",
      placeholder: "(541) 754-3010"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
});