import React from 'react';

const Category = (props) => {
    const {children} = props;
    const list = React.Children.map(children, (child) => {        
        return (
          <li>
            {child}
          </li>
        )
    })
    return (
        <>
            <h2>Category</h2>
            <ul>{list}</ul>
        </>
    )
}

export default Category;