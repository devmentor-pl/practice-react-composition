import React from 'react';
import Product from './Product';


function Cart(props) {
    const { items, removeFromCart } = props
    const list = items.map(item => <Product key={item.id} data={item} isCart={true} removeFromCart={removeFromCart}/>)

    return (
        <>
            <h2>Cart</h2>
            {list}
        </>
    )
}

export default Cart;