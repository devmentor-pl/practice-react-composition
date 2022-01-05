import React from 'react';
import Product from './Product';
import { v4 as uuid } from 'uuid';

function Cart(props) {

    const {cart , onClick} = props;

    const orderList = cart.map(
        item =>
            <Product
                key={ uuid() }
                item={item}
                onClick={onClick}
                disabled={ !cart.includes(item) }
                content={'RemoveFromCart'}
            />
    )

    return [
        <h2>Cart</h2>,
        <ul>
            {orderList}
        </ul>
    ]

}

export default Cart;