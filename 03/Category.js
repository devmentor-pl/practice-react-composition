import React from 'react';
import Product from './Product';

function Category(props) {
    const { data, onClickAdd } = props

    return (
        <section>
            <h2>Category</h2>

            {data.map(element => {
                return (
                    <Product isCategory={true} onClickAdd={onClickAdd} productName={element.name} productPrice={element.price}></Product>
                )
            })}
        </section>
    )
}
export default Category;