import React from "react";

const Product = (props) => {
    const { name, price, isCategory, isCart, addToCart, id, removeFromCart } = props

    const buttonHandler = () => {
        if (isCategory) {
            const item = {
                id,
                name,
                price
            }
            addToCart(item)
        }
        if (isCart) {
            removeFromCart(id)
        }
    }


    return (
        <li>
            <span>{name}</span><span> {price}PLN </span>
            <button disabled={false} onClick={buttonHandler}>{isCategory ? 'DODAJ DO KOSZYKA' : 'USUŃ Z KOSZYKA'}</button>
        </li>
    )
}

export default Product