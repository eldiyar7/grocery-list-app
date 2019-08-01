import React from 'react'
import Card from './common/Card'
import Button from './common/Button'
import Icon from './common/Icon'

import './filter.css'

const searchButtonStyle = {
  padding: '6px',
  minWidth: 'auto',
  boxShadow: 'none',
}

export default function Filter() {
  return (
    <Card className="item-filter">
      <input type="text" onChange={() => {}} value={''} />
      <Button style={searchButtonStyle}>
        <Icon name="search" />
      </Button>
    </Card>
  )
}
