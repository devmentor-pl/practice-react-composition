import React from 'react';

function Product(props) {
  const {
    id,
    name,
    price,
    isCategory,
    isCart,
    onAddToCart,
    onRemoveFromCart,
    inCart,
  } = props;

  return (
    <li className="product">
      <h3>{name}</h3>
      <p>Cena: {price} PLN</p>
      {isCategory && !inCart && (
        <button onClick={() => onAddToCart(id)}>Dodaj do koszyka</button>
      )}
      {isCategory && inCart && <button disabled>Już w koszyku</button>}
      {isCart && (
        <button onClick={() => onRemoveFromCart(id)}>Usuń z koszyka</button>
      )}
    </li>
  );
}

export default Product;