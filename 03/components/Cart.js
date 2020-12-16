import React from 'react';

function Cart(props) {
    const { children } = props;
    return (
        <article>
            <h2>Cart</h2>
            {children.length === 0 ? <p>{'no products yet'}</p> : <ul>{children}</ul>}
        </article>
    )
}

export default Cart;