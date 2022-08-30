import React from 'react'

function Product (props) {
  const { product, addProduct, deleteProduct, isCart } = props
  return (
    <div>
        {`${product.name} : ${product.price}`}
        <button onClick={() => addProduct(product)} disabled={isCart}>Dodaj do koszyka</button>
        <button onClick={() => deleteProduct(product)} disabled={!isCart}>Usuń z koszyka</button>
    </div>
  )
}

export default Product
