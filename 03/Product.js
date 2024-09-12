import React from "react";

const Product = (props) => {
  const { data, onClick, isInCart, btnText = "Dodaj" } = props;
  const { name, price } = data;

  return (
    <>
      <p>
        {name}:{price}PLN
      </p>
      <button
        disabled={isInCart}
        onClick={() => onClick(data)}
      >
        {btnText}
      </button>
    </>
  );
};

export default Product;
