import React from 'react';
import Product from './Product';

function Cart({ cart, removeProduct }) {
    return (
        <>
            <h1>Cart</h1>
            <ul>
                {cart.map(({ id, name, price }) => (
                        <Product 
                            key={id}
                            id={id}
                            name={name}
                            price={price}
                            isCart={true}
                            removeProduct={removeProduct}
                        />
                    ))}
            </ul>
        </>
    )
}

export default Cart;