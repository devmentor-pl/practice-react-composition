import React from 'react';

function Cart(props) {
    const { children } = props;
    // const products = items.map((item, index) => (
    //     <Product item={item.name} price={item.price} />
    // ))
    return (
        <section>
            <h2>Koszyk</h2>
            <div>{children}</div>
        </section>
    )
}

export default Cart;