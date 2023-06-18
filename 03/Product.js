import React from "react";

function Product(props) {

  const {onClick} = props

  //nie rozumiem dlaczego destrukturyzacja nie działa :( wszędzie zastosowałam tą samą nazwe dla props 



  return (
    <li>
     {props.name} cena: {props.price} PLN{" "}
      <button onClick={onClick} disabled={false}>Dodaj do koszyka</button>
    </li>
  );
}

export default Product;
