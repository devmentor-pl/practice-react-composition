import React from "react"

function Product(props) {

    const { isCategory, productName, productPrice, onClickAdd, onClickDelete, index } = props

    if (isCategory) {
        return (

            <p>{productName} {productPrice} zł <button data-name={productName} data-price={productPrice} onClick={onClickAdd}>Dodaj do koszyka</button></p>

        )
    }
    else
        return (

            <p>{productName} {productPrice} zł <button data-index={index} data-name={productName} data-price={productPrice} onClick={onClickDelete} >Usuń</button></p>

        )




}



export default Product