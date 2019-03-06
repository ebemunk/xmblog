import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Todos from "./Todos";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Todos
    list={[
      { name: "one", complete: false },
      { name: "two", complete: true },
      { name: "three", complete: true },
      { name: "four", complete: false }
    ]}
  />,
  rootElement
);
