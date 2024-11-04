import React from "react";
import Product from "./Product";

function Category(props) {
  const list = props.items.map((item) => (
    <Product
      key={item.id}
      handleAdd={props.handleClick}
      isCategory={true}
      isCart={item.isCart}
      item={item}
    />
  ));
  return <ul>Category: {list}</ul>;
}

export default Category;
