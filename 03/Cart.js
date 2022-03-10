import React from 'react';
import Product from './Product';

function Cart(props) {
    const {data,removeProduct,cart} = props;
    const list =  data.map(item =>
        <Product data={item} key={item.id} removeProduct={removeProduct} cart={cart} />
    )
    return (
        <>
            <h2>Cart</h2>
            <ul>{list}</ul>
        </>
    )

}

export default Cart;