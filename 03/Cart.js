import React from 'react'

function Cart (props) {
  const { children } = props
  return (
    <div>
        <h3>{'Cart: '}</h3>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Cart
