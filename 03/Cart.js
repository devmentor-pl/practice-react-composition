import React from 'react'

function Cart (props) {
  const { children } = props
  return (
    <section>
        <h3>{'Cart: '}</h3>
        <ul>
            {children}
        </ul>
    </section>
  )
}

export default Cart
