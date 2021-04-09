import React from 'react';

import Product from './Product';
import Button from './Button';

function Cart(props) {
    const { items, onClick } = props;

    const list = items.map(row => {
        return (
            <React.Fragment key={row.id}>
                <Product row={row} />
                <Button title='Usuń z koszyka' onClickButton={onClick} />
            </React.Fragment>
        )
    });
    return (
        <>
            <h2>Cart</h2>
            <ul>{list}</ul>
        </>
    )
}

export default Cart;