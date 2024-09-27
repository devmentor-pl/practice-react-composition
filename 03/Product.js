import React from 'react';

function Product(props) {
  const {add, remove, data, isCart, inCart} = props
  const {id, name, price} = data
  
  const addHandler = (id) => {
    if(typeof add === 'function') {
      console.log('click', id)
      add(id)
    }
  }

  const removeHandler = (id) => {
    if(typeof remove === 'function') {
      remove(id)
    }
  }

  return (
      <li>
         <h1>{name}</h1>
         <p>cena: {price} zł</p>
         {inCart ?
         <button disabled={isCart ? true : false} onClick={() => removeHandler(id)}>usuń</button>
         :
         <button disabled={isCart ? true : false} onClick={() => addHandler(id)}>kup</button>
         }
     </li>
    )
}

export default Product;