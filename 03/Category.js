import React from 'react';
import Product from './Product';
function Category(props) {
    const { data, addToCartHandler } = props;
    const list = data.map(item => <Product key={item.id} name={item.name} price={item.price} isCategory={true} id={item.id} addToCartHandler={addToCartHandler} />)
    return <section>
        <h2>Category</h2>
        <ul>{list}</ul>
    </section>
}

export default Category;