import React from 'react';

const Cart = (props) =>{
    const {children} = props
    return (
        <div>
            <h1>Cart</h1>
            {children}

        </div>
   )
}

export default Cart;