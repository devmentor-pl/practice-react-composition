import React from 'react';

function Category(props) {
    return (
        <div>
            <h2>Category</h2>
            <div>{props.children}</div>
        </div>
    )
}

export default Category;