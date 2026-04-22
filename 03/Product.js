import React from "react";

const Product = (props) => {
  const { item, remove = null, add = null } = props;

  return (
    <li>
      <h3>{item.name}</h3>
      <p>Cena: {item.price}zł</p>
      <button onClick={remove ? (() => remove(item)) : (() => add(item))}>{item.isInCart ? "Usuń z koszyka" : "Dodaj do koszyka"}</button>
    </li>
  )
}

export default Product