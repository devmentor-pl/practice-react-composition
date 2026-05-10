import React from 'react';
import { Product } from './Product';

function Category({ data, isCategory, onAddToCart, isInCart}) {
	const list = data.map(el => (
		<Product
			key={el.id}
			name={el.name}
			price={el.price}
			isCategory={isCategory}
			onAddToCart={onAddToCart}
			disabled={isInCart(el.name)}
		/>
	));

	return (
		<>
			<h2>Wybierz produkty:</h2>
			<ul>{list}</ul>
		</>
	);
}

export default Category;
