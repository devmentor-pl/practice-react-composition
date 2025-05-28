import React from "react";

function Product({
  item,
  isCategory,
  isCart,
  isInCart,
  addToCart,
  removeFromCart,
}) {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>
        {isCategory && (
          <button onClick={() => addToCart(item)} disabled={isInCart}>
            Dodaj do koszyka
          </button>
        )}
        {isCart && (
          <button onClick={() => removeFromCart(item.id)}>
            Usuń z koszyka
          </button>
        )}
      </td>
    </tr>
  );
}

export default Product;
