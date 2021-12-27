import React from 'react';

function Cart(props) {
    const {children} = props;

    return (
        <section>
            <h2>Cart</h2>
            {children}
        </section>
    )
}

export default Cart;