import React from 'react';

function Product(props) {
    const {item} = props
    return (
        <div>
            <h2>Product</h2>
            <div>
                {item.name} - {item.price}
            </div>
        </div>
    )
}

export default Product;