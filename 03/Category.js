import React from 'react';

import Product from './Product';
import Button from './Button';
import Cart from './Cart';


function Category(props) {
    const { data, onClick, itemsCart } = props;

    const list = data.map(row => {
        let disabled = false;

        if (itemsCart.length > 0) {
            itemsCart.forEach(el => {
                if (row.id === el.id) {
                    disabled = true;
                }
            });
        }

        return (
            <React.Fragment key={row.id}>
                <Product row={row} />
                <Button title='Dodaj do koszyka' onClickButton={onClick} isDisabled={disabled} />
            </React.Fragment>
        )
    });
    return (
        <>
            <h2>Category</h2>
            <ul>{list}</ul>
        </>
    )

}

export default Category;