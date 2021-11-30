import React from 'react';

const Product = (props) => {
  const { item, addToTheCart, removeFromTheCart, isCategory, isCart } = props;

  const renderButton = () => {
    if (isCategory) {
      return (
        <button onClick={addToTheCart} disabled={item.isCart ? true : false}>
          Dodaj do koszyka
        </button>
      );
    } else if (isCart) {
      return <button onClick={removeFromTheCart}>Usuń z koszyka</button>;
    }
  };

  return (
    <>
      <p>
        {item.name}, {item.price} zł
      </p>
      {renderButton()}
    </>
  );
};

export default Product;
