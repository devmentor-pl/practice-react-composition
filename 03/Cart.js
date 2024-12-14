import React from 'react';
import Product from './Product';

function Cart(props) {
    const { cart, onRemoveFromCart } = props;
    const cartStyle = {
        fontFamily: 'sans-serif',
        backgroundColor: 'lightblue',
        border: '2px solid navy',
        borderRadius: '5px',
        padding: '10px',
        minWidth: '300px',
    };

    const titleStyle = {
        color: 'blue',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
    };
    return (
        <div style={cartStyle}>
            <h2 style={titleStyle}>Cart</h2>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        <Product
                            {...product}
                            onRemoveFromCart={onRemoveFromCart}
                            isCart={true}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}