import React from 'react'
import Product from './Product';
import data from './data.json'

function Category(props) {
    
    return (
        <div>
            <h2>Category</h2>
            <ul>
            {props.children}
            </ul>
        </div>
    ) 
}

export default Category;