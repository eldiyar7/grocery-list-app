import React from 'react'
import Checkbox from './common/Checkbox'
import Button from './common/Button'

function Item({item, onCheckOff}) {
  return (
    <div className="item-container">
      <label className="checkbox-label">
        <Checkbox
          checked={item.grabbed}
          onChange={() => onCheckOff(item)}
        />
        {item.name}
      </label>
      <Button />
    </div>
  )
}

export default Item
