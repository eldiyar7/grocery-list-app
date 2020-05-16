import React, { useState } from 'react';
import { Items } from './Items';
import NewItem from './NewItem';
import Title from './common/Title';

const groceries = [
  { name: 'apple', id: 1, grabbed: false },
  { name: 'milk', id: 2, grabbed: false },
  { name: 'water', id: 3, grabbed: false },
  { name: 'potatoes', id: 4, grabbed: false },
];

const App = () => {
  const [items, setItem] = useState(groceries);

  const addItem = item => {
    setItem([...items, item]);
  };

  const checkOffItem = selectedItem => {
    const updatedItems = items.map(item => {
      if (item.id === selectedItem.id) {
        return { ...item, grabbed: !selectedItem.grabbed };
      } else {
        return item;
      }
    });
    setItem(updatedItems);
  };

  const removeItem = selectedItem => {
    setItem(items.filter(item => item.id !== selectedItem.id));
  };

  const ungrabbedItems = items.filter(item => !item.grabbed);
  const grabbedItems = items.filter(item => item.grabbed);

  return (
    <div className="container container-custom">
      <NewItem addItem={addItem} />
      <Title component="h3">
        Ungrabbed Items ({ungrabbedItems.length})
      </Title>
      <Items
        items={ungrabbedItems}
        checkOffItem={checkOffItem}
        removeItem={removeItem}
        addItem={addItem}
      />
      <Title component="h3">
        Grabbed Items ({grabbedItems.length})
      </Title>
      <Items
        items={grabbedItems}
        checkOffItem={checkOffItem}
        removeItem={removeItem}
        addItem={addItem}
      />
    </div>
  );
};

export default App;
