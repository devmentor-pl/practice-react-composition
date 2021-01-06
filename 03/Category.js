import React from 'react';

import Product from './Product'

function Category(props) {
    const {productsList, isProductPurchased, addToCart} = props
    const categoryContent = productsList.map(product => {
        return <Product key={ product.id } isCategory={ true } isProductPurchased={ isProductPurchased } product={ product } addToCart={ addToCart } />
    })
    return <section>
        <h2>Category</h2>
        { categoryContent }
    </section>
}

export default Category;