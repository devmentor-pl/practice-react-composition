import React from 'react';

function Category(props) {
    const {children} = props
    return (
        <div>
            <h2>Category</h2>
            {children}
        </div>
   )
}

export default Category;