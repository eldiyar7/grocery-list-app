import React from 'react'

function Card(props) {
  return (
    <div className="card" {...props}>
      {props.children}
    </div>
  )
}

export default Card
