import React from "react";

import Item from "./Item";

const Todos = ({ list }) => (
  <div className="todos">
    {list.map(item => (
      <Item
        key={item.name}
        item={item}
        onChange={() => {
          // do things
        }}
      />
    ))}
  </div>
);

export default Todos;
