import React, {Component} from 'react'
import Button from './common/Button'
import Card from './common/Card'
import Input from './common/Input'
import './newItem.css'

class NewItem extends Component {
  state = {
    value: '',
  }

  handleChange = (event) => {
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
      <Card>
        <div className="new-item-container">
          <div className="new-item-input">
            <Input
              type="text"
              onChange={this.handleChange}
              value={this.state.value}
            />
          </div>
          <div className="new-item-add">
            <Button onClick={this.onAddItem} color="secondary">
              Add
            </Button>
          </div>
        </div>
      </Card>
    )
  }
}

export default NewItem
