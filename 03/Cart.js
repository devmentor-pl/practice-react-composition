import React from 'react';

const Cart = (props) => {
    const {children} = props;
    const list = React.Children.map(children, (child) => {
        return (
          <li>
            {child}
          </li>
        )
    })
    return (
        <>
            <h2>Cart</h2>
            <ul>{list}</ul>
        </>
    )
}

export default Cart;