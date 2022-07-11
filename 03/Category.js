import React from 'react';

function Category(props) {
    const {children} = props
    return (
        <div>
            <h2>Category</h2>
            <div>{children}</div>
        </div>
    )
}

export default Category;