import React from 'react';

function Category(props) {

    const {children} = props;
    return (
        <div className='category'>
            <h2>Category</h2>
            <ul>{children}</ul>
        </div>
    )
}

export default Category;