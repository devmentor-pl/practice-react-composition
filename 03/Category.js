import React from 'react';
import Product from './Product';

const Category = props => {
    const {addProduct,data,isInCart} = props;

    const list = data.map(item =>
        <Product data={item} key={item.id} addProduct={addProduct} textButton={'Dodaj'} isCart={false} disabled={isInCart}/>
    )

    return (
        <>
            <h2>Category</h2>
            <ul>{list}</ul>
        </>
        )
    }

export default Category;
