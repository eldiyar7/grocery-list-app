import React, {Component} from 'react'
import {Items} from './Items'
import NewItem from './NewItem'
// import {Checkbox, FormControlLabel} from '@material-ui/core'
import Title from './common/Title'

const groceries = [
  {name: 'apple', id: 1, grabbed: false},
  {name: 'milk', id: 2, grabbed: false},
  {name: 'water', id: 3, grabbed: false},
  {name: 'potatoes', id: 4, grabbed: false},
]

class App extends Component {
  state = {
    items: groceries,
  }

  addItem = item => {
    this.setState({
      items: [...this.state.items, item],
    })
  }

  checkOffItem = selectedItem => {
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

  removeItem = selectedItem => {
    this.setState({
      items: this.state.items.filter(
        item => item.id !== selectedItem.id,
      ),
    })
  }

  render() {
    const ungrabbedItems = this.state.items.filter(
      item => !item.grabbed,
    )
    const grabbedItems = this.state.items.filter(item => item.grabbed)

    return (
      <div className="container">
        <NewItem addItem={this.addItem} />
        <Title component="h3">
          Ungrabbed Items ({ungrabbedItems.length})
        </Title>
        <Items
          items={ungrabbedItems}
          checkOffItem={this.checkOffItem}
          removeItem={this.removeItem}
          addItem={this.addItem}
        />
        <Title component="h3">
          Grabbed Items ({grabbedItems.length})
        </Title>
        <Items
          items={grabbedItems}
          checkOffItem={this.checkOffItem}
          removeItem={this.removeItem}
          addItem={this.addItem}
        />
      </div>
    )
  }
}

export default App
