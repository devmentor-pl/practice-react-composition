import React from 'react';
import Product from './Product'

function Category(props) {
    return (
        <>
            <h2>Category</h2>
            <ul>{ props.children }</ul>
        </>
    )
}

export default Category;