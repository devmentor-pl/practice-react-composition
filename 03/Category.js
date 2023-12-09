import React, { Children } from 'react';

function Category(props) {
    const { children } = props
    return (
        <>
        <h2>Category</h2>
        {children}
        </>
    ) 
}

export default Category;