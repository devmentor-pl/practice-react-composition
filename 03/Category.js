import React from 'react';
import Product from './Product';

function Category(props) {
	const { data, onClick } = props;

	const list = data.map((item) => {
		return (
			<Product
				isCategory={true}
				key={item.id}
				item={item}
				onClick={() => onClick(item)}
			/>
		);
	});

	return (
		<React.Fragment>
			<h2>Category</h2>
			<ul>{list}</ul>
		</React.Fragment>
	);
}

export default Category;
