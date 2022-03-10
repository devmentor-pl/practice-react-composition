import React from 'react';

const Product = props => {
    const {name,price,disabled} = props.data;
    const {addProduct} = props;
    return (
        <>
            <li>
                <h4>{name}</h4>
                <p>Cena: {price}</p>
                <button onClick={() => addProduct(props.data)} disabled={disabled} >Dodaj</button>
            </li>
        </>
    )
}

export default Product;