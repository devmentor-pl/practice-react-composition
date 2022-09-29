import React from "react";
import Button from "./Button";

function Product(props) {
  const { name, price, isCart, isCategory, id, addItem, deleteItem } = props;
  return (
    <li>
      <p>{name}</p>
      <p>{price}</p>
      <Button
        onClick={() => addItem(id, name, price, isCart)}
        disabled={isCategory ? false : true}
        name={"Dodaj"}
      ></Button>
      <Button
        onClick={() => deleteItem(id)}
        disabled={isCart ? false : true}
        name={"Usuń"}
      ></Button>
    </li>
  );
}
export default Product;
