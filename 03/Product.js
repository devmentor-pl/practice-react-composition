import React from "react";

function Product(props) {
  const { onClick, disabled, button } = props;

  return (
    <li>
      {props.name} {props.price}PLN{" "}
      <button onClick={onClick} disabled={disabled}>
        {button}
      </button>
    </li>
  );
}

export default Product;
