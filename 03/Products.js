import React from "react";

const Product = ({ item, isCart, handleClick, buttonDisabled }) => {
  const { name, price, id } = item;
  return (
    <li>
      <p>
        {name}
        <span> - {price}</span>
      </p>
      <button disabled={buttonDisabled} onClick={() => handleClick(id)}>
        {!isCart ? "usuń z koszyka" : "dodaj do koszyka"}
      </button>
    </li>
  );
};

export default Product;
