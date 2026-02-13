import React from 'react';
import Product from './Product';
import data from '../data.json'

function Category(props) {

    const {cart, addToCart} = props

    return(
        <div className="category">
            <h2 className="category__title">Category</h2>
            <div className="category__list">
                {data.products.map(product => (
                    <Product 
                    key={product.id}
                    product={product}
                    isCategory={addToCart}
                    inCart={cart.some(item => item.id === product.id)} 
                    />
                ))}
            </div>
        </div>
    ) 
}

export default Category;