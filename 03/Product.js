import React from 'react';

const Product = ({ name, price, isCategory, isCart, onAddToCart, disabled, onRemoveFromCart }) => {
	const addProduct = () => {
		onAddToCart(name);
	};

	const removeProduct = () => {
		onRemoveFromCart(name);
	};

	return (
		<li>
			{name} Cena: {price} zł
			{isCategory && (
				<button onClick={addProduct} disabled={disabled}>
					Dodaj do koszyka
				</button>
			)}
			{isCart && <button onClick={removeProduct}>Usuń z koszyka</button>}
		</li>
	);
};

export { Product };
