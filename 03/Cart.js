import React from 'react';

import Product from './Product'

function Cart(props) {
    const {cart, removeFromCart} = props
    const cartContent = cart.map(product => {
        return <Product key={ product.id } product={ product } buttonContent={{ isDisabled: false, text: 'Usuń z koszyka', clickHandler: removeFromCart }} />
    })

    return <section>
        <h2>Cart</h2>
        { cartContent }
    </section>
}

export default Cart;