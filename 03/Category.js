import React from "react";
import Product from "./Product";

function Category(props) {
  const { data } = props;
  return (
    <ul>
      {data.map((item) => {
        return (
          <Product
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            isCategory={true}
            isCart={false}
            addItem={props.addItem}
          ></Product>
        );
      })}
    </ul>
  );
}

export default Category;
