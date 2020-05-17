import React, { useState, useEffect } from 'react';
import { Items } from './Items';
import NewItem from './NewItem';
import Title from './common/Title';

import localforage from 'localforage';

const App = () => {
  const [items, setItem] = useState([]);

  useEffect(() => {
    localforage.getItem('items').then(setItem);
  }, []);

  const addItem = item => {
    setItem([...items, item]);
    localforage.setItem('items', [...items, item]);
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
    localforage.setItem('items', [...updatedItems]);
  };

  const removeItem = selectedItem => {
    const filteredItems = items.filter(
      item => item.id !== selectedItem.id,
    );
    setItem(filteredItems);
    localforage.setItem('items', [...filteredItems]);
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
