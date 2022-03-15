import React from 'react';
import Product from './Product';

function Cart(props) {
    const {removeProduct,cart,isInCart} = props;
    console.log(props, 'Cart props');

    const list = cart.map(item =>
        <Product data={item} key={item.id} removeProduct={removeProduct} 
                 textButton={'Usuń'} isCart={true} isInCart={isInCart}
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