import React from 'react'

function Product({name, price, id, isCategory, onClick, isProductInCart}) {
  return (
        <li key={id}>
            <h2>{name}</h2>
            <p>{price}</p>
            <button onClick={onClick} disabled={isProductInCart}>{isCategory ? 'Dodaj do koszyka' : 'Usuń z koszyka'}</button>
        </li>
    )
}

export default Product