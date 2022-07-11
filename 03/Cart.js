import React from 'react';

function Cart(props) {
    return (
        <div>
            <h2>Cart</h2>
            <div>{props.children}</div>
        </div>
    )
}

export default Cart;