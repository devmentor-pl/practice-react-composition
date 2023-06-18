import React from "react";
import Product from "./Product";

function Category(props) {
  const { products } = props;

  const list = products.map((i, index) => {
    return <Product key={index} id={i.id} name={i.name} price={i.price} />;
  });

  return (
    <section>
      <h2>Category</h2>
      <ul>{list}</ul>
    </section>
  );
}

export default Category;
