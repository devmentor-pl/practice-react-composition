import React from 'react';

function Category(props) {
    // console.log(props);
    const {children} = props;

    return (
        <section>
            <h2>Category</h2>
            {children}
        </section>
        
    )
}

export default Category;