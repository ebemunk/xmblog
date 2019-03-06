import React from "react";
import { render } from "react-testing-library";

import Todos from "./Todos";

const items = [
  { name: "one", complete: false },
  { name: "two", complete: true },
  { name: "three", complete: true },
  { name: "four", complete: false }
];

test("renders the items - SNAPSHOT", () => {
  const { container } = render(<Todos list={items} />);

  expect(container.firstChild).toMatchSnapshot();
});

test("renders the items", () => {
  const { container, getByText } = render(<Todos list={items} />);

  expect(container.querySelectorAll(".item").length).toBe(4);
  expect(container.querySelectorAll(".complete").length).toBe(2);

  expect(container.querySelectorAll(".item")[1].className).toBe(
    "item complete"
  );
  expect(container.querySelectorAll(".item")[2].className).toBe(
    "item complete"
  );

  // We need to add even more tests now to avoid this kind of error.
  // Notice how the Snapshot test diff is much more descriptive
  // and less tedious to write and maintain
  items.forEach(item => {
    expect(getByText(item.name)).toBeDefined();
  });
});
