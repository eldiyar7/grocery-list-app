import React from 'react'
import Checkbox from './common/Checkbox'
import Button from './common/Button'

function Item({item, onCheckOff, onRemoveItem}) {
  return (
    <div className="item-container">
      <label className="checkbox-label">
        <Checkbox
          checked={item.grabbed}
          onChange={() => onCheckOff(item)}
        />
        {item.name}
      </label>
      <Button onClick={() => onRemoveItem(item)} label="remove" />
    </div>
  )
}

export default Item
