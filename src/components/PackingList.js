import { useState } from "react";
import Item from "./Item.js";

export default function PackingList({
  item,
  onPackedItem,
  onDeleteItems,
  onClearAllItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = item;
  } else if (sortBy === "description") {
    sortedItems = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packedstatus") {
    sortedItems = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description))
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onPackedItem={onPackedItem}
            onDeleteItems={onDeleteItems}
            key={item.description}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packedstatus">Sort by packed status</option>
        </select>
        <button onClick={onClearAllItems}>Clear list</button>
      </div>
    </div>
  );
}
