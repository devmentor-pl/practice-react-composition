import React from 'react';

function Category(props) {
    const {children} = props;
    return (
        <React.Fragment>
            <h2>Category</h2>
            <ul>{children}</ul>
        </React.Fragment>
    )
}

export default Category;