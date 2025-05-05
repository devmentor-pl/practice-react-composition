import React from 'react';
import Product from './Product';

function Cart(props) {

    const {removeFromCart, cart} = props;

    const handleClick = (product) => {
        removeFromCart(product);
    }

    return (
        <div>
            <h2>W twoim koszyku:</h2>
            {cart.map((product) => (
                // <li key={product.id}>
                //     <p>{product.name}</p>
                //     <p>{product.price} zl</p>
                //     <button onClick={() => handleClick(product)}>Remove from cart</button>
                // </li>
                <Product product={product} handleClick={handleClick}/>
            ))}
        </div>
    )
}

export default Cart;