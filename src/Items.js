import React, {Component} from 'react'
import Item from './Item'
import Card from './common/Card'

class Items extends Component {
  render() {
    const {items, checkOffItem, removeItem} = this.props
    return (
      <Card>
        <div className="items-container">
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
        </div>
      </Card>
    )
  }
}

export {Items}
