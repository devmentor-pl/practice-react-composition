import React from "react";
import Product from "./Product";

function Cart(props) {
  const list = props.items.map((item) => (
    <Product
      handleRemove={props.handleClick}
      key={item.id}
      isCategory={false}
      isCart={true}
      item={item}
    />
  ));
  return <ul>Cart: {list}</ul>;
}

export default Cart;
