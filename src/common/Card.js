import React from 'react'

import './card.css'

function Card({className, ...props}) {
  return (
    <div className={`card-root ${className}`} {...props}>
      {props.children}
    </div>
  )
}

export default Card
