import React from 'react';
import Product from './Product';

function Cart(props) {

    const { cart, removeFromCart } = props

    return(
        <div className="cart">
            <h2 className="cart__title">Koszyk</h2>

            {cart.length === 0 && (
                <p className="cart__empty">Twój koszyk jest pusty</p>
            )}

            {cart.map(product => (
                <Product
                    key={product.id}
                    product={product}
                    onRemove={removeFromCart}
                />
            ))}
        </div>
    );
}

export default Cart;