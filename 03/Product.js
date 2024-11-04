import React from "react";

function Product(props) {
  const { id, name, price } = props.item;
  const { isCategory, isCart, handleAdd, handleRemove } = props;
  return (
    <li>
      <header>
        <p>
          Product name: {name} / Price: {price}
        </p>
      </header>

      <button onClick={() => handleAdd(id)} disabled={isCart}>
        Add to Cart
      </button>
      <button onClick={() => handleRemove(id)} disabled={isCategory}>
        Remove from Cart
      </button>
    </li>
  );
}

export default Product;
