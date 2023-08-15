import React from 'react';
import Product from './Product';

function Category(props) {
    const { items, addToCart, cart } = props

    const list = items.map(item => <Product
        key={item.id}
        name={item.name}
        price={item.price}
        isCategory={true}
        addToCart={addToCart}
        id={item.id}
    />)

    return (
        <>
            <h2>Category</h2>
            {list}
        </>
    )
}

export default Category;