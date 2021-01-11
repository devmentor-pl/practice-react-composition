import React from 'react';

function Cart({children}) {
    return (
        <>
        <h2>Cart</h2>
        <div>{children}</div>
        </>
    )
}

export default Cart;