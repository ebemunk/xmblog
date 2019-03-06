import React from "react";
import classnames from "classnames";

const Item = ({ item, onChange }) => (
  <li
    className={classnames("item", {
      // sneaking in a logic error
      complete: !item.complete
    })}
  >
    <input type="checkbox" checked={item.complete} onChange={onChange} />
    {item.name}
  </li>
);

export default Item;
