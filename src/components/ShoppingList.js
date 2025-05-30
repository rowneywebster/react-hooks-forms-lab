import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";
import ItemForm from "./ItemForm";

function ShoppingList({ items, onItemFormSubmit }) {
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  
  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  
  const itemsToDisplay = items.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ShoppingList">
      
      <ItemForm onItemFormSubmit={onItemFormSubmit} />

      
      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        search={search}
        onSearchChange={handleSearchChange}
      />

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
