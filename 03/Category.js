import React from 'react';
import Product from './Product';

const Category = props => {
    const {addProduct,data,cart} = props;

    const list = data.map(item =>
        <Product data={item} key={item.id} addProduct={addProduct} textButton={'Dodaj'} isCart={false} cart={cart}/>
    )

    return (
        <>
            <h2>Category</h2>
            <ul>{list}</ul>
        </>
        )
    }

export default Category;
