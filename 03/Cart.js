import React from 'react';
import Product from './Product'

function Cart(props) {
    const {items} = props

    return (
        <>
            <h2>Cart</h2>
            <ul><Product items ={items}/></ul>
        </>
    )
}

export default Cart;