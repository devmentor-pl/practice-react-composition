import React from 'react';

function Category(props) {
    const { children } = props;
    return (
        <article>
            <h2>Category</h2>
            <ul>{children}</ul>
        </article>
    )
}

export default Category;