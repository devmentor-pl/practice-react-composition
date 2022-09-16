import React from 'react'

function Category (props) {
  const { children } = props
  return (
    <section>
        <h3>{'Category: '}</h3>
        <ul>
            {children}
        </ul>
    </section>
  )
}

export default Category
