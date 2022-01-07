import React from 'react';

import Product from './Product'

function Category(props) {
    const {productsList, isProductPurchased, addToCart} = props
    const categoryContent = productsList.map(product => {
        return <Product key={ product.id } product={ product } buttonContent={{ isDisabled: isProductPurchased(product.id), text: 'Dodaj do koszyka', clickHandler: addToCart }} />
    })
    return <section>
        <h2>Category</h2>
        { categoryContent }
    </section>
}

export default Category;