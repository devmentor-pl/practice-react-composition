import React from "react";

const Product = (props) => {
  const { product } = props;
  console.log(product);
  return (
    <div>
      <span>{product.name}</span>
    </div>
  );
};

export default Product;
