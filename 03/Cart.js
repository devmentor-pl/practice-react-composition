import React from 'react';
import Product from './Product';

function Cart(props) {
    const list = props.cart.map(item => {
        return <Product key={item.id} name={item.name} price={item.price} isCategory={false} onClick={() => props.onClick(item.id)}/>
    })
    return (
        <>
            <h2>Cart</h2>
            <ul>{list}</ul>
        </>

    )
}

export default Cart;