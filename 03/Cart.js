import React from 'react';

function Cart(props) {
  const list = React.Children.map(props.children, (child) => {
    return <li>{child}</li>;
  });

  return (
    <>
      <h2>Cart</h2>
      <ul>{list}</ul>
    </>
  );
}

export default Cart;
