import React from 'react'

import './button.css'

function Button(props) {
  return (
    <button {...props} className="button">
      <span className="button-label">{props.label}</span>
    </button>
  )
}

export default Button
