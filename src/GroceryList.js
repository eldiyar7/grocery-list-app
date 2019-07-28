import React, {Component} from 'react'
import Checkbox from './Checkbox'

class GroceryList extends Component {
  render() {
    const {items, onCheckOff} = this.props

    return (
      <div>
        {items.map(item => {
          return (
            <label className="checkbox-label">
              <Checkbox
                checked={item.grabbed}
                onChange={() => onCheckOff(item)}
              />
              {item.name}
            </label>
          )
        })}
      </div>
    )
  }
}

export {GroceryList}
