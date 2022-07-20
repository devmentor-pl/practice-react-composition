import React from 'react';

import Product from './Product';
import Button from './Button';


function Category(props) {
    const { data, onClick, itemsCart } = props;

    const list = data.map(row => {
        const disabled = itemsCart.some(item => item.id === row.id);

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