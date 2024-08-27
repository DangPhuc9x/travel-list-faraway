import { useState } from "react";
import Logo from "./components/Logo.js";
import Form from "./components/Form.js";
import PackingList from "./components/PackingList.js";
import Stats from "./components/Stats.js";

function App() {
  const [item, setItem] = useState([]);

  function handleAddItems(newItem) {
    setItem((currentItems) => [...currentItems, newItem]);
  }

  function handlePackedItem(itemId) {
    setItem((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItems(itemId) {
    setItem((currentItems) =>
      currentItems.filter((item) => item.id !== itemId)
    );
  }

  function handleClearAllItems() {
    if (item.length === 0) {
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) {
      setItem([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        item={item}
        onPackedItem={handlePackedItem}
        onDeleteItems={handleDeleteItems}
        onClearAllItems={handleClearAllItems}
      />
      <Stats item={item} />
    </div>
  );
}

export default App;
