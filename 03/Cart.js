import React from 'react';
import { Product } from './Product';

function Cart({ cart, isCart, onRemoveFromCart }) {
	const list = cart.map(el => (
		<Product key={el.id} name={el.name} price={el.price} isCart={isCart} onRemoveFromCart={onRemoveFromCart} />
	));

	return (
		<>
			<h2>Twój koszyk:</h2>
			{cart.length === 0 ? <p>Twój koszyk jest pusty.</p> : <ul>{list}</ul>}
		</>
	);
}

export default Cart;
