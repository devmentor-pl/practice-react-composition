import React from 'react';
import Product from './Product';

function Cart(props) {
    const {removeProduct,cart} = props;
    const list = cart.map(item =>
        <Product data={item} key={item.id} removeProduct={removeProduct} 
                 textButton={'Usuń'} isCart={true}
        />
    )
    return (
        <>
            <h2>Cart</h2>
            <ul>{list}</ul>
        </>
    )

}

export default Cart;