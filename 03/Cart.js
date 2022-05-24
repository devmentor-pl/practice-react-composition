import React from 'react';

function Cart(props) {
    return (
        <>
            <h2>Cart</h2>
            <ul>{props.children}</ul>
        </>
    )

}

export default Cart;