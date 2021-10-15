import React from 'react';
import Product from './Product'

function Category (props) {
    const {items, onClick} = props;

    return (
        <>
            <h2>Category</h2>
            <ul> { 
                items.map((item) =><Product onClick = {onClick} item ={item} />) 
            }
            </ul>
        </>
    )
}

export default Category;