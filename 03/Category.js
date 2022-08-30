import React from 'react';

function Category(props) {
    return (
        <section>
            <h2>Category</h2>
            <ul>
                {props.children}
            </ul>
        </section>
        
    )
}

export default Category;