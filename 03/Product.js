import React from "react";

function Product(props) {
  const {data, inCart, isCart, clickHandler} = props;

  function handleClick(id) {
    if(typeof clickHandler === 'function') {
      clickHandler(id);
    }
  }

  return (
      <li>
          {data.name} ({data.price})
          {
            isCart ? <button onClick={() => handleClick(data.id)}>Usuń</button> : <button disabled={inCart ? true : false} onClick={() => handleClick(data.id)}>Dodaj</button>
          }
      </li>
  )
}

export default Product;