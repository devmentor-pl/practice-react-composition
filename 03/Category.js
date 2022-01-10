import React from 'react';
import Product from './Product';

function Category(props) {

    const {data , onClick, cart} = props;

    const productList = data.map(
        item =>
            <Product
                key={ data.id }
                item={item}
                onClick={onClick}
                disabled={ cart.includes(item.id) }
                content={'AddToCart'}
            />
    )

    return [
        <h2>Category</h2>,
        <ul>
            {productList}
        </ul>
    ]
}

export default Category;
