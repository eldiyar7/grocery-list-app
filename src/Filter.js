import React from 'react'
import Card from './common/Card'
import Button from './common/Button'
import Icon from './common/Icon'

import './filter.css'

export default function Filter() {
  return (
    <Card className="item-filter">
      <input type="text" onChange={() => {}} value={''} />
      <Button>
        <Icon name="search" />
      </Button>
    </Card>
  )
}
