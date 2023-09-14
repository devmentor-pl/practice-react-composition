import React from 'react';
import Product from './Product';

function Cart(props) {
	const { cartItems, onRemoveFromCart } = props;
	return (
		<div className='cart'>
			<h2>Cart</h2>
			{cartItems.map(cartItem => (
				<Product key={cartItem.id} product={cartItem} isCart={true} handleClick={onRemoveFromCart} />
			))}
		</div>
	);
}

export default Cart;
