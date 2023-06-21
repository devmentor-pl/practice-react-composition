import React from "react";
import Product from "./Product";

function Category(props) {
  const { products } = props;

  


  const addItem = (i) => {
  
    props.onClick(i)

  }

  const disabelBtn =(e) =>{
    e.target.disabed = true
  }

  const list = products.map((i, index) => {
    return (
      <Product
        onClick={() => addItem(i)}
        key={index}
        id={i.id}
        name={i.name}
        price={i.price}
        disable={props.checkCart(i.id)?true:false}
      />
    );
  });

  return (
    <section>
      <h2>Category</h2>
      <ul>{list}</ul>
    </section>
  );
}

export default Category;
