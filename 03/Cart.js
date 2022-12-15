import React from 'react';

function Cart(props) {
    const {children} = props;
    return (
        <React.Fragment>
            <h2>Cart</h2>
            <ul>{children}</ul>
        </React.Fragment>
    )
}

export default Cart;