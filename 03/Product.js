import React from "react";

export function Product({
  dataItem: { id, name, price },
  addItem,
  isProduct,
  isCart,
  removeItem,
}) {
  function handlerClick(id) {
    if (typeof addItem === "function") {
      addItem(id);
    }
  }
  return (
    <li>
      {id} {name} {price}
      {isCart ? (
        <button onClick={() => removeItem(id)}>Usun</button>
      ) : (
        <button disabled={isProduct} onClick={() => handlerClick(id)}>
          Kup
        </button>
      )}
    </li>
  );
}
