import React from 'react';
import Product from './Product';

function Category(props) {

    const {addToCart, data} = props;

    const handleClick = (product) => {
        addToCart(product)
    }

    return (
        <ul>
            {data.map((product) => (
                // <li key={product.id}>
                //     <p>{product.name}</p>
                //     <p>{product.price} zł</p>
                //     <button onClick={() => handleClick(product)}>Add to cart</button>
                // </li>
                <Product product={product} handleClick={handleClick} isCategory={true}/>
            ))}
        </ul>
    )
}

export default Category;
