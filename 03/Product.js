import React from "react";

const Product = ({ data, isDisabled, addItemToCart, removeItemFromCart, name, price, id, isCart, isCategory }) => {

    return (
        <>
            {isCategory &&
                <li key={id}>
                    <header>{name}</header>
                    <span>{price}</span>
                    <button disabled={isDisabled(id)} onClick={() => { addItemToCart(data) }}>Buy</button>
                </li>
            }
            {isCart &&
                <li key={id}>
                    <header>{name}</header>
                    <span>{price}</span>
                    <button onClick={() => { removeItemFromCart(id) }}>Remove</button>
                </li>
            }
        </>
    )
};

export default Product;