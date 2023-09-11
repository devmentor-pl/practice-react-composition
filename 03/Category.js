import React from 'react';
import Product from './Product';

function Category(props) {
	const { items } = props;
	return (
		<>
			<h2>Category</h2>
			<Product onAddToCart={onAddToCart} items={items} />
		</>
	);
}

export default Category;
