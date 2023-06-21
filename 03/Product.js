import React from "react";

function Product(props) {

  const {onClick} = props

  console.log(props)
 

 


  return (
    <li>
     {props.name} cena: {props.price} PLN{" "}
      <button onClick={onClick} disable ={props.disable}>Dodaj do koszyka</button>
    </li>
  );
}

export default Product;
