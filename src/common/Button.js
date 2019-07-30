import React from 'react'

import './button.css'

const classNames = {
  primary: 'button-primary',
  secondary: 'button-secondary',
}

function Button(props) {
  return (
    <button
      {...props}
      className={`button ${classNames[props.color]}`}
    >
      <span>{props.children}</span>
    </button>
  )
}

export default Button
