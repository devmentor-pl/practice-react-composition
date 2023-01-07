import React from 'react';

function Cart(props) {
    return (
        <section>
            <h2>Cart</h2>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export default Cart;