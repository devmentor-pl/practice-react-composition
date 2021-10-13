import React from 'react';
import Product from './Product'

function Category (props) {
    const {items, onClick} = props;

    return (
        <>
            <h2>Category</h2>
            <ul><Product onClick = {onClick} items ={items} /></ul>
        </>
    )
}

export default Category;