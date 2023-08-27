import React from 'react';
import Product from './Product';


function Cart(props) {
    const { items, onClick } = props
    const list = items.map(item => <Product key={item.id} data={item} onClick={onClick}/>)

    return (
        <>
            <h2>Cart</h2>
            {list}
        </>
    )
}

export default Cart;