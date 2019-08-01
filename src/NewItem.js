import React, {Component} from 'react'
import Button from './common/Button'
import Card from './common/Card'

import './newItem.css'

class NewItem extends Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    })
  }

  onAddItem = () => {
    this.props.addItem({
      name: this.state.value,
      id: 5,
      grabbed: false,
    })
    this.setState({
      value: '',
    })
  }

  render() {
    return (
      <Card className="item-add">
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <Button onClick={this.onAddItem} color="primary">
          Add
        </Button>
      </Card>
    )
  }
}

export default NewItem
