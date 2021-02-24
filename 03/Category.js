import React from 'react';
import Product from './product.js'

function Category(props) {
    const {list} = props;
    return (
    <>
        <h2>Category</h2>
        <ul>{list}</ul>
    </>
    )
}

export default Category;