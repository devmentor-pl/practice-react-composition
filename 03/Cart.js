import React from 'react';

function Cart(props) {
    const {children} = props;
    return (
        <>
            <h2>Cart</h2>
            {children.length === 0 ? <p>{'Nothing here'}</p> : <ul>{children}</ul>}
        </>
    )
}

export default Cart;