import React from 'react'

import './button.css'

function Button(props) {
  return (
    <button {...props} className="button">
      <span>{props.children}</span>
    </button>
  )
}

export default Button
