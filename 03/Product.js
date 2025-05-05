import React from "react";

const Product = (props) => {

    const {product, handleClick, isCategory} = props

    return (
        <li key={product.id}>
            <p>{product.name}</p>
            <p>{product.price} zł</p>
            <button onClick={() => handleClick(product)}>{isCategory? 'Add to cart' : 'Remove from cart'}</button>
        </li>
    )


}

export default Product;