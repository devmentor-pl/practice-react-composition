import React from 'react';

export default function Product(props) {
  const { onAdd, onRemove, product, isCategory } = props;
  const { name, price, isCart = false } = product

  const btn = () => {
    if (isCart && !isCategory) {
      return <button onClick={() => onRemove(product)}>usuń</button>
    }
    return <button disabled={isCart} onClick={() => onAdd(product)}>dodaj do koszyka</button>
  }

  return (
    <li>
      <p style={{ 'display': 'inline-block', 'marginRight': '30px' }}>{name}: <strong>{price} zł</strong></p>
      {btn()}
    </li>
  )
}