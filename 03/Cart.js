import React from 'react';

function Cart(props) {

    console.log(props);

    const list = props.cart.map(p => {
        return (
            <li key={p.id}>
                {p.name} {p.price}
            </li>
        );
    });

    return (
        <section>
            <h2>Cart</h2>
            <ul>{list}</ul>
        </section>
    );
}
export default Cart;