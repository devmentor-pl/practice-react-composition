import React from 'react';
import Product from './Product';
import { v4 as uuidv4 } from 'uuid';

function Cart({ cart, removeFromCart }) {
    return (
        <div>
            <h2>Koszyk</h2>
            {cart.map(product => (
                <Product 
                    key={uuidv4()}
                    product={product} 
                    onActionClick={() => removeFromCart(product.id)} 
                    isInCart
                />
            ))}
        </div>
    );
}

export default Cart;