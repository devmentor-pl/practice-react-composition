import React from 'react';
import Product from './Product';

function Cart(props) {
    const { items, remove } = props;
    const list = items.map((el) => {
        return (
            <Product item={el} key={el.id} remove={remove} />
        )
    })

    return (
        <section>
            <h2>Cart</h2>
            <ul>
                {list}
            </ul>
        </section>
    )
}

export default Cart;