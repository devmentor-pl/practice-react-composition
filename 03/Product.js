import React from "react";

const Product = (props) => {
    const { data, isCategory, isCart, addToCart, removeFromCart, inCart } = props
    const buttonHandler = () => {
        if (isCategory) {
            const item = data

            addToCart(item)
        }
        if (isCart) {
            removeFromCart(data.id)
        }
    }


    return (
        <li>
            <span>{data.name}</span><span> {data.price}PLN </span>
            <button disabled={inCart} onClick={buttonHandler}>{isCategory ? 'DODAJ DO KOSZYKA' : 'USUŃ Z KOSZYKA'}</button>
        </li>
    )
}

export default Product