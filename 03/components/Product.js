import React from "react";

function Product(props) {
    const {item, buttonText, handleClick, buttonStatus,} = props;

    return (
        <li>{item.name}
            <button disabled={buttonStatus} onClick={() => handleClick(item.id)}>{buttonText}</button>
        </li>
    )
}

export default Product;