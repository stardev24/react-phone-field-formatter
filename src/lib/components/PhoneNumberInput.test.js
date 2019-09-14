import React from "react";
import PhoneTextInput from "./PhoneNumberInput";
import renderer from "react-test-renderer";

describe("PhoneTextInput", () => {
  it("renders properly", () => {
    const tree = renderer
      .create(<PhoneTextInput label="Phone" placeholder="(541) 754-3010" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});