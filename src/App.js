import React, {Component} from 'react'
import {GroceryList} from './GroceryList'
// import {Checkbox, FormControlLabel} from '@material-ui/core'

const groceries = [
  {name: 'apple', id: 1, grabbed: false},
  {name: 'milk', id: 2, grabbed: false},
  {name: 'water', id: 3, grabbed: false},
  {name: 'potatoes', id: 4, grabbed: true},
]

class App extends Component {
  state = {
    items: groceries,
  }

  checkOff = selectedItem => {
    const updatedItems = this.state.items.map(item => {
      if (item.id === selectedItem.id) {
        return {...item, grabbed: !selectedItem.grabbed}
      } else {
        return item
      }
    })
    this.setState({
      items: updatedItems,
    })
  }

  render() {
    return (
      <div className="app-container">
        <GroceryList
          items={this.state.items}
          onCheckOff={this.checkOff}
        />
      </div>
    )
  }
}

export default App
