import React from 'react';

import Product from './Product'

function Cart(props) {
    const {cart, removeFromCart} = props
    const cartContent = cart.map(product => {
        return <Product key={ product.id } isCart={ true } product={ product } removeFromCart={ removeFromCart } />
    })

    return <section>
        <h2>Cart</h2>
        { cartContent }
    </section>
}

export default Cart;