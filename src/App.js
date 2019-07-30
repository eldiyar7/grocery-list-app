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
    return (
      <div className="container">
        <NewItem addItem={this.addItem} />
        <Title component="h3">
          Unpacked Items ({this.state.items.length})
        </Title>
        <Items
          items={this.state.items}
          checkOffItem={this.checkOffItem}
          removeItem={this.removeItem}
          addItem={this.addItem}
        />
        <Title component="h3">
          Packed Items ({this.state.items.length})
        </Title>
      </div>
    )
  }
}

export default App
