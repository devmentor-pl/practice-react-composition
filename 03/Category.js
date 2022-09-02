import React from 'react';

const Category = (props) =>{
    const {children} = props
    return (
        <div>
            <h1>Category</h1>
            {children}
           
        </div>
   )
}

export default Category;