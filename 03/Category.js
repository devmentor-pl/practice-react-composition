import React from 'react';
import Product from './Product';

function Category({ data, addProduct, cart }) {
    return (
        <>
            <h1>Category</h1>
            <ul>
                {data.map(({ id, name, price }) => (
                    <Product 
                        key={id}
                        id={id}
                        name={name}
                        price={price}
                        addProduct={addProduct}
                        isCategory={true}
                        cart={cart}
                    />
                ))}
            </ul>
        </>
    );
};

export default Category;