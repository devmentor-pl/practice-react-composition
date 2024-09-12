import React from "react";

function Product({ itemData, button: { buttonText, disabled, onClick } }) {
    const { name, price } = itemData;

    return (
        <li>
            <h3>Product name: {name}</h3>
            <p>Price: {price}</p>
            <button
                disabled={disabled}
                onClick={() => onClick(itemData)}
            >
                {buttonText}
            </button>

        </li>
    );
}

export default Product;