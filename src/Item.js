import React from 'react'
import Checkbox from './Checkbox'

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
      <button className="button">
        <span className="button-label">Remove</span>
      </button>
    </div>
  )
}

export default Item
