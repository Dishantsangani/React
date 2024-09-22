import React, { useState } from "react";

const NewArray = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", value: 10 },
    { id: 2, name: "Item 2", value: 20 },
    { id: 3, name: "Item 3", value: 30 },
  ]);

  const addPropertyToAll = () => {
    const updatedItems = items.map((item) => ({
      ...item,
      newProperty: "New Added",
    }));
    setItems(updatedItems);
  };

  const updateItemValue = (id, newValue) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, value: newValue } : item
    );
    setItems(updatedItems);
  };

  const deletePropertyFromAll = (property) => {
    const updatedItems = items.map((item) => {
      const newItem = { ...item };
      delete newItem[property];
      return newItem;
    });
    setItems(updatedItems);
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          {item.name}: {item.value}
          {item.newProperty && `- ${item.newProperty}`}
        </div>
      ))}
      <button onClick={addPropertyToAll}>Add Property</button>
      <button onClick={() => updateItemValue(1, 1000)}>
        Update Value of Item 1
      </button>
      <button onClick={() => deletePropertyFromAll("newProperty")}>
        Delete Property
      </button>
    </div>
  );
};

export default NewArray;
