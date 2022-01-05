import React from 'react';
import Product from './Product';
import { v4 as uuid } from 'uuid';

function Category(props) {

    const {data , onClick, cart} = props;

    const productList = data.map(
        item =>
            <Product
                key={ uuid() }
                item={item}
                onClick={onClick}
                disabled={ cart.includes(item) }
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
