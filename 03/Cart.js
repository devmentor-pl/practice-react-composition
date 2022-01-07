import React from 'react';

function Cart(props) {
    const {children} = props;
    return (
        <section>
            <h2>Cart</h2>
            {children.length === 0 ? <p>{'Nic tu nie ma'}</p> : <ul>{children}</ul>}
        </section>
    )
}

export default Cart;