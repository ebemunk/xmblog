import React from "react";
import { render } from "react-testing-library";

import Todos from "./Todos";

const items = [
  { name: "one", complete: false },
  { name: "two", complete: true },
  { name: "three", complete: true },
  { name: "four", complete: false }
];

test("renders the items", () => {
  const { container } = render(<Todos list={items} />);

  expect(container.querySelectorAll(".item").length).toBe(4);
  expect(container.querySelectorAll(".complete").length).toBe(2);

  // We need to add these tests below to catch the boolean logic error
  // that is made inside Item.jsx

  // expect(container.querySelectorAll(".item")[1].className).toBe(
  //   "item complete"
  // );
  // expect(container.querySelectorAll(".item")[2].className).toBe(
  //   "item complete"
  // );
});
