import React from 'react';
import Product from './Product';

function Category(props) {
	const { list } = props;
	return (
		<>
			<h2>Category</h2>
			<Product list={list} />
		</>
	);
}

export default Category;
