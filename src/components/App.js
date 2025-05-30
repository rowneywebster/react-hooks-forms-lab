import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((d) => !d);
  }

  function handleItemFormSubmit(newItem) {
    
    setItems([...items, newItem]);
  }

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit={handleItemFormSubmit} />
    </div>
  );
}

export default App;
