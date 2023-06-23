import React from "react";
import Product from "./Product";

function Category(props) {
  const { products, add } = props;

  const list = products.map((product) => (
    <Product
      onClick={() => add(product)}
      key={product.id}
      id={product.id}
      name={product.name}
      price={product.price}
      disabled={
        props.cart.find((item) => item.id === product.id) ? true : false
      }
      button={"Kup teraz"}
    ></Product>
  ));
  return (
    <>
      <h2>Category</h2>
      <ul>{list}</ul>
    </>
  );
}

export default Category;
