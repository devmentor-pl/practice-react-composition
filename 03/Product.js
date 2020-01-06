import React from 'react';

const Product = props => {

    const {id,name,price,children} = props;

    return(
        <li className="product" data-id={id}>
            <span> {name}</span>
            <span> {price} PLN</span>
            {children}
        </li>
        
    )

}

export default Product;