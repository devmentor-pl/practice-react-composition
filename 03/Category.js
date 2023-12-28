import React from 'react';
import Product from './Product';

function Category({ products, addToCart, cart }) {
    const isProductInCart = (product) => cart.some(item => item.id === product.id);

    return (
        <div>
            <h2>Kategoria</h2>
            {products.map(product => (
                <Product
                    key={product.id}
                    product={product}
                    onActionClick={() => addToCart(product)}
                    isDisabled={isProductInCart(product)}
                />
            ))}
        </div>
    );
}

export default Category;