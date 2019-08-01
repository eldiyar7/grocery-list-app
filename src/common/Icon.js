import React from 'react'

import './icon.css'

const getSvgAttributes = (name, props) => {
  switch (name) {
    case 'checkbox-checked':
      return {
        path: (
          <path
            {...props}
            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8.29 13.29c-.39.39-1.02.39-1.41 0L5.71 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.58 7.59z"
          />
        ),
        viewBox: '0 0 24 24',
      }
    case 'checkbox-unchecked':
      return {
        path: (
          <path
            {...props}
            d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
          />
        ),
        viewBox: '0 0 24 24',
      }

    case 'search':
      return {
        path: (
          <path
            {...props}
            d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          />
        ),
        viewBox: '0 0 24 24',
      }
    default:
      return <path />
  }
}

function Icon({name, className, ...props}) {
  console.log({name, ...props})
  const {viewBox, path} = getSvgAttributes(name)
  return (
    <svg {...props} viewBox={viewBox} className={`svg ${className}`}>
      {path}
    </svg>
  )
}

export default Icon
