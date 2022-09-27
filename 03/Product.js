import React from "react";

function Product(props) {
  const { name, price, isCart, isCategory, id, addItem, deleteItem } = props;
  return (
    <li>
      <p>{name}</p>
      <p>{price}</p>
      <button
        onClick={()=>addItem(id, name, price, isCart)}
        disabled={isCategory ? false : true}
      >
        Dodaj
      </button>
      <button
        disabled={isCart ? false : true}
        onClick={()=> deleteItem(id)}
      >
        Usuń
      </button>
    </li>
  );
}
export default Product;
