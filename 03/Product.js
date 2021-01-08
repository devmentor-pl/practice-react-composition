import React from 'react';

function Product(props) {
    const {product, buttonContent} = props

    return <section>
        <label>{ product.name }</label>
        { <button disabled={ buttonContent.isDisabled } onClick={ () => buttonContent.clickHandler(product) } >{ buttonContent.text }</button> }
    </section>
}

export default Product;