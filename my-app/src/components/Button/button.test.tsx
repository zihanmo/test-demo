/** @format */

import React from "react";
import { render } from "@testing-library/react";
import Button, { ButtonProps } from "./button";

test("our first react test case", () => {
  const wapper = render(<Button>Nice</Button>);
  const element = wapper.queryByText("Nice");
  expect(element).toBeTruthy();
});
