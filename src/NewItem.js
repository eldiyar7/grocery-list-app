import React, { useState } from 'react';
import Button from './common/Button';
import Card from './common/Card';
import Input from './common/Input';
import './newItem.css';

// import Button from '@material-ui/core/Button';

const NewItem = ({ addItem }) => {
  const [value, setValue] = useState('');
  const handleChange = event => setValue(event.target.value);
  const resetValue = () => setValue('');
  const onAddItem = () => {
    addItem({
      name: value,
      id: 5,
      grabbed: false,
    });
    resetValue();
  };

  return (
    <Card>
      <div className="new-item-container">
        <div className="new-item-input">
          <Input type="text" onChange={handleChange} value={value} />
        </div>
        <div className="new-item-add">
          <Button
            onClick={onAddItem}
            color="secondary"
            disabled={!value.length}>
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default NewItem;
