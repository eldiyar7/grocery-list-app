import React, {Component} from 'react'
import Item from './Item'

class Items extends Component {
  render() {
    const {items, onCheckOff} = this.props

    return (
      <div className="items-container">
        {items.map(item => {
          return (
            <Item item={item} onCheckOff={onCheckOff} key={item.id} />
          )
        })}
      </div>
    )
  }
}

export {Items}
