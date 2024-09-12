import React from 'react';
import Product from './Product';

function Category(props) {
    const {data, onClick, cartState} = props;
    const products = data.map(
        item => 
            <Product
                content={'add'}
                key={ data.id }
                item={item}
                onClick={onClick}
                disabled={cartState.includes(item.id)}
            ></Product>
    )   

    return (
        <h2>Category</h2>,
        <ul>
            {products}
        </ul>
    )
}

export default Category;