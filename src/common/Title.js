import React from 'react'

import './title.css'

function Title({component: Component, ...props}) {
  return (
    <Component className="title" {...props}>
      {props.children}
    </Component>
  )
}

export default Title
