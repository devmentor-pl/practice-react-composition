import React from 'react'

function Category (props) {
  const { children } = props
  return (
    <div>
        <h3>{'Category: '}</h3>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Category
