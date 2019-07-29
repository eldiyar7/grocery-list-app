import React, {Component} from 'react'
import Button from './common/Button'
import Card from './common/Card'

// find pattern for passing custom class names which don't override default ones
const styles = {
  card: {
    padding: '2px 4px',
    display: 'flex',
  },
}

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
      <div>
        <div className="item-form">
          <Card style={styles.card}>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.value}
            />
            <Button onClick={this.onAddItem} label="Add" />
          </Card>
        </div>
      </div>
    )
  }
}

export default NewItem
