import React from 'react'

function Product (props) {
  const { product, clickHandler , isCart, inCart, buttonValue } = props
  return (
    <li>
        {`${product.name} : ${product.price}`}
        <button onClick={() => clickHandler(product)} disabled={isCart ? false : inCart ? true : false}>{buttonValue}</button>
    </li>
  )
}

export default Product
