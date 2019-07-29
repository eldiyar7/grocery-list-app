import React from 'react'
import Checkbox from './Checkbox'

function Item({item, onCheckOff}) {
  return (
    <label className="checkbox-label">
      <Checkbox
        checked={item.grabbed}
        onChange={() => onCheckOff(item)}
      />
      {item.name}
    </label>
  )
}

export default Item
