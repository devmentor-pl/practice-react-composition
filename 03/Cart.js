import React from "react";
import Product from "./Product";
function Cart(props) {
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
            isCart={true}
            isCategory={false}
            deleteItem={props.deleteItem}
          ></Product>
        );
      })}
    </ul>
  );
}

export default Cart;
