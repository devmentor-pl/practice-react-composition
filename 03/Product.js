import React from 'react'

function Product(props) {
  const {data, isCategory, isInCart, clickHandler} = props

  function handleClick(id) {
    if(typeof clickHandler === 'function') {
      clickHandler(id)
    }
  }

  return (
    <li>
      {data.name} - {data.price}zł
      {
        isCategory 
          ? 
          <button 
            onClick={() => handleClick(data.id)}
            disabled={isInCart ? true : false}
          >
            dodaj do koszyka
          </button>
          : 
          <button
            onClick={() => handleClick(data.id)}
          >
            usuń z koszyka
          </button>
      }
    </li>
  )
}

export default Product