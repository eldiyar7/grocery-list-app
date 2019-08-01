import React from 'react'
import Icon from './Icon'

import './checkbox.css'

function Checkbox(props) {
  return (
    <span className="checkbox">
      <input type="checkbox" {...props} />
      {props.checked ? (
        <Icon name="checkbox-checked" className="checkbox-icon" />
      ) : (
        <Icon name="checkbox-unchecked" className="checkbox-icon" />
      )}
    </span>
  )
}

export default Checkbox
