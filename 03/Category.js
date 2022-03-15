import React from 'react';
import Product from './Product';

const Category = props => {
    const {addProduct,data,isInCart} = props;
    console.log(props, 'Category props');

    const list = data.map(item =>
        <Product data={item} key={item.id} addProduct={addProduct} textButton={'Dodaj'} isCart={false} isInCart={isInCart} type={'category'}/>
    )

    return (
        <>
            <h2>Category</h2>
            <ul>{list}</ul>
        </>
        )
    }

export default Category;
