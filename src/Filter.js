import React, {Component} from 'react'
import Card from './common/Card'
import Button from './common/Button'
import Icon from './common/Icon'

import './filter.css'

const searchButtonStyle = {
  padding: '6px',
  minWidth: 'auto',
  boxShadow: 'none',
}

class Filter extends Component {
  handleChange = event => {
    const value = event.target.value
    this.props.onChange(value)
  }

  render() {
    return (
      <Card className="item-filter">
        <input
          type="text"
          onChange={this.handleChange}
          value={this.props.searchTerm}
        />
        <Button style={searchButtonStyle}>
          <Icon name="search" />
        </Button>
      </Card>
    )
  }
}

export default Filter
