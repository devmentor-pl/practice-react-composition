import React from "react";

const Product = (props) => {
    const { data, isCategory, onClick, inCart } = props
    const buttonHandler = () => {
        onClick(data)
    }

    return (
        <li>
            <span>{data.name}</span><span> {data.price}PLN </span>
            <button disabled={inCart} onClick={buttonHandler}>{isCategory ? 'DODAJ DO KOSZYKA' : 'USUŃ Z KOSZYKA'}</button>
        </li>
    )
}

export default Product