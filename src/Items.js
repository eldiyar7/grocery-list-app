import React, {Component} from 'react'
import Item from './Item'
import Card from './common/Card'

import './items.css'

class Items extends Component {
  render() {
    const {items, checkOffItem, removeItem} = this.props
    return (
      <Card className="items-card">
        {items.map(item => {
          return (
            <Item
              item={item}
              onCheckOff={checkOffItem}
              onRemoveItem={removeItem}
              key={item.id}
            />
          )
        })}
      </Card>
    )
  }
}

export {Items}
