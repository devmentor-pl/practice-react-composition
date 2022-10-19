import React from 'react';

function Category(props) {
    return (
        <div>
            <h2>Category</h2>
            <ul>
                { props.children }
            </ul>
       </div>
   )
}

export default Category;