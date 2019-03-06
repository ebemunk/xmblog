import React from "react";
import classnames from "classnames";

// do you notice the other erroneous change I accidentally made?
const Item = ({ item, onChange }) => (
  <li
    className={classnames("item", {
      // bug from part 2 fixed now!
      complete: item.complete
    })}
  >
    <input type="checkbox" checked={item.complete} onChange={onChange} />
    {item.name}s
  </li>
);

export default Item;
