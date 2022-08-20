import React from 'react';

function Product(props) {

    const {name, price, onClick, disabled, btnText} = props

    return (
        <li>    
            <h2>{name}</h2>
            <p>Cena: {price} zł</p>
            <button onClick={onClick} disabled={disabled}> {btnText}</button> 
        </li>
   ) 
}

export default Product;