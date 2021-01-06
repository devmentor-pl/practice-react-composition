import React from 'react';

function Product(props) {
    const {isCategory, isCart, product, isProductPurchased, addToCart, removeFromCart} = props
    let productContent = null

    if(isCategory) {
        productContent = <button disabled={ isProductPurchased(product.id) } onClick={ () => addToCart(product) } >Dodaj do koszyka</button>
    }

    if(isCart) {
        productContent = <button onClick={ () => removeFromCart(product) } >Usuń z koszyka</button>
    }

    return <section>
        <label>{ product.name }</label>
        { productContent }
    </section>
}

export default Product;