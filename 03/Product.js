import React from "react"

function Product(props) {
  const { product, addToCart, removeFromCart, isCategory, isAvailable } = props
  const { id, name, price } = product
  return (
    <>
      {
        isCategory ?
          <li key={id + 'a'}>
            {name} {price}zł
            <button
              onClick={addToCart}
              disabled={!isAvailable}
            >
              Add to CART
            </button>
          </li>
          :
          <li key={id + 'b'}>
            {name} {price}zł
            <button
              onClick={removeFromCart}
            >
              Remove from CART
            </button>
          </li>
      }
    </>
  )
}

export default Product