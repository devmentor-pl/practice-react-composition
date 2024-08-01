import React from 'react';
import Product from './Product';

function Category(props) {
    const list = props.data.map(item =>{
        return <Product key={item.id} 
        name={item.name} price={item.price} isCategory={true} 
        isProductInCart={props.isProductInCart(item.id)} 
        onClick={() => props.onClick(item)}
        />
    })
    return (
        <>
            <h2>Category</h2>
            <ul>{list}</ul>
        </>

    )
}

export default Category;