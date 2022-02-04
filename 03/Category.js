import React from "react";
import { v4 as uuid } from "uuid";

function Category(props) {
  const { items } = props;

  console.log(items);

  const categoryStyle = {
    display: "flex",
    flexDirection: "column",
    width: "20vw",
    border: "1px solid grey",
    margin: "10px",
    padding: "10px",
  };

  function addToCart(item) {
    // console.log(item);
    props.addItemToCart(item);
  }

  const categoryItems = props.items.map((item) => {
    return (
      <section key={uuid()} style={categoryStyle}>
        <p>{item.name}</p>
        <p> cena: {item.price}</p>
        <button onClick={() => addToCart(item)}>Dodaj do koszyka</button>
      </section>
    );
  });
  return (
    <>
      <h2>Category</h2>
      {categoryItems}
    </>
  );
}

export default Category;
